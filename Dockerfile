# Builds the client here rather than shipping a committed one. dist/ used to be
# checked in because public/assets could not be regenerated from a clean clone;
# assets-src/ is complete now, so this runs the same steps render.yaml does and
# the two deployment paths cannot drift apart.
FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY tsconfig.json tsconfig.server.json vite.config.ts index.html ./
COPY scripts ./scripts
COPY assets-src ./assets-src
COPY public ./public
COPY src ./src
RUN npm run assets && npm run build:client && npm run build

FROM node:20-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/build ./build
# express serves this at the same origin as the room server, so the client's
# wss:// connection needs no extra routing
COPY --from=build /app/dist ./dist
# The leaderboard persists to <cwd>/data. Own it so the non-root user can write,
# and mount a volume over it in compose or it resets with every container.
RUN mkdir -p /app/data && chown -R node:node /app/data
USER node
EXPOSE 2567
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||2567)+'/leaderboard').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "build/server/index.js"]
