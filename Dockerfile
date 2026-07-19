# Server-only build. The client in dist/ is committed and shipped as-is: the
# vite build reads public/assets, which is git-ignored (the packs are not all
# CC0-redistributable), so `vite build` here would replace the committed bundle
# with an asset-less one. Rebuild the client on a machine with public/assets
# populated (npm run assets && npm run build:client) and commit the result.
FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.server.json ./
COPY src ./src
RUN npm run build

FROM node:20-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/build ./build
# express serves this at the same origin as the room server, so the client's
# wss:// connection needs no extra routing
COPY dist ./dist
USER node
EXPOSE 2567
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||2567)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "build/server/index.js"]
