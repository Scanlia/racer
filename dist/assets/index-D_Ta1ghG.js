(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="166",Df=0,Rl=1,Uf=2,Su=1,Nf=2,Zn=3,ni=0,an=1,pn=2,vi=0,ws=1,Is=2,Cl=3,Pl=4,Of=5,Oi=100,Ff=101,Bf=102,zf=103,kf=104,Hf=200,Vf=201,Gf=202,Wf=203,ic=204,sc=205,$f=206,Xf=207,jf=208,qf=209,Kf=210,Yf=211,Zf=212,Jf=213,Qf=214,ed=0,td=1,nd=2,bo=3,id=4,sd=5,rd=6,od=7,Ho=0,ad=1,cd=2,xi=0,ld=1,hd=2,ud=3,fd=4,dd=5,pd=6,md=7,Il="attached",gd="detached",Eu=300,Ls=301,Ds=302,Ro=303,rc=304,Vo=306,kn=1e3,zn=1001,Co=1002,Xt=1003,wu=1004,xs=1005,mn=1006,_o=1007,ei=1008,ii=1009,Au=1010,Tu=1011,fr=1012,el=1013,ki=1014,Ln=1015,Sr=1016,tl=1017,nl=1018,Us=1020,bu=35902,Ru=1021,Cu=1022,Mn=1023,Pu=1024,Iu=1025,As=1026,Ns=1027,il=1028,sl=1029,Lu=1030,rl=1031,ol=1033,vo=33776,xo=33777,yo=33778,Mo=33779,oc=35840,ac=35841,lc=35842,hc=35843,uc=36196,fc=37492,dc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,yc=37814,Mc=37815,Sc=37816,Ec=37817,wc=37818,Ac=37819,Tc=37820,bc=37821,So=36492,Rc=36494,Cc=36495,Du=36283,Pc=36284,Ic=36285,Lc=36286,dr=2300,pr=2301,ua=2302,Ll=2400,Dl=2401,Ul=2402,_d=2500,vd=0,Uu=1,Dc=2,xd=3200,yd=3201,Go=0,Md=1,pi="",Et="srgb",qt="srgb-linear",al="display-p3",Wo="display-p3-linear",Po="linear",Tt="srgb",Io="rec709",Lo="p3",Xi=7680,Nl=519,Sd=512,Ed=513,wd=514,Nu=515,Ad=516,Td=517,bd=518,Rd=519,Uc=35044,Ol=35048,Fl="300 es",ti=2e3,Do=2001;class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const cr=Math.PI/180,Os=180/Math.PI;function Dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function cl(s,e){return(s%e+e)%e}function Cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pd(s,e,t){return s!==e?(t-s)/(e-s):0}function lr(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,n){return lr(s,e,1-Math.exp(-t*n))}function Ld(s,e=1){return e-Math.abs(cl(s,e*2)-e)}function Dd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Od(s,e){return s+Math.random()*(e-s)}function Fd(s){return s*(.5-Math.random())}function Bd(s){s!==void 0&&(Bl=s);let e=Bl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(s){return s*cr}function kd(s){return s*Os}function Hd(s){return(s&s-1)===0&&s!==0}function Vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:cr,RAD2DEG:Os,generateUUID:Dn,clamp:$t,euclideanModulo:cl,mapLinear:Cd,inverseLerp:Pd,lerp:lr,damp:Id,pingpong:Ld,smoothstep:Dd,smootherstep:Ud,randInt:Nd,randFloat:Od,randFloatSpread:Fd,seededRandom:Bd,degToRad:zd,radToDeg:kd,isPowerOfTwo:Hd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Wd,normalize:xt,denormalize:Pn};class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,i,r,o,a,c,l){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],v=i[0],g=i[3],m=i[6],w=i[1],M=i[4],E=i[7],D=i[2],I=i[5],P=i[8];return r[0]=o*v+a*w+c*D,r[3]=o*g+a*M+c*I,r[6]=o*m+a*E+c*P,r[1]=l*v+u*w+h*D,r[4]=l*g+u*M+h*I,r[7]=l*m+u*E+h*P,r[2]=f*v+d*w+_*D,r[5]=f*g+d*M+_*I,r[8]=f*m+d*E+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fa.makeScale(e,t)),this}rotate(e){return this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new nt;function Ou(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){const s=mr("canvas");return s.style.display="block",s}const zl={};function ll(s){s in zl||(zl[s]=!0,console.warn(s))}function Xd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const kl=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hl=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[qt]:{transfer:Po,primaries:Io,toReference:s=>s,fromReference:s=>s},[Et]:{transfer:Tt,primaries:Io,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Wo]:{transfer:Po,primaries:Lo,toReference:s=>s.applyMatrix3(Hl),fromReference:s=>s.applyMatrix3(kl)},[al]:{transfer:Tt,primaries:Lo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hl),fromReference:s=>s.applyMatrix3(kl).convertLinearToSRGB()}},jd=new Set([qt,Wo]),_t={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!jd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Cr[e].toReference,i=Cr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Cr[s].primaries},getTransfer:function(s){return s===pi?Po:Cr[s].transfer}};function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ji;class qd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=mr("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(pa(i[o].image)):r.push(pa(i[o]))}else r=pa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yd=0;class zt extends Hs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=zn,i=zn,r=mn,o=ei,a=Mn,c=ii,l=zt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Dn(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Eu;zt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,E=(d+1)/2,D=(m+1)/2,I=(u+f)/4,P=(h+v)/4,k=(_+g)/4;return M>E&&M>D?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=I/n,r=P/n):E>D?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=I/i,r=k/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=P/r,i=k/r),this.set(n,i,r,t),this}let w=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-_)/w,this.y=(h-v)/w,this.z=(f-u)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends Hs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Zd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(h!==v||c!==f||l!==d||u!==_){let g=1-a;const m=c*f+l*d+u*_+h*v,w=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const D=Math.sqrt(M),I=Math.atan2(D,m*w);g=Math.sin(g*I)/D,a=Math.sin(a*I)/D}const E=a*w;if(c=c*g+f*E,l=l*g+d*E,u=u*g+_*E,h=h*g+v*E,g===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-a*d,e[t+2]=l*_+u*d+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new N,Vl=new Ct;class hn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Ir.subVectors(this.max,Xs),qi.subVectors(e.a,Xs),Ki.subVectors(e.b,Xs),Yi.subVectors(e.c,Xs),ri.subVectors(Ki,qi),oi.subVectors(Yi,Ki),Ai.subVectors(qi,Yi);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ai.y,Ai.x,0];return!ga(t,qi,Ki,Yi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,qi,Ki,Yi,Ir))?!1:(Lr.crossVectors(ri,oi),t=[Lr.x,Lr.y,Lr.z],ga(t,qi,Ki,Yi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new N,new N,new N,new N,new N,new N,new N,new N],En=new N,Pr=new hn,qi=new N,Ki=new N,Yi=new N,ri=new N,oi=new N,Ai=new N,Xs=new N,Ir=new N,Lr=new N,Ti=new N;function ga(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);const a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Qd=new hn,js=new N,_a=new N;class Vn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(_a)),this.expandByPoint(js.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new N,va=new N,Dr=new N,ai=new N,xa=new N,Ur=new N,ya=new N;class $o{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Dr),a=ai.dot(this.direction),c=-ai.dot(Dr),l=ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(va).addScaledVector(Dr,f),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),Ur.subVectors(n,e),ya.crossVectors(xa,Ur);let o=this.direction.dot(ya),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const c=a*this.direction.dot(Ur.crossVectors(ai,Ur));if(c<0)return null;const l=a*this.direction.dot(xa.cross(ai));if(l<0||c+l>o)return null;const u=-a*ai.dot(ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f+v*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,v=l*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,v=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=v-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,_=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(n,un),ci.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(n,un)),ci.normalize(),Nr.crossVectors(un,ci),i[0]=ci.x,i[4]=Nr.x,i[8]=un.x,i[1]=ci.y,i[5]=Nr.y,i[9]=un.y,i[2]=ci.z,i[6]=Nr.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],v=n[6],g=n[10],m=n[14],w=n[3],M=n[7],E=n[11],D=n[15],I=i[0],P=i[4],k=i[8],R=i[12],A=i[1],S=i[5],L=i[9],B=i[13],W=i[2],$=i[6],X=i[10],K=i[14],H=i[3],J=i[7],se=i[11],fe=i[15];return r[0]=o*I+a*A+c*W+l*H,r[4]=o*P+a*S+c*$+l*J,r[8]=o*k+a*L+c*X+l*se,r[12]=o*R+a*B+c*K+l*fe,r[1]=u*I+h*A+f*W+d*H,r[5]=u*P+h*S+f*$+d*J,r[9]=u*k+h*L+f*X+d*se,r[13]=u*R+h*B+f*K+d*fe,r[2]=_*I+v*A+g*W+m*H,r[6]=_*P+v*S+g*$+m*J,r[10]=_*k+v*L+g*X+m*se,r[14]=_*R+v*B+g*K+m*fe,r[3]=w*I+M*A+E*W+D*H,r[7]=w*P+M*S+E*$+D*J,r[11]=w*k+M*L+E*X+D*se,r[15]=w*R+M*B+E*K+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+g*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],g=e[14],m=e[15],w=h*g*l-v*f*l+v*c*d-a*g*d-h*c*m+a*f*m,M=_*f*l-u*g*l-_*c*d+o*g*d+u*c*m-o*f*m,E=u*v*l-_*h*l+_*a*d-o*v*d-u*a*m+o*h*m,D=_*h*c-u*v*c-_*a*f+o*v*f+u*a*g-o*h*g,I=t*w+n*M+i*E+r*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=w*P,e[1]=(v*f*r-h*g*r-v*i*d+n*g*d+h*i*m-n*f*m)*P,e[2]=(a*g*r-v*c*r+v*i*l-n*g*l-a*i*m+n*c*m)*P,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*P,e[4]=M*P,e[5]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*P,e[6]=(_*c*r-o*g*r-_*i*l+t*g*l+o*i*m-t*c*m)*P,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*d+t*c*d)*P,e[8]=E*P,e[9]=(_*h*r-u*v*r-_*n*d+t*v*d+u*n*m-t*h*m)*P,e[10]=(o*v*r-_*a*r+_*n*l-t*v*l-o*n*m+t*a*m)*P,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*P,e[12]=D*P,e[13]=(u*v*i-_*h*i+_*n*f-t*v*f-u*n*g+t*h*g)*P,e[14]=(_*a*i-o*v*i-_*n*c+t*v*c+o*n*g-t*a*g)*P,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,_=r*h,v=o*u,g=o*h,m=a*h,w=c*l,M=c*u,E=c*h,D=n.x,I=n.y,P=n.z;return i[0]=(1-(v+m))*D,i[1]=(d+E)*D,i[2]=(_-M)*D,i[3]=0,i[4]=(d-E)*I,i[5]=(1-(f+m))*I,i[6]=(g+w)*I,i[7]=0,i[8]=(_+M)*P,i[9]=(g-w)*P,i[10]=(1-(f+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zi.set(i[0],i[1],i[2]).length();const o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const l=1/r,u=1/o,h=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ti){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===ti)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Do)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ti){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*l,d=(n+i)*u;let _,v;if(a===ti)_=(o+r)*h,v=-2*h;else if(a===Do)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new N,wn=new Ie,ep=new N(0,0,0),tp=new N(1,1,1),ci=new N,Nr=new N,un=new N,Gl=new Ie,Wl=new Ct;class Dt{constructor(e=0,t=0,n=0,i=Dt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dt.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const $l=new N,Ji=new Ct,jn=new Ie,Or=new N,qs=new N,ip=new N,sp=new Ct,Xl=new N(1,0,0),jl=new N(0,1,0),ql=new N(0,0,1),Kl={type:"added"},rp={type:"removed"},Qi={type:"childadded",child:null},Ma={type:"childremoved",child:null};class St extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new Dt,n=new Ct,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new nt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(jl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return $l.copy(e).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(jl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(qs,Or,this.up):jn.lookAt(Or,qs,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(jn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),Ma.child=e,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new N,qn=new N,Sa=new N,Kn=new N,es=new N,ts=new N,Yl=new N,Ea=new N,wa=new N,Aa=new N;class In{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),An.subVectors(e,t),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){An.subVectors(i,t),qn.subVectors(n,t),Sa.subVectors(e,t);const o=An.dot(An),a=An.dot(qn),c=An.dot(Sa),l=qn.dot(qn),u=qn.dot(Sa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static isFrontFacing(e,t,n,i){return An.subVectors(n,t),qn.subVectors(e,t),An.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;es.subVectors(i,n),ts.subVectors(r,n),Ea.subVectors(e,n);const c=es.dot(Ea),l=ts.dot(Ea);if(c<=0&&l<=0)return t.copy(n);wa.subVectors(e,i);const u=es.dot(wa),h=ts.dot(wa);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(es,o);Aa.subVectors(e,r);const d=es.dot(Aa),_=ts.dot(Aa);if(_>=0&&d<=_)return t.copy(r);const v=d*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ts,a);const g=u*_-d*h;if(g<=0&&h-u>=0&&d-_>=0)return Yl.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Yl,a);const m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=cl(e,1),t=$t(t,0,1),n=$t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return _t.fromWorkingColorSpace(Yt.copy(this),e),Math.round($t(Yt.r*255,0,255))*65536+Math.round($t(Yt.g*255,0,255))*256+Math.round($t(Yt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,r=Yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Et){_t.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Fr);const n=lr(li.h,Fr.h,t),i=lr(li.s,Fr.s,t),r=lr(li.l,Fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Me;Me.NAMES=ku;let op=0;class cn extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=ws,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class en extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new N,Br=new je;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ll("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}}class hl extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ap=0;const _n=new Ie,ba=new St,ns=new N,fn=new hn,Ks=new hn,Wt=new N;class Ut extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Hu:hl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(fn.min,Ks.min),fn.expandByPoint(Wt),Wt.addVectors(fn.max,Ks.max),fn.expandByPoint(Wt)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Wt.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(e,l),Wt.add(ns)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new N,c[k]=new N;const l=new N,u=new N,h=new N,f=new je,d=new je,_=new je,v=new N,g=new N;function m(k,R,A){l.fromBufferAttribute(n,k),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,A),f.fromBufferAttribute(r,k),d.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const S=1/(d.x*_.y-_.x*d.y);isFinite(S)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(S),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(S),a[k].add(v),a[R].add(v),a[A].add(v),c[k].add(g),c[R].add(g),c[A].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,R=w.length;k<R;++k){const A=w[k],S=A.start,L=A.count;for(let B=S,W=S+L;B<W;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new N,E=new N,D=new N,I=new N;function P(k){D.fromBufferAttribute(i,k),I.copy(D);const R=a[k];M.copy(R),M.sub(D.multiplyScalar(D.dot(R))).normalize(),E.crossVectors(I,R);const S=E.dot(c[k])<0?-1:1;o.setXYZW(k,M.x,M.y,M.z,S)}for(let k=0,R=w.length;k<R;++k){const A=w[k],S=A.start,L=A.count;for(let B=S,W=S+L;B<W;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let m=0;m<u;m++)f[_++]=l[d++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new Ie,bi=new $o,zr=new Vn,Jl=new N,is=new N,ss=new N,rs=new N,Ra=new N,kr=new N,Hr=new je,Vr=new je,Gr=new je,Ql=new N,eh=new N,th=new N,Wr=new N,$r=new N;class Rt extends St{constructor(e=new Ut,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ra.fromBufferAttribute(h,e),o?kr.addScaledVector(Ra,u):kr.addScaledVector(Ra.sub(t),u))}t.add(kr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(zr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(zr,Jl)===null||bi.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Zl.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Zl),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let E=w,D=M;E<D;E+=3){const I=a.getX(E),P=a.getX(E+1),k=a.getX(E+2);i=Xr(this,m,e,n,l,u,h,I,P,k),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const w=a.getX(g),M=a.getX(g+1),E=a.getX(g+2);i=Xr(this,o,e,n,l,u,h,w,M,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],w=Math.max(g.start,d.start),M=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let E=w,D=M;E<D;E+=3){const I=E,P=E+1,k=E+2;i=Xr(this,m,e,n,l,u,h,I,P,k),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=_,m=v;g<m;g+=3){const w=g,M=g+1,E=g+2;i=Xr(this,o,e,n,l,u,h,w,M,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function cp(s,e,t,n,i,r,o,a){let c;if(e.side===an?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===ni,a),c===null)return null;$r.copy(a),$r.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:s}}function Xr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,is),s.getVertexPosition(c,ss),s.getVertexPosition(l,rs);const u=cp(s,e,t,n,is,ss,rs,Wr);if(u){i&&(Hr.fromBufferAttribute(i,a),Vr.fromBufferAttribute(i,c),Gr.fromBufferAttribute(i,l),u.uv=In.getInterpolation(Wr,is,ss,rs,Hr,Vr,Gr,new je)),r&&(Hr.fromBufferAttribute(r,a),Vr.fromBufferAttribute(r,c),Gr.fromBufferAttribute(r,l),u.uv1=In.getInterpolation(Wr,is,ss,rs,Hr,Vr,Gr,new je)),o&&(Ql.fromBufferAttribute(o,a),eh.fromBufferAttribute(o,c),th.fromBufferAttribute(o,l),u.normal=In.getInterpolation(Wr,is,ss,rs,Ql,eh,th,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};In.getNormal(is,ss,rs,h.normal),u.face=h}return u}class Hi extends Ut{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2));function _(v,g,m,w,M,E,D,I,P,k,R){const A=E/P,S=D/k,L=E/2,B=D/2,W=I/2,$=P+1,X=k+1;let K=0,H=0;const J=new N;for(let se=0;se<X;se++){const fe=se*S-B;for(let Ae=0;Ae<$;Ae++){const Q=Ae*A-L;J[v]=Q*w,J[g]=fe*M,J[m]=W,l.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[m]=I>0?1:-1,u.push(J.x,J.y,J.z),h.push(Ae/P),h.push(1-se/k),K+=1}}for(let se=0;se<k;se++)for(let fe=0;fe<P;fe++){const Ae=f+fe+$*se,Q=f+fe+$*(se+1),te=f+(fe+1)+$*(se+1),he=f+(fe+1)+$*se;c.push(Ae,Q,he),c.push(Q,te,he),H+=6}a.addGroup(d,H,R),d+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){const e={};for(let t=0;t<s.length;t++){const n=Fs(s[t]);for(const i in n)e[i]=n[i]}return e}function lp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const hp={clone:Fs,merge:rn};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gu extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new N,nh=new je,ih=new je;class Qt extends Gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class dp extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qt(os,as,e,t);i.layers=this.layers,this.add(i);const r=new Qt(os,as,e,t);r.layers=this.layers,this.add(r);const o=new Qt(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Qt(os,as,e,t);a.layers=this.layers,this.add(a);const c=new Qt(os,as,e,t);c.layers=this.layers,this.add(c);const l=new Qt(os,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wu extends zt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ls,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pp extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hi(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:vi});r.uniforms.tEquirect.value=t;const o=new Rt(i,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=mn),new dp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ca=new N,mp=new N,gp=new nt;class Ui{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ca.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gp.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Vn,jr=new N;class ul{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,r=new Ui,o=new Ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],v=i[10],g=i[11],m=i[12],w=i[13],M=i[14],E=i[15];if(n[0].setComponents(c-r,f-l,g-d,E-m).normalize(),n[1].setComponents(c+r,f+l,g+d,E+m).normalize(),n[2].setComponents(c+o,f+u,g+_,E+w).normalize(),n[3].setComponents(c-o,f-u,g-_,E-w).normalize(),n[4].setComponents(c-a,f-h,g-v,E-M).normalize(),t===ti)n[5].setComponents(c+a,f+h,g+v,E+M).normalize();else if(t===Do)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _p(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(s.bindBuffer(l,a),h.count===-1&&f.length===0&&s.bufferSubData(l,0,u),f.length!==0){for(let d=0,_=f.length;d<_;d++){const v=f[d];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class wi extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const w=m*f-o;for(let M=0;M<l;M++){const E=M*h-r;_.push(E,-w,0),v.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const M=w+l*m,E=w+l*(m+1),D=w+1+l*(m+1),I=w+1+l*m;d.push(M,E,I),d.push(E,D,I)}this.setIndex(d),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ng=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:vp,alphahash_pars_fragment:xp,alphamap_fragment:yp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Ap,batching_pars_vertex:Tp,batching_vertex:bp,begin_vertex:Rp,beginnormal_vertex:Cp,bsdfs:Pp,iridescence_fragment:Ip,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Op,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:zp,color_vertex:kp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Wp,displacementmap_vertex:$p,emissivemap_fragment:Xp,emissivemap_pars_fragment:jp,colorspace_fragment:qp,colorspace_pars_fragment:Kp,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:hm,envmap_vertex:em,fog_vertex:tm,fog_pars_vertex:nm,fog_fragment:im,fog_pars_fragment:sm,gradientmap_pars_fragment:rm,lightmap_pars_fragment:om,lights_lambert_fragment:am,lights_lambert_pars_fragment:cm,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:pm,lights_physical_fragment:mm,lights_physical_pars_fragment:gm,lights_fragment_begin:_m,lights_fragment_maps:vm,lights_fragment_end:xm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:Em,map_fragment:wm,map_pars_fragment:Am,map_particle_fragment:Tm,map_particle_pars_fragment:bm,metalnessmap_fragment:Rm,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Pm,morphcolor_vertex:Im,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Um,normal_fragment_begin:Nm,normal_fragment_maps:Om,normal_pars_fragment:Fm,normal_pars_vertex:Bm,normal_vertex:zm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:Hm,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Wm,opaque_fragment:$m,packing:Xm,premultiplied_alpha_fragment:jm,project_vertex:qm,dithering_fragment:Km,dithering_pars_fragment:Ym,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:eg,shadowmap_vertex:tg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:og,specularmap_fragment:ag,specularmap_pars_fragment:cg,tonemapping_fragment:lg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:fg,uv_pars_fragment:dg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:_g,background_frag:vg,backgroundCube_vert:xg,backgroundCube_frag:yg,cube_vert:Mg,cube_frag:Sg,depth_vert:Eg,depth_frag:wg,distanceRGBA_vert:Ag,distanceRGBA_frag:Tg,equirect_vert:bg,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Pg,meshbasic_vert:Ig,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Ng,meshmatcap_frag:Og,meshnormal_vert:Fg,meshnormal_frag:Bg,meshphong_vert:zg,meshphong_frag:kg,meshphysical_vert:Hg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:$g,points_frag:Xg,shadow_vert:jg,shadow_frag:qg,sprite_vert:Kg,sprite_frag:Yg},be={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Bn={basic:{uniforms:rn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:rn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Me(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:rn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:rn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:rn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Me(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:rn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:rn([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:rn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:rn([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:rn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:rn([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:rn([be.common,be.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:rn([be.lights,be.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Bn.physical={uniforms:rn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const qr={r:0,b:0,g:0},Ci=new Dt,Zg=new Ie;function Jg(s,e,t,n,i,r,o){const a=new Me(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1;const E=_(w);E===null?m(a,c):E&&E.isColor&&(m(E,1),M=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(w,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===Vo)?(u===void 0&&(u=new Rt(new Hi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Fs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(Ci)),u.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Rt(new wi(2,2),new Un({name:"BackgroundMaterial",uniforms:Fs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_t.getTransfer(E.colorSpace)!==Tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,M){w.getRGB(qr,Vu(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:v,addToRenderList:g}}function Qg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(A,S,L,B,W){let $=!1;const X=h(B,L,S);r!==X&&(r=X,l(r.object)),$=d(A,B,L,W),$&&_(A,B,L,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(A,S,L,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return s.createVertexArray()}function l(A){return s.bindVertexArray(A)}function u(A){return s.deleteVertexArray(A)}function h(A,S,L){const B=L.wireframe===!0;let W=n[A.id];W===void 0&&(W={},n[A.id]=W);let $=W[S.id];$===void 0&&($={},W[S.id]=$);let X=$[B];return X===void 0&&(X=f(c()),$[B]=X),X}function f(A){const S=[],L=[],B=[];for(let W=0;W<t;W++)S[W]=0,L[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:L,attributeDivisors:B,object:A,attributes:{},index:null}}function d(A,S,L,B){const W=r.attributes,$=S.attributes;let X=0;const K=L.getAttributes();for(const H in K)if(K[H].location>=0){const se=W[H];let fe=$[H];if(fe===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function _(A,S,L,B){const W={},$=S.attributes;let X=0;const K=L.getAttributes();for(const H in K)if(K[H].location>=0){let se=$[H];se===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),W[H]=fe,X++}r.attributes=W,r.attributesNum=X,r.index=B}function v(){const A=r.newAttributes;for(let S=0,L=A.length;S<L;S++)A[S]=0}function g(A){m(A,0)}function m(A,S){const L=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;L[A]=1,B[A]===0&&(s.enableVertexAttribArray(A),B[A]=1),W[A]!==S&&(s.vertexAttribDivisor(A,S),W[A]=S)}function w(){const A=r.newAttributes,S=r.enabledAttributes;for(let L=0,B=S.length;L<B;L++)S[L]!==A[L]&&(s.disableVertexAttribArray(L),S[L]=0)}function M(A,S,L,B,W,$,X){X===!0?s.vertexAttribIPointer(A,S,L,W,$):s.vertexAttribPointer(A,S,L,B,W,$)}function E(A,S,L,B){v();const W=B.attributes,$=L.getAttributes(),X=S.defaultAttributeValues;for(const K in $){const H=$[K];if(H.location>=0){let J=W[K];if(J===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),J!==void 0){const se=J.normalized,fe=J.itemSize,Ae=e.get(J);if(Ae===void 0)continue;const Q=Ae.buffer,te=Ae.type,he=Ae.bytesPerElement,Se=te===s.INT||te===s.UNSIGNED_INT||J.gpuType===el;if(J.isInterleavedBufferAttribute){const we=J.data,Ve=we.stride,We=J.offset;if(we.isInstancedInterleavedBuffer){for(let qe=0;qe<H.locationSize;qe++)m(H.location+qe,we.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let qe=0;qe<H.locationSize;qe++)g(H.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let qe=0;qe<H.locationSize;qe++)M(H.location+qe,fe/H.locationSize,te,se,Ve*he,(We+fe/H.locationSize*qe)*he,Se)}else{if(J.isInstancedBufferAttribute){for(let we=0;we<H.locationSize;we++)m(H.location+we,J.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let we=0;we<H.locationSize;we++)g(H.location+we);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let we=0;we<H.locationSize;we++)M(H.location+we,fe/H.locationSize,te,se,fe*he,fe/H.locationSize*we*he,Se)}}else if(X!==void 0){const se=X[K];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}w()}function D(){k();for(const A in n){const S=n[A];for(const L in S){const B=S[L];for(const W in B)u(B[W].object),delete B[W];delete S[L]}delete n[A]}}function I(A){if(n[A.id]===void 0)return;const S=n[A.id];for(const L in S){const B=S[L];for(const W in B)u(B[W].object),delete B[W];delete S[L]}delete n[A.id]}function P(A){for(const S in n){const L=n[S];if(L[A.id]===void 0)continue;const B=L[A.id];for(const W in B)u(B[W].object),delete B[W];delete L[A.id]}}function k(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:k,resetDefaultState:R,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function e0(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v];for(let v=0;v<f.length;v++)t.update(_,n,f[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function t0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Mn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const P=I===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ln&&!P)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:E,maxSamples:D}}function n0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ui,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!g)r?u(null):l();else{const w=r?0:n,M=w*4;let E=m.clippingState||null;c.value=E,E=u(_,f,M,d);for(let D=0;D!==M;++D)E[D]=t[D];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const m=d+v*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,E=d;M!==v;++M,E+=4)o.copy(h[M]).applyMatrix4(w,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function i0(s){let e=new WeakMap;function t(o,a){return a===Ro?o.mapping=Ls:a===rc&&(o.mapping=Ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===rc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new pp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Er extends Gu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ys=4,sh=[.125,.215,.35,.446,.526,.582],Fi=20,Pa=new Er,rh=new Me;let Ia=null,La=0,Da=0,Ua=!1;const Ni=(1+Math.sqrt(5))/2,cs=1/Ni,oh=[new N(-Ni,cs,0),new N(Ni,cs,0),new N(-cs,0,Ni),new N(cs,0,Ni),new N(0,Ni,-cs),new N(0,Ni,cs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,La,Da),this._renderer.xr.enabled=Ua,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Sr,format:Mn,colorSpace:qt,depthBuffer:!1},i=ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,e,t)}return i}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(rh),u.toneMapping=xi,u.autoClear=!1;const d=new en({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Rt(new Hi,d);let v=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(rh),v=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;Kr(i,w*M,m>2?M:0,M,M),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ls||e.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(i-r-1)%oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Rt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),v=r/_,g=isFinite(r)?1+Math.floor(u*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const m=[];let w=0;for(let P=0;P<Fi;++P){const k=P/v,R=Math.exp(-k*k/2);m.push(R),P===0?w+=R:P<g&&(w+=2*R)}for(let P=0;P<m.length;P++)m[P]=m[P]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const E=this._sizeLods[i],D=3*E*(i>M-ys?i-M+ys:0),I=4*(this._cubeSize-E);Kr(t,D,I,3*E,2*E),c.setRenderTarget(t),c.render(h,Pa)}}function s0(s){const e=[],t=[],n=[];let i=s;const r=s-ys+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ys?c=sh[o-s+ys-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,g=2,m=1,w=new Float32Array(v*_*d),M=new Float32Array(g*_*d),E=new Float32Array(m*_*d);for(let I=0;I<d;I++){const P=I%3*2/3-1,k=I>2?0:-1,R=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];w.set(R,v*_*I),M.set(f,g*_*I);const A=[I,I,I,I,I,I];E.set(A,m*_*I)}const D=new Ut;D.setAttribute("position",new kt(w,v)),D.setAttribute("uv",new kt(M,g)),D.setAttribute("faceIndex",new kt(E,m)),e.push(D),i>ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ch(s,e,t){const n=new Si(s,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function r0(s,e,t){const n=new Float32Array(Fi),i=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function lh(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function hh(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ro||c===rc,u=c===Ls||c===Ds;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ah(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ah(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function a0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ll("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function c0(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const v=d[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const w=d.array;v=d.version;for(let M=0,E=w.length;M<E;M+=3){const D=w[M+0],I=w[M+1],P=w[M+2];f.push(D,I,I,P,P,D)}}else if(_!==void 0){const w=_.array;v=_.version;for(let M=0,E=w.length/3-1;M<E;M+=3){const D=M+0,I=M+1,P=M+2;f.push(D,I,I,P,P,D)}}else return;const g=new(Ou(f)?Hu:hl)(f,1);g.version=v;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function l0(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let g=0;for(let m=0;m<_;m++)g+=d[m];t.update(g,n,1)}function h(f,d,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,_);let m=0;for(let w=0;w<_;w++)m+=d[w];for(let w=0;w<v.length;w++)t.update(m,n,v[w])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function h0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u0(s,e,t){const n=new WeakMap,i=new dt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let A=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var d=A;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),g===!0&&(E=3);let D=a.attributes.position.count*E,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*I*4*h),k=new Bu(P,D,I,h);k.type=Ln,k.needsUpdate=!0;const R=E*4;for(let S=0;S<h;S++){const L=m[S],B=w[S],W=M[S],$=D*I*4*S;for(let X=0;X<L.count;X++){const K=X*R;_===!0&&(i.fromBufferAttribute(L,X),P[$+K+0]=i.x,P[$+K+1]=i.y,P[$+K+2]=i.z,P[$+K+3]=0),v===!0&&(i.fromBufferAttribute(B,X),P[$+K+4]=i.x,P[$+K+5]=i.y,P[$+K+6]=i.z,P[$+K+7]=0),g===!0&&(i.fromBufferAttribute(W,X),P[$+K+8]=i.x,P[$+K+9]=i.y,P[$+K+10]=i.z,P[$+K+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:k,size:new je(D,I)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function f0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Xu extends zt{constructor(e,t,n,i,r,o,a,c,l,u=As){if(u!==As&&u!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===As&&(n=ki),n===void 0&&u===Ns&&(n=Us),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=c!==void 0?c:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new zt,uh=new Xu(1,1),qu=new Bu,Ku=new Jd,Yu=new Wu,fh=[],dh=[],ph=new Float32Array(16),mh=new Float32Array(9),gh=new Float32Array(4);function Vs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=fh[i];if(r===void 0&&(r=new Float32Array(i),fh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xo(s,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function d0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function m0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function g0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function _0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;gh.set(n),s.uniformMatrix2fv(this.addr,!1,gh),Vt(t,n)}}function v0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;mh.set(n),s.uniformMatrix3fv(this.addr,!1,mh),Vt(t,n)}}function x0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;ph.set(n),s.uniformMatrix4fv(this.addr,!1,ph),Vt(t,n)}}function y0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Vt(t,e)}}function S0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Vt(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Vt(t,e)}}function w0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function A0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Vt(t,e)}}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Vt(t,e)}}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Vt(t,e)}}function R0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(uh.compareFunction=Nu,r=uh):r=ju,t.setTexture2D(e||r,i)}function C0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ku,i)}function P0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yu,i)}function I0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||qu,i)}function L0(s){switch(s){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return A0;case 36295:return T0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function D0(s,e){s.uniform1fv(this.addr,e)}function U0(s,e){const t=Vs(e,this.size,2);s.uniform2fv(this.addr,t)}function N0(s,e){const t=Vs(e,this.size,3);s.uniform3fv(this.addr,t)}function O0(s,e){const t=Vs(e,this.size,4);s.uniform4fv(this.addr,t)}function F0(s,e){const t=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function B0(s,e){const t=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function z0(s,e){const t=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function k0(s,e){s.uniform1iv(this.addr,e)}function H0(s,e){s.uniform2iv(this.addr,e)}function V0(s,e){s.uniform3iv(this.addr,e)}function G0(s,e){s.uniform4iv(this.addr,e)}function W0(s,e){s.uniform1uiv(this.addr,e)}function $0(s,e){s.uniform2uiv(this.addr,e)}function X0(s,e){s.uniform3uiv(this.addr,e)}function j0(s,e){s.uniform4uiv(this.addr,e)}function q0(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ju,r[o])}function K0(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ku,r[o])}function Y0(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yu,r[o])}function Z0(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||qu,r[o])}function J0(s){switch(s){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return z0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return $0;case 36295:return X0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}class Q0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L0(t.type)}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}}class t_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function _h(s,e){s.seq.push(e),s.map[e.id]=e}function n_(s,e,t){const n=s.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){_h(t,l===void 0?new Q0(a,s,e):new e_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new t_(a),_h(t,h)),t=h}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);n_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const i_=37297;let s_=0;function r_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function o_(s){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(s);let n;switch(e===t?n="":e===Lo&&t===Io?n="LinearDisplayP3ToLinearSRGB":e===Io&&t===Lo&&(n="LinearSRGBToLinearDisplayP3"),s){case qt:case Wo:return[n,"LinearTransferOETF"];case Et:case al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function xh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+r_(s.getShaderSource(e),o)}else return i}function a_(s,e){const t=o_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function c_(s,e){let t;switch(e){case ld:t="Linear";break;case hd:t="Reinhard";break;case ud:t="OptimizedCineon";break;case fd:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function h_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function or(s){return s!==""}function yh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(f_,p_)}const d_=new Map;function p_(s,e){let t=rt[e];if(t===void 0){const n=d_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(s){return s.replace(m_,g_)}function g_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Eh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function __(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function v_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ls:case Ds:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function y_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ho:e="ENVMAP_BLENDING_MULTIPLY";break;case ad:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function M_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=__(t),l=v_(t),u=x_(t),h=y_(t),f=M_(t),d=l_(t),_=h_(r),v=i.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(or).join(`
`),m.length>0&&(m+=`
`)):(g=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[Eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?rt.tonemapping_pars_fragment:"",t.toneMapping!==xi?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,a_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=Nc(o),o=yh(o,t),o=Mh(o,t),a=Nc(a),a=yh(a,t),a=Mh(a,t),o=Sh(o),a=Sh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=w+g+o,E=w+m+a,D=vh(i,i.VERTEX_SHADER,M),I=vh(i,i.FRAGMENT_SHADER,E);i.attachShader(v,D),i.attachShader(v,I),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(S){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(v).trim(),B=i.getShaderInfoLog(D).trim(),W=i.getShaderInfoLog(I).trim();let $=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,D,I);else{const K=xh(i,D,"vertex"),H=xh(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+L+`
`+K+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(B===""||W==="")&&(X=!1);X&&(S.diagnostics={runnable:$,programLog:L,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:m}})}i.deleteShader(D),i.deleteShader(I),k=new Eo(i,v),R=u_(i,v)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(v,i_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=I,this}let E_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A_(e),t.set(e,n)),n}}class A_{constructor(e){this.id=E_++,this.code=e,this.usedTimes=0}}function T_(s,e,t,n,i,r,o){const a=new zu,c=new w_,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(R){return l.add(R),R===0?"uv":`uv${R}`}function g(R,A,S,L,B){const W=L.fog,$=B.geometry,X=R.isMeshStandardMaterial?L.environment:null,K=(R.isMeshStandardMaterial?t:e).get(R.envMap||X),H=K&&K.mapping===Vo?K.image.height:null,J=_[R.type];R.precision!==null&&(d=i.getMaxPrecision(R.precision),d!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",d,"instead."));const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fe=se!==void 0?se.length:0;let Ae=0;$.morphAttributes.position!==void 0&&(Ae=1),$.morphAttributes.normal!==void 0&&(Ae=2),$.morphAttributes.color!==void 0&&(Ae=3);let Q,te,he,Se;if(J){const it=Bn[J];Q=it.vertexShader,te=it.fragmentShader}else Q=R.vertexShader,te=R.fragmentShader,c.update(R),he=c.getVertexShaderID(R),Se=c.getFragmentShaderID(R);const we=s.getRenderTarget(),Ve=B.isInstancedMesh===!0,We=B.isBatchedMesh===!0,qe=!!R.map,ht=!!R.matcap,F=!!K,Xe=!!R.aoMap,tt=!!R.lightMap,lt=!!R.bumpMap,Oe=!!R.normalMap,ut=!!R.displacementMap,Be=!!R.emissiveMap,Ge=!!R.metalnessMap,U=!!R.roughnessMap,b=R.anisotropy>0,Z=R.clearcoat>0,de=R.dispersion>0,pe=R.iridescence>0,le=R.sheen>0,Fe=R.transmission>0,ye=b&&!!R.anisotropyMap,Ce=Z&&!!R.clearcoatMap,Je=Z&&!!R.clearcoatNormalMap,me=Z&&!!R.clearcoatRoughnessMap,Ee=pe&&!!R.iridescenceMap,ke=pe&&!!R.iridescenceThicknessMap,$e=le&&!!R.sheenColorMap,Y=le&&!!R.sheenRoughnessMap,ae=!!R.specularMap,Pe=!!R.specularColorMap,Ke=!!R.specularIntensityMap,V=Fe&&!!R.transmissionMap,ue=Fe&&!!R.thicknessMap,ie=!!R.gradientMap,oe=!!R.alphaMap,_e=R.alphaTest>0,ze=!!R.alphaHash,Qe=!!R.extensions;let pt=xi;R.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(pt=s.toneMapping);const yt={shaderID:J,shaderType:R.type,shaderName:R.name,vertexShader:Q,fragmentShader:te,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:d,batching:We,batchingColor:We&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qt,alphaToCoverage:!!R.alphaToCoverage,map:qe,matcap:ht,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:tt,bumpMap:lt,normalMap:Oe,displacementMap:f&&ut,emissiveMap:Be,normalMapObjectSpace:Oe&&R.normalMapType===Md,normalMapTangentSpace:Oe&&R.normalMapType===Go,metalnessMap:Ge,roughnessMap:U,anisotropy:b,anisotropyMap:ye,clearcoat:Z,clearcoatMap:Ce,clearcoatNormalMap:Je,clearcoatRoughnessMap:me,dispersion:de,iridescence:pe,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:le,sheenColorMap:$e,sheenRoughnessMap:Y,specularMap:ae,specularColorMap:Pe,specularIntensityMap:Ke,transmission:Fe,transmissionMap:V,thicknessMap:ue,gradientMap:ie,opaque:R.transparent===!1&&R.blending===ws&&R.alphaToCoverage===!1,alphaMap:oe,alphaTest:_e,alphaHash:ze,combine:R.combine,mapUv:qe&&v(R.map.channel),aoMapUv:Xe&&v(R.aoMap.channel),lightMapUv:tt&&v(R.lightMap.channel),bumpMapUv:lt&&v(R.bumpMap.channel),normalMapUv:Oe&&v(R.normalMap.channel),displacementMapUv:ut&&v(R.displacementMap.channel),emissiveMapUv:Be&&v(R.emissiveMap.channel),metalnessMapUv:Ge&&v(R.metalnessMap.channel),roughnessMapUv:U&&v(R.roughnessMap.channel),anisotropyMapUv:ye&&v(R.anisotropyMap.channel),clearcoatMapUv:Ce&&v(R.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(R.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(R.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&v(R.sheenColorMap.channel),sheenRoughnessMapUv:Y&&v(R.sheenRoughnessMap.channel),specularMapUv:ae&&v(R.specularMap.channel),specularColorMapUv:Pe&&v(R.specularColorMap.channel),specularIntensityMapUv:Ke&&v(R.specularIntensityMap.channel),transmissionMapUv:V&&v(R.transmissionMap.channel),thicknessMapUv:ue&&v(R.thicknessMap.channel),alphaMapUv:oe&&v(R.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Oe||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(qe||oe),fog:!!W,useFog:R.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ae,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:qe&&R.map.isVideoTexture===!0&&_t.getTransfer(R.map.colorSpace)===Tt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===pn,flipSided:R.side===an,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Qe&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&R.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function m(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const S in R.defines)A.push(S),A.push(R.defines[S]);return R.isRawShaderMaterial===!1&&(w(A,R),M(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function w(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function M(R,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.transmission&&a.enable(14),A.sheen&&a.enable(15),A.opaque&&a.enable(16),A.pointsUvs&&a.enable(17),A.decodeVideoTexture&&a.enable(18),A.alphaToCoverage&&a.enable(19),R.push(a.mask)}function E(R){const A=_[R.type];let S;if(A){const L=Bn[A];S=hp.clone(L.uniforms)}else S=R.uniforms;return S}function D(R,A){let S;for(let L=0,B=u.length;L<B;L++){const W=u[L];if(W.cacheKey===A){S=W,++S.usedTimes;break}}return S===void 0&&(S=new S_(s,A,R,r),u.push(S)),S}function I(R){if(--R.usedTimes===0){const A=u.indexOf(R);u[A]=u[u.length-1],u.pop(),R.destroy()}}function P(R){c.remove(R)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:D,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:k}}function b_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function R_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ah(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,v,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,f,d,_,v,g){const m=o(h,f,d,_,v,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(h,f,d,_,v,g){const m=o(h,f,d,_,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,f){t.length>1&&t.sort(h||R_),n.length>1&&n.sort(f||wh),i.length>1&&i.sort(f||wh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function C_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ah,s.set(n,[o])):i>=r.length?(o=new Ah,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function P_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function I_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let L_=0;function D_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function U_(s){const e=new P_,t=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new Ie,o=new Ie;function a(l){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,_=0,v=0,g=0,m=0,w=0,M=0,E=0,D=0,I=0,P=0;l.sort(D_);for(let R=0,A=l.length;R<A;R++){const S=l[R],L=S.color,B=S.intensity,W=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=L.r*B,h+=L.g*B,f+=L.b*B;else if(S.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(S.sh.coefficients[X],B);P++}else if(S.isDirectionalLight){const X=e.get(S);if(X.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,H=t.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=S.shadow.matrix,w++}n.directional[d]=X,d++}else if(S.isSpotLight){const X=e.get(S);X.position.setFromMatrixPosition(S.matrixWorld),X.color.copy(L).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(S.angle),X.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),X.decay=S.decay,n.spot[v]=X;const K=S.shadow;if(S.map&&(n.spotLightMap[D]=S.map,D++,K.updateMatrices(S),S.castShadow&&I++),n.spotLightMatrix[v]=K.matrix,S.castShadow){const H=t.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=$,E++}v++}else if(S.isRectAreaLight){const X=e.get(S);X.color.copy(L).multiplyScalar(B),X.halfWidth.set(S.width*.5,0,0),X.halfHeight.set(0,S.height*.5,0),n.rectArea[g]=X,g++}else if(S.isPointLight){const X=e.get(S);if(X.color.copy(S.color).multiplyScalar(S.intensity),X.distance=S.distance,X.decay=S.decay,S.castShadow){const K=S.shadow,H=t.get(S);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=S.shadow.matrix,M++}n.point[_]=X,_++}else if(S.isHemisphereLight){const X=e.get(S);X.skyColor.copy(S.color).multiplyScalar(B),X.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[m]=X,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const k=n.hash;(k.directionalLength!==d||k.pointLength!==_||k.spotLength!==v||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==w||k.numPointShadows!==M||k.numSpotShadows!==E||k.numSpotMaps!==D||k.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+D-I,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,k.directionalLength=d,k.pointLength=_,k.spotLength=v,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=w,k.numPointShadows=M,k.numSpotShadows=E,k.numSpotMaps=D,k.numLightProbes=P,n.version=L_++)}function c(l,u){let h=0,f=0,d=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const M=l[m];if(M.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),h++}else if(M.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Th(s){const e=new U_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function N_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Th(s),e.set(i,[a])):r>=o.length?(a=new Th(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class O_ extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F_ extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k_(s,e,t){let n=new ul;const i=new je,r=new je,o=new dt,a=new O_({depthPacking:yd}),c=new F_,l={},u=t.maxTextureSize,h={[ni]:an,[an]:ni,[pn]:pn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:B_,fragmentShader:z_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ut;_.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rt(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let m=this.type;this.render=function(I,P,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),L=s.state;L.setBlending(vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=m!==Zn&&this.type===Zn,W=m===Zn&&this.type!==Zn;for(let $=0,X=I.length;$<X;$++){const K=I[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const J=H.getFrameExtents();if(i.multiply(J),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const fe=this.type!==Zn?{minFilter:Xt,magFilter:Xt}:{};H.map!==null&&H.map.dispose(),H.map=new Si(i.x,i.y,fe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let fe=0;fe<se;fe++){const Ae=H.getViewport(fe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),L.viewport(o),H.updateMatrices(K,fe),n=H.getFrustum(),E(P,k,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Zn&&w(H,k),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(R,A,S)};function w(I,P){const k=e.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Si(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,k,f,v,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,k,d,v,null)}function M(I,P,k,R){let A=null;const S=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(S!==void 0)A=S;else if(A=k.isPointLight===!0?c:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const L=A.uuid,B=P.uuid;let W=l[L];W===void 0&&(W={},l[L]=W);let $=W[B];$===void 0&&($=A.clone(),W[B]=$,P.addEventListener("dispose",D)),A=$}if(A.visible=P.visible,A.wireframe=P.wireframe,R===Zn?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:h[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=s.properties.get(A);L.light=k}return A}function E(I,P,k,R,A){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===Zn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const B=e.update(I),W=I.material;if(Array.isArray(W)){const $=B.groups;for(let X=0,K=$.length;X<K;X++){const H=$[X],J=W[H.materialIndex];if(J&&J.visible){const se=M(I,J,R,A);I.onBeforeShadow(s,I,P,k,B,se,H),s.renderBufferDirect(k,null,B,se,I,H),I.onAfterShadow(s,I,P,k,B,se,H)}}}else if(W.visible){const $=M(I,W,R,A);I.onBeforeShadow(s,I,P,k,B,$,null),s.renderBufferDirect(k,null,B,$,I,null),I.onAfterShadow(s,I,P,k,B,$,null)}}const L=I.children;for(let B=0,W=L.length;B<W;B++)E(L[B],P,k,R,A)}function D(I){I.target.removeEventListener("dispose",D);for(const k in l){const R=l[k],A=I.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function H_(s){function e(){let V=!1;const ue=new dt;let ie=null;const oe=new dt(0,0,0,0);return{setMask:function(_e){ie!==_e&&!V&&(s.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){V=_e},setClear:function(_e,ze,Qe,pt,yt){yt===!0&&(_e*=pt,ze*=pt,Qe*=pt),ue.set(_e,ze,Qe,pt),oe.equals(ue)===!1&&(s.clearColor(_e,ze,Qe,pt),oe.copy(ue))},reset:function(){V=!1,ie=null,oe.set(-1,0,0,0)}}}function t(){let V=!1,ue=null,ie=null,oe=null;return{setTest:function(_e){_e?Se(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(_e){ue!==_e&&!V&&(s.depthMask(_e),ue=_e)},setFunc:function(_e){if(ie!==_e){switch(_e){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case bo:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case sd:s.depthFunc(s.GEQUAL);break;case rd:s.depthFunc(s.GREATER);break;case od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=_e}},setLocked:function(_e){V=_e},setClear:function(_e){oe!==_e&&(s.clearDepth(_e),oe=_e)},reset:function(){V=!1,ue=null,ie=null,oe=null}}}function n(){let V=!1,ue=null,ie=null,oe=null,_e=null,ze=null,Qe=null,pt=null,yt=null;return{setTest:function(it){V||(it?Se(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(it){ue!==it&&!V&&(s.stencilMask(it),ue=it)},setFunc:function(it,wt,Mt){(ie!==it||oe!==wt||_e!==Mt)&&(s.stencilFunc(it,wt,Mt),ie=it,oe=wt,_e=Mt)},setOp:function(it,wt,Mt){(ze!==it||Qe!==wt||pt!==Mt)&&(s.stencilOp(it,wt,Mt),ze=it,Qe=wt,pt=Mt)},setLocked:function(it){V=it},setClear:function(it){yt!==it&&(s.clearStencil(it),yt=it)},reset:function(){V=!1,ue=null,ie=null,oe=null,_e=null,ze=null,Qe=null,pt=null,yt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,w=null,M=null,E=null,D=null,I=new Me(0,0,0),P=0,k=!1,R=null,A=null,S=null,L=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=X>=2);let H=null,J={};const se=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Ae=new dt().fromArray(se),Q=new dt().fromArray(fe);function te(V,ue,ie,oe){const _e=new Uint8Array(4),ze=s.createTexture();s.bindTexture(V,ze),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qe=0;Qe<ie;Qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ue+Qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ze}const he={};he[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),he[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),he[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(s.DEPTH_TEST),r.setFunc(bo),lt(!1),Oe(Rl),Se(s.CULL_FACE),Xe(vi);function Se(V){l[V]!==!0&&(s.enable(V),l[V]=!0)}function we(V){l[V]!==!1&&(s.disable(V),l[V]=!1)}function Ve(V,ue){return u[V]!==ue?(s.bindFramebuffer(V,ue),u[V]=ue,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ue),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function We(V,ue){let ie=f,oe=!1;if(V){ie=h.get(ue),ie===void 0&&(ie=[],h.set(ue,ie));const _e=V.textures;if(ie.length!==_e.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,Qe=_e.length;ze<Qe;ze++)ie[ze]=s.COLOR_ATTACHMENT0+ze;ie.length=_e.length,oe=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,oe=!0);oe&&s.drawBuffers(ie)}function qe(V){return d!==V?(s.useProgram(V),d=V,!0):!1}const ht={[Oi]:s.FUNC_ADD,[Ff]:s.FUNC_SUBTRACT,[Bf]:s.FUNC_REVERSE_SUBTRACT};ht[zf]=s.MIN,ht[kf]=s.MAX;const F={[Hf]:s.ZERO,[Vf]:s.ONE,[Gf]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[Kf]:s.SRC_ALPHA_SATURATE,[jf]:s.DST_COLOR,[$f]:s.DST_ALPHA,[Wf]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[qf]:s.ONE_MINUS_DST_COLOR,[Xf]:s.ONE_MINUS_DST_ALPHA,[Yf]:s.CONSTANT_COLOR,[Zf]:s.ONE_MINUS_CONSTANT_COLOR,[Jf]:s.CONSTANT_ALPHA,[Qf]:s.ONE_MINUS_CONSTANT_ALPHA};function Xe(V,ue,ie,oe,_e,ze,Qe,pt,yt,it){if(V===vi){_===!0&&(we(s.BLEND),_=!1);return}if(_===!1&&(Se(s.BLEND),_=!0),V!==Of){if(V!==v||it!==k){if((g!==Oi||M!==Oi)&&(s.blendEquation(s.FUNC_ADD),g=Oi,M=Oi),it)switch(V){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.ONE,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}m=null,w=null,E=null,D=null,I.set(0,0,0),P=0,v=V,k=it}return}_e=_e||ue,ze=ze||ie,Qe=Qe||oe,(ue!==g||_e!==M)&&(s.blendEquationSeparate(ht[ue],ht[_e]),g=ue,M=_e),(ie!==m||oe!==w||ze!==E||Qe!==D)&&(s.blendFuncSeparate(F[ie],F[oe],F[ze],F[Qe]),m=ie,w=oe,E=ze,D=Qe),(pt.equals(I)===!1||yt!==P)&&(s.blendColor(pt.r,pt.g,pt.b,yt),I.copy(pt),P=yt),v=V,k=!1}function tt(V,ue){V.side===pn?we(s.CULL_FACE):Se(s.CULL_FACE);let ie=V.side===an;ue&&(ie=!ie),lt(ie),V.blending===ws&&V.transparent===!1?Xe(vi):Xe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),i.setMask(V.colorWrite);const oe=V.stencilWrite;o.setTest(oe),oe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function Oe(V){V!==Df?(Se(s.CULL_FACE),V!==A&&(V===Rl?s.cullFace(s.BACK):V===Uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),A=V}function ut(V){V!==S&&($&&s.lineWidth(V),S=V)}function Be(V,ue,ie){V?(Se(s.POLYGON_OFFSET_FILL),(L!==ue||B!==ie)&&(s.polygonOffset(ue,ie),L=ue,B=ie)):we(s.POLYGON_OFFSET_FILL)}function Ge(V){V?Se(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function U(V){V===void 0&&(V=s.TEXTURE0+W-1),H!==V&&(s.activeTexture(V),H=V)}function b(V,ue,ie){ie===void 0&&(H===null?ie=s.TEXTURE0+W-1:ie=H);let oe=J[ie];oe===void 0&&(oe={type:void 0,texture:void 0},J[ie]=oe),(oe.type!==V||oe.texture!==ue)&&(H!==ie&&(s.activeTexture(ie),H=ie),s.bindTexture(V,ue||he[V]),oe.type=V,oe.texture=ue)}function Z(){const V=J[H];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(V){Ae.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Y(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ae(V,ue){let ie=c.get(ue);ie===void 0&&(ie=new WeakMap,c.set(ue,ie));let oe=ie.get(V);oe===void 0&&(oe=s.getUniformBlockIndex(ue,V.name),ie.set(V,oe))}function Pe(V,ue){const oe=c.get(ue).get(V);a.get(ue)!==oe&&(s.uniformBlockBinding(ue,oe,V.__bindingPointIndex),a.set(ue,oe))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},H=null,J={},u={},h=new WeakMap,f=[],d=null,_=!1,v=null,g=null,m=null,w=null,M=null,E=null,D=null,I=new Me(0,0,0),P=0,k=!1,R=null,A=null,S=null,L=null,B=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Se,disable:we,bindFramebuffer:Ve,drawBuffers:We,useProgram:qe,setBlending:Xe,setMaterial:tt,setFlipSided:lt,setCullFace:Oe,setLineWidth:ut,setPolygonOffset:Be,setScissorTest:Ge,activeTexture:U,bindTexture:b,unbindTexture:Z,compressedTexImage2D:de,compressedTexImage3D:pe,texImage2D:Ee,texImage3D:ke,updateUBOMapping:ae,uniformBlockBinding:Pe,texStorage2D:Je,texStorage3D:me,texSubImage2D:le,texSubImage3D:Fe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ce,scissor:$e,viewport:Y,reset:Ke}}function bh(s,e,t,n){const i=V_(n);switch(t){case Ru:return s*e;case Pu:return s*e;case Iu:return s*e*2;case il:return s*e/i.components*i.byteLength;case sl:return s*e/i.components*i.byteLength;case Lu:return s*e*2/i.components*i.byteLength;case rl:return s*e*2/i.components*i.byteLength;case Cu:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case ol:return s*e*4/i.components*i.byteLength;case vo:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yo:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ac:case hc:return Math.max(s,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(s,8)*Math.max(e,8)/2;case uc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case So:case Rc:case Cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Du:case Pc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ic:case Lc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V_(s){switch(s){case ii:case Au:return{byteLength:1,components:1};case fr:case Tu:case Sr:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case ki:case el:case Ln:return{byteLength:4,components:1};case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function G_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,b){return d?new OffscreenCanvas(U,b):mr("canvas")}function v(U,b,Z){let de=1;const pe=Ge(U);if((pe.width>Z||pe.height>Z)&&(de=Z/Math.max(pe.width,pe.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(de*pe.width),Fe=Math.floor(de*pe.height);h===void 0&&(h=_(le,Fe));const ye=b?_(le,Fe):h;return ye.width=le,ye.height=Fe,ye.getContext("2d").drawImage(U,0,0,le,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+Fe+")."),ye}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function g(U){return U.generateMipmaps&&U.minFilter!==Xt&&U.minFilter!==mn}function m(U){s.generateMipmap(U)}function w(U,b,Z,de,pe=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=b;if(b===s.RED&&(Z===s.FLOAT&&(le=s.R32F),Z===s.HALF_FLOAT&&(le=s.R16F),Z===s.UNSIGNED_BYTE&&(le=s.R8)),b===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.R8UI),Z===s.UNSIGNED_SHORT&&(le=s.R16UI),Z===s.UNSIGNED_INT&&(le=s.R32UI),Z===s.BYTE&&(le=s.R8I),Z===s.SHORT&&(le=s.R16I),Z===s.INT&&(le=s.R32I)),b===s.RG&&(Z===s.FLOAT&&(le=s.RG32F),Z===s.HALF_FLOAT&&(le=s.RG16F),Z===s.UNSIGNED_BYTE&&(le=s.RG8)),b===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(le=s.RG8UI),Z===s.UNSIGNED_SHORT&&(le=s.RG16UI),Z===s.UNSIGNED_INT&&(le=s.RG32UI),Z===s.BYTE&&(le=s.RG8I),Z===s.SHORT&&(le=s.RG16I),Z===s.INT&&(le=s.RG32I)),b===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),b===s.RGBA){const Fe=pe?Po:_t.getTransfer(de);Z===s.FLOAT&&(le=s.RGBA32F),Z===s.HALF_FLOAT&&(le=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(le=Fe===Tt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(U,b){let Z;return U?b===null||b===ki||b===Us?Z=s.DEPTH24_STENCIL8:b===Ln?Z=s.DEPTH32F_STENCIL8:b===fr&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===Us?Z=s.DEPTH_COMPONENT24:b===Ln?Z=s.DEPTH_COMPONENT32F:b===fr&&(Z=s.DEPTH_COMPONENT16),Z}function E(U,b){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xt&&U.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function D(U){const b=U.target;b.removeEventListener("dispose",D),P(b),b.isVideoTexture&&u.delete(b)}function I(U){const b=U.target;b.removeEventListener("dispose",I),R(b)}function P(U){const b=n.get(U);if(b.__webglInit===void 0)return;const Z=U.source,de=f.get(Z);if(de){const pe=de[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&k(U),Object.keys(de).length===0&&f.delete(Z)}n.remove(U)}function k(U){const b=n.get(U);s.deleteTexture(b.__webglTexture);const Z=U.source,de=f.get(Z);delete de[b.__cacheKey],o.memory.textures--}function R(U){const b=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let pe=0;pe<b.__webglFramebuffer[de].length;pe++)s.deleteFramebuffer(b.__webglFramebuffer[de][pe]);else s.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)s.deleteFramebuffer(b.__webglFramebuffer[de]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=U.textures;for(let de=0,pe=Z.length;de<pe;de++){const le=n.get(Z[de]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Z[de])}n.remove(U)}let A=0;function S(){A=0}function L(){const U=A;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),A+=1,U}function B(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function W(U,b){const Z=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const de=U.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,U,b);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+b)}function $(U,b){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Q(Z,U,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+b)}function X(U,b){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Q(Z,U,b);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+b)}function K(U,b){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){te(Z,U,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+b)}const H={[kn]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Co]:s.MIRRORED_REPEAT},J={[Xt]:s.NEAREST,[wu]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[_o]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},se={[Sd]:s.NEVER,[Rd]:s.ALWAYS,[Ed]:s.LESS,[Nu]:s.LEQUAL,[wd]:s.EQUAL,[bd]:s.GEQUAL,[Ad]:s.GREATER,[Td]:s.NOTEQUAL};function fe(U,b){if(b.type===Ln&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===_o||b.magFilter===xs||b.magFilter===ei||b.minFilter===mn||b.minFilter===_o||b.minFilter===xs||b.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,H[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,H[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,H[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,J[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,J[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==xs&&b.minFilter!==ei||b.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(U,b){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",D));const de=b.source;let pe=f.get(de);pe===void 0&&(pe={},f.set(de,pe));const le=B(b);if(le!==U.__cacheKey){pe[le]===void 0&&(pe[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),pe[le].usedTimes++;const Fe=pe[U.__cacheKey];Fe!==void 0&&(pe[U.__cacheKey].usedTimes--,Fe.usedTimes===0&&k(b)),U.__cacheKey=le,U.__webglTexture=pe[le].texture}return Z}function Q(U,b,Z){let de=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=s.TEXTURE_3D);const pe=Ae(U,b),le=b.source;t.bindTexture(de,U.__webglTexture,s.TEXTURE0+Z);const Fe=n.get(le);if(le.version!==Fe.__version||pe===!0){t.activeTexture(s.TEXTURE0+Z);const ye=_t.getPrimaries(_t.workingColorSpace),Ce=b.colorSpace===pi?null:_t.getPrimaries(b.colorSpace),Je=b.colorSpace===pi||ye===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let me=v(b.image,!1,i.maxTextureSize);me=Be(b,me);const Ee=r.convert(b.format,b.colorSpace),ke=r.convert(b.type);let $e=w(b.internalFormat,Ee,ke,b.colorSpace,b.isVideoTexture);fe(de,b);let Y;const ae=b.mipmaps,Pe=b.isVideoTexture!==!0,Ke=Fe.__version===void 0||pe===!0,V=le.dataReady,ue=E(b,me);if(b.isDepthTexture)$e=M(b.format===Ns,b.type),Ke&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,$e,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,$e,me.width,me.height,0,Ee,ke,null));else if(b.isDataTexture)if(ae.length>0){Pe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ue,$e,ae[0].width,ae[0].height);for(let ie=0,oe=ae.length;ie<oe;ie++)Y=ae[ie],Pe?V&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,Ee,ke,Y.data):t.texImage2D(s.TEXTURE_2D,ie,$e,Y.width,Y.height,0,Ee,ke,Y.data);b.generateMipmaps=!1}else Pe?(Ke&&t.texStorage2D(s.TEXTURE_2D,ue,$e,me.width,me.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ee,ke,me.data)):t.texImage2D(s.TEXTURE_2D,0,$e,me.width,me.height,0,Ee,ke,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,$e,ae[0].width,ae[0].height,me.depth);for(let ie=0,oe=ae.length;ie<oe;ie++)if(Y=ae[ie],b.format!==Mn)if(Ee!==null)if(Pe){if(V)if(b.layerUpdates.size>0){const _e=bh(Y.width,Y.height,b.format,b.type);for(const ze of b.layerUpdates){const Qe=Y.data.subarray(ze*_e/Y.data.BYTES_PER_ELEMENT,(ze+1)*_e/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,ze,Y.width,Y.height,1,Ee,Qe,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,me.depth,Ee,Y.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,$e,Y.width,Y.height,me.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Y.width,Y.height,me.depth,Ee,ke,Y.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,$e,Y.width,Y.height,me.depth,0,Ee,ke,Y.data)}else{Pe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ue,$e,ae[0].width,ae[0].height);for(let ie=0,oe=ae.length;ie<oe;ie++)Y=ae[ie],b.format!==Mn?Ee!==null?Pe?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,Ee,Y.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,$e,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?V&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Y.width,Y.height,Ee,ke,Y.data):t.texImage2D(s.TEXTURE_2D,ie,$e,Y.width,Y.height,0,Ee,ke,Y.data)}else if(b.isDataArrayTexture)if(Pe){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,$e,me.width,me.height,me.depth),V)if(b.layerUpdates.size>0){const ie=bh(me.width,me.height,b.format,b.type);for(const oe of b.layerUpdates){const _e=me.data.subarray(oe*ie/me.data.BYTES_PER_ELEMENT,(oe+1)*ie/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,Ee,ke,_e)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,ke,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,me.width,me.height,me.depth,0,Ee,ke,me.data);else if(b.isData3DTexture)Pe?(Ke&&t.texStorage3D(s.TEXTURE_3D,ue,$e,me.width,me.height,me.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,ke,me.data)):t.texImage3D(s.TEXTURE_3D,0,$e,me.width,me.height,me.depth,0,Ee,ke,me.data);else if(b.isFramebufferTexture){if(Ke)if(Pe)t.texStorage2D(s.TEXTURE_2D,ue,$e,me.width,me.height);else{let ie=me.width,oe=me.height;for(let _e=0;_e<ue;_e++)t.texImage2D(s.TEXTURE_2D,_e,$e,ie,oe,0,Ee,ke,null),ie>>=1,oe>>=1}}else if(ae.length>0){if(Pe&&Ke){const ie=Ge(ae[0]);t.texStorage2D(s.TEXTURE_2D,ue,$e,ie.width,ie.height)}for(let ie=0,oe=ae.length;ie<oe;ie++)Y=ae[ie],Pe?V&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ee,ke,Y):t.texImage2D(s.TEXTURE_2D,ie,$e,Ee,ke,Y);b.generateMipmaps=!1}else if(Pe){if(Ke){const ie=Ge(me);t.texStorage2D(s.TEXTURE_2D,ue,$e,ie.width,ie.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,ke,me)}else t.texImage2D(s.TEXTURE_2D,0,$e,Ee,ke,me);g(b)&&m(de),Fe.__version=le.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function te(U,b,Z){if(b.image.length!==6)return;const de=Ae(U,b),pe=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Z);const le=n.get(pe);if(pe.version!==le.__version||de===!0){t.activeTexture(s.TEXTURE0+Z);const Fe=_t.getPrimaries(_t.workingColorSpace),ye=b.colorSpace===pi?null:_t.getPrimaries(b.colorSpace),Ce=b.colorSpace===pi||Fe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Je=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let oe=0;oe<6;oe++)!Je&&!me?Ee[oe]=v(b.image[oe],!0,i.maxCubemapSize):Ee[oe]=me?b.image[oe].image:b.image[oe],Ee[oe]=Be(b,Ee[oe]);const ke=Ee[0],$e=r.convert(b.format,b.colorSpace),Y=r.convert(b.type),ae=w(b.internalFormat,$e,Y,b.colorSpace),Pe=b.isVideoTexture!==!0,Ke=le.__version===void 0||de===!0,V=pe.dataReady;let ue=E(b,ke);fe(s.TEXTURE_CUBE_MAP,b);let ie;if(Je){Pe&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,ae,ke.width,ke.height);for(let oe=0;oe<6;oe++){ie=Ee[oe].mipmaps;for(let _e=0;_e<ie.length;_e++){const ze=ie[_e];b.format!==Mn?$e!==null?Pe?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,ze.width,ze.height,$e,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,ae,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,0,0,ze.width,ze.height,$e,Y,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e,ae,ze.width,ze.height,0,$e,Y,ze.data)}}}else{if(ie=b.mipmaps,Pe&&Ke){ie.length>0&&ue++;const oe=Ge(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,ae,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Pe?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ee[oe].width,Ee[oe].height,$e,Y,Ee[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ae,Ee[oe].width,Ee[oe].height,0,$e,Y,Ee[oe].data);for(let _e=0;_e<ie.length;_e++){const Qe=ie[_e].image[oe].image;Pe?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,Qe.width,Qe.height,$e,Y,Qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,ae,Qe.width,Qe.height,0,$e,Y,Qe.data)}}else{Pe?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,$e,Y,Ee[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ae,$e,Y,Ee[oe]);for(let _e=0;_e<ie.length;_e++){const ze=ie[_e];Pe?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,0,0,$e,Y,ze.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,_e+1,ae,$e,Y,ze.image[oe])}}}g(b)&&m(s.TEXTURE_CUBE_MAP),le.__version=pe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function he(U,b,Z,de,pe,le){const Fe=r.convert(Z.format,Z.colorSpace),ye=r.convert(Z.type),Ce=w(Z.internalFormat,Fe,ye,Z.colorSpace);if(!n.get(b).__hasExternalTextures){const me=Math.max(1,b.width>>le),Ee=Math.max(1,b.height>>le);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,Ce,me,Ee,b.depth,0,Fe,ye,null):t.texImage2D(pe,le,Ce,me,Ee,0,Fe,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Oe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,pe,n.get(Z).__webglTexture,0,lt(b)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,pe,n.get(Z).__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(U,b,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const de=b.depthTexture,pe=de&&de.isDepthTexture?de.type:null,le=M(b.stencilBuffer,pe),Fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=lt(b);Oe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,le,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,U)}else{const de=b.textures;for(let pe=0;pe<de.length;pe++){const le=de[pe],Fe=r.convert(le.format,le.colorSpace),ye=r.convert(le.type),Ce=w(le.internalFormat,Fe,ye,le.colorSpace),Je=lt(b);Z&&Oe(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ce,b.width,b.height):Oe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,Ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const de=n.get(b.depthTexture).__webglTexture,pe=lt(b);if(b.depthTexture.format===As)Oe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(b.depthTexture.format===Ns)Oe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ve(U){const b=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(b.__webglFramebuffer,U)}else if(Z){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]=s.createRenderbuffer(),Se(b.__webglDepthbuffer[de],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Se(b.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(U,b,Z){const de=n.get(U);b!==void 0&&he(de.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ve(U)}function qe(U){const b=U.texture,Z=n.get(U),de=n.get(b);U.addEventListener("dispose",I);const pe=U.textures,le=U.isWebGLCubeRenderTarget===!0,Fe=pe.length>1;if(Fe||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=b.version,o.memory.textures++),le){Z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[ye]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)Z.__webglFramebuffer[ye][Ce]=s.createFramebuffer()}else Z.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)Z.__webglFramebuffer[ye]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let ye=0,Ce=pe.length;ye<Ce;ye++){const Je=n.get(pe[ye]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&Oe(U)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ye=0;ye<pe.length;ye++){const Ce=pe[ye];Z.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye]);const Je=r.convert(Ce.format,Ce.colorSpace),me=r.convert(Ce.type),Ee=w(Ce.internalFormat,Je,me,Ce.colorSpace,U.isXRRenderTarget===!0),ke=lt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ee,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),fe(s.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)he(Z.__webglFramebuffer[ye][Ce],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ce);else he(Z.__webglFramebuffer[ye],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let ye=0,Ce=pe.length;ye<Ce;ye++){const Je=pe[ye],me=n.get(Je);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),fe(s.TEXTURE_2D,Je),he(Z.__webglFramebuffer,U,Je,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),g(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ye=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,de.__webglTexture),fe(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)he(Z.__webglFramebuffer[Ce],U,b,s.COLOR_ATTACHMENT0,ye,Ce);else he(Z.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,ye,0);g(b)&&m(ye),t.unbindTexture()}U.depthBuffer&&Ve(U)}function ht(U){const b=U.textures;for(let Z=0,de=b.length;Z<de;Z++){const pe=b[Z];if(g(pe)){const le=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Fe=n.get(pe).__webglTexture;t.bindTexture(le,Fe),m(le),t.unbindTexture()}}}const F=[],Xe=[];function tt(U){if(U.samples>0){if(Oe(U)===!1){const b=U.textures,Z=U.width,de=U.height;let pe=s.COLOR_BUFFER_BIT;const le=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=n.get(U),ye=b.length>1;if(ye)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ce]);const Je=n.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,Z,de,0,0,Z,de,pe,s.NEAREST),c===!0&&(F.length=0,Xe.length=0,F.push(s.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(F.push(le),Xe.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ce]);const Je=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function lt(U){return Math.min(i.maxSamples,U.samples)}function Oe(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(U){const b=o.render.frame;u.get(U)!==b&&(u.set(U,b),U.update())}function Be(U,b){const Z=U.colorSpace,de=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==qt&&Z!==pi&&(_t.getTransfer(Z)===Tt?(de!==Mn||pe!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),b}function Ge(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=S,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=We,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe}function W_(s,e){function t(n,i=pi){let r;const o=_t.getTransfer(i);if(n===ii)return s.UNSIGNED_BYTE;if(n===tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.BYTE;if(n===Tu)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Sr)return s.HALF_FLOAT;if(n===Ru)return s.ALPHA;if(n===Cu)return s.RGB;if(n===Mn)return s.RGBA;if(n===Pu)return s.LUMINANCE;if(n===Iu)return s.LUMINANCE_ALPHA;if(n===As)return s.DEPTH_COMPONENT;if(n===Ns)return s.DEPTH_STENCIL;if(n===il)return s.RED;if(n===sl)return s.RED_INTEGER;if(n===Lu)return s.RG;if(n===rl)return s.RG_INTEGER;if(n===ol)return s.RGBA_INTEGER;if(n===vo||n===xo||n===yo||n===Mo)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===lc||n===hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uc||n===fc||n===dc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uc||n===fc)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Mc||n===Sc||n===Ec||n===wc||n===Ac||n===Tc||n===bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ac)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bc)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===Rc||n===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Pc||n===Ic||n===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class $_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:j_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends Hs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const v=new K_,g=t.getContextAttributes();let m=null,w=null;const M=[],E=[],D=new je;let I=null;const P=new Qt;P.layers.enable(1),P.viewport=new dt;const k=new Qt;k.layers.enable(2),k.viewport=new dt;const R=[P,k],A=new $_;A.layers.enable(1),A.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=M[te];return he===void 0&&(he=new Oa,M[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=M[te];return he===void 0&&(he=new Oa,M[te]=he),he.getGripSpace()},this.getHand=function(te){let he=M[te];return he===void 0&&(he=new Oa,M[te]=he),he.getHandSpace()};function B(te){const he=E.indexOf(te.inputSource);if(he===-1)return;const Se=M[he];Se!==void 0&&(Se.update(te.inputSource,te.frame,l||o),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let te=0;te<M.length;te++){const he=E[te];he!==null&&(E[te]=null,M[te].disconnect(he))}S=null,L=null,v.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,w=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Si(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,Se=null,we=null;g.depth&&(we=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?Ns:As,Se=g.stencil?Us:ki);const Ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Si(f.textureWidth,f.textureHeight,{format:Mn,type:ii,depthTexture:new Xu(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(te){for(let he=0;he<te.removed.length;he++){const Se=te.removed[he],we=E.indexOf(Se);we>=0&&(E[we]=null,M[we].disconnect(Se))}for(let he=0;he<te.added.length;he++){const Se=te.added[he];let we=E.indexOf(Se);if(we===-1){for(let We=0;We<M.length;We++)if(We>=E.length){E.push(Se),we=We;break}else if(E[We]===null){E[We]=Se,we=We;break}if(we===-1)break}const Ve=M[we];Ve&&Ve.connect(Se)}}const X=new N,K=new N;function H(te,he,Se){X.setFromMatrixPosition(he.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const we=X.distanceTo(K),Ve=he.projectionMatrix.elements,We=Se.projectionMatrix.elements,qe=Ve[14]/(Ve[10]-1),ht=Ve[14]/(Ve[10]+1),F=(Ve[9]+1)/Ve[5],Xe=(Ve[9]-1)/Ve[5],tt=(Ve[8]-1)/Ve[0],lt=(We[8]+1)/We[0],Oe=qe*tt,ut=qe*lt,Be=we/(-tt+lt),Ge=Be*-tt;he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ge),te.translateZ(Be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const U=qe+Be,b=ht+Be,Z=Oe-Ge,de=ut+(we-Ge),pe=F*ht/b*U,le=Xe*ht/b*U;te.projectionMatrix.makePerspective(Z,de,pe,le,U,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function J(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;v.texture!==null&&(te.near=v.depthNear,te.far=v.depthFar),A.near=k.near=P.near=te.near,A.far=k.far=P.far=te.far,(S!==A.near||L!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),S=A.near,L=A.far,P.near=S,P.far=L,k.near=S,k.far=L,P.updateProjectionMatrix(),k.updateProjectionMatrix(),te.updateProjectionMatrix());const he=te.parent,Se=A.cameras;J(A,he);for(let we=0;we<Se.length;we++)J(Se[we],he);Se.length===2?H(A,P,k):A.projectionMatrix.copy(P.projectionMatrix),se(te,A,he)};function se(te,he,Se){Se===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Os*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)};let fe=null;function Ae(te,he){if(u=he.getViewerPose(l||o),_=he,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let we=!1;Se.length!==A.cameras.length&&(A.cameras.length=0,we=!0);for(let We=0;We<Se.length;We++){const qe=Se[We];let ht=null;if(d!==null)ht=d.getViewport(qe);else{const Xe=h.getViewSubImage(f,qe);ht=Xe.viewport,We===0&&(e.setRenderTargetTextures(w,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(w))}let F=R[We];F===void 0&&(F=new Qt,F.layers.enable(We),F.viewport=new dt,R[We]=F),F.matrix.fromArray(qe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(qe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(ht.x,ht.y,ht.width,ht.height),We===0&&(A.matrix.copy(F.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),we===!0&&A.cameras.push(F)}const Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const We=h.getDepthInformation(Se[0]);We&&We.isValid&&We.texture&&v.init(e,We,i.renderState)}}for(let Se=0;Se<M.length;Se++){const we=E[Se],Ve=M[Se];we!==null&&Ve!==void 0&&Ve.update(we,he,l||o)}fe&&fe(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const Q=new $u;Q.setAnimationLoop(Ae),this.setAnimationLoop=function(te){fe=te},this.dispose=function(){}}}const Pi=new Dt,Z_=new Ie;function J_(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Vu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,w,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===an&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===an&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),M=w.envMap,E=w.envMapRotation;M&&(g.envMap.value=M,Pi.copy(E),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),g.envMapRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Pi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===an&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Q_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const E=M.program;n.uniformBlockBinding(w,E)}function l(w,M){let E=i[w.id];E===void 0&&(_(w),E=u(w),i[w.id]=E,w.addEventListener("dispose",g));const D=M.program;n.updateUBOMapping(w,D);const I=e.render.frame;r[w.id]!==I&&(f(w),r[w.id]=I)}function u(w){const M=h();w.__bindingPointIndex=M;const E=s.createBuffer(),D=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,D,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,E),E}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=i[w.id],E=w.uniforms,D=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let I=0,P=E.length;I<P;I++){const k=Array.isArray(E[I])?E[I]:[E[I]];for(let R=0,A=k.length;R<A;R++){const S=k[R];if(d(S,I,R,D)===!0){const L=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let W=0;for(let $=0;$<B.length;$++){const X=B[$],K=v(X);typeof X=="number"||typeof X=="boolean"?(S.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,L+W,S.__data)):X.isMatrix3?(S.__data[0]=X.elements[0],S.__data[1]=X.elements[1],S.__data[2]=X.elements[2],S.__data[3]=0,S.__data[4]=X.elements[3],S.__data[5]=X.elements[4],S.__data[6]=X.elements[5],S.__data[7]=0,S.__data[8]=X.elements[6],S.__data[9]=X.elements[7],S.__data[10]=X.elements[8],S.__data[11]=0):(X.toArray(S.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,M,E,D){const I=w.value,P=M+"_"+E;if(D[P]===void 0)return typeof I=="number"||typeof I=="boolean"?D[P]=I:D[P]=I.clone(),!0;{const k=D[P];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return D[P]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function _(w){const M=w.uniforms;let E=0;const D=16;for(let P=0,k=M.length;P<k;P++){const R=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,S=R.length;A<S;A++){const L=R[A],B=Array.isArray(L.value)?L.value:[L.value];for(let W=0,$=B.length;W<$;W++){const X=B[W],K=v(X),H=E%D;H!==0&&D-H<K.boundary&&(E+=D-H),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=K.storage}}}const I=E%D;return I>0&&(E+=D-I),w.__size=E,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function g(w){const M=w.target;M.removeEventListener("dispose",g);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:m}}class ev{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,g=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=xi,this.toneMappingExposure=1;const M=this;let E=!1,D=0,I=0,P=null,k=-1,R=null;const A=new dt,S=new dt;let L=null;const B=new Me(0);let W=0,$=t.width,X=t.height,K=1,H=null,J=null;const se=new dt(0,0,$,X),fe=new dt(0,0,$,X);let Ae=!1;const Q=new ul;let te=!1,he=!1;const Se=new Ie,we=new N,Ve=new dt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function ht(){return P===null?K:1}let F=n;function Xe(T,O){return t.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const O="webgl2";if(F=Xe(O,T),F===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let tt,lt,Oe,ut,Be,Ge,U,b,Z,de,pe,le,Fe,ye,Ce,Je,me,Ee,ke,$e,Y,ae,Pe,Ke;function V(){tt=new a0(F),tt.init(),ae=new W_(F,tt),lt=new t0(F,tt,e,ae),Oe=new H_(F),ut=new h0(F),Be=new b_,Ge=new G_(F,tt,Oe,Be,lt,ae,ut),U=new i0(M),b=new o0(M),Z=new _p(F),Pe=new Qg(F,Z),de=new c0(F,Z,ut,Pe),pe=new f0(F,de,Z,ut),ke=new u0(F,lt,Ge),Je=new n0(Be),le=new T_(M,U,b,tt,lt,Pe,Je),Fe=new J_(M,Be),ye=new C_,Ce=new N_(tt),Ee=new Jg(M,U,b,Oe,pe,f,c),me=new k_(M,pe,lt),Ke=new Q_(F,ut,lt,Oe),$e=new e0(F,tt,ut),Y=new l0(F,tt,ut),ut.programs=le.programs,M.capabilities=lt,M.extensions=tt,M.properties=Be,M.renderLists=ye,M.shadowMap=me,M.state=Oe,M.info=ut}V();const ue=new Y_(M,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=tt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=tt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize($,X,!1))},this.getSize=function(T){return T.set($,X)},this.setSize=function(T,O,j=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,X=O,t.width=Math.floor(T*K),t.height=Math.floor(O*K),j===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set($*K,X*K).floor()},this.setDrawingBufferSize=function(T,O,j){$=T,X=O,K=j,t.width=Math.floor(T*j),t.height=Math.floor(O*j),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,O,j,G){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,O,j,G),Oe.viewport(A.copy(se).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,O,j,G){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,O,j,G),Oe.scissor(S.copy(fe).multiplyScalar(K).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){Oe.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){J=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,O=!0,j=!0){let G=0;if(T){let z=!1;if(P!==null){const ne=P.texture.format;z=ne===ol||ne===rl||ne===sl}if(z){const ne=P.texture.type,ce=ne===ii||ne===ki||ne===fr||ne===Us||ne===tl||ne===nl,ee=Ee.getClearColor(),ge=Ee.getClearAlpha(),Ue=ee.r,Le=ee.g,xe=ee.b;ce?(d[0]=Ue,d[1]=Le,d[2]=xe,d[3]=ge,F.clearBufferuiv(F.COLOR,0,d)):(_[0]=Ue,_[1]=Le,_[2]=xe,_[3]=ge,F.clearBufferiv(F.COLOR,0,_))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT),j&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ye.dispose(),Ce.dispose(),Be.dispose(),U.dispose(),b.dispose(),pe.dispose(),Pe.dispose(),Ke.dispose(),le.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Mt),ue.removeEventListener("sessionend",Ye),ot.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ut.autoReset,O=me.enabled,j=me.autoUpdate,G=me.needsUpdate,z=me.type;V(),ut.autoReset=T,me.enabled=O,me.autoUpdate=j,me.needsUpdate=G,me.type=z}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){const O=T.target;O.removeEventListener("dispose",ze),Qe(O)}function Qe(T){pt(T),Be.remove(T)}function pt(T){const O=Be.get(T).programs;O!==void 0&&(O.forEach(function(j){le.releaseProgram(j)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,j,G,z,ne){O===null&&(O=We);const ce=z.isMesh&&z.matrixWorld.determinant()<0,ee=ve(T,O,j,G,z);Oe.setMaterial(G,ce);let ge=j.index,Ue=1;if(G.wireframe===!0){if(ge=de.getWireframeAttribute(j),ge===void 0)return;Ue=2}const Le=j.drawRange,xe=j.attributes.position;let De=Le.start*Ue,mt=(Le.start+Le.count)*Ue;ne!==null&&(De=Math.max(De,ne.start*Ue),mt=Math.min(mt,(ne.start+ne.count)*Ue)),ge!==null?(De=Math.max(De,0),mt=Math.min(mt,ge.count)):xe!=null&&(De=Math.max(De,0),mt=Math.min(mt,xe.count));const gt=mt-De;if(gt<0||gt===1/0)return;Pe.setup(z,G,ee,j,ge);let At,Ze=$e;if(ge!==null&&(At=Z.get(ge),Ze=Y,Ze.setIndex(At)),z.isMesh)G.wireframe===!0?(Oe.setLineWidth(G.wireframeLinewidth*ht()),Ze.setMode(F.LINES)):Ze.setMode(F.TRIANGLES);else if(z.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Oe.setLineWidth(Te*ht()),z.isLineSegments?Ze.setMode(F.LINES):z.isLineLoop?Ze.setMode(F.LINE_LOOP):Ze.setMode(F.LINE_STRIP)}else z.isPoints?Ze.setMode(F.POINTS):z.isSprite&&Ze.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Te=z._multiDrawStarts,Lt=z._multiDrawCounts,st=z._multiDrawCount,tn=ge?Z.get(ge).bytesPerElement:1,nn=Be.get(G).currentProgram.getUniforms();for(let Gt=0;Gt<st;Gt++)nn.setValue(F,"_gl_DrawID",Gt),Ze.render(Te[Gt]/tn,Lt[Gt])}else if(z.isInstancedMesh)Ze.renderInstances(De,gt,z.count);else if(j.isInstancedBufferGeometry){const Te=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Lt=Math.min(j.instanceCount,Te);Ze.renderInstances(De,gt,Lt)}else Ze.render(De,gt)};function yt(T,O,j){T.transparent===!0&&T.side===pn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,C(T,O,j),T.side=ni,T.needsUpdate=!0,C(T,O,j),T.side=pn):C(T,O,j)}this.compile=function(T,O,j=null){j===null&&(j=T),g=Ce.get(j),g.init(O),w.push(g),j.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),T!==j&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const G=new Set;return T.traverse(function(z){const ne=z.material;if(ne)if(Array.isArray(ne))for(let ce=0;ce<ne.length;ce++){const ee=ne[ce];yt(ee,j,z),G.add(ee)}else yt(ne,j,z),G.add(ne)}),w.pop(),g=null,G},this.compileAsync=function(T,O,j=null){const G=this.compile(T,O,j);return new Promise(z=>{function ne(){if(G.forEach(function(ce){Be.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){z(T);return}setTimeout(ne,10)}tt.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let it=null;function wt(T){it&&it(T)}function Mt(){ot.stop()}function Ye(){ot.start()}const ot=new $u;ot.setAnimationLoop(wt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(T){it=T,ue.setAnimationLoop(T),T===null?ot.stop():ot.start()},ue.addEventListener("sessionstart",Mt),ue.addEventListener("sessionend",Ye),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,O,P),g=Ce.get(T,w.length),g.init(O),w.push(g),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Se),he=this.localClippingEnabled,te=Je.init(this.clippingPlanes,he),v=ye.get(T,m.length),v.init(),m.push(v),ue.enabled===!0&&ue.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&ln(ne,O,-1/0,M.sortObjects)}ln(T,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(H,J),qe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,qe&&Ee.addToRenderList(v,T),this.info.render.frame++,te===!0&&Je.beginShadows();const j=g.state.shadowsArray;me.render(j,T,O),te===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,z=v.transmissive;if(g.setupLights(),O.isArrayCamera){const ne=O.cameras;if(z.length>0)for(let ce=0,ee=ne.length;ce<ee;ce++){const ge=ne[ce];x(G,z,T,ge)}qe&&Ee.render(T);for(let ce=0,ee=ne.length;ce<ee;ce++){const ge=ne[ce];Sn(v,T,ge,ge.viewport)}}else z.length>0&&x(G,z,T,O),qe&&Ee.render(T),Sn(v,T,O);P!==null&&(Ge.updateMultisampleRenderTarget(P),Ge.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(M,T,O),Pe.resetDefaultState(),k=-1,R=null,w.pop(),w.length>0?(g=w[w.length-1],te===!0&&Je.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ln(T,O,j,G){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){G&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);const ce=pe.update(T),ee=T.material;ee.visible&&v.push(T,ce,ee,j,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const ce=pe.update(T),ee=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ve.copy(ce.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(ee)){const ge=ce.groups;for(let Ue=0,Le=ge.length;Ue<Le;Ue++){const xe=ge[Ue],De=ee[xe.materialIndex];De&&De.visible&&v.push(T,ce,De,j,Ve.z,xe)}}else ee.visible&&v.push(T,ce,ee,j,Ve.z,null)}}const ne=T.children;for(let ce=0,ee=ne.length;ce<ee;ce++)ln(ne[ce],O,j,G)}function Sn(T,O,j,G){const z=T.opaque,ne=T.transmissive,ce=T.transparent;g.setupLightsView(j),te===!0&&Je.setGlobalState(M.clippingPlanes,j),G&&Oe.viewport(A.copy(G)),z.length>0&&p(z,O,j),ne.length>0&&p(ne,O,j),ce.length>0&&p(ce,O,j),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function x(T,O,j,G){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new Si(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Sr:ii,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const ne=g.state.transmissionRenderTarget[G.id],ce=G.viewport||A;ne.setSize(ce.z,ce.w);const ee=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(B),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),qe?Ee.render(j):M.clear();const ge=M.toneMapping;M.toneMapping=xi;const Ue=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),te===!0&&Je.setGlobalState(M.clippingPlanes,G),p(T,j,G),Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let xe=0,De=O.length;xe<De;xe++){const mt=O[xe],gt=mt.object,At=mt.geometry,Ze=mt.material,Te=mt.group;if(Ze.side===pn&&gt.layers.test(G.layers)){const Lt=Ze.side;Ze.side=an,Ze.needsUpdate=!0,y(gt,j,G,At,Ze,Te),Ze.side=Lt,Ze.needsUpdate=!0,Le=!0}}Le===!0&&(Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne))}M.setRenderTarget(ee),M.setClearColor(B,W),Ue!==void 0&&(G.viewport=Ue),M.toneMapping=ge}function p(T,O,j){const G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ne=T.length;z<ne;z++){const ce=T[z],ee=ce.object,ge=ce.geometry,Ue=G===null?ce.material:G,Le=ce.group;ee.layers.test(j.layers)&&y(ee,O,j,ge,Ue,Le)}}function y(T,O,j,G,z,ne){T.onBeforeRender(M,O,j,G,z,ne),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.transparent===!0&&z.side===pn&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,M.renderBufferDirect(j,O,G,z,T,ne),z.side=ni,z.needsUpdate=!0,M.renderBufferDirect(j,O,G,z,T,ne),z.side=pn):M.renderBufferDirect(j,O,G,z,T,ne),T.onAfterRender(M,O,j,G,z,ne)}function C(T,O,j){O.isScene!==!0&&(O=We);const G=Be.get(T),z=g.state.lights,ne=g.state.shadowsArray,ce=z.state.version,ee=le.getParameters(T,z.state,ne,O,j),ge=le.getProgramCacheKey(ee);let Ue=G.programs;G.environment=T.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(T.isMeshStandardMaterial?b:U).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",ze),Ue=new Map,G.programs=Ue);let Le=Ue.get(ge);if(Le!==void 0){if(G.currentProgram===Le&&G.lightsStateVersion===ce)return re(T,ee),Le}else ee.uniforms=le.getUniforms(T),T.onBeforeCompile(ee,M),Le=le.acquireProgram(ee,ge),Ue.set(ge,Le),G.uniforms=ee.uniforms;const xe=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xe.clippingPlanes=Je.uniform),re(T,ee),G.needsLights=et(T),G.lightsStateVersion=ce,G.needsLights&&(xe.ambientLightColor.value=z.state.ambient,xe.lightProbe.value=z.state.probe,xe.directionalLights.value=z.state.directional,xe.directionalLightShadows.value=z.state.directionalShadow,xe.spotLights.value=z.state.spot,xe.spotLightShadows.value=z.state.spotShadow,xe.rectAreaLights.value=z.state.rectArea,xe.ltc_1.value=z.state.rectAreaLTC1,xe.ltc_2.value=z.state.rectAreaLTC2,xe.pointLights.value=z.state.point,xe.pointLightShadows.value=z.state.pointShadow,xe.hemisphereLights.value=z.state.hemi,xe.directionalShadowMap.value=z.state.directionalShadowMap,xe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,xe.spotShadowMap.value=z.state.spotShadowMap,xe.spotLightMatrix.value=z.state.spotLightMatrix,xe.spotLightMap.value=z.state.spotLightMap,xe.pointShadowMap.value=z.state.pointShadowMap,xe.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Le,G.uniformsList=null,Le}function q(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Eo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function re(T,O){const j=Be.get(T);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function ve(T,O,j,G,z){O.isScene!==!0&&(O=We),Ge.resetTextureUnits();const ne=O.fog,ce=G.isMeshStandardMaterial?O.environment:null,ee=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qt,ge=(G.isMeshStandardMaterial?b:U).get(G.envMap||ce),Ue=G.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!j.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),xe=!!j.morphAttributes.position,De=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let gt=xi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(gt=M.toneMapping);const At=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=At!==void 0?At.length:0,Te=Be.get(G),Lt=g.state.lights;if(te===!0&&(he===!0||T!==R)){const gn=T===R&&G.id===k;Je.setState(G,T,gn)}let st=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Lt.state.version||Te.outputColorSpace!==ee||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==ge||G.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Je.numPlanes||Te.numIntersection!==Je.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Le||Te.morphTargets!==xe||Te.morphNormals!==De||Te.morphColors!==mt||Te.toneMapping!==gt||Te.morphTargetsCount!==Ze)&&(st=!0):(st=!0,Te.__version=G.version);let tn=Te.currentProgram;st===!0&&(tn=C(G,O,z));let nn=!1,Gt=!1,ca=!1;const Ot=tn.getUniforms(),si=Te.uniforms;if(Oe.useProgram(tn.program)&&(nn=!0,Gt=!0,ca=!0),G.id!==k&&(k=G.id,Gt=!0),nn||R!==T){Ot.setValue(F,"projectionMatrix",T.projectionMatrix),Ot.setValue(F,"viewMatrix",T.matrixWorldInverse);const gn=Ot.map.cameraPosition;gn!==void 0&&gn.setValue(F,we.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Ot.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ot.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Gt=!0,ca=!0)}if(z.isSkinnedMesh){Ot.setOptional(F,z,"bindMatrix"),Ot.setOptional(F,z,"bindMatrixInverse");const gn=z.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ot.setValue(F,"boneTexture",gn.boneTexture,Ge))}z.isBatchedMesh&&(Ot.setOptional(F,z,"batchingTexture"),Ot.setValue(F,"batchingTexture",z._matricesTexture,Ge),Ot.setOptional(F,z,"batchingIdTexture"),Ot.setValue(F,"batchingIdTexture",z._indirectTexture,Ge),Ot.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Ot.setValue(F,"batchingColorTexture",z._colorsTexture,Ge));const la=j.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&ke.update(z,j,tn),(Gt||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Ot.setValue(F,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(si.envMap.value=ge,si.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(si.envMapIntensity.value=O.environmentIntensity),Gt&&(Ot.setValue(F,"toneMappingExposure",M.toneMappingExposure),Te.needsLights&&Re(si,ca),ne&&G.fog===!0&&Fe.refreshFogUniforms(si,ne),Fe.refreshMaterialUniforms(si,G,K,X,g.state.transmissionRenderTarget[T.id]),Eo.upload(F,q(Te),si,Ge)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Eo.upload(F,q(Te),si,Ge),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ot.setValue(F,"center",z.center),Ot.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(F,"normalMatrix",z.normalMatrix),Ot.setValue(F,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const gn=G.uniformsGroups;for(let ha=0,Lf=gn.length;ha<Lf;ha++){const bl=gn[ha];Ke.update(bl,tn),Ke.bind(bl,tn)}}return tn}function Re(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function et(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,j){Be.get(T.texture).__webglTexture=O,Be.get(T.depthTexture).__webglTexture=j;const G=Be.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=j===void 0,G.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const j=Be.get(T);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,j=0){P=T,D=O,I=j;let G=!0,z=null,ne=!1,ce=!1;if(T){const ge=Be.get(T);ge.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):ge.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):ge.__hasExternalTextures&&Ge.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ce=!0);const Le=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?z=Le[O][j]:z=Le[O],ne=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?z=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[j]:z=Le,A.copy(T.viewport),S.copy(T.scissor),L=T.scissorTest}else A.copy(se).multiplyScalar(K).floor(),S.copy(fe).multiplyScalar(K).floor(),L=Ae;if(Oe.bindFramebuffer(F.FRAMEBUFFER,z)&&G&&Oe.drawBuffers(T,z),Oe.viewport(A),Oe.scissor(S),Oe.setScissorTest(L),ne){const ge=Be.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,j)}else if(ce){const ge=Be.get(T.texture),Ue=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ge.__webglTexture,j||0,Ue)}k=-1},this.readRenderTargetPixels=function(T,O,j,G,z,ne,ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(ee=ee[ce]),ee){Oe.bindFramebuffer(F.FRAMEBUFFER,ee);try{const ge=T.texture,Ue=ge.format,Le=ge.type;if(!lt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-G&&j>=0&&j<=T.height-z&&F.readPixels(O,j,G,z,ae.convert(Ue),ae.convert(Le),ne)}finally{const ge=P!==null?Be.get(P).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,O,j,G,z,ne,ce){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(ee=ee[ce]),ee){Oe.bindFramebuffer(F.FRAMEBUFFER,ee);try{const ge=T.texture,Ue=ge.format,Le=ge.type;if(!lt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-G&&j>=0&&j<=T.height-z){const xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.bufferData(F.PIXEL_PACK_BUFFER,ne.byteLength,F.STREAM_READ),F.readPixels(O,j,G,z,ae.convert(Ue),ae.convert(Le),0),F.flush();const De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);await Xd(F,De,4);try{F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ne)}finally{F.deleteBuffer(xe),F.deleteSync(De)}return ne}}finally{const ge=P!==null?Be.get(P).__webglFramebuffer:null;Oe.bindFramebuffer(F.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(T,O=null,j=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-j),z=Math.floor(T.image.width*G),ne=Math.floor(T.image.height*G),ce=O!==null?O.x:0,ee=O!==null?O.y:0;Ge.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,ce,ee,z,ne),Oe.unbindTexture()},this.copyTextureToTexture=function(T,O,j=null,G=null,z=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],O=arguments[2],z=arguments[3]||0,j=null);let ne,ce,ee,ge,Ue,Le;j!==null?(ne=j.max.x-j.min.x,ce=j.max.y-j.min.y,ee=j.min.x,ge=j.min.y):(ne=T.image.width,ce=T.image.height,ee=0,ge=0),G!==null?(Ue=G.x,Le=G.y):(Ue=0,Le=0);const xe=ae.convert(O.format),De=ae.convert(O.type);Ge.setTexture2D(O,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const mt=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),At=F.getParameter(F.UNPACK_SKIP_PIXELS),Ze=F.getParameter(F.UNPACK_SKIP_ROWS),Te=F.getParameter(F.UNPACK_SKIP_IMAGES),Lt=T.isCompressedTexture?T.mipmaps[z]:T.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,ge),T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,Ue,Le,ne,ce,xe,De,Lt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,Ue,Le,Lt.width,Lt.height,xe,Lt.data):F.texSubImage2D(F.TEXTURE_2D,z,Ue,Le,ne,ce,xe,De,Lt),F.pixelStorei(F.UNPACK_ROW_LENGTH,mt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,At),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Te),z===0&&O.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(T,O,j=null,G=null,z=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,G=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0);let ne,ce,ee,ge,Ue,Le,xe,De,mt;const gt=T.isCompressedTexture?T.mipmaps[z]:T.image;j!==null?(ne=j.max.x-j.min.x,ce=j.max.y-j.min.y,ee=j.max.z-j.min.z,ge=j.min.x,Ue=j.min.y,Le=j.min.z):(ne=gt.width,ce=gt.height,ee=gt.depth,ge=0,Ue=0,Le=0),G!==null?(xe=G.x,De=G.y,mt=G.z):(xe=0,De=0,mt=0);const At=ae.convert(O.format),Ze=ae.convert(O.type);let Te;if(O.isData3DTexture)Ge.setTexture3D(O,0),Te=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ge.setTexture2DArray(O,0),Te=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Lt=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),tn=F.getParameter(F.UNPACK_SKIP_PIXELS),nn=F.getParameter(F.UNPACK_SKIP_ROWS),Gt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ge),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le),T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Te,z,xe,De,mt,ne,ce,ee,At,Ze,gt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,z,xe,De,mt,ne,ce,ee,At,gt.data):F.texSubImage3D(Te,z,xe,De,mt,ne,ce,ee,At,Ze,gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,tn),F.pixelStorei(F.UNPACK_SKIP_ROWS,nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gt),z===0&&O.generateMipmaps&&F.generateMipmap(Te),Oe.unbindTexture()},this.initRenderTarget=function(T){Be.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Oe.unbindTexture()},this.resetState=function(){D=0,I=0,P=null,Oe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===al?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Wo?"display-p3":"srgb"}}class dl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zu extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dt,this.environmentIntensity=1,this.environmentRotation=new Dt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ll("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class gr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _r extends cn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const Ys=new N,hs=new N,us=new N,fs=new je,Zs=new je,Qu=new Ie,Yr=new N,Js=new N,Zr=new N,Rh=new je,Fa=new je,Ch=new je;class Uo extends St{constructor(e=new _r){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ju(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new gr(n,3,0,!1)),ls.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Qu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Jr(Yr.set(-.5,-.5,0),us,o,hs,i,r),Jr(Js.set(.5,-.5,0),us,o,hs,i,r),Jr(Zr.set(.5,.5,0),us,o,hs,i,r),Rh.set(0,0),Fa.set(1,0),Ch.set(1,1);let a=e.ray.intersectTriangle(Yr,Js,Zr,!1,Ys);if(a===null&&(Jr(Js.set(-.5,.5,0),us,o,hs,i,r),Fa.set(0,1),a=e.ray.intersectTriangle(Yr,Zr,Js,!1,Ys),a===null))return;const c=e.ray.origin.distanceTo(Ys);c<e.near||c>e.far||t.push({distance:c,point:Ys.clone(),uv:In.getInterpolation(Ys,Yr,Js,Zr,Rh,Fa,Ch,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jr(s,e,t,n,i,r){fs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zs.x=r*fs.x-i*fs.y,Zs.y=i*fs.x+r*fs.y):Zs.copy(fs),s.copy(e),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(Qu)}const Ph=new N,Ih=new dt,Lh=new dt,tv=new N,Dh=new Ie,Qr=new N,Ba=new Vn,Uh=new Ie,za=new $o;class ef extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Il,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ba.copy(this.boundingSphere),Ba.applyMatrix4(i),e.ray.intersectsSphere(Ba)!==!1&&(Uh.copy(i).invert(),za.copy(e.ray).applyMatrix4(Uh),!(this.boundingBox!==null&&za.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,za)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ih.fromBufferAttribute(i.attributes.skinIndex,e),Lh.fromBufferAttribute(i.attributes.skinWeight,e),Ph.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Lh.getComponent(r);if(o!==0){const a=Ih.getComponent(r);Dh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tv.copy(Ph).applyMatrix4(Dh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class No extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tf extends zt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Xt,u=Xt,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new Ie,nv=new Ie;class jo{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:nv;Nh.multiplyMatrices(a,t[r]),Nh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tf(t,e,e,Mn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new No),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Oc extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ie,Oh=new Ie,eo=[],Fh=new hn,iv=new Ie,Qs=new Rt,er=new Vn;class ar extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Fh.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),er.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),e.ray.intersectsSphere(er)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ds),Oh.multiplyMatrices(n,ds),Qs.matrixWorld=Oh,Qs.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const c=eo[o];c.instanceId=r,c.object=this,t.push(c)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tf(new Float32Array(i*this.count),i,this.count,il,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bs extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oo=new N,Fo=new N,Bh=new Ie,tr=new $o,to=new Vn,ka=new N,zh=new N;class qo extends St{constructor(e=new Ut,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oo.fromBufferAttribute(t,i-1),Fo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oo.distanceTo(Fo);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;Bh.copy(i).invert(),tr.copy(e.ray).applyMatrix4(Bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=l){const m=u.getX(v),w=u.getX(v+1),M=no(this,e,tr,c,m,w);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(d),m=no(this,e,tr,c,v,g);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=d,g=_-1;v<g;v+=l){const m=no(this,e,tr,c,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=no(this,e,tr,c,_-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Oo.fromBufferAttribute(o,i),Fo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,Fo,ka,zh)>n)return;ka.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ka);if(!(c<e.near||c>e.far))return{distance:c,point:zh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const kh=new N,Hh=new N;class Fc extends qo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kh.fromBufferAttribute(t,i),Hh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(Hh);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sv extends qo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gi extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new Ie,Bc=new $o,io=new Vn,so=new N;class Rs extends St{constructor(e=new Ut,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Vh.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(Vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=f,v=d;_<v;_++){const g=l.getX(_);so.fromBufferAttribute(h,g),Gh(so,g,c,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,v=d;_<v;_++)so.fromBufferAttribute(h,_),Gh(so,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(s,e,t,n,i,r,o){const a=Bc.distanceSqToPoint(s);if(a<t){const c=new N;Bc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class vr extends zt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new je:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],r=[],o=[],a=new N,c=new Ie;for(let d=0;d<=e;d++){const _=d/e;i[d]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,_))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos($t(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],d*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ko extends Ut{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const v=[],g=n/2;let m=0;w(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(d,2));function w(){const E=new N,D=new N;let I=0;const P=(t-e)/n;for(let k=0;k<=r;k++){const R=[],A=k/r,S=A*(t-e)+e;for(let L=0;L<=i;L++){const B=L/i,W=B*c+a,$=Math.sin(W),X=Math.cos(W);D.x=S*$,D.y=-A*n+g,D.z=S*X,h.push(D.x,D.y,D.z),E.set($,P,X).normalize(),f.push(E.x,E.y,E.z),d.push(B,1-A),R.push(_++)}v.push(R)}for(let k=0;k<i;k++)for(let R=0;R<r;R++){const A=v[R][k],S=v[R+1][k],L=v[R+1][k+1],B=v[R][k+1];u.push(A,S,B),u.push(S,L,B),I+=6}l.addGroup(m,I,0),m+=I}function M(E){const D=_,I=new je,P=new N;let k=0;const R=E===!0?e:t,A=E===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),_++;const S=_;for(let L=0;L<=i;L++){const W=L/i*c+a,$=Math.cos(W),X=Math.sin(W);P.x=R*X,P.y=g*A,P.z=R*$,h.push(P.x,P.y,P.z),f.push(0,A,0),I.x=$*.5+.5,I.y=X*.5*A+.5,d.push(I.x,I.y),_++}for(let L=0;L<i;L++){const B=D+L,W=S+L;E===!0?u.push(W,W+1,B):u.push(W+1,W,B),k+=3}l.addGroup(m,k,E===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pl extends Ko{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ov={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=nf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=uv(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let _=t;_<i;_+=t)h=s[_],f=s[_+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return xr(r,o,t,a,c,d,0),o}};function nf(s,e,t,n,i){let r,o;if(i===Sv(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Wh(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wh(r,s[r],s[r+1],o);return o&&Yo(o,o.next)&&(Mr(o),o=o.next),o}function Vi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&gv(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?cv(s,n,i,r):av(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Mr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=lv(Vi(s),e,t),xr(s,e,t,n,i,r,2)):o===2&&hv(s,e,t,n,i,r):xr(Vi(s),e,t,n,i,r,1);break}}}function av(s){const e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&Ms(i,a,r,c,o,l,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function cv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,_=u<h?u<f?u:f:h<f?h:f,v=a>c?a>l?a:l:c>l?c:l,g=u>h?u>f?u:f:h>f?h:f,m=zc(d,_,e,t,n),w=zc(v,g,e,t,n);let M=s.prevZ,E=s.nextZ;for(;M&&M.z>=m&&E&&E.z<=w;){if(M.x>=d&&M.x<=v&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&Ms(a,u,c,h,l,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=d&&E.x<=v&&E.y>=_&&E.y<=g&&E!==i&&E!==o&&Ms(a,u,c,h,l,f,E.x,E.y)&&Pt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=_&&M.y<=g&&M!==i&&M!==o&&Ms(a,u,c,h,l,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=w;){if(E.x>=d&&E.x<=v&&E.y>=_&&E.y<=g&&E!==i&&E!==o&&Ms(a,u,c,h,l,f,E.x,E.y)&&Pt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function lv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Yo(i,r)&&sf(i,n,n.next,r)&&yr(i,r)&&yr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Mr(n),Mr(n.next),n=s=r),n=n.next}while(n!==s);return Vi(n)}function hv(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let c=rf(o,a);o=Vi(o,o.next),c=Vi(c,c.next),xr(o,e,t,n,i,r,0),xr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function uv(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=nf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(vv(l));for(i.sort(fv),r=0;r<i.length;r++)t=dv(i[r],t);return t}function fv(s,e){return s.x-e.x}function dv(s,e){const t=pv(s,e);if(!t)return e;const n=rf(t,s);return Vi(n,n.next),Vi(t,t.next)}function pv(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ms(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),yr(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&mv(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function mv(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function gv(s,e,t,n){let i=s;do i.z===0&&(i.z=zc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_v(i)}function _v(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function zc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function vv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ms(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function xv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yv(s,e)&&(yr(s,e)&&yr(e,s)&&Mv(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Yo(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yo(s,e){return s.x===e.x&&s.y===e.y}function sf(s,e,t,n){const i=oo(Pt(s,e,t)),r=oo(Pt(s,e,n)),o=oo(Pt(t,n,s)),a=oo(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&ro(s,t,e)||r===0&&ro(s,n,e)||o===0&&ro(t,s,n)||a===0&&ro(t,e,n))}function ro(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oo(s){return s>0?1:s<0?-1:0}function yv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&sf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function yr(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function Mv(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rf(s,e){const t=new kc(s.i,s.x,s.y),n=new kc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wh(s,e,t,n){const i=new kc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function kc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sv(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ml{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ml.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];$h(e),Xh(n,e);let o=e.length;t.forEach($h);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Xh(n,t[c]);const a=ov.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function $h(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Xh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class gl extends Ut{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new N,f=new N,d=[],_=[],v=[],g=[];for(let m=0;m<=n;m++){const w=[],M=m/n;let E=0;m===0&&o===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const I=D/t;h.x=-e*Math.cos(i+I*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+I*r)*Math.sin(o+M*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(I+E,1-M),w.push(l++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const M=u[m][w+1],E=u[m][w],D=u[m+1][w],I=u[m+1][w+1];(m!==0||o>0)&&d.push(M,E,I),(m!==n-1||c<Math.PI)&&d.push(E,D,I)}this.setIndex(d),this.setAttribute("position",new vt(_,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _l extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends _l{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wo extends cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vl extends cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ao(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ev(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function of(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class wr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Av extends wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,a=2*t-n;break;case Ul:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:o=e,c=2*n-t;break;case Ul:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,w=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,M=(-1-d)*g+(1.5+d)*v+.5*_,E=d*g-d*v;for(let D=0;D!==a;++D)r[D]=m*o[u+D]+w*o[l+D]+M*o[c+D]+E*o[h+D];return r}}class Tv extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class bv extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Av(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Ev(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ua,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const v=t[h+_];if(v!==t[f+_]||v!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=pr;class Gs extends Wn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=dr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends Wn{}af.prototype.ValueTypeName="color";class Gi extends Wn{}Gi.prototype.ValueTypeName="number";class Rv extends wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Ct.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ei extends Wn{InterpolantFactoryMethodLinear(e){return new Rv(this.times,this.values,this.getValueSize(),e)}}Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Wn{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=dr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends Wn{}Wi.prototype.ValueTypeName="vector";class cf{constructor(e="",t=-1,n=[],i=_d){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Pv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=wv(c);c=jh(c,1,u),l=jh(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Gi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,v){if(d.length!==0){const g=[],m=[];of(d,g,m,_),g.length!==0&&v.push(new h(f,g,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)d[f[_].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let w=0;w!==f[_].morphTargets.length;++w){const M=f[_];g.push(M.time),m.push(M.morphTarget===v?1:0)}i.push(new Gi(".morphTargetInfluence["+v+"]",g,m))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Wi,d+".position",f,"pos",i),n(Ei,d+".quaternion",f,"rot",i),n(Wi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return af;case"quaternion":return Ei;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cv(s.type);if(s.times===void 0){const t=[],n=[];of(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Iv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Lv=new Iv;class Hn{constructor(e){this.manager=e!==void 0?e:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class Dv extends Error{constructor(e,t){super(e),this.response=t}}class Zo extends Hn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Yn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let v=0;const g=new ReadableStream({start(m){w();function w(){h.read().then(({done:M,value:E})=>{if(M)m.close();else{v+=E.byteLength;const D=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:d});for(let I=0,P=u.length;I<P;I++){const k=u[I];k.onProgress&&k.onProgress(D)}m.enqueue(E),w()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Dv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{_i.add(e,l);const u=Yn[e];delete Yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uv extends Hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=mr("img");function c(){u(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Jo extends Hn{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new Uv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Qo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ha=new Ie,qh=new N,Kh=new N;class xl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(qh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nv extends xl{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lf extends Qo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yh=new Ie,nr=new N,Va=new N;class Ov extends xl{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(nr),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),Yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh)}}class Hc extends Qo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fv extends xl{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yl extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Fv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hf extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Bv extends Hn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return _i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,c),r.manager.itemStart(e)}}const Ml="\\[\\]\\.:\\/",zv=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",kv="[^"+Ml.replace("\\.","")+"]",Hv=/((?:WC+[\/:])*)/.source.replace("WC",Sl),Vv=/(WCOD+)?/.source.replace("WCOD",kv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),$v=new RegExp("^"+Hv+Vv+Gv+Wv+"$"),Xv=["material","materials","bones","map"];class jv{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){const t=$v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=jv;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const qv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Kv=`
uniform sampler2D tScene;
uniform vec2 uResolution;   // render target size
uniform float uDither;      // 0/1 toggle
uniform float uVignette;    // strength
uniform float uCrush;       // shadow crush amount
varying vec2 vUv;

float bayer(vec2 p) {
  const mat4 B = mat4(
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0
  );
  ivec2 i = ivec2(mod(p, 4.0));
  return B[i.y][i.x] / 16.0;
}

void main() {
  vec3 c = texture2D(tScene, vUv).rgb;

  // night grading: crush shadows, keep light sources punchy
  vec3 crushed = c * c * (3.0 - 2.0 * c);
  c = mix(c, crushed, uCrush);

  // vignette
  float d = distance(vUv, vec2(0.5));
  c *= 1.0 - uVignette * smoothstep(0.35, 0.75, d);

  // 15-bit quantize with ordered dither (in render-target pixel space, so the
  // dither pattern is chunky after the nearest upscale)
  vec2 px = floor(vUv * uResolution);
  float t = (bayer(px) - 0.5) / 31.0 * uDither;
  c = floor((c + t) * 31.0 + 0.5) / 31.0;

  gl_FragColor = vec4(c, 1.0);
}`;class Yv{constructor(e,t=240){this.renderer=new ev({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Et;const n=window.innerWidth/window.innerHeight;this.height=t,this.width=Math.round(t*n),this.target=new Si(this.width,this.height,{magFilter:Xt,minFilter:Xt,depthBuffer:!0}),this.blitScene=new Zu,this.blitCam=new Er(-1,1,1,-1,0,1),this.blitMat=new Un({vertexShader:qv,fragmentShader:Kv,uniforms:{tScene:{value:this.target.texture},uResolution:{value:new je(this.width,this.height)},uDither:{value:1},uVignette:{value:.03},uCrush:{value:.12}},depthTest:!1,depthWrite:!1}),this.blitScene.add(new Rt(new wi(2,2),this.blitMat)),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t);const n=e/t;this.width=Math.round(this.height*n),this.target.setSize(this.width,this.height),this.blitMat.uniforms.uResolution.value.set(this.width,this.height)}render(e,t){this.renderer.setRenderTarget(this.target),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.renderer.render(this.blitScene,this.blitCam)}}const Bi={uSnapRes:{value:new je(1100,620)},uAffine:{value:0},uMist:{value:.95},uMistColor:{value:new Me("#252b4a")}};function Ss(s,e={}){const{affine:t=!0,snap:n=!0}=e;s.onBeforeCompile=i=>{i.uniforms.uSnapRes=Bi.uSnapRes,i.uniforms.uAffine=Bi.uAffine,i.uniforms.uMist=Bi.uMist,i.uniforms.uMistColor={value:Bi.uMistColor.value},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        uniform vec2 uSnapRes;
        uniform float uAffine;
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;`).replace("#include <project_vertex>",`#include <project_vertex>
        ${n?`
        // PS1 GTE: no sub-pixel precision — snap to a virtual low-res grid
        gl_Position.xyz /= gl_Position.w;
        gl_Position.xy = floor(gl_Position.xy * uSnapRes + 0.5) / uSnapRes;
        gl_Position.xyz *= gl_Position.w;`:""}
        vAffineW = mix(1.0, gl_Position.w, uAffine);
        // affine UV trick, part 1: multiply the UV by w here (project_vertex runs
        // AFTER uv_vertex, so vMapUv is already populated and vAffineW is valid —
        // doing this inside uv_vertex read vAffineW before assignment)
        ${t?`
        #ifdef USE_MAP
          vMapUv *= vAffineW;
        #endif`:""}
        {
          #ifdef USE_INSTANCING
            vec4 psxWorld = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          #else
            vec4 psxWorld = modelMatrix * vec4(transformed, 1.0);
          #endif
          vWorldY = psxWorld.y;
          vMistDepth = -mvPosition.z;
        }
        `),t&&(i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
          vec4 sampledDiffuseColor = texture2D( map, vMapUv / vAffineW );
          diffuseColor *= sampledDiffuseColor;
        #endif`)),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying float vAffineW;
        varying float vWorldY;
        varying float vMistDepth;
        uniform float uMist;
        uniform vec3 uMistColor;`).replace("#include <fog_fragment>",`#include <fog_fragment>
        // ground mist: pools near y=0, fades out by ~2.5 m up, needs some depth to build
        {
          float mistH = smoothstep(2.5, 0.0, vWorldY);
          float mistD = smoothstep(6.0, 55.0, vMistDepth);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, uMistColor, mistH * mistD * uMist * 0.55);
        }`)},s.customProgramCacheKey=()=>`psx-${t}-${n}`}function yi(s){return s.magFilter=Xt,s.minFilter=xs,s.generateMipmaps=!0,s.anisotropy=8,s}const He=15.5665,Zv=60,Rn=1/Zv,hr=4.5,Zh=1.9,mi={mass:1200,inertia:1700,cgToFront:1.12,cgToRear:1.38,cgHeight:.58,engineForce:8200,brakeForce:8600,reverseForce:7e3,maxSpeed:52,gripFront:1.5,gripRear:1.6,peakSlipFront:.16,peakSlipRear:.2,gripFalloff:.18,driveTraction:1.25,brakeBias:.65,handbrakeGrip:.22,handbrakeDriveCut:1,handbrakeKick:2,driftRecoverDamping:4.6,driftScrub:170,dragCoeff:.62,rollingResist:5.5,steerMaxLow:.66,steerMaxHigh:.06,steerAttack:5,steerRelease:6,assistGain:.65,assistMax:.5,counterSteerBoost:2.8,throttleAttack:3.2,throttleRelease:6,yawDamping:.55,kinematicBlendSpeed:3.5,restitution:.25,wallFriction:.6,gearRatios:[3.2,2.1,1.55,1.2,.98],finalDrive:3.6,shiftUpRpm:6600,shiftDownRpm:3e3,idleRpm:900,maxRpm:7200,shiftCutTime:.15},Bo={asphalt:{lateral:1,longitudinal:1,drag:1,peakScale:1,falloffScale:1},curb:{lateral:.85,longitudinal:.9,drag:1.2,peakScale:1.1,falloffScale:.85},dirt:{lateral:.62,longitudinal:.68,drag:2.2,peakScale:1.5,falloffScale:.35},offroad:{lateral:.42,longitudinal:.45,drag:6,peakScale:1.8,falloffScale:.25}},Jv=`
........................
........................
...vvvvvvvvv............
...v.......v............
...v.......v............
...v.......eeee.........
...v..........e.........
...w..........e.........
...w..........eeeee.....
...w..............e.....
...w..............e.....
...w..............e.....
...ww.............e.....
....w.........ppppe.....
....w.........p.........
....wwwwwwwwwwp.........
........................
`.trim();function Ne(s,e,t=0){let n=s*374761393+e*668265263+t*2246822519|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}const co=5,Qv=0;function Ga(s,e){const t=[];if(s.dirs.n&&t.push([0,-1]),s.dirs.w&&t.push([-1,0]),s.dirs.s&&t.push([0,1]),s.dirs.e&&t.push([1,0]),s.piece==="straight"){const[w,M]=t[0],E=-M,D=w,I=(e-.5)*He,P=Qv*Math.sin(2*Math.PI*e);return[s.x+w*I+E*P,s.z+M*I+D*P]}const[n,i]=t[0],[r,o]=t[1],a=s.x+(n+r)*(He/2),c=s.z+(i+o)*(He/2),l=s.x+n*(He/2)-a,u=s.z+i*(He/2)-c,h=s.x+r*(He/2)-a,f=s.z+o*(He/2)-c,d=Math.atan2(u,l);let v=Math.atan2(f,h)-d;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;const g=d+v*e,m=He/2;return[a+Math.cos(g)*m,c+Math.sin(g)*m]}const On=7.4,Jh=[1,.64,.28],ex=[.75,.85,1];function tx(){const s=Jv.split(`
`),e=s.length,t=Math.max(...s.map(S=>S.length)),n=(S,L)=>L>=0&&L<e&&S>=0&&S<(s[L]?.length??0)?s[L][S]:".",i=S=>S==="v"||S==="e"||S==="p"||S==="w",r=[],o=new Map;for(let S=0;S<e;S++)for(let L=0;L<t;L++){const B=n(L,S);if(!i(B))continue;const W=i(n(L,S-1)),$=i(n(L,S+1)),X=i(n(L+1,S)),K=i(n(L-1,S)),H=+W+ +$+ +X+ +K;let J,se=0;H===4?J="cross":H===3?(J="t",W?X?$?se=-Math.PI/2:se=Math.PI:se=Math.PI/2:se=0):H===2&&(W&&$||X&&K)?(J="straight",se=W&&$?0:Math.PI/2):H===2?(J="corner",W&&X?se=0:X&&$?se=-Math.PI/2:$&&K?se=Math.PI:se=Math.PI/2):(J="end",se=W?0:X?Math.PI/2:$?Math.PI:-Math.PI/2);const fe={gx:L,gz:S,x:L*He,z:S*He,zone:B,piece:J,rot:se,dirs:{n:W,e:X,s:$,w:K},elev:{n:0,e:0,s:0,w:0,c:0},dirt:!1};r.push(fe),o.set(L+","+S,fe)}for(const S of r)S.piece==="end"&&console.warn(`map: dangling road at ${S.gx},${S.gz}`);const a=(S,L)=>{const B=Math.round(S/He),W=Math.round(L/He),$=o.get(B+","+W);if(!$)return"offroad";const X=S-$.x,K=L-$.z;let H=1/0;const J=[];$.dirs.n&&J.push([0,-1]),$.dirs.s&&J.push([0,1]),$.dirs.e&&J.push([1,0]),$.dirs.w&&J.push([-1,0]);for(const[se,fe]of J){const Ae=Math.max(0,Math.min(1,(X*se+K*fe)/(He/2))),Q=se*(He/2)*Ae,te=fe*(He/2)*Ae;H=Math.min(H,Math.hypot(X-Q,K-te))}if($.dirt){if($.piece==="straight"){const[se]=$.dirs.n||$.dirs.s?[0,1]:[1,0];Math.max(0,Math.min(1,(se?S-$.x:L-$.z)/He+.5));const fe=0,Ae=se?L-$.z:S-$.x;return Math.abs(Ae-fe)<co?"dirt":"offroad"}if($.piece==="corner"){const se=[];$.dirs.n&&se.push([0,-1]),$.dirs.w&&se.push([-1,0]),$.dirs.s&&se.push([0,1]),$.dirs.e&&se.push([1,0]);const fe=$.x+(se[0][0]+se[1][0])*(He/2),Ae=$.z+(se[0][1]+se[1][1])*(He/2);return Math.abs(Math.hypot(S-fe,L-Ae)-He/2)<co?"dirt":"offroad"}return H<co?"dirt":"offroad"}return H<co?"asphalt":H<On?"curb":"offroad"},c=[];{const S=r.find(H=>H.zone==="v"&&H.piece==="straight")??r[0];let L=null,B=S;for(let H=0;H<r.length+1&&B;H++){c.push(B);const J=[];B.dirs.n&&J.push(o.get(B.gx+","+(B.gz-1))),B.dirs.s&&J.push(o.get(B.gx+","+(B.gz+1))),B.dirs.e&&J.push(o.get(B.gx+1+","+B.gz)),B.dirs.w&&J.push(o.get(B.gx-1+","+B.gz));const se=J.filter(Boolean).find(fe=>fe!==L);L=B,B=se===S?void 0:se}const W=c.length,$=5.5,X=[];for(let H=0;H<W;H++){const se=((H+.5)/W-.35)/.5;X.push(se>0&&se<1?$*.5*(1-Math.cos(2*Math.PI*se)):0)}for(let H=0;H<3;H++)for(let J=0;J<W;J++){if(c[J].piece==="straight")continue;const se=(J-1+W)%W,fe=(X[se]+X[J])/2;X[se]=fe,X[J]=fe}const K=(H,J)=>J.gz<H.gz?"n":J.gz>H.gz?"s":J.gx>H.gx?"e":"w";for(let H=0;H<W;H++){const J=c[H],se=c[(H+1)%W],fe=c[(H-1+W)%W],Ae=X[(H-1+W)%W],Q=X[H];J.elev.c=(Ae+Q)/2,J.elev.n=J.elev.e=J.elev.s=J.elev.w=J.elev.c,J.elev[K(J,fe)]=Ae,J.elev[K(J,se)]=Q}for(const H of c){const J=[H.elev.n,H.elev.e,H.elev.s,H.elev.w],se=Math.max(...J)-Math.min(...J);H.dirt=H.elev.c>.25||se>.05}}const l=(S,L)=>{const B=Math.round(S/He),W=Math.round(L/He),$=o.get(B+","+W);if($){if($.piece==="straight"){if($.dirs.n||$.dirs.s){const J=Math.max(0,Math.min(1,(L-$.z)/He+.5));return $.elev.n+($.elev.s-$.elev.n)*J}const H=Math.max(0,Math.min(1,(S-$.x)/He+.5));return $.elev.w+($.elev.e-$.elev.w)*H}return $.elev.c}let X=0,K=1/2400;for(const H of r){const J=S-H.x,se=L-H.z,fe=J*J+se*se;if(fe>3600)continue;let Ae=H.elev.c;if(H.piece==="straight")if(H.dirs.n||H.dirs.s){const te=Math.max(-.15,Math.min(1.15,(L-H.z)/He+.5));Ae=H.elev.n+(H.elev.s-H.elev.n)*te}else{const te=Math.max(-.15,Math.min(1.15,(S-H.x)/He+.5));Ae=H.elev.w+(H.elev.e-H.elev.w)*te}const Q=1/(fe+30);X+=Q*Ae,K+=Q}return X/K},u=[],h=[],f=[],d=(S,L,B,W,$=!1)=>({minX:S-B,maxX:S+B,minZ:L-W,maxZ:L+W,soft:$}),_=(S,L)=>{for(const[B,W]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a(S+B,L+W)!=="offroad")return!1;return!0},v=(S,L,B,W)=>Math.atan2(B-S,W-L),g=1.15,m=(S,L,B,W)=>{const $=v(S,L,B,W);return{hx:S+Math.sin($)*g,hz:L+Math.cos($)*g,rot:$}};let w=0;for(const S of r){const L=S.dirs.n||S.dirs.s?"ns":"ew",B=On+.6;if(S.zone==="v"){if((S.gx+S.gz)%2===0){const W=w++%2===0?1:-1,$=L==="ns"?S.x+W*(On-.8):S.x,X=L==="ns"?S.z:S.z+W*(On-.8),K=m($,X,S.x,S.z);u.push({x:K.hx,z:K.hz,color:Jh,radius:13,intensity:1,height:5.2}),h.push({kind:"lampProp",x:$,z:X,rot:K.rot,variant:0})}if(S.piece==="straight")for(const W of[-1,1]){if(Ne(S.gx,S.gz,W+10)>.75)continue;const $=L==="ns"?S.x+W*(B+8.5):S.x+(Ne(S.gx,S.gz,3)-.5)*4,X=L==="ns"?S.z+(Ne(S.gx,S.gz,4)-.5)*4:S.z+W*(B+8.5),K=L==="ns"?W>0?-Math.PI/2:Math.PI/2:W>0?Math.PI:0;h.push({kind:"house",x:$,z:X,rot:K,variant:Math.floor(Ne(S.gx,S.gz,5)*15)}),f.push(d($,X,L==="ns"?5:4.5,L==="ns"?4.5:5));for(let H=0;H<2;H++){if(Ne(S.gx*3+H,S.gz,W+60)>.8)continue;const J=Ne(S.gx+H,S.gz,W+61)*Math.PI*2,se=7+Ne(S.gx,S.gz+H,W+62)*5,fe=$+Math.cos(J)*se,Ae=X+Math.sin(J)*se+(W>0?4:-4);let Q=!0;for(const[te,he]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a(fe+te,Ae+he)!=="offroad"){Q=!1;break}Q&&h.push({kind:Ne(S.gx,S.gz+H,63)<.6?"tree_small":"bush",x:fe,z:Ae,rot:Ne(S.gx,S.gz,64+H)*Math.PI*2,variant:Math.floor(Ne(S.gx+H,S.gz,65)*8)})}if(Ne(S.gx,S.gz,W+20)<.3){const H=L==="ns"?S.x+W*(On+1.6):$+3,J=L==="ns"?X+3:S.z+W*(On+1.6);h.push({kind:"parked",x:H,z:J,rot:L==="ns"?0:Math.PI/2,variant:Math.floor(Ne(S.gx,S.gz,6)*4)}),f.push(d(H,J,L==="ns"?1:2.3,L==="ns"?2.3:1))}}}if(S.zone==="e"){for(const W of[-1,1]){if(Ne(S.gx,S.gz,W+50)>.55)continue;const $=On+4+Ne(S.gx,S.gz,W+51)*7,X=L==="ns"?S.x+W*$:S.x+(Ne(S.gx,S.gz,52)-.5)*He*.8,K=L==="ns"?S.z+(Ne(S.gx,S.gz,53)-.5)*He*.8:S.z+W*$;_(X,K)&&h.push({kind:"bush",x:X,z:K,rot:Ne(S.gx,S.gz,55)*Math.PI*2,variant:Math.floor(Ne(S.gx,S.gz,56)*8)})}S.piece==="corner"&&h.push({kind:"cone",x:S.x+(Ne(S.gx,S.gz,7)-.5)*3,z:S.z+(Ne(S.gx,S.gz,8)-.5)*3,rot:Ne(S.gx,S.gz,9)*Math.PI,variant:0})}if(S.zone==="p"&&(S.gx+S.gz)%3===0){const W=S.x+(L==="ns"?8.6:0),$=S.z+(L==="ns"?0:8.6),X=m(W,$,S.x,S.z);u.push({x:X.hx,z:X.hz,color:ex,radius:15,intensity:.9,height:6}),h.push({kind:"lampProp",x:W,z:$,rot:X.rot,variant:1})}if(S.zone==="w")for(const W of[-1,1]){for(let X=0;X<5;X++){const K=(X+.5)/5-.5,H=(Ne(S.gx*7+X,S.gz,W+30)-.5)*3,J=B+4.5+Ne(S.gx+X,S.gz,W+31)*9,se=L==="ns"?S.x+W*J:S.x+K*He+H,fe=L==="ns"?S.z+K*He+H:S.z+W*J,Ae=Ne(S.gx+X*3,S.gz,W+32)<.6;let Q=!0;for(const[te,he]of[[0,0],[3,0],[-3,0],[0,3],[0,-3]])if(a(se+te,fe+he)!=="offroad"){Q=!1;break}Q&&(h.push({kind:Ae?"tree_big":"tree_small",x:se,z:fe,rot:Ne(S.gx,S.gz+X,33)*Math.PI*2,variant:Math.floor(Ne(S.gx,S.gz+X,34)*8)}),Ae&&f.push(d(se,fe,.7,.7)))}if(Ne(S.gx,S.gz,W+40)<.5){const X=L==="ns"?S.x+W*(On+3.2):S.x+(Ne(S.gx,S.gz,41)-.5)*He*.8,K=L==="ns"?S.z+(Ne(S.gx,S.gz,42)-.5)*He*.8:S.z+W*(On+3.2);h.push({kind:"bush",x:X,z:K,rot:Ne(S.gx,S.gz,43)*Math.PI*2,variant:Math.floor(Ne(S.gx,S.gz,44)*5)})}}}const M=r.filter(S=>S.zone==="w"&&S.piece==="straight");if(M.length){const S=M[Math.floor(M.length/2)];{const L=S.x+On-.8,B=m(L,S.z,S.x,S.z);u.push({x:B.hx,z:B.hz,color:Jh,radius:12,intensity:1.1,height:5.2}),h.push({kind:"lampProp",x:L,z:S.z,rot:B.rot,variant:0})}}const E=r.filter(S=>S.zone==="v"&&S.piece==="corner");if(E.length){const S=E[E.length-1];h.push({kind:"tower",x:S.x+He*.9,z:S.z-He*.9,rot:0,variant:0}),f.push(d(S.x+He*.9,S.z-He*.9,2.5,2.5))}const D=r.filter(S=>S.dirt),I=(S,L)=>{for(const B of D)if((S-B.x)**2+(L-B.z)**2<32*32)return!0;return!1};for(let S=0;S<7400;S++){const L=Ne(S,91)*t*He,B=Ne(S,92)*e*He,W=Ne(Math.floor(L/40),Math.floor(B/40),96);if(Ne(S,97)>W*W*1.9||!_(L,B))continue;const $=I(L,B),X=Ne(S,93),K=$?"bush":X<.2?"tree_big":X<.38?"tree_small":"bush";h.push({kind:K,x:L,z:B,rot:Ne(S,94)*Math.PI*2,variant:Math.floor(Ne(S,95)*12)}),K==="tree_big"&&f.push(d(L,B,.7,.7))}{const S=-He,L=t*He,B=-He,W=e*He,$=2*(L-S+W-B);for(let X=0;X<1500;X++){const K=Ne(X,201)*$,H=3+Ne(X,202)*52;let J,se;const fe=L-S,Ae=W-B;K<fe?(J=S+K,se=B-H):K<fe+Ae?(J=L+H,se=B+(K-fe)):K<fe*2+Ae?(J=L-(K-fe-Ae),se=W+H):(J=S-H,se=W-(K-fe*2-Ae)),J+=(Ne(X,203)-.5)*8,se+=(Ne(X,204)-.5)*8;const Q=Ne(X,205)<.7;h.push({kind:Q?"tree_big":"tree_small",x:J,z:se,rot:Ne(X,206)*Math.PI*2,variant:Math.floor(Ne(X,207)*12)}),Q&&H<14&&f.push(d(J,se,.8,.8))}}for(let S=0;S<160;S++){const L=Ne(S,77)*t*He,B=Ne(S,78)*e*He;_(L,B)&&h.push({kind:"rock",x:L,z:B,rot:Ne(S,81)*Math.PI*2,variant:S%2})}const P=r.filter(S=>S.zone==="v"&&S.piece==="straight"&&(S.dirs.e||S.dirs.w)),k=P[Math.floor(P.length/2)]??r[0],R={x:k.x,z:k.z,yaw:Math.PI/2};return{tiles:r,lamps:u,props:h,colliders:f,spawn:R,surfaceAt:a,heightAt:l,mistAt:(S,L)=>{const B=Math.round(S/He),W=Math.round(L/He),$=o.get(B+","+W);return $?$.zone==="p"?1:$.zone==="w"?.8:$.zone==="e"?.4:.25:.6},loopOrder:c,bounds:{minX:-5*He,minZ:-5*He,maxX:(t+4)*He,maxZ:(e+4)*He},grid:s}}const nx=new Me("#20244a"),ix=new Me("#4f4a78");function sx(){const t=document.createElement("canvas");t.width=1024,t.height=512;const n=t.getContext("2d"),i=n.createImageData(1024,512),r=new Me("#1a2044"),o=new Me("#2c3468"),a=new Me("#434b8a"),c=(m,w,M,E)=>{const D=Math.floor(m/M),I=Math.floor(w/M),P=m%M/M,k=w%M/M,R=(L,B)=>Ne(L,B,E),A=P*P*(3-2*P),S=k*k*(3-2*k);return R(D,I)*(1-A)*(1-S)+R(D+1,I)*A*(1-S)+R(D,I+1)*(1-A)*S+R(D+1,I+1)*A*S};for(let m=0;m<512;m++){const w=m/511,M=new Me;w<.55?M.lerpColors(r,o,w/.55):w<.82?M.lerpColors(o,a,(w-.55)/.27):M.lerpColors(a,ix,(w-.82)/.18);for(let E=0;E<1024;E++){const D={r:M.r,g:M.g,b:M.b},I=c(E,m*3.2,90,7)*c(E+500,m*2,41,8),P=c(E,m,55,9),k=Math.max(0,(w-.45)/.55),R=Math.max(0,I-.32)*.8*k+Math.max(0,P-.55)*.5*k*k;R>.02&&(D.r+=R*.16,D.g+=R*.17,D.b+=R*.24);const A=(E%4*4+m%4)/16-.5,S=(m*1024+E)*4;i.data[S]=Math.max(0,Math.round((D.r+A/40)*31))*8,i.data[S+1]=Math.max(0,Math.round((D.g+A/40)*31))*8,i.data[S+2]=Math.max(0,Math.round((D.b+A/40)*31))*8,i.data[S+3]=255}}for(let m=0;m<1200;m++){const w=Math.floor(Ne(m,1)*1024),M=Math.floor(Ne(m,2)*512*.6),E=160+Math.floor(Ne(m,3)*95),D=(M*1024+w)*4;if(i.data[D]=E,i.data[D+1]=E,i.data[D+2]=Math.min(255,E+20),Ne(m,4)>.85&&w<1023&&M<511)for(const[I,P]of[[1,0],[0,1],[1,1]]){const k=((M+P)*1024+(w+I))*4;i.data[k]=E*.7,i.data[k+1]=E*.7,i.data[k+2]=E*.7}}n.putImageData(i,0,0);const l=1024*.68,u=512*.52,h=22;for(let m=-52;m<=52;m++)for(let w=-52;w<=52;w++){const M=Math.hypot(w,m),E=Math.round(l+w),D=Math.round(u+m);if(!(E<0||E>=1024||D<0||D>=512)){if(M<=h){const P=232-(Ne(E>>2,D>>2,9)<.24?40:0)-M*1.2;n.fillStyle=`rgb(${P|0},${P|0},${Math.min(255,P+10)|0})`,n.fillRect(E,D,1,1)}else if(M<52){const I=1-(M-h)/(52-h);Ne(E,D,10)<I*I*.45&&(n.fillStyle="rgba(185,190,220,0.5)",n.fillRect(E,D,1,1))}}}const f=yi(new vr(t));f.colorSpace=Et;const d=new gl(900,24,12,0,Math.PI*2,0,Math.PI*.55),_=new en({map:f,side:an,fog:!1,depthWrite:!1}),v=new Rt(d,_);v.renderOrder=-10,v.frustumCulled=!1;const g=new jt;g.add(v);{const w=new Float32Array(2250);for(let A=0;A<750;A++){const S=Ne(A,21)*Math.PI*2,L=.06+Ne(A,22)*1.35,B=870;w[A*3]=Math.cos(L)*Math.cos(S)*B,w[A*3+1]=Math.sin(L)*B,w[A*3+2]=Math.cos(L)*Math.sin(S)*B}const M=new Ut;M.setAttribute("position",new kt(w,3));const E=new gi({color:14212607,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1}),D=new Rs(M,E);D.renderOrder=-9,D.frustumCulled=!1,g.add(D),M.clone();const I=[];for(let A=0;A<750;A++)Ne(A,23)<.12&&I.push(A);const P=new Float32Array(I.length*3);I.forEach((A,S)=>{P[S*3]=w[A*3]*.999,P[S*3+1]=w[A*3+1]*.999,P[S*3+2]=w[A*3+2]*.999});const k=new Ut;k.setAttribute("position",new kt(P,3));const R=new Rs(k,new gi({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.95,fog:!1,depthWrite:!1}));R.renderOrder=-9,R.frustumCulled=!1,g.add(R)}{const m=document.createElement("canvas");m.width=m.height=64;const w=m.getContext("2d");for(let k=0;k<64;k++)for(let R=0;R<64;R++){const A=Math.hypot(R-32,k-32);if(A<26){const L=235-(Ne(R>>2,k>>2,31)<.22?42:0)-A*1.1;w.fillStyle=`rgb(${L|0},${L|0},${Math.min(255,L+12)|0})`,w.fillRect(R,k,1,1)}else A<32&&Ne(R,k,32)<(1-(A-26)/6)*.5&&(w.fillStyle="rgba(200,205,235,0.6)",w.fillRect(R,k,1,1))}const M=yi(new vr(m));M.colorSpace=Et;const E=new _r({map:M,fog:!1,depthWrite:!1,transparent:!0}),D=new Uo(E),I=new N(.62,.5,.55).normalize();D.position.copy(I.multiplyScalar(840)),D.scale.setScalar(85),D.renderOrder=-8,g.add(D);const P=new Uo(new _r({map:M,fog:!1,depthWrite:!1,transparent:!0,opacity:.12,blending:Is}));P.position.copy(D.position),P.scale.setScalar(170),P.renderOrder=-9,g.add(P)}return fetch("/assets/skybox.png",{method:"HEAD"}).then(m=>{!m.ok||!m.headers.get("content-type")?.startsWith("image")||new Jo().load("/assets/skybox.png",w=>{yi(w),w.colorSpace=Et,_.map=w,_.needsUpdate=!0,console.log("[sky] using assets/skybox.png override")})}).catch(()=>{}),g}function Qh(s,e){if(e===vd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Dc||e===Uu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Dc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class rx extends Hn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new wx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===uf){try{o[ct.KHR_BINARY_GLTF]=new Ax(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Bx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new cx;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new Tx(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new bx;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new Rx;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ox(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ax{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Me(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],qt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yl(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hc(u),l.distance=h;break;case"spot":l=new lf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class cx{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}}class lx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(a,a)}return Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class fx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Mx{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sx{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ex{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class wx{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const _ of h){const v=new Ie,g=new N,m=new Ct,w=new N(1,1,1),M=new ar(_.geometry,_.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&w.fromBufferAttribute(c.SCALE,E),M.setMatrixAt(E,v.compose(g,m,w));for(const E in c)if(E==="_COLOR_0"){const D=c[E];M.instanceColor=new Oc(D.array,D.itemSize,D.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,c[E]);St.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const uf="glTF",ir=12,eu={JSON:1313821514,BIN:5130562};class Ax{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ir,r=new DataView(e,ir);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===eu.JSON){const l=new Uint8Array(e,ir+o,a);this.content=n.decode(l)}else if(c===eu.BIN){const l=ir+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Tx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Vc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Vc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ps[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const v=d.attributes[_],g=c[_];g!==void 0&&(v.normalized=g)}h(d)},a,l,qt,f)})})}}class bx{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rx{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class ff extends wr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,v=_-l,g=-2*d+3*f,m=d-f,w=1-g,M=m-f+h;for(let E=0;E!==a;E++){const D=o[v+E+a],I=o[v+E+c]*u,P=o[_+E+a],k=o[_+E]*u;r[E]=w*D+M*I+g*P+m*k}return r}}const Cx=new Ct;class Px extends ff{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Cx.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tu={9728:Xt,9729:mn,9984:wu,9985:_o,9986:xs,9987:ei},nu={33071:zn,33648:Co,10497:kn},Wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ix={CUBICSPLINE:void 0,LINEAR:pr,STEP:dr},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _l({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),s.DefaultMaterial}function Ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Ux(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nx(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=s.indices+":"+Xa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xa(s.targets[n]);return e}function Xa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Gc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Fx=new Ie;class Bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ox,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Jo(this.options.manager):this.textureLoader=new Bv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ii(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Cs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wa[i.type],a=Ps[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new kt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Wa[i.type],l=Ps[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,g;if(d&&d!==h){const m=Math.floor(f/d),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let M=t.cache.get(w);M||(v=new l(a,m*d,i.count*d/u),M=new Ju(v,d/u),t.cache.add(w,M)),g=new gr(M,c,f%d/u,_)}else a===null?v=new l(i.count*c):v=new l(a,f,i.count*c),g=new kt(v,c,_);if(i.sparse!==void 0){const m=Wa.SCALAR,w=Ps[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,D=new w(o[1],M,i.sparse.count*m),I=new l(o[2],E,i.sparse.count*c);a!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized));for(let P=0,k=D.length;P<k;P++){const R=D[P];if(g.setX(R,I[P*c]),c>=2&&g.setY(R,I[P*c+1]),c>=3&&g.setZ(R,I[P*c+2]),c>=4&&g.setW(R,I[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=tu[f.magFilter]||mn,u.minFilter=tu[f.minFilter]||ei,u.wrapS=nu[f.wrapS]||kn,u.wrapT=nu[f.wrapT]||kn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const g=new zt(v);g.needsUpdate=!0,f(g)}),t.load(Cs.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Jn(h,o),h.userData.mimeType=o.mimeType||Ox(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new gi,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bs,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _l}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const u=r.alphaMode||$a.OPAQUE;if(u===$a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===$a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==en&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){const h=r.emissiveFactor;a.emissive=new Me().setRGB(h[0],h[1],h[2],qt)}return r.emissiveTexture!==void 0&&o!==en&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ii(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return iu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Nx(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=iu(new Ut,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Lx(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const v=u[d],g=o[d];let m;const w=l[d];if(g.mode===xn.TRIANGLES||g.mode===xn.TRIANGLE_STRIP||g.mode===xn.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new ef(v,w):new Rt(v,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===xn.TRIANGLE_STRIP?m.geometry=Qh(m.geometry,Uu):g.mode===xn.TRIANGLE_FAN&&(m.geometry=Qh(m.geometry,Dc));else if(g.mode===xn.LINES)m=new Fc(v,w);else if(g.mode===xn.LINE_STRIP)m=new qo(v,w);else if(g.mode===xn.LINE_LOOP)m=new sv(v,w);else if(g.mode===xn.POINTS)m=new Rs(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ux(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Jn(m,r),g.extensions&&Ii(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ii(i,h[0],r),h[0];const f=new jt;r.extensions&&Ii(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Jt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Er(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Ie;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],v=d.target,g=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,w=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",w)),l.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],v=h[3],g=h[4],m=[];for(let w=0,M=f.length;w<M;w++){const E=f[w],D=d[w],I=_[w],P=v[w],k=g[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const R=n._createAnimationTracks(E,D,I,P,k);if(R)for(let A=0;A<R.length;A++)m.push(R[A])}return new cf(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Fx)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new No:l.length>1?u=new jt:l.length===1?u=l[0]:u=new St,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Jn(u,r),r.extensions&&Ii(n,u,r),r.matrix!==void 0){const h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new jt;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&Ii(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof cn||f instanceof zt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];ui[r.path]===ui.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ui[r.path]){case ui.weights:l=Gi;break;case ui.rotation:l=Ei;break;case ui.position:case ui.scale:l=Wi;break;default:switch(n.itemSize){case 1:l=Gi;break;case 2:case 3:default:l=Wi;break}break}const u=i.interpolation!==void 0?Ix[i.interpolation]:pr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+ui[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Gc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ei?Px:ff;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zx(s,e,t){const n=e.attributes,i=new hn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const u=Gc(Ps[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const v=Gc(Ps[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Vn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function iu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Vc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return _t.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Jn(s,e),zx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(s,e.targets,t):s})}const kx=/^[og]\s*(.+)?/,Hx=/^mtllib /,Vx=/^usemtl /,Gx=/^usemap /,su=/\s+/,ru=new N,ja=new N,ou=new N,au=new N,vn=new N,lo=new Me;function Wx(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;ru.fromArray(i,e),ja.fromArray(i,t),ou.fromArray(i,n),vn.subVectors(ou,ja),au.subVectors(ru,ja),vn.cross(au),vn.normalize(),r.push(vn.x,vn.y,vn.z),r.push(vn.x,vn.y,vn.z),r.push(vn.x,vn.y,vn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),f=this.parseNormalIndex(c,_),d=this.parseNormalIndex(l,_),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),f=this.parseUVIndex(r,_),d=this.parseUVIndex(o,_),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class $x extends Hn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Zo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Wx;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(su);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(lo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(lo.r,lo.g,lo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const f=l.slice(1).trim().split(su),d=[];for(let v=0,g=f.length;v<g;v++){const m=f[v];if(m.length>0){const w=m.split("/");d.push(w)}}const _=d[0];for(let v=1,g=d.length-1;v<g;v++){const m=d[v],w=d[v+1];t.addFace(_[0],m[0],w[0],_[1],m[1],w[1],_[2],m[2],w[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let f=[];const d=[];if(l.indexOf("/")===-1)f=h;else for(let _=0,v=h.length;_<v;_++){const g=h[_].split("/");g[0]!==""&&f.push(g[0]),g[1]!==""&&d.push(g[1])}t.addLineGeometry(f,d)}else if(u==="p"){const f=l.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((i=kx.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Vx.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Hx.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Gx.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const f=i[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new jt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,f=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const v=new Ut;v.setAttribute("position",new vt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new vt(u.normals,3)),u.colors.length>0&&(_=!0,v.setAttribute("color",new vt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new vt(u.uvs,2));const g=[];for(let w=0,M=h.length;w<M;w++){const E=h[w],D=E.name+"_"+E.smooth+"_"+_;let I=t.materials[D];if(this.materials!==null){if(I=this.materials.create(E.name),f&&I&&!(I instanceof bs)){const P=new bs;cn.prototype.copy.call(P,I),P.color.copy(I.color),I=P}else if(d&&I&&!(I instanceof gi)){const P=new gi({size:10,sizeAttenuation:!1});cn.prototype.copy.call(P,I),P.color.copy(I.color),P.map=I.map,I=P}}I===void 0&&(f?I=new bs:d?I=new gi({size:1,sizeAttenuation:!1}):I=new wo,I.name=E.name,I.flatShading=!E.smooth,I.vertexColors=_,t.materials[D]=I),g.push(I)}let m;if(g.length>1){for(let w=0,M=h.length;w<M;w++){const E=h[w];v.addGroup(E.groupStart,E.groupCount,w)}f?m=new Fc(v,g):d?m=new Rs(v,g):m=new Rt(v,g)}else f?m=new Fc(v,g[0]):d?m=new Rs(v,g[0]):m=new Rt(v,g[0]);m.name=l.name,r.add(m)}else if(t.vertices.length>0){const a=new gi({size:1,sizeAttenuation:!1}),c=new Ut;c.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new vt(t.colors,3)),a.vertexColors=!0);const l=new Rs(c,a);r.add(l)}return r}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var yn=Uint8Array,Es=Uint16Array,Xx=Int32Array,df=new yn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pf=new yn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),jx=new yn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mf=function(s,e){for(var t=new Es(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Xx(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},gf=mf(df,2),_f=gf.b,qx=gf.r;_f[28]=258,qx[258]=28;var Kx=mf(pf,0),Yx=Kx.b,Wc=new Es(32768);for(var bt=0;bt<32768;++bt){var fi=(bt&43690)>>1|(bt&21845)<<1;fi=(fi&52428)>>2|(fi&13107)<<2,fi=(fi&61680)>>4|(fi&3855)<<4,Wc[bt]=((fi&65280)>>8|(fi&255)<<8)>>1}var ur=function(s,e,t){for(var n=s.length,i=0,r=new Es(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new Es(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new Es(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],u=e-s[i],h=o[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Wc[h]>>c]=l}else for(a=new Es(n),i=0;i<n;++i)s[i]&&(a[i]=Wc[o[s[i]-1]++]>>15-s[i]);return a},Ar=new yn(288);for(var bt=0;bt<144;++bt)Ar[bt]=8;for(var bt=144;bt<256;++bt)Ar[bt]=9;for(var bt=256;bt<280;++bt)Ar[bt]=7;for(var bt=280;bt<288;++bt)Ar[bt]=8;var vf=new yn(32);for(var bt=0;bt<32;++bt)vf[bt]=5;var Zx=ur(Ar,9,1),Jx=ur(vf,5,1),qa=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Tn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ka=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Qx=function(s){return(s+7)/8|0},ey=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new yn(s.subarray(e,t))},ty=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Cn=function(s,e,t){var n=new Error(e||ty[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Cn),!t)throw n;return n},ny=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new yn(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new yn(i*3));var l=function(ht){var F=t.length;if(ht>F){var Xe=new yn(Math.max(F*2,ht));Xe.set(t),t=Xe}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,_=e.d,v=e.m,g=e.n,m=i*8;do{if(!d){u=Tn(s,h,1);var w=Tn(s,h+1,3);if(h+=3,w)if(w==1)d=Zx,_=Jx,v=9,g=5;else if(w==2){var I=Tn(s,h,31)+257,P=Tn(s,h+10,15)+4,k=I+Tn(s,h+5,31)+1;h+=14;for(var R=new yn(k),A=new yn(19),S=0;S<P;++S)A[jx[S]]=Tn(s,h+S*3,7);h+=P*3;for(var L=qa(A),B=(1<<L)-1,W=ur(A,L,1),S=0;S<k;){var $=W[Tn(s,h,B)];h+=$&15;var M=$>>4;if(M<16)R[S++]=M;else{var X=0,K=0;for(M==16?(K=3+Tn(s,h,3),h+=2,X=R[S-1]):M==17?(K=3+Tn(s,h,7),h+=3):M==18&&(K=11+Tn(s,h,127),h+=7);K--;)R[S++]=X}}var H=R.subarray(0,I),J=R.subarray(I);v=qa(H),g=qa(J),d=ur(H,v,1),_=ur(J,g,1)}else Cn(1);else{var M=Qx(h)+4,E=s[M-4]|s[M-3]<<8,D=M+E;if(D>i){c&&Cn(0);break}a&&l(f+E),t.set(s.subarray(M,D),f),e.b=f+=E,e.p=h=D*8,e.f=u;continue}if(h>m){c&&Cn(0);break}}a&&l(f+131072);for(var se=(1<<v)-1,fe=(1<<g)-1,Ae=h;;Ae=h){var X=d[Ka(s,h)&se],Q=X>>4;if(h+=X&15,h>m){c&&Cn(0);break}if(X||Cn(2),Q<256)t[f++]=Q;else if(Q==256){Ae=h,d=null;break}else{var te=Q-254;if(Q>264){var S=Q-257,he=df[S];te=Tn(s,h,(1<<he)-1)+_f[S],h+=he}var Se=_[Ka(s,h)&fe],we=Se>>4;Se||Cn(3),h+=Se&15;var J=Yx[we];if(we>3){var he=pf[we];J+=Ka(s,h)&(1<<he)-1,h+=he}if(h>m){c&&Cn(0);break}a&&l(f+131072);var Ve=f+te;if(f<J){var We=r-J,qe=Math.min(J,Ve);for(We+f<0&&Cn(3);f<qe;++f)t[f]=n[We+f]}for(;f<Ve;++f)t[f]=t[f-J]}}e.l=d,e.p=Ae,e.b=f,e.f=u,d&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return f!=t.length&&o?ey(t,0,f):t.subarray(0,f)},iy=new yn(0),sy=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Cn(6,"invalid zlib data"),(s[1]>>5&1)==1&&Cn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function ry(s,e){return ny(s.subarray(sy(s),-4),{i:2},e,e)}var oy=typeof TextDecoder<"u"&&new TextDecoder,ay=0;try{oy.decode(iy,{stream:!0}),ay=1}catch{}function xf(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function cy(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let c=0;for(let l=0;l<a;++l){const u=o[l+1],h=r[a-l],f=i[l]/(u+h);i[l]=c+u*f,c=h*f}i[a]=c}return i}function ly(s,e,t,n){const i=xf(s,n,e),r=cy(i,n,s,e),o=new dt(0,0,0,0);for(let a=0;a<=s;++a){const c=t[i-s+a],l=r[a],u=c.w*l;o.x+=c.x*u,o.y+=c.y*u,o.z+=c.z*u,o.w+=c.w*l}return o}function hy(s,e,t,n,i){const r=[];for(let h=0;h<=t;++h)r[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=r.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=r.slice(0);a[0][0]=1;const c=r.slice(0),l=r.slice(0);for(let h=1;h<=t;++h){c[h]=e-i[s+1-h],l[h]=i[s+h]-e;let f=0;for(let d=0;d<h;++d){const _=l[d+1],v=c[h-d];a[h][d]=_+v;const g=a[d][h-1]/a[h][d];a[d][h]=f+_*g,f=v*g}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const _=[];for(let v=0;v<=t;++v)_[v]=r.slice(0);_[0][0]=1;for(let v=1;v<=n;++v){let g=0;const m=h-v,w=t-v;h>=v&&(_[d][0]=_[f][0]/a[w+1][m],g=_[d][0]*a[m][w]);const M=m>=-1?1:-m,E=h-1<=w?v-1:t-h;for(let I=M;I<=E;++I)_[d][I]=(_[f][I]-_[f][I-1])/a[w+1][m+I],g+=_[d][I]*a[m+I][w];h<=w&&(_[d][v]=-_[f][v-1]/a[w+1][h],g+=_[d][v]*a[h][w]),o[v][h]=g;const D=f;f=d,d=D}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function uy(s,e,t,n,i){const r=i<s?i:s,o=[],a=xf(s,n,e),c=hy(a,n,s,r,e),l=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,l[u]=h}for(let u=0;u<=r;++u){const h=l[a-s].clone().multiplyScalar(c[u][0]);for(let f=1;f<=s;++f)h.add(l[a-s+f].clone().multiplyScalar(c[u][f]));o[u]=h}for(let u=r+1;u<=i+1;++u)o[u]=new dt(0,0,0);return o}function fy(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function dy(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new N(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(fy(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function py(s,e,t,n,i){const r=uy(s,e,t,n,i);return dy(r)}class my extends rv{constructor(e,t,n,i,r){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new dt(a.x,a.y,a.z,a.w)}}getPoint(e,t=new N){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=ly(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new N){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=py(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}}let at,Nt,on;class gy extends Hn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?Cs.extractUrlBase(e):r.path,a=new Zo(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){if(Sy(e))at=new My().parse(e);else{const i=Ef(e);if(!Ey(i))throw new Error("THREE.FBXLoader: Unknown format.");if(lu(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+lu(i));at=new yy().parse(i)}const n=new Jo(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new _y(n,this.manager).parse(at)}}class _y{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Nt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new vy().parse(i);return this.parseScene(i,r,n),on}parseConnections(){const e=new Map;return"Connections"in at&&at.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const c={ID:i,relationship:o};e.get(r).children.push(c)}),e}parseImages(){const e={},t={};if("Video"in at.Objects){const n=at.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(a||c){const l=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=l}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in at.Objects){const n=at.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?kn:zn,n.wrapT=a===0?kn:zn,"Scaling"in e){const c=e.Scaling.value;n.repeat.x=c[0],n.repeat.y=c[1]}if("Translation"in e){const c=e.Translation.value;n.offset.x=c[0],n.offset.y=c[1]}return n}loadTexture(e,t){const n=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=e.FileName.split(".").pop().toLowerCase(),r=n.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!r)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,e.RelativeFilename),new zt;const o=r.path;o||r.setPath(this.textureLoader.path);const a=Nt.get(e.id).children;let c;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(c=t[a[0].ID],(c.indexOf("blob:")===0||c.indexOf("data:")===0)&&r.setPath(void 0));const l=r.load(c);return r.setPath(o),l}parseMaterials(e){const t=new Map;if("Material"in at.Objects){const n=at.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Nt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new wo;break;case"lambert":a=new vl;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new wo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Me().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Me().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Me().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Me().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Me().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Me().fromArray(e.SpecularColor.value).convertSRGBToLinear());const r=this;return Nt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Et);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Et);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Ro,i.envMap.colorSpace=Et);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Et);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in at.Objects&&t in at.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Nt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in at.Objects){const n=at.Objects.Deformer;for(const i in n){const r=n[i],o=Nt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ie().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Nt.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){on=new jt;const i=this.parseModels(e.skeletons,t,n),r=at.Objects.Model,o=this;i.forEach(function(c){const l=r[c.ID];o.setLookAtProperties(c,l),Nt.get(c.ID).parents.forEach(function(h){const f=i.get(h.ID);f!==void 0&&f.add(c)}),c.parent===null&&on.add(c)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),on.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const l=Mf(c.userData.transformData);c.applyMatrix4(l),c.updateWorldMatrix()}});const a=new xy().parse();on.children.length===1&&on.children[0].isGroup&&(on.children[0].animations=a,on=on.children[0]),on.animations=a}parseModels(e,t,n){const i=new Map,r=at.Objects.Model;for(const o in r){const a=parseInt(o),c=r[o],l=Nt.get(a);let u=this.buildSkeleton(l,e,a,c.attrName);if(!u){switch(c.attrType){case"Camera":u=this.createCamera(l);break;case"Light":u=this.createLight(l);break;case"Mesh":u=this.createMesh(l,t,n);break;case"NurbsCurve":u=this.createCurve(l,t);break;case"LimbNode":case"Root":u=new No;break;case"Null":default:u=new jt;break}u.name=c.attrName?ft.sanitizeNodeName(c.attrName):"",u.userData.originalName=c.attrName,u.ID=a}this.getTransformData(u,c),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const c=t[a];c.rawBones.forEach(function(l,u){if(l.ID===o.ID){const h=r;r=new No,r.matrixWorld.copy(l.transformLink),r.name=i?ft.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,c.bones[u]=r,h!==null&&r.add(h)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=at.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,c=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,c=n.AspectHeight.value);const l=a/c;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Qt(u,l,r,o),h!==null&&t.setFocalLength(h);break;case 1:t=new Er(-a/2,a/2,c/2,-c/2,r,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new St;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=at.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new St;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=new Me().fromArray(n.Color.value).convertSRGBToLinear());let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const c=1;switch(i){case 0:t=new Hc(r,o,a,c);break;case 1:t=new yl(r,o);break;case 2:let l=Math.PI/3;n.InnerAngle!==void 0&&(l=Jt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Jt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new lf(r,o,a,l,u,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Hc(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];return e.children.forEach(function(c){t.has(c.ID)&&(r=t.get(c.ID)),n.has(c.ID)&&a.push(n.get(c.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new wo({name:Hn.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(i=new ef(r,o),i.normalizeSkinWeights()):i=new Rt(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new bs({name:Hn.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new qo(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Sf(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Nt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=at.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),on.add(e.target)):e.lookAt(new N().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];Nt.get(parseInt(o.ID)).parents.forEach(function(c){if(t.has(c.ID)){const l=c.ID;Nt.get(l).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new jo(o.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in at.Objects){const t=at.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ie().fromArray(r.Matrix.a)}):e[i.Node]=new Ie().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in at){if("AmbientColor"in at.GlobalSettings){const e=at.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Me(t,n,i).convertSRGBToLinear();on.add(new hf(r,1))}}"UnitScaleFactor"in at.GlobalSettings&&(on.userData.unitScaleFactor=at.GlobalSettings.UnitScaleFactor.value)}}}class vy{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in at.Objects){const n=at.Objects.Geometry;for(const i in n){const r=Nt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(h){return at.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return i[f.ID]!==void 0&&(h=i[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&r.push(n.morphTargets[h.ID])});const c=o[0],l={};"RotationOrder"in c&&(l.eulerOrder=Sf(c.RotationOrder.value)),"InheritType"in c&&(l.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(l.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(l.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(l.scale=c.GeometricScaling.value);const u=Mf(l);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Ut;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),c=new vt(a.vertex,3);if(c.applyMatrix4(i),r.setAttribute("position",c),a.colors.length>0&&r.setAttribute("color",new vt(a.colors,3)),t&&(r.setAttribute("skinIndex",new hl(a.weightsIndices,4)),r.setAttribute("skinWeight",new vt(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const l=new nt().getNormalMatrix(i),u=new vt(a.normal,3);u.applyNormalMatrix(l),r.setAttribute("normal",u)}if(a.uvs.forEach(function(l,u){const h=u===0?"uv":`uv${u}`;r.setAttribute(h,new vt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let l=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==l&&(r.addGroup(u,f-u,l),l=h,u=f)}),r.groups.length>0){const h=r.groups[r.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&r.addGroup(f,a.materialIndex.length-f,l)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],c=[],l=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,_){let v,g=!1;d<0&&(d=d^-1,g=!0);let m=[],w=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const M=ho(_,n,d,e.color);c.push(M[0],M[1],M[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(M){w.push(M.weight),m.push(M.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],E=[0,0,0,0];w.forEach(function(D,I){let P=D,k=m[I];E.forEach(function(R,A,S){if(P>R){S[A]=P,P=R;const L=M[A];M[A]=k,k=L}})}),m=M,w=E}for(;w.length<4;)w.push(0),m.push(0);for(let M=0;M<4;++M)u.push(w[M]),h.push(m[M])}if(e.normal){const M=ho(_,n,d,e.normal);a.push(M[0],M[1],M[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=ho(_,n,d,e.material)[0],v<0&&(f.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(M,E){const D=ho(_,n,d,M);l[E]===void 0&&(l[E]=[]),l[E].push(D[0]),l[E].push(D[1])}),i++,g&&(f.genFace(t,e,o,v,a,c,l,u,h,i),n++,i=0,o=[],a=[],c=[],l=[],u=[],h=[])}),t}getNormalNewell(e){const t=new N(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new N(0,1,0):new N(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new je(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,c,l,u){let h;if(u>3){const f=[],d=t.baseVertexPositions||t.vertexPositions;for(let m=0;m<n.length;m+=3)f.push(new N(d[n[m]],d[n[m+1]],d[n[m+2]]));const{tangent:_,bitangent:v}=this.getNormalTangentAndBitangent(f),g=[];for(const m of f)g.push(this.flattenVertex(m,_,v));h=ml.triangulateShape(g,[])}else h=[[0,1,2]];for(const[f,d,_]of h)e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[_*3]]),e.vertex.push(t.vertexPositions[n[_*3+1]]),e.vertex.push(t.vertexPositions[n[_*3+2]]),t.skeleton&&(e.vertexWeights.push(c[f*4]),e.vertexWeights.push(c[f*4+1]),e.vertexWeights.push(c[f*4+2]),e.vertexWeights.push(c[f*4+3]),e.vertexWeights.push(c[d*4]),e.vertexWeights.push(c[d*4+1]),e.vertexWeights.push(c[d*4+2]),e.vertexWeights.push(c[d*4+3]),e.vertexWeights.push(c[_*4]),e.vertexWeights.push(c[_*4+1]),e.vertexWeights.push(c[_*4+2]),e.vertexWeights.push(c[_*4+3]),e.weightsIndices.push(l[f*4]),e.weightsIndices.push(l[f*4+1]),e.weightsIndices.push(l[f*4+2]),e.weightsIndices.push(l[f*4+3]),e.weightsIndices.push(l[d*4]),e.weightsIndices.push(l[d*4+1]),e.weightsIndices.push(l[d*4+2]),e.weightsIndices.push(l[d*4+3]),e.weightsIndices.push(l[_*4]),e.weightsIndices.push(l[_*4+1]),e.weightsIndices.push(l[_*4+2]),e.weightsIndices.push(l[_*4+3])),t.color&&(e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[_*3]),e.colors.push(o[_*3+1]),e.colors.push(o[_*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[d*3]),e.normal.push(r[d*3+1]),e.normal.push(r[d*3+2]),e.normal.push(r[_*3]),e.normal.push(r[_*3+1]),e.normal.push(r[_*3+2])),t.uv&&t.uv.forEach(function(v,g){e.uvs[g]===void 0&&(e.uvs[g]=[]),e.uvs[g].push(a[g][f*2]),e.uvs[g].push(a[g][f*2+1]),e.uvs[g].push(a[g][d*2]),e.uvs[g].push(a[g][d*2+1]),e.uvs[g].push(a[g][_*2]),e.uvs[g].push(a[g][_*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const c=at.Objects.Geometry[a.geoID];c!==void 0&&r.genMorphGeometry(e,t,c,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],c=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,h=new Float32Array(u);for(let v=0;v<l.length;v++){const g=l[v]*3;h[g]=c[v*3],h[g+1]=c[v*3+1],h[g+2]=c[v*3+2]}const f={vertexIndices:a,vertexPositions:h,baseVertexPositions:o},d=this.genBuffers(f),_=new vt(d.vertex,3);_.name=r||n.attrName,_.applyMatrix4(i),e.morphAttributes.position.push(_)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Me;o<i.length;o+=4)a.fromArray(i,o).convertSRGBToLinear().toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Ut;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)r.push(new dt().fromArray(o,h));let a,c;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,c=i.length-1-a;for(let h=0;h<n;++h)r.push(r[h])}const u=new my(n,i,r,a,c).getPoints(r.length*12);return new Ut().setFromPoints(u)}}class xy{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(at.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=at.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=at.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(wy),values:t[n].KeyValueFloat.a},r=Nt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=at.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=Nt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(c,l){if(e.has(c.ID)){const u=e.get(c.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[l]===void 0){const h=Nt.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=at.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const d={modelName:f.attrName?ft.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};on.traverse(function(_){_.ID===f.id&&(d.transform=_.matrix,_.userData.transformData&&(d.eulerOrder=_.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ie),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),r[l]=d}}r[l]&&(r[l][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[l]===void 0){const h=Nt.get(c.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,f=Nt.get(h).parents[0].ID,d=Nt.get(f).parents[0].ID,_=Nt.get(d).parents[0].ID,v=at.Objects.Model[_],g={modelName:v.attrName?ft.sanitizeNodeName(v.attrName):"",morphName:at.Objects.Deformer[h].attrName};r[l]=g}r[l][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=at.Objects.AnimationStack,n={};for(const i in t){const r=Nt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new cf(e.name,-1,t)}generateTracks(e){const t=[];let n=new N,i=new N;if(e.transform&&e.transform.decompose(n,new Ct,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Wi(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);o=h[0],a=h[1]}n!==void 0&&(n=n.map(Jt.degToRad),n.push(r),n=new Dt().fromArray(n),n=new Ct().setFromEuler(n)),i!==void 0&&(i=i.map(Jt.degToRad),i.push(r),i=new Dt().fromArray(i),i=new Ct().setFromEuler(i).invert());const c=new Ct,l=new Dt,u=[];if(!a||!o)return new Ei(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)l.set(a[h],a[h+1],a[h+2],r),c.setFromEuler(l),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new Ct().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new Ei(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=on.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Gi(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,c=-1;return e.forEach(function(l){if(t.x&&(o=t.x.times.indexOf(l)),t.y&&(a=t.y.times.indexOf(l)),t.z&&(c=t.z.times.indexOf(l)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(c!==-1){const u=t.z.values[c];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Jt.degToRad(e.values[0])),o.push(Jt.degToRad(t.values[0])),o.push(Jt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const c=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(c[0])||isNaN(c[1])||isNaN(c[2]))continue;const l=c.map(Jt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const h=u.map(Jt.degToRad),f=[u[0]-c[0],u[1]-c[1],u[2]-c[2]],d=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const v=Math.max(...d)/180,g=new Dt(...l,i),m=new Dt(...h,i),w=new Ct().setFromEuler(g),M=new Ct().setFromEuler(m);w.dot(M)&&M.set(-M.x,-M.y,-M.z,-M.w);const E=e.times[a-1],D=e.times[a]-E,I=new Ct,P=new Dt;for(let k=0;k<1;k+=1/v)I.copy(w.clone().slerp(M.clone(),k)),r.push(E+k*D),P.setFromQuaternion(I,i),o.push(P.x),o.push(P.y),o.push(P.z)}else r.push(e.times[a]),o.push(Jt.degToRad(e.values[a])),o.push(Jt.degToRad(t.values[a])),o.push(Jt.degToRad(n.values[a]))}return[r,o]}}class yy{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new yf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const c=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),l=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(i,c):l?t.parseNodeProperty(i,l,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const c=r.split(",").slice(1),l=parseInt(c[0]),u=parseInt(c[1]);let h=r.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),i="connections",r=[l,u],Ty(r,h),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Za(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Za(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],c=i[3];let l=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":l=parseFloat(l);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":l=Za(l);break}this.getPrevNode()[r]={type:o,type2:a,flag:c,value:l},this.setCurrentProp(this.getPrevNode(),r)}}class My{parse(e){const t=new cu(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new yf;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(e));const l=c.length>0?c[0]:"",u=c.length>1?c[1]:"",h=c.length>2?c[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=c,typeof l=="number"&&(n.id=l),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let c;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:c=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:c}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=ry(new Uint8Array(e.getArrayBuffer(o))),c=new cu(a.buffer);switch(t){case"b":case"c":return c.getBooleanArray(i);case"d":return c.getFloat64Array(i);case"f":return c.getFloat32Array(i);case"i":return c.getInt32Array(i);case"l":return c.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class cu{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class yf{add(e,t){this[e]=t}}function Sy(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Ef(s,0,e.length)}function Ey(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function lu(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function wy(s){return s/46186158e3}const Ay=[];function ho(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return by(Ay,n.buffer,r,o)}const Ya=new Dt,ps=new N;function Mf(s){const e=new Ie,t=new Ie,n=new Ie,i=new Ie,r=new Ie,o=new Ie,a=new Ie,c=new Ie,l=new Ie,u=new Ie,h=new Ie,f=new Ie,d=s.inheritType?s.inheritType:0;if(s.translation&&e.setPosition(ps.fromArray(s.translation)),s.preRotation){const A=s.preRotation.map(Jt.degToRad);A.push(s.eulerOrder||Dt.DEFAULT_ORDER),t.makeRotationFromEuler(Ya.fromArray(A))}if(s.rotation){const A=s.rotation.map(Jt.degToRad);A.push(s.eulerOrder||Dt.DEFAULT_ORDER),n.makeRotationFromEuler(Ya.fromArray(A))}if(s.postRotation){const A=s.postRotation.map(Jt.degToRad);A.push(s.eulerOrder||Dt.DEFAULT_ORDER),i.makeRotationFromEuler(Ya.fromArray(A)),i.invert()}s.scale&&r.scale(ps.fromArray(s.scale)),s.scalingOffset&&a.setPosition(ps.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(ps.fromArray(s.scalingPivot)),s.rotationOffset&&c.setPosition(ps.fromArray(s.rotationOffset)),s.rotationPivot&&l.setPosition(ps.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(h.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const _=t.clone().multiply(n).multiply(i),v=new Ie;v.extractRotation(u);const g=new Ie;g.copyPosition(u);const m=g.clone().invert().multiply(u),w=v.clone().invert().multiply(m),M=r,E=new Ie;if(d===0)E.copy(v).multiply(_).multiply(w).multiply(M);else if(d===1)E.copy(v).multiply(w).multiply(_).multiply(M);else{const S=new Ie().scale(new N().setFromMatrixScale(h)).clone().invert(),L=w.clone().multiply(S);E.copy(v).multiply(_).multiply(L).multiply(M)}const D=l.clone().invert(),I=o.clone().invert();let P=e.clone().multiply(c).multiply(l).multiply(t).multiply(n).multiply(i).multiply(D).multiply(a).multiply(o).multiply(r).multiply(I);const k=new Ie().copyPosition(P),R=u.clone().multiply(k);return f.copyPosition(R),P=f.clone().multiply(E),P.premultiply(u.invert()),P}function Sf(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Za(s){return s.split(",").map(function(t){return parseFloat(t)})}function Ef(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function Ty(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function by(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const $c=[{label:"ESTATE",colour:"red",obj:"/assets/cars/car01/Car.obj",tex:"/assets/cars/car01/car_red.png",swatch:"#8c3418"},{label:"SALOON",colour:"navy",obj:"/assets/cars/car02/Car2.obj",tex:"/assets/cars/car02/car2.png",swatch:"#242454"},{label:"HATCHBACK",colour:"yellow",obj:"/assets/cars/car03/Car3.obj",tex:"/assets/cars/car03/car3_yellow.png",swatch:"#b49c24"},{label:"VAN",colour:"orange",obj:"/assets/cars/car04/Car4.obj",tex:"/assets/cars/car04/car4_lightorange.png",swatch:"#b48454"},{label:"CRUISER",colour:"green",obj:"/assets/cars/car05/Car5.obj",tex:"/assets/cars/car05/car5_green.png",swatch:"#24543c"},{label:"COUPE",colour:"brown",obj:"/assets/cars/car06/Car6.obj",tex:"/assets/cars/car06/car6.png",swatch:"#84543c"},{label:"4X4",colour:"silver",obj:"/assets/cars/car07/Car7.obj",tex:"/assets/cars/car07/car7_grey.png",swatch:"#848484"},{label:"BOX VAN",colour:"purple",obj:"/assets/cars/car08/Car8.obj",tex:"/assets/cars/car08/Car8_purple.png",swatch:"#54546c"}],El=0;function Ry(s){return $c[s]??$c[El]}const Cy=new rx,Py=new $x,Iy=new gy,Ly=new Jo;async function Qn(s){try{const e=await Ly.loadAsync(s);return e.colorSpace=Et,e.name=s,yi(e)}catch{throw new Error("texture load failed: "+s)}}function Dy(s,e,t=!1,n=!1){const i=s,r=e??i.map??null;r&&yi(r);const o=t?new vl({map:r}):new en({map:r}),a=i.transparent||(i.alphaTest??0)>0;return(n||a||r&&/bush|tree|hedge|leaf|foliage|plant/i.test(r.name??""))&&(o.alphaTest=.5,o.transparent=!1,o.side=pn),Ss(o),o}function wf(s,e,t=!1,n=!1){s.updateMatrixWorld(!0);const i=[],r=new Map;return s.traverse(o=>{const a=o;if(!a.isMesh)return;const c=u=>{let h=r.get(u);return h||(h=Dy(u,e,t,n),r.set(u,h)),h};a.material=Array.isArray(a.material)?a.material.map(c):c(a.material);const l=Array.isArray(a.material)?a.material:[a.material];i.push({geometry:a.geometry,material:l[0],matrix:a.matrixWorld.clone()})}),{object:s,meshes:i}}async function Li(s,e,t=!1){try{const n=await Cy.loadAsync(s);return wf(n.scene,e,!1,t)}catch(n){throw new Error("glb load failed: "+s+" — "+n)}}async function uo(s,e,t=!1){try{const n=await Iy.loadAsync(s);return wf(n,e,!1,t)}catch(n){throw new Error("fbx load failed: "+s+" — "+n)}}const hu=[["/assets/cars/car01/Car.obj","/assets/cars/car01/car_gray.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2_black.png"],["/assets/cars/car02/Car2.obj","/assets/cars/car02/car2_red.png"]],Uy="/assets/cars/car05/Car5_Police.obj",Ny="/assets/cars/car05/car5_police.png";async function Oy(){return Xc(Uy,Ny)}async function Ja(s=0,e=-1){if(e>=0){const[n,i]=hu[e%hu.length];return Xc(n,i)}const t=Ry(s);return Xc(t.obj,t.tex)}async function Xc(s,e){const[t,n,i]=await Promise.all([Py.loadAsync(s),Qn(e),Qn("/assets/cars/shadow/car_shadow_alpha.png")]),r=new jt,o=[],a=new hn().setFromObject(t),c=a.getSize(new N),l=hr/Math.max(c.x,c.z),u=typeof location<"u"&&location.search.includes("cartest");t.traverse(f=>{const d=f;if(!d.isMesh)return;const _=u?new en({map:n}):new vl({map:n});Ss(_),d.material=_,o.push(_)}),t.scale.setScalar(l),t.position.y=-a.min.y*l,r.add(t);const h=new Rt(new wi(c.x*l*1.15,c.z*l*1.05),new en({map:i,transparent:!0,opacity:.55,depthWrite:!1,color:0}));return h.rotation.x=-Math.PI/2,h.position.y=.02,h.renderOrder=1,r.add(h),{group:r,tintables:o,length:hr}}const Fy=new Me(.64,.68,.86);class zo{constructor(e){this.group=new jt,this.map=e}lampTintAt(e,t,n,i=1){n.copy(Fy).multiplyScalar(i);for(const r of this.map.lamps){const o=e-r.x,a=t-r.z,c=o*o+a*a;if(c>r.radius*r.radius)continue;const l=1-Math.sqrt(c)/r.radius,u=l*l*r.intensity*2.6;n.r+=r.color[0]*u,n.g+=r.color[1]*u,n.b+=r.color[2]*u}return n}async build(){await Promise.all([this.buildGround(),this.buildRoads(),this.buildLampPosts(),this.buildProps()])}async buildGround(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d");for(let M=0;M<64;M++)for(let E=0;E<64;E++){const D=Math.sin(E*12.9898+M*78.233)*43758.5453,P=80+(D-Math.floor(D))*34;t.fillStyle=`rgb(${P*.55|0},${P|0},${P*.62|0})`,t.fillRect(E,M,1,1)}const n=yi(new vr(e));n.wrapS=n.wrapT=kn,n.colorSpace=Et;const i=this.map.bounds,r=i.maxX-i.minX,o=i.maxZ-i.minZ,a=Math.round(r/4),c=Math.round(o/4),l=new wi(r,o,a,c);l.rotateX(-Math.PI/2),l.translate(i.minX+r/2,-.06,i.minZ+o/2);const u=l.attributes.uv;for(let M=0;M<u.count;M++)u.setXY(M,u.getX(M)*(r/4),u.getY(M)*(o/4));const h=l.attributes.position,f=new Float32Array(h.count*3),d=new Me,_=.42,v=.78,g=-.46;for(let M=0;M<h.count;M++){const E=h.getX(M),D=h.getZ(M),I=this.map.heightAt(E,D);h.setY(M,I-.06),this.lampTintAt(E,D,d);const P=(this.map.heightAt(E+2,D)-this.map.heightAt(E-2,D))/4,k=(this.map.heightAt(E,D+2)-this.map.heightAt(E,D-2))/4,R=1/Math.sqrt(P*P+1+k*k),A=(-P*_+v-k*g)*R,S=(.62+.55*Math.max(0,A))*(1+I*.035);f[M*3]=d.r*S,f[M*3+1]=d.g*S,f[M*3+2]=d.b*S}l.setAttribute("color",new kt(f,3));const m=new en({map:n,vertexColors:!0});Ss(m);const w=new Rt(l,m);this.group.add(w)}pieceFile(e){switch(e){case"straight":return"Road_Straight.glb";case"corner":return"Road_Corner.glb";case"t":return"Road_T.glb";case"cross":return"Road_Cross.glb";case"end":return"Road_End.glb"}}static{this.ROT_FIX={straight:Math.PI/2,corner:-Math.PI/2,t:0,cross:0,end:0}}static{this.PIECE_SCALE={straight:[He/13,1,1]}}async buildRoads(){this.buildDirtRoad();const e=new Map;for(const n of this.map.tiles){if(n.dirt)continue;const i=e.get(n.piece)??[];i.push(n),e.set(n.piece,i)}const t=new Me;for(const[n,i]of e){const r=await Li("/assets/roads/"+this.pieceFile(n)),o=new hn().setFromObject(r.object),a=o.getCenter(new N),c=new Ie().makeTranslation(-a.x,-o.min.y-.04,-a.z);for(const l of r.meshes){const u=new ar(l.geometry,l.material,i.length),h=new Ie,f=new Ct,d=new N(0,1,0),_=zo.PIECE_SCALE[n]??[1,1,1],v=new Ct;i.forEach((g,m)=>{f.setFromAxisAngle(d,g.rot+zo.ROT_FIX[n]),g.piece==="straight"&&(g.dirs.n||g.dirs.s?v.setFromAxisAngle(new N(1,0,0),Math.atan2(g.elev.s-g.elev.n,He)):v.setFromAxisAngle(new N(0,0,1),Math.atan2(g.elev.e-g.elev.w,He)),f.premultiply(v)),h.compose(new N(g.x,g.elev.c,g.z),f,new N(_[0],_[1],_[2])),h.multiply(c),h.multiply(l.matrix),u.setMatrixAt(m,h),this.lampTintAt(g.x,g.z,t),u.setColorAt(m,t)}),u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0),u.frustumCulled=!1,this.group.add(u)}}}async buildLampPosts(){const e=new Ko(.09,.13,5.2,5);e.translate(0,2.6,0);const t=new Hi(.14,.12,1.4);t.translate(0,5.15,.6);const n=new Hi(.3,.16,.55);n.translate(0,5.05,1.15);const i=this.map.props.filter(u=>u.kind==="lampProp"),r=new en({color:new Me(.05,.055,.075)});Ss(r);const o=new en({color:new Me(1,.75,.42)});Ss(o);const a=new Ct,c=new N(0,1,0),l=new Ie;for(const[u,h]of[[e,r],[t,r],[n,o]]){const f=new ar(u,h,i.length);i.forEach((d,_)=>{a.setFromAxisAngle(c,d.rot),l.compose(new N(d.x,this.map.heightAt(d.x,d.z),d.z),a,new N(1,1,1)),f.setMatrixAt(_,l)}),f.instanceMatrix.needsUpdate=!0,f.frustumCulled=!1,this.group.add(f)}}placeClones(e,t,n={}){if(!t.length)return;const i=new hn().setFromObject(e.object),r=i.getSize(new N),o=i.getCenter(new N);let a=1,c=1,l=1;n.targetSize?(c=n.targetSize.y?n.targetSize.y/r.y:1,a=n.targetSize.x?n.targetSize.x/r.x:c,l=n.targetSize.z?n.targetSize.z/r.z:c):n.targetHeight?a=c=l=n.targetHeight/r.y:n.targetWidth&&(a=c=l=n.targetWidth/Math.max(r.x,r.z));const u=new Me;for(const h of t){const f=new jt;f.position.set(h.x,this.map.heightAt(h.x,h.z),h.z),f.rotation.y=h.rot;const d=e.object.clone();d.scale.set(a,c,l),d.position.set(-o.x*a,-i.min.y*c,-o.z*l),f.add(d),n.tint!==!1&&(this.lampTintAt(h.x,h.z,u,n.tintAmbient??1),d.traverse(_=>{const v=_;if(!v.isMesh)return;const g=Array.isArray(v.material)?v.material:[v.material];v.material=g.length===1?g[0].clone():g.map(w=>w.clone());const m=Array.isArray(v.material)?v.material:[v.material];for(const w of m)w.color?.copy(u)})),this.group.add(f)}}placeInstanced(e,t,n={}){if(!t.length)return;const i=new hn().setFromObject(e.object),r=i.getSize(new N),o=i.getCenter(new N);let a=1;n.targetHeight?a=n.targetHeight/r.y:n.targetWidth&&(a=n.targetWidth/Math.max(r.x,r.z));const c=new Me,l=new Ie,u=new Ct,h=new N(0,1,0),f=new Ie,d=new Ie;for(const _ of e.meshes){const v=new ar(_.geometry,_.material,t.length);t.forEach((g,m)=>{const w=a*(.75+Ne(Math.round(g.x*7),Math.round(g.z*7),5)*.55);u.setFromAxisAngle(h,g.rot),l.compose(new N(g.x,this.map.heightAt(g.x,g.z),g.z),u,new N(1,1,1)),f.makeTranslation(-o.x*w,-i.min.y*w,-o.z*w),d.makeScale(w,w,w),l.multiply(f),l.multiply(d),l.multiply(_.matrix),v.setMatrixAt(m,l),this.lampTintAt(g.x,g.z,c,n.tintAmbient??1),v.setColorAt(m,c)}),v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),v.frustumCulled=!1,this.group.add(v)}}buildDirtRoad(){if(!this.map.tiles.filter(v=>v.dirt).length)return;const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d");for(let v=0;v<64;v++)for(let g=0;g<64;g++){const m=Math.sin(g*91.7+v*47.3)*43758.5453;let M=105+(m-Math.floor(m))*32;const E=g/64;(Math.abs(E-.28)<.09||Math.abs(E-.72)<.09)&&(M-=14),n.fillStyle=`rgb(${M*1|0},${M*.82|0},${M*.6|0})`,n.fillRect(g,v,1,1)}const i=yi(new vr(t));i.wrapS=i.wrapT=kn,i.colorSpace=Et;const r=[],o=[],a=[],c=[],l=new Me,u=5.2,h=(v,g,m,w)=>{const M=this.map.heightAt(v,g)+.06;return this.lampTintAt(v,g,l),r.push(v,M,g),o.push(m,w),a.push(l.r,l.g,l.b),r.length/3-1};for(const v of this.map.tiles.filter(g=>g.dirt)){const g=v.piece==="corner"?12:8;let m=-1,w=-1;for(let M=0;M<=g;M++){const E=M/g,[D,I]=Ga(v,E),[P,k]=Ga(v,Math.min(1,E+.01)),[R,A]=Ga(v,Math.max(0,E-.01));let S=P-R,L=k-A;const B=Math.hypot(S,L)||1;S/=B,L/=B;const W=-L,$=S,X=h(D-W*u,I-$*u,0,E*He/4),K=h(D+W*u,I+$*u,2.6,E*He/4);m>=0&&c.push(m,X,w,w,X,K),m=X,w=K}}const f=new Ut;f.setAttribute("position",new vt(r,3)),f.setAttribute("uv",new vt(o,2)),f.setAttribute("color",new vt(a,3)),f.setIndex(c);const d=new en({map:i,vertexColors:!0,side:pn});Ss(d);const _=new Rt(f,d);_.frustumCulled=!1,this.group.add(_)}async buildProps(){const e=this.map.props,t=[];t.push((async()=>{const n=e.filter(r=>r.kind==="house");if(!n.length)return;const i=[];for(let r=1;r<=5;r++)for(let o=1;o<=3;o++){const a=await Qn(`/assets/houses/tex/house${r}_tex${o}.png`);i.push(await Li(`/assets/houses/house${r}.glb`,a))}for(const r of n)this.placeClones(i[r.variant%i.length],[r])})()),t.push((async()=>{const n=e.filter(o=>o.kind==="hedge");if(!n.length)return;const i=await Qn("/assets/hedges/tex/hedge_open_bottom_summer.png"),r=await uo("/assets/hedges/basic_1x1.fbx",i);this.placeClones(r,n,{targetSize:{x:2,y:2.2,z:He+.5}})})()),t.push((async()=>{const n=e.filter(v=>v.kind==="tree_big");if(!n.length)return;const i=await Li("/assets/nature/trees/pine_tree.glb",void 0,!0),r=i.meshes[0],o=new hn().setFromObject(i.object),a=o.getSize(new N),c=o.getCenter(new N),l=new Ie().makeTranslation(-c.x,-o.min.y,-c.z),u=9.5/a.y,h=new ar(r.geometry,r.material,n.length),f=new Ie,d=new Ct,_=new N(0,1,0);n.forEach((v,g)=>{const m=u*(.85+v.variant*37%10/30);d.setFromAxisAngle(_,v.rot),f.compose(new N(v.x,this.map.heightAt(v.x,v.z),v.z),d,new N(m,m,m)),f.multiply(l),f.multiply(r.matrix),h.setMatrixAt(g,f)}),h.instanceMatrix.needsUpdate=!0,h.frustumCulled=!1,this.group.add(h)})()),t.push((async()=>{const n=e.filter(a=>a.kind==="tree_small"),i=e.filter(a=>a.kind==="bush"),r=[];for(const a of[1,2,3,4,5,7,9,11]){const c=String(a).padStart(2,"0"),l=await Qn(`/assets/trees/tex/tree${c}.png`);r.push(await uo(`/assets/trees/tree${c}.fbx`,l,!0))}for(const a of[1,2,3,4,5,6,7,8]){const c=String(a).padStart(2,"0");try{const l=await Qn(`/assets/nature2/tex/trees/tree${c}_summer.png`);r.push(await Li(`/assets/nature2/trees/tree${c}.glb`,l,!0))}catch{}}for(let a=0;a<r.length;a++)this.placeInstanced(r[a],n.filter(c=>c.variant%r.length===a),{targetHeight:5.5});const o=[];for(const a of[1,2,3,4,5,6,7,8]){const c=String(a).padStart(2,"0");try{const l=await Qn(`/assets/trees/tex/bush${c}.png`);o.push(await uo(`/assets/trees/bush${c}.fbx`,l,!0))}catch{}}for(const a of[1,2,3,4,5]){const c=String(a).padStart(2,"0");try{const l=await Qn(`/assets/nature2/tex/bushes/bush${a}_summer.png`);o.push(await Li(`/assets/nature2/bushes/bush${c}.glb`,l,!0))}catch{}}for(let a=0;a<o.length;a++)this.placeInstanced(o[a],i.filter(c=>c.variant%o.length===a),{targetHeight:1.1})})()),t.push((async()=>{const n=e.filter(o=>o.kind==="rock");if(!n.length)return;const i=await Li("/assets/nature/rocks/rock.glb"),r=await Li("/assets/nature/rocks/rock_grassy.glb");this.placeInstanced(i,n.filter(o=>o.variant===0),{targetWidth:2.2}),this.placeInstanced(r,n.filter(o=>o.variant===1),{targetWidth:2.2})})()),t.push((async()=>{const n=e.filter(i=>i.kind==="tower");if(n.length)try{const i=await Qn("/assets/landmarks/tex/textures.png"),r=await uo("/assets/landmarks/tower.fbx",i);this.placeClones(r,n,{targetHeight:16,tintAmbient:.8})}catch(i){console.warn("tower load failed",i)}})()),await Promise.all(t)}}function Af(s=1){const t=document.createElement("canvas");t.width=t.height=32;const n=t.getContext("2d"),i=n.createImageData(32,32);for(let r=0;r<32;r++)for(let o=0;o<32;o++){const a=(o-16+.5)/16,c=(r-32/2+.5)/(32/2)*s,l=Math.sqrt(a*a+c*c);let u=Math.max(0,1-l);u=u*u;const h=((o%4*4+r%4)/16-.5)/10;u=Math.max(0,Math.min(1,u+h));const f=(r*32+o)*4;i.data[f]=i.data[f+1]=i.data[f+2]=255,i.data[f+3]=Math.round(u*255)}return n.putImageData(i,0,0),yi(new vr(t))}const Qa={value:null};function Tf(){return Qa.value||(Qa.value=Af()),Qa.value}function zi(s,e,t=1){const n=new _r({map:Tf(),color:s,blending:Is,depthWrite:!1,transparent:!0,opacity:t,fog:!1}),i=new Uo(n);return i.scale.setScalar(e),i}function ko(s,e,t,n){const i=new en({map:Tf(),color:s,blending:Is,depthWrite:!1,transparent:!0,opacity:n,fog:!1}),r=new Rt(new wi(e,t),i);return r.rotation.x=-Math.PI/2,r.position.y=.03,r.renderOrder=2,r}function By(s,e,t=()=>0){const n=new jt;for(const i of s){const r=new Me(i.color[0],i.color[1],i.color[2]),o=e(i.x,i.z),a=t(i.x,i.z),c=zi(r,4.4+o*1.8,.85);c.position.set(i.x,a+i.height,i.z),n.add(c);const l=ko(r,i.radius*1.3,i.radius*1.3,.55);l.position.set(i.x,a+.05,i.z),n.add(l)}return n}const zy=`
uniform float uLength;
varying float vT; // 0 at root (headlight), 1 at far end
void main() {
  vT = clamp(position.z / uLength, 0.0, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ky=`
uniform vec3 uColor;
uniform float uAlpha;
varying float vT;
void main() {
  float a = (1.0 - vT) * uAlpha;
  a *= a;
  gl_FragColor = vec4(uColor * a, a);
}`;function Hy(s=19,e=2.8){const t=new pl(e,s,8,4,!0);t.rotateX(-Math.PI/2),t.translate(0,0,s/2);const n=new Un({vertexShader:zy,fragmentShader:ky,uniforms:{uColor:{value:new Me(1,.93,.72)},uAlpha:{value:.62},uLength:{value:s}},blending:Is,transparent:!0,depthWrite:!1,side:pn}),i=new Rt(t,n);return i.renderOrder=3,i}class Vy{constructor(e=4.5){this.group=new jt,this.t=0,this.on=!1;const t=1.32;this.red=zi(16722731,2,0),this.red.position.set(-.35,t,e*.03),this.blue=zi(3364351,2,0),this.blue.position.set(.35,t,e*.03),this.redPool=ko(16722731,9,9,0),this.redPool.position.set(-1.2,.05,0),this.bluePool=ko(3364351,9,9,0),this.bluePool.position.set(1.2,.05,0),this.group.add(this.red,this.blue,this.redPool,this.bluePool)}phase(){return this.t%1<.5?0:1}update(e,t){if(this.on=e,this.group.visible=e,!e)return;this.t+=t*1.5;const n=this.phase()===1;this.red.material.opacity=n?.12:1,this.blue.material.opacity=n?1:.12,this.redPool.material.opacity=n?.05:.5,this.bluePool.material.opacity=n?.5:.05}isOn(){return this.on}}class uu{constructor(e=1.7,t=4.5){this.group=new jt,this.cones=[],this.headGlows=[],this.tailGlows=[],this.brakeGlows=[];const n=e*.36,i=t*.46,r=-t*.47,o=.62;for(const a of[-1,1]){const c=Hy();c.position.set(a*n,o,i),c.rotation.x=.045,this.cones.push(c),this.group.add(c);const l=zi(16773836,1.3,1);l.position.set(a*n,o,i+.1),this.headGlows.push(l),this.group.add(l);const u=zi(16720401,.5,.7);u.position.set(a*n,o,r),this.tailGlows.push(u),this.group.add(u);const h=zi(16722456,1.5,0);h.position.set(a*n,o,r-.05),this.brakeGlows.push(h),this.group.add(h)}this.reverseGlow=zi(16777215,.8,0),this.reverseGlow.position.set(0,o,r),this.group.add(this.reverseGlow),this.pool=ko(16773314,10,20,.7),this.pool.position.set(0,.04,i+8.5),this.group.add(this.pool)}update(e,t,n,i){for(const r of this.cones)r.visible=e,r.material.uniforms.uAlpha.value=.55+i*.25;for(const r of this.headGlows)r.material.opacity=e?1:0;this.pool.visible=e,this.pool.material.opacity=.62+i*.15;for(const r of this.tailGlows)r.material.opacity=e?.7:.35;for(const r of this.brakeGlows)r.material.opacity=t?.85:0;this.reverseGlow.material.opacity=n?.6:0}}class Gy{constructor(e=140){this.group=new jt,this.pool=[],this.next=0;const t=Af();for(let n=0;n<e;n++){const i=new _r({map:t,transparent:!0,opacity:0,depthWrite:!1,fog:!0}),r=new Uo(i);r.visible=!1,this.group.add(r),this.pool.push({sprite:r,vx:0,vy:0,vz:0,life:0,maxLife:1,grow:1})}}spawn(e,t,n,i,r=!1){const o=this.pool[this.next];this.next=(this.next+1)%this.pool.length,o.sprite.visible=!0,o.sprite.position.set(e,t,n),o.sprite.scale.setScalar(r?.7:.55);const a=o.sprite.material;r?a.color.setRGB(.32*i.r+.12,.26*i.g+.09,.2*i.b+.06):a.color.copy(i).multiplyScalar(.85),a.opacity=r?.4:.5;const c=Math.random;o.vx=(c()-.5)*1.6,o.vy=.8+c()*1.2,o.vz=(c()-.5)*1.6,o.maxLife=o.life=r?.7:1.1,o.grow=r?2.4:3.2}update(e){for(const t of this.pool){if(!t.sprite.visible)continue;if(t.life-=e,t.life<=0){t.sprite.visible=!1;continue}t.sprite.position.x+=t.vx*e,t.sprite.position.y+=t.vy*e,t.sprite.position.z+=t.vz*e;const n=t.life/t.maxLife;t.sprite.scale.addScalar(t.grow*e),t.sprite.material.opacity=n*.5}}}const fo=2400;class Wy{constructor(){this.head=0,this.lastL=null,this.lastR=null,this.geo=new Ut,this.positions=new Float32Array(fo*6*3),this.alphas=new Float32Array(fo*6),this.geo.setAttribute("position",new kt(this.positions,3).setUsage(Ol)),this.geo.setAttribute("aAlpha",new kt(this.alphas,1).setUsage(Ol)),this.geo.drawRange.count=0;const e=new Un({vertexShader:`
        attribute float aAlpha;
        varying float vA;
        void main() {
          vA = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        varying float vA;
        void main() {
          gl_FragColor = vec4(0.02, 0.02, 0.03, vA);
        }`,transparent:!0,depthWrite:!1});this.mesh=new Rt(this.geo,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1}addSegment(e,t,n){this.lastL&&this.lastR&&(this.pushQuad(this.lastL,e,n),this.pushQuad(this.lastR,t,n)),this.lastL=e.clone(),this.lastR=t.clone()}breakSegment(){this.lastL=this.lastR=null}pushQuad(e,t,n){const i=t.x-e.x,r=t.z-e.z,o=Math.hypot(i,r);if(o<.05||o>3)return;const a=.14,c=-r/o*a,l=i/o*a,u=.025,h=this.head*18,f=this.positions,d=[e.x-c,u,e.z-l,e.x+c,u,e.z+l,t.x+c,u,t.z+l,e.x-c,u,e.z-l,t.x+c,u,t.z+l,t.x-c,u,t.z-l];f.set(d,h);const _=Math.min(.55,n);this.alphas.fill(_,this.head*6,this.head*6+6),this.head=(this.head+1)%fo,this.geo.drawRange.count=Math.min(this.geo.drawRange.count+6,fo*6),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}const ms=220,gs=Math.PI*.75,po=Math.PI*2.25;class $y{constructor(){this.toastTimer=0,this.lastKmh=-1,this.lastGear="";const e=document.createElement("div");e.id="hud",e.innerHTML=`
      <div id="hud-score">
        <div id="hud-total">0</div>
        <div id="hud-chain-row"><span id="hud-chain"></span><span id="hud-mult"></span></div>
        <div id="hud-players"></div>
      </div>
      <div id="hud-toast"></div>
      <canvas id="hud-gauge" width="200" height="200"></canvas>
      <div id="hud-help">WASD/arrows drive · SPACE handbrake · L lights · C camera · M radio · R reset · H horn · \` tuning</div>
    `,document.body.appendChild(e),this.scoreEl=document.getElementById("hud-total"),this.chainEl=document.getElementById("hud-chain"),this.multEl=document.getElementById("hud-mult"),this.toastEl=document.getElementById("hud-toast"),this.playersEl=document.getElementById("hud-players"),this.gauge=document.getElementById("hud-gauge"),this.g=this.gauge.getContext("2d"),this.pixFont=getComputedStyle(e).fontFamily||"monospace",this.drawGauge(0,"1")}toast(e,t=""){this.toastEl.textContent=e,this.toastEl.className="show "+t,this.toastTimer=1.6}setPlayers(e){const t=[...e].sort((n,i)=>i.score-n.score);this.playersEl.innerHTML=t.map(n=>`<div class="${n.me?"me":""}">${Xy(n.name)}<span>${n.score}</span></div>`).join("")}update(e,t,n){const i=Math.round(Math.abs(e.speed)*3.6),r=e.speed<-.5?"R":String(e.gear+1);(i!==this.lastKmh||r!==this.lastGear)&&(this.drawGauge(i,r),this.lastKmh=i,this.lastGear=r),this.scoreEl.textContent=String(Math.floor(t.total)),t.chain>1?(this.chainEl.textContent="+"+Math.floor(t.chain),this.multEl.textContent=" ×"+t.multiplier.toFixed(1),this.chainEl.parentElement.style.opacity="1"):this.chainEl.parentElement.style.opacity="0",t.event==="banked"&&this.toast("+"+t.banked+" BANKED","good"),t.event==="crashed"&&this.toast("CRASH — CHAIN LOST","bad"),this.toastTimer>0&&(this.toastTimer-=n,this.toastTimer<=0&&(this.toastEl.className=""))}drawGauge(e,t){const n=this.g,i=100,r=100,o=92;n.clearRect(0,0,200,200),n.beginPath(),n.arc(i,r,o,0,Math.PI*2),n.fillStyle="rgba(7, 9, 16, 0.85)",n.fill(),n.lineWidth=5,n.strokeStyle="#3a4160",n.stroke(),n.beginPath(),n.arc(i,r,o-4,0,Math.PI*2),n.lineWidth=2,n.strokeStyle="#12162a",n.stroke();const a=gs+(po-gs)*((ms-40)/ms);n.beginPath(),n.arc(i,r,o-12,a,po),n.lineWidth=7,n.strokeStyle="#8e2b22",n.stroke();for(let l=0;l<=ms;l+=10){const u=gs+(po-gs)*(l/ms),h=l%20===0,f=o-8,d=f-(h?12:6);if(n.beginPath(),n.moveTo(i+Math.cos(u)*d,r+Math.sin(u)*d),n.lineTo(i+Math.cos(u)*f,r+Math.sin(u)*f),n.lineWidth=h?3:2,n.strokeStyle=h?"#cfd6e6":"#5d6484",n.stroke(),l%40===0){const _=d-12;n.font=`9px ${this.pixFont}`,n.fillStyle="#9aa1c4",n.textAlign="center",n.textBaseline="middle",n.fillText(String(l),i+Math.cos(u)*_,r+Math.sin(u)*_)}}const c=gs+(po-gs)*Math.min(e,ms)/ms;n.beginPath(),n.moveTo(i-Math.cos(c)*14,r-Math.sin(c)*14),n.lineTo(i+Math.cos(c)*(o-24),r+Math.sin(c)*(o-24)),n.lineWidth=4,n.strokeStyle="#e34234",n.stroke(),n.beginPath(),n.arc(i,r,15,0,Math.PI*2),n.fillStyle="#12162a",n.fill(),n.lineWidth=2,n.strokeStyle="#3a4160",n.stroke(),n.font=`12px ${this.pixFont}`,n.fillStyle="#ffd28a",n.textAlign="center",n.textBaseline="middle",n.fillText(t,i,r+1),n.font=`8px ${this.pixFont}`,n.fillStyle="#5d6484",n.fillText("km/h",i,r+42)}}function Xy(s){return s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}class jy{constructor(){this.open=!1,this.deadline=0,this.onSend=()=>{},this.el=document.createElement("div"),this.el.id="cop-chat",this.el.style.display="none",this.el.innerHTML=`
      <div id="cop-frame">
        <div id="cop-head"><span id="cop-who">SGT. BRAM HOLLIS · MILLBROOK POLICE</span><span id="cop-clock">90</span></div>
        <div id="cop-log"></div>
        <input id="cop-input" maxlength="200" placeholder="say something…" autocomplete="off" />
      </div>
      <div id="cop-banner"></div>
    `,document.body.appendChild(this.el),this.log=this.el.querySelector("#cop-log"),this.input=this.el.querySelector("#cop-input"),this.clock=this.el.querySelector("#cop-clock"),this.banner=this.el.querySelector("#cop-banner"),this.input.addEventListener("keydown",e=>{if(e.stopPropagation(),e.code!=="Enter")return;const t=this.input.value.trim();t&&(this.push("you",t),this.input.value="",this.input.disabled=!0,this.onSend(t))})}isTyping(){return document.activeElement===this.input}start(e,t){this.onSend=t,this.open=!0,this.log.innerHTML="",this.banner.className="",this.banner.textContent="",this.el.style.display="block",this.deadline=performance.now()/1e3+(e.timeLimit??90),this.say(e),this.input.disabled=!1,this.input.focus()}say(e){this.push("bram",e.reply,e.mood),this.input.disabled=!1,this.open&&this.input.focus()}push(e,t,n){const i=document.createElement("div");if(i.className="cop-line "+e,i.textContent=t,this.log.appendChild(i),n){const r=document.createElement("div");r.className="cop-mood",r.textContent="«"+n+"»",this.log.appendChild(r)}this.log.scrollTop=this.log.scrollHeight}verdict(e,t){this.input.disabled=!0,this.input.blur(),this.banner.className="show "+e,this.banner.textContent=e==="release"?"LET OFF WITH A WARNING":`BOOKED — ${t} POINTS SEIZED`,setTimeout(()=>{this.el.style.display="none",this.banner.className="",this.open=!1},2600)}tick(){if(!this.open)return;const e=Math.max(0,this.deadline-performance.now()/1e3),t=Math.ceil(e);this.clock.textContent=t>=60?`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`:String(t),this.clock.style.color=e<15?"#ff7a6b":"#7c86ad"}}class qy{constructor(){this.extras={fogNear:18,fogFar:85,vignette:.03,crush:.12,dither:1,affine:0,mist:.95,assist:1},this.onExtra=()=>{},this.el=document.createElement("div"),this.el.id="debug-panel",this.el.style.display="none",document.body.appendChild(this.el);const e=mi,t=[{key:"engineForce",obj:e,min:2e3,max:16e3},{key:"brakeForce",obj:e,min:2e3,max:2e4},{key:"maxSpeed",obj:e,min:20,max:80},{key:"gripFront",obj:e,min:.4,max:3,step:.05},{key:"gripRear",obj:e,min:.4,max:3,step:.05},{key:"peakSlipFront",obj:e,min:.05,max:.4,step:.005},{key:"peakSlipRear",obj:e,min:.05,max:.4,step:.005},{key:"gripFalloff",obj:e,min:0,max:.8,step:.02},{key:"driveTraction",obj:e,min:.5,max:3,step:.05},{key:"brakeBias",obj:e,min:.3,max:.9,step:.02},{key:"yawDamping",obj:e,min:0,max:3,step:.05},{key:"handbrakeGrip",obj:e,min:.05,max:.8,step:.01},{key:"steerMaxLow",obj:e,min:.2,max:1,step:.01},{key:"steerMaxHigh",obj:e,min:.05,max:.5,step:.01},{key:"steerAttack",obj:e,min:1,max:12,step:.1},{key:"steerRelease",obj:e,min:1,max:15,step:.1},{key:"assistGain",obj:e,min:0,max:1.5,step:.02},{key:"cgHeight",obj:e,min:0,max:1,step:.02},{key:"dragCoeff",obj:e,min:0,max:2,step:.02},{key:"inertia",obj:e,min:800,max:4e3},{key:"fogNear",obj:this.extras,min:5,max:80},{key:"fogFar",obj:this.extras,min:40,max:300},{key:"vignette",obj:this.extras,min:0,max:.6,step:.02},{key:"crush",obj:this.extras,min:0,max:1,step:.02},{key:"dither",obj:this.extras,min:0,max:1,step:1},{key:"affine",obj:this.extras,min:0,max:1,step:.05},{key:"mist",obj:this.extras,min:0,max:1.5,step:.05}],n=document.createElement("div");n.className="dbg-title",n.textContent="TUNING (` to close)",this.el.appendChild(n);for(const i of t){const r=document.createElement("div");r.className="dbg-row";const o=document.createElement("label");o.textContent=i.key;const a=document.createElement("input");a.type="range",a.min=String(i.min),a.max=String(i.max),a.step=String(i.step??(i.max-i.min)/200),a.value=String(i.obj[i.key]);const c=document.createElement("span");c.textContent=this.fmt(i.obj[i.key]),a.addEventListener("input",()=>{const l=parseFloat(a.value);i.obj[i.key]=l,c.textContent=this.fmt(l),i.obj===this.extras&&(i.key==="affine"&&(Bi.uAffine.value=l),i.key==="mist"&&(Bi.uMist.value=l),this.onExtra(i.key,l))}),r.append(o,a,c),this.el.appendChild(r)}window.addEventListener("keydown",i=>{i.key==="`"&&(this.el.style.display=this.el.style.display==="none"?"block":"none")})}fmt(e){return Math.abs(e)>=100?String(Math.round(e)):e.toFixed(2)}}async function bn(s,e){const n=await(await fetch(e)).arrayBuffer();return s.decodeAudioData(n)}class Ky{constructor(){this.loops=[],this.hornBuf=null,this.brakeBuf=null,this.throttleSmooth=0,this.stopBuf=null,this.stopSrc=null,this.stopGain=null,this.copSfx={open:null,happy:null,annoyed:null},this.interrogating=!1,this.radioBuf=null,this.staticBuf=null,this.radioSrc=null,this.radioGain=null,this.radioStartedAt=0,this.radioOn=!0,this.ready=!1,this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.8;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-12,e.ratio.value=6,this.master.connect(e),e.connect(this.ctx.destination),this.vehicleBus=this.ctx.createGain(),this.vehicleBus.gain.value=.9,this.vehicleBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master)}async init(){const e=this.ctx;await e.resume(),Promise.all([bn(e,"/assets/audio/radio.mp3"),bn(e,"/assets/audio/radio-static.mp3")]).then(([m,w])=>{this.radioBuf=m,this.staticBuf=w,this.radioStartedAt=e.currentTime,this.radioOn&&this.tuneIn()});const[t,n,i]=await Promise.all([bn(e,"/assets/audio/car/Car_Engine_Loop.ogg"),bn(e,"/assets/audio/car/Car_Engine_Loop_2.ogg"),bn(e,"/assets/audio/car/Car2_Engine_Loop.ogg")]),r=e.createWaveShaper(),o=new Float32Array(256);for(let m=0;m<256;m++){const w=m/255*2-1;o[m]=Math.tanh(w*1.8)}r.curve=o,this.onGain=e.createGain(),this.onGain.gain.value=0,this.onGain.connect(r),r.connect(this.vehicleBus);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=900,this.offGain=e.createGain(),this.offGain.gain.value=1,this.offGain.connect(a),a.connect(this.vehicleBus);const c=[[t,1700],[n,3300],[i,5600]];for(const[m,w]of c){const M=e.createBufferSource();M.buffer=m,M.loop=!0;const E=e.createGain();E.gain.value=0,M.connect(E),E.connect(this.onGain),E.connect(this.offGain),M.start(),this.loops.push({src:M,gain:E,nativeRpm:w})}this.sub=e.createOscillator(),this.sub.type="triangle";const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=220,this.subGain=e.createGain(),this.subGain.gain.value=.12,this.sub.connect(l),l.connect(this.subGain),this.subGain.connect(this.vehicleBus),this.sub.start();const u=e.createBuffer(1,e.sampleRate*1.5,e.sampleRate),h=u.getChannelData(0);let f=0;for(let m=0;m<h.length;m++){const w=Math.random()*2-1;f+=(w-f)*.25,h[m]=f*2.2}const d=e.createBufferSource();d.buffer=u,d.loop=!0,this.screechFilter=e.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.value=2300,this.screechFilter.Q.value=5,this.screech=e.createGain(),this.screech.gain.value=0,d.connect(this.screechFilter),this.screechFilter.connect(this.screech),this.screech.connect(this.vehicleBus),d.start(),this.siren=e.createOscillator(),this.siren.type="sawtooth",this.siren.frequency.value=620,this.sirenLfo=e.createOscillator(),this.sirenLfo.type="sine",this.sirenLfo.frequency.value=.45;const _=e.createGain();_.gain.value=175,this.sirenLfo.connect(_),_.connect(this.siren.frequency);const v=e.createBiquadFilter();v.type="bandpass",v.frequency.value=800,v.Q.value=1.4,this.sirenGain=e.createGain(),this.sirenGain.gain.value=0,this.siren.connect(v),v.connect(this.sirenGain),this.sirenGain.connect(this.vehicleBus),this.siren.start(),this.sirenLfo.start();const g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=260,this.rumble=e.createGain(),this.rumble.gain.value=0,d.connect(g),g.connect(this.rumble),this.rumble.connect(this.vehicleBus),bn(e,"/assets/audio/background-loop.mp3").then(m=>this.stopBuf=m),bn(e,"/assets/audio/cop-first-message.mp3").then(m=>this.copSfx.open=m),bn(e,"/assets/audio/cop-happy.mp3").then(m=>this.copSfx.happy=m),bn(e,"/assets/audio/cop-annoyed.mp3").then(m=>this.copSfx.annoyed=m),bn(e,"/assets/audio/car/Car_Horn.ogg").then(m=>this.hornBuf=m),bn(e,"/assets/audio/car/Car_Parking_Brake.ogg").then(m=>this.brakeBuf=m),this.ready=!0}playOneShot(e,t=1,n=1){if(!e)return;const i=this.ctx.createBufferSource();i.buffer=e,i.playbackRate.value=n;const r=this.ctx.createGain();r.gain.value=t,i.connect(r),r.connect(this.vehicleBus),i.start()}horn(e=1){this.playOneShot(this.hornBuf,.42*e)}toggleRadio(){this.radioOn=!this.radioOn,this.radioBuf&&(this.radioOn?this.tuneIn():this.tuneOut())}playStatic(e){if(!this.staticBuf)return;const t=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.staticBuf,n.loop=!0;const i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(1.1,t+.06),i.gain.setValueAtTime(1.1,t+Math.max(.07,e-.15)),i.gain.exponentialRampToValueAtTime(1e-4,t+e),n.connect(i),i.connect(this.musicBus),n.start(t),n.stop(t+e+.05)}tuneIn(){if(!this.radioBuf)return;const e=this.ctx.currentTime;this.playStatic(.85);const t=this.ctx.createBufferSource();t.buffer=this.radioBuf,t.loop=!0;const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,e+.55),n.gain.exponentialRampToValueAtTime(1,e+1),t.connect(n),n.connect(this.musicBus);const i=Math.max(0,(e-this.radioStartedAt)%this.radioBuf.duration);t.start(e+.55,i),this.radioSrc=t,this.radioGain=n}tuneOut(){const e=this.ctx.currentTime;this.playStatic(.7),this.radioSrc&&this.radioGain&&(this.radioGain.gain.setTargetAtTime(1e-4,e,.05),this.radioSrc.stop(e+.35),this.radioSrc=null,this.radioGain=null)}handbrakePull(){this.playOneShot(this.brakeBuf,.5)}updateSiren(e,t){if(!this.ready)return;const n=Math.max(0,1-t/90),i=e?.035+n*n*.16:0;this.sirenGain.gain.setTargetAtTime(i,this.ctx.currentTime,.25)}setInterrogation(e){if(!this.ready||this.interrogating===e)return;this.interrogating=e;const t=this.ctx.currentTime;if(this.vehicleBus.gain.setTargetAtTime(e?0:.9,t,.25),this.musicBus.gain.setTargetAtTime(e?0:.16,t,.25),e){if(this.radioSrc&&this.radioGain&&(this.radioGain.gain.setTargetAtTime(1e-4,t,.2),this.radioSrc.stop(t+.6),this.radioSrc=null,this.radioGain=null),this.stopBuf&&!this.stopSrc){const n=this.ctx.createBufferSource();n.buffer=this.stopBuf,n.loop=!0;const i=this.ctx.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(1.7,t+1.2),n.connect(i),i.connect(this.master),n.start(t),this.stopSrc=n,this.stopGain=i}}else this.stopSrc&&this.stopGain&&(this.stopGain.gain.setTargetAtTime(1e-4,t,.3),this.stopSrc.stop(t+1.2),this.stopSrc=null,this.stopGain=null),this.radioOn&&this.tuneIn()}copSting(e){if(!this.ready)return;const t=this.copSfx[e];if(!t)return;const n=this.ctx.createBufferSource();n.buffer=t;const i=this.ctx.createGain();i.gain.value=3.4,n.connect(i),i.connect(this.master),n.start()}sirenChirp(){if(!this.ready)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(380,e),t.frequency.exponentialRampToValueAtTime(1050,e+.35);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.22,e+.05),n.gain.exponentialRampToValueAtTime(1e-4,e+.45),t.connect(n),n.connect(this.vehicleBus),t.start(e),t.stop(e+.5)}crash(e){const t=this.ctx,i=t.createBuffer(1,t.sampleRate*.25,t.sampleRate),r=i.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/r.length,2);const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=700+e*300;const c=t.createGain();c.gain.value=Math.min(.9,.25+e*.1),o.connect(a),a.connect(c),c.connect(this.vehicleBus),o.start()}update(e,t,n,i){if(!this.ready)return;const r=this.ctx.currentTime,o=e.rpm;for(const d of this.loops)d.src.playbackRate.setTargetAtTime(o/d.nativeRpm*.8,r,.03);if(this.loops.length===3){const[d,_,v]=this.loops,g=Math.max(0,Math.min(1,(o-d.nativeRpm)/(_.nativeRpm-d.nativeRpm))),m=Math.max(0,Math.min(1,(o-_.nativeRpm)/(v.nativeRpm-_.nativeRpm)));d.gain.gain.setTargetAtTime(Math.cos(g*Math.PI*.5)*.28,r,.05),_.gain.gain.setTargetAtTime(Math.sin(g*Math.PI*.5)*Math.cos(m*Math.PI*.5)*.31,r,.05),v.gain.gain.setTargetAtTime(Math.sin(m*Math.PI*.5)*.31,r,.05)}this.throttleSmooth+=(t-this.throttleSmooth)*Math.min(1,i/.12),this.onGain.gain.setTargetAtTime(this.throttleSmooth,r,.05),this.offGain.gain.setTargetAtTime(1-this.throttleSmooth*.8,r,.05),this.sub.frequency.setTargetAtTime(o/60*2*.8,r,.03),this.subGain.gain.setTargetAtTime(.12+this.throttleSmooth*.09,r,.05);const a=[e.surfFL,e.surfFR,e.surfRL,e.surfRR],c=a.filter(d=>d==="asphalt"||d==="curb").length>=2,l=Math.max(Math.abs(e.slipRear)-mi.peakSlipRear,0),u=Math.abs(e.speed),h=c&&u>4?Math.min(.5,l*2.2)*Math.min(1,u/12):0;this.screech.gain.setTargetAtTime(h*(n?1:.7),r,.04),this.screechFilter.frequency.setTargetAtTime(2100+Math.abs(e.slipAngle)*900,r,.05);const f=a.filter(d=>d==="offroad").length+a.filter(d=>d==="dirt").length*.6;this.rumble.gain.setTargetAtTime(f>0?Math.min(.4,u/25*(f/4)):0,r,.06),this.musicBus.gain.setTargetAtTime(n?.11:.16,r,.6)}}function jc(s=0,e=0,t=0){return{x:s,z:e,yaw:t,vx:0,vz:0,yawRate:0,gear:0,rpm:900,shiftCut:0,slipAngle:0,slipFront:0,slipRear:0,wheelspin:0,speed:0,aLongSmooth:0,surfFL:"asphalt",surfFR:"asphalt",surfRL:"asphalt",surfRR:"asphalt",wallHit:0}}const Bt=(s,e,t)=>s<e?e:s>t?t:s;function fu(s,e,t){const n=s/e,i=Math.abs(n);if(i<=1)return n*(1.5-.5*i*i);const r=1-t*Bt((i-1)/1.6,0,1);return Math.sign(n)*r}function du(s,e){const t=Bo[s],n=Bo[e];return{lateral:(t.lateral+n.lateral)/2,longitudinal:(t.longitudinal+n.longitudinal)/2,drag:(t.drag+n.drag)/2,peakScale:(t.peakScale+n.peakScale)/2}}function pu(s,e,t,n,i,r,o){const a=Bo[r],c=Bo[o],l=fu(s,e*a.peakScale,Bt(t*a.falloffScale,0,.92))*n*(i/2)*a.lateral,u=fu(s,e*c.peakScale,Bt(t*c.falloffScale,0,.92))*n*(i/2)*c.lateral;return-(l+u)}function bf(s,e,t,n,i,r,o){const a=Math.sin(s.yaw),c=Math.cos(s.yaw);let l=s.vx*a+s.vz*c,u=s.vx*c-s.vz*a;const h=Math.max(Math.abs(l),.5),f=Math.atan2(u,h),d=t.cgToFront,_=t.cgToRear,v=.8,g=a,m=c,w=c,M=-a;s.surfFL=i(s.x+g*d-w*v,s.z+m*d-M*v),s.surfFR=i(s.x+g*d+w*v,s.z+m*d+M*v),s.surfRL=i(s.x-g*_-w*v,s.z-m*_-M*v),s.surfRR=i(s.x-g*_+w*v,s.z-m*_+M*v);const E=du(s.surfFL,s.surfFR),D=du(s.surfRL,s.surfRR),P=1-Bt(Math.abs(l)/t.maxSpeed,0,1),k=1+Bt(Math.abs(f)/.35,0,1)*t.counterSteerBoost,R=(t.steerMaxHigh+(t.steerMaxLow-t.steerMaxHigh)*P*P*P)*k,A=e.steer*R,S=d+_,L=9.81,B=t.mass*s.aLongSmooth*t.cgHeight/S,W=Math.max(t.mass*L*_/S-B,t.mass*L*.08),$=Math.max(t.mass*L*d/S+B,t.mass*L*.08),X=Math.atan2(u+s.yawRate*d,h)-A*Math.sign(l>=0?1:-1),K=Math.atan2(u-s.yawRate*_,h);s.slipFront=X,s.slipRear=K,s.slipAngle=Math.atan2(u,h);const H=t.gearRatios[s.gear]*t.finalDrive,J=t.gearRatios[t.gearRatios.length-1]*t.finalDrive,se=Bt(H/J,1,2.2)*.62;let Ae=(s.shiftCut>0?0:e.throttle)*t.engineForce*se*D.longitudinal;e.handbrake&&(Ae*=1-t.handbrakeDriveCut);const Q=l/t.maxSpeed;Ae*=Bt(1-Q*Q*Q,0,1)*1.05;let te=0;e.brake>0&&(l>.5?te=-e.brake*t.brakeForce:te=-e.brake*t.reverseForce*Bt(1+l/14,0,1));const he=Math.max($*t.driveTraction*D.longitudinal,1),Se=Math.abs(Ae);s.wheelspin=Bt(Se/he-1,0,1),Se>he&&(Ae=Math.sign(Ae)*he);const we=-l*t.driftScrub*Bt(Math.abs(s.slipAngle)/.4,0,1),Ve=-t.dragCoeff*l*Math.abs(l)-t.rollingResist*l*((E.drag+D.drag)/2)+we;let We=0;if(o){const Ee=o(s.x+g*d,s.z+m*d),ke=o(s.x-g*_,s.z-m*_);We=-(Ee-ke)/(d+_)*t.mass*L}const qe=Ae+te*((E.longitudinal+D.longitudinal)/2)+Ve+We,ht=e.handbrake?t.handbrakeGrip:1,F=Bt((Se+Math.abs(te)*(1-t.brakeBias))/he,0,1),Xe=Math.max(Math.sqrt(1-F*F),.22),tt=Math.max(W*t.driveTraction*E.longitudinal,1),lt=Bt(Math.abs(te)*t.brakeBias/tt,0,1),Oe=Math.max(Math.sqrt(1-lt*lt),.35),ut=pu(X,t.peakSlipFront,t.gripFalloff,t.gripFront,W,s.surfFL,s.surfFR)*Oe,Be=pu(K,t.peakSlipRear,t.gripFalloff,t.gripRear,$,s.surfRL,s.surfRR)*ht*Xe,Ge=(qe-ut*Math.sin(A))/t.mass+u*s.yawRate,U=(ut*Math.cos(A)+Be)/t.mass-l*s.yawRate;s.aLongSmooth+=(qe/t.mass-s.aLongSmooth)*Bt(n*9,0,1),l+=Ge*n,u+=U*n;const b=ut*Math.cos(A)*d-Be*_;s.yawRate+=b/t.inertia*n;const Z=Bt(1-Math.abs(l)/t.kinematicBlendSpeed,0,1);if(Z>0){const Ee=l/S*Math.tan(A);s.yawRate=s.yawRate*(1-Z)+Ee*Z,u*=1-Z*Bt(n*20,0,1)}e.handbrake&&Math.abs(l)>6&&(s.yawRate+=e.steer*t.handbrakeKick*Math.min(1,Math.abs(l)/15)*n*Math.sign(l)),s.yawRate*=1-Bt(n*t.yawDamping,0,1);const de=Math.atan2(u,Math.max(Math.abs(l),.5));Math.abs(de)<Math.abs(s.slipAngle)&&Math.abs(s.slipAngle)>.08&&(s.yawRate*=1-Bt(n*t.driftRecoverDamping,0,1)),s.yaw+=s.yawRate*n;const pe=Math.sin(s.yaw),le=Math.cos(s.yaw);s.vx=l*pe+u*le,s.vz=l*le-u*pe,s.x+=s.vx*n,s.z+=s.vz*n,s.speed=l,s.shiftCut>0&&(s.shiftCut-=n);const Fe=Math.abs(l)/(2*Math.PI*.31)*60,ye=Math.max(t.idleRpm,Fe*H);let Ce=ye;e.throttle>.4&&(e.handbrake||s.wheelspin>.05||Math.abs(K)>t.peakSlipRear*2.2)&&(Ce=Math.max(Ce,t.maxRpm*(.65+.3*e.throttle))),s.rpm+=(Math.min(Ce,t.maxRpm)-s.rpm)*Bt(n*8,0,1),s.gear<t.gearRatios.length-1&&ye>t.shiftUpRpm&&e.throttle>.2&&!e.handbrake?(s.gear++,s.shiftCut=t.shiftCutTime):s.gear>0&&ye<t.shiftDownRpm&&s.gear--,s.wallHit=0;const me=1;for(const Ee of[{px:s.x+g*(d*.8),pz:s.z+m*(d*.8)},{px:s.x-g*(_*.8),pz:s.z-m*(_*.8)}])for(const ke of r){const $e=Bt(Ee.px,ke.minX,ke.maxX),Y=Bt(Ee.pz,ke.minZ,ke.maxZ),ae=Ee.px-$e,Pe=Ee.pz-Y,Ke=ae*ae+Pe*Pe;if(Ke>=me*me)continue;const V=Math.sqrt(Math.max(Ke,1e-6));let ue=ae/V,ie=Pe/V;Ke<1e-6&&(ue=-g,ie=-m);const oe=me-V;s.x+=ue*oe,s.z+=ie*oe;const _e=s.vx*ue+s.vz*ie;if(_e<0){const ze=ke.soft?.45:1,Qe=-(1+(ke.soft?.05:Math.min(.6,.25+Math.abs(_e)*.01)))*_e*ze;s.vx+=ue*Qe,s.vz+=ie*Qe;const pt=-ie,yt=ue,it=s.vx*pt+s.vz*yt;s.vx-=pt*it*(ke.soft?.12:.25),s.vz-=yt*it*(ke.soft?.12:.25),s.yawRate*=ke.soft?.9:.7,s.wallHit=Math.max(s.wallHit,Math.abs(_e)*(ke.soft?.3:1))}}}const Yy=1.15,mo=1.1;function mu(s){const e=Math.sin(s.yaw),t=Math.cos(s.yaw);return[{x:s.x+e*mo,z:s.z+t*mo},{x:s.x-e*mo,z:s.z-t*mo}]}function Zy(s,e){let t=0;const n=Yy*2;for(const i of mu(s))for(const r of mu(e)){const o=i.x-r.x,a=i.z-r.z,c=o*o+a*a;if(c>=n*n||c<1e-9)continue;const l=Math.sqrt(c),u=o/l,h=a/l;s.x+=u*(n-l),s.z+=h*(n-l);const f=(s.vx-e.vx)*u+(s.vz-e.vz)*h;if(f<0){const d=-1.3*f;s.vx+=u*d,s.vz+=h*d,s.yawRate*=.85,t=Math.max(t,-f),s.wallHit=Math.max(s.wallHit,-f*.6)}}return t}function qc(s,e){e.x=s.x,e.z=s.z,e.yaw=s.yaw,e.vx=s.vx,e.vz=s.vz,e.yawRate=s.yawRate,e.gear=s.gear,e.rpm=s.rpm,e.shiftCut=s.shiftCut,e.slipAngle=s.slipAngle,e.slipFront=s.slipFront,e.slipRear=s.slipRear,e.wheelspin=s.wheelspin,e.speed=s.speed,e.aLongSmooth=s.aLongSmooth,e.surfFL=s.surfFL,e.surfFR=s.surfFR,e.surfRL=s.surfRL,e.surfRR=s.surfRR,e.wallHit=s.wallHit}class Jy{constructor(){this.steer=0,this.throttle=0,this.assist="full"}shapeThrottle(e,t,n){const i=e?1:0,r=(e?t.throttleAttack:t.throttleRelease)*n;return this.throttle+=Math.sign(i-this.throttle)*Math.min(r,Math.abs(i-this.throttle)),this.throttle}update(e,t,n,i){const r=(e.left?1:0)-(e.right?1:0);if(r!==0){const a=n.steerAttack*i;this.steer+=Math.sign(r-this.steer)*Math.min(a,Math.abs(r-this.steer))}else{const a=n.steerRelease*i;this.steer+=Math.sign(-this.steer)*Math.min(a,Math.abs(this.steer))}let o=this.steer;if(this.assist!=="off"){const a=(this.assist==="full"?1:.5)*n.assistGain;if(Math.abs(t.slipAngle)>.12&&Math.abs(t.speed)>5){const l=n.steerMaxLow,u=-t.slipAngle*a,h=Math.max(-1,Math.min(1,u/l));o=Math.max(-1,Math.min(1,this.steer+h))}}return o}}function Qy(){return{total:0,chain:0,multiplier:1,drifting:!1,offroadTime:0,graceTime:0,banked:0,event:"none"}}const eM=.22,tM=7,nM=1.2,iM=3;function sM(s,e,t){s.event="none";const n=Math.abs(e.slipAngle),i=Math.abs(e.speed),r=n>eM&&i>tM,o=[e.surfFL,e.surfFR,e.surfRL,e.surfRR].filter(l=>l==="offroad").length,a=o>0;if(o===4?s.offroadTime+=t:s.offroadTime=0,e.wallHit>iM&&s.chain>0){s.chain=0,s.multiplier=1,s.drifting=!1,s.event="crashed";return}r?(s.drifting=!0,s.graceTime=0,a||(s.chain+=n*i*t*14*s.multiplier,s.multiplier=Math.min(s.multiplier+t*.12,4)),s.offroadTime>1.5&&(s.banked=Math.floor(s.chain*.5),s.total+=s.banked,s.chain=0,s.multiplier=1,s.drifting=!1,s.event="banked")):(s.drifting||s.chain>0)&&(s.graceTime+=t,s.graceTime>nM&&(s.chain>1&&(s.banked=Math.floor(s.chain),s.total+=s.banked,s.event="banked"),s.chain=0,s.multiplier=1,s.drifting=!1))}var It=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rM(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}var Rf={};ArrayBuffer.isView||(ArrayBuffer.isView=s=>s!==null&&typeof s=="object"&&s.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);var Bs={},ea={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.ServerError=s.CloseCode=void 0,function(t){t[t.CONSENTED=4e3]="CONSENTED",t[t.DEVMODE_RESTART=4010]="DEVMODE_RESTART"}(s.CloseCode||(s.CloseCode={}));class e extends Error{constructor(n,i){super(i),this.name="ServerError",this.code=n}}s.ServerError=e})(ea);var Tr={},zs={};Object.defineProperty(zs,"__esModule",{value:!0});zs.decode=zs.encode=void 0;function $s(s,e){if(this._offset=e,s instanceof ArrayBuffer)this._buffer=s,this._view=new DataView(this._buffer);else if(ArrayBuffer.isView(s))this._buffer=s.buffer,this._view=new DataView(this._buffer,s.byteOffset,s.byteLength);else throw new Error("Invalid argument")}function oM(s,e,t){for(var n="",i=0,r=e,o=e+t;r<o;r++){var a=s.getUint8(r);if(!(a&128)){n+=String.fromCharCode(a);continue}if((a&224)===192){n+=String.fromCharCode((a&31)<<6|s.getUint8(++r)&63);continue}if((a&240)===224){n+=String.fromCharCode((a&15)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0);continue}if((a&248)===240){i=(a&7)<<18|(s.getUint8(++r)&63)<<12|(s.getUint8(++r)&63)<<6|(s.getUint8(++r)&63)<<0,i>=65536?(i-=65536,n+=String.fromCharCode((i>>>10)+55296,(i&1023)+56320)):n+=String.fromCharCode(i);continue}throw new Error("Invalid byte "+a.toString(16))}return n}$s.prototype._array=function(s){for(var e=new Array(s),t=0;t<s;t++)e[t]=this._parse();return e};$s.prototype._map=function(s){for(var e="",t={},n=0;n<s;n++)e=this._parse(),t[e]=this._parse();return t};$s.prototype._str=function(s){var e=oM(this._view,this._offset,s);return this._offset+=s,e};$s.prototype._bin=function(s){var e=this._buffer.slice(this._offset,this._offset+s);return this._offset+=s,e};$s.prototype._parse=function(){var s=this._view.getUint8(this._offset++),e,t=0,n=0,i=0,r=0;if(s<192)return s<128?s:s<144?this._map(s&15):s<160?this._array(s&15):this._str(s&31);if(s>223)return(255-s+1)*-1;switch(s){case 192:return null;case 194:return!1;case 195:return!0;case 196:return t=this._view.getUint8(this._offset),this._offset+=1,this._bin(t);case 197:return t=this._view.getUint16(this._offset),this._offset+=2,this._bin(t);case 198:return t=this._view.getUint32(this._offset),this._offset+=4,this._bin(t);case 199:if(t=this._view.getUint8(this._offset),n=this._view.getInt8(this._offset+1),this._offset+=2,n===-1){var o=this._view.getUint32(this._offset);return i=this._view.getInt32(this._offset+4),r=this._view.getUint32(this._offset+8),this._offset+=12,new Date((i*4294967296+r)*1e3+o/1e6)}return[n,this._bin(t)];case 200:return t=this._view.getUint16(this._offset),n=this._view.getInt8(this._offset+2),this._offset+=3,[n,this._bin(t)];case 201:return t=this._view.getUint32(this._offset),n=this._view.getInt8(this._offset+4),this._offset+=5,[n,this._bin(t)];case 202:return e=this._view.getFloat32(this._offset),this._offset+=4,e;case 203:return e=this._view.getFloat64(this._offset),this._offset+=8,e;case 204:return e=this._view.getUint8(this._offset),this._offset+=1,e;case 205:return e=this._view.getUint16(this._offset),this._offset+=2,e;case 206:return e=this._view.getUint32(this._offset),this._offset+=4,e;case 207:return i=this._view.getUint32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 208:return e=this._view.getInt8(this._offset),this._offset+=1,e;case 209:return e=this._view.getInt16(this._offset),this._offset+=2,e;case 210:return e=this._view.getInt32(this._offset),this._offset+=4,e;case 211:return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,i+r;case 212:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0){this._offset+=1;return}return[n,this._bin(1)];case 213:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(2)];case 214:return n=this._view.getInt8(this._offset),this._offset+=1,n===-1?(e=this._view.getUint32(this._offset),this._offset+=4,new Date(e*1e3)):[n,this._bin(4)];case 215:if(n=this._view.getInt8(this._offset),this._offset+=1,n===0)return i=this._view.getInt32(this._offset)*Math.pow(2,32),r=this._view.getUint32(this._offset+4),this._offset+=8,new Date(i+r);if(n===-1){i=this._view.getUint32(this._offset),r=this._view.getUint32(this._offset+4),this._offset+=8;var a=(i&3)*4294967296+r;return new Date(a*1e3+(i>>>2)/1e6)}return[n,this._bin(8)];case 216:return n=this._view.getInt8(this._offset),this._offset+=1,[n,this._bin(16)];case 217:return t=this._view.getUint8(this._offset),this._offset+=1,this._str(t);case 218:return t=this._view.getUint16(this._offset),this._offset+=2,this._str(t);case 219:return t=this._view.getUint32(this._offset),this._offset+=4,this._str(t);case 220:return t=this._view.getUint16(this._offset),this._offset+=2,this._array(t);case 221:return t=this._view.getUint32(this._offset),this._offset+=4,this._array(t);case 222:return t=this._view.getUint16(this._offset),this._offset+=2,this._map(t);case 223:return t=this._view.getUint32(this._offset),this._offset+=4,this._map(t)}throw new Error("Could not parse")};function aM(s,e=0){var t=new $s(s,e),n=t._parse();if(t._offset!==s.byteLength)throw new Error(s.byteLength-t._offset+" trailing bytes");return n}zs.decode=aM;var cM=4294967296-1,lM=17179869184-1;function hM(s,e,t){for(var n=0,i=0,r=t.length;i<r;i++)n=t.charCodeAt(i),n<128?s.setUint8(e++,n):n<2048?(s.setUint8(e++,192|n>>6),s.setUint8(e++,128|n&63)):n<55296||n>=57344?(s.setUint8(e++,224|n>>12),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63)):(i++,n=65536+((n&1023)<<10|t.charCodeAt(i)&1023),s.setUint8(e++,240|n>>18),s.setUint8(e++,128|n>>12&63),s.setUint8(e++,128|n>>6&63),s.setUint8(e++,128|n&63))}function uM(s){for(var e=0,t=0,n=0,i=s.length;n<i;n++)e=s.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function vs(s,e,t){var n=typeof t,i=0,r=0,o=0,a=0,c=0,l=0;if(n==="string"){if(c=uM(t),c<32)s.push(c|160),l=1;else if(c<256)s.push(217,c),l=2;else if(c<65536)s.push(218,c>>8,c),l=3;else if(c<4294967296)s.push(219,c>>24,c>>16,c>>8,c),l=5;else throw new Error("String too long");return e.push({_str:t,_length:c,_offset:s.length}),l+c}if(n==="number")return Math.floor(t)!==t||!isFinite(t)?(s.push(203),e.push({_float:t,_length:8,_offset:s.length}),9):t>=0?t<128?(s.push(t),1):t<256?(s.push(204,t),2):t<65536?(s.push(205,t>>8,t),3):t<4294967296?(s.push(206,t>>24,t>>16,t>>8,t),5):(o=t/Math.pow(2,32)>>0,a=t>>>0,s.push(207,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9):t>=-32?(s.push(t),1):t>=-128?(s.push(208,t),2):t>=-32768?(s.push(209,t>>8,t),3):t>=-2147483648?(s.push(210,t>>24,t>>16,t>>8,t),5):(o=Math.floor(t/Math.pow(2,32)),a=t>>>0,s.push(211,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),9);if(n==="object"){if(t===null)return s.push(192),1;if(Array.isArray(t)){if(c=t.length,c<16)s.push(c|144),l=1;else if(c<65536)s.push(220,c>>8,c),l=3;else if(c<4294967296)s.push(221,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Array too large");for(i=0;i<c;i++)l+=vs(s,e,t[i]);return l}if(t instanceof Date){var u=t.getTime(),h=Math.floor(u/1e3),f=(u-h*1e3)*1e6;return h>=0&&f>=0&&h<=lM?f===0&&h<=cM?(s.push(214,255,h>>24,h>>16,h>>8,h),6):(o=h/4294967296,a=h&4294967295,s.push(215,255,f>>22,f>>14,f>>6,o,a>>24,a>>16,a>>8,a),10):(o=Math.floor(h/4294967296),a=h>>>0,s.push(199,12,255,f>>24,f>>16,f>>8,f,o>>24,o>>16,o>>8,o,a>>24,a>>16,a>>8,a),15)}if(t instanceof ArrayBuffer){if(c=t.byteLength,c<256)s.push(196,c),l=2;else if(c<65536)s.push(197,c>>8,c),l=3;else if(c<4294967296)s.push(198,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Buffer too large");return e.push({_bin:t,_length:c,_offset:s.length}),l+c}if(typeof t.toJSON=="function")return vs(s,e,t.toJSON());var d=[],_="",v=Object.keys(t);for(i=0,r=v.length;i<r;i++)_=v[i],t[_]!==void 0&&typeof t[_]!="function"&&d.push(_);if(c=d.length,c<16)s.push(c|128),l=1;else if(c<65536)s.push(222,c>>8,c),l=3;else if(c<4294967296)s.push(223,c>>24,c>>16,c>>8,c),l=5;else throw new Error("Object too large");for(i=0;i<c;i++)_=d[i],l+=vs(s,e,_),l+=vs(s,e,t[_]);return l}if(n==="boolean")return s.push(t?195:194),1;if(n==="undefined")return s.push(192),1;if(typeof t.toJSON=="function")return vs(s,e,t.toJSON());throw new Error("Could not encode")}function fM(s){var e=[],t=[],n=vs(e,t,s),i=new ArrayBuffer(n),r=new DataView(i),o=0,a=0,c=-1;t.length>0&&(c=t[0]._offset);for(var l,u=0,h=0,f=0,d=e.length;f<d;f++)if(r.setUint8(a+f,e[f]),f+1===c){if(l=t[o],u=l._length,h=a+c,l._bin)for(var _=new Uint8Array(l._bin),v=0;v<u;v++)r.setUint8(h+v,_[v]);else l._str?hM(r,h,l._str):l._float!==void 0&&r.setFloat64(h,l._float);o++,a+=u,t[o]&&(c=t[o]._offset)}return i}zs.encode=fM;var ta={},na={},dM=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")},pM=It&&It.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(na,"__esModule",{value:!0});na.WebSocketTransport=void 0;const mM=pM(dM),ec=globalThis.WebSocket||mM.default;class gM{constructor(e){this.events=e}send(e){e instanceof ArrayBuffer?this.ws.send(e):Array.isArray(e)&&this.ws.send(new Uint8Array(e).buffer)}connect(e,t){try{this.ws=new ec(e,{headers:t,protocols:this.protocols})}catch{this.ws=new ec(e,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(e,t){this.ws.close(e,t)}get isOpen(){return this.ws.readyState===ec.OPEN}}na.WebSocketTransport=gM;Object.defineProperty(ta,"__esModule",{value:!0});ta.Connection=void 0;const _M=na;class vM{constructor(){this.events={},this.transport=new _M.WebSocketTransport(this.events)}send(e){this.transport.send(e)}connect(e,t){this.transport.connect(e,t)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}ta.Connection=vM;var wl={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.utf8Length=s.utf8Read=s.ErrorCode=s.Protocol=void 0,function(n){n[n.HANDSHAKE=9]="HANDSHAKE",n[n.JOIN_ROOM=10]="JOIN_ROOM",n[n.ERROR=11]="ERROR",n[n.LEAVE_ROOM=12]="LEAVE_ROOM",n[n.ROOM_DATA=13]="ROOM_DATA",n[n.ROOM_STATE=14]="ROOM_STATE",n[n.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",n[n.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",n[n.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"}(s.Protocol||(s.Protocol={})),function(n){n[n.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",n[n.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",n[n.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",n[n.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",n[n.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",n[n.AUTH_FAILED=4215]="AUTH_FAILED",n[n.APPLICATION_ERROR=4216]="APPLICATION_ERROR"}(s.ErrorCode||(s.ErrorCode={}));function e(n,i){const r=n[i++];for(var o="",a=0,c=i,l=i+r;c<l;c++){var u=n[c];if(!(u&128)){o+=String.fromCharCode(u);continue}if((u&224)===192){o+=String.fromCharCode((u&31)<<6|n[++c]&63);continue}if((u&240)===224){o+=String.fromCharCode((u&15)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0);continue}if((u&248)===240){a=(u&7)<<18|(n[++c]&63)<<12|(n[++c]&63)<<6|(n[++c]&63)<<0,a>=65536?(a-=65536,o+=String.fromCharCode((a>>>10)+55296,(a&1023)+56320)):o+=String.fromCharCode(a);continue}throw new Error("Invalid byte "+u.toString(16))}return o}s.utf8Read=e;function t(n=""){let i=0,r=0;for(let o=0,a=n.length;o<a;o++)i=n.charCodeAt(o),i<128?r+=1:i<2048?r+=2:i<55296||i>=57344?r+=3:(o++,r+=4);return r+1}s.utf8Length=t})(wl);var $i={};Object.defineProperty($i,"__esModule",{value:!0});$i.getSerializer=$i.registerSerializer=void 0;const Cf={};function xM(s,e){Cf[s]=e}$i.registerSerializer=xM;function yM(s){const e=Cf[s];if(!e)throw new Error("missing serializer: "+s);return e}$i.getSerializer=yM;var br={};Object.defineProperty(br,"__esModule",{value:!0});br.createNanoEvents=void 0;const MM=()=>({emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n](...e)},events:{},on(s,e){var t;return!((t=this.events[s])===null||t===void 0)&&t.push(e)||(this.events[s]=[e]),()=>{var n;this.events[s]=(n=this.events[s])===null||n===void 0?void 0:n.filter(i=>e!==i)}}});br.createNanoEvents=MM;var ks={};Object.defineProperty(ks,"__esModule",{value:!0});ks.createSignal=ks.EventEmitter=void 0;class Pf{constructor(){this.handlers=[]}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){this.handlers.forEach(t=>t.apply(this,e))}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){const t=this.handlers.indexOf(e);this.handlers[t]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}ks.EventEmitter=Pf;function SM(){const s=new Pf;function e(t){return s.register(t,this===null)}return e.once=t=>{const n=function(...i){t.apply(this,i),s.remove(n)};s.register(n)},e.remove=t=>s.remove(t),e.invoke=(...t)=>s.invoke(...t),e.invokeAsync=(...t)=>s.invokeAsync(...t),e.clear=()=>s.clear(),e}ks.createSignal=SM;var Kc={exports:{}};(function(s,e){(function(t,n){n(e)})(It,function(t){var n=function(x,p){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,C){y.__proto__=C}||function(y,C){for(var q in C)Object.prototype.hasOwnProperty.call(C,q)&&(y[q]=C[q])},n(x,p)};function i(x,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");n(x,p);function y(){this.constructor=x}x.prototype=p===null?Object.create(p):(y.prototype=p.prototype,new y)}function r(x,p,y,C){var q=arguments.length,re=q<3?p:C,ve;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")re=Reflect.decorate(x,p,y,C);else for(var Re=x.length-1;Re>=0;Re--)(ve=x[Re])&&(re=(q<3?ve(re):q>3?ve(p,y,re):ve(p,y))||re);return q>3&&re&&Object.defineProperty(p,y,re),re}function o(x,p,y){if(arguments.length===2)for(var C=0,q=p.length,re;C<q;C++)(re||!(C in p))&&(re||(re=Array.prototype.slice.call(p,0,C)),re[C]=p[C]);return x.concat(re||Array.prototype.slice.call(p))}typeof SuppressedError=="function"&&SuppressedError;var a=255,c=213;t.OPERATION=void 0,function(x){x[x.ADD=128]="ADD",x[x.REPLACE=0]="REPLACE",x[x.DELETE=64]="DELETE",x[x.DELETE_AND_ADD=192]="DELETE_AND_ADD",x[x.TOUCH=1]="TOUCH",x[x.CLEAR=10]="CLEAR"}(t.OPERATION||(t.OPERATION={}));var l=function(){function x(p,y,C){this.changed=!1,this.changes=new Map,this.allChanges=new Set,this.caches={},this.currentCustomOperation=0,this.ref=p,this.setParent(y,C)}return x.prototype.setParent=function(p,y,C){var q=this;if(this.indexes||(this.indexes=this.ref instanceof wt?this.ref._definition.indexes:{}),this.parent=p,this.parentIndex=C,!!y)if(this.root=y,this.ref instanceof wt){var re=this.ref._definition;for(var ve in re.schema){var Re=this.ref[ve];if(Re&&Re.$changes){var et=re.indexes[ve];Re.$changes.setParent(this.ref,y,et)}}}else typeof this.ref=="object"&&this.ref.forEach(function(T,O){if(T instanceof wt){var j=T.$changes,G=q.ref.$changes.indexes[O];j.setParent(q.ref,q.root,G)}})},x.prototype.operation=function(p){this.changes.set(--this.currentCustomOperation,p)},x.prototype.change=function(p,y){y===void 0&&(y=t.OPERATION.ADD);var C=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(C,p);var q=this.changes.get(C);(!q||q.op===t.OPERATION.DELETE||q.op===t.OPERATION.TOUCH)&&this.changes.set(C,{op:q&&q.op===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:y,index:C}),this.allChanges.add(C),this.changed=!0,this.touchParents()},x.prototype.touch=function(p){var y=typeof p=="number"?p:this.indexes[p];this.assertValidIndex(y,p),this.changes.has(y)||this.changes.set(y,{op:t.OPERATION.TOUCH,index:y}),this.allChanges.add(y),this.touchParents()},x.prototype.touchParents=function(){this.parent&&this.parent.$changes.touch(this.parentIndex)},x.prototype.getType=function(p){if(this.ref._definition){var y=this.ref._definition;return y.schema[y.fieldsByIndex[p]]}else{var y=this.parent._definition,C=y.schema[y.fieldsByIndex[this.parentIndex]];return Object.values(C)[0]}},x.prototype.getChildrenFilter=function(){var p=this.parent._definition.childFilters;return p&&p[this.parentIndex]},x.prototype.getValue=function(p){return this.ref.getByIndex(p)},x.prototype.delete=function(p){var y=typeof p=="number"?p:this.indexes[p];if(y===void 0){console.warn("@colyseus/schema ".concat(this.ref.constructor.name,": trying to delete non-existing index: ").concat(p," (").concat(y,")"));return}var C=this.getValue(y);this.changes.set(y,{op:t.OPERATION.DELETE,index:y}),this.allChanges.delete(y),delete this.caches[y],C&&C.$changes&&(C.$changes.parent=void 0),this.changed=!0,this.touchParents()},x.prototype.discard=function(p,y){var C=this;p===void 0&&(p=!1),y===void 0&&(y=!1),this.ref instanceof wt||this.changes.forEach(function(q){if(q.op===t.OPERATION.DELETE){var re=C.ref.getIndex(q.index);delete C.indexes[re]}}),this.changes.clear(),this.changed=p,y&&this.allChanges.clear(),this.currentCustomOperation=0},x.prototype.discardAll=function(){var p=this;this.changes.forEach(function(y){var C=p.getValue(y.index);C&&C.$changes&&C.$changes.discardAll()}),this.discard()},x.prototype.cache=function(p,y){this.caches[p]=y},x.prototype.clone=function(){return new x(this.ref,this.parent,this.root)},x.prototype.ensureRefId=function(){this.refId===void 0&&(this.refId=this.root.getNextUniqueId())},x.prototype.assertValidIndex=function(p,y){if(p===void 0)throw new Error('ChangeTree: missing index for field "'.concat(y,'"'))},x}();function u(x,p,y,C){return x[p]||(x[p]=[]),x[p].push(y),C?.forEach(function(q,re){return y(q,re)}),function(){return f(x[p],x[p].indexOf(y))}}function h(x){var p=this,y=typeof this.$changes.getType()!="string";this.$items.forEach(function(C,q){x.push({refId:p.$changes.refId,op:t.OPERATION.DELETE,field:q,value:void 0,previousValue:C}),y&&p.$changes.root.removeRef(C.$changes.refId)})}function f(x,p){if(p===-1||p>=x.length)return!1;for(var y=x.length-1,C=p;C<y;C++)x[C]=x[C+1];return x.length=y,!0}var d=function(x,p){var y=x.toString(),C=p.toString();return y<C?-1:y>C?1:0};function _(x){return x.$proxy=!0,x=new Proxy(x,{get:function(p,y){return typeof y!="symbol"&&!isNaN(y)?p.at(y):p[y]},set:function(p,y,C){if(typeof y!="symbol"&&!isNaN(y)){var q=Array.from(p.$items.keys()),re=parseInt(q[y]||y);C==null?p.deleteAt(re):p.setAt(re,C)}else p[y]=C;return!0},deleteProperty:function(p,y){return typeof y=="number"?p.deleteAt(y):delete p[y],!0},has:function(p,y){return typeof y!="symbol"&&!isNaN(Number(y))?p.$items.has(Number(y)):Reflect.has(p,y)}}),x}var v=function(){function x(){for(var p=[],y=0;y<arguments.length;y++)p[y]=arguments[y];this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,this.push.apply(this,p)}return x.prototype.onAdd=function(p,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,y?this.$items:void 0)},x.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.is=function(p){return Array.isArray(p)||p.array!==void 0},Object.defineProperty(x.prototype,"length",{get:function(){return this.$items.size},set:function(p){p===0?this.clear():this.splice(p,this.length-p)},enumerable:!1,configurable:!0}),x.prototype.push=function(){for(var p=this,y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];var q;return y.forEach(function(re){q=p.$refId++,p.setAt(q,re)}),q},x.prototype.pop=function(){var p=Array.from(this.$indexes.values()).pop();if(p!==void 0){this.$changes.delete(p),this.$indexes.delete(p);var y=this.$items.get(p);return this.$items.delete(p),y}},x.prototype.at=function(p){if(p=Math.trunc(p)||0,p<0&&(p+=this.length),!(p<0||p>=this.length)){var y=Array.from(this.$items.keys())[p];return this.$items.get(y)}},x.prototype.setAt=function(p,y){var C,q;if(y==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.$items.get(p)!==y){y.$changes!==void 0&&y.$changes.setParent(this,this.$changes.root,p);var re=(q=(C=this.$changes.indexes[p])===null||C===void 0?void 0:C.op)!==null&&q!==void 0?q:t.OPERATION.ADD;this.$changes.indexes[p]=p,this.$indexes.set(p,p),this.$items.set(p,y),this.$changes.change(p,re)}},x.prototype.deleteAt=function(p){var y=Array.from(this.$items.keys())[p];return y===void 0?!1:this.$deleteAt(y)},x.prototype.$deleteAt=function(p){return this.$changes.delete(p),this.$indexes.delete(p),this.$items.delete(p)},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.concat=function(){for(var p,y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];return new(x.bind.apply(x,o([void 0],(p=Array.from(this.$items.values())).concat.apply(p,y),!1)))},x.prototype.join=function(p){return Array.from(this.$items.values()).join(p)},x.prototype.reverse=function(){var p=this,y=Array.from(this.$items.keys()),C=Array.from(this.$items.values()).reverse();return C.forEach(function(q,re){p.setAt(y[re],q)}),this},x.prototype.shift=function(){var p=Array.from(this.$items.keys()),y=p.shift();if(y!==void 0){var C=this.$items.get(y);return this.$deleteAt(y),C}},x.prototype.slice=function(p,y){var C=new x;return C.push.apply(C,Array.from(this.$items.values()).slice(p,y)),C},x.prototype.sort=function(p){var y=this;p===void 0&&(p=d);var C=Array.from(this.$items.keys()),q=Array.from(this.$items.values()).sort(p);return q.forEach(function(re,ve){y.setAt(C[ve],re)}),this},x.prototype.splice=function(p,y){y===void 0&&(y=this.length-p);for(var C=[],q=2;q<arguments.length;q++)C[q-2]=arguments[q];for(var re=Array.from(this.$items.keys()),ve=[],Re=p;Re<p+y;Re++)ve.push(this.$items.get(re[Re])),this.$deleteAt(re[Re]);for(var Re=0;Re<C.length;Re++)this.setAt(p+Re,C[Re]);return ve},x.prototype.unshift=function(){for(var p=this,y=[],C=0;C<arguments.length;C++)y[C]=arguments[C];var q=this.length,re=y.length,ve=Array.from(this.$items.values());return y.forEach(function(Re,et){p.setAt(et,Re)}),ve.forEach(function(Re,et){p.setAt(re+et,Re)}),q+re},x.prototype.indexOf=function(p,y){return Array.from(this.$items.values()).indexOf(p,y)},x.prototype.lastIndexOf=function(p,y){return y===void 0&&(y=this.length-1),Array.from(this.$items.values()).lastIndexOf(p,y)},x.prototype.every=function(p,y){return Array.from(this.$items.values()).every(p,y)},x.prototype.some=function(p,y){return Array.from(this.$items.values()).some(p,y)},x.prototype.forEach=function(p,y){Array.from(this.$items.values()).forEach(p,y)},x.prototype.map=function(p,y){return Array.from(this.$items.values()).map(p,y)},x.prototype.filter=function(p,y){return Array.from(this.$items.values()).filter(p,y)},x.prototype.reduce=function(p,y){return Array.prototype.reduce.apply(Array.from(this.$items.values()),arguments)},x.prototype.reduceRight=function(p,y){return Array.prototype.reduceRight.apply(Array.from(this.$items.values()),arguments)},x.prototype.find=function(p,y){return Array.from(this.$items.values()).find(p,y)},x.prototype.findIndex=function(p,y){return Array.from(this.$items.values()).findIndex(p,y)},x.prototype.fill=function(p,y,C){throw new Error("ArraySchema#fill() not implemented")},x.prototype.copyWithin=function(p,y,C){throw new Error("ArraySchema#copyWithin() not implemented")},x.prototype.toString=function(){return this.$items.toString()},x.prototype.toLocaleString=function(){return this.$items.toLocaleString()},x.prototype[Symbol.iterator]=function(){return Array.from(this.$items.values())[Symbol.iterator]()},Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},x.prototype.includes=function(p,y){return Array.from(this.$items.values()).includes(p,y)},x.prototype.flatMap=function(p,y){throw new Error("ArraySchema#flatMap() is not supported.")},x.prototype.flat=function(p){throw new Error("ArraySchema#flat() is not supported.")},x.prototype.findLast=function(){var p=Array.from(this.$items.values());return p.findLast.apply(p,arguments)},x.prototype.findLastIndex=function(){var p=Array.from(this.$items.values());return p.findLastIndex.apply(p,arguments)},x.prototype.with=function(p,y){var C=Array.from(this.$items.values());return C[p]=y,new(x.bind.apply(x,o([void 0],C,!1)))},x.prototype.toReversed=function(){return Array.from(this.$items.values()).reverse()},x.prototype.toSorted=function(p){return Array.from(this.$items.values()).sort(p)},x.prototype.toSpliced=function(p,y){var C=Array.from(this.$items.values());return C.toSpliced.apply(C,arguments)},x.prototype.setIndex=function(p,y){this.$indexes.set(p,y)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var y=this.$indexes.get(p);this.$items.delete(y),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){return this.toArray().map(function(p){return typeof p.toJSON=="function"?p.toJSON():p})},x.prototype.clone=function(p){var y;return p?y=new(x.bind.apply(x,o([void 0],Array.from(this.$items.values()),!1))):y=new(x.bind.apply(x,o([void 0],this.map(function(C){return C.$changes?C.clone():C}),!1))),y},x}();function g(x){return x.$proxy=!0,x=new Proxy(x,{get:function(p,y){return typeof y!="symbol"&&typeof p[y]>"u"?p.get(y):p[y]},set:function(p,y,C){return typeof y!="symbol"&&y.indexOf("$")===-1&&y!=="onAdd"&&y!=="onRemove"&&y!=="onChange"?p.set(y,C):p[y]=C,!0},deleteProperty:function(p,y){return p.delete(y),!0}}),x}var m=function(){function x(p){var y=this;if(this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p)if(p instanceof Map||p instanceof x)p.forEach(function(q,re){return y.set(re,q)});else for(var C in p)this.set(C,p[C])}return x.prototype.onAdd=function(p,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks={}),t.OPERATION.ADD,p,y?this.$items:void 0)},x.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.is=function(p){return p.map!==void 0},x.prototype[Symbol.iterator]=function(){return this.$items[Symbol.iterator]()},Object.defineProperty(x.prototype,Symbol.toStringTag,{get:function(){return this.$items[Symbol.toStringTag]},enumerable:!1,configurable:!0}),Object.defineProperty(x,Symbol.species,{get:function(){return x},enumerable:!1,configurable:!0}),x.prototype.set=function(p,y){if(y==null)throw new Error("MapSchema#set('".concat(p,"', ").concat(y,"): trying to set ").concat(y," value on '").concat(p,"'."));p=p.toString();var C=typeof this.$changes.indexes[p]<"u",q=C?this.$changes.indexes[p]:this.$refId++,re=C?t.OPERATION.REPLACE:t.OPERATION.ADD,ve=y.$changes!==void 0;if(ve&&y.$changes.setParent(this,this.$changes.root,q),!C)this.$changes.indexes[p]=q,this.$indexes.set(q,p);else{if(!ve&&this.$items.get(p)===y)return;ve&&this.$items.get(p)!==y&&(re=t.OPERATION.ADD)}return this.$items.set(p,y),this.$changes.change(p,re),this},x.prototype.get=function(p){return this.$items.get(p)},x.prototype.delete=function(p){return this.$changes.delete(p.toString()),this.$items.delete(p)},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){return this.$items.has(p)},x.prototype.forEach=function(p){this.$items.forEach(p)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.keys=function(){return this.$items.keys()},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,y){this.$indexes.set(p,y)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var y=this.$indexes.get(p);this.$items.delete(y),this.$indexes.delete(p)},x.prototype.toJSON=function(){var p={};return this.forEach(function(y,C){p[C]=typeof y.toJSON=="function"?y.toJSON():y}),p},x.prototype.clone=function(p){var y;return p?y=Object.assign(new x,this):(y=new x,this.forEach(function(C,q){C.$changes?y.set(q,C.clone()):y.set(q,C)})),y},x}(),w={};function M(x,p){w[x]=p}function E(x){return w[x]}var D=function(){function x(){this.indexes={},this.fieldsByIndex={},this.deprecated={},this.descriptors={}}return x.create=function(p){var y=new x;return y.schema=Object.assign({},p&&p.schema||{}),y.indexes=Object.assign({},p&&p.indexes||{}),y.fieldsByIndex=Object.assign({},p&&p.fieldsByIndex||{}),y.descriptors=Object.assign({},p&&p.descriptors||{}),y.deprecated=Object.assign({},p&&p.deprecated||{}),y},x.prototype.addField=function(p,y){var C=this.getNextFieldIndex();this.fieldsByIndex[C]=p,this.indexes[p]=C,this.schema[p]=Array.isArray(y)?{array:y[0]}:y},x.prototype.hasField=function(p){return this.indexes[p]!==void 0},x.prototype.addFilter=function(p,y){return this.filters||(this.filters={},this.indexesWithFilters=[]),this.filters[this.indexes[p]]=y,this.indexesWithFilters.push(this.indexes[p]),!0},x.prototype.addChildrenFilter=function(p,y){var C=this.indexes[p],q=this.schema[p];if(E(Object.keys(q)[0]))return this.childFilters||(this.childFilters={}),this.childFilters[C]=y,!0;console.warn("@filterChildren: field '".concat(p,"' can't have children. Ignoring filter."))},x.prototype.getChildrenFilter=function(p){return this.childFilters&&this.childFilters[this.indexes[p]]},x.prototype.getNextFieldIndex=function(){return Object.keys(this.schema||{}).length},x}();function I(x){return x._context&&x._context.useFilters}var P=function(){function x(){this.types={},this.schemas=new Map,this.useFilters=!1}return x.prototype.has=function(p){return this.schemas.has(p)},x.prototype.get=function(p){return this.types[p]},x.prototype.add=function(p,y){y===void 0&&(y=this.schemas.size),p._definition=D.create(p._definition),p._typeid=y,this.types[y]=p,this.schemas.set(p,y)},x.create=function(p){return p===void 0&&(p={}),function(y){return p.context||(p.context=new x),R(y,p)}},x}(),k=new P;function R(x,p){return p===void 0&&(p={}),function(y,C){var q=p.context||k,re=y.constructor;if(re._context=q,!x)throw new Error("".concat(re.name,': @type() reference provided for "').concat(C,`" is undefined. Make sure you don't have any circular dependencies.`));q.has(re)||q.add(re);var ve=re._definition;if(ve.addField(C,x),ve.descriptors[C]){if(ve.deprecated[C])return;try{throw new Error("@colyseus/schema: Duplicate '".concat(C,"' definition on '").concat(re.name,`'.
Check @type() annotation`))}catch(G){var Re=G.stack.split(`
`)[4].trim();throw new Error("".concat(G.message," ").concat(Re))}}var et=v.is(x),T=!et&&m.is(x);if(typeof x!="string"&&!wt.is(x)){var O=Object.values(x)[0];typeof O!="string"&&!q.has(O)&&q.add(O)}if(p.manual){ve.descriptors[C]={enumerable:!0,configurable:!0,writable:!0};return}var j="_".concat(C);ve.descriptors[j]={enumerable:!1,configurable:!1,writable:!0},ve.descriptors[C]={get:function(){return this[j]},set:function(G){G!==this[j]&&(G!=null?(et&&!(G instanceof v)&&(G=new(v.bind.apply(v,o([void 0],G,!1)))),T&&!(G instanceof m)&&(G=new m(G)),G.$proxy===void 0&&(T?G=g(G):et&&(G=_(G))),this.$changes.change(C),G.$changes&&G.$changes.setParent(this,this.$changes.root,this._definition.indexes[C])):this[j]!==void 0&&this.$changes.delete(C),this[j]=G)},enumerable:!0,configurable:!0}}}function A(x){return function(p,y){var C=p.constructor,q=C._definition;q.addFilter(y,x)&&(C._context.useFilters=!0)}}function S(x){return function(p,y){var C=p.constructor,q=C._definition;q.addChildrenFilter(y,x)&&(C._context.useFilters=!0)}}function L(x){return x===void 0&&(x=!0),function(p,y){var C=p.constructor,q=C._definition;q.deprecated[y]=!0,x&&(q.descriptors[y]={get:function(){throw new Error("".concat(y," is deprecated."))},set:function(re){},enumerable:!1,configurable:!0})}}function B(x,p,y){y===void 0&&(y={}),y.context||(y.context=x._context||y.context||k);for(var C in p)R(p[C],y)(x.prototype,C);return x}function W(x){for(var p=0,y=0,C=0,q=x.length;C<q;C++)p=x.charCodeAt(C),p<128?y+=1:p<2048?y+=2:p<55296||p>=57344?y+=3:(C++,y+=4);return y}function $(x,p,y){for(var C=0,q=0,re=y.length;q<re;q++)C=y.charCodeAt(q),C<128?x[p++]=C:C<2048?(x[p++]=192|C>>6,x[p++]=128|C&63):C<55296||C>=57344?(x[p++]=224|C>>12,x[p++]=128|C>>6&63,x[p++]=128|C&63):(q++,C=65536+((C&1023)<<10|y.charCodeAt(q)&1023),x[p++]=240|C>>18,x[p++]=128|C>>12&63,x[p++]=128|C>>6&63,x[p++]=128|C&63)}function X(x,p){x.push(p&255)}function K(x,p){x.push(p&255)}function H(x,p){x.push(p&255),x.push(p>>8&255)}function J(x,p){x.push(p&255),x.push(p>>8&255)}function se(x,p){x.push(p&255),x.push(p>>8&255),x.push(p>>16&255),x.push(p>>24&255)}function fe(x,p){var y=p>>24,C=p>>16,q=p>>8,re=p;x.push(re&255),x.push(q&255),x.push(C&255),x.push(y&255)}function Ae(x,p){var y=Math.floor(p/Math.pow(2,32)),C=p>>>0;fe(x,C),fe(x,y)}function Q(x,p){var y=p/Math.pow(2,32)>>0,C=p>>>0;fe(x,C),fe(x,y)}function te(x,p){We(x,p)}function he(x,p){qe(x,p)}var Se=new Int32Array(2),we=new Float32Array(Se.buffer),Ve=new Float64Array(Se.buffer);function We(x,p){we[0]=p,se(x,Se[0])}function qe(x,p){Ve[0]=p,se(x,Se[0]),se(x,Se[1])}function ht(x,p){return K(x,p?1:0)}function F(x,p){p||(p="");var y=W(p),C=0;if(y<32)x.push(y|160),C=1;else if(y<256)x.push(217),K(x,y),C=2;else if(y<65536)x.push(218),J(x,y),C=3;else if(y<4294967296)x.push(219),fe(x,y),C=5;else throw new Error("String too long");return $(x,x.length,p),C+y}function Xe(x,p){if(isNaN(p))return Xe(x,0);if(isFinite(p)){if(p!==(p|0))return x.push(203),qe(x,p),9}else return Xe(x,p>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER);return p>=0?p<128?(K(x,p),1):p<256?(x.push(204),K(x,p),2):p<65536?(x.push(205),J(x,p),3):p<4294967296?(x.push(206),fe(x,p),5):(x.push(207),Q(x,p),9):p>=-32?(x.push(224|p+32),1):p>=-128?(x.push(208),X(x,p),2):p>=-32768?(x.push(209),H(x,p),3):p>=-2147483648?(x.push(210),se(x,p),5):(x.push(211),Ae(x,p),9)}var tt=Object.freeze({__proto__:null,boolean:ht,float32:te,float64:he,int16:H,int32:se,int64:Ae,int8:X,number:Xe,string:F,uint16:J,uint32:fe,uint64:Q,uint8:K,utf8Write:$,writeFloat32:We,writeFloat64:qe});function lt(x,p,y){for(var C="",q=0,re=p,ve=p+y;re<ve;re++){var Re=x[re];if(!(Re&128)){C+=String.fromCharCode(Re);continue}if((Re&224)===192){C+=String.fromCharCode((Re&31)<<6|x[++re]&63);continue}if((Re&240)===224){C+=String.fromCharCode((Re&15)<<12|(x[++re]&63)<<6|(x[++re]&63)<<0);continue}if((Re&248)===240){q=(Re&7)<<18|(x[++re]&63)<<12|(x[++re]&63)<<6|(x[++re]&63)<<0,q>=65536?(q-=65536,C+=String.fromCharCode((q>>>10)+55296,(q&1023)+56320)):C+=String.fromCharCode(q);continue}console.error("Invalid byte "+Re.toString(16))}return C}function Oe(x,p){return ut(x,p)<<24>>24}function ut(x,p){return x[p.offset++]}function Be(x,p){return Ge(x,p)<<16>>16}function Ge(x,p){return x[p.offset++]|x[p.offset++]<<8}function U(x,p){return x[p.offset++]|x[p.offset++]<<8|x[p.offset++]<<16|x[p.offset++]<<24}function b(x,p){return U(x,p)>>>0}function Z(x,p){return Je(x,p)}function de(x,p){return me(x,p)}function pe(x,p){var y=b(x,p),C=U(x,p)*Math.pow(2,32);return C+y}function le(x,p){var y=b(x,p),C=b(x,p)*Math.pow(2,32);return C+y}var Fe=new Int32Array(2),ye=new Float32Array(Fe.buffer),Ce=new Float64Array(Fe.buffer);function Je(x,p){return Fe[0]=U(x,p),ye[0]}function me(x,p){return Fe[0]=U(x,p),Fe[1]=U(x,p),Ce[0]}function Ee(x,p){return ut(x,p)>0}function ke(x,p){var y=x[p.offset++],C;y<192?C=y&31:y===217?C=ut(x,p):y===218?C=Ge(x,p):y===219&&(C=b(x,p));var q=lt(x,p.offset,C);return p.offset+=C,q}function $e(x,p){var y=x[p.offset];return y<192&&y>160||y===217||y===218||y===219}function Y(x,p){var y=x[p.offset++];if(y<128)return y;if(y===202)return Je(x,p);if(y===203)return me(x,p);if(y===204)return ut(x,p);if(y===205)return Ge(x,p);if(y===206)return b(x,p);if(y===207)return le(x,p);if(y===208)return Oe(x,p);if(y===209)return Be(x,p);if(y===210)return U(x,p);if(y===211)return pe(x,p);if(y>223)return(255-y+1)*-1}function ae(x,p){var y=x[p.offset];return y<128||y>=202&&y<=211}function Pe(x,p){return x[p.offset]<160}function Ke(x,p){return x[p.offset-1]===a&&(x[p.offset]<128||x[p.offset]>=202&&x[p.offset]<=211)}var V=Object.freeze({__proto__:null,arrayCheck:Pe,boolean:Ee,float32:Z,float64:de,int16:Be,int32:U,int64:pe,int8:Oe,number:Y,numberCheck:ae,readFloat32:Je,readFloat64:me,string:ke,stringCheck:$e,switchStructureCheck:Ke,uint16:Ge,uint32:b,uint64:le,uint8:ut}),ue=function(){function x(p){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(C){return y.add(C)})}return x.prototype.onAdd=function(p,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,y?this.$items:void 0)},x.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},x.is=function(p){return p.collection!==void 0},x.prototype.add=function(p){var y=this.$refId++,C=p.$changes!==void 0;return C&&p.$changes.setParent(this,this.$changes.root,y),this.$changes.indexes[y]=y,this.$indexes.set(y,y),this.$items.set(y,p),this.$changes.change(y),y},x.prototype.at=function(p){var y=Array.from(this.$items.keys())[p];return this.$items.get(y)},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(p){for(var y=this.$items.entries(),C,q;(q=y.next())&&!q.done;)if(p===q.value[1]){C=q.value[0];break}return C===void 0?!1:(this.$changes.delete(C),this.$indexes.delete(C),this.$items.delete(C))},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){return Array.from(this.$items.values()).some(function(y){return y===p})},x.prototype.forEach=function(p){var y=this;this.$items.forEach(function(C,q,re){return p(C,q,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,y){this.$indexes.set(p,y)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var y=this.$indexes.get(p);this.$items.delete(y),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var p=[];return this.forEach(function(y,C){p.push(typeof y.toJSON=="function"?y.toJSON():y)}),p},x.prototype.clone=function(p){var y;return p?y=Object.assign(new x,this):(y=new x,this.forEach(function(C){C.$changes?y.add(C.clone()):y.add(C)})),y},x}(),ie=function(){function x(p){var y=this;this.$changes=new l(this),this.$items=new Map,this.$indexes=new Map,this.$refId=0,p&&p.forEach(function(C){return y.add(C)})}return x.prototype.onAdd=function(p,y){return y===void 0&&(y=!0),u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.ADD,p,y?this.$items:void 0)},x.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.DELETE,p)},x.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks=[]),t.OPERATION.REPLACE,p)},x.is=function(p){return p.set!==void 0},x.prototype.add=function(p){var y,C;if(this.has(p))return!1;var q=this.$refId++;p.$changes!==void 0&&p.$changes.setParent(this,this.$changes.root,q);var re=(C=(y=this.$changes.indexes[q])===null||y===void 0?void 0:y.op)!==null&&C!==void 0?C:t.OPERATION.ADD;return this.$changes.indexes[q]=q,this.$indexes.set(q,q),this.$items.set(q,p),this.$changes.change(q,re),q},x.prototype.entries=function(){return this.$items.entries()},x.prototype.delete=function(p){for(var y=this.$items.entries(),C,q;(q=y.next())&&!q.done;)if(p===q.value[1]){C=q.value[0];break}return C===void 0?!1:(this.$changes.delete(C),this.$indexes.delete(C),this.$items.delete(C))},x.prototype.clear=function(p){this.$changes.discard(!0,!0),this.$changes.indexes={},this.$indexes.clear(),p&&h.call(this,p),this.$items.clear(),this.$changes.operation({index:0,op:t.OPERATION.CLEAR}),this.$changes.touchParents()},x.prototype.has=function(p){for(var y=this.$items.values(),C=!1,q;(q=y.next())&&!q.done;)if(p===q.value){C=!0;break}return C},x.prototype.forEach=function(p){var y=this;this.$items.forEach(function(C,q,re){return p(C,q,y)})},x.prototype.values=function(){return this.$items.values()},Object.defineProperty(x.prototype,"size",{get:function(){return this.$items.size},enumerable:!1,configurable:!0}),x.prototype.setIndex=function(p,y){this.$indexes.set(p,y)},x.prototype.getIndex=function(p){return this.$indexes.get(p)},x.prototype.getByIndex=function(p){return this.$items.get(this.$indexes.get(p))},x.prototype.deleteByIndex=function(p){var y=this.$indexes.get(p);this.$items.delete(y),this.$indexes.delete(p)},x.prototype.toArray=function(){return Array.from(this.$items.values())},x.prototype.toJSON=function(){var p=[];return this.forEach(function(y,C){p.push(typeof y.toJSON=="function"?y.toJSON():y)}),p},x.prototype.clone=function(p){var y;return p?y=Object.assign(new x,this):(y=new x,this.forEach(function(C){C.$changes?y.add(C.clone()):y.add(C)})),y},x}(),oe=function(){function x(){this.refIds=new WeakSet,this.containerIndexes=new WeakMap}return x.prototype.addRefId=function(p){this.refIds.has(p)||(this.refIds.add(p),this.containerIndexes.set(p,new Set))},x.get=function(p){return p.$filterState===void 0&&(p.$filterState=new x),p.$filterState},x}(),_e=function(){function x(){this.refs=new Map,this.refCounts={},this.deletedRefs=new Set,this.nextUniqueId=0}return x.prototype.getNextUniqueId=function(){return this.nextUniqueId++},x.prototype.addRef=function(p,y,C){C===void 0&&(C=!0),this.refs.set(p,y),C&&(this.refCounts[p]=(this.refCounts[p]||0)+1)},x.prototype.removeRef=function(p){var y=this.refCounts[p];if(y===void 0){console.warn("trying to remove reference ".concat(p," that doesn't exist"));return}if(y===0){console.warn("trying to remove reference ".concat(p," with 0 refCount"));return}this.refCounts[p]=y-1,this.deletedRefs.add(p)},x.prototype.clearRefs=function(){this.refs.clear(),this.deletedRefs.clear(),this.refCounts={}},x.prototype.garbageCollectDeletedRefs=function(){var p=this;this.deletedRefs.forEach(function(y){if(!(p.refCounts[y]>0)){var C=p.refs.get(y);if(C instanceof wt)for(var q in C._definition.schema)typeof C._definition.schema[q]!="string"&&C[q]&&C[q].$changes&&p.removeRef(C[q].$changes.refId);else{var re=C.$changes.parent._definition,ve=re.schema[re.fieldsByIndex[C.$changes.parentIndex]];typeof Object.values(ve)[0]=="function"&&Array.from(C.values()).forEach(function(Re){return p.removeRef(Re.$changes.refId)})}p.refs.delete(y),delete p.refCounts[y]}}),this.deletedRefs.clear()},x}(),ze=function(x){i(p,x);function p(){return x!==null&&x.apply(this,arguments)||this}return p}(Error);function Qe(x,p,y,C){var q,re=!1;switch(p){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":q="number",isNaN(x)&&console.log('trying to encode "NaN" in '.concat(y.constructor.name,"#").concat(C));break;case"string":q="string",re=!0;break;case"boolean":return}if(typeof x!==q&&(!re||re&&x!==null)){var ve="'".concat(JSON.stringify(x),"'").concat(x&&x.constructor&&" (".concat(x.constructor.name,")")||"");throw new ze("a '".concat(q,"' was expected, but ").concat(ve," was provided in ").concat(y.constructor.name,"#").concat(C))}}function pt(x,p,y,C){if(!(x instanceof p))throw new ze("a '".concat(p.name,"' was expected, but '").concat(x.constructor.name,"' was provided in ").concat(y.constructor.name,"#").concat(C))}function yt(x,p,y,C,q){Qe(y,x,C,q);var re=tt[x];if(re)re(p,y);else throw new ze("a '".concat(x,"' was expected, but ").concat(y," was provided in ").concat(C.constructor.name,"#").concat(q))}function it(x,p,y){return V[x](p,y)}var wt=function(){function x(){for(var p=[],y=0;y<arguments.length;y++)p[y]=arguments[y];Object.defineProperties(this,{$changes:{value:new l(this,void 0,new _e),enumerable:!1,writable:!0},$callbacks:{value:void 0,enumerable:!1,writable:!0}});var C=this._definition.descriptors;C&&Object.defineProperties(this,C),p[0]&&this.assign(p[0])}return x.onError=function(p){console.error(p)},x.is=function(p){return p._definition&&p._definition.schema!==void 0},x.prototype.onChange=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.REPLACE,p)},x.prototype.onRemove=function(p){return u(this.$callbacks||(this.$callbacks={}),t.OPERATION.DELETE,p)},x.prototype.assign=function(p){return Object.assign(this,p),this},Object.defineProperty(x.prototype,"_definition",{get:function(){return this.constructor._definition},enumerable:!1,configurable:!0}),x.prototype.setDirty=function(p,y){this.$changes.change(p,y)},x.prototype.listen=function(p,y,C){var q=this;return C===void 0&&(C=!0),this.$callbacks||(this.$callbacks={}),this.$callbacks[p]||(this.$callbacks[p]=[]),this.$callbacks[p].push(y),C&&this[p]!==void 0&&y(this[p],void 0),function(){return f(q.$callbacks[p],q.$callbacks[p].indexOf(y))}},x.prototype.decode=function(p,y,C){y===void 0&&(y={offset:0}),C===void 0&&(C=this);var q=[],re=this.$changes.root,ve=p.length,Re=0;for(re.refs.set(Re,this);y.offset<ve;){var et=p[y.offset++];if(et==a){Re=Y(p,y);var T=re.refs.get(Re);if(!T)throw new Error('"refId" not found: '.concat(Re));C=T;continue}var O=C.$changes,j=C._definition!==void 0,G=j?et>>6<<6:et;if(G===t.OPERATION.CLEAR){C.clear(q);continue}var z=j?et%(G||255):Y(p,y),ne=j?C._definition.fieldsByIndex[z]:"",ce=O.getType(z),ee=void 0,ge=void 0,Ue=void 0;if(j?ge=C["_".concat(ne)]:(ge=C.getByIndex(z),(G&t.OPERATION.ADD)===t.OPERATION.ADD?(Ue=C instanceof m?ke(p,y):z,C.setIndex(z,Ue)):Ue=C.getIndex(z)),(G&t.OPERATION.DELETE)===t.OPERATION.DELETE&&(G!==t.OPERATION.DELETE_AND_ADD&&C.deleteByIndex(z),ge&&ge.$changes&&re.removeRef(ge.$changes.refId),ee=null),ne===void 0){console.warn("@colyseus/schema: definition mismatch");for(var Le={offset:y.offset};y.offset<ve&&!(Ke(p,y)&&(Le.offset=y.offset+1,re.refs.has(Y(p,Le))));)y.offset++;continue}else if(G!==t.OPERATION.DELETE)if(x.is(ce)){var xe=Y(p,y);if(ee=re.refs.get(xe),G!==t.OPERATION.REPLACE){var De=this.getSchemaType(p,y,ce);ee||(ee=this.createTypeInstance(De),ee.$changes.refId=xe,ge&&(ee.$callbacks=ge.$callbacks,ge.$changes.refId&&xe!==ge.$changes.refId&&re.removeRef(ge.$changes.refId))),re.addRef(xe,ee,ee!==ge)}}else if(typeof ce=="string")ee=it(ce,p,y);else{var mt=E(Object.keys(ce)[0]),gt=Y(p,y),At=re.refs.has(gt)?ge||re.refs.get(gt):new mt.constructor;if(ee=At.clone(!0),ee.$changes.refId=gt,ge&&(ee.$callbacks=ge.$callbacks,ge.$changes.refId&&gt!==ge.$changes.refId)){re.removeRef(ge.$changes.refId);for(var Ze=ge.entries(),Te=void 0;(Te=Ze.next())&&!Te.done;){var Lt=Te.value,st=Lt[0],tn=Lt[1];q.push({refId:gt,op:t.OPERATION.DELETE,field:st,value:void 0,previousValue:tn})}}re.addRef(gt,ee,At!==ge)}if(ee!=null){if(ee.$changes&&ee.$changes.setParent(O.ref,O.root,z),C instanceof x)C[ne]=ee;else if(C instanceof m){var st=Ue;C.$items.set(st,ee),C.$changes.allChanges.add(z)}else if(C instanceof v)C.setAt(z,ee);else if(C instanceof ue){var nn=C.add(ee);C.setIndex(z,nn)}else if(C instanceof ie){var nn=C.add(ee);nn!==!1&&C.setIndex(z,nn)}}ge!==ee&&q.push({refId:Re,op:G,field:ne,dynamicIndex:Ue,value:ee,previousValue:ge})}return this._triggerChanges(q),re.garbageCollectDeletedRefs(),q},x.prototype.encode=function(p,y,C){p===void 0&&(p=!1),y===void 0&&(y=[]),C===void 0&&(C=!1);for(var q=this.$changes,re=new WeakSet,ve=[q],Re=1,et=0;et<Re;et++){var T=ve[et],O=T.ref,j=O instanceof x;T.ensureRefId(),re.add(T),T!==q&&(T.changed||p)&&(K(y,a),Xe(y,T.refId));for(var G=p?Array.from(T.allChanges):Array.from(T.changes.values()),z=0,ne=G.length;z<ne;z++){var ce=p?{op:t.OPERATION.ADD,index:G[z]}:G[z],ee=ce.index,ge=j?O._definition.fieldsByIndex&&O._definition.fieldsByIndex[ee]:ee,Ue=y.length;if(ce.op!==t.OPERATION.TOUCH)if(j)K(y,ee|ce.op);else{if(K(y,ce.op),ce.op===t.OPERATION.CLEAR)continue;Xe(y,ee)}if(!j&&(ce.op&t.OPERATION.ADD)==t.OPERATION.ADD&&O instanceof m){var Le=T.ref.$indexes.get(ee);F(y,Le)}if(ce.op!==t.OPERATION.DELETE){var xe=T.getType(ee),De=T.getValue(ee);if(De&&De.$changes&&!re.has(De.$changes)&&(ve.push(De.$changes),De.$changes.ensureRefId(),Re++),ce.op!==t.OPERATION.TOUCH){if(x.is(xe))pt(De,xe,O,ge),Xe(y,De.$changes.refId),(ce.op&t.OPERATION.ADD)===t.OPERATION.ADD&&this.tryEncodeTypeId(y,xe,De.constructor);else if(typeof xe=="string")yt(xe,y,De,O,ge);else{var mt=E(Object.keys(xe)[0]);pt(O["_".concat(ge)],mt.constructor,O,ge),Xe(y,De.$changes.refId)}C&&T.cache(ee,y.slice(Ue))}}}!p&&!C&&T.discard()}return y},x.prototype.encodeAll=function(p){return this.encode(!0,[],p)},x.prototype.applyFilters=function(p,y){var C,q;y===void 0&&(y=!1);for(var re=this,ve=new Set,Re=oe.get(p),et=[this.$changes],T=1,O=[],j=function(z){var ne=et[z];if(ve.has(ne.refId))return"continue";var ce=ne.ref,ee=ce instanceof x;K(O,a),Xe(O,ne.refId);var ge=Re.refIds.has(ne),Ue=y||!ge;Re.addRefId(ne);var Le=Re.containerIndexes.get(ne),xe=Ue?Array.from(ne.allChanges):Array.from(ne.changes.values());if(!y&&ee&&ce._definition.indexesWithFilters){var De=ce._definition.indexesWithFilters;De.forEach(function(Gt){!Le.has(Gt)&&ne.allChanges.has(Gt)&&(Ue?xe.push(Gt):xe.push({op:t.OPERATION.ADD,index:Gt}))})}for(var mt=0,gt=xe.length;mt<gt;mt++){var At=Ue?{op:t.OPERATION.ADD,index:xe[mt]}:xe[mt];if(At.op===t.OPERATION.CLEAR){K(O,At.op);continue}var Ze=At.index;if(At.op===t.OPERATION.DELETE){ee?K(O,At.op|Ze):(K(O,At.op),Xe(O,Ze));continue}var Te=ne.getValue(Ze),Lt=ne.getType(Ze);if(ee){var st=ce._definition.filters&&ce._definition.filters[Ze];if(st&&!st.call(ce,p,Te,re)){Te&&Te.$changes&&ve.add(Te.$changes.refId);continue}}else{var tn=ne.parent,st=ne.getChildrenFilter();if(st&&!st.call(tn,p,ce.$indexes.get(Ze),Te,re)){Te&&Te.$changes&&ve.add(Te.$changes.refId);continue}}if(Te.$changes&&(et.push(Te.$changes),T++),At.op!==t.OPERATION.TOUCH)if(At.op===t.OPERATION.ADD||ee)O.push.apply(O,(C=ne.caches[Ze])!==null&&C!==void 0?C:[]),Le.add(Ze);else if(Le.has(Ze))O.push.apply(O,(q=ne.caches[Ze])!==null&&q!==void 0?q:[]);else{if(Le.add(Ze),K(O,t.OPERATION.ADD),Xe(O,Ze),ce instanceof m){var nn=ne.ref.$indexes.get(Ze);F(O,nn)}Te.$changes?Xe(O,Te.$changes.refId):tt[Lt](O,Te)}else if(Te.$changes&&!ee){if(K(O,t.OPERATION.ADD),Xe(O,Ze),ce instanceof m){var nn=ne.ref.$indexes.get(Ze);F(O,nn)}Xe(O,Te.$changes.refId)}}},G=0;G<T;G++)j(G);return O},x.prototype.clone=function(){var p,y=new this.constructor,C=this._definition.schema;for(var q in C)typeof this[q]=="object"&&typeof((p=this[q])===null||p===void 0?void 0:p.clone)=="function"?y[q]=this[q].clone():y[q]=this[q];return y},x.prototype.toJSON=function(){var p=this._definition.schema,y=this._definition.deprecated,C={};for(var q in p)!y[q]&&this[q]!==null&&typeof this[q]<"u"&&(C[q]=typeof this[q].toJSON=="function"?this[q].toJSON():this["_".concat(q)]);return C},x.prototype.discardAllChanges=function(){this.$changes.discardAll()},x.prototype.getByIndex=function(p){return this[this._definition.fieldsByIndex[p]]},x.prototype.deleteByIndex=function(p){this[this._definition.fieldsByIndex[p]]=void 0},x.prototype.tryEncodeTypeId=function(p,y,C){y._typeid!==C._typeid&&(K(p,c),Xe(p,C._typeid))},x.prototype.getSchemaType=function(p,y,C){var q;return p[y.offset]===c&&(y.offset++,q=this.constructor._context.get(Y(p,y))),q||C},x.prototype.createTypeInstance=function(p){var y=new p;return y.$changes.root=this.$changes.root,y},x.prototype._triggerChanges=function(p){for(var y,C,q,re,ve,Re,et,T,O,j=new Set,G=this.$changes.root.refs,z=function(ce){var ee=p[ce],ge=ee.refId,Ue=G.get(ge),Le=Ue.$callbacks;if((ee.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ee.previousValue instanceof x&&((C=(y=ee.previousValue.$callbacks)===null||y===void 0?void 0:y[t.OPERATION.DELETE])===null||C===void 0||C.forEach(function(xe){return xe()})),!Le)return"continue";if(Ue instanceof x){if(!j.has(ge))try{(q=Le?.[t.OPERATION.REPLACE])===null||q===void 0||q.forEach(function(xe){return xe()})}catch(xe){x.onError(xe)}try{Le.hasOwnProperty(ee.field)&&((re=Le[ee.field])===null||re===void 0||re.forEach(function(xe){return xe(ee.value,ee.previousValue)}))}catch(xe){x.onError(xe)}}else ee.op===t.OPERATION.ADD&&ee.previousValue===void 0?(ve=Le[t.OPERATION.ADD])===null||ve===void 0||ve.forEach(function(xe){var De;return xe(ee.value,(De=ee.dynamicIndex)!==null&&De!==void 0?De:ee.field)}):ee.op===t.OPERATION.DELETE?ee.previousValue!==void 0&&((Re=Le[t.OPERATION.DELETE])===null||Re===void 0||Re.forEach(function(xe){var De;return xe(ee.previousValue,(De=ee.dynamicIndex)!==null&&De!==void 0?De:ee.field)})):ee.op===t.OPERATION.DELETE_AND_ADD&&(ee.previousValue!==void 0&&((et=Le[t.OPERATION.DELETE])===null||et===void 0||et.forEach(function(xe){var De;return xe(ee.previousValue,(De=ee.dynamicIndex)!==null&&De!==void 0?De:ee.field)})),(T=Le[t.OPERATION.ADD])===null||T===void 0||T.forEach(function(xe){var De;return xe(ee.value,(De=ee.dynamicIndex)!==null&&De!==void 0?De:ee.field)})),ee.value!==ee.previousValue&&((O=Le[t.OPERATION.REPLACE])===null||O===void 0||O.forEach(function(xe){var De;return xe(ee.value,(De=ee.dynamicIndex)!==null&&De!==void 0?De:ee.field)}));j.add(ge)},ne=0;ne<p.length;ne++)z(ne)},x._definition=D.create(),x}();function Mt(x){for(var p=[x.$changes],y=1,C={},q=C,re=function(Re){var et=p[Re];et.changes.forEach(function(T){var O=et.ref,j=T.index,G=O._definition?O._definition.fieldsByIndex[j]:O.$indexes.get(j);q[G]=et.getValue(j)})},ve=0;ve<y;ve++)re(ve);return C}var Ye={context:new P},ot=function(x){i(p,x);function p(){return x!==null&&x.apply(this,arguments)||this}return r([R("string",Ye)],p.prototype,"name",void 0),r([R("string",Ye)],p.prototype,"type",void 0),r([R("number",Ye)],p.prototype,"referencedType",void 0),p}(wt),ln=function(x){i(p,x);function p(){var y=x!==null&&x.apply(this,arguments)||this;return y.fields=new v,y}return r([R("number",Ye)],p.prototype,"id",void 0),r([R([ot],Ye)],p.prototype,"fields",void 0),p}(wt),Sn=function(x){i(p,x);function p(){var y=x!==null&&x.apply(this,arguments)||this;return y.types=new v,y}return p.encode=function(y){var C,q=y.constructor,re=new p;re.rootType=q._typeid;var ve=function(O,j){for(var G in j){var z=new ot;z.name=G;var ne=void 0;if(typeof j[G]=="string")ne=j[G];else{var ce=j[G],ee=void 0;wt.is(ce)?(ne="ref",ee=j[G]):(ne=Object.keys(ce)[0],typeof ce[ne]=="string"?ne+=":"+ce[ne]:ee=ce[ne]),z.referencedType=ee?ee._typeid:-1}z.type=ne,O.fields.push(z)}re.types.push(O)},Re=(C=q._context)===null||C===void 0?void 0:C.types;for(var et in Re){var T=new ln;T.id=Number(et),ve(T,Re[et]._definition.schema)}return re.encodeAll()},p.decode=function(y,C){var q=new P,re=new p;re.decode(y,C);var ve=re.types.reduce(function(j,G){var z=function(ce){i(ee,ce);function ee(){return ce!==null&&ce.apply(this,arguments)||this}return ee}(wt),ne=G.id;return j[ne]=z,q.add(z,ne),j},{});re.types.forEach(function(j){var G=ve[j.id];j.fields.forEach(function(z){var ne;if(z.referencedType!==void 0){var ce=z.type,ee=ve[z.referencedType];if(!ee){var ge=z.type.split(":");ce=ge[0],ee=ge[1]}ce==="ref"?R(ee,{context:q})(G.prototype,z.name):R((ne={},ne[ce]=ee,ne),{context:q})(G.prototype,z.name)}else R(z.type,{context:q})(G.prototype,z.name)})});var Re=ve[re.rootType],et=new Re;for(var T in Re._definition.schema){var O=Re._definition.schema[T];typeof O!="string"&&(et[T]=typeof O=="function"?new O:new(E(Object.keys(O)[0])).constructor)}return et},r([R([ln],Ye)],p.prototype,"types",void 0),r([R("number",Ye)],p.prototype,"rootType",void 0),p}(wt);M("map",{constructor:m}),M("array",{constructor:v}),M("set",{constructor:ie}),M("collection",{constructor:ue}),t.ArraySchema=v,t.CollectionSchema=ue,t.Context=P,t.MapSchema=m,t.Reflection=Sn,t.ReflectionField=ot,t.ReflectionType=ln,t.Schema=wt,t.SchemaDefinition=D,t.SetSchema=ie,t.decode=V,t.defineTypes=B,t.deprecated=L,t.dumpChanges=Mt,t.encode=tt,t.filter=A,t.filterChildren=S,t.hasFilter=I,t.registerType=M,t.type=R})})(Kc,Kc.exports);var If=Kc.exports,EM=It&&It.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),wM=It&&It.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),AM=It&&It.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&EM(e,s,t);return wM(e,s),e};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.Room=void 0;const gu=AM(zs),TM=ta,Zt=wl,_u=$i,bM=br,go=ks,dn=If,vu=ea;class Al{constructor(e,t){this.onStateChange=(0,go.createSignal)(),this.onError=(0,go.createSignal)(),this.onLeave=(0,go.createSignal)(),this.onJoin=(0,go.createSignal)(),this.hasJoined=!1,this.onMessageHandlers=(0,bM.createNanoEvents)(),this.roomId=null,this.name=e,t&&(this.serializer=new((0,_u.getSerializer)("schema")),this.rootSchema=t,this.serializer.state=new t),this.onError((n,i)=>{var r;return(r=console.warn)===null||r===void 0?void 0:r.call(console,`colyseus.js - onError => (${n}) ${i}`)}),this.onLeave(()=>this.removeAllListeners())}get id(){return this.roomId}connect(e,t,n=this,i){const r=new TM.Connection;n.connection=r,r.events.onmessage=Al.prototype.onMessageCallback.bind(n),r.events.onclose=function(o){var a;if(!n.hasJoined){(a=console.warn)===null||a===void 0||a.call(console,`Room connection was closed unexpectedly (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason);return}o.code===vu.CloseCode.DEVMODE_RESTART&&t?t():(n.onLeave.invoke(o.code,o.reason),n.destroy())},r.events.onerror=function(o){var a;(a=console.warn)===null||a===void 0||a.call(console,`Room, onError (${o.code}): ${o.reason}`),n.onError.invoke(o.code,o.reason)},r.connect(e,i)}leave(e=!0){return new Promise(t=>{this.onLeave(n=>t(n)),this.connection?e?this.connection.send([Zt.Protocol.LEAVE_ROOM]):this.connection.close():this.onLeave.invoke(vu.CloseCode.CONSENTED)})}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}send(e,t){const n=[Zt.Protocol.ROOM_DATA];typeof e=="string"?dn.encode.string(n,e):dn.encode.number(n,e);let i;if(t!==void 0){const r=gu.encode(t);i=new Uint8Array(n.length+r.byteLength),i.set(new Uint8Array(n),0),i.set(new Uint8Array(r),n.length)}else i=new Uint8Array(n);this.connection.send(i.buffer)}sendBytes(e,t){const n=[Zt.Protocol.ROOM_DATA_BYTES];typeof e=="string"?dn.encode.string(n,e):dn.encode.number(n,e);let i;i=new Uint8Array(n.length+(t.byteLength||t.length)),i.set(new Uint8Array(n),0),i.set(new Uint8Array(t),n.length),this.connection.send(i.buffer)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={}}onMessageCallback(e){const t=Array.from(new Uint8Array(e.data)),n=t[0];if(n===Zt.Protocol.JOIN_ROOM){let i=1;const r=(0,Zt.utf8Read)(t,i);if(i+=(0,Zt.utf8Length)(r),this.serializerId=(0,Zt.utf8Read)(t,i),i+=(0,Zt.utf8Length)(this.serializerId),!this.serializer){const o=(0,_u.getSerializer)(this.serializerId);this.serializer=new o}t.length>i&&this.serializer.handshake&&this.serializer.handshake(t,{offset:i}),this.reconnectionToken=`${this.roomId}:${r}`,this.hasJoined=!0,this.onJoin.invoke(),this.connection.send([Zt.Protocol.JOIN_ROOM])}else if(n===Zt.Protocol.ERROR){const i={offset:1},r=dn.decode.number(t,i),o=dn.decode.string(t,i);this.onError.invoke(r,o)}else if(n===Zt.Protocol.LEAVE_ROOM)this.leave();else if(n===Zt.Protocol.ROOM_DATA_SCHEMA){const i={offset:1},o=this.serializer.getState().constructor._context.get(dn.decode.number(t,i)),a=new o;a.decode(t,i),this.dispatchMessage(o,a)}else if(n===Zt.Protocol.ROOM_STATE)t.shift(),this.setState(t);else if(n===Zt.Protocol.ROOM_STATE_PATCH)t.shift(),this.patch(t);else if(n===Zt.Protocol.ROOM_DATA){const i={offset:1},r=dn.decode.stringCheck(t,i)?dn.decode.string(t,i):dn.decode.number(t,i),o=t.length>i.offset?gu.decode(e.data,i.offset):void 0;this.dispatchMessage(r,o)}else if(n===Zt.Protocol.ROOM_DATA_BYTES){const i={offset:1},r=dn.decode.stringCheck(t,i)?dn.decode.string(t,i):dn.decode.number(t,i);this.dispatchMessage(r,new Uint8Array(t.slice(i.offset)))}}setState(e){this.serializer.setState(e),this.onStateChange.invoke(this.serializer.getState())}patch(e){this.serializer.patch(e),this.onStateChange.invoke(this.serializer.getState())}dispatchMessage(e,t){var n;const i=this.getMessageHandlerKey(e);this.onMessageHandlers.events[i]?this.onMessageHandlers.emit(i,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):(n=console.warn)===null||n===void 0||n.call(console,`colyseus.js: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"function":return`$${e._typeid}`;case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}}Tr.Room=Al;var ia={};function xu(s,e){e.headers=s.headers||{},e.statusMessage=s.statusText,e.statusCode=s.status,e.data=s.response}function Nn(s,e,t){return new Promise(function(n,i){t=t||{};var r=new XMLHttpRequest,o,a,c,l=t.body,u=t.headers||{};t.timeout&&(r.timeout=t.timeout),r.ontimeout=r.onerror=function(h){h.timeout=h.type=="timeout",i(h)},r.open(s,e.href||e),r.onload=function(){for(c=r.getAllResponseHeaders().trim().split(/[\r\n]+/),xu(r,r);a=c.shift();)a=a.split(": "),r.headers[a.shift().toLowerCase()]=a.join(": ");if(a=r.headers["content-type"],a&&~a.indexOf("application/json"))try{r.data=JSON.parse(r.data,t.reviver)}catch(h){return xu(r,h),i(h)}(r.status>=400?i:n)(r)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(u["content-type"]="application/json",l=JSON.stringify(l)),r.withCredentials=!!t.withCredentials;for(o in u)r.setRequestHeader(o,u[o]);r.send(l)})}var RM=Nn.bind(Nn,"GET"),CM=Nn.bind(Nn,"POST"),PM=Nn.bind(Nn,"PATCH"),IM=Nn.bind(Nn,"DELETE"),LM=Nn.bind(Nn,"PUT");const DM=Object.freeze(Object.defineProperty({__proto__:null,del:IM,get:RM,patch:PM,post:CM,put:LM,send:Nn},Symbol.toStringTag,{value:"Module"})),UM=rM(DM);var NM=It&&It.__createBinding||(Object.create?function(s,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,n,i)}:function(s,e,t,n){n===void 0&&(n=t),s[n]=e[t]}),OM=It&&It.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),FM=It&&It.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&NM(e,s,t);return OM(e,s),e};Object.defineProperty(ia,"__esModule",{value:!0});ia.HTTP=void 0;const BM=ea,zM=FM(UM);class kM{constructor(e,t={}){this.client=e,this.headers=t}get(e,t={}){return this.request("get",e,t)}post(e,t={}){return this.request("post",e,t)}del(e,t={}){return this.request("del",e,t)}put(e,t={}){return this.request("put",e,t)}request(e,t,n={}){return zM[e](this.client.getHttpEndpoint(t),this.getOptions(n)).catch(i=>{var r;const o=i.statusCode,a=((r=i.data)===null||r===void 0?void 0:r.error)||i.statusMessage||i.message;throw!o&&!a?i:new BM.ServerError(o,a)})}getOptions(e){return e.headers=Object.assign({},this.headers,e.headers),this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(e.withCredentials=!0),e}}ia.HTTP=kM;var Rr={},Mi={};Object.defineProperty(Mi,"__esModule",{value:!0});Mi.getItem=Mi.removeItem=Mi.setItem=void 0;let sr;function Tl(){if(!sr)try{sr=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return sr||(sr={cache:{},setItem:function(s,e){this.cache[s]=e},getItem:function(s){this.cache[s]},removeItem:function(s){delete this.cache[s]}}),sr}function HM(s,e){Tl().setItem(s,e)}Mi.setItem=HM;function VM(s){Tl().removeItem(s)}Mi.removeItem=VM;function GM(s,e){const t=Tl().getItem(s);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(n=>e(n))}Mi.getItem=GM;var Di=It&&It.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})},_s=It&&It.__classPrivateFieldGet||function(s,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?s!==e||!n:!e.has(s))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(s):n?n.value:e.get(s)},rr=It&&It.__classPrivateFieldSet||function(s,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?s!==e||!i:!e.has(s))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(s,t):i?i.value=t:e.set(s,t),t},Ao,Yc,di,To;Object.defineProperty(Rr,"__esModule",{value:!0});Rr.Auth=void 0;const tc=Mi,WM=br;class $M{constructor(e){this.http=e,this.settings={path:"/auth",key:"colyseus-auth-token"},Ao.set(this,!1),Yc.set(this,void 0),di.set(this,void 0),To.set(this,(0,WM.createNanoEvents)()),(0,tc.getItem)(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=_s(this,To,"f").on("change",e);return _s(this,Ao,"f")||rr(this,Yc,new Promise((n,i)=>{this.getUserData().then(r=>{this.emitChange(Object.assign(Object.assign({},r),{token:this.token}))}).catch(r=>{this.emitChange({user:null,token:void 0})}).finally(()=>{n()})}),"f"),rr(this,Ao,!0,"f"),t}getUserData(){return Di(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(e,t,n){return Di(this,void 0,void 0,function*(){const i=(yield this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(i),i})}signInWithEmailAndPassword(e,t){return Di(this,void 0,void 0,function*(){const n=(yield this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n})}signInAnonymously(e){return Di(this,void 0,void 0,function*(){const t=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t})}sendPasswordResetEmail(e){return Di(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data})}signInWithProvider(e,t={}){return Di(this,void 0,void 0,function*(){return new Promise((n,i)=>{const r=t.width||480,o=t.height||768,a=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,l=this.http.client.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),u=screen.width/2-r/2,h=screen.height/2-o/2;rr(this,di,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+r+", height="+o+", top="+h+", left="+u),"f");const f=_=>{_.data.user===void 0&&_.data.token===void 0||(clearInterval(d),_s(this,di,"f").close(),rr(this,di,void 0,"f"),window.removeEventListener("message",f),_.data.error!==void 0?i(_.data.error):(n(_.data),this.emitChange(_.data)))},d=setInterval(()=>{(!_s(this,di,"f")||_s(this,di,"f").closed)&&(rr(this,di,void 0,"f"),i("cancelled"),window.removeEventListener("message",f))},200);window.addEventListener("message",f)})})}signOut(){return Di(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?(0,tc.removeItem)(this.settings.key):(0,tc.setItem)(this.settings.key,e.token)),_s(this,To,"f").emit("change",e)}}Rr.Auth=$M;Ao=new WeakMap,Yc=new WeakMap,di=new WeakMap,To=new WeakMap;var sa={};Object.defineProperty(sa,"__esModule",{value:!0});sa.discordURLBuilder=void 0;function XM(s){var e;const t=((e=window?.location)===null||e===void 0?void 0:e.hostname)||"localhost",n=s.hostname.split("."),i=!s.hostname.includes("trycloudflare.com")&&!s.hostname.includes("discordsays.com")&&n.length>2?`/${n[0]}`:"";return s.pathname.startsWith("/.proxy")?`${s.protocol}//${t}${i}${s.pathname}${s.search}`:`${s.protocol}//${t}/.proxy/colyseus${i}${s.pathname}${s.search}`}sa.discordURLBuilder=XM;var Fn=It&&It.__awaiter||function(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})},nc;Object.defineProperty(Bs,"__esModule",{value:!0});Bs.Client=Bs.MatchMakeError=void 0;const jM=ea,qM=Tr,KM=ia,YM=Rr,ZM=sa;class ra extends Error{constructor(e,t){super(e),this.code=t,Object.setPrototypeOf(this,ra.prototype)}}Bs.MatchMakeError=ra;const yu=typeof window<"u"&&typeof((nc=window?.location)===null||nc===void 0?void 0:nc.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";class JM{constructor(e=yu,t){var n,i;if(typeof e=="string"){const r=e.startsWith("/")?new URL(e,yu):new URL(e),o=r.protocol==="https:"||r.protocol==="wss:",a=Number(r.port||(o?443:80));this.settings={hostname:r.hostname,pathname:r.pathname,port:a,secure:o}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new KM.HTTP(this,t?.headers||{}),this.auth=new YM.Auth(this.http),this.urlBuilder=t?.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((i=(n=window?.location)===null||n===void 0?void 0:n.hostname)===null||i===void 0)&&i.includes("discordsays.com"))&&(this.urlBuilder=ZM.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(e,t={},n){return Fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinOrCreate",e,t,n)})}create(e,t={},n){return Fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("create",e,t,n)})}join(e,t={},n){return Fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("join",e,t,n)})}joinById(e,t={},n){return Fn(this,void 0,void 0,function*(){return yield this.createMatchMakeRequest("joinById",e,t,n)})}reconnect(e,t){return Fn(this,void 0,void 0,function*(){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,i]=e.split(":");if(!n||!i)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",n,{reconnectionToken:i},t)})}getAvailableRooms(e=""){return Fn(this,void 0,void 0,function*(){return(yield this.http.get(`matchmake/${e}`,{headers:{Accept:"application/json"}})).data})}consumeSeatReservation(e,t,n){return Fn(this,void 0,void 0,function*(){const i=this.createRoom(e.room.name,t);i.roomId=e.room.roomId,i.sessionId=e.sessionId;const r={sessionId:i.sessionId};e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken);const o=n||i;return i.connect(this.buildEndpoint(e.room,r),e.devMode&&(()=>Fn(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${i.roomId}'...`);let a=0,c=8;const l=()=>Fn(this,void 0,void 0,function*(){a++;try{yield this.consumeSeatReservation(e,t,o),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${i.roomId}'`)}catch{a<c?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${a} out of ${c})`),setTimeout(l,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(l,2e3)})),o,this.http.headers),new Promise((a,c)=>{const l=(u,h)=>c(new jM.ServerError(u,h));o.onError.once(l),o.onJoin.once(()=>{o.onError.remove(l),a(o)})})})}createMatchMakeRequest(e,t,n={},i,r){return Fn(this,void 0,void 0,function*(){const o=(yield this.http.post(`matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).data;if(o.error)throw new ra(o.error,o.code);return e==="reconnect"&&(o.reconnectionToken=n.reconnectionToken),yield this.consumeSeatReservation(o,i,r)})}createRoom(e,t){return new qM.Room(e,t)}buildEndpoint(e,t={}){const n=[];for(const o in t)t.hasOwnProperty(o)&&n.push(`${o}=${t[o]}`);let i=this.settings.secure?"wss://":"ws://";e.publicAddress?i+=`${e.publicAddress}`:i+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const r=`${i}/${e.processId}/${e.roomId}?${n.join("&")}`;return this.urlBuilder?this.urlBuilder(new URL(r)):r}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`,n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}}Bs.Client=JM;var oa={};Object.defineProperty(oa,"__esModule",{value:!0});oa.SchemaSerializer=void 0;const Mu=If;class QM{setState(e){return this.state.decode(e)}getState(){return this.state}patch(e){return this.state.decode(e)}teardown(){var e,t;(t=(e=this.state)===null||e===void 0?void 0:e.$changes)===null||t===void 0||t.root.clearRefs()}handshake(e,t){this.state?new Mu.Reflection().decode(e,t):this.state=Mu.Reflection.decode(e,t)}}oa.SchemaSerializer=QM;var aa={};Object.defineProperty(aa,"__esModule",{value:!0});aa.NoneSerializer=void 0;class eS{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}aa.NoneSerializer=eS;(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.SchemaSerializer=s.registerSerializer=s.Auth=s.Room=s.ErrorCode=s.Protocol=s.MatchMakeError=s.Client=void 0;var e=Bs;Object.defineProperty(s,"Client",{enumerable:!0,get:function(){return e.Client}}),Object.defineProperty(s,"MatchMakeError",{enumerable:!0,get:function(){return e.MatchMakeError}});var t=wl;Object.defineProperty(s,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),Object.defineProperty(s,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}});var n=Tr;Object.defineProperty(s,"Room",{enumerable:!0,get:function(){return n.Room}});var i=Rr;Object.defineProperty(s,"Auth",{enumerable:!0,get:function(){return i.Auth}});const r=oa;Object.defineProperty(s,"SchemaSerializer",{enumerable:!0,get:function(){return r.SchemaSerializer}});const o=aa,a=$i;Object.defineProperty(s,"registerSerializer",{enumerable:!0,get:function(){return a.registerSerializer}}),(0,a.registerSerializer)("schema",r.SchemaSerializer),(0,a.registerSerializer)("none",o.NoneSerializer)})(Rf);const tS=.12,nS=.25;class iS{constructor(e){this.room=null,this.remotes=new Map,this.connected=!1,this.myId="",this.serverScore=0,this.onHorn=()=>{},this.onCopAggro=()=>{},this.onCopOpen=()=>{},this.onCopReply=()=>{},this.onCopVerdict=()=>{},this.getSpawn=null,this.pending=[],this.unacked=[],this.scratch=jc(),this.lastName="",this.lastCar=0,this.reconnectTimer=0,this.map=e}async connect(e,t,n,i){this.lastName=e,this.lastCar=t;try{const r=location.protocol==="https:"?"wss":"ws",a=location.port==="5173"||location.port==="5174"?`${r}://${location.hostname||"localhost"}:2567`:`${r}://${location.host}`,c=new Rf.Client(a);return this.room=await c.joinOrCreate("drift",{name:e,car:t,sx:n,sz:i}),this.myId=this.room.sessionId,this.connected=!0,this.room.onMessage("horn",l=>this.onHorn(l.id)),this.room.onMessage("cop:aggro",l=>this.onCopAggro(l.id)),this.room.onMessage("cop:open",l=>this.onCopOpen(l)),this.room.onMessage("cop:reply",l=>this.onCopReply(l)),this.room.onMessage("cop:verdict",l=>this.onCopVerdict(l.id,l.verdict)),this.room.onLeave(()=>{this.connected=!1,this.room=null,this.remotes.clear(),this.unacked=[],this.pending=[],this.scheduleReconnect()}),!0}catch(r){return console.warn("[net] offline mode:",r),!1}}scheduleReconnect(){this.reconnectTimer||(this.reconnectTimer=window.setTimeout(async()=>{this.reconnectTimer=0;const e=this.getSpawn?.();await this.connect(this.lastName,this.lastCar,e?.x,e?.z)||this.scheduleReconnect()},2e3))}sendInput(e){!this.room||!this.connected||(this.unacked.push({...e}),this.unacked.length>240&&this.unacked.splice(0,this.unacked.length-240),this.pending.push(e),this.pending.length>=2&&(this.room.send("input",this.pending),this.pending=[]))}keepalive(){!this.room||!this.connected||this.room.send("input",[])}horn(){this.room?.send("horn")}copChat(e){this.room?.send("cop:chat",e)}reconcile(e){if(!this.room||!this.connected)return;const t=this.room.state?.players?.get?.(this.myId);if(!t)return;const n=t.lastSeq;for(;this.unacked.length&&this.unacked[0].seq<=n;)this.unacked.shift();const i=this.scratch;i.x=t.x,i.z=t.z,i.yaw=t.yaw,i.vx=t.vx,i.vz=t.vz,i.yawRate=t.yawRate,i.gear=t.gear,i.rpm=t.rpm,i.shiftCut=0,i.aLongSmooth=e.aLongSmooth,i.slipAngle=t.slip,i.speed=t.speed,i.slipFront=e.slipFront,i.slipRear=e.slipRear,i.surfFL=e.surfFL,i.surfFR=e.surfFR,i.surfRL=e.surfRL,i.surfRR=e.surfRR,i.wallHit=0;for(const o of this.unacked)bf(i,o,mi,Rn,this.map.surfaceAt,this.map.colliders,this.map.heightAt);const r=Math.hypot(i.x-e.x,i.z-e.z);if(r>4)qc(i,e);else if(r>.05){e.x+=(i.x-e.x)*.15,e.z+=(i.z-e.z)*.15;let a=i.yaw-e.yaw;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;e.yaw+=a*.15,e.vx+=(i.vx-e.vx)*.15,e.vz+=(i.vz-e.vz)*.15,e.yawRate+=(i.yawRate-e.yawRate)*.15}this.serverScore=t.score}sample(e){if(!this.room)return;const t=this.room.state?.players;if(!t?.forEach)return;const n=new Set;t.forEach((i,r)=>{if(n.add(r),r===this.myId)return;let o=this.remotes.get(r);o||(o={id:r,name:i.name,car:i.car??0,snapshots:[],brake:!1,handbrake:!1,headlights:!0,drifting:!1,score:0,rpm:900,bot:i.bot??0,copMode:0,pinT:0,copTarget:"",x:i.x,z:i.z,yaw:i.yaw,speed:0,slip:0},this.remotes.set(r,o));const a=o.snapshots[o.snapshots.length-1];(!a||a.x!==i.x||a.z!==i.z||a.yaw!==i.yaw)&&(o.snapshots.push({t:e,x:i.x,z:i.z,yaw:i.yaw,vx:i.vx??0,vz:i.vz??0,speed:i.speed,slip:i.slip}),o.snapshots.length>20&&o.snapshots.shift()),o.brake=i.brake,o.handbrake=i.handbrake,o.headlights=i.headlights,o.drifting=i.drifting,o.score=i.score,o.rpm=i.rpm,o.bot=i.bot??0,o.copMode=i.copMode??0,o.pinT=i.pinT??0,o.copTarget=i.copTarget??""});for(const i of[...this.remotes.keys()])n.has(i)||this.remotes.delete(i)}interpolate(e){const t=e-tS;for(const n of this.remotes.values()){const i=n.snapshots;if(!i.length)continue;const r=i[i.length-1];let o=i[0],a=r;for(let c=0;c<i.length-1;c++)if(i[c].t<=t&&i[c+1].t>=t){o=i[c],a=i[c+1];break}if(r.t<=t){const c=Math.min(t-r.t,nS);n.x=r.x+r.vx*c,n.z=r.z+r.vz*c,n.yaw=r.yaw}else{const c=Math.max(0,Math.min(1,(t-o.t)/Math.max(a.t-o.t,1e-4)));n.x=o.x+(a.x-o.x)*c,n.z=o.z+(a.z-o.z)*c;let l=a.yaw-o.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;n.yaw=o.yaw+l*c}n.speed=r.speed,n.slip=r.slip}}}const sS=3;let Zc=El,Jc="driver";function rS(){return new URLSearchParams(location.search).has("auto")?Promise.resolve():new Promise(s=>{const e=document.createElement("div");e.id="join",e.innerHTML=`
      <div class="spacer"></div>
      <div class="row"><span>NAME</span><input id="name" maxlength="16" placeholder="driver" /></div>
      <div class="cars">${$c.map((i,r)=>`<button data-i="${r}" class="${r===El?"sel":""}"><i style="background:${i.swatch}"></i>${i.label}</button>`).join("")}</div>
      <button id="start">DRIVE</button>
      <div class="status" id="join-status"></div>
    `,document.body.appendChild(e),e.querySelectorAll(".cars button").forEach(i=>{i.addEventListener("click",()=>{e.querySelectorAll(".cars button").forEach(r=>r.classList.remove("sel")),i.classList.add("sel"),Zc=parseInt(i.dataset.i)})});const t=()=>{Jc=document.getElementById("name").value.trim()||"driver",e.remove(),window.removeEventListener("keydown",n),s()},n=i=>{i.code==="Enter"&&t()};document.getElementById("start").addEventListener("click",t),window.addEventListener("keydown",n)})}async function oS(){await rS();const s=document.getElementById("game"),e=new Yv(s,560),t=new Zu;t.fog=new dl(nx,18,85);const n=new Qt(62,window.innerWidth/window.innerHeight,.3,950);window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()}),t.add(sx()),t.add(new hf(new Me(.66,.7,.9),3.4));const i=new yl(new Me(.6,.65,.95),2.4);i.position.set(30,60,-40),t.add(i);const r=tx(),o=new zo(r);await o.build(),t.add(o.group),t.add(By(r.lamps,r.mistAt,r.heightAt));const a=r.props.filter(Y=>Y.kind==="parked");for(const Y of a){const ae=await Ja(0,Y.variant);ae.group.position.set(Y.x,r.heightAt(Y.x,Y.z),Y.z),ae.group.rotation.y=Y.rot;const Pe=new Me;o.lampTintAt(Y.x,Y.z,Pe);for(const Ke of ae.tintables)Ke.color.copy(Pe);t.add(ae.group)}const c=await Ja(Zc);t.add(c.group);const l=new uu(Zh,hr);t.add(l.group);const u=new Gy;t.add(u.group);const h=new Wy;t.add(h.mesh);const f=new $y,d=new qy;d.onExtra=(Y,ae)=>{const Pe=t.fog;Y==="fogNear"&&(Pe.near=ae),Y==="fogFar"&&(Pe.far=ae),Y==="vignette"&&(e.blitMat.uniforms.uVignette.value=ae),Y==="crush"&&(e.blitMat.uniforms.uCrush.value=ae),Y==="dither"&&(e.blitMat.uniforms.uDither.value=ae)};const _=new Ky;_.init().catch(Y=>console.warn("audio init failed",Y));const v=new iS(r),g=new URLSearchParams(location.search).get("spawn")?.split(",").map(Number),m=await v.connect(Jc,Zc,g?.[0],g?.[1]);console.log("[net]",m?"connected to room":"offline single-player"),v.onHorn=Y=>{const ae=v.remotes.get(Y);if(!ae)return _.horn();_.horn(Math.max(0,1-Math.hypot(ae.x-Q.x,ae.z-Q.z)/85))};const w=new Map,M=new Set,E=document.createElement("div");E.style.cssText="position:fixed;inset:0;pointer-events:none;font-family:var(--pix);font-size:11px;color:#cfd2e8;text-shadow:1px 1px 0 #000",document.body.appendChild(E);async function D(Y){if(!(w.has(Y.id)||M.has(Y.id))){M.add(Y.id);try{const ae=Y.bot===1,Pe=ae?await Oy():await Ja(Y.car),Ke=new uu(Zh,hr);t.add(Pe.group),t.add(Ke.group);const V=document.createElement("div");V.style.position="absolute",V.textContent=Y.name,ae&&(V.style.color="#8fb4ff"),E.appendChild(V);const ue={model:Pe,rig:Ke,tag:V};ae&&(ue.bar=new Vy(hr),t.add(ue.bar.group)),w.set(Y.id,ue)}catch(ae){console.warn("[net] remote model load failed",Y.id,ae)}finally{M.delete(Y.id)}}}const I=new jy,P=document.createElement("div");P.id="cop-pin",P.innerHTML="<u>PULLING YOU OVER</u><div><i></i></div>";const k=P.querySelector("i");document.body.appendChild(P);let R=!1;v.onCopAggro=Y=>{_.sirenChirp(),Y===v.myId&&f.toast("POLICE — PULL OVER","bad")};let A=0;v.onCopOpen=Y=>{R=!0;for(const ae of Object.keys(S))S[ae]=!1;_.setInterrogation(!0),_.copSting("open"),A=Y.disposition,I.start(Y,ae=>v.copChat(ae))},v.onCopReply=Y=>{_.copSting(Y.disposition>=A?"happy":"annoyed"),A=Y.disposition,I.say(Y)},v.onCopVerdict=(Y,ae)=>{Y===v.myId&&(I.verdict(ae,Math.floor(Xe.total)),_.setInterrogation(!1),ae==="arrest"&&(Xe.total=0,Xe.chain=0,Xe.multiplier=1),R=!1)};const S={left:!1,right:!1,throttle:!1,brake:!1,handbrake:!1};let L=!0,B=new URLSearchParams(location.search).has("pilot"),W=-1,$=0,X=0,K=0;const H=new Jy,J={KeyW:"throttle",ArrowUp:"throttle",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"handbrake"};window.addEventListener("keydown",Y=>{const ae=J[Y.code];ae&&(ae==="handbrake"&&!S.handbrake&&_.handbrakePull(),S[ae]=!0,Y.preventDefault()),Y.code==="KeyL"&&(L=!L),Y.code==="KeyC"&&(K=(K+1)%3),Y.code==="KeyM"&&_.toggleRadio(),Y.code==="KeyT"&&(K=K===3?0:3),Y.code==="KeyP"&&(B=!B),Y.code==="F3"&&(qe=!qe,ht.style.display=qe?"block":"none"),Y.code==="KeyH"&&(_.horn(),v.horn()),Y.code==="KeyR"&&Oe()}),window.addEventListener("keyup",Y=>{const ae=J[Y.code];ae&&(S[ae]=!1)});const se=new URLSearchParams(location.search).get("spawn")?.split(",").map(Number),fe=se?.[0]??r.spawn.x,Ae=se?.[1]??r.spawn.z,Q=jc(fe,Ae,r.spawn.yaw);v.getSpawn=()=>({x:Q.x,z:Q.z});let te=0,he=0,Se=0,we=0,Ve=0,We=0,qe=!1;const ht=document.createElement("div");ht.style.cssText="position:fixed;top:6px;left:6px;z-index:60;display:none;font-family:var(--pix),monospace;font-size:11px;line-height:1.5;color:#9fe08f;text-shadow:1px 1px 0 #000;white-space:pre;pointer-events:none",document.body.appendChild(ht),setInterval(()=>{document.body.dataset.dbg=JSON.stringify({speed:+Q.speed.toFixed(2),rpm:Math.round(Q.rpm),gear:Q.gear,raw:{...S},surf:[Q.surfFL,Q.surfRL],wallHit:+Q.wallHit.toFixed(2),x:+Q.x.toFixed(1),z:+Q.z.toFixed(1),yaw:+Q.yaw.toFixed(2),slip:+Q.slipAngle.toFixed(3),draws:e.renderer.info.render.calls,tris:e.renderer.info.render.triangles,fps:te,ms:+he.toFixed(2),worstMs:+Se.toFixed(2),cop:(()=>{const Y=[...v.remotes.values()].find(ae=>ae.bot===1);return Y?{x:+Y.x.toFixed(1),z:+Y.z.toFixed(1),mode:Y.copMode,pinT:+Y.pinT.toFixed(2),target:Y.copTarget===v.myId?"me":Y.copTarget}:null})(),frozen:R})},500);const F=jc();qc(Q,F);const Xe=Qy();let tt=0,lt=-10;function Oe(){if(ut()-lt<3)return;lt=ut();let Y=r.tiles[0],ae=1/0;for(const Pe of r.tiles){const Ke=(Pe.x-Q.x)**2+(Pe.z-Q.z)**2;Ke<ae&&(ae=Ke,Y=Pe)}Q.x=Y.x,Q.z=Y.z,Q.yaw=Y.dirs.n||Y.dirs.s?0:Math.PI/2,Q.vx=Q.vz=Q.yawRate=0,Xe.chain=0,Xe.multiplier=1}function ut(){return performance.now()/1e3}const Be=new N(Q.x,4,Q.z-10);let Ge=Q.yaw;function U(Y,ae,Pe,Ke,V){let ie=Pe+Ke*.55-Ge;for(;ie>Math.PI;)ie-=Math.PI*2;for(;ie<-Math.PI;)ie+=Math.PI*2;Ge+=ie*Math.min(1,V*4.2);const oe=t.fog;if(K===3){oe.near=900,oe.far=2e3,n.position.set(Y,220,ae),n.up.set(0,0,-1),n.lookAt(Y,0,ae),n.up.set(0,1,0);return}oe.near=d.extras.fogNear,oe.far=d.extras.fogFar;const _e=K===1?6.2:8.6,ze=K===1?2.2:3.1;if(K===2){const it=r.heightAt(Y,ae);n.position.set(Y+Math.sin(Pe)*.8,it+1.25,ae+Math.cos(Pe)*.8),n.lookAt(Y+Math.sin(Pe)*20,r.heightAt(Y+Math.sin(Pe)*20,ae+Math.cos(Pe)*20)+1,ae+Math.cos(Pe)*20);return}const Qe=Y-Math.sin(Ge)*_e,pt=ae-Math.cos(Ge)*_e,yt=r.heightAt(Y,ae)+ze;Be.x+=(Qe-Be.x)*Math.min(1,V*7),Be.z+=(pt-Be.z)*Math.min(1,V*7),Be.y+=(yt-Be.y)*Math.min(1,V*5),n.position.copy(Be),n.lookAt(Y+Math.sin(Pe)*3.5,r.heightAt(Y,ae)+1.1,ae+Math.cos(Pe)*3.5)}const b=new Me,Z=new Me,de=new N,pe=new N,le=new N,Fe=new N(0,1,0),ye=new Ct,Ce=new Ct,Je=new N;let me=0,Ee=performance.now(),ke={seq:0,steer:0,throttle:0,brake:0,handbrake:!1,headlights:!0};function $e(){requestAnimationFrame($e);const Y=performance.now();let ae=(Y-Ee)/1e3;if(Ee=Y,we++,Ve+=ae,ae>We&&(We=ae),Ve>=.5){if(te=Math.round(we/Ve),he=Ve/we*1e3,Se=We*1e3,qe){const Mt=e.renderer.info;ht.textContent=`${te} fps  avg ${he.toFixed(1)}ms  worst ${Se.toFixed(1)}ms
draws ${Mt.render.calls}  tris ${(Mt.render.triangles/1e3).toFixed(0)}k
geom ${Mt.memory.geometries}  tex ${Mt.memory.textures}`}we=0,Ve=0,We=0}for(ae>.25&&(ae=.25),me+=ae;me>=Rn;){me-=Rn,qc(Q,F);let Mt=H.update(S,Q,mi,Rn),Ye=H.shapeThrottle(S.throttle,mi,Rn),ot=S.brake?1:0;if(B&&(S.left||S.right||S.throttle||S.brake||S.handbrake)&&(B=!1),B){const ve=r.loopOrder;if(W<0){let G=1/0;for(let z=0;z<ve.length;z++){const ne=(ve[z].x-Q.x)**2+(ve[z].z-Q.z)**2;ne<G&&(G=ne,W=z)}}let Re=W,et=1/0;for(let G=0;G<=3;G++){const z=(W+G)%ve.length,ne=(ve[z].x-Q.x)**2+(ve[z].z-Q.z)**2;ne<et&&(et=ne,Re=z)}W=Re,Math.abs(Q.speed)<1&&X<=0?$+=Rn:$=Math.max(0,$-Rn),$>1.5&&(X=1.4,$=0);const T=ve[(Re+2)%ve.length];let j=Math.atan2(T.x-Q.x,T.z-Q.z)-Q.yaw;for(;j>Math.PI;)j-=Math.PI*2;for(;j<-Math.PI;)j+=Math.PI*2;if(X>0)X-=Rn,Ye=0,ot=1,Mt=-Math.sign(j);else{Mt=Math.max(-1,Math.min(1,j*1.6));const z=[1,2,3].some(ne=>ve[(Re+ne)%ve.length].piece!=="straight")?11:26;Ye=Math.abs(Q.speed)<z?1:0,ot=Math.abs(Q.speed)>z+4||Math.abs(j)>.9&&Math.abs(Q.speed)>10?.8:0}}R&&(Mt=0,Ye=0,ot=0),ke={seq:tt++,steer:Mt,throttle:Ye,brake:ot,handbrake:R?!1:S.handbrake,headlights:L},bf(Q,ke,mi,Rn,r.surfaceAt,r.colliders,r.heightAt);for(const ve of v.remotes.values())Zy(Q,{x:ve.x,z:ve.z,yaw:ve.yaw,vx:Math.sin(ve.yaw)*ve.speed,vz:Math.cos(ve.yaw)*ve.speed});sM(Xe,Q,Rn),R?tt%60===0&&v.keepalive():v.sendInput(ke),Q.wallHit>2.5&&_.crash(Q.wallHit),tt%30===0&&f.setPlayers([{name:Jc,score:Math.floor(Xe.total),me:!0},...[...v.remotes.values()].filter(ve=>ve.bot!==1).map(ve=>({name:ve.name,score:ve.score,me:!1}))]);const ln=Math.abs(Q.slipAngle)>.18&&Math.abs(Q.speed)>5,Sn=Q.wheelspin>.12&&ke.throttle>.3,x=Q.surfRL!=="asphalt"&&Q.surfRL!=="curb",p=Q.surfRL!=="offroad"&&Q.surfRR!=="offroad",y=Math.sin(Q.yaw),C=Math.cos(Q.yaw),q=Math.cos(Q.yaw),re=-Math.sin(Q.yaw);if((ln||Sn)&&p){const ve=mi.cgToRear*.9,Re=r.heightAt(Q.x,Q.z);h.addSegment(de.set(Q.x-y*ve-q*.8,Re,Q.z-C*ve-re*.8),pe.set(Q.x-y*ve+q*.8,Re,Q.z-C*ve+re*.8),Math.max(Math.abs(Q.slipAngle),.25+Q.wheelspin*.4))}else h.breakSegment();if((ln||Sn)&&tt%2===0){o.lampTintAt(Q.x,Q.z,b,.8);const ve=x,Re=mi.cgToRear,et=r.heightAt(Q.x,Q.z);for(const T of[-1,1])u.spawn(Q.x-y*Re+q*T*.8+(Math.random()-.5)*.4,et+.25,Q.z-C*Re+re*T*.8+(Math.random()-.5)*.4,b,ve)}else Q.surfRL==="offroad"&&Math.abs(Q.speed)>8&&tt%4===0&&(o.lampTintAt(Q.x,Q.z,b,.8),u.spawn(Q.x-y*1.6,r.heightAt(Q.x,Q.z)+.25,Q.z-C*1.6,b,!0))}const Pe=me/Rn,Ke=F.x+(Q.x-F.x)*Pe,V=F.z+(Q.z-F.z)*Pe;let ue=Q.yaw-F.yaw;for(;ue>Math.PI;)ue-=Math.PI*2;for(;ue<-Math.PI;)ue+=Math.PI*2;const ie=F.yaw+ue*Pe,oe=r.heightAt(Ke,V),_e=r.heightAt(Ke+Math.sin(ie)*1.6,V+Math.cos(ie)*1.6),ze=r.heightAt(Ke-Math.sin(ie)*1.6,V-Math.cos(ie)*1.6),Qe=Math.atan2(_e-ze,3.2);le.set(Math.cos(ie),0,-Math.sin(ie)),ye.setFromAxisAngle(le,-Qe),ye.multiply(Ce.setFromAxisAngle(Fe,ie)),c.group.position.set(Ke,oe,V),c.group.quaternion.copy(ye),l.group.position.set(Ke,oe,V),l.group.quaternion.copy(ye),o.lampTintAt(Ke,V,b,0);for(const Mt of c.tintables)Mt.color.setRGB(1.8+b.r*2.6,1.8+b.g*2.6,1.8+b.b*2.6);const pt=r.mistAt(Ke,V);l.update(L,S.brake&&Q.speed>1,Q.speed<-.5,pt),Bi.uMist.value=d.extras.mist*(.4+pt*.8),u.update(ae),U(Ke,V,ie,Q.slipAngle,ae),f.update(Q,Xe,ae),_.update(Q,ke.throttle,Xe.drifting,ae);let yt=1/0,it=!1,wt=!1;if(v.connected){v.reconcile(Q);const Mt=performance.now()/1e3;v.sample(Mt),v.interpolate(Mt);for(const Ye of v.remotes.values()){const ot=w.get(Ye.id);if(!ot){D(Ye);continue}const ln=r.heightAt(Ye.x,Ye.z);ot.model.group.position.set(Ye.x,ln,Ye.z),ot.model.group.rotation.y=Ye.yaw,ot.rig.group.position.set(Ye.x,ln,Ye.z),ot.rig.group.rotation.y=Ye.yaw,o.lampTintAt(Ye.x,Ye.z,Z,0);for(const x of ot.model.tintables)x.color.setRGB(1.8+Z.r*2.6,1.8+Z.g*2.6,1.8+Z.b*2.6);ot.rig.update(Ye.headlights,Ye.brake,!1,r.mistAt(Ye.x,Ye.z)),ot.bar&&(ot.bar.update(Ye.copMode>=1,ae),ot.bar.group.position.set(Ye.x,ln,Ye.z),ot.bar.group.rotation.y=Ye.yaw,yt=Math.hypot(Ye.x-Ke,Ye.z-V),it=Ye.copMode===1,Ye.pinT>0&&Ye.copTarget===v.myId&&(P.style.display="block",k.style.width=Math.min(100,Ye.pinT/sS*100)+"%",k.style.background=ot.bar.phase()?"#3355ff":"#ff2b2b",wt=!0));const Sn=Je.set(Ye.x,r.heightAt(Ye.x,Ye.z)+2.2,Ye.z).project(n);Sn.z<1?(ot.tag.style.display="block",ot.tag.style.left=(Sn.x*.5+.5)*window.innerWidth-20+"px",ot.tag.style.top=(-Sn.y*.5+.5)*window.innerHeight+"px"):ot.tag.style.display="none"}for(const[Ye,ot]of w)v.remotes.has(Ye)||(t.remove(ot.model.group),t.remove(ot.rig.group),ot.bar&&t.remove(ot.bar.group),ot.tag.remove(),w.delete(Ye))}wt||(P.style.display="none"),_.updateSiren(it,yt),I.tick(),e.render(t,n)}requestAnimationFrame($e)}oS().catch(s=>{console.error("BOOT FAILED:",s),document.body.insertAdjacentHTML("beforeend",`<div style="position:fixed;top:8px;left:8px;color:#ff7a6b;font-family:monospace;z-index:99">${String(s)}</div>`)});
