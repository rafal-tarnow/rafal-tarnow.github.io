var wf=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var AE=wf($=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="161",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,$o=1,Cf=2,_u=1,Lf=2,Rn=3,$n=0,zt=1,Rt=2,Zn=0,Ji=1,Qo=2,el=3,tl=4,Pf=5,fi=100,Uf=101,Df=102,nl=103,il=104,Ff=200,Of=201,If=202,Nf=203,no=204,io=205,kf=206,Bf=207,Gf=208,zf=209,Hf=210,Vf=211,Wf=212,Xf=213,qf=214,Yf=0,Zf=1,Kf=2,Gs=3,jf=4,Jf=5,$f=6,Qf=7,yu=0,ed=1,td=2,Kn=0,nd=1,id=2,rd=3,sd=4,ad=5,od=6,Su=300,tr=301,nr=302,ro=303,so=304,ea=306,ao=1e3,nn=1001,oo=1002,Nt=1003,rl=1004,pr=1005,Gt=1006,da=1007,gi=1008,jn=1009,ld=1010,cd=1011,Ao=1012,bu=1013,qn=1014,Cn=1015,Tr=1016,Eu=1017,Mu=1018,vi=1020,ud=1021,rn=1023,hd=1024,fd=1025,xi=1026,ir=1027,dd=1028,Tu=1029,pd=1030,Au=1031,wu=1033,pa=33776,ma=33777,ga=33778,va=33779,sl=35840,al=35841,ol=35842,ll=35843,Ru=36196,cl=37492,ul=37496,hl=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,vl=37814,xl=37815,_l=37816,yl=37817,Sl=37818,bl=37819,El=37820,Ml=37821,xa=36492,Tl=36494,Al=36495,md=36283,wl=36284,Rl=36285,Cl=36286,Cu=3e3,_i=3001,gd=3200,vd=3201,xd=0,_d=1,$t="",vt="srgb",Fn="srgb-linear",wo="display-p3",ta="display-p3-linear",zs="linear",lt="srgb",Hs="rec709",Vs="p3",Ci=7680,Ll=519,yd=512,Sd=513,bd=514,Lu=515,Ed=516,Md=517,Td=518,Ad=519,Pl=35044,Ul="300 es",lo=1035,Ln=2e3,Ws=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const yr=Math.PI/180,Ar=180/Math.PI;function Ai(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Ro(n,e){return(n%e+e)%e}function wd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Rd(n,e,t){return n!==e?(t-n)/(e-n):0}function Sr(n,e,t){return(1-t)*n+t*e}function Cd(n,e,t,i){return Sr(n,e,1-Math.exp(-t*i))}function Ld(n,e=1){return e-Math.abs(Ro(n,e*2)-e)}function Pd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ud(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Dd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fd(n,e){return n+Math.random()*(e-n)}function Od(n){return n*(.5-Math.random())}function Id(n){n!==void 0&&(Dl=n);let e=Dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(n){return n*yr}function kd(n){return n*Ar}function co(n){return(n&n-1)===0&&n!==0}function Bd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xs(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gd(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Co={DEG2RAD:yr,RAD2DEG:Ar,generateUUID:Ai,clamp:Mt,euclideanModulo:Ro,mapLinear:wd,inverseLerp:Rd,lerp:Sr,damp:Cd,pingpong:Ld,smoothstep:Pd,smootherstep:Ud,randInt:Dd,randFloat:Fd,randFloatSpread:Od,seededRandom:Id,degToRad:Nd,radToDeg:kd,isPowerOfTwo:co,ceilPowerOfTwo:Bd,floorPowerOfTwo:Xs,setQuaternionFromProperEuler:Gd,normalize:Ot,denormalize:qi};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],p=r[3],m=r[6],b=r[1],x=r[4],S=r[7],P=r[2],R=r[5],T=r[8];return s[0]=a*v+o*b+l*P,s[3]=a*p+o*x+l*R,s[6]=a*m+o*S+l*T,s[1]=c*v+u*b+f*P,s[4]=c*p+u*x+f*R,s[7]=c*m+u*S+f*T,s[2]=h*v+d*b+g*P,s[5]=h*p+d*x+g*R,s[8]=h*m+d*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new $e;function Pu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zd(){const n=wr("canvas");return n.style.display="block",n}const Fl={};function $i(n){n in Fl||(Fl[n]=!0,console.warn(n))}const Ol=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[Fn]:{transfer:zs,primaries:Hs,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:lt,primaries:Hs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ta]:{transfer:zs,primaries:Vs,toReference:n=>n.applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ol)},[wo]:{transfer:lt,primaries:Vs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ol).convertLinearToSRGB()}},Hd=new Set([Fn,ta]),rt={enabled:!0,_workingColorSpace:Fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Hd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rs[e].toReference,r=rs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rs[n].primaries},getTransfer:function(n){return n===$t?zs:rs[n].transfer}};function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Uu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=wr("canvas")),Li.width=e.width,Li.height=e.height;const i=Li.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vd=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sa(r[a].image)):s.push(Sa(r[a]))}else s=Sa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Uu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class Bt extends Ti{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=nn,r=nn,s=Gt,a=gi,o=rn,l=jn,c=Bt.DEFAULT_ANISOTROPY,u=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ai(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_i?vt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ao:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ao:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?_i:Cu}set encoding(e){$i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?vt:$t}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Su;Bt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,P=(m+1)/2,R=(u+h)/4,T=(f+v)/4,D=(g+p)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=D/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends Ti{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&($i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_i?vt:$t),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Xd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fu extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qd extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*v,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,m*b);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const S=o*b;if(l=l*p+h*S,c=c*p+d*S,u=u*p+g*S,f=f*p+v*S,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new F,Nl=new bi;class Nr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(s,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ss.copy(i.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),as.subVectors(this.max,mr),Pi.subVectors(e.a,mr),Ui.subVectors(e.b,mr),Di.subVectors(e.c,mr),In.subVectors(Ui,Pi),Nn.subVectors(Di,Ui),ai.subVectors(Pi,Di);let t=[0,-In.z,In.y,0,-Nn.z,Nn.y,0,-ai.z,ai.y,In.z,0,-In.x,Nn.z,0,-Nn.x,ai.z,0,-ai.x,-In.y,In.x,0,-Nn.y,Nn.x,0,-ai.y,ai.x,0];return!Ea(t,Pi,Ui,Di,as)||(t=[1,0,0,0,1,0,0,0,1],!Ea(t,Pi,Ui,Di,as))?!1:(os.crossVectors(In,Nn),t=[os.x,os.y,os.z],Ea(t,Pi,Ui,Di,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new F,new F,new F,new F,new F,new F,new F,new F],Qt=new F,ss=new Nr,Pi=new F,Ui=new F,Di=new F,In=new F,Nn=new F,ai=new F,mr=new F,as=new F,os=new F,oi=new F;function Ea(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Yd=new Nr,gr=new F,Ma=new F;class na{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(Ma)),this.expandByPoint(gr.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new F,Ta=new F,ls=new F,kn=new F,Aa=new F,cs=new F,wa=new F;class Lo{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ta.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(Ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=kn.dot(this.direction),l=-kn.dot(ls),c=kn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ta).addScaledVector(ls,h),d}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,r,s){Aa.subVectors(t,e),cs.subVectors(i,e),wa.crossVectors(Aa,cs);let a=this.direction.dot(wa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(cs.crossVectors(kn,cs));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(kn));if(c<0||l+c>a)return null;const u=-o*kn.dot(wa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,g,v,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,v,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,Kd)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Bn.crossVectors(i,Wt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Bn.crossVectors(i,Wt)),Bn.normalize(),us.crossVectors(Wt,Bn),r[0]=Bn.x,r[4]=us.x,r[8]=Wt.x,r[1]=Bn.y,r[5]=us.y,r[9]=Wt.y,r[2]=Bn.z,r[6]=us.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],p=i[10],m=i[14],b=i[3],x=i[7],S=i[11],P=i[15],R=r[0],T=r[4],D=r[8],ee=r[12],_=r[1],A=r[5],q=r[9],Q=r[13],U=r[2],B=r[6],I=r[10],Y=r[14],W=r[3],X=r[7],Z=r[11],K=r[15];return s[0]=a*R+o*_+l*U+c*W,s[4]=a*T+o*A+l*B+c*X,s[8]=a*D+o*q+l*I+c*Z,s[12]=a*ee+o*Q+l*Y+c*K,s[1]=u*R+f*_+h*U+d*W,s[5]=u*T+f*A+h*B+d*X,s[9]=u*D+f*q+h*I+d*Z,s[13]=u*ee+f*Q+h*Y+d*K,s[2]=g*R+v*_+p*U+m*W,s[6]=g*T+v*A+p*B+m*X,s[10]=g*D+v*q+p*I+m*Z,s[14]=g*ee+v*Q+p*Y+m*K,s[3]=b*R+x*_+S*U+P*W,s[7]=b*T+x*A+S*B+P*X,s[11]=b*D+x*q+S*I+P*Z,s[15]=b*ee+x*Q+S*Y+P*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+v*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+m*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],b=f*p*c-v*h*c+v*l*d-o*p*d-f*l*m+o*h*m,x=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,S=u*v*c-g*f*c+g*o*d-a*v*d-u*o*m+a*f*m,P=g*f*l-u*v*l-g*o*h+a*v*h+u*o*p-a*f*p,R=t*b+i*x+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=b*T,e[1]=(v*h*s-f*p*s-v*r*d+i*p*d+f*r*m-i*h*m)*T,e[2]=(o*p*s-v*l*s+v*r*c-i*p*c-o*r*m+i*l*m)*T,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*T,e[4]=x*T,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*m+t*h*m)*T,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*m-t*l*m)*T,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*T,e[8]=S*T,e[9]=(g*f*s-u*v*s-g*i*d+t*v*d+u*i*m-t*f*m)*T,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*m+t*o*m)*T,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*T,e[12]=P*T,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*p+t*f*p)*T,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*p-t*o*p)*T,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,v=a*u,p=a*f,m=o*f,b=l*c,x=l*u,S=l*f,P=i.x,R=i.y,T=i.z;return r[0]=(1-(v+m))*P,r[1]=(d+S)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(h+m))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+x)*T,r[9]=(p-b)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const a=Fi.set(r[4],r[5],r[6]).length(),o=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,u=1/a,f=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ln){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(o===Ln)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ws)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ln){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,d=(i+r)*u;let g,v;if(o===Ln)g=(a+s)*f,v=-2*f;else if(o===Ws)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new F,en=new _t,Zd=new F(0,0,0),Kd=new F(1,1,1),Bn=new F,us=new F,Wt=new F,kl=new _t,Bl=new bi;class ia{constructor(e=0,t=0,i=0,r=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jd=0;const Gl=new F,Oi=new bi,Mn=new _t,hs=new F,vr=new F,Jd=new F,$d=new bi,zl=new F(1,0,0),Hl=new F(0,1,0),Vl=new F(0,0,1),Qd={type:"added"},ep={type:"removed"};class Ht extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new F,t=new ia,i=new bi,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new $e}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(Hl,e)}rotateZ(e){return this.rotateOnAxis(Vl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(Hl,e)}translateZ(e){return this.translateOnAxis(Vl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hs.copy(e):hs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(vr,hs,this.up):Mn.lookAt(hs,vr,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ep)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new F,Tn=new F,Ra=new F,An=new F,Ii=new F,Ni=new F,Wl=new F,Ca=new F,La=new F,Pa=new F;class mn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),Tn.subVectors(i,t),Ra.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Tn),l=tn.dot(Ra),c=Tn.dot(Tn),u=Tn.dot(Ra),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),Tn.subVectors(e,t),tn.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),tn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,i),Ni.subVectors(s,i),Ca.subVectors(e,i);const l=Ii.dot(Ca),c=Ni.dot(Ca);if(l<=0&&c<=0)return t.copy(i);La.subVectors(e,r);const u=Ii.dot(La),f=Ni.dot(La);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ii,a);Pa.subVectors(e,s);const d=Ii.dot(Pa),g=Ni.dot(Pa);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ni,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Wl.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Wl,o);const m=1/(p+v+h);return a=v*m,o=h*m,t.copy(i).addScaledVector(Ii,a).addScaledVector(Ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Ua(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Ro(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ua(a,s,e+1/3),this.g=Ua(a,s,e),this.b=Ua(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return rt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Mt(Ut.r*255,0,255))*65536+Math.round(Mt(Ut.g*255,0,255))*256+Math.round(Mt(Ut.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=vt){rt.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(fs);const i=Sr(Gn.h,fs.h,t),r=Sr(Gn.s,fs.s,t),s=Sr(Gn.l,fs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new tt;tt.NAMES=Iu;let tp=0;class kr extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Ji,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==$n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sn extends kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new F,ds=new he;class vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $i("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Nu extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ku extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class At extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let np=0;const jt=new _t,Da=new Ht,ki=new F,Xt=new Nr,xr=new Nr,Et=new F;class Dt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?ku:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Xt.min,xr.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,xr.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(xr.min),Xt.expandByPoint(xr.max))}Xt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Et.add(ki)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<o;_++)c[_]=new F,u[_]=new F;const f=new F,h=new F,d=new F,g=new he,v=new he,p=new he,m=new F,b=new F;function x(_,A,q){f.fromArray(r,_*3),h.fromArray(r,A*3),d.fromArray(r,q*3),g.fromArray(a,_*2),v.fromArray(a,A*2),p.fromArray(a,q*2),h.sub(f),d.sub(f),v.sub(g),p.sub(g);const Q=1/(v.x*p.y-p.x*v.y);isFinite(Q)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-v.y).multiplyScalar(Q),b.copy(d).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(Q),c[_].add(m),c[A].add(m),c[q].add(m),u[_].add(b),u[A].add(b),u[q].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let _=0,A=S.length;_<A;++_){const q=S[_],Q=q.start,U=q.count;for(let B=Q,I=Q+U;B<I;B+=3)x(i[B+0],i[B+1],i[B+2])}const P=new F,R=new F,T=new F,D=new F;function ee(_){T.fromArray(s,_*3),D.copy(T);const A=c[_];P.copy(A),P.sub(T.multiplyScalar(T.dot(A))).normalize(),R.crossVectors(D,A);const Q=R.dot(u[_])<0?-1:1;l[_*4]=P.x,l[_*4+1]=P.y,l[_*4+2]=P.z,l[_*4+3]=Q}for(let _=0,A=S.length;_<A;++_){const q=S[_],Q=q.start,U=q.count;for(let B=Q,I=Q+U;B<I;B+=3)ee(i[B+0]),ee(i[B+1]),ee(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new vn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new _t,li=new Lo,ps=new na,ql=new F,Bi=new F,Gi=new F,zi=new F,Fa=new F,ms=new F,gs=new he,vs=new he,xs=new he,Yl=new F,Zl=new F,Kl=new F,_s=new F,ys=new F;class kt extends Ht{constructor(e=new Dt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Fa.fromBufferAttribute(f,e),a?ms.addScaledVector(Fa,u):ms.addScaledVector(Fa.sub(t),u))}t.add(ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(ps.containsPoint(li.origin)===!1&&(li.intersectSphere(ps,ql)===null||li.origin.distanceToSquared(ql)>(e.far-e.near)**2))&&(Xl.copy(s).invert(),li.copy(e.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,P=x;S<P;S+=3){const R=o.getX(S),T=o.getX(S+1),D=o.getX(S+2);r=Ss(this,m,e,i,c,u,f,R,T,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);r=Ss(this,a,e,i,c,u,f,b,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,P=x;S<P;S+=3){const R=S,T=S+1,D=S+2;r=Ss(this,m,e,i,c,u,f,R,T,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const b=p,x=p+1,S=p+2;r=Ss(this,a,e,i,c,u,f,b,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function ip(n,e,t,i,r,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===$n,o),l===null)return null;ys.copy(o),ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:n}}function Ss(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Bi),n.getVertexPosition(l,Gi),n.getVertexPosition(c,zi);const u=ip(n,e,t,i,Bi,Gi,zi,_s);if(u){r&&(gs.fromBufferAttribute(r,o),vs.fromBufferAttribute(r,l),xs.fromBufferAttribute(r,c),u.uv=mn.getInterpolation(_s,Bi,Gi,zi,gs,vs,xs,new he)),s&&(gs.fromBufferAttribute(s,o),vs.fromBufferAttribute(s,l),xs.fromBufferAttribute(s,c),u.uv1=mn.getInterpolation(_s,Bi,Gi,zi,gs,vs,xs,new he),u.uv2=u.uv1),a&&(Yl.fromBufferAttribute(a,o),Zl.fromBufferAttribute(a,l),Kl.fromBufferAttribute(a,c),u.normal=mn.getInterpolation(_s,Bi,Gi,zi,Yl,Zl,Kl,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};mn.getNormal(Bi,Gi,zi,f.normal),u.face=f}return u}class lr extends Dt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function g(v,p,m,b,x,S,P,R,T,D,ee){const _=S/T,A=P/D,q=S/2,Q=P/2,U=R/2,B=T+1,I=D+1;let Y=0,W=0;const X=new F;for(let Z=0;Z<I;Z++){const K=Z*A-Q;for(let ie=0;ie<B;ie++){const De=ie*_-q;X[v]=De*b,X[p]=K*x,X[m]=U,c.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=R>0?1:-1,u.push(X.x,X.y,X.z),f.push(ie/T),f.push(1-Z/D),Y+=1}}for(let Z=0;Z<D;Z++)for(let K=0;K<T;K++){const ie=h+K+B*Z,De=h+K+B*(Z+1),V=h+(K+1)+B*(Z+1),se=h+(K+1)+B*Z;l.push(ie,De,se),l.push(De,V,se),W+=6}o.addGroup(d,W,ee),d+=W,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=rr(n[t]);for(const r in i)e[r]=i[r]}return e}function rp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bu(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}const sp={clone:rr,merge:It};var ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new F,jl=new he,Jl=new he;class Jt extends Gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,jl,Jl),t.subVectors(Jl,jl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hi=-90,Vi=1;class lp extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Hi,Vi,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zu extends Bt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:tr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cp extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&($i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?vt:$t),this.texture=new zu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lr(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Zn});s.uniforms.tEquirect.value=t;const a=new kt(r,s),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Gt),new lp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Oa=new F,up=new F,hp=new $e;class Xn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oa.subVectors(i,t).cross(up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hp.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new na,bs=new F;class Hu{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],p=r[11],m=r[12],b=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-d,S-m).normalize(),i[1].setComponents(l+s,h+c,p+d,S+m).normalize(),i[2].setComponents(l+a,h+u,p+g,S+b).normalize(),i[3].setComponents(l-a,h-u,p-g,S-b).normalize(),i[4].setComponents(l-o,h-f,p-v,S-x).normalize(),t===Ln)i[5].setComponents(l+o,h+f,p+v,S+x).normalize();else if(t===Ws)i[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bs.x=r.normal.x>0?e.max.x:e.min.x,bs.y=r.normal.y>0?e.max.y:e.min.y,bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),d.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];t?n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class _n extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const b=m*h-a;for(let x=0;x<c;x++){const S=x*f-s;g.push(S,-b,0),v.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const x=b+c*m,S=b+c*(m+1),P=b+1+c*(m+1),R=b+1+c*m;d.push(x,S,R),d.push(S,P,R)}this.setIndex(d),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`
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
}`,Xp=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
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
}`,tm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,dm=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ag=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,og=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dg=`uniform sampler2D t2D;
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Cg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Ug=`#define NORMAL
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
}`,Dg=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Bg=`#define TOON
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
}`,Gg=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Vg=`uniform vec3 color;
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
}`,Wg=`uniform float rotation;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:dp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:vp,alphatest_pars_fragment:xp,aomap_fragment:_p,aomap_pars_fragment:yp,batching_pars_vertex:Sp,batching_vertex:bp,begin_vertex:Ep,beginnormal_vertex:Mp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:wp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Pp,color_fragment:Up,color_pars_fragment:Dp,color_pars_vertex:Fp,color_vertex:Op,common:Ip,cube_uv_reflection_fragment:Np,defaultnormal_vertex:kp,displacementmap_pars_vertex:Bp,displacementmap_vertex:Gp,emissivemap_fragment:zp,emissivemap_pars_fragment:Hp,colorspace_fragment:Vp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:jp,fog_pars_vertex:Jp,fog_fragment:$p,fog_pars_fragment:Qp,gradientmap_pars_fragment:em,lightmap_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:rm,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:um,lights_physical_fragment:hm,lights_physical_pars_fragment:fm,lights_fragment_begin:dm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:_m,map_fragment:ym,map_pars_fragment:Sm,map_particle_fragment:bm,map_particle_pars_fragment:Em,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Tm,morphcolor_vertex:Am,morphnormal_vertex:wm,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Lm,normal_fragment_maps:Pm,normal_pars_fragment:Um,normal_pars_vertex:Dm,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Bm,opaque_fragment:Gm,packing:zm,premultiplied_alpha_fragment:Hm,project_vertex:Vm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Km,shadowmap_vertex:jm,shadowmask_pars_fragment:Jm,skinbase_vertex:$m,skinning_pars_vertex:Qm,skinning_vertex:eg,skinnormal_vertex:tg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:rg,tonemapping_pars_fragment:sg,transmission_fragment:ag,transmission_pars_fragment:og,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,worldpos_vertex:hg,background_vert:fg,background_frag:dg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:vg,depth_vert:xg,depth_frag:_g,distanceRGBA_vert:yg,distanceRGBA_frag:Sg,equirect_vert:bg,equirect_frag:Eg,linedashed_vert:Mg,linedashed_frag:Tg,meshbasic_vert:Ag,meshbasic_frag:wg,meshlambert_vert:Rg,meshlambert_frag:Cg,meshmatcap_vert:Lg,meshmatcap_frag:Pg,meshnormal_vert:Ug,meshnormal_frag:Dg,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:Ig,meshphysical_frag:Ng,meshtoon_vert:kg,meshtoon_frag:Bg,points_vert:Gg,points_frag:zg,shadow_vert:Hg,shadow_frag:Vg,sprite_vert:Wg,sprite_frag:Xg},de={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},pn={basic:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:It([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:It([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:It([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:It([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:It([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:It([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:It([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:It([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:It([de.common,de.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:It([de.lights,de.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};pn.physical={uniforms:It([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Es={r:0,b:0,g:0};function qg(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let b=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),b=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ea)?(u===void 0&&(u=new kt(new lr(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:rr(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=rt.getTransfer(x.colorSpace)!==lt,(f!==x||h!==x.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new kt(new _n(2,2),new Qn({name:"BackgroundMaterial",uniforms:rr(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=rt.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(Es,Bu(n)),i.buffers.color.setClear(Es.r,Es.g,Es.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Yg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(U,B,I,Y,W){let X=!1;if(a){const Z=v(Y,I,B);c!==Z&&(c=Z,d(c.object)),X=m(U,Y,I,W),X&&b(U,Y,I,W)}else{const Z=B.wireframe===!0;(c.geometry!==Y.id||c.program!==I.id||c.wireframe!==Z)&&(c.geometry=Y.id,c.program=I.id,c.wireframe=Z,X=!0)}W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,D(U,B,I,Y),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function v(U,B,I){const Y=I.wireframe===!0;let W=o[U.id];W===void 0&&(W={},o[U.id]=W);let X=W[B.id];X===void 0&&(X={},W[B.id]=X);let Z=X[Y];return Z===void 0&&(Z=p(h()),X[Y]=Z),Z}function p(U){const B=[],I=[],Y=[];for(let W=0;W<r;W++)B[W]=0,I[W]=0,Y[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:I,attributeDivisors:Y,object:U,attributes:{},index:null}}function m(U,B,I,Y){const W=c.attributes,X=B.attributes;let Z=0;const K=I.getAttributes();for(const ie in K)if(K[ie].location>=0){const V=W[ie];let se=X[ie];if(se===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),V===void 0||V.attribute!==se||se&&V.data!==se.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function b(U,B,I,Y){const W={},X=B.attributes;let Z=0;const K=I.getAttributes();for(const ie in K)if(K[ie].location>=0){let V=X[ie];V===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(V=U.instanceColor));const se={};se.attribute=V,V&&V.data&&(se.data=V.data),W[ie]=se,Z++}c.attributes=W,c.attributesNum=Z,c.index=Y}function x(){const U=c.newAttributes;for(let B=0,I=U.length;B<I;B++)U[B]=0}function S(U){P(U,0)}function P(U,B){const I=c.newAttributes,Y=c.enabledAttributes,W=c.attributeDivisors;I[U]=1,Y[U]===0&&(n.enableVertexAttribArray(U),Y[U]=1),W[U]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),W[U]=B)}function R(){const U=c.newAttributes,B=c.enabledAttributes;for(let I=0,Y=B.length;I<Y;I++)B[I]!==U[I]&&(n.disableVertexAttribArray(I),B[I]=0)}function T(U,B,I,Y,W,X,Z){Z===!0?n.vertexAttribIPointer(U,B,I,W,X):n.vertexAttribPointer(U,B,I,Y,W,X)}function D(U,B,I,Y){if(i.isWebGL2===!1&&(U.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=Y.attributes,X=I.getAttributes(),Z=B.defaultAttributeValues;for(const K in X){const ie=X[K];if(ie.location>=0){let De=W[K];if(De===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(De=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(De=U.instanceColor)),De!==void 0){const V=De.normalized,se=De.itemSize,xe=t.get(De);if(xe===void 0)continue;const Ee=xe.buffer,Re=xe.type,Ae=xe.bytesPerElement,Ve=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||De.gpuType===bu);if(De.isInterleavedBufferAttribute){const Fe=De.data,L=Fe.stride,fe=De.offset;if(Fe.isInstancedInterleavedBuffer){for(let j=0;j<ie.locationSize;j++)P(ie.location+j,Fe.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let j=0;j<ie.locationSize;j++)S(ie.location+j);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let j=0;j<ie.locationSize;j++)T(ie.location+j,se/ie.locationSize,Re,V,L*Ae,(fe+se/ie.locationSize*j)*Ae,Ve)}else{if(De.isInstancedBufferAttribute){for(let Fe=0;Fe<ie.locationSize;Fe++)P(ie.location+Fe,De.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Fe=0;Fe<ie.locationSize;Fe++)S(ie.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Fe=0;Fe<ie.locationSize;Fe++)T(ie.location+Fe,se/ie.locationSize,Re,V,se*Ae,se/ie.locationSize*Fe*Ae,Ve)}}else if(Z!==void 0){const V=Z[K];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(ie.location,V);break;case 3:n.vertexAttrib3fv(ie.location,V);break;case 4:n.vertexAttrib4fv(ie.location,V);break;default:n.vertexAttrib1fv(ie.location,V)}}}}R()}function ee(){q();for(const U in o){const B=o[U];for(const I in B){const Y=B[I];for(const W in Y)g(Y[W].object),delete Y[W];delete B[I]}delete o[U]}}function _(U){if(o[U.id]===void 0)return;const B=o[U.id];for(const I in B){const Y=B[I];for(const W in Y)g(Y[W].object),delete Y[W];delete B[I]}delete o[U.id]}function A(U){for(const B in o){const I=o[B];if(I[U.id]===void 0)continue;const Y=I[U.id];for(const W in Y)g(Y[W].object),delete Y[W];delete I[U.id]}}function q(){Q(),u=!0,c!==l&&(c=l,d(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:Q,dispose:ee,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:S,disableUnusedAttributes:R}}function Zg(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Kg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=a||e.has("OES_texture_float"),P=x&&S,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:R}}function jg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xn,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,x=b*4;let S=m.clippingState||null;l.value=S,S=u(g,h,x,d);for(let P=0;P!==x;++P)S[P]=t[P];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==v;++x,S+=4)a.copy(f[x]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Jg(n){let e=new WeakMap;function t(a,o){return o===ro?a.mapping=tr:o===so&&(a.mapping=nr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===so)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cp(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wu extends Gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,$l=[.125,.215,.35,.446,.526,.582],di=20,Ia=new Wu,Ql=new tt;let Na=null,ka=0,Ba=0;const hi=(1+Math.sqrt(5))/2,Wi=1/hi,ec=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,hi,Wi),new F(0,hi,-Wi),new F(Wi,0,hi),new F(-Wi,0,hi),new F(hi,Wi,0),new F(-hi,Wi,0)];class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Na=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,ka,Ba),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Tr,format:rn,colorSpace:Fn,depthBuffer:!1},r=nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(s)),this._blurMaterial=Qg(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,i,r){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Kn,u.autoClear=!1;const d=new sn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new kt(new lr,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Ql),v=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Ms(r,b*x,m>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===tr||e.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ia)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ec[(r-1)%ec.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*di-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):di;p>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const m=[];let b=0;for(let T=0;T<di;++T){const D=T/v,ee=Math.exp(-D*D/2);m.push(ee),T===0?b+=ee:T<p&&(b+=2*ee)}for(let T=0;T<m.length;T++)m[T]=m[T]/b;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-Yi?r-x+Yi:0),R=4*(this._cubeSize-S);Ms(t,P,R,3*S,2*S),l.setRenderTarget(t),l.render(f,Ia)}}function $g(n){const e=[],t=[],i=[];let r=n;const s=n-Yi+1+$l.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Yi?l=$l[a-n+Yi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,p=2,m=1,b=new Float32Array(v*g*d),x=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,D=R>2?0:-1,ee=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];b.set(ee,v*g*R),x.set(h,p*g*R);const _=[R,R,R,R,R,R];S.set(_,m*g*R)}const P=new Dt;P.setAttribute("position",new vn(b,v)),P.setAttribute("uv",new vn(x,p)),P.setAttribute("faceIndex",new vn(S,m)),e.push(P),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nc(n,e,t){const i=new Si(n,e,t);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ms(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qg(n,e,t){const i=new Float32Array(di),r=new F(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Po(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ic(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function rc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Po(){return`

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
	`}function e0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===so,u=l===tr||l===nr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new tc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new tc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function t0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function n0(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const b=d.array;v=d.version;for(let x=0,S=b.length;x<S;x+=3){const P=b[x+0],R=b[x+1],T=b[x+2];h.push(P,R,R,T,T,P)}}else if(g!==void 0){const b=g.array;v=g.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const P=x+0,R=x+1,T=x+2;h.push(P,R,R,T,T,P)}}else return;const p=new(Pu(h)?ku:Nu)(h,1);p.version=v;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function i0(n,e,t,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,g){n.drawElements(s,g,o,d*l),t.update(g,s,1)}function f(d,g,v){if(v===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,o,d*l,v),t.update(g,s,v)}function h(d,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,o,d,0,v);let m=0;for(let b=0;b<v;b++)m+=g[b];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function r0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function s0(n,e){return n[0]-e[0]}function a0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function o0(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let B=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var d=B;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let ee=0;x===!0&&(ee=1),S===!0&&(ee=2),P===!0&&(ee=3);let _=u.attributes.position.count*ee,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const q=new Float32Array(_*A*4*v),Q=new Fu(q,_,A,v);Q.type=Cn,Q.needsUpdate=!0;const U=ee*4;for(let I=0;I<v;I++){const Y=R[I],W=T[I],X=D[I],Z=_*A*4*I;for(let K=0;K<Y.count;K++){const ie=K*U;x===!0&&(a.fromBufferAttribute(Y,K),q[Z+ie+0]=a.x,q[Z+ie+1]=a.y,q[Z+ie+2]=a.z,q[Z+ie+3]=0),S===!0&&(a.fromBufferAttribute(W,K),q[Z+ie+4]=a.x,q[Z+ie+5]=a.y,q[Z+ie+6]=a.z,q[Z+ie+7]=0),P===!0&&(a.fromBufferAttribute(X,K),q[Z+ie+8]=a.x,q[Z+ie+9]=a.y,q[Z+ie+10]=a.z,q[Z+ie+11]=X.itemSize===4?a.w:1)}}p={count:v,texture:Q,size:new he(_,A)},s.set(u,p),u.addEventListener("dispose",B)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const b=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<g;S++){const P=v[S];P[0]=S,P[1]=h[S]}v.sort(a0);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(s0);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const P=o[S],R=P[0],T=P[1];R!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+S)!==p[R]&&u.setAttribute("morphTarget"+S,p[R]),m&&u.getAttribute("morphNormal"+S)!==m[R]&&u.setAttribute("morphNormal"+S,m[R]),r[S]=T,b+=T):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function l0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Xu extends Bt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xi&&(i=qn),i===void 0&&u===ir&&(i=vi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qu=new Bt,Yu=new Xu(1,1);Yu.compareFunction=Lu;const Zu=new Fu,Ku=new qd,ju=new zu,sc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sc[r];if(s===void 0&&(s=new Float32Array(r),sc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ra(n,e){let t=ac[e];t===void 0&&(t=new Int32Array(e),ac[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function d0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;cc.set(i),n.uniformMatrix2fv(this.addr,!1,cc),St(t,i)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;lc.set(i),n.uniformMatrix3fv(this.addr,!1,lc),St(t,i)}}function m0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;oc.set(i),n.uniformMatrix4fv(this.addr,!1,oc),St(t,i)}}function g0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function M0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Yu:qu;t.setTexture2D(e||s,r)}function T0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ku,r)}function A0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ju,r)}function w0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zu,r)}function R0(n){switch(n){case 5126:return c0;case 35664:return u0;case 35665:return h0;case 35666:return f0;case 35674:return d0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return v0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return S0;case 36295:return b0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return w0}}function C0(n,e){n.uniform1fv(this.addr,e)}function L0(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function P0(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function U0(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function D0(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function F0(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function O0(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I0(n,e){n.uniform1iv(this.addr,e)}function N0(n,e){n.uniform2iv(this.addr,e)}function k0(n,e){n.uniform3iv(this.addr,e)}function B0(n,e){n.uniform4iv(this.addr,e)}function G0(n,e){n.uniform1uiv(this.addr,e)}function z0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function V0(n,e){n.uniform4uiv(this.addr,e)}function W0(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qu,s[a])}function X0(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ku,s[a])}function q0(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ju,s[a])}function Y0(n,e,t){const i=this.cache,r=e.length,s=ra(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zu,s[a])}function Z0(n){switch(n){case 5126:return C0;case 35664:return L0;case 35665:return P0;case 35666:return U0;case 35674:return D0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return k0;case 35669:case 35673:return B0;case 5125:return G0;case 36294:return z0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}class K0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function uc(n,e){n.seq.push(e),n.map[e.id]=e}function $0(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){uc(t,c===void 0?new K0(o,n,e):new j0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new J0(o),uc(t,f)),t=f}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function hc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q0=37297;let ev=0;function tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nv(n){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(n);let i;switch(e===t?i="":e===Vs&&t===Hs?i="LinearDisplayP3ToLinearSRGB":e===Hs&&t===Vs&&(i="LinearSRGBToLinearDisplayP3"),n){case Fn:case ta:return[i,"LinearTransferOETF"];case vt:case wo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function fc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(e),a)}else return r}function iv(n,e){const t=nv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(n,e){let t;switch(e){case nd:t="Linear";break;case id:t="Reinhard";break;case rd:t="OptimizedCineon";break;case sd:t="ACESFilmic";break;case od:t="AgX";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function ov(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Zi(n){return n!==""}function dc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(n){return n.replace(cv,hv)}const uv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hv(n,e){let t=Ze[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uo(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(n){return n.replace(fv,dv)}function dv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function vv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yu:e="ENVMAP_BLENDING_MULTIPLY";break;case ed:e="ENVMAP_BLENDING_MIX";break;case td:e="ENVMAP_BLENDING_ADD";break}return e}function xv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _v(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pv(t),c=mv(t),u=gv(t),f=vv(t),h=xv(t),d=t.isWebGL2?"":sv(t),g=av(t),v=ov(s),p=r.createProgram();let m,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),m.length>0&&(m+=`
`),b=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Zi).join(`
`),b.length>0&&(b+=`
`)):(m=[gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),b=[d,gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Kn?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=uo(a),a=dc(a,t),a=pc(a,t),o=uo(o),o=dc(o,t),o=pc(o,t),a=mc(a),o=mc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const S=x+m+a,P=x+b+o,R=hc(r,r.VERTEX_SHADER,S),T=hc(r,r.FRAGMENT_SHADER,P);r.attachShader(p,R),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(q){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(R).trim(),B=r.getShaderInfoLog(T).trim();let I=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,R,T);else{const W=fc(r,R,"vertex"),X=fc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(U===""||B==="")&&(Y=!1);Y&&(q.diagnostics={runnable:I,programLog:Q,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:b}})}r.deleteShader(R),r.deleteShader(T),ee=new Is(r,p),_=lv(r,p)}let ee;this.getUniforms=function(){return ee===void 0&&D(this),ee};let _;this.getAttributes=function(){return _===void 0&&D(this),_};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,Q0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=T,this}let yv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bv(e),t.set(e,i)),i}}class bv{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}}function Ev(n,e,t,i,r,s,a){const o=new Ou,l=new Sv,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,A,q,Q,U){const B=Q.fog,I=U.geometry,Y=_.isMeshStandardMaterial?Q.environment:null,W=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),X=W&&W.mapping===ea?W.image.height:null,Z=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ie=K!==void 0?K.length:0;let De=0;I.morphAttributes.position!==void 0&&(De=1),I.morphAttributes.normal!==void 0&&(De=2),I.morphAttributes.color!==void 0&&(De=3);let V,se,xe,Ee;if(Z){const Qe=pn[Z];V=Qe.vertexShader,se=Qe.fragmentShader}else V=_.vertexShader,se=_.fragmentShader,l.update(_),xe=l.getVertexShaderID(_),Ee=l.getFragmentShaderID(_);const Re=n.getRenderTarget(),Ae=U.isInstancedMesh===!0,Ve=U.isBatchedMesh===!0,Fe=!!_.map,L=!!_.matcap,fe=!!W,j=!!_.aoMap,ce=!!_.lightMap,J=!!_.bumpMap,Le=!!_.normalMap,ve=!!_.displacementMap,E=!!_.emissiveMap,y=!!_.metalnessMap,O=!!_.roughnessMap,ae=_.anisotropy>0,ne=_.clearcoat>0,te=_.iridescence>0,we=_.sheen>0,pe=_.transmission>0,Se=ae&&!!_.anisotropyMap,Ne=ne&&!!_.clearcoatMap,We=ne&&!!_.clearcoatNormalMap,re=ne&&!!_.clearcoatRoughnessMap,et=te&&!!_.iridescenceMap,Ke=te&&!!_.iridescenceThicknessMap,ze=we&&!!_.sheenColorMap,Oe=we&&!!_.sheenRoughnessMap,ye=!!_.specularMap,qe=!!_.specularColorMap,C=!!_.specularIntensityMap,ue=pe&&!!_.transmissionMap,ge=pe&&!!_.thicknessMap,Ie=!!_.gradientMap,w=!!_.alphaMap,le=_.alphaTest>0,oe=!!_.alphaHash,Ce=!!_.extensions;let ke=Kn;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ke=n.toneMapping);const nt={isWebGL2:f,shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:se,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Ve,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Fn,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:L,envMap:fe,envMapMode:fe&&W.mapping,envMapCubeUVHeight:X,aoMap:j,lightMap:ce,bumpMap:J,normalMap:Le,displacementMap:d&&ve,emissiveMap:E,normalMapObjectSpace:Le&&_.normalMapType===_d,normalMapTangentSpace:Le&&_.normalMapType===xd,metalnessMap:y,roughnessMap:O,anisotropy:ae,anisotropyMap:Se,clearcoat:ne,clearcoatMap:Ne,clearcoatNormalMap:We,clearcoatRoughnessMap:re,iridescence:te,iridescenceMap:et,iridescenceThicknessMap:Ke,sheen:we,sheenColorMap:ze,sheenRoughnessMap:Oe,specularMap:ye,specularColorMap:qe,specularIntensityMap:C,transmission:pe,transmissionMap:ue,thicknessMap:ge,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===Ji&&_.alphaToCoverage===!1,alphaMap:w,alphaTest:le,alphaHash:oe,combine:_.combine,mapUv:Fe&&p(_.map.channel),aoMapUv:j&&p(_.aoMap.channel),lightMapUv:ce&&p(_.lightMap.channel),bumpMapUv:J&&p(_.bumpMap.channel),normalMapUv:Le&&p(_.normalMap.channel),displacementMapUv:ve&&p(_.displacementMap.channel),emissiveMapUv:E&&p(_.emissiveMap.channel),metalnessMapUv:y&&p(_.metalnessMap.channel),roughnessMapUv:O&&p(_.roughnessMap.channel),anisotropyMapUv:Se&&p(_.anisotropyMap.channel),clearcoatMapUv:Ne&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:We&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(_.sheenRoughnessMap.channel),specularMapUv:ye&&p(_.specularMap.channel),specularColorMapUv:qe&&p(_.specularColorMap.channel),specularIntensityMapUv:C&&p(_.specularIntensityMap.channel),transmissionMapUv:ue&&p(_.transmissionMap.channel),thicknessMapUv:ge&&p(_.thicknessMap.channel),alphaMapUv:w&&p(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Le||ae),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Fe||w),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:De,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rt,flipSided:_.side===zt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Ce&&_.extensions.derivatives===!0,extensionFragDepth:Ce&&_.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ce&&_.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function b(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const q in _.defines)A.push(q),A.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(x(A,_),S(A,_),A.push(n.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function x(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function S(_,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const A=v[_.type];let q;if(A){const Q=pn[A];q=sp.clone(Q.uniforms)}else q=_.uniforms;return q}function R(_,A){let q;for(let Q=0,U=u.length;Q<U;Q++){const B=u[Q];if(B.cacheKey===A){q=B,++q.usedTimes;break}}return q===void 0&&(q=new _v(n,A,_,s),u.push(q)),q}function T(_){if(--_.usedTimes===0){const A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),_.destroy()}}function D(_){l.remove(_)}function ee(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:ee}}function Mv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,v,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=p),e++,m}function o(f,h,d,g,v,p){const m=a(f,h,d,g,v,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,g,v,p){const m=a(f,h,d,g,v,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Tv),i.length>1&&i.sort(h||vc),r.length>1&&r.sort(h||vc)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Av(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xc,n.set(i,[a])):r>=s.length?(a=new xc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new tt};break;case"SpotLight":t={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cv=0;function Lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n,e){const t=new wv,i=Rv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new _t,o=new _t;function l(u,f){let h=0,d=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let v=0,p=0,m=0,b=0,x=0,S=0,P=0,R=0,T=0,D=0,ee=0;u.sort(Lv);const _=f===!0?Math.PI:1;for(let q=0,Q=u.length;q<Q;q++){const U=u[q],B=U.color,I=U.intensity,Y=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*I*_,d+=B.g*I*_,g+=B.b*I*_;else if(U.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(U.sh.coefficients[X],I);ee++}else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),U.castShadow){const Z=U.shadow,K=i.get(U);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[v]=K,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=U.shadow.matrix,S++}r.directional[v]=X,v++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(B).multiplyScalar(I*_),X.distance=Y,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,r.spot[m]=X;const Z=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,Z.updateMatrices(U),U.castShadow&&D++),r.spotLightMatrix[m]=Z.matrix,U.castShadow){const K=i.get(U);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[m]=K,r.spotShadowMap[m]=W,R++}m++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(B).multiplyScalar(I),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=X,b++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*_),X.distance=U.distance,X.decay=U.decay,U.castShadow){const Z=U.shadow,K=i.get(U);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=U.shadow.matrix,P++}r.point[p]=X,p++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(I*_),X.groundColor.copy(U.groundColor).multiplyScalar(I*_),r.hemi[x]=X,x++}}b>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==v||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==b||A.hemiLength!==x||A.numDirectionalShadows!==S||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==T||A.numLightProbes!==ee)&&(r.directional.length=v,r.spot.length=m,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=ee,A.directionalLength=v,A.pointLength=p,A.spotLength=m,A.rectAreaLength=b,A.hemiLength=x,A.numDirectionalShadows=S,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=T,A.numLightProbes=ee,r.version=Cv++)}function c(u,f){let h=0,d=0,g=0,v=0,p=0;const m=f.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const S=u[b];if(S.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),h++}else if(S.isSpotLight){const P=r.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const P=r.rectArea[v];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const P=r.point[d];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function _c(n,e){const t=new Pv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Uv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new _c(n,e),t.set(s,[l])):a>=o.length?(l=new _c(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Dv extends kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fv extends kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`;function Nv(n,e,t){let i=new Hu;const r=new he,s=new he,a=new Ct,o=new Dv({depthPacking:vd}),l=new Fv,c={},u=t.maxTextureSize,f={[$n]:zt,[zt]:$n,[Rt]:Rt},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Ov,fragmentShader:Iv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let m=this.type;this.render=function(R,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const ee=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Zn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=m!==Rn&&this.type===Rn,U=m===Rn&&this.type!==Rn;for(let B=0,I=R.length;B<I;B++){const Y=R[B],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const X=W.getFrameExtents();if(r.multiply(X),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Q===!0||U===!0){const K=this.type!==Rn?{minFilter:Nt,magFilter:Nt}:{};W.map!==null&&W.map.dispose(),W.map=new Si(r.x,r.y,K),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const Z=W.getViewportCount();for(let K=0;K<Z;K++){const ie=W.getViewport(K);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),q.viewport(a),W.updateMatrices(Y,K),i=W.getFrustum(),S(T,D,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Rn&&b(W,D),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(ee,_,A)};function b(R,T){const D=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Si(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,D,h,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,D,d,v,null)}function x(R,T,D,ee){let _=null;const A=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)_=A;else if(_=D.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=_.uuid,Q=T.uuid;let U=c[q];U===void 0&&(U={},c[q]=U);let B=U[Q];B===void 0&&(B=_.clone(),U[Q]=B,T.addEventListener("dispose",P)),_=B}if(_.visible=T.visible,_.wireframe=T.wireframe,ee===Rn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const q=n.properties.get(_);q.light=D}return _}function S(R,T,D,ee,_){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Rn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const Q=e.update(R),U=R.material;if(Array.isArray(U)){const B=Q.groups;for(let I=0,Y=B.length;I<Y;I++){const W=B[I],X=U[W.materialIndex];if(X&&X.visible){const Z=x(R,X,ee,_);R.onBeforeShadow(n,R,T,D,Q,Z,W),n.renderBufferDirect(D,null,Q,Z,R,W),R.onAfterShadow(n,R,T,D,Q,Z,W)}}}else if(U.visible){const B=x(R,U,ee,_);R.onBeforeShadow(n,R,T,D,Q,B,null),n.renderBufferDirect(D,null,Q,B,R,null),R.onAfterShadow(n,R,T,D,Q,B,null)}}const q=R.children;for(let Q=0,U=q.length;Q<U;Q++)S(q[Q],T,D,ee,_)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const ee=c[D],_=R.target.uuid;_ in ee&&(ee[_].dispose(),delete ee[_])}}}function kv(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const le=new Ct;let oe=null;const Ce=new Ct(0,0,0,0);return{setMask:function(ke){oe!==ke&&!w&&(n.colorMask(ke,ke,ke,ke),oe=ke)},setLocked:function(ke){w=ke},setClear:function(ke,nt,Qe,ot,wt){wt===!0&&(ke*=ot,nt*=ot,Qe*=ot),le.set(ke,nt,Qe,ot),Ce.equals(le)===!1&&(n.clearColor(ke,nt,Qe,ot),Ce.copy(le))},reset:function(){w=!1,oe=null,Ce.set(-1,0,0,0)}}}function s(){let w=!1,le=null,oe=null,Ce=null;return{setTest:function(ke){ke?Ae(n.DEPTH_TEST):Ve(n.DEPTH_TEST)},setMask:function(ke){le!==ke&&!w&&(n.depthMask(ke),le=ke)},setFunc:function(ke){if(oe!==ke){switch(ke){case Yf:n.depthFunc(n.NEVER);break;case Zf:n.depthFunc(n.ALWAYS);break;case Kf:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case jf:n.depthFunc(n.EQUAL);break;case Jf:n.depthFunc(n.GEQUAL);break;case $f:n.depthFunc(n.GREATER);break;case Qf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=ke}},setLocked:function(ke){w=ke},setClear:function(ke){Ce!==ke&&(n.clearDepth(ke),Ce=ke)},reset:function(){w=!1,le=null,oe=null,Ce=null}}}function a(){let w=!1,le=null,oe=null,Ce=null,ke=null,nt=null,Qe=null,ot=null,wt=null;return{setTest:function(it){w||(it?Ae(n.STENCIL_TEST):Ve(n.STENCIL_TEST))},setMask:function(it){le!==it&&!w&&(n.stencilMask(it),le=it)},setFunc:function(it,pt,Ft){(oe!==it||Ce!==pt||ke!==Ft)&&(n.stencilFunc(it,pt,Ft),oe=it,Ce=pt,ke=Ft)},setOp:function(it,pt,Ft){(nt!==it||Qe!==pt||ot!==Ft)&&(n.stencilOp(it,pt,Ft),nt=it,Qe=pt,ot=Ft)},setLocked:function(it){w=it},setClear:function(it){wt!==it&&(n.clearStencil(it),wt=it)},reset:function(){w=!1,le=null,oe=null,Ce=null,ke=null,nt=null,Qe=null,ot=null,wt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,v=[],p=null,m=!1,b=null,x=null,S=null,P=null,R=null,T=null,D=null,ee=new tt(0,0,0),_=0,A=!1,q=null,Q=null,U=null,B=null,I=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=X>=2);let K=null,ie={};const De=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),se=new Ct().fromArray(De),xe=new Ct().fromArray(V);function Ee(w,le,oe,Ce){const ke=new Uint8Array(4),nt=n.createTexture();n.bindTexture(w,nt),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<oe;Qe++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(le+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return nt}const Re={};Re[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(n.DEPTH_TEST),l.setFunc(Gs),ve(!1),E($o),Ae(n.CULL_FACE),J(Zn);function Ae(w){h[w]!==!0&&(n.enable(w),h[w]=!0)}function Ve(w){h[w]!==!1&&(n.disable(w),h[w]=!1)}function Fe(w,le){return d[w]!==le?(n.bindFramebuffer(w,le),d[w]=le,i&&(w===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=le),w===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function L(w,le){let oe=v,Ce=!1;if(w)if(oe=g.get(le),oe===void 0&&(oe=[],g.set(le,oe)),w.isWebGLMultipleRenderTargets){const ke=w.texture;if(oe.length!==ke.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Qe=ke.length;nt<Qe;nt++)oe[nt]=n.COLOR_ATTACHMENT0+nt;oe.length=ke.length,Ce=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Ce=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function fe(w){return p!==w?(n.useProgram(w),p=w,!0):!1}const j={[fi]:n.FUNC_ADD,[Uf]:n.FUNC_SUBTRACT,[Df]:n.FUNC_REVERSE_SUBTRACT};if(i)j[nl]=n.MIN,j[il]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(j[nl]=w.MIN_EXT,j[il]=w.MAX_EXT)}const ce={[Ff]:n.ZERO,[Of]:n.ONE,[If]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[Hf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[kf]:n.DST_ALPHA,[Nf]:n.ONE_MINUS_SRC_COLOR,[io]:n.ONE_MINUS_SRC_ALPHA,[zf]:n.ONE_MINUS_DST_COLOR,[Bf]:n.ONE_MINUS_DST_ALPHA,[Vf]:n.CONSTANT_COLOR,[Wf]:n.ONE_MINUS_CONSTANT_COLOR,[Xf]:n.CONSTANT_ALPHA,[qf]:n.ONE_MINUS_CONSTANT_ALPHA};function J(w,le,oe,Ce,ke,nt,Qe,ot,wt,it){if(w===Zn){m===!0&&(Ve(n.BLEND),m=!1);return}if(m===!1&&(Ae(n.BLEND),m=!0),w!==Pf){if(w!==b||it!==A){if((x!==fi||R!==fi)&&(n.blendEquation(n.FUNC_ADD),x=fi,R=fi),it)switch(w){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}S=null,P=null,T=null,D=null,ee.set(0,0,0),_=0,b=w,A=it}return}ke=ke||le,nt=nt||oe,Qe=Qe||Ce,(le!==x||ke!==R)&&(n.blendEquationSeparate(j[le],j[ke]),x=le,R=ke),(oe!==S||Ce!==P||nt!==T||Qe!==D)&&(n.blendFuncSeparate(ce[oe],ce[Ce],ce[nt],ce[Qe]),S=oe,P=Ce,T=nt,D=Qe),(ot.equals(ee)===!1||wt!==_)&&(n.blendColor(ot.r,ot.g,ot.b,wt),ee.copy(ot),_=wt),b=w,A=!1}function Le(w,le){w.side===Rt?Ve(n.CULL_FACE):Ae(n.CULL_FACE);let oe=w.side===zt;le&&(oe=!oe),ve(oe),w.blending===Ji&&w.transparent===!1?J(Zn):J(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),o.setMask(w.colorWrite);const Ce=w.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),O(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(w){q!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),q=w)}function E(w){w!==Rf?(Ae(n.CULL_FACE),w!==Q&&(w===$o?n.cullFace(n.BACK):w===Cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ve(n.CULL_FACE),Q=w}function y(w){w!==U&&(W&&n.lineWidth(w),U=w)}function O(w,le,oe){w?(Ae(n.POLYGON_OFFSET_FILL),(B!==le||I!==oe)&&(n.polygonOffset(le,oe),B=le,I=oe)):Ve(n.POLYGON_OFFSET_FILL)}function ae(w){w?Ae(n.SCISSOR_TEST):Ve(n.SCISSOR_TEST)}function ne(w){w===void 0&&(w=n.TEXTURE0+Y-1),K!==w&&(n.activeTexture(w),K=w)}function te(w,le,oe){oe===void 0&&(K===null?oe=n.TEXTURE0+Y-1:oe=K);let Ce=ie[oe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ie[oe]=Ce),(Ce.type!==w||Ce.texture!==le)&&(K!==oe&&(n.activeTexture(oe),K=oe),n.bindTexture(w,le||Re[w]),Ce.type=w,Ce.texture=le)}function we(){const w=ie[K];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function qe(w){se.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),se.copy(w))}function C(w){xe.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),xe.copy(w))}function ue(w,le){let oe=f.get(le);oe===void 0&&(oe=new WeakMap,f.set(le,oe));let Ce=oe.get(w);Ce===void 0&&(Ce=n.getUniformBlockIndex(le,w.name),oe.set(w,Ce))}function ge(w,le){const Ce=f.get(le).get(w);u.get(le)!==Ce&&(n.uniformBlockBinding(le,Ce,w.__bindingPointIndex),u.set(le,Ce))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ie={},d={},g=new WeakMap,v=[],p=null,m=!1,b=null,x=null,S=null,P=null,R=null,T=null,D=null,ee=new tt(0,0,0),_=0,A=!1,q=null,Q=null,U=null,B=null,I=null,se.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:Ve,bindFramebuffer:Fe,drawBuffers:L,useProgram:fe,setBlending:J,setMaterial:Le,setFlipSided:ve,setCullFace:E,setLineWidth:y,setPolygonOffset:O,setScissorTest:ae,activeTexture:ne,bindTexture:te,unbindTexture:we,compressedTexImage2D:pe,compressedTexImage3D:Se,texImage2D:Oe,texImage3D:ye,updateUBOMapping:ue,uniformBlockBinding:ge,texStorage2D:Ke,texStorage3D:ze,texSubImage2D:Ne,texSubImage3D:We,compressedTexSubImage2D:re,compressedTexSubImage3D:et,scissor:qe,viewport:C,reset:Ie}}function Bv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):wr("canvas")}function v(E,y,O,ae){let ne=1;if((E.width>ae||E.height>ae)&&(ne=ae/Math.max(E.width,E.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=y?Xs:Math.floor,we=te(ne*E.width),pe=te(ne*E.height);f===void 0&&(f=g(we,pe));const Se=O?g(we,pe):f;return Se.width=we,Se.height=pe,Se.getContext("2d").drawImage(E,0,0,we,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+we+"x"+pe+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return co(E.width)&&co(E.height)}function m(E){return o?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Nt&&E.minFilter!==Gt}function b(E,y){return E.generateMipmaps&&y&&E.minFilter!==Nt&&E.minFilter!==Gt}function x(E){n.generateMipmap(E)}function S(E,y,O,ae,ne=!1){if(o===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=y;if(y===n.RED&&(O===n.FLOAT&&(te=n.R32F),O===n.HALF_FLOAT&&(te=n.R16F),O===n.UNSIGNED_BYTE&&(te=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(te=n.R8UI),O===n.UNSIGNED_SHORT&&(te=n.R16UI),O===n.UNSIGNED_INT&&(te=n.R32UI),O===n.BYTE&&(te=n.R8I),O===n.SHORT&&(te=n.R16I),O===n.INT&&(te=n.R32I)),y===n.RG&&(O===n.FLOAT&&(te=n.RG32F),O===n.HALF_FLOAT&&(te=n.RG16F),O===n.UNSIGNED_BYTE&&(te=n.RG8)),y===n.RGBA){const we=ne?zs:rt.getTransfer(ae);O===n.FLOAT&&(te=n.RGBA32F),O===n.HALF_FLOAT&&(te=n.RGBA16F),O===n.UNSIGNED_BYTE&&(te=we===lt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function P(E,y,O){return b(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Gt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){return E===Nt||E===rl||E===pr?n.NEAREST:n.LINEAR}function T(E){const y=E.target;y.removeEventListener("dispose",T),ee(y),y.isVideoTexture&&u.delete(y)}function D(E){const y=E.target;y.removeEventListener("dispose",D),A(y)}function ee(E){const y=i.get(E);if(y.__webglInit===void 0)return;const O=E.source,ae=h.get(O);if(ae){const ne=ae[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&_(E),Object.keys(ae).length===0&&h.delete(O)}i.remove(E)}function _(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const O=E.source,ae=h.get(O);delete ae[y.__cacheKey],a.memory.textures--}function A(E){const y=E.texture,O=i.get(E),ae=i.get(y);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(O.__webglFramebuffer[ne]))for(let te=0;te<O.__webglFramebuffer[ne].length;te++)n.deleteFramebuffer(O.__webglFramebuffer[ne][te]);else n.deleteFramebuffer(O.__webglFramebuffer[ne]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ne])}else{if(Array.isArray(O.__webglFramebuffer))for(let ne=0;ne<O.__webglFramebuffer.length;ne++)n.deleteFramebuffer(O.__webglFramebuffer[ne]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,te=y.length;ne<te;ne++){const we=i.get(y[ne]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(y[ne])}i.remove(y),i.remove(E)}let q=0;function Q(){q=0}function U(){const E=q;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),q+=1,E}function B(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function I(E,y){const O=i.get(E);if(E.isVideoTexture&&Le(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const ae=E.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,E,y);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function Y(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){se(O,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function W(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){se(O,E,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function X(E,y){const O=i.get(E);if(E.version>0&&O.__version!==E.version){xe(O,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const Z={[ao]:n.REPEAT,[nn]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},K={[Nt]:n.NEAREST,[rl]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[Gt]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},ie={[yd]:n.NEVER,[Ad]:n.ALWAYS,[Sd]:n.LESS,[Lu]:n.LEQUAL,[bd]:n.EQUAL,[Td]:n.GEQUAL,[Ed]:n.GREATER,[Md]:n.NOTEQUAL};function De(E,y,O){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Gt||y.magFilter===da||y.magFilter===pr||y.magFilter===gi||y.minFilter===Gt||y.minFilter===da||y.minFilter===pr||y.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(n.texParameteri(E,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,K[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,K[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==nn||y.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,R(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,R(y.minFilter)),y.minFilter!==Nt&&y.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Nt||y.minFilter!==pr&&y.minFilter!==gi||y.type===Cn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Tr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function V(E,y){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));const ae=y.source;let ne=h.get(ae);ne===void 0&&(ne={},h.set(ae,ne));const te=B(y);if(te!==E.__cacheKey){ne[te]===void 0&&(ne[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ne[te].usedTimes++;const we=ne[E.__cacheKey];we!==void 0&&(ne[E.__cacheKey].usedTimes--,we.usedTimes===0&&_(y)),E.__cacheKey=te,E.__webglTexture=ne[te].texture}return O}function se(E,y,O){let ae=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ae=n.TEXTURE_3D);const ne=V(E,y),te=y.source;t.bindTexture(ae,E.__webglTexture,n.TEXTURE0+O);const we=i.get(te);if(te.version!==we.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);const pe=rt.getPrimaries(rt.workingColorSpace),Se=y.colorSpace===$t?null:rt.getPrimaries(y.colorSpace),Ne=y.colorSpace===$t||pe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const We=m(y)&&p(y.image)===!1;let re=v(y.image,We,!1,r.maxTextureSize);re=ve(y,re);const et=p(re)||o,Ke=s.convert(y.format,y.colorSpace);let ze=s.convert(y.type),Oe=S(y.internalFormat,Ke,ze,y.colorSpace,y.isVideoTexture);De(ae,y,et);let ye;const qe=y.mipmaps,C=o&&y.isVideoTexture!==!0&&Oe!==Ru,ue=we.__version===void 0||ne===!0,ge=te.dataReady,Ie=P(y,re,et);if(y.isDepthTexture)Oe=n.DEPTH_COMPONENT,o?y.type===Cn?Oe=n.DEPTH_COMPONENT32F:y.type===qn?Oe=n.DEPTH_COMPONENT24:y.type===vi?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:y.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===xi&&Oe===n.DEPTH_COMPONENT&&y.type!==Ao&&y.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qn,ze=s.convert(y.type)),y.format===ir&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,y.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=vi,ze=s.convert(y.type))),ue&&(C?t.texStorage2D(n.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Oe,re.width,re.height,0,Ke,ze,null));else if(y.isDataTexture)if(qe.length>0&&et){C&&ue&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,qe[0].width,qe[0].height);for(let w=0,le=qe.length;w<le;w++)ye=qe[w],C?ge&&t.texSubImage2D(n.TEXTURE_2D,w,0,0,ye.width,ye.height,Ke,ze,ye.data):t.texImage2D(n.TEXTURE_2D,w,Oe,ye.width,ye.height,0,Ke,ze,ye.data);y.generateMipmaps=!1}else C?(ue&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,re.width,re.height),ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Ke,ze,re.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,re.width,re.height,0,Ke,ze,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){C&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,qe[0].width,qe[0].height,re.depth);for(let w=0,le=qe.length;w<le;w++)ye=qe[w],y.format!==rn?Ke!==null?C?ge&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,w,0,0,0,ye.width,ye.height,re.depth,Ke,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,w,Oe,ye.width,ye.height,re.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,w,0,0,0,ye.width,ye.height,re.depth,Ke,ze,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,w,Oe,ye.width,ye.height,re.depth,0,Ke,ze,ye.data)}else{C&&ue&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,qe[0].width,qe[0].height);for(let w=0,le=qe.length;w<le;w++)ye=qe[w],y.format!==rn?Ke!==null?C?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,w,0,0,ye.width,ye.height,Ke,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,w,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ge&&t.texSubImage2D(n.TEXTURE_2D,w,0,0,ye.width,ye.height,Ke,ze,ye.data):t.texImage2D(n.TEXTURE_2D,w,Oe,ye.width,ye.height,0,Ke,ze,ye.data)}else if(y.isDataArrayTexture)C?(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Oe,re.width,re.height,re.depth),ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ke,ze,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,Ke,ze,re.data);else if(y.isData3DTexture)C?(ue&&t.texStorage3D(n.TEXTURE_3D,Ie,Oe,re.width,re.height,re.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ke,ze,re.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,Ke,ze,re.data);else if(y.isFramebufferTexture){if(ue)if(C)t.texStorage2D(n.TEXTURE_2D,Ie,Oe,re.width,re.height);else{let w=re.width,le=re.height;for(let oe=0;oe<Ie;oe++)t.texImage2D(n.TEXTURE_2D,oe,Oe,w,le,0,Ke,ze,null),w>>=1,le>>=1}}else if(qe.length>0&&et){C&&ue&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,qe[0].width,qe[0].height);for(let w=0,le=qe.length;w<le;w++)ye=qe[w],C?ge&&t.texSubImage2D(n.TEXTURE_2D,w,0,0,Ke,ze,ye):t.texImage2D(n.TEXTURE_2D,w,Oe,Ke,ze,ye);y.generateMipmaps=!1}else C?(ue&&t.texStorage2D(n.TEXTURE_2D,Ie,Oe,re.width,re.height),ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,ze,re)):t.texImage2D(n.TEXTURE_2D,0,Oe,Ke,ze,re);b(y,et)&&x(ae),we.__version=te.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xe(E,y,O){if(y.image.length!==6)return;const ae=V(E,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const te=i.get(ne);if(ne.version!==te.__version||ae===!0){t.activeTexture(n.TEXTURE0+O);const we=rt.getPrimaries(rt.workingColorSpace),pe=y.colorSpace===$t?null:rt.getPrimaries(y.colorSpace),Se=y.colorSpace===$t||we===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,We=y.image[0]&&y.image[0].isDataTexture,re=[];for(let w=0;w<6;w++)!Ne&&!We?re[w]=v(y.image[w],!1,!0,r.maxCubemapSize):re[w]=We?y.image[w].image:y.image[w],re[w]=ve(y,re[w]);const et=re[0],Ke=p(et)||o,ze=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type),ye=S(y.internalFormat,ze,Oe,y.colorSpace),qe=o&&y.isVideoTexture!==!0,C=te.__version===void 0||ae===!0,ue=ne.dataReady;let ge=P(y,et,Ke);De(n.TEXTURE_CUBE_MAP,y,Ke);let Ie;if(Ne){qe&&C&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,et.width,et.height);for(let w=0;w<6;w++){Ie=re[w].mipmaps;for(let le=0;le<Ie.length;le++){const oe=Ie[le];y.format!==rn?ze!==null?qe?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,0,0,oe.width,oe.height,ze,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,0,0,oe.width,oe.height,ze,Oe,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,ye,oe.width,oe.height,0,ze,Oe,oe.data)}}}else{Ie=y.mipmaps,qe&&C&&(Ie.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,re[0].width,re[0].height));for(let w=0;w<6;w++)if(We){qe?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,re[w].width,re[w].height,ze,Oe,re[w].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ye,re[w].width,re[w].height,0,ze,Oe,re[w].data);for(let le=0;le<Ie.length;le++){const Ce=Ie[le].image[w].image;qe?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,0,0,Ce.width,Ce.height,ze,Oe,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,ye,Ce.width,Ce.height,0,ze,Oe,Ce.data)}}else{qe?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,ze,Oe,re[w]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,ye,ze,Oe,re[w]);for(let le=0;le<Ie.length;le++){const oe=Ie[le];qe?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,0,0,ze,Oe,oe.image[w]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,ye,ze,Oe,oe.image[w])}}}b(y,Ke)&&x(n.TEXTURE_CUBE_MAP),te.__version=ne.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ee(E,y,O,ae,ne,te){const we=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),Se=S(O.internalFormat,we,pe,O.colorSpace);if(!i.get(y).__hasExternalTextures){const We=Math.max(1,y.width>>te),re=Math.max(1,y.height>>te);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,te,Se,We,re,y.depth,0,we,pe,null):t.texImage2D(ne,te,Se,We,re,0,we,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),J(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ne,i.get(O).__webglTexture,0,ce(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ne,i.get(O).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(E,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let ae=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||J(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Cn?ae=n.DEPTH_COMPONENT32F:ne.type===qn&&(ae=n.DEPTH_COMPONENT24));const te=ce(y);J(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,ae,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,ae,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const ae=ce(y);O&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):J(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const ae=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<ae.length;ne++){const te=ae[ne],we=s.convert(te.format,te.colorSpace),pe=s.convert(te.type),Se=S(te.internalFormat,we,pe,te.colorSpace),Ne=ce(y);O&&J(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Se,y.width,y.height):J(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),I(y.depthTexture,0);const ae=i.get(y.depthTexture).__webglTexture,ne=ce(y);if(y.depthTexture.format===xi)J(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===ir)J(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ve(E){const y=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(y.__webglFramebuffer,E)}else if(O){y.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ae]),y.__webglDepthbuffer[ae]=n.createRenderbuffer(),Re(y.__webglDepthbuffer[ae],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),Re(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(E,y,O){const ae=i.get(E);y!==void 0&&Ee(ae.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ve(E)}function L(E){const y=E.texture,O=i.get(E),ae=i.get(y);E.addEventListener("dispose",D),E.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=y.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,we=p(E)||o;if(ne){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Se=0;Se<y.mipmaps.length;Se++)O.__webglFramebuffer[pe][Se]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(te)if(r.drawBuffers){const pe=E.texture;for(let Se=0,Ne=pe.length;Se<Ne;Se++){const We=i.get(pe[Se]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&J(E)===!1){const pe=te?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Se=0;Se<pe.length;Se++){const Ne=pe[Se];O.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Se]);const We=s.convert(Ne.format,Ne.colorSpace),re=s.convert(Ne.type),et=S(Ne.internalFormat,We,re,Ne.colorSpace,E.isXRRenderTarget===!0),Ke=ce(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,et,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,O.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),De(n.TEXTURE_CUBE_MAP,y,we);for(let pe=0;pe<6;pe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Ee(O.__webglFramebuffer[pe][Se],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else Ee(O.__webglFramebuffer[pe],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);b(y,we)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const pe=E.texture;for(let Se=0,Ne=pe.length;Se<Ne;Se++){const We=pe[Se],re=i.get(We);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),De(n.TEXTURE_2D,We,we),Ee(O.__webglFramebuffer,E,We,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),b(We,we)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,ae.__webglTexture),De(pe,y,we),o&&y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)Ee(O.__webglFramebuffer[Se],E,y,n.COLOR_ATTACHMENT0,pe,Se);else Ee(O.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,pe,0);b(y,we)&&x(pe),t.unbindTexture()}E.depthBuffer&&Ve(E)}function fe(E){const y=p(E)||o,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0,ne=O.length;ae<ne;ae++){const te=O[ae];if(b(te,y)){const we=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,pe=i.get(te).__webglTexture;t.bindTexture(we,pe),x(we),t.unbindTexture()}}}function j(E){if(o&&E.samples>0&&J(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ae=E.height;let ne=n.COLOR_BUFFER_BIT;const te=[],we=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(E),Se=E.isWebGLMultipleRenderTargets===!0;if(Se)for(let Ne=0;Ne<y.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ne=0;Ne<y.length;Ne++){te.push(n.COLOR_ATTACHMENT0+Ne),E.depthBuffer&&te.push(we);const We=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(We===!1&&(E.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ne]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[we]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[we])),Se){const re=i.get(y[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,O,ae,0,0,O,ae,ne,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<y.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,pe.__webglColorRenderbuffer[Ne]);const We=i.get(y[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function ce(E){return Math.min(r.maxSamples,E.samples)}function J(E){const y=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(E){const y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function ve(E,y){const O=E.colorSpace,ae=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===lo||O!==Fn&&O!==$t&&(rt.getTransfer(O)===lt?o===!1?e.has("EXT_sRGB")===!0&&ae===rn?(E.format=lo,E.minFilter=Gt,E.generateMipmaps=!1):y=Uu.sRGBToLinear(y):(ae!==rn||ne!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=U,this.resetTextureUnits=Q,this.setTexture2D=I,this.setTexture2DArray=Y,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Fe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=J}function Gv(n,e,t){const i=t.isWebGL2;function r(s,a=$t){let o;const l=rt.getTransfer(a);if(s===jn)return n.UNSIGNED_BYTE;if(s===Eu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===ld)return n.BYTE;if(s===cd)return n.SHORT;if(s===Ao)return n.UNSIGNED_SHORT;if(s===bu)return n.INT;if(s===qn)return n.UNSIGNED_INT;if(s===Cn)return n.FLOAT;if(s===Tr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ud)return n.ALPHA;if(s===rn)return n.RGBA;if(s===hd)return n.LUMINANCE;if(s===fd)return n.LUMINANCE_ALPHA;if(s===xi)return n.DEPTH_COMPONENT;if(s===ir)return n.DEPTH_STENCIL;if(s===lo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dd)return n.RED;if(s===Tu)return n.RED_INTEGER;if(s===pd)return n.RG;if(s===Au)return n.RG_INTEGER;if(s===wu)return n.RGBA_INTEGER;if(s===pa||s===ma||s===ga||s===va)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sl||s===al||s===ol||s===ll)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===sl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ol)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ru)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cl||s===ul)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cl)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ul)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hl||s===fl||s===dl||s===pl||s===ml||s===gl||s===vl||s===xl||s===_l||s===yl||s===Sl||s===bl||s===El||s===Ml)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ml)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_l)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bl)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===El)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ml)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xa||s===Tl||s===Al)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===xa)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Al)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===md||s===wl||s===Rl||s===Cl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class zv extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ts extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hv={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ts;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Qn({extensions:{fragDepth:!0},vertexShader:Vv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new kt(new _n(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class qv extends Ti{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new Xv,p=t.getContextAttributes();let m=null,b=null;const x=[],S=[],P=new he;let R=null;const T=new Jt;T.layers.enable(1),T.viewport=new Ct;const D=new Jt;D.layers.enable(2),D.viewport=new Ct;const ee=[T,D],_=new zv;_.layers.enable(1),_.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let se=x[V];return se===void 0&&(se=new za,x[V]=se),se.getTargetRaySpace()},this.getControllerGrip=function(V){let se=x[V];return se===void 0&&(se=new za,x[V]=se),se.getGripSpace()},this.getHand=function(V){let se=x[V];return se===void 0&&(se=new za,x[V]=se),se.getHandSpace()};function Q(V){const se=S.indexOf(V.inputSource);if(se===-1)return;const xe=x[se];xe!==void 0&&(xe.update(V.inputSource,V.frame,c||a),xe.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",B);for(let V=0;V<x.length;V++){const se=S[V];se!==null&&(S[V]=null,x[V].disconnect(se))}A=null,q=null,v.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Si(d.framebufferWidth,d.framebufferHeight,{format:rn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,xe=null,Ee=null;p.depth&&(Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?ir:xi,xe=p.stencil?vi:qn);const Re={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Si(h.textureWidth,h.textureHeight,{format:rn,type:jn,depthTexture:new Xu(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ae=e.properties.get(b);Ae.__ignoreDepthValues=h.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(V){for(let se=0;se<V.removed.length;se++){const xe=V.removed[se],Ee=S.indexOf(xe);Ee>=0&&(S[Ee]=null,x[Ee].disconnect(xe))}for(let se=0;se<V.added.length;se++){const xe=V.added[se];let Ee=S.indexOf(xe);if(Ee===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(xe),Ee=Ae;break}else if(S[Ae]===null){S[Ae]=xe,Ee=Ae;break}if(Ee===-1)break}const Re=x[Ee];Re&&Re.connect(xe)}}const I=new F,Y=new F;function W(V,se,xe){I.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const Ee=I.distanceTo(Y),Re=se.projectionMatrix.elements,Ae=xe.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),Fe=Re[14]/(Re[10]+1),L=(Re[9]+1)/Re[5],fe=(Re[9]-1)/Re[5],j=(Re[8]-1)/Re[0],ce=(Ae[8]+1)/Ae[0],J=Ve*j,Le=Ve*ce,ve=Ee/(-j+ce),E=ve*-j;se.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(E),V.translateZ(ve),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const y=Ve+ve,O=Fe+ve,ae=J-E,ne=Le+(Ee-E),te=L*Fe/O*y,we=fe*Fe/O*y;V.projectionMatrix.makePerspective(ae,ne,te,we,y,O),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,se){se===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(se.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;v.texture!==null&&(V.near=v.depthNear,V.far=v.depthFar),_.near=D.near=T.near=V.near,_.far=D.far=T.far=V.far,(A!==_.near||q!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),A=_.near,q=_.far,T.near=A,T.far=q,D.near=A,D.far=q,T.updateProjectionMatrix(),D.updateProjectionMatrix(),V.updateProjectionMatrix());const se=V.parent,xe=_.cameras;X(_,se);for(let Ee=0;Ee<xe.length;Ee++)X(xe[Ee],se);xe.length===2?W(_,T,D):_.projectionMatrix.copy(T.projectionMatrix),Z(V,_,se)};function Z(V,se,xe){xe===null?V.matrix.copy(se.matrixWorld):(V.matrix.copy(xe.matrixWorld),V.matrix.invert(),V.matrix.multiply(se.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(se.projectionMatrix),V.projectionMatrixInverse.copy(se.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ar*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null};let K=null;function ie(V,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ee=!1;xe.length!==_.cameras.length&&(_.cameras.length=0,Ee=!0);for(let Ae=0;Ae<xe.length;Ae++){const Ve=xe[Ae];let Fe=null;if(d!==null)Fe=d.getViewport(Ve);else{const fe=f.getViewSubImage(h,Ve);Fe=fe.viewport,Ae===0&&(e.setRenderTargetTextures(b,fe.colorTexture,h.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(b))}let L=ee[Ae];L===void 0&&(L=new Jt,L.layers.enable(Ae),L.viewport=new Ct,ee[Ae]=L),L.matrix.fromArray(Ve.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ve.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ae===0&&(_.matrix.copy(L.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ee===!0&&_.cameras.push(L)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ae=f.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,r.renderState)}}for(let xe=0;xe<x.length;xe++){const Ee=S[xe],Re=x[xe];Ee!==null&&Re!==void 0&&Re.update(Ee,se,c||a)}v.render(e,_),K&&K(V,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const De=new Vu;De.setAnimationLoop(ie),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}function Yv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bu(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zv(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function c(b,x){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",p));const P=x.program;i.updateUBOMapping(b,P);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function u(b){const x=f();b.__bindingPointIndex=x;const S=n.createBuffer(),P=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const x=r[b.id],S=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,T=S.length;R<T;R++){const D=Array.isArray(S[R])?S[R]:[S[R]];for(let ee=0,_=D.length;ee<_;ee++){const A=D[ee];if(d(A,R,ee,P)===!0){const q=A.__offset,Q=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let B=0;B<Q.length;B++){const I=Q[B],Y=v(I);typeof I=="number"||typeof I=="boolean"?(A.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,q+U,A.__data)):I.isMatrix3?(A.__data[0]=I.elements[0],A.__data[1]=I.elements[1],A.__data[2]=I.elements[2],A.__data[3]=0,A.__data[4]=I.elements[3],A.__data[5]=I.elements[4],A.__data[6]=I.elements[5],A.__data[7]=0,A.__data[8]=I.elements[6],A.__data[9]=I.elements[7],A.__data[10]=I.elements[8],A.__data[11]=0):(I.toArray(A.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,x,S,P){const R=b.value,T=x+"_"+S;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const D=P[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(b){const x=b.uniforms;let S=0;const P=16;for(let T=0,D=x.length;T<D;T++){const ee=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,A=ee.length;_<A;_++){const q=ee[_],Q=Array.isArray(q.value)?q.value:[q.value];for(let U=0,B=Q.length;U<B;U++){const I=Q[U],Y=v(I),W=S%P;W!==0&&P-W<Y.boundary&&(S+=P-W),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Y.storage}}}const R=S%P;return R>0&&(S+=P-R),b.__size=S,b.__cache={},this}function v(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Ju{constructor(e={}){const{canvas:t=zd(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;const x=this;let S=!1,P=0,R=0,T=null,D=-1,ee=null;const _=new Ct,A=new Ct;let q=null;const Q=new tt(0);let U=0,B=t.width,I=t.height,Y=1,W=null,X=null;const Z=new Ct(0,0,B,I),K=new Ct(0,0,B,I);let ie=!1;const De=new Hu;let V=!1,se=!1,xe=null;const Ee=new _t,Re=new he,Ae=new F,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return T===null?Y:1}let L=i;function fe(M,N){for(let z=0;z<M.length;z++){const H=M[z],G=t.getContext(H,N);if(G!==null)return G}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=fe(N,M),L===null)throw fe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,ce,J,Le,ve,E,y,O,ae,ne,te,we,pe,Se,Ne,We,re,et,Ke,ze,Oe,ye,qe,C;function ue(){j=new t0(L),ce=new Kg(L,j,e),j.init(ce),ye=new Gv(L,j,ce),J=new kv(L,j,ce),Le=new r0(L),ve=new Mv,E=new Bv(L,j,J,ve,ce,ye,Le),y=new Jg(x),O=new e0(x),ae=new fp(L,ce),qe=new Yg(L,j,ae,ce),ne=new n0(L,ae,Le,qe),te=new l0(L,ne,ae,Le),Ke=new o0(L,ce,E),We=new jg(ve),we=new Ev(x,y,O,j,ce,qe,We),pe=new Yv(x,ve),Se=new Av,Ne=new Uv(j,ce),et=new qg(x,y,O,J,te,h,l),re=new Nv(x,te,ce),C=new Zv(L,Le,ce,J),ze=new Zg(L,j,Le,ce),Oe=new i0(L,j,Le,ce),Le.programs=we.programs,x.capabilities=ce,x.extensions=j,x.properties=ve,x.renderLists=Se,x.shadowMap=re,x.state=J,x.info=Le}ue();const ge=new qv(x,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(B,I,!1))},this.getSize=function(M){return M.set(B,I)},this.setSize=function(M,N,z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,I=N,t.width=Math.floor(M*Y),t.height=Math.floor(N*Y),z===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(B*Y,I*Y).floor()},this.setDrawingBufferSize=function(M,N,z){B=M,I=N,Y=z,t.width=Math.floor(M*z),t.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,N,z,H){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,N,z,H),J.viewport(_.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,N,z,H){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,N,z,H),J.scissor(A.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){J.setScissorTest(ie=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){X=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(M=!0,N=!0,z=!0){let H=0;if(M){let G=!1;if(T!==null){const be=T.texture.format;G=be===wu||be===Au||be===Tu}if(G){const be=T.texture.type,Pe=be===jn||be===qn||be===Ao||be===vi||be===Eu||be===Mu,Be=et.getClearColor(),He=et.getClearAlpha(),je=Be.r,Xe=Be.g,Ye=Be.b;Pe?(d[0]=je,d[1]=Xe,d[2]=Ye,d[3]=He,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=je,g[1]=Xe,g[2]=Ye,g[3]=He,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Se.dispose(),Ne.dispose(),ve.dispose(),y.dispose(),O.dispose(),te.dispose(),qe.dispose(),C.dispose(),we.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",wt),ge.removeEventListener("sessionend",it),xe&&(xe.dispose(),xe=null),pt.stop()};function Ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=Le.autoReset,N=re.enabled,z=re.autoUpdate,H=re.needsUpdate,G=re.type;ue(),Le.autoReset=M,re.enabled=N,re.autoUpdate=z,re.needsUpdate=H,re.type=G}function le(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const N=M.target;N.removeEventListener("dispose",oe),Ce(N)}function Ce(M){ke(M),ve.remove(M)}function ke(M){const N=ve.get(M).programs;N!==void 0&&(N.forEach(function(z){we.releaseProgram(z)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,H,G,be){N===null&&(N=Ve);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Be=Ef(M,N,z,H,G);J.setMaterial(H,Pe);let He=z.index,je=1;if(H.wireframe===!0){if(He=ne.getWireframeAttribute(z),He===void 0)return;je=2}const Xe=z.drawRange,Ye=z.attributes.position;let mt=Xe.start*je,Vt=(Xe.start+Xe.count)*je;be!==null&&(mt=Math.max(mt,be.start*je),Vt=Math.min(Vt,(be.start+be.count)*je)),He!==null?(mt=Math.max(mt,0),Vt=Math.min(Vt,He.count)):Ye!=null&&(mt=Math.max(mt,0),Vt=Math.min(Vt,Ye.count));const bt=Vt-mt;if(bt<0||bt===1/0)return;qe.setup(G,H,Be,z,He);let Sn,ct=ze;if(He!==null&&(Sn=ae.get(He),ct=Oe,ct.setIndex(Sn)),G.isMesh)H.wireframe===!0?(J.setLineWidth(H.wireframeLinewidth*Fe()),ct.setMode(L.LINES)):ct.setMode(L.TRIANGLES);else if(G.isLine){let Je=H.linewidth;Je===void 0&&(Je=1),J.setLineWidth(Je*Fe()),G.isLineSegments?ct.setMode(L.LINES):G.isLineLoop?ct.setMode(L.LINE_LOOP):ct.setMode(L.LINE_STRIP)}else G.isPoints?ct.setMode(L.POINTS):G.isSprite&&ct.setMode(L.TRIANGLES);if(G.isBatchedMesh)ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ct.renderInstances(mt,bt,G.count);else if(z.isInstancedBufferGeometry){const Je=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ca=Math.min(z.instanceCount,Je);ct.renderInstances(mt,bt,ca)}else ct.render(mt,bt)};function nt(M,N,z){M.transparent===!0&&M.side===Rt&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,is(M,N,z),M.side=$n,M.needsUpdate=!0,is(M,N,z),M.side=Rt):is(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),p=Ne.get(z),p.init(),b.push(p),z.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);const H=new Set;return M.traverse(function(G){const be=G.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){const Be=be[Pe];nt(Be,z,G),H.add(Be)}else nt(be,z,G),H.add(be)}),b.pop(),p=null,H},this.compileAsync=function(M,N,z=null){const H=this.compile(M,N,z);return new Promise(G=>{function be(){if(H.forEach(function(Pe){ve.get(Pe).currentProgram.isReady()&&H.delete(Pe)}),H.size===0){G(M);return}setTimeout(be,10)}j.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Qe=null;function ot(M){Qe&&Qe(M)}function wt(){pt.stop()}function it(){pt.start()}const pt=new Vu;pt.setAnimationLoop(ot),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(M){Qe=M,ge.setAnimationLoop(M),M===null?pt.stop():pt.start()},ge.addEventListener("sessionstart",wt),ge.addEventListener("sessionend",it),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,T),p=Ne.get(M,b.length),p.init(),b.push(p),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),De.setFromProjectionMatrix(Ee),se=this.localClippingEnabled,V=We.init(this.clippingPlanes,se),v=Se.get(M,m.length),v.init(),m.push(v),Ft(M,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(W,X),this.info.render.frame++,V===!0&&We.beginShadows();const z=p.state.shadowsArray;if(re.render(z,M,N),V===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&et.render(v,M),p.setupLights(x._useLegacyLights),N.isArrayCamera){const H=N.cameras;for(let G=0,be=H.length;G<be;G++){const Pe=H[G];qo(v,M,Pe,Pe.viewport)}}else qo(v,M,N);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,N),qe.resetDefaultState(),D=-1,ee=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ft(M,N,z,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||De.intersectsSprite(M)){H&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const Pe=te.update(M),Be=M.material;Be.visible&&v.push(M,Pe,Be,z,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||De.intersectsObject(M))){const Pe=te.update(M),Be=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ae.copy(Pe.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Be)){const He=Pe.groups;for(let je=0,Xe=He.length;je<Xe;je++){const Ye=He[je],mt=Be[Ye.materialIndex];mt&&mt.visible&&v.push(M,Pe,mt,z,Ae.z,Ye)}}else Be.visible&&v.push(M,Pe,Be,z,Ae.z,null)}}const be=M.children;for(let Pe=0,Be=be.length;Pe<Be;Pe++)Ft(be[Pe],N,z,H)}function qo(M,N,z,H){const G=M.opaque,be=M.transmissive,Pe=M.transparent;p.setupLightsView(z),V===!0&&We.setGlobalState(x.clippingPlanes,z),be.length>0&&bf(G,be,N,z),H&&J.viewport(_.copy(H)),G.length>0&&ns(G,N,z),be.length>0&&ns(be,N,z),Pe.length>0&&ns(Pe,N,z),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function bf(M,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const be=ce.isWebGL2;xe===null&&(xe=new Si(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Tr:jn,minFilter:gi,samples:be?4:0})),x.getDrawingBufferSize(Re),be?xe.setSize(Re.x,Re.y):xe.setSize(Xs(Re.x),Xs(Re.y));const Pe=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(Q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const Be=x.toneMapping;x.toneMapping=Kn,ns(M,z,H),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe);let He=!1;for(let je=0,Xe=N.length;je<Xe;je++){const Ye=N[je],mt=Ye.object,Vt=Ye.geometry,bt=Ye.material,Sn=Ye.group;if(bt.side===Rt&&mt.layers.test(H.layers)){const ct=bt.side;bt.side=zt,bt.needsUpdate=!0,Yo(mt,z,H,Vt,bt,Sn),bt.side=ct,bt.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe)),x.setRenderTarget(Pe),x.setClearColor(Q,U),x.toneMapping=Be}function ns(M,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let G=0,be=M.length;G<be;G++){const Pe=M[G],Be=Pe.object,He=Pe.geometry,je=H===null?Pe.material:H,Xe=Pe.group;Be.layers.test(z.layers)&&Yo(Be,N,z,He,je,Xe)}}function Yo(M,N,z,H,G,be){M.onBeforeRender(x,N,z,H,G,be),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(x,N,z,H,M,be),G.transparent===!0&&G.side===Rt&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,x.renderBufferDirect(z,N,H,G,M,be),G.side=$n,G.needsUpdate=!0,x.renderBufferDirect(z,N,H,G,M,be),G.side=Rt):x.renderBufferDirect(z,N,H,G,M,be),M.onAfterRender(x,N,z,H,G,be)}function is(M,N,z){N.isScene!==!0&&(N=Ve);const H=ve.get(M),G=p.state.lights,be=p.state.shadowsArray,Pe=G.state.version,Be=we.getParameters(M,G.state,be,N,z),He=we.getProgramCacheKey(Be);let je=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?O:y).get(M.envMap||H.environment),je===void 0&&(M.addEventListener("dispose",oe),je=new Map,H.programs=je);let Xe=je.get(He);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===Pe)return Ko(M,Be),Xe}else Be.uniforms=we.getUniforms(M),M.onBuild(z,Be,x),M.onBeforeCompile(Be,x),Xe=we.acquireProgram(Be,He),je.set(He,Xe),H.uniforms=Be.uniforms;const Ye=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ye.clippingPlanes=We.uniform),Ko(M,Be),H.needsLights=Tf(M),H.lightsStateVersion=Pe,H.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Xe,H.uniformsList=null,Xe}function Zo(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Is.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Ko(M,N){const z=ve.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Ef(M,N,z,H,G){N.isScene!==!0&&(N=Ve),E.resetTextureUnits();const be=N.fog,Pe=H.isMeshStandardMaterial?N.environment:null,Be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fn,He=(H.isMeshStandardMaterial?O:y).get(H.envMap||Pe),je=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Xe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ye=!!z.morphAttributes.position,mt=!!z.morphAttributes.normal,Vt=!!z.morphAttributes.color;let bt=Kn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=x.toneMapping);const Sn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=Sn!==void 0?Sn.length:0,Je=ve.get(H),ca=p.state.lights;if(V===!0&&(se===!0||M!==ee)){const Kt=M===ee&&H.id===D;We.setState(H,M,Kt)}let ft=!1;H.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ca.state.version||Je.outputColorSpace!==Be||G.isBatchedMesh&&Je.batching===!1||!G.isBatchedMesh&&Je.batching===!0||G.isInstancedMesh&&Je.instancing===!1||!G.isInstancedMesh&&Je.instancing===!0||G.isSkinnedMesh&&Je.skinning===!1||!G.isSkinnedMesh&&Je.skinning===!0||G.isInstancedMesh&&Je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Je.instancingColor===!1&&G.instanceColor!==null||Je.envMap!==He||H.fog===!0&&Je.fog!==be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==je||Je.vertexTangents!==Xe||Je.morphTargets!==Ye||Je.morphNormals!==mt||Je.morphColors!==Vt||Je.toneMapping!==bt||ce.isWebGL2===!0&&Je.morphTargetsCount!==ct)&&(ft=!0):(ft=!0,Je.__version=H.version);let ri=Je.currentProgram;ft===!0&&(ri=is(H,N,G));let jo=!1,dr=!1,ua=!1;const Lt=ri.getUniforms(),si=Je.uniforms;if(J.useProgram(ri.program)&&(jo=!0,dr=!0,ua=!0),H.id!==D&&(D=H.id,dr=!0),jo||ee!==M){Lt.setValue(L,"projectionMatrix",M.projectionMatrix),Lt.setValue(L,"viewMatrix",M.matrixWorldInverse);const Kt=Lt.map.cameraPosition;Kt!==void 0&&Kt.setValue(L,Ae.setFromMatrixPosition(M.matrixWorld)),ce.logarithmicDepthBuffer&&Lt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Lt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,dr=!0,ua=!0)}if(G.isSkinnedMesh){Lt.setOptional(L,G,"bindMatrix"),Lt.setOptional(L,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(ce.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Lt.setValue(L,"boneTexture",Kt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Lt.setOptional(L,G,"batchingTexture"),Lt.setValue(L,"batchingTexture",G._matricesTexture,E));const ha=z.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0&&ce.isWebGL2===!0)&&Ke.update(G,z,ri),(dr||Je.receiveShadow!==G.receiveShadow)&&(Je.receiveShadow=G.receiveShadow,Lt.setValue(L,"receiveShadow",G.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(si.envMap.value=He,si.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),dr&&(Lt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&Mf(si,ua),be&&H.fog===!0&&pe.refreshFogUniforms(si,be),pe.refreshMaterialUniforms(si,H,Y,I,xe),Is.upload(L,Zo(Je),si,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Is.upload(L,Zo(Je),si,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Lt.setValue(L,"center",G.center),Lt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(L,"normalMatrix",G.normalMatrix),Lt.setValue(L,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let fa=0,Af=Kt.length;fa<Af;fa++)if(ce.isWebGL2){const Jo=Kt[fa];C.update(Jo,ri),C.bind(Jo,ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ri}function Mf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Tf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,N,z){ve.get(M.texture).__webglTexture=N,ve.get(M.depthTexture).__webglTexture=z;const H=ve.get(M);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,N){const z=ve.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,z=0){T=M,P=N,R=z;let H=!0,G=null,be=!1,Pe=!1;if(M){const He=ve.get(M);He.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):He.__webglFramebuffer===void 0?E.setupRenderTarget(M):He.__hasExternalTextures&&E.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture);const je=M.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Pe=!0);const Xe=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Xe[N])?G=Xe[N][z]:G=Xe[N],be=!0):ce.isWebGL2&&M.samples>0&&E.useMultisampledRTT(M)===!1?G=ve.get(M).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[z]:G=Xe,_.copy(M.viewport),A.copy(M.scissor),q=M.scissorTest}else _.copy(Z).multiplyScalar(Y).floor(),A.copy(K).multiplyScalar(Y).floor(),q=ie;if(J.bindFramebuffer(L.FRAMEBUFFER,G)&&ce.drawBuffers&&H&&J.drawBuffers(M,G),J.viewport(_),J.scissor(A),J.setScissorTest(q),be){const He=ve.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,He.__webglTexture,z)}else if(Pe){const He=ve.get(M.texture),je=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,z||0,je)}D=-1},this.readRenderTargetPixels=function(M,N,z,H,G,be,Pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){J.bindFramebuffer(L.FRAMEBUFFER,Be);try{const He=M.texture,je=He.format,Xe=He.type;if(je!==rn&&ye.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===Tr&&(j.has("EXT_color_buffer_half_float")||ce.isWebGL2&&j.has("EXT_color_buffer_float"));if(Xe!==jn&&ye.convert(Xe)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Cn&&(ce.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&z>=0&&z<=M.height-G&&L.readPixels(N,z,H,G,ye.convert(je),ye.convert(Xe),be)}finally{const He=T!==null?ve.get(T).__webglFramebuffer:null;J.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(M,N,z=0){const H=Math.pow(2,-z),G=Math.floor(N.image.width*H),be=Math.floor(N.image.height*H);E.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,M.x,M.y,G,be),J.unbindTexture()},this.copyTextureToTexture=function(M,N,z,H=0){const G=N.image.width,be=N.image.height,Pe=ye.convert(z.format),Be=ye.convert(z.type);E.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,M.x,M.y,G,be,Pe,Be,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,M.x,M.y,N.mipmaps[0].width,N.mipmaps[0].height,Pe,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,M.x,M.y,Pe,Be,N.image),H===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(M,N,z,H,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=M.max.x-M.min.x+1,Pe=M.max.y-M.min.y+1,Be=M.max.z-M.min.z+1,He=ye.convert(H.format),je=ye.convert(H.type);let Xe;if(H.isData3DTexture)E.setTexture3D(H,0),Xe=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)E.setTexture2DArray(H,0),Xe=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const Ye=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),bt=L.getParameter(L.UNPACK_SKIP_ROWS),Sn=L.getParameter(L.UNPACK_SKIP_IMAGES),ct=z.isCompressedTexture?z.mipmaps[G]:z.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,M.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,M.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,M.min.z),z.isDataTexture||z.isData3DTexture?L.texSubImage3D(Xe,G,N.x,N.y,N.z,be,Pe,Be,He,je,ct.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Xe,G,N.x,N.y,N.z,be,Pe,Be,He,ct.data)):L.texSubImage3D(Xe,G,N.x,N.y,N.z,be,Pe,Be,He,je,ct),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,bt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Sn),G===0&&H.generateMipmaps&&L.generateMipmap(Xe),J.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),J.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,J.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?_i:Cu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?vt:Fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Kv extends Ju{}Kv.prototype.isWebGL1Renderer=!0;class jv extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Br extends kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new F,Sc=new F,bc=new _t,Ha=new Lo,As=new na;class sa extends Ht{constructor(e=new Dt,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)yc.fromBufferAttribute(t,r-1),Sc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=yc.distanceTo(Sc);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(r),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;bc.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(bc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,f=new F,h=new F,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,a.start),b=Math.min(g.count,a.start+a.count);for(let x=m,S=b-1;x<S;x+=d){const P=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,P),u.fromBufferAttribute(p,R),Ha.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),b=Math.min(p.count,a.start+a.count);for(let x=m,S=b-1;x<S;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Ha.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ec=new F,Mc=new F;class $u extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ec.fromBufferAttribute(t,r),Mc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ec.distanceTo(Mc);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qu extends sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],s=[],a=[],o=new F,l=new _t;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new F)}s[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Mt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uo extends yn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jv extends Uo{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const ws=new F,Va=new Do,Wa=new Do,Xa=new Do;class $v extends yn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(ws.subVectors(r[0],r[1]).add(r[0]),c=ws);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Va.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,p),Wa.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,p),Xa.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Wa.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Xa.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Va.calc(l),Wa.calc(l),Xa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Qv(n,e){const t=1-n;return t*t*e}function ex(n,e){return 2*(1-n)*n*e}function tx(n,e){return n*n*e}function br(n,e,t,i){return Qv(n,e)+ex(n,t)+tx(n,i)}function nx(n,e){const t=1-n;return t*t*t*e}function ix(n,e){const t=1-n;return 3*t*t*n*e}function rx(n,e){return 3*(1-n)*n*n*e}function sx(n,e){return n*n*n*e}function Er(n,e,t,i,r){return nx(n,e)+ix(n,t)+rx(n,i)+sx(n,r)}class eh extends yn{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ax extends yn{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y),Er(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class th extends yn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ox extends yn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nh extends yn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(br(e,r.x,s.x,a.x),br(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lx extends yn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(br(e,r.x,s.x,a.x),br(e,r.y,s.y,a.y),br(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ih extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Tc(o,l.x,c.x,u.x,f.x),Tc(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var ho=Object.freeze({__proto__:null,ArcCurve:Jv,CatmullRomCurve3:$v,CubicBezierCurve:eh,CubicBezierCurve3:ax,EllipseCurve:Uo,LineCurve:th,LineCurve3:ox,QuadraticBezierCurve:nh,QuadraticBezierCurve3:lx,SplineCurve:ih});class cx extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ho[r.type]().fromJSON(r))}return this}}let fo=class extends cx{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new th(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new nh(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new eh(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new ih(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new Uo(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};class yi extends fo{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new fo().fromJSON(r))}return this}}const ux={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=rh(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,f,h,d;if(i&&(s=mx(n,e,s,t)),n.length>80*t){o=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Rr(s,a,t,o,l,d,0),a}};function rh(n,e,t,i,r){let s,a;if(r===Ax(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Ac(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Ac(s,n[s],n[s+1],a);return a&&aa(a,a.next)&&(Lr(a),a=a.next),a}function Ei(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(aa(t,t.next)||ht(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&yx(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?fx(n,i,r,s):hx(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=dx(Ei(n),e,t),Rr(n,e,t,i,r,s,2)):a===2&&px(n,e,t,i,r,s):Rr(Ei(n),e,t,i,r,s,1);break}}}function hx(n){const e=n.prev,t=n,i=n.next;if(ht(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,f=o<l?o<c?o:c:l<c?l:c,h=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Ki(r,o,s,l,a,c,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fx(n,e,t,i){const r=n.prev,s=n,a=n.next;if(ht(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=o>l?o>c?o:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,m=po(d,g,e,t,i),b=po(v,p,e,t,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=m&&S&&S.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==r&&x!==a&&Ki(o,u,l,f,c,h,x.x,x.y)&&ht(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Ki(o,u,l,f,c,h,S.x,S.y)&&ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=p&&x!==r&&x!==a&&Ki(o,u,l,f,c,h,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==r&&S!==a&&Ki(o,u,l,f,c,h,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function dx(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!aa(r,s)&&sh(r,i,i.next,s)&&Cr(r,s)&&Cr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Lr(i),Lr(i.next),i=n=s),i=i.next}while(i!==n);return Ei(i)}function px(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ex(a,o)){let l=ah(a,o);a=Ei(a,a.next),l=Ei(l,l.next),Rr(a,e,t,i,r,s,0),Rr(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function mx(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=rh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(bx(c));for(r.sort(gx),s=0;s<r.length;s++)t=vx(r[s],t);return t}function gx(n,e){return n.x-e.x}function vx(n,e){const t=xx(n,e);if(!t)return e;const i=ah(t,n);return Ei(i,i.next),Ei(t,t.next)}function xx(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ki(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(s-t.x),Cr(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&_x(r,t)))&&(r=t,u=f)),t=t.next;while(t!==o);return r}function _x(n,e){return ht(n.prev,n,e.prev)<0&&ht(e.next,n,n.next)<0}function yx(n,e,t,i){let r=n;do r.z===0&&(r.z=po(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Sx(r)}function Sx(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function po(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function bx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ki(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ex(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Mx(n,e)&&(Cr(n,e)&&Cr(e,n)&&Tx(n,e)&&(ht(n.prev,n,e.prev)||ht(n,e.prev,e))||aa(n,e)&&ht(n.prev,n,n.next)>0&&ht(e.prev,e,e.next)>0)}function ht(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function aa(n,e){return n.x===e.x&&n.y===e.y}function sh(n,e,t,i){const r=Cs(ht(n,e,t)),s=Cs(ht(n,e,i)),a=Cs(ht(t,i,n)),o=Cs(ht(t,i,e));return!!(r!==s&&a!==o||r===0&&Rs(n,t,e)||s===0&&Rs(n,i,e)||a===0&&Rs(t,n,i)||o===0&&Rs(t,e,i))}function Rs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Cs(n){return n>0?1:n<0?-1:0}function Mx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&sh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cr(n,e){return ht(n.prev,n,n.next)<0?ht(n,e,n.next)>=0&&ht(n,n.prev,e)>=0:ht(n,e,n.prev)<0||ht(n,n.next,e)<0}function Tx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ah(n,e){const t=new mo(n.i,n.x,n.y),i=new mo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ac(n,e,t,i){const r=new mo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ax(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Un{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Un.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];wc(e),Rc(i,e);let a=e.length;t.forEach(wc);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Rc(i,t[l]);const o=ux.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function wc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Rc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Fo extends Dt{constructor(e=new yi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new At(r,3)),this.setAttribute("uv",new At(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:wx;let x,S=!1,P,R,T,D;m&&(x=m.getSpacedPoints(u),S=!0,h=!1,P=m.computeFrenetFrames(u,!1),R=new F,T=new F,D=new F),h||(p=0,d=0,g=0,v=0);const ee=o.extractPoints(c);let _=ee.shape;const A=ee.holes;if(!Un.isClockWise(_)){_=_.reverse();for(let L=0,fe=A.length;L<fe;L++){const j=A[L];Un.isClockWise(j)&&(A[L]=j.reverse())}}const Q=Un.triangulateShape(_,A),U=_;for(let L=0,fe=A.length;L<fe;L++){const j=A[L];_=_.concat(j)}function B(L,fe,j){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(fe,j)}const I=_.length,Y=Q.length;function W(L,fe,j){let ce,J,Le;const ve=L.x-fe.x,E=L.y-fe.y,y=j.x-L.x,O=j.y-L.y,ae=ve*ve+E*E,ne=ve*O-E*y;if(Math.abs(ne)>Number.EPSILON){const te=Math.sqrt(ae),we=Math.sqrt(y*y+O*O),pe=fe.x-E/te,Se=fe.y+ve/te,Ne=j.x-O/we,We=j.y+y/we,re=((Ne-pe)*O-(We-Se)*y)/(ve*O-E*y);ce=pe+ve*re-L.x,J=Se+E*re-L.y;const et=ce*ce+J*J;if(et<=2)return new he(ce,J);Le=Math.sqrt(et/2)}else{let te=!1;ve>Number.EPSILON?y>Number.EPSILON&&(te=!0):ve<-Number.EPSILON?y<-Number.EPSILON&&(te=!0):Math.sign(E)===Math.sign(O)&&(te=!0),te?(ce=-E,J=ve,Le=Math.sqrt(ae)):(ce=ve,J=E,Le=Math.sqrt(ae/2))}return new he(ce/Le,J/Le)}const X=[];for(let L=0,fe=U.length,j=fe-1,ce=L+1;L<fe;L++,j++,ce++)j===fe&&(j=0),ce===fe&&(ce=0),X[L]=W(U[L],U[j],U[ce]);const Z=[];let K,ie=X.concat();for(let L=0,fe=A.length;L<fe;L++){const j=A[L];K=[];for(let ce=0,J=j.length,Le=J-1,ve=ce+1;ce<J;ce++,Le++,ve++)Le===J&&(Le=0),ve===J&&(ve=0),K[ce]=W(j[ce],j[Le],j[ve]);Z.push(K),ie=ie.concat(K)}for(let L=0;L<p;L++){const fe=L/p,j=d*Math.cos(fe*Math.PI/2),ce=g*Math.sin(fe*Math.PI/2)+v;for(let J=0,Le=U.length;J<Le;J++){const ve=B(U[J],X[J],ce);Ee(ve.x,ve.y,-j)}for(let J=0,Le=A.length;J<Le;J++){const ve=A[J];K=Z[J];for(let E=0,y=ve.length;E<y;E++){const O=B(ve[E],K[E],ce);Ee(O.x,O.y,-j)}}}const De=g+v;for(let L=0;L<I;L++){const fe=h?B(_[L],ie[L],De):_[L];S?(T.copy(P.normals[0]).multiplyScalar(fe.x),R.copy(P.binormals[0]).multiplyScalar(fe.y),D.copy(x[0]).add(T).add(R),Ee(D.x,D.y,D.z)):Ee(fe.x,fe.y,0)}for(let L=1;L<=u;L++)for(let fe=0;fe<I;fe++){const j=h?B(_[fe],ie[fe],De):_[fe];S?(T.copy(P.normals[L]).multiplyScalar(j.x),R.copy(P.binormals[L]).multiplyScalar(j.y),D.copy(x[L]).add(T).add(R),Ee(D.x,D.y,D.z)):Ee(j.x,j.y,f/u*L)}for(let L=p-1;L>=0;L--){const fe=L/p,j=d*Math.cos(fe*Math.PI/2),ce=g*Math.sin(fe*Math.PI/2)+v;for(let J=0,Le=U.length;J<Le;J++){const ve=B(U[J],X[J],ce);Ee(ve.x,ve.y,f+j)}for(let J=0,Le=A.length;J<Le;J++){const ve=A[J];K=Z[J];for(let E=0,y=ve.length;E<y;E++){const O=B(ve[E],K[E],ce);S?Ee(O.x,O.y+x[u-1].y,x[u-1].x+j):Ee(O.x,O.y,f+j)}}}V(),se();function V(){const L=r.length/3;if(h){let fe=0,j=I*fe;for(let ce=0;ce<Y;ce++){const J=Q[ce];Re(J[2]+j,J[1]+j,J[0]+j)}fe=u+p*2,j=I*fe;for(let ce=0;ce<Y;ce++){const J=Q[ce];Re(J[0]+j,J[1]+j,J[2]+j)}}else{for(let fe=0;fe<Y;fe++){const j=Q[fe];Re(j[2],j[1],j[0])}for(let fe=0;fe<Y;fe++){const j=Q[fe];Re(j[0]+I*u,j[1]+I*u,j[2]+I*u)}}i.addGroup(L,r.length/3-L,0)}function se(){const L=r.length/3;let fe=0;xe(U,fe),fe+=U.length;for(let j=0,ce=A.length;j<ce;j++){const J=A[j];xe(J,fe),fe+=J.length}i.addGroup(L,r.length/3-L,1)}function xe(L,fe){let j=L.length;for(;--j>=0;){const ce=j;let J=j-1;J<0&&(J=L.length-1);for(let Le=0,ve=u+p*2;Le<ve;Le++){const E=I*Le,y=I*(Le+1),O=fe+ce+E,ae=fe+J+E,ne=fe+J+y,te=fe+ce+y;Ae(O,ae,ne,te)}}}function Ee(L,fe,j){l.push(L),l.push(fe),l.push(j)}function Re(L,fe,j){Ve(L),Ve(fe),Ve(j);const ce=r.length/3,J=b.generateTopUV(i,r,ce-3,ce-2,ce-1);Fe(J[0]),Fe(J[1]),Fe(J[2])}function Ae(L,fe,j,ce){Ve(L),Ve(fe),Ve(ce),Ve(fe),Ve(j),Ve(ce);const J=r.length/3,Le=b.generateSideWallUV(i,r,J-6,J-3,J-2,J-1);Fe(Le[0]),Fe(Le[1]),Fe(Le[3]),Fe(Le[1]),Fe(Le[2]),Fe(Le[3])}function Ve(L){r.push(l[L*3+0]),r.push(l[L*3+1]),r.push(l[L*3+2])}function Fe(L){s.push(L.x),s.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Rx(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ho[r.type]().fromJSON(r)),new Fo(i,e.options)}}const wx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-f),new he(h,1-g),new he(v,1-m)]:[new he(o,1-l),new he(u,1-f),new he(d,1-g),new he(p,1-m)]}};function Rx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sr extends Dt{constructor(e=new yi([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(s,3)),this.setAttribute("uv",new At(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const g=h.holes;Un.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const b=g[p];Un.isClockWise(b)===!0&&(g[p]=b.reverse())}const v=Un.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){const b=d[p];r.push(b.x,b.y,0),s.push(0,0,1),a.push(b.x,b.y)}for(let p=0,m=v.length;p<m;p++){const b=v[p],x=b[0]+f,S=b[1]+f,P=b[2]+f;i.push(x,S,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Cx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new sr(i,e.curveSegments)}}function Cx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}const qs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lx{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Px=new Lx;class Gr{constructor(e){this.manager=e!==void 0?e:Px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";const wn={};class Ux extends Error{constructor(e,t){super(e),this.response=t}}class Dx extends Gr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qs.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:i,onError:r});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=wn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){b();function b(){f.read().then(({done:x,value:S})=>{if(x)m.close();else{v+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let R=0,T=u.length;R<T;R++){const D=u[R];D.onProgress&&D.onProgress(P)}m.enqueue(S),b()}})}}});return new Response(p)}else throw new Ux(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{qs.add(e,c);const u=wn[e];delete wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fx extends Gr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=qs.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=wr("img");function l(){u(),qs.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oh extends Gr{constructor(e){super(e)}load(e,t,i,r){const s=new Bt,a=new Fx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ox{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cc(){return(typeof performance>"u"?Date:performance).now()}class Lc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lh extends $u{constructor(e=10,t=10,i=4473924,r=8947848){i=new tt(i),r=new tt(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=h===s?i:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new Dt;u.setAttribute("position",new At(l,3)),u.setAttribute("color",new At(c,3));const f=new Br({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ix extends $u{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Dt;r.setAttribute("position",new At(t,3)),r.setAttribute("color",new At(i,3));const s=new Br({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new tt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nx{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new fo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const b=[];for(let x=0,S=m.length;x<S;x++){const P=m[x],R=new yi;R.curves=P.curves,b.push(R)}return b}function i(m,b){const x=b.length;let S=!1;for(let P=x-1,R=0;R<x;P=R++){let T=b[P],D=b[R],ee=D.x-T.x,_=D.y-T.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(T=b[R],ee=-ee,D=b[P],_=-_),m.y<T.y||m.y>D.y)continue;if(m.y===T.y){if(m.x===T.x)return!0}else{const A=_*(m.x-T.x)-ee*(m.y-T.y);if(A===0)return!0;if(A<0)continue;S=!S}}else{if(m.y!==T.y)continue;if(D.x<=m.x&&m.x<=T.x||T.x<=m.x&&m.x<=D.x)return!0}}return S}const r=Un.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new yi,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,v;h[g]=void 0,d[g]=[];for(let m=0,b=s.length;m<b;m++)o=s[m],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&h[g]&&g++,h[g]={s:new yi,p:v},h[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!h[0])return t(s);if(h.length>1){let m=!1,b=0;for(let x=0,S=h.length;x<S;x++)f[x]=[];for(let x=0,S=h.length;x<S;x++){const P=d[x];for(let R=0;R<P.length;R++){const T=P[R];let D=!0;for(let ee=0;ee<h.length;ee++)i(T.p,h[ee].p)&&(x!==ee&&b++,D?(D=!1,f[ee].push(T)):m=!0);D&&f[x].push(T)}}b>0&&m===!1&&(d=f)}let p;for(let m=0,b=h.length;m<b;m++){l=h[m].s,c.push(l),p=d[m];for(let x=0,S=p.length;x<S;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);const Pc={type:"change"},qa={type:"start"},Uc={type:"end"},Ls=new Lo,Dc=new Xn,kx=Math.cos(70*Co.DEG2RAD);class Bx extends Ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Ne),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Pc),i.update(),s=r.NONE},this.update=function(){const C=new F,ue=new bi().setFromUnitVectors(e.up,new F(0,1,0)),ge=ue.clone().invert(),Ie=new F,w=new bi,le=new F,oe=2*Math.PI;return function(ke=null){const nt=i.object.position;C.copy(nt).sub(i.target),C.applyQuaternion(ue),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&q(_(ke)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Qe=i.minAzimuthAngle,ot=i.maxAzimuthAngle;isFinite(Qe)&&isFinite(ot)&&(Qe<-Math.PI?Qe+=oe:Qe>Math.PI&&(Qe-=oe),ot<-Math.PI?ot+=oe:ot>Math.PI&&(ot-=oe),Qe<=ot?o.theta=Math.max(Qe,Math.min(ot,o.theta)):o.theta=o.theta>(Qe+ot)/2?Math.max(Qe,o.theta):Math.min(ot,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=Z(o.radius):o.radius=Z(o.radius*c),C.setFromSpherical(o),C.applyQuaternion(ge),nt.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let wt=!1;if(i.zoomToCursor&&R){let it=null;if(i.object.isPerspectiveCamera){const pt=C.length();it=Z(pt*c);const Ft=pt-it;i.object.position.addScaledVector(S,Ft),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const pt=new F(P.x,P.y,0);pt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),wt=!0;const Ft=new F(P.x,P.y,0);Ft.unproject(i.object),i.object.position.sub(Ft).add(pt),i.object.updateMatrixWorld(),it=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Ls.origin.copy(i.object.position),Ls.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ls.direction))<kx?e.lookAt(i.target):(Dc.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ls.intersectPlane(Dc,i.target))))}else i.object.isOrthographicCamera&&(wt=c!==1,wt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix()));return c=1,R=!1,wt||Ie.distanceToSquared(i.object.position)>a||8*(1-w.dot(i.object.quaternion))>a||le.distanceToSquared(i.target)>0?(i.dispatchEvent(Pc),Ie.copy(i.object.position),w.copy(i.object.quaternion),le.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",O),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",O),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Lc,l=new Lc;let c=1;const u=new F,f=new he,h=new he,d=new he,g=new he,v=new he,p=new he,m=new he,b=new he,x=new he,S=new F,P=new he;let R=!1;const T=[],D={};let ee=!1;function _(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function A(C){const ue=Math.abs(C*.01);return Math.pow(.95,i.zoomSpeed*ue)}function q(C){l.theta-=C}function Q(C){l.phi-=C}const U=function(){const C=new F;return function(ge,Ie){C.setFromMatrixColumn(Ie,0),C.multiplyScalar(-ge),u.add(C)}}(),B=function(){const C=new F;return function(ge,Ie){i.screenSpacePanning===!0?C.setFromMatrixColumn(Ie,1):(C.setFromMatrixColumn(Ie,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ge),u.add(C)}}(),I=function(){const C=new F;return function(ge,Ie){const w=i.domElement;if(i.object.isPerspectiveCamera){const le=i.object.position;C.copy(le).sub(i.target);let oe=C.length();oe*=Math.tan(i.object.fov/2*Math.PI/180),U(2*ge*oe/w.clientHeight,i.object.matrix),B(2*Ie*oe/w.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(ge*(i.object.right-i.object.left)/i.object.zoom/w.clientWidth,i.object.matrix),B(Ie*(i.object.top-i.object.bottom)/i.object.zoom/w.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(C,ue){if(!i.zoomToCursor)return;R=!0;const ge=i.domElement.getBoundingClientRect(),Ie=C-ge.left,w=ue-ge.top,le=ge.width,oe=ge.height;P.x=Ie/le*2-1,P.y=-(w/oe)*2+1,S.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function K(C){f.set(C.clientX,C.clientY)}function ie(C){X(C.clientX,C.clientX),m.set(C.clientX,C.clientY)}function De(C){g.set(C.clientX,C.clientY)}function V(C){h.set(C.clientX,C.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;q(2*Math.PI*d.x/ue.clientHeight),Q(2*Math.PI*d.y/ue.clientHeight),f.copy(h),i.update()}function se(C){b.set(C.clientX,C.clientY),x.subVectors(b,m),x.y>0?Y(A(x.y)):x.y<0&&W(A(x.y)),m.copy(b),i.update()}function xe(C){v.set(C.clientX,C.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),I(p.x,p.y),g.copy(v),i.update()}function Ee(C){X(C.clientX,C.clientY),C.deltaY<0?W(A(C.deltaY)):C.deltaY>0&&Y(A(C.deltaY)),i.update()}function Re(C){let ue=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),ue=!0;break}ue&&(C.preventDefault(),i.update())}function Ae(C){if(T.length===1)f.set(C.pageX,C.pageY);else{const ue=ye(C),ge=.5*(C.pageX+ue.x),Ie=.5*(C.pageY+ue.y);f.set(ge,Ie)}}function Ve(C){if(T.length===1)g.set(C.pageX,C.pageY);else{const ue=ye(C),ge=.5*(C.pageX+ue.x),Ie=.5*(C.pageY+ue.y);g.set(ge,Ie)}}function Fe(C){const ue=ye(C),ge=C.pageX-ue.x,Ie=C.pageY-ue.y,w=Math.sqrt(ge*ge+Ie*Ie);m.set(0,w)}function L(C){i.enableZoom&&Fe(C),i.enablePan&&Ve(C)}function fe(C){i.enableZoom&&Fe(C),i.enableRotate&&Ae(C)}function j(C){if(T.length==1)h.set(C.pageX,C.pageY);else{const ge=ye(C),Ie=.5*(C.pageX+ge.x),w=.5*(C.pageY+ge.y);h.set(Ie,w)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;q(2*Math.PI*d.x/ue.clientHeight),Q(2*Math.PI*d.y/ue.clientHeight),f.copy(h)}function ce(C){if(T.length===1)v.set(C.pageX,C.pageY);else{const ue=ye(C),ge=.5*(C.pageX+ue.x),Ie=.5*(C.pageY+ue.y);v.set(ge,Ie)}p.subVectors(v,g).multiplyScalar(i.panSpeed),I(p.x,p.y),g.copy(v)}function J(C){const ue=ye(C),ge=C.pageX-ue.x,Ie=C.pageY-ue.y,w=Math.sqrt(ge*ge+Ie*Ie);b.set(0,w),x.set(0,Math.pow(b.y/m.y,i.zoomSpeed)),Y(x.y),m.copy(b);const le=(C.pageX+ue.x)*.5,oe=(C.pageY+ue.y)*.5;X(le,oe)}function Le(C){i.enableZoom&&J(C),i.enablePan&&ce(C)}function ve(C){i.enableZoom&&J(C),i.enableRotate&&j(C)}function E(C){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",O)),Ke(C),C.pointerType==="touch"?We(C):ae(C))}function y(C){i.enabled!==!1&&(C.pointerType==="touch"?re(C):ne(C))}function O(C){switch(ze(C),T.length){case 0:i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",O),i.dispatchEvent(Uc),s=r.NONE;break;case 1:const ue=T[0],ge=D[ue];We({pointerId:ue,pageX:ge.x,pageY:ge.y});break}}function ae(C){let ue;switch(C.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case wi.DOLLY:if(i.enableZoom===!1)return;ie(C),s=r.DOLLY;break;case wi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;De(C),s=r.PAN}else{if(i.enableRotate===!1)return;K(C),s=r.ROTATE}break;case wi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(i.enablePan===!1)return;De(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function ne(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(C);break;case r.DOLLY:if(i.enableZoom===!1)return;se(C);break;case r.PAN:if(i.enablePan===!1)return;xe(C);break}}function te(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(qa),Ee(we(C)),i.dispatchEvent(Uc))}function we(C){const ue=C.deltaMode,ge={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(ue){case 1:ge.deltaY*=16;break;case 2:ge.deltaY*=100;break}return C.ctrlKey&&!ee&&(ge.deltaY*=10),ge}function pe(C){C.key==="Control"&&(ee=!0,i.domElement.getRootNode().addEventListener("keyup",Se,{passive:!0,capture:!0}))}function Se(C){C.key==="Control"&&(ee=!1,i.domElement.getRootNode().removeEventListener("keyup",Se,{passive:!0,capture:!0}))}function Ne(C){i.enabled===!1||i.enablePan===!1||Re(C)}function We(C){switch(Oe(C),T.length){case 1:switch(i.touches.ONE){case Ri.ROTATE:if(i.enableRotate===!1)return;Ae(C),s=r.TOUCH_ROTATE;break;case Ri.PAN:if(i.enablePan===!1)return;Ve(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ri.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(C),s=r.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;fe(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(qa)}function re(C){switch(Oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;j(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(C),i.update();break;default:s=r.NONE}}function et(C){i.enabled!==!1&&C.preventDefault()}function Ke(C){T.push(C.pointerId)}function ze(C){delete D[C.pointerId];for(let ue=0;ue<T.length;ue++)if(T[ue]==C.pointerId){T.splice(ue,1);return}}function Oe(C){let ue=D[C.pointerId];ue===void 0&&(ue=new he,D[C.pointerId]=ue),ue.set(C.pageX,C.pageY)}function ye(C){const ue=C.pointerId===T[0]?T[1]:T[0];return D[ue]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",O),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",pe,{passive:!0,capture:!0}),this.update()}}class Gx extends Fo{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class zx{constructor(e){this.width=100,this.height=100,this.position=new F(50,-75,0),this.scene=e;const t="#"+Math.floor(Math.random()*16777215).toString(16);this.color=t;const i=new _n(this.width,this.height);this.material=new sn({color:this.color,side:Rt}),this.mesh=new kt(i,this.material),this.mesh.position.setX(this.position.x),this.mesh.position.setY(this.position.y),this.mesh.position.setZ(this.position.z),this.mesh.translateX(this.width/2),this.mesh.translateY(-this.height/2),e.add(this.mesh),this.addDebugBoundingBox()}calculateShape(){this.shape=new yi,function(t,i,r,s,a){t.moveTo(0,0),t.lineTo(0,-a),t.lineTo(s,-a),t.lineTo(s,0),t.lineTo(0,0)}(this.shape,0,0,this.width,this.height)}addDebugBoundingBox(){this.calculateShape();const e=new sr(this.shape),t=new sn({color:16711680,side:Rt});this.debugMesh=new Qu(e,t),this.debugMesh.position.setX(this.position.x),this.debugMesh.position.setY(this.position.y),this.debugMesh.position.setZ(this.position.z),this.scene.add(this.debugMesh)}addLineShape(e,t,i,r,s,a,o,l,c,u){t.autoClose=!0;const f=t.getPoints(),h=t.getSpacedPoints(50),d=new Dt().setFromPoints(f);new Dt().setFromPoints(h);let g=new sa(d,new Br({color:i}));g.position.set(r,s,a-25),g.rotation.set(o,l,c),g.scale.set(u,u,u),e.add(g)}setX(e){this.position.setX(e),this.mesh.position.setX(this.position.x),this.mesh.translateX(this.width/2),this.debugMesh.position.setX(this.position.x)}setY(e){this.position.setY(-e),this.mesh.position.setY(this.position.y),this.mesh.translateY(-this.height/2),this.debugMesh.position.setY(this.position.y)}setHeight(e){this.height=e,this.updateRectGeometry(),this.updateDbgGeometry()}setWidth(e){this.width=e,this.updateRectGeometry(),this.updateDbgGeometry()}updateRectGeometry(){this.mesh.geometry.dispose(),this.mesh.geometry=new _n(this.width,this.height),this.mesh.position.setX(this.position.x),this.mesh.position.setY(this.position.y),this.mesh.position.setZ(this.position.z),this.mesh.translateX(this.width/2),this.mesh.translateY(-this.height/2)}updateDbgGeometry(){this.calculateShape();const e=new sr(this.shape);this.debugMesh.geometry.dispose(),this.debugMesh.geometry=e}setColor(e){this.color=e,this.mesh.material.color.set(e)}print(){console.log("Hi, 1 I'm Rectangle.")}}class ti{constructor(e){this.width=100,this.height=100,this.position=new F(50,-75,0),this.scene=e;const t=new _n(this.width,this.height),i="#"+Math.floor(Math.random()*16777215).toString(16),r=new sn({color:i,side:Rt});this.mesh=new kt(t,r),this.mesh.position.setX(this.position.x),this.mesh.position.setY(this.position.y),this.mesh.position.setZ(this.position.z),this.mesh.translateX(this.width/2),this.mesh.translateY(-this.height/2),e.add(this.mesh),this.addDebugBoundingBox()}calculateShape(){this.shape=new yi,function(t,i,r,s,a){t.moveTo(0,0),t.lineTo(0,-a),t.lineTo(s,-a),t.lineTo(s,0),t.lineTo(0,0)}(this.shape,0,0,this.width,this.height)}addDebugBoundingBox(){this.calculateShape();const e=new sr(this.shape),t=new sn({color:16711680,side:Rt});this.debugMesh=new Qu(e,t),this.debugMesh.position.setX(this.position.x),this.debugMesh.position.setY(this.position.y),this.debugMesh.position.setZ(this.position.z),this.scene.add(this.debugMesh)}addLineShape(e,t,i,r,s,a,o,l,c,u){t.autoClose=!0;const f=t.getPoints(),h=t.getSpacedPoints(50),d=new Dt().setFromPoints(f);new Dt().setFromPoints(h);let g=new sa(d,new Br({color:i}));g.position.set(r,s,a-25),g.rotation.set(o,l,c),g.scale.set(u,u,u),e.add(g)}setX(e){this.position.setX(e),this.mesh.position.setX(this.position.x),this.mesh.translateX(this.width/2),this.debugMesh.position.setX(this.position.x)}setY(e){this.position.setY(-e),this.mesh.position.setY(this.position.y),this.mesh.translateY(-this.height/2),this.debugMesh.position.setY(this.position.y)}setHeight(e){this.height=e,this.updateRectGeometry(),this.updateDbgGeometry()}setWidth(e){this.width=e,this.updateRectGeometry(),this.updateDbgGeometry()}updateRectGeometry(){this.mesh.geometry.dispose(),this.mesh.geometry=new _n(this.width,this.height),this.mesh.position.setX(this.position.x),this.mesh.position.setY(this.position.y),this.mesh.position.setZ(this.position.z),this.mesh.translateX(this.width/2),this.mesh.translateY(-this.height/2)}updateDbgGeometry(){this.calculateShape();const e=new sr(this.shape);this.debugMesh.geometry.dispose(),this.debugMesh.geometry=e}setSource(e){this.source=e;const i=new oh().load(e);i.colorSpace=vt;const r=new sn({map:i,side:Rt});this.mesh.material=r}}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var n=function(){try{var t={},i=Object.defineProperty,r=i(t,t,t)&&i}catch{}return r}(),e=function(t){if(this==null)throw TypeError();var i=String(this),r=i.length,s=t?Number(t):0;if(s!=s&&(s=0),!(s<0||s>=r)){var a=i.charCodeAt(s),o;return a>=55296&&a<=56319&&r>s+1&&(o=i.charCodeAt(s+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}};n?n(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var Oo=0,ch=-3;function Pr(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function Hx(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Pr,this.dtree=new Pr}var uh=new Pr,hh=new Pr,Io=new Uint8Array(30),No=new Uint16Array(30),fh=new Uint8Array(30),dh=new Uint16Array(30),Vx=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fc=new Pr,fn=new Uint8Array(320);function ph(n,e,t,i){var r,s;for(r=0;r<t;++r)n[r]=0;for(r=0;r<30-t;++r)n[r+t]=r/t|0;for(s=i,r=0;r<30;++r)e[r]=s,s+=1<<n[r]}function Wx(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var Oc=new Uint16Array(16);function Ya(n,e,t,i){var r,s;for(r=0;r<16;++r)n.table[r]=0;for(r=0;r<i;++r)n.table[e[t+r]]++;for(n.table[0]=0,s=0,r=0;r<16;++r)Oc[r]=s,s+=n.table[r];for(r=0;r<i;++r)e[t+r]&&(n.trans[Oc[e[t+r]]++]=r)}function Xx(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function dn(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function go(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,r=0,s=n.tag;do i=2*i+(s&1),s>>>=1,++r,t+=e.table[r],i-=e.table[r];while(i>=0);return n.tag=s,n.bitcount-=r,e.trans[t+i]}function qx(n,e,t){var i,r,s,a,o,l;for(i=dn(n,5,257),r=dn(n,5,1),s=dn(n,4,4),a=0;a<19;++a)fn[a]=0;for(a=0;a<s;++a){var c=dn(n,3,0);fn[Vx[a]]=c}for(Ya(Fc,fn,0,19),o=0;o<i+r;){var u=go(n,Fc);switch(u){case 16:var f=fn[o-1];for(l=dn(n,2,3);l;--l)fn[o++]=f;break;case 17:for(l=dn(n,3,3);l;--l)fn[o++]=0;break;case 18:for(l=dn(n,7,11);l;--l)fn[o++]=0;break;default:fn[o++]=u;break}}Ya(e,fn,0,i),Ya(t,fn,i,r)}function Ic(n,e,t){for(;;){var i=go(n,e);if(i===256)return Oo;if(i<256)n.dest[n.destLen++]=i;else{var r,s,a,o;for(i-=257,r=dn(n,Io[i],No[i]),s=go(n,t),a=n.destLen-dn(n,fh[s],dh[s]),o=a;o<a+r;++o)n.dest[n.destLen++]=n.dest[o]}}}function Yx(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return ch;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,Oo}function Zx(n,e){var t=new Hx(n,e),i,r,s;do{switch(i=Xx(t),r=dn(t,2,0),r){case 0:s=Yx(t);break;case 1:s=Ic(t,uh,hh);break;case 2:qx(t,t.ltree,t.dtree),s=Ic(t,t.ltree,t.dtree);break;default:s=ch}if(s!==Oo)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}Wx(uh,hh);ph(Io,No,4,3);ph(fh,dh,2,1);Io[28]=0;No[28]=258;var Kx=Zx;function Xi(n,e,t,i,r){return Math.pow(1-r,3)*n+3*Math.pow(1-r,2)*r*e+3*(1-r)*Math.pow(r,2)*t+Math.pow(r,3)*i}function On(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}On.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};On.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};On.prototype.addX=function(n){this.addPoint(n,null)};On.prototype.addY=function(n){this.addPoint(null,n)};On.prototype.addBezier=function(n,e,t,i,r,s,a,o){var l=[n,e],c=[t,i],u=[r,s],f=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(var h=0;h<=1;h++){var d=6*l[h]-12*c[h]+6*u[h],g=-3*l[h]+9*c[h]-9*u[h]+3*f[h],v=3*c[h]-3*l[h];if(g===0){if(d===0)continue;var p=-v/d;0<p&&p<1&&(h===0&&this.addX(Xi(l[h],c[h],u[h],f[h],p)),h===1&&this.addY(Xi(l[h],c[h],u[h],f[h],p)));continue}var m=Math.pow(d,2)-4*v*g;if(!(m<0)){var b=(-d+Math.sqrt(m))/(2*g);0<b&&b<1&&(h===0&&this.addX(Xi(l[h],c[h],u[h],f[h],b)),h===1&&this.addY(Xi(l[h],c[h],u[h],f[h],b)));var x=(-d-Math.sqrt(m))/(2*g);0<x&&x<1&&(h===0&&this.addX(Xi(l[h],c[h],u[h],f[h],x)),h===1&&this.addY(Xi(l[h],c[h],u[h],f[h],x)))}}};On.prototype.addQuad=function(n,e,t,i,r,s){var a=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=a+1/3*(r-n),c=o+1/3*(s-e);this.addBezier(n,e,a,o,l,c,r,s)};function xt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}xt.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};xt.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};xt.prototype.curveTo=xt.prototype.bezierCurveTo=function(n,e,t,i,r,s){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:r,y:s})};xt.prototype.quadTo=xt.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};xt.prototype.close=xt.prototype.closePath=function(){this.commands.push({type:"Z"})};xt.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof On){var e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};xt.prototype.getBoundingBox=function(){for(var n=new On,e=0,t=0,i=0,r=0,s=0;s<this.commands.length;s++){var a=this.commands[s];switch(a.type){case"M":n.addPoint(a.x,a.y),e=i=a.x,t=r=a.y;break;case"L":n.addPoint(a.x,a.y),i=a.x,r=a.y;break;case"Q":n.addQuad(i,r,a.x1,a.y1,a.x,a.y),i=a.x,r=a.y;break;case"C":n.addBezier(i,r,a.x1,a.y1,a.x2,a.y2,a.x,a.y),i=a.x,r=a.y;break;case"Z":i=e,r=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n};xt.prototype.draw=function(n){n.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?n.moveTo(t.x,t.y):t.type==="L"?n.lineTo(t.x,t.y):t.type==="C"?n.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?n.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};xt.prototype.toPathData=function(n){n=n!==void 0?n:2;function e(a){return Math.round(a)===a?""+Math.round(a):a.toFixed(n)}function t(){for(var a=arguments,o="",l=0;l<arguments.length;l+=1){var c=a[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var i="",r=0;r<this.commands.length;r+=1){var s=this.commands[r];s.type==="M"?i+="M"+t(s.x,s.y):s.type==="L"?i+="L"+t(s.x,s.y):s.type==="C"?i+="C"+t(s.x1,s.y1,s.x2,s.y2,s.x,s.y):s.type==="Q"?i+="Q"+t(s.x1,s.y1,s.x,s.y):s.type==="Z"&&(i+="Z")}return i};xt.prototype.toSVG=function(n){var e='<path d="';return e+=this.toPathData(n),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};xt.prototype.toDOMElement=function(n){var e=this.toPathData(n),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function mh(n){throw new Error(n)}function Nc(n,e){n||mh(e)}var Ue={fail:mh,argument:Nc,assert:Nc},kc=32768,Bc=2147483648,ar={},me={},Ge={};function cn(n){return function(){return n}}me.BYTE=function(n){return Ue.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};Ge.BYTE=cn(1);me.CHAR=function(n){return[n.charCodeAt(0)]};Ge.CHAR=cn(1);me.CHARARRAY=function(n){typeof n>"u"&&(n="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};Ge.CHARARRAY=function(n){return typeof n>"u"?0:n.length};me.USHORT=function(n){return[n>>8&255,n&255]};Ge.USHORT=cn(2);me.SHORT=function(n){return n>=kc&&(n=-(2*kc-n)),[n>>8&255,n&255]};Ge.SHORT=cn(2);me.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};Ge.UINT24=cn(3);me.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};Ge.ULONG=cn(4);me.LONG=function(n){return n>=Bc&&(n=-(2*Bc-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};Ge.LONG=cn(4);me.FIXED=me.ULONG;Ge.FIXED=Ge.ULONG;me.FWORD=me.SHORT;Ge.FWORD=Ge.SHORT;me.UFWORD=me.USHORT;Ge.UFWORD=Ge.USHORT;me.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};Ge.LONGDATETIME=cn(8);me.TAG=function(n){return Ue.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};Ge.TAG=cn(4);me.Card8=me.BYTE;Ge.Card8=Ge.BYTE;me.Card16=me.USHORT;Ge.Card16=Ge.USHORT;me.OffSize=me.BYTE;Ge.OffSize=Ge.BYTE;me.SID=me.USHORT;Ge.SID=Ge.USHORT;me.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?me.NUMBER16(n):me.NUMBER32(n)};Ge.NUMBER=function(n){return me.NUMBER(n).length};me.NUMBER16=function(n){return[28,n>>8&255,n&255]};Ge.NUMBER16=cn(3);me.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};Ge.NUMBER32=cn(5);me.REAL=function(n){var e=n.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var i=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*i)/i).toString()}for(var r="",s=0,a=e.length;s<a;s+=1){var o=e[s];o==="e"?r+=e[++s]==="-"?"c":"b":o==="."?r+="a":o==="-"?r+="e":r+=o}r+=r.length&1?"f":"ff";for(var l=[30],c=0,u=r.length;c<u;c+=2)l.push(parseInt(r.substr(c,2),16));return l};Ge.REAL=function(n){return me.REAL(n).length};me.NAME=me.CHARARRAY;Ge.NAME=Ge.CHARARRAY;me.STRING=me.CHARARRAY;Ge.STRING=Ge.CHARARRAY;ar.UTF8=function(n,e,t){for(var i=[],r=t,s=0;s<r;s++,e+=1)i[s]=n.getUint8(e);return String.fromCharCode.apply(null,i)};ar.UTF16=function(n,e,t){for(var i=[],r=t/2,s=0;s<r;s++,e+=2)i[s]=n.getUint16(e);return String.fromCharCode.apply(null,i)};me.UTF16=function(n){for(var e=[],t=0;t<n.length;t+=1){var i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};Ge.UTF16=function(n){return n.length*2};var vo={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};ar.MACSTRING=function(n,e,t,i){var r=vo[i];if(r!==void 0){for(var s="",a=0;a<t;a++){var o=n.getUint8(e+a);o<=127?s+=String.fromCharCode(o):s+=r[o&127]}return s}};var Ps=typeof WeakMap=="function"&&new WeakMap,Us,jx=function(n){if(!Us){Us={};for(var e in vo)Us[e]=new String(e)}var t=Us[n];if(t!==void 0){if(Ps){var i=Ps.get(t);if(i!==void 0)return i}var r=vo[n];if(r!==void 0){for(var s={},a=0;a<r.length;a++)s[r.charCodeAt(a)]=a+128;return Ps&&Ps.set(t,s),s}}};me.MACSTRING=function(n,e){var t=jx(e);if(t!==void 0){for(var i=[],r=0;r<n.length;r++){var s=n.charCodeAt(r);if(s>=128&&(s=t[s],s===void 0))return;i[r]=s}return i}};Ge.MACSTRING=function(n,e){var t=me.MACSTRING(n,e);return t!==void 0?t.length:0};function xo(n){return n>=-128&&n<=127}function Jx(n,e,t){for(var i=0,r=n.length;e<r&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function $x(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(!xo(a)||a===0&&s+1<r&&n[s+1]===0)break;++s,++i}t.push(i-1);for(var o=e;o<s;++o)t.push(n[o]+256&255);return s}function Qx(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(a===0||xo(a)&&s+1<r&&xo(n[s+1]))break;++s,++i}t.push(64|i-1);for(var o=e;o<s;++o){var l=n[o];t.push(l+65536>>8&255,l+256&255)}return s}me.VARDELTAS=function(n){for(var e=0,t=[];e<n.length;){var i=n[e];i===0?e=Jx(n,e,t):i>=-128&&i<=127?e=$x(n,e,t):e=Qx(n,e,t)}return t};me.INDEX=function(n){for(var e=1,t=[e],i=[],r=0;r<n.length;r+=1){var s=me.OBJECT(n[r]);Array.prototype.push.apply(i,s),e+=s.length,t.push(e)}if(i.length===0)return[0,0];for(var a=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,me.BYTE,me.USHORT,me.UINT24,me.ULONG][o],c=0;c<t.length;c+=1){var u=l(t[c]);Array.prototype.push.apply(a,u)}return Array.prototype.concat(me.Card16(n.length),me.OffSize(o),a,i)};Ge.INDEX=function(n){return me.INDEX(n).length};me.DICT=function(n){for(var e=[],t=Object.keys(n),i=t.length,r=0;r<i;r+=1){var s=parseInt(t[r],0),a=n[s];e=e.concat(me.OPERAND(a.value,a.type)),e=e.concat(me.OPERATOR(s))}return e};Ge.DICT=function(n){return me.DICT(n).length};me.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};me.OPERAND=function(n,e){var t=[];if(Array.isArray(e))for(var i=0;i<e.length;i+=1)Ue.argument(n.length===e.length,"Not enough arguments given for type"+e),t=t.concat(me.OPERAND(n[i],e[i]));else if(e==="SID")t=t.concat(me.NUMBER(n));else if(e==="offset")t=t.concat(me.NUMBER32(n));else if(e==="number")t=t.concat(me.NUMBER(n));else if(e==="real")t=t.concat(me.REAL(n));else throw new Error("Unknown operand type "+e);return t};me.OP=me.BYTE;Ge.OP=Ge.BYTE;var Ds=typeof WeakMap=="function"&&new WeakMap;me.CHARSTRING=function(n){if(Ds){var e=Ds.get(n);if(e!==void 0)return e}for(var t=[],i=n.length,r=0;r<i;r+=1){var s=n[r];t=t.concat(me[s.type](s.value))}return Ds&&Ds.set(n,t),t};Ge.CHARSTRING=function(n){return me.CHARSTRING(n).length};me.OBJECT=function(n){var e=me[n.type];return Ue.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};Ge.OBJECT=function(n){var e=Ge[n.type];return Ue.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};me.TABLE=function(n){for(var e=[],t=n.fields.length,i=[],r=[],s=0;s<t;s+=1){var a=n.fields[s],o=me[a.type];Ue.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");var l=n[a.name];l===void 0&&(l=a.value);var c=o(l);a.type==="TABLE"?(r.push(e.length),e=e.concat([0,0]),i.push(c)):e=e.concat(c)}for(var u=0;u<i.length;u+=1){var f=r[u],h=e.length;Ue.argument(h<65536,"Table "+n.tableName+" too big."),e[f]=h>>8,e[f+1]=h&255,e=e.concat(i[u])}return e};Ge.TABLE=function(n){for(var e=0,t=n.fields.length,i=0;i<t;i+=1){var r=n.fields[i],s=Ge[r.type];Ue.argument(s!==void 0,"No sizeOf function for field type "+r.type+" ("+r.name+")");var a=n[r.name];a===void 0&&(a=r.value),e+=s(a),r.type==="TABLE"&&(e+=2)}return e};me.RECORD=me.TABLE;Ge.RECORD=Ge.TABLE;me.LITERAL=function(n){return n};Ge.LITERAL=function(n){return n.length};function Tt(n,e,t){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var i=0;i<e.length;i+=1){var r=e[i];this[r.name]=r.value}if(this.tableName=n,this.fields=e,t)for(var s=Object.keys(t),a=0;a<s.length;a+=1){var o=s[a],l=t[o];this[o]!==void 0&&(this[o]=l)}}Tt.prototype.encode=function(){return me.TABLE(this)};Tt.prototype.sizeOf=function(){return Ge.TABLE(this)};function Ur(n,e,t){t===void 0&&(t=e.length);var i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(var r=0;r<e.length;r++)i[r+1]={name:n+r,type:"USHORT",value:e[r]};return i}function _o(n,e,t){var i=e.length,r=new Array(i+1);r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r[s+1]={name:n+s,type:"TABLE",value:t(e[s],s)};return r}function Dr(n,e,t){var i=e.length,r=[];r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r=r.concat(t(e[s],s));return r}function Ys(n){n.format===1?Tt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Ur("glyph",n.glyphs))):n.format===2?Tt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Dr("rangeRecord",n.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Ue.assert(!1,"Coverage format must be 1 or 2.")}Ys.prototype=Object.create(Tt.prototype);Ys.prototype.constructor=Ys;function Zs(n){Tt.call(this,"scriptListTable",Dr("scriptRecord",n,function(e,t){var i=e.script,r=i.defaultLangSys;return Ue.assert(!!r,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new Tt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new Tt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:r.reqFeatureIndex}].concat(Ur("featureIndex",r.featureIndexes)))}].concat(Dr("langSys",i.langSysRecords,function(s,a){var o=s.langSys;return[{name:"langSysTag"+a,type:"TAG",value:s.tag},{name:"langSys"+a,type:"TABLE",value:new Tt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(Ur("featureIndex",o.featureIndexes)))}]})))}]}))}Zs.prototype=Object.create(Tt.prototype);Zs.prototype.constructor=Zs;function Ks(n){Tt.call(this,"featureListTable",Dr("featureRecord",n,function(e,t){var i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new Tt("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(Ur("lookupListIndex",i.lookupListIndexes)))}]}))}Ks.prototype=Object.create(Tt.prototype);Ks.prototype.constructor=Ks;function js(n,e){Tt.call(this,"lookupListTable",_o("lookup",n,function(t){var i=e[t.lookupType];return Ue.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new Tt("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(_o("subtable",t.subtables,i)))}))}js.prototype=Object.create(Tt.prototype);js.prototype.constructor=js;var _e={Table:Tt,Record:Tt,Coverage:Ys,ScriptList:Zs,FeatureList:Ks,LookupList:js,ushortList:Ur,tableList:_o,recordList:Dr};function Gc(n,e){return n.getUint8(e)}function Js(n,e){return n.getUint16(e,!1)}function e_(n,e){return n.getInt16(e,!1)}function ko(n,e){return n.getUint32(e,!1)}function gh(n,e){var t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function t_(n,e){for(var t="",i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function n_(n,e,t){for(var i=0,r=0;r<t;r+=1)i<<=8,i+=n.getUint8(e+r);return i}function i_(n,e,t){for(var i=[],r=e;r<t;r+=1)i.push(n.getUint8(r));return i}function r_(n){for(var e="",t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var s_={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function k(n,e){this.data=n,this.offset=e,this.relativeOffset=0}k.prototype.parseByte=function(){var n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};k.prototype.parseChar=function(){var n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};k.prototype.parseCard8=k.prototype.parseByte;k.prototype.parseUShort=function(){var n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};k.prototype.parseCard16=k.prototype.parseUShort;k.prototype.parseSID=k.prototype.parseUShort;k.prototype.parseOffset16=k.prototype.parseUShort;k.prototype.parseShort=function(){var n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};k.prototype.parseF2Dot14=function(){var n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};k.prototype.parseULong=function(){var n=ko(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};k.prototype.parseOffset32=k.prototype.parseULong;k.prototype.parseFixed=function(){var n=gh(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};k.prototype.parseString=function(n){var e=this.data,t=this.offset+this.relativeOffset,i="";this.relativeOffset+=n;for(var r=0;r<n;r++)i+=String.fromCharCode(e.getUint8(t+r));return i};k.prototype.parseTag=function(){return this.parseString(4)};k.prototype.parseLongDateTime=function(){var n=ko(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};k.prototype.parseVersion=function(n){var e=Js(this.data,this.offset+this.relativeOffset),t=Js(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};k.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=s_[n]*e};k.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};k.prototype.parseOffset16List=k.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};k.prototype.parseShortList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};k.prototype.parseByteList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint8(i++);return this.relativeOffset+=n,e};k.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};k.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};k.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};k.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};k.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);for(var e=Object.keys(n),t={},i=0;i<e.length;i++){var r=e[i],s=n[r];t[r]=s.call(this)}return t};k.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n!==0){var e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};k.prototype.parseValueRecordList=function(){for(var n=this.parseUShort(),e=this.parseUShort(),t=new Array(e),i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};k.prototype.parsePointer=function(n){var e=this.parseOffset16();if(e>0)return new k(this.data,this.offset+e).parseStruct(n)};k.prototype.parsePointer32=function(n){var e=this.parseOffset32();if(e>0)return new k(this.data,this.offset+e).parseStruct(n)};k.prototype.parseListOfLists=function(n){for(var e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,r=new Array(t),s=0;s<t;s++){var a=e[s];if(a===0){r[s]=void 0;continue}if(this.relativeOffset=a,n){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);r[s]=l}else r[s]=this.parseUShortList()}return this.relativeOffset=i,r};k.prototype.parseCoverage=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var i=new Array(t),r=0;r<t;r++)i[r]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};k.prototype.parseClassDef=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:k.uShort,end:k.uShort,classId:k.uShort})};throw new Error("0x"+n.toString(16)+": ClassDef format must be 1 or 2.")};k.list=function(n,e){return function(){return this.parseList(n,e)}};k.list32=function(n,e){return function(){return this.parseList32(n,e)}};k.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};k.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};k.pointer=function(n){return function(){return this.parsePointer(n)}};k.pointer32=function(n){return function(){return this.parsePointer32(n)}};k.tag=k.prototype.parseTag;k.byte=k.prototype.parseByte;k.uShort=k.offset16=k.prototype.parseUShort;k.uShortList=k.prototype.parseUShortList;k.uLong=k.offset32=k.prototype.parseULong;k.uLongList=k.prototype.parseULongList;k.struct=k.prototype.parseStruct;k.coverage=k.prototype.parseCoverage;k.classDef=k.prototype.parseClassDef;var zc={reserved:k.uShort,reqFeatureIndex:k.uShort,featureIndexes:k.uShortList};k.prototype.parseScriptList=function(){return this.parsePointer(k.recordList({tag:k.tag,script:k.pointer({defaultLangSys:k.pointer(zc),langSysRecords:k.recordList({tag:k.tag,langSys:k.pointer(zc)})})}))||[]};k.prototype.parseFeatureList=function(){return this.parsePointer(k.recordList({tag:k.tag,feature:k.pointer({featureParams:k.offset16,lookupListIndexes:k.uShortList})}))||[]};k.prototype.parseLookupList=function(n){return this.parsePointer(k.list(k.pointer(function(){var e=this.parseUShort();Ue.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(k.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};k.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var n=this.parseUShort(),e=this.parseUShort();Ue.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:k.offset32,featureTableSubstitutionOffset:k.offset32});return t})||[]};var Te={getByte:Gc,getCard8:Gc,getUShort:Js,getCard16:Js,getShort:e_,getULong:ko,getFixed:gh,getTag:t_,getOffset:n_,getBytes:i_,bytesToString:r_,Parser:k};function a_(n,e){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();var t;n.groupCount=t=e.parseULong(),n.glyphIndexMap={};for(var i=0;i<t;i+=1)for(var r=e.parseULong(),s=e.parseULong(),a=e.parseULong(),o=r;o<=s;o+=1)n.glyphIndexMap[o]=a,a++}function o_(n,e,t,i,r){n.length=e.parseUShort(),n.language=e.parseUShort();var s;n.segCount=s=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};for(var a=new Te.Parser(t,i+r+14),o=new Te.Parser(t,i+r+16+s*2),l=new Te.Parser(t,i+r+16+s*4),c=new Te.Parser(t,i+r+16+s*6),u=i+r+16+s*8,f=0;f<s-1;f+=1)for(var h=void 0,d=a.parseUShort(),g=o.parseUShort(),v=l.parseShort(),p=c.parseUShort(),m=g;m<=d;m+=1)p!==0?(u=c.offset+c.relativeOffset-2,u+=p,u+=(m-g)*2,h=Te.getUShort(t,u),h!==0&&(h=h+v&65535)):h=m+v&65535,n.glyphIndexMap[m]=h}function l_(n,e){var t={};t.version=Te.getUShort(n,e),Ue.argument(t.version===0,"cmap table version should be 0."),t.numTables=Te.getUShort(n,e+2);for(var i=-1,r=t.numTables-1;r>=0;r-=1){var s=Te.getUShort(n,e+4+r*8),a=Te.getUShort(n,e+4+r*8+2);if(s===3&&(a===0||a===1||a===10)||s===0&&(a===0||a===1||a===2||a===3||a===4)){i=Te.getULong(n,e+4+r*8+4);break}}if(i===-1)throw new Error("No valid cmap sub-tables found.");var o=new Te.Parser(n,e+i);if(t.format=o.parseUShort(),t.format===12)a_(t,o);else if(t.format===4)o_(t,o,n,e,i);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function c_(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function u_(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function h_(n){var e=!0,t;for(t=n.length-1;t>0;t-=1){var i=n.get(t);if(i.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var r=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(r=r.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),r=r.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var s=new _e.Table("cmap",r);for(s.segments=[],t=0;t<n.length;t+=1){for(var a=n.get(t),o=0;o<a.unicodes.length;o+=1)c_(s,a.unicodes[o],t);s.segments=s.segments.sort(function(b,x){return b.start-x.start})}u_(s);var l=s.segments.length,c=0,u=[],f=[],h=[],d=[],g=[],v=[];for(t=0;t<l;t+=1){var p=s.segments[t];p.end<=65535&&p.start<=65535?(u=u.concat({name:"end_"+t,type:"USHORT",value:p.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:p.start}),h=h.concat({name:"idDelta_"+t,type:"SHORT",value:p.delta}),d=d.concat({name:"idRangeOffset_"+t,type:"USHORT",value:p.offset}),p.glyphId!==void 0&&(g=g.concat({name:"glyph_"+t,type:"USHORT",value:p.glyphId}))):c+=1,!e&&p.glyphIndex!==void 0&&(v=v.concat({name:"cmap12Start_"+t,type:"ULONG",value:p.start}),v=v.concat({name:"cmap12End_"+t,type:"ULONG",value:p.end}),v=v.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:p.glyphIndex}))}if(s.segCountX2=(l-c)*2,s.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,s.entrySelector=Math.log(s.searchRange/2)/Math.log(2),s.rangeShift=s.segCountX2-s.searchRange,s.fields=s.fields.concat(u),s.fields.push({name:"reservedPad",type:"USHORT",value:0}),s.fields=s.fields.concat(f),s.fields=s.fields.concat(h),s.fields=s.fields.concat(d),s.fields=s.fields.concat(g),s.cmap4Length=14+u.length*2+2+f.length*2+h.length*2+d.length*2+g.length*2,!e){var m=16+v.length*4;s.cmap12Offset=12+2*2+4+s.cmap4Length,s.fields=s.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:m},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:v.length/3}]),s.fields=s.fields.concat(v)}return s}var vh={parse:l_,make:h_},Ns=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],f_=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],d_=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],pi=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function xh(n){this.font=n}xh.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.font.glyphs;if(t){for(var i=0;i<t.length;i+=1)for(var r=t.get(i),s=0;s<r.unicodes.length;s+=1)if(r.unicodes[s]===e)return i}return null};function _h(n){this.cmap=n}_h.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function $s(n,e){this.encoding=n,this.charset=e}$s.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function Bo(n){switch(n.version){case 1:this.names=pi.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(var e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<pi.length?this.names[e]=pi[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-pi.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(var t=0;t<n.numberOfGlyphs;t++)this.names[t]=pi[t+n.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}Bo.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};Bo.prototype.glyphIndexToName=function(n){return this.names[n]};function p_(n){for(var e,t=n.tables.cmap.glyphIndexMap,i=Object.keys(t),r=0;r<i.length;r+=1){var s=i[r],a=t[s];e=n.glyphs.get(a),e.addUnicode(parseInt(s))}for(var o=0;o<n.glyphs.length;o+=1)e=n.glyphs.get(o),n.cffEncoding?n.isCIDFont?e.name="gid"+o:e.name=n.cffEncoding.charset[o]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(o))}function m_(n){n._IndexToUnicodeMap={};for(var e=n.tables.cmap.glyphIndexMap,t=Object.keys(e),i=0;i<t.length;i+=1){var r=t[i],s=e[r];n._IndexToUnicodeMap[s]===void 0?n._IndexToUnicodeMap[s]={unicodes:[parseInt(r)]}:n._IndexToUnicodeMap[s].unicodes.push(parseInt(r))}}function g_(n,e){e.lowMemory?m_(n):p_(n)}function v_(n,e,t,i,r){n.beginPath(),n.moveTo(e,t),n.lineTo(i,r),n.stroke()}var ui={line:v_};function x_(n,e){var t=e||new xt;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function qt(n){this.bindConstructorValues(n)}qt.prototype.bindConstructorValues=function(n){this.index=n.index||0,this.name=n.name||null,this.unicode=n.unicode||void 0,this.unicodes=n.unicodes||n.unicode!==void 0?[n.unicode]:[],"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),Object.defineProperty(this,"path",x_(this,n.path))};qt.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};qt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};qt.prototype.getPath=function(n,e,t,i,r){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var s,a;i||(i={});var o=i.xScale,l=i.yScale;if(i.hinting&&r&&r.hinting&&(a=this.path&&r.hinting.exec(this,t)),a)s=r.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1;else{s=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;o===void 0&&(o=c),l===void 0&&(l=c)}for(var u=new xt,f=0;f<s.length;f+=1){var h=s[f];h.type==="M"?u.moveTo(n+h.x*o,e+-h.y*l):h.type==="L"?u.lineTo(n+h.x*o,e+-h.y*l):h.type==="Q"?u.quadraticCurveTo(n+h.x1*o,e+-h.y1*l,n+h.x*o,e+-h.y*l):h.type==="C"?u.curveTo(n+h.x1*o,e+-h.y1*l,n+h.x2*o,e+-h.y2*l,n+h.x*o,e+-h.y*l):h.type==="Z"&&u.closePath()}return u};qt.prototype.getContours=function(){if(this.points===void 0)return[];for(var n=[],e=[],t=0;t<this.points.length;t+=1){var i=this.points[t];e.push(i),i.lastPointOfContour&&(n.push(e),e=[])}return Ue.argument(e.length===0,"There are still points left in the current contour."),n};qt.prototype.getMetrics=function(){for(var n=this.path.commands,e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}var s={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(s.xMin)||(s.xMin=0),isFinite(s.xMax)||(s.xMax=this.advanceWidth),isFinite(s.yMin)||(s.yMin=0),isFinite(s.yMax)||(s.yMax=0),s.rightSideBearing=this.advanceWidth-s.leftSideBearing-(s.xMax-s.xMin),s};qt.prototype.draw=function(n,e,t,i,r){this.getPath(e,t,i,r).draw(n)};qt.prototype.drawPoints=function(n,e,t,i){function r(f,h,d,g){n.beginPath();for(var v=0;v<f.length;v+=1)n.moveTo(h+f[v].x*g,d+f[v].y*g),n.arc(h+f[v].x*g,d+f[v].y*g,2,0,Math.PI*2,!1);n.closePath(),n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;for(var s=1/this.path.unitsPerEm*i,a=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var u=l.commands[c];u.x!==void 0&&a.push({x:u.x,y:-u.y}),u.x1!==void 0&&o.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&o.push({x:u.x2,y:-u.y2})}n.fillStyle="blue",r(a,e,t,s),n.fillStyle="red",r(o,e,t,s)};qt.prototype.drawMetrics=function(n,e,t,i){var r;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,r=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",ui.line(n,e,-1e4,e,1e4),ui.line(n,-1e4,t,1e4,t);var s=this.xMin||0,a=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;n.strokeStyle="blue",ui.line(n,e+s*r,-1e4,e+s*r,1e4),ui.line(n,e+o*r,-1e4,e+o*r,1e4),ui.line(n,-1e4,t+-a*r,1e4,t+-a*r),ui.line(n,-1e4,t+-l*r,1e4,t+-l*r),n.strokeStyle="green",ui.line(n,e+c*r,-1e4,e+c*r,1e4)};function Fs(n,e,t){Object.defineProperty(n,e,{get:function(){return n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function Go(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}Go.prototype.get=function(n){if(this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());var e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(var i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+n:e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};Go.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function __(n,e){return new qt({index:e,font:n})}function y_(n,e,t,i,r,s){return function(){var a=new qt({index:e,font:n});return a.path=function(){t(a,i,r);var o=s(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},Fs(a,"xMin","_xMin"),Fs(a,"xMax","_xMax"),Fs(a,"yMin","_yMin"),Fs(a,"yMax","_yMax"),a}}function S_(n,e,t,i){return function(){var r=new qt({index:e,font:n});return r.path=function(){var s=t(n,r,i);return s.unitsPerEm=n.unitsPerEm,s},r}}var xn={GlyphSet:Go,glyphLoader:__,ttfGlyphLoader:y_,cffGlyphLoader:S_};function yh(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t+=1)if(!yh(n[t],e[t]))return!1;return!0}else return!1}function yo(n){var e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function Wn(n,e,t){var i=[],r=[],s=Te.getCard16(n,e),a,o;if(s!==0){var l=Te.getByte(n,e+2);a=e+(s+1)*l+2;for(var c=e+3,u=0;u<s+1;u+=1)i.push(Te.getOffset(n,c,l)),c+=l;o=a+i[s]}else o=e+2;for(var f=0;f<i.length-1;f+=1){var h=Te.getBytes(n,a+i[f],a+i[f+1]);t&&(h=t(h)),r.push(h)}return{objects:r,startOffset:e,endOffset:o}}function b_(n,e){var t=[],i=Te.getCard16(n,e),r,s;if(i!==0){var a=Te.getByte(n,e+2);r=e+(i+1)*a+2;for(var o=e+3,l=0;l<i+1;l+=1)t.push(Te.getOffset(n,o,a)),o+=a;s=r+t[i]}else s=e+2;return{offsets:t,startOffset:e,endOffset:s}}function E_(n,e,t,i,r){var s=Te.getCard16(t,i),a=0;if(s!==0){var o=Te.getByte(t,i+2);a=i+(s+1)*o+2}var l=Te.getBytes(t,a+e[n],a+e[n+1]);return r&&(l=r(l)),l}function M_(n){for(var e="",t=15,i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var r=n.parseByte(),s=r>>4,a=r&15;if(s===t||(e+=i[s],a===t))break;e+=i[a]}return parseFloat(e)}function T_(n,e){var t,i,r,s;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),r=n.parseByte(),s=n.parseByte(),t<<24|i<<16|r<<8|s;if(e===30)return M_(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function A_(n){for(var e={},t=0;t<n.length;t+=1){var i=n[t][0],r=n[t][1],s=void 0;if(r.length===1?s=r[0]:s=r,e.hasOwnProperty(i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=s}return e}function Sh(n,e,t){e=e!==void 0?e:0;var i=new Te.Parser(n,e),r=[],s=[];for(t=t!==void 0?t:n.length;i.relativeOffset<t;){var a=i.parseByte();a<=21?(a===12&&(a=1200+i.parseByte()),r.push([a,s]),s=[]):s.push(T_(i,a))}return A_(r)}function Mr(n,e){return e<=390?e=Ns[e]:e=n[e-391],e}function bh(n,e,t){for(var i={},r,s=0;s<e.length;s+=1){var a=e[s];if(Array.isArray(a.type)){var o=[];o.length=a.type.length;for(var l=0;l<a.type.length;l++)r=n[a.op]!==void 0?n[a.op][l]:void 0,r===void 0&&(r=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(r=Mr(t,r)),o[l]=r;i[a.name]=o}else r=n[a.op],r===void 0&&(r=a.value!==void 0?a.value:null),a.type==="SID"&&(r=Mr(t,r)),i[a.name]=r}return i}function w_(n,e){var t={};return t.formatMajor=Te.getCard8(n,e),t.formatMinor=Te.getCard8(n,e+1),t.size=Te.getCard8(n,e+2),t.offsetSize=Te.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4,t}var Eh=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Mh=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function R_(n,e){var t=Sh(n,0,n.byteLength);return bh(t,Eh,e)}function Th(n,e,t,i){var r=Sh(n,e,t);return bh(r,Mh,i)}function Hc(n,e,t,i){for(var r=[],s=0;s<t.length;s+=1){var a=new DataView(new Uint8Array(t[s]).buffer),o=R_(a,i);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var u=Th(n,c+e,l,i);if(o._defaultWidthX=u.defaultWidthX,o._nominalWidthX=u.nominalWidthX,u.subrs!==0){var f=c+u.subrs,h=Wn(n,f+e);o._subrs=h.objects,o._subrsBias=yo(o._subrs)}o._privateDict=u}r.push(o)}return r}function C_(n,e,t,i){var r,s,a=new Te.Parser(n,e);t-=1;var o=[".notdef"],l=a.parseCard8();if(l===0)for(var c=0;c<t;c+=1)r=a.parseSID(),o.push(Mr(i,r));else if(l===1)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard8();for(var u=0;u<=s;u+=1)o.push(Mr(i,r)),r+=1}else if(l===2)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard16();for(var f=0;f<=s;f+=1)o.push(Mr(i,r)),r+=1}else throw new Error("Unknown charset format "+l);return o}function L_(n,e,t){var i,r={},s=new Te.Parser(n,e),a=s.parseCard8();if(a===0)for(var o=s.parseCard8(),l=0;l<o;l+=1)i=s.parseCard8(),r[i]=l;else if(a===1){var c=s.parseCard8();i=1;for(var u=0;u<c;u+=1)for(var f=s.parseCard8(),h=s.parseCard8(),d=f;d<=f+h;d+=1)r[d]=i,i+=1}else throw new Error("Unknown encoding format "+a);return new $s(r,t)}function Vc(n,e,t){var i,r,s,a,o=new xt,l=[],c=0,u=!1,f=!1,h=0,d=0,g,v,p,m;if(n.isCIDFont){var b=n.tables.cff.topDict._fdSelect[e.index],x=n.tables.cff.topDict._fdArray[b];g=x._subrs,v=x._subrsBias,p=x._defaultWidthX,m=x._nominalWidthX}else g=n.tables.cff.topDict._subrs,v=n.tables.cff.topDict._subrsBias,p=n.tables.cff.topDict._defaultWidthX,m=n.tables.cff.topDict._nominalWidthX;var S=p;function P(D,ee){f&&o.closePath(),o.moveTo(D,ee),f=!0}function R(){var D;D=l.length%2!==0,D&&!u&&(S=l.shift()+m),c+=l.length>>1,l.length=0,u=!0}function T(D){for(var ee,_,A,q,Q,U,B,I,Y,W,X,Z,K=0;K<D.length;){var ie=D[K];switch(K+=1,ie){case 1:R();break;case 3:R();break;case 4:l.length>1&&!u&&(S=l.shift()+m,u=!0),d+=l.pop(),P(h,d);break;case 5:for(;l.length>0;)h+=l.shift(),d+=l.shift(),o.lineTo(h,d);break;case 6:for(;l.length>0&&(h+=l.shift(),o.lineTo(h,d),l.length!==0);)d+=l.shift(),o.lineTo(h,d);break;case 7:for(;l.length>0&&(d+=l.shift(),o.lineTo(h,d),l.length!==0);)h+=l.shift(),o.lineTo(h,d);break;case 8:for(;l.length>0;)i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,h,d);break;case 10:Q=l.pop()+v,U=g[Q],U&&T(U);break;case 11:return;case 12:switch(ie=D[K],K+=1,ie){case 35:i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),B=s+l.shift(),I=a+l.shift(),Y=B+l.shift(),W=I+l.shift(),X=Y+l.shift(),Z=W+l.shift(),h=X+l.shift(),d=Z+l.shift(),l.shift(),o.curveTo(i,r,s,a,B,I),o.curveTo(Y,W,X,Z,h,d);break;case 34:i=h+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),B=s+l.shift(),I=a,Y=B+l.shift(),W=a,X=Y+l.shift(),Z=d,h=X+l.shift(),o.curveTo(i,r,s,a,B,I),o.curveTo(Y,W,X,Z,h,d);break;case 36:i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),B=s+l.shift(),I=a,Y=B+l.shift(),W=a,X=Y+l.shift(),Z=W+l.shift(),h=X+l.shift(),o.curveTo(i,r,s,a,B,I),o.curveTo(Y,W,X,Z,h,d);break;case 37:i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),B=s+l.shift(),I=a+l.shift(),Y=B+l.shift(),W=I+l.shift(),X=Y+l.shift(),Z=W+l.shift(),Math.abs(X-h)>Math.abs(Z-d)?h=X+l.shift():d=Z+l.shift(),o.curveTo(i,r,s,a,B,I),o.curveTo(Y,W,X,Z,h,d);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+ie),l.length=0}break;case 14:l.length>0&&!u&&(S=l.shift()+m,u=!0),f&&(o.closePath(),f=!1);break;case 18:R();break;case 19:case 20:R(),K+=c+7>>3;break;case 21:l.length>2&&!u&&(S=l.shift()+m,u=!0),d+=l.pop(),h+=l.pop(),P(h,d);break;case 22:l.length>1&&!u&&(S=l.shift()+m,u=!0),h+=l.pop(),P(h,d);break;case 23:R();break;case 24:for(;l.length>2;)i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,h,d);h+=l.shift(),d+=l.shift(),o.lineTo(h,d);break;case 25:for(;l.length>6;)h+=l.shift(),d+=l.shift(),o.lineTo(h,d);i=h+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,h,d);break;case 26:for(l.length%2&&(h+=l.shift());l.length>0;)i=h,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s,d=a+l.shift(),o.curveTo(i,r,s,a,h,d);break;case 27:for(l.length%2&&(d+=l.shift());l.length>0;)i=h+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a,o.curveTo(i,r,s,a,h,d);break;case 28:ee=D[K],_=D[K+1],l.push((ee<<24|_<<16)>>16),K+=2;break;case 29:Q=l.pop()+n.gsubrsBias,U=n.gsubrs[Q],U&&T(U);break;case 30:for(;l.length>0&&(i=h,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,h,d),l.length!==0);)i=h+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),d=a+l.shift(),h=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,h,d);break;case 31:for(;l.length>0&&(i=h+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),d=a+l.shift(),h=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,h,d),l.length!==0);)i=h,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),h=s+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,h,d);break;default:ie<32?console.log("Glyph "+e.index+": unknown operator "+ie):ie<247?l.push(ie-139):ie<251?(ee=D[K],K+=1,l.push((ie-247)*256+ee+108)):ie<255?(ee=D[K],K+=1,l.push(-(ie-251)*256-ee-108)):(ee=D[K],_=D[K+1],A=D[K+2],q=D[K+3],K+=4,l.push((ee<<24|_<<16|A<<8|q)/65536))}}}return T(t),e.advanceWidth=S,o}function P_(n,e,t,i){var r=[],s,a=new Te.Parser(n,e),o=a.parseCard8();if(o===0)for(var l=0;l<t;l++){if(s=a.parseCard8(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");r.push(s)}else if(o===3){var c=a.parseCard16(),u=a.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var f,h=0;h<c;h++){if(s=a.parseCard8(),f=a.parseCard16(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;u<f;u++)r.push(s);u=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return r}function U_(n,e,t,i){t.tables.cff={};var r=w_(n,e),s=Wn(n,r.endOffset,Te.bytesToString),a=Wn(n,s.endOffset),o=Wn(n,a.endOffset,Te.bytesToString),l=Wn(n,o.endOffset);t.gsubrs=l.objects,t.gsubrsBias=yo(t.gsubrs);var c=Hc(n,e,a.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var u=c[0];if(t.tables.cff.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=u.fdArray,h=u.fdSelect;if(f===0||h===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;var d=Wn(n,f),g=Hc(n,e,d.objects,o.objects);u._fdArray=g,h+=e,u._fdSelect=P_(n,h,t.numGlyphs,g.length)}var v=e+u.private[1],p=Th(n,v,u.private[0],o.objects);if(t.defaultWidthX=p.defaultWidthX,t.nominalWidthX=p.nominalWidthX,p.subrs!==0){var m=v+p.subrs,b=Wn(n,m);t.subrs=b.objects,t.subrsBias=yo(t.subrs)}else t.subrs=[],t.subrsBias=0;var x;i.lowMemory?(x=b_(n,e+u.charStrings),t.nGlyphs=x.offsets.length):(x=Wn(n,e+u.charStrings),t.nGlyphs=x.objects.length);var S=C_(n,e+u.charset,t.nGlyphs,o.objects);if(u.encoding===0?t.cffEncoding=new $s(f_,S):u.encoding===1?t.cffEncoding=new $s(d_,S):t.cffEncoding=L_(n,e+u.encoding,S),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new xn.GlyphSet(t),i.lowMemory)t._push=function(T){var D=E_(T,x.offsets,n,e+u.charStrings);t.glyphs.push(T,xn.cffGlyphLoader(t,T,Vc,D))};else for(var P=0;P<t.nGlyphs;P+=1){var R=x.objects[P];t.glyphs.push(P,xn.cffGlyphLoader(t,P,Vc,R))}}function Ah(n,e){var t,i=Ns.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+Ns.length:(t=Ns.length+e.length,e.push(n)),t}function D_(){return new _e.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function F_(n){var e=new _e.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function wh(n,e,t){for(var i={},r=0;r<n.length;r+=1){var s=n[r],a=e[s.name];a!==void 0&&!yh(a,s.value)&&(s.type==="SID"&&(a=Ah(a,t)),i[s.op]={name:s.name,type:s.type,value:a})}return i}function Wc(n,e){var t=new _e.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=wh(Eh,n,e),t}function Xc(n){var e=new _e.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function O_(n){var e=new _e.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function I_(){return new _e.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function N_(n,e){for(var t=new _e.Record("Charsets",[{name:"format",type:"Card8",value:0}]),i=0;i<n.length;i+=1){var r=n[i],s=Ah(r,e);t.fields.push({name:"glyph_"+i,type:"SID",value:s})}return t}function k_(n){var e=[],t=n.path;e.push({name:"width",type:"NUMBER",value:n.advanceWidth});for(var i=0,r=0,s=0;s<t.commands.length;s+=1){var a=void 0,o=void 0,l=t.commands[s];if(l.type==="Q"){var c=.3333333333333333,u=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*i+u*l.x1),y1:Math.round(c*r+u*l.y1),x2:Math.round(c*l.x+u*l.x1),y2:Math.round(c*l.y+u*l.y1)}}if(l.type==="M")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="L")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-i),h=Math.round(l.y1-r),d=Math.round(l.x2-l.x1),g=Math.round(l.y2-l.y1);a=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:f}),e.push({name:"dy1",type:"NUMBER",value:h}),e.push({name:"dx2",type:"NUMBER",value:d}),e.push({name:"dy2",type:"NUMBER",value:g}),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),i=Math.round(l.x),r=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function B_(n){for(var e=new _e.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<n.length;t+=1){var i=n.get(t),r=k_(i);e.charStrings.push({name:i.name,type:"CHARSTRING",value:r})}return e}function G_(n,e){var t=new _e.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=wh(Mh,n,e),t}function z_(n,e){for(var t=new _e.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,r={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},s={},a=[],o,l=1;l<n.length;l+=1)o=n.get(l),a.push(o.name);var c=[];t.header=D_(),t.nameIndex=F_([e.postScriptName]);var u=Wc(r,c);t.topDictIndex=Xc(u),t.globalSubrIndex=I_(),t.charsets=N_(a,c),t.charStringsIndex=B_(n),t.privateDict=G_(s,c),t.stringIndex=O_(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return r.charset=f,r.encoding=0,r.charStrings=r.charset+t.charsets.sizeOf(),r.private[1]=r.charStrings+t.charStringsIndex.sizeOf(),u=Wc(r,c),t.topDictIndex=Xc(u),t}var Rh={parse:U_,make:z_};function H_(n,e){var t={},i=new Te.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),Ue.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function V_(n){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new _e.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var Ch={parse:H_,make:V_};function W_(n,e){var t={},i=new Te.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function X_(n){return new _e.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var Lh={parse:W_,make:X_};function q_(n,e,t,i,r){for(var s,a,o=new Te.Parser(n,e),l=0;l<i;l+=1){l<t&&(s=o.parseUShort(),a=o.parseShort());var c=r.get(l);c.advanceWidth=s,c.leftSideBearing=a}}function Y_(n,e,t,i,r){n._hmtxTableData={};for(var s,a,o=new Te.Parser(e,t),l=0;l<r;l+=1)l<i&&(s=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:s,leftSideBearing:a}}function Z_(n,e,t,i,r,s,a){a.lowMemory?Y_(n,e,t,i,r):q_(e,t,i,r,s)}function K_(n){for(var e=new _e.Table("hmtx",[]),t=0;t<n.length;t+=1){var i=n.get(t),r=i.advanceWidth||0,s=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:r}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:s})}return e}var Ph={parse:Z_,make:K_};function j_(n){for(var e=new _e.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]),t="",i=12+n.length*4,r=0;r<n.length;++r){var s=t.indexOf(n[r]);s<0&&(s=t.length,t+=n[r]),e.fields.push({name:"offset "+r,type:"USHORT",value:i+s}),e.fields.push({name:"length "+r,type:"USHORT",value:n[r].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function J_(n,e){var t=new Te.Parser(n,e),i=t.parseULong();Ue.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var r=t.parseULong(),s=[],a=0;a<r;a++){for(var o="",l=e+t.parseUShort(),c=t.parseUShort(),u=l;u<l+c;++u)o+=String.fromCharCode(n.getInt8(u));s.push(o)}return s}var Uh={make:j_,parse:J_};function $_(n,e){var t={},i=new Te.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function Q_(n){return new _e.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var Dh={parse:$_,make:Q_},Fh=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Oh={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},ey={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Ih={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function ty(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return Oh[e];case 3:return Ih[e]}}var So="utf-16",ny={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},iy={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Nh(n,e,t){switch(n){case 0:return So;case 1:return iy[t]||ny[e];case 3:if(e===1||e===10)return So;break}}function ry(n,e,t){for(var i={},r=new Te.Parser(n,e),s=r.parseUShort(),a=r.parseUShort(),o=r.offset+r.parseUShort(),l=0;l<a;l++){var c=r.parseUShort(),u=r.parseUShort(),f=r.parseUShort(),h=r.parseUShort(),d=Fh[h]||h,g=r.parseUShort(),v=r.parseUShort(),p=ty(c,f,t),m=Nh(c,u,f);if(m!==void 0&&p!==void 0){var b=void 0;if(m===So?b=ar.UTF16(n,o+v,g):b=ar.MACSTRING(n,o+v,g,m),b){var x=i[d];x===void 0&&(x=i[d]={}),x[p]=b}}}return s===1&&r.parseUShort(),i}function Za(n){var e={};for(var t in n)e[n[t]]=parseInt(t);return e}function qc(n,e,t,i,r,s){return new _e.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:r},{name:"offset",type:"USHORT",value:s}])}function sy(n,e){var t=n.length,i=e.length-t+1;e:for(var r=0;r<i;r++)for(;r<i;r++){for(var s=0;s<t;s++)if(e[r+s]!==n[s])continue e;return r}return-1}function Yc(n,e){var t=sy(n,e);if(t<0){t=e.length;for(var i=0,r=n.length;i<r;++i)e.push(n[i])}return t}function ay(n,e){var t,i=[],r={},s=Za(Fh);for(var a in n){var o=s[a];if(o===void 0&&(o=a),t=parseInt(o),isNaN(t))throw new Error('Name table entry "'+a+'" does not exist, see nameTableNames for complete list.');r[t]=n[a],i.push(t)}for(var l=Za(Oh),c=Za(Ih),u=[],f=[],h=0;h<i.length;h++){t=i[h];var d=r[t];for(var g in d){var v=d[g],p=1,m=l[g],b=ey[m],x=Nh(p,b,m),S=me.MACSTRING(v,x);S===void 0&&(p=0,m=e.indexOf(g),m<0&&(m=e.length,e.push(g)),b=4,S=me.UTF16(v));var P=Yc(S,f);u.push(qc(p,b,m,t,S.length,P));var R=c[g];if(R!==void 0){var T=me.UTF16(v),D=Yc(T,f);u.push(qc(3,1,R,t,T.length,D))}}}u.sort(function(A,q){return A.platformID-q.platformID||A.encodingID-q.encodingID||A.languageID-q.languageID||A.nameID-q.nameID});for(var ee=new _e.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),_=0;_<u.length;_++)ee.fields.push({name:"record_"+_,type:"RECORD",value:u[_]});return ee.fields.push({name:"strings",type:"LITERAL",value:f}),ee}var kh={parse:ry,make:ay},bo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function oy(n){for(var e=0;e<bo.length;e+=1){var t=bo[e];if(n>=t.begin&&n<t.end)return e}return-1}function ly(n,e){var t={},i=new Te.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(var r=0;r<10;r++)t.panose[r]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function cy(n){return new _e.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var Eo={parse:ly,make:cy,unicodeRanges:bo,getUnicodeRange:oy};function uy(n,e){var t={},i=new Te.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=pi.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)t.glyphNameIndex[r]=i.parseUShort();t.names=[];for(var s=0;s<t.numberOfGlyphs;s++)if(t.glyphNameIndex[s]>=pi.length){var a=i.parseChar();t.names.push(i.parseString(a))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var o=0;o<t.numberOfGlyphs;o++)t.offset[o]=i.parseChar();break}return t}function hy(){return new _e.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var Bh={parse:uy,make:hy},an=new Array(9);an[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(k.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(k.coverage),substitute:this.parseOffset16List()};Ue.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};an[2]=function(){var e=this.parseUShort();return Ue.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(k.coverage),sequences:this.parseListOfLists()}};an[3]=function(){var e=this.parseUShort();return Ue.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(k.coverage),alternateSets:this.parseListOfLists()}};an[4]=function(){var e=this.parseUShort();return Ue.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(k.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var er={sequenceIndex:k.uShort,lookupListIndex:k.uShort};an[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(k.coverage),ruleSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{input:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,er)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(k.coverage),classDef:this.parsePointer(k.classDef),classSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{classes:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,er)}})};if(t===3){var i=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,k.pointer(k.coverage)),lookupRecords:this.parseRecordList(r,er)}}Ue.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};an[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(k.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(er)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(k.coverage),backtrackClassDef:this.parsePointer(k.classDef),inputClassDef:this.parsePointer(k.classDef),lookaheadClassDef:this.parsePointer(k.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(er)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(k.pointer(k.coverage)),inputCoverage:this.parseList(k.pointer(k.coverage)),lookaheadCoverage:this.parseList(k.pointer(k.coverage)),lookupRecords:this.parseRecordList(er)};Ue.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};an[7]=function(){var e=this.parseUShort();Ue.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),i=new k(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:an[t].call(i)}};an[8]=function(){var e=this.parseUShort();return Ue.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(k.coverage),backtrackCoverage:this.parseList(k.pointer(k.coverage)),lookaheadCoverage:this.parseList(k.pointer(k.coverage)),substitutes:this.parseUShortList()}};function fy(n,e){e=e||0;var t=new k(n,e),i=t.parseVersion(1);return Ue.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(an)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(an),variations:t.parseFeatureVariationsList()}}var ur=new Array(9);ur[1]=function(e){return e.substFormat===1?new _e.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new _e.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)}].concat(_e.ushortList("substitute",e.substitute)))};ur[2]=function(e){return Ue.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new _e.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)}].concat(_e.tableList("seqSet",e.sequences,function(t){return new _e.Table("sequenceSetTable",_e.ushortList("sequence",t))})))};ur[3]=function(e){return Ue.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new _e.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)}].concat(_e.tableList("altSet",e.alternateSets,function(t){return new _e.Table("alternateSetTable",_e.ushortList("alternate",t))})))};ur[4]=function(e){return Ue.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new _e.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)}].concat(_e.tableList("ligSet",e.ligatureSets,function(t){return new _e.Table("ligatureSetTable",_e.tableList("ligature",t,function(i){return new _e.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(_e.ushortList("component",i.components,i.components.length+1)))}))})))};ur[6]=function(e){if(e.substFormat===1){var t=new _e.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new _e.Coverage(e.coverage)}].concat(_e.tableList("chainRuleSet",e.chainRuleSets,function(s){return new _e.Table("chainRuleSetTable",_e.tableList("chainRule",s,function(a){var o=_e.ushortList("backtrackGlyph",a.backtrack,a.backtrack.length).concat(_e.ushortList("inputGlyph",a.input,a.input.length+1)).concat(_e.ushortList("lookaheadGlyph",a.lookahead,a.lookahead.length)).concat(_e.ushortList("substitution",[],a.lookupRecords.length));return a.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new _e.Table("chainRuleTable",o)}))})));return t}else if(e.substFormat===2)Ue.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var i=[{name:"substFormat",type:"USHORT",value:e.substFormat}];i.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(s,a){i.push({name:"backtrackCoverage"+a,type:"TABLE",value:new _e.Coverage(s)})}),i.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(s,a){i.push({name:"inputCoverage"+a,type:"TABLE",value:new _e.Coverage(s)})}),i.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(s,a){i.push({name:"lookaheadCoverage"+a,type:"TABLE",value:new _e.Coverage(s)})}),i.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(s,a){i=i.concat({name:"sequenceIndex"+a,type:"USHORT",value:s.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:s.lookupListIndex})});var r=new _e.Table("chainContextTable",i);return r}Ue.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function dy(n){return new _e.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new _e.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new _e.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new _e.LookupList(n.lookups,ur)}])}var Gh={parse:fy,make:dy};function py(n,e){var t=new Te.Parser(n,e),i=t.parseULong();Ue.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var r=t.parseULong(),s={},a=0;a<r;a++){var o=t.parseTag(),l=t.parseULong(),c=t.parseULong(),u=ar.UTF8(n,e+l,c);s[o]=u}return s}function my(n){var e=Object.keys(n).length,t="",i=16+e*12,r=new _e.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(var s in n){var a=t.length;t+=n[s],r.fields.push({name:"tag "+s,type:"TAG",value:s}),r.fields.push({name:"offset "+s,type:"ULONG",value:i+a}),r.fields.push({name:"length "+s,type:"ULONG",value:n[s].length})}return r.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),r}var zh={parse:py,make:my};function gy(n,e){var t=new k(n,e),i=t.parseUShort();Ue.argument(i===0,"Only COLRv0 supported.");var r=t.parseUShort(),s=t.parseOffset32(),a=t.parseOffset32(),o=t.parseUShort();t.relativeOffset=s;var l=t.parseRecordList(r,{glyphID:k.uShort,firstLayerIndex:k.uShort,numLayers:k.uShort});t.relativeOffset=a;var c=t.parseRecordList(o,{glyphID:k.uShort,paletteIndex:k.uShort});return{version:i,baseGlyphRecords:l,layerRecords:c}}function vy(n){var e=n.version;e===void 0&&(e=0);var t=n.baseGlyphRecords;t===void 0&&(t=[]);var i=n.layerRecords;i===void 0&&(i=[]),Ue.argument(e===0,"Only COLRv0 supported.");var r=14,s=r+t.length*6;return new _e.Table("COLR",[{name:"version",type:"USHORT",value:e},{name:"numBaseGlyphRecords",type:"USHORT",value:t.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:r},{name:"layerRecordsOffset",type:"ULONG",value:s},{name:"numLayerRecords",type:"USHORT",value:i.length}].concat(t.map(function(a,o){return[{name:"glyphID_"+o,type:"USHORT",value:a.glyphID},{name:"firstLayerIndex_"+o,type:"USHORT",value:a.firstLayerIndex},{name:"numLayers_"+o,type:"USHORT",value:a.numLayers}]}).flat(),i.map(function(a,o){return[{name:"LayerGlyphID_"+o,type:"USHORT",value:a.glyphID},{name:"paletteIndex_"+o,type:"USHORT",value:a.paletteIndex}]}).flat()))}var Hh={parse:gy,make:vy};function xy(n,e){var t=new k(n,e),i=t.parseShort(),r=t.parseShort(),s=t.parseShort(),a=t.parseShort(),o=t.parseOffset32(),l=t.parseUShortList(s);t.relativeOffset=o;var c=t.parseULongList(a);return{version:i,numPaletteEntries:r,colorRecords:c,colorRecordIndices:l}}function _y(n){var e=n.version;e===void 0&&(e=0);var t=n.numPaletteEntries;t===void 0&&(t=0);var i=n.colorRecords;i===void 0&&(i=[]);var r=n.colorRecordIndices;return r===void 0&&(r=[0]),Ue.argument(e===0,"Only CPALv0 are supported."),Ue.argument(i.length,"No colorRecords given."),Ue.argument(r.length,"No colorRecordIndices given."),Ue.argument(!t&&r.length==1,"Can't infer numPaletteEntries on multiple colorRecordIndices"),new _e.Table("CPAL",[{name:"version",type:"USHORT",value:e},{name:"numPaletteEntries",type:"USHORT",value:t||i.length},{name:"numPalettes",type:"USHORT",value:r.length},{name:"numColorRecords",type:"USHORT",value:i.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*r.length}].concat(r.map(function(s,a){return{name:"colorRecordIndices_"+a,type:"USHORT",value:s}}),i.map(function(s,a){return{name:"colorRecords_"+a,type:"ULONG",value:s}})))}var Vh={parse:xy,make:_y};function Zc(n){return Math.log(n)/Math.log(2)|0}function zo(n){for(;n.length%4!==0;)n.push(0);for(var e=0,t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function Kc(n,e,t,i){return new _e.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function Wh(n){var e=new _e.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;var t=Math.pow(2,Zc(e.numTables));e.searchRange=16*t,e.entrySelector=Zc(t),e.rangeShift=e.numTables*16-e.searchRange;for(var i=[],r=[],s=e.sizeOf()+Kc().sizeOf()*e.numTables;s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0});for(var a=0;a<n.length;a+=1){var o=n[a];Ue.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=Kc(o.tableName,zo(o.encode()),s,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),r.push({name:o.tableName+" table",type:"RECORD",value:o}),s+=l,Ue.argument(!isNaN(s),"Something went wrong calculating the offset.");s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(u,f){return u.value.tag>f.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(r),e}function jc(n,e,t){for(var i=0;i<e.length;i+=1){var r=n.charToGlyphIndex(e[i]);if(r>0){var s=n.glyphs.get(r);return s.getMetrics()}}return t}function yy(n){for(var e=0,t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function Sy(n){for(var e=[],t=[],i=[],r=[],s=[],a=[],o=[],l,c=0,u=0,f=0,h=0,d=0,g=0;g<n.glyphs.length;g+=1){var v=n.glyphs.get(g),p=v.unicode|0;if(isNaN(v.advanceWidth))throw new Error("Glyph "+v.name+" ("+g+"): advanceWidth is not a number.");(l>p||l===void 0)&&p>0&&(l=p),c<p&&(c=p);var m=Eo.getUnicodeRange(p);if(m<32)u|=1<<m;else if(m<64)f|=1<<m-32;else if(m<96)h|=1<<m-64;else if(m<123)d|=1<<m-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(v.name!==".notdef"){var b=v.getMetrics();e.push(b.xMin),t.push(b.yMin),i.push(b.xMax),r.push(b.yMax),a.push(b.leftSideBearing),o.push(b.rightSideBearing),s.push(v.advanceWidth)}}var x={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,r),advanceWidthMax:Math.max.apply(null,s),advanceWidthAvg:yy(s),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};x.ascender=n.ascender,x.descender=n.descender;var S=Ch.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:x.xMin,yMin:x.yMin,xMax:x.xMax,yMax:x.yMax,lowestRecPPEM:3,createdTimestamp:n.createdTimestamp}),P=Lh.make({ascender:x.ascender,descender:x.descender,advanceWidthMax:x.advanceWidthMax,minLeftSideBearing:x.minLeftSideBearing,minRightSideBearing:x.minRightSideBearing,xMaxExtent:x.maxLeftSideBearing+(x.xMax-x.xMin),numberOfHMetrics:n.glyphs.length}),R=Dh.make(n.glyphs.length),T=Eo.make(Object.assign({xAvgCharWidth:Math.round(x.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:f,ulUnicodeRange3:h,ulUnicodeRange4:d,sTypoAscender:x.ascender,sTypoDescender:x.descender,sTypoLineGap:0,usWinAscent:x.yMax,usWinDescent:Math.abs(x.yMin),ulCodePageRange1:1,sxHeight:jc(n,"xyvw",{yMax:Math.round(x.ascender/2)}).yMax,sCapHeight:jc(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",x).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),D=Ph.make(n.glyphs),ee=vh.make(n.glyphs),_=n.getEnglishName("fontFamily"),A=n.getEnglishName("fontSubfamily"),q=_+" "+A,Q=n.getEnglishName("postScriptName");Q||(Q=_.replace(/\s/g,"")+"-"+A);var U={};for(var B in n.names)U[B]=n.names[B];U.uniqueID||(U.uniqueID={en:n.getEnglishName("manufacturer")+":"+q}),U.postScriptName||(U.postScriptName={en:Q}),U.preferredFamily||(U.preferredFamily=n.names.fontFamily),U.preferredSubfamily||(U.preferredSubfamily=n.names.fontSubfamily);var I=[],Y=kh.make(U,I),W=I.length>0?Uh.make(I):void 0,X=Bh.make(),Z=Rh.make(n.glyphs,{version:n.getEnglishName("version"),fullName:q,familyName:_,weightName:A,postScriptName:Q,unitsPerEm:n.unitsPerEm,fontBBox:[0,x.yMin,x.ascender,x.advanceWidthMax]}),K=n.metas&&Object.keys(n.metas).length>0?zh.make(n.metas):void 0,ie=[S,P,R,T,Y,ee,X,Z,D];W&&ie.push(W),n.tables.gsub&&ie.push(Gh.make(n.tables.gsub)),n.tables.cpal&&ie.push(Vh.make(n.tables.cpal)),n.tables.colr&&ie.push(Hh.make(n.tables.colr)),K&&ie.push(K);for(var De=Wh(ie),V=De.encode(),se=zo(V),xe=De.fields,Ee=!1,Re=0;Re<xe.length;Re+=1)if(xe[Re].name==="head table"){xe[Re].value.checkSumAdjustment=2981146554-se,Ee=!0;break}if(!Ee)throw new Error("Could not find head table with checkSum to adjust.");return De}var by={make:Wh,fontToTable:Sy,computeCheckSum:zo};function Ka(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r].tag;if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function Jc(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r];if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function $c(n,e){for(var t,i=0,r=n.length-1;i<=r;){var s=i+r>>>1;t=n[s];var a=t.start;if(a===e)return t;a<e?i=s+1:r=s-1}if(i>0)return t=n[i-1],e>t.end?0:t}function zr(n,e){this.font=n,this.tableName=e}zr.prototype={searchTag:Ka,binSearch:Jc,getTable:function(n){var e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var n=this.getTable();if(n){for(var e=!1,t=0;t<n.scripts.length;t++){var i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(n,e){var t=this.getTable(e);if(t){n=n||"DFLT";var i=t.scripts,r=Ka(t.scripts,n);if(r>=0)return i[r].script;if(e){var s={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-r,0,s),s.script}}},getLangSysTable:function(n,e,t){var i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;var r=Ka(i.langSysRecords,e);if(r>=0)return i.langSysRecords[r].langSys;if(t){var s={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-r,0,s),s.langSys}}},getFeatureTable:function(n,e,t,i){var r=this.getLangSysTable(n,e,i);if(r){for(var s,a=r.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<a.length;l++)if(s=o[a[l]],s.tag===t)return s.feature;if(i){var c=o.length;return Ue.assert(c===0||t>=o[c-1].tag,"Features must be added in alphabetical order."),s={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(s),a.push(c),s.feature}}},getLookupTables:function(n,e,t,i,r){var s=this.getFeatureTable(n,e,t,r),a=[];if(s){for(var o,l=s.lookupListIndexes,c=this.font.tables[this.tableName].lookups,u=0;u<l.length;u++)o=c[l[u]],o.lookupType===i&&a.push(o);if(a.length===0&&r){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(o),l.push(f),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:var t=$c(n.ranges,e);return t?t.classId:0}},getCoverageIndex:function(n,e){switch(n.format){case 1:var t=Jc(n.glyphs,e);return t>=0?t:-1;case 2:var i=$c(n.ranges,e);return i?i.index+e-i.start:-1}},expandCoverage:function(n){if(n.format===1)return n.glyphs;for(var e=[],t=n.ranges,i=0;i<t.length;i++)for(var r=t[i],s=r.start,a=r.end,o=s;o<=a;o++)e.push(o);return e}};function Hr(n){zr.call(this,n,"gpos")}Hr.prototype=zr.prototype;Hr.prototype.init=function(){var n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Hr.prototype.getKerningValue=function(n,e,t){for(var i=0;i<n.length;i++)for(var r=n[i].subtables,s=0;s<r.length;s++){var a=r[s],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:for(var l=a.pairSets[o],c=0;c<l.length;c++){var u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(a.classDef1,e),h=this.getGlyphClass(a.classDef2,t),d=a.classRecords[f][h];return d.value1&&d.value1.xAdvance||0}}return 0};Hr.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};function Yt(n){zr.call(this,n,"gsub")}function Ey(n,e){var t=n.length;if(t!==e.length)return!1;for(var i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function Ho(n,e,t){for(var i=n.subtables,r=0;r<i.length;r++){var s=i[r];if(s.substFormat===e)return s}if(t)return i.push(t),t}Yt.prototype=zr.prototype;Yt.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Yt.prototype.getSingle=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,1),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),u=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(u=0;u<c.length;u++){var h=c[u];i.push({sub:h,by:h+f})}}else{var d=l.substitute;for(u=0;u<c.length;u++)i.push({sub:c[u],by:d[u]})}}return i};Yt.prototype.getMultiple=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,2),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),u=void 0;for(u=0;u<c.length;u++){var f=c[u],h=l.sequences[u];i.push({sub:f,by:h})}}return i};Yt.prototype.getAlternates=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,3),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),u=l.alternateSets,f=0;f<c.length;f++)i.push({sub:c[f],by:u[f]});return i};Yt.prototype.getLigatures=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,4),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),u=l.ligatureSets,f=0;f<c.length;f++)for(var h=c[f],d=u[f],g=0;g<d.length;g++){var v=d[g];i.push({sub:[h].concat(v.components),by:v.ligGlyph})}return i};Yt.prototype.addSingle=function(n,e,t,i){var r=this.getLookupTables(t,i,n,1,!0)[0],s=Ho(r,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Ue.assert(s.coverage.format===1,"Single: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.substitute.splice(o,0,0)),s.substitute[o]=e.by};Yt.prototype.addMultiple=function(n,e,t,i){Ue.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var r=this.getLookupTables(t,i,n,2,!0)[0],s=Ho(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Ue.assert(s.coverage.format===1,"Multiple: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.sequences.splice(o,0,0)),s.sequences[o]=e.by};Yt.prototype.addAlternate=function(n,e,t,i){var r=this.getLookupTables(t,i,n,3,!0)[0],s=Ho(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Ue.assert(s.coverage.format===1,"Alternate: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.alternateSets.splice(o,0,0)),s.alternateSets[o]=e.by};Yt.prototype.addLigature=function(n,e,t,i){var r=this.getLookupTables(t,i,n,4,!0)[0],s=r.subtables[0];s||(s={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},r.subtables[0]=s),Ue.assert(s.coverage.format===1,"Ligature: unable to modify coverage table format "+s.coverage.format);var a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(s.coverage.glyphs,a);if(c>=0){for(var u=s.ligatureSets[c],f=0;f<u.length;f++)if(Ey(u[f].components,o))return;u.push(l)}else c=-1-c,s.coverage.glyphs.splice(c,0,a),s.ligatureSets.splice(c,0,[l])};Yt.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Yt.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};function _r(n,e){if(!n)throw e}function Qc(n,e,t,i,r){var s;return(e&i)>0?(s=n.parseByte(),e&r||(s=-s),s=t+s):(e&r)>0?s=t:s=t+n.parseShort(),s}function Xh(n,e,t){var i=new Te.Parser(e,t);n.numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();var r,s;if(n.numberOfContours>0){for(var a=n.endPointIndices=[],o=0;o<n.numberOfContours;o+=1)a.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(var l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());var c=a[a.length-1]+1;r=[];for(var u=0;u<c;u+=1)if(s=i.parseByte(),r.push(s),(s&8)>0)for(var f=i.parseByte(),h=0;h<f;h+=1)r.push(s),u+=1;if(Ue.argument(r.length===c,"Bad flags."),a.length>0){var d=[],g;if(c>0){for(var v=0;v<c;v+=1)s=r[v],g={},g.onCurve=!!(s&1),g.lastPointOfContour=a.indexOf(v)>=0,d.push(g);for(var p=0,m=0;m<c;m+=1)s=r[m],g=d[m],g.x=Qc(i,s,p,2,16),p=g.x;for(var b=0,x=0;x<c;x+=1)s=r[x],g=d[x],g.y=Qc(i,s,b,4,32),b=g.y}n.points=d}else n.points=[]}else if(n.numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];for(var S=!0;S;){r=i.parseUShort();var P={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(r&1)>0?(r&2)>0?(P.dx=i.parseShort(),P.dy=i.parseShort()):P.matchedPoints=[i.parseUShort(),i.parseUShort()]:(r&2)>0?(P.dx=i.parseChar(),P.dy=i.parseChar()):P.matchedPoints=[i.parseByte(),i.parseByte()],(r&8)>0?P.xScale=P.yScale=i.parseF2Dot14():(r&64)>0?(P.xScale=i.parseF2Dot14(),P.yScale=i.parseF2Dot14()):(r&128)>0&&(P.xScale=i.parseF2Dot14(),P.scale01=i.parseF2Dot14(),P.scale10=i.parseF2Dot14(),P.yScale=i.parseF2Dot14()),n.components.push(P),S=!!(r&32)}if(r&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(var R=0;R<n.instructionLength;R+=1)n.instructions.push(i.parseByte())}}}function ja(n,e){for(var t=[],i=0;i<n.length;i+=1){var r=n[i],s={x:e.xScale*r.x+e.scale01*r.y+e.dx,y:e.scale10*r.x+e.yScale*r.y+e.dy,onCurve:r.onCurve,lastPointOfContour:r.lastPointOfContour};t.push(s)}return t}function My(n){for(var e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return Ue.argument(t.length===0,"There are still points left in the current contour."),e}function qh(n){var e=new xt;if(!n)return e;for(var t=My(n),i=0;i<t.length;++i){var r=t[i],s=null,a=r[r.length-1],o=r[0];if(a.onCurve)e.moveTo(a.x,a.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<r.length;++c)if(s=a,a=o,o=r[(c+1)%r.length],a.onCurve)e.lineTo(a.x,a.y);else{var u=o;s.onCurve||((a.x+s.x)*.5,(a.y+s.y)*.5),o.onCurve||(u={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5}),e.quadraticCurveTo(a.x,a.y,u.x,u.y)}e.closePath()}return e}function Yh(n,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var i=e.components[t],r=n.get(i.glyphIndex);if(r.getPath(),r.points){var s=void 0;if(i.matchedPoints===void 0)s=ja(r.points,i);else{if(i.matchedPoints[0]>e.points.length-1||i.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);var a=e.points[i.matchedPoints[0]],o=r.points[i.matchedPoints[1]],l={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};o=ja([o],l)[0],l.dx=a.x-o.x,l.dy=a.y-o.y,s=ja(r.points,l)}e.points=e.points.concat(s)}}return qh(e.points)}function Ty(n,e,t,i){for(var r=new xn.GlyphSet(i),s=0;s<t.length-1;s+=1){var a=t[s],o=t[s+1];a!==o?r.push(s,xn.ttfGlyphLoader(i,s,Xh,n,e+a,Yh)):r.push(s,xn.glyphLoader(i,s))}return r}function Ay(n,e,t,i){var r=new xn.GlyphSet(i);return i._push=function(s){var a=t[s],o=t[s+1];a!==o?r.push(s,xn.ttfGlyphLoader(i,s,Xh,n,e+a,Yh)):r.push(s,xn.glyphLoader(i,s))},r}function wy(n,e,t,i,r){return r.lowMemory?Ay(n,e,t,i):Ty(n,e,t,i)}var Zh={getPath:qh,parse:wy},Kh,Mi,jh,Mo;function Jh(n){this.font=n,this.getCommands=function(e){return Zh.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function Ry(n){return n}function $h(n){return Math.sign(n)*Math.round(Math.abs(n))}function Cy(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function Ly(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function Py(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function Uy(n){return Math.sign(n)*Math.floor(Math.abs(n))}var Qh=function(n){var e=this.srPeriod,t=this.srPhase,i=this.srThreshold,r=1;return n<0&&(n=-n,r=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*r:n*r},gn={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,u;if(!i||i===this){if(r=n.xo-e.xo,s=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(r),o=Math.abs(s),u=a+o,u===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/u;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),u=a+o,u===0){gn.setRelative(n,n,(l+c)/2,i,!0);return}gn.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,r){if(!i||i===this){n.x=(r?e.xo:e.x)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},Pn={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,u;if(!i||i===this){if(r=n.yo-e.yo,s=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(r),o=Math.abs(s),u=a+o,u===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/u;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),u=a+o,u===0){Pn.setRelative(n,n,(l+c)/2,i,!0);return}Pn.setRelative(n,n,(l*o+c*a)/u,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,r){if(!i||i===this){n.y=(r?e.yo:e.y)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(gn);Object.freeze(Pn);function Vr(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}Vr.prototype.distance=function(n,e,t,i){return this.x*gn.distance(n,e,t,i)+this.y*Pn.distance(n,e,t,i)};Vr.prototype.interpolate=function(n,e,t,i){var r,s,a,o,l,c,u;if(a=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),r=i.distance(e,e,!1,!0),s=i.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),u=l+c,u===0){this.setRelative(n,n,(r+s)/2,i,!0);return}this.setRelative(n,n,(r*c+s*l)/u,i,!0)};Vr.prototype.setRelative=function(n,e,t,i,r){i=i||this;var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y,c=i.normalSlope,u=this.slope,f=n.x,h=n.y;n.x=(u*f-c*o+l-h)/(u-c),n.y=u*(n.x-f)+h};Vr.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function Wr(n,e){var t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?gn:n===0&&e===1?Pn:new Vr(n,e)}function Dn(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Dn.prototype.nextTouched=function(n){for(var e=this.nextPointOnContour;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Dn.prototype.prevTouched=function(n){for(var e=this.prevPointOnContour;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Fr=Object.freeze(new Dn(0,0)),Dy={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Yn(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=gn,this.round=$h}}Jh.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,i=this._prepState;if(!i||i.ppem!==e){var r=this._fpgmState;if(!r){Yn.prototype=Dy,r=this._fpgmState=new Yn("fpgm",t.tables.fpgm),r.funcs=[],r.font=t,$.DEBUG&&(console.log("---EXEC FPGM---"),r.step=-1);try{Mi(r)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}Yn.prototype=r,i=this._prepState=new Yn("prep",t.tables.prep),i.ppem=e;var s=t.tables.cvt;if(s)for(var a=i.cvt=new Array(s.length),o=e/t.unitsPerEm,l=0;l<s.length;l++)a[l]=s[l]*o;else i.cvt=[];$.DEBUG&&(console.log("---EXEC PREP---"),i.step=-1);try{Mi(i)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return jh(n,i)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};jh=function(n,e){var t=e.ppem/e.font.unitsPerEm,i=t,r=n.components,s,a,o;if(Yn.prototype=e,!r)o=new Yn("glyf",n.instructions),$.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),Mo(n,o,t,i),a=o.gZone;else{var l=e.font;a=[],s=[];for(var c=0;c<r.length;c++){var u=r[c],f=l.glyphs.get(u.glyphIndex);o=new Yn("glyf",f.instructions),$.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),Mo(f,o,t,i);for(var h=Math.round(u.dx*t),d=Math.round(u.dy*i),g=o.gZone,v=o.contours,p=0;p<g.length;p++){var m=g[p];m.xTouched=m.yTouched=!1,m.xo=m.x=m.x+h,m.yo=m.y=m.y+d}var b=a.length;a.push.apply(a,g);for(var x=0;x<v.length;x++)s.push(v[x]+b)}n.instructions&&!o.inhibitGridFit&&(o=new Yn("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=s,a.push(new Dn(0,0),new Dn(Math.round(n.advanceWidth*t),0)),$.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),Mi(o),a.length-=2)}return a};Mo=function(n,e,t,i){for(var r=n.points||[],s=r.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<s;c++)l=r[c],a[c]=new Dn(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);for(var u,f,h=0;h<s;h++)l=a[h],u||(u=l,o.push(h)),l.lastPointOfContour?(l.nextPointOnContour=u,u.prevPointOnContour=l,u=void 0):(f=a[h+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!e.inhibitGridFit){if($.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var d=0;d<s;d++)console.log(d,a[d].x,a[d].y)}if(a.push(new Dn(0,0),new Dn(Math.round(n.advanceWidth*t),0)),Mi(e),a.length-=2,$.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var g=0;g<s;g++)console.log(g,a[g].x,a[g].y)}}};Mi=function(n){var e=n.prog;if(e){var t=e.length,i;for(n.ip=0;n.ip<t;n.ip++){if($.DEBUG&&n.step++,i=Kh[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}}};function oa(n){for(var e=n.tZone=new Array(n.gZone.length),t=0;t<e.length;t++)e[t]=new Dn(0,0)}function ef(n,e){var t=n.prog,i=n.ip,r=1,s;do if(s=t[++i],s===88)r++;else if(s===89)r--;else if(s===64)i+=t[i+1]+1;else if(s===65)i+=2*t[i+1]+1;else if(s>=176&&s<=183)i+=s-176+1;else if(s>=184&&s<=191)i+=(s-184+1)*2;else if(e&&r===1&&s===27)break;while(r>0);n.ip=i}function eu(n,e){$.DEBUG&&console.log(e.step,"SVTCA["+n.axis+"]"),e.fv=e.pv=e.dpv=n}function tu(n,e){$.DEBUG&&console.log(e.step,"SPVTCA["+n.axis+"]"),e.pv=e.dpv=n}function nu(n,e){$.DEBUG&&console.log(e.step,"SFVTCA["+n.axis+"]"),e.fv=n}function iu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];$.DEBUG&&console.log("SPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.pv=e.dpv=Wr(o,l)}function ru(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];$.DEBUG&&console.log("SFVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.fv=Wr(o,l)}function Fy(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.pv=n.dpv=Wr(i,t)}function Oy(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.fv=Wr(i,t)}function Iy(n){var e=n.stack,t=n.pv;$.DEBUG&&console.log(n.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function Ny(n){var e=n.stack,t=n.fv;$.DEBUG&&console.log(n.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function ky(n){n.fv=n.pv,$.DEBUG&&console.log(n.step,"SFVTPV[]")}function By(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop(),s=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],u=o[i],f=l[r],h=l[s],d=n.z2[a];$.DEBUG&&console.log("ISECT[], ",t,i,r,s,a);var g=c.x,v=c.y,p=u.x,m=u.y,b=f.x,x=f.y,S=h.x,P=h.y,R=(g-p)*(x-P)-(v-m)*(b-S),T=g*m-v*p,D=b*P-x*S;d.x=(T*(b-S)-D*(g-p))/R,d.y=(T*(x-P)-D*(v-m))/R}function Gy(n){n.rp0=n.stack.pop(),$.DEBUG&&console.log(n.step,"SRP0[]",n.rp0)}function zy(n){n.rp1=n.stack.pop(),$.DEBUG&&console.log(n.step,"SRP1[]",n.rp1)}function Hy(n){n.rp2=n.stack.pop(),$.DEBUG&&console.log(n.step,"SRP2[]",n.rp2)}function Vy(n){var e=n.stack.pop();switch($.DEBUG&&console.log(n.step,"SZP0[]",e),n.zp0=e,e){case 0:n.tZone||oa(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function Wy(n){var e=n.stack.pop();switch($.DEBUG&&console.log(n.step,"SZP1[]",e),n.zp1=e,e){case 0:n.tZone||oa(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function Xy(n){var e=n.stack.pop();switch($.DEBUG&&console.log(n.step,"SZP2[]",e),n.zp2=e,e){case 0:n.tZone||oa(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function qy(n){var e=n.stack.pop();switch($.DEBUG&&console.log(n.step,"SZPS[]",e),n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||oa(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function Yy(n){n.loop=n.stack.pop(),$.DEBUG&&console.log(n.step,"SLOOP[]",n.loop)}function Zy(n){$.DEBUG&&console.log(n.step,"RTG[]"),n.round=$h}function Ky(n){$.DEBUG&&console.log(n.step,"RTHG[]"),n.round=Ly}function jy(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"SMD[]",e),n.minDis=e/64}function Jy(n){$.DEBUG&&console.log(n.step,"ELSE[]"),ef(n,!1)}function $y(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"JMPR[]",e),n.ip+=e-1}function Qy(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"SCVTCI[]",e),n.cvCutIn=e/64}function eS(n){var e=n.stack;$.DEBUG&&console.log(n.step,"DUP[]"),e.push(e[e.length-1])}function Ja(n){$.DEBUG&&console.log(n.step,"POP[]"),n.stack.pop()}function tS(n){$.DEBUG&&console.log(n.step,"CLEAR[]"),n.stack.length=0}function nS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"SWAP[]"),e.push(t),e.push(i)}function iS(n){var e=n.stack;$.DEBUG&&console.log(n.step,"DEPTH[]"),e.push(e.length)}function rS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"LOOPCALL[]",t,i);var r=n.ip,s=n.prog;n.prog=n.funcs[t];for(var a=0;a<i;a++)Mi(n),$.DEBUG&&console.log(++n.step,a+1<i?"next loopcall":"done loopcall",a);n.ip=r,n.prog=s}function sS(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"CALL[]",e);var t=n.ip,i=n.prog;n.prog=n.funcs[e],Mi(n),n.ip=t,n.prog=i,$.DEBUG&&console.log(++n.step,"returning from",e)}function aS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"CINDEX[]",t),e.push(e[e.length-t])}function oS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function lS(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");var e=n.stack,t=n.prog,i=n.ip,r=e.pop(),s=i;for($.DEBUG&&console.log(n.step,"FDEF[]",r);t[++i]!==45;);n.ip=i,n.funcs[r]=t.slice(s+1,i)}function su(n,e){var t=e.stack.pop(),i=e.z0[t],r=e.fv,s=e.pv;$.DEBUG&&console.log(e.step,"MDAP["+n+"]",t);var a=s.distance(i,Fr);n&&(a=e.round(a)),r.setRelative(i,Fr,a,s),r.touch(i),e.rp0=e.rp1=t}function au(n,e){var t=e.z2,i=t.length-2,r,s,a;$.DEBUG&&console.log(e.step,"IUP["+n.axis+"]");for(var o=0;o<i;o++)r=t[o],!n.touched(r)&&(s=r.prevTouched(n),s!==r&&(a=r.nextTouched(n),s===a&&n.setRelative(r,r,n.distance(s,s,!1,!0),n,!0),n.interpolate(r,s,a,n)))}function ou(n,e){for(var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=e.loop,l=e.z2;o--;){var c=t.pop(),u=l[c],f=a.distance(r,r,!1,!0);s.setRelative(u,u,f,a),s.touch(u),$.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(n?"rp1":"rp2")+"]",c)}e.loop=1}function lu(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]],c=l;$.DEBUG&&console.log(e.step,"SHC["+n+"]",o);var u=a.distance(r,r,!1,!0);do c!==r&&s.setRelative(c,c,u,a),c=c.nextPointOnContour;while(c!==l)}function cu(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop();$.DEBUG&&console.log(e.step,"SHZ["+n+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,u=a.distance(r,r,!1,!0),f=l.length-2,h=0;h<f;h++)c=l[h],s.setRelative(c,c,u,a)}function cS(n){for(var e=n.stack,t=n.loop,i=n.fv,r=e.pop()/64,s=n.z2;t--;){var a=e.pop(),o=s[a];$.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-t)+": ":"")+"SHPIX[]",a,r),i.setRelative(o,o,r),i.touch(o)}n.loop=1}function uS(n){for(var e=n.stack,t=n.rp1,i=n.rp2,r=n.loop,s=n.z0[t],a=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;r--;){var u=e.pop(),f=c[u];$.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"IP[]",u,t,"<->",i),o.interpolate(f,s,a,l),o.touch(f)}n.loop=1}function uu(n,e){var t=e.stack,i=t.pop()/64,r=t.pop(),s=e.z1[r],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(s,a,i,l),o.touch(s),$.DEBUG&&console.log(e.step,"MSIRP["+n+"]",i,r),e.rp1=e.rp0,e.rp2=r,n&&(e.rp0=r)}function hS(n){for(var e=n.stack,t=n.rp0,i=n.z0[t],r=n.loop,s=n.fv,a=n.pv,o=n.z1;r--;){var l=e.pop(),c=o[l];$.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"ALIGNRP[]",l),s.setRelative(c,i,0,a),s.touch(c)}n.loop=1}function fS(n){$.DEBUG&&console.log(n.step,"RTDG[]"),n.round=Cy}function hu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z0[r],a=e.fv,o=e.pv,l=e.cvt[i];$.DEBUG&&console.log(e.step,"MIAP["+n+"]",i,"(",l,")",r);var c=o.distance(s,Fr);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(s,Fr,c,o),e.zp0===0&&(s.xo=s.x,s.yo=s.y),a.touch(s),e.rp0=e.rp1=r}function dS(n){var e=n.prog,t=n.ip,i=n.stack,r=e[++t];$.DEBUG&&console.log(n.step,"NPUSHB[]",r);for(var s=0;s<r;s++)i.push(e[++t]);n.ip=t}function pS(n){var e=n.ip,t=n.prog,i=n.stack,r=t[++e];$.DEBUG&&console.log(n.step,"NPUSHW[]",r);for(var s=0;s<r;s++){var a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),i.push(a)}n.ip=e}function mS(n){var e=n.stack,t=n.store;t||(t=n.store=[]);var i=e.pop(),r=e.pop();$.DEBUG&&console.log(n.step,"WS",i,r),t[r]=i}function gS(n){var e=n.stack,t=n.store,i=e.pop();$.DEBUG&&console.log(n.step,"RS",i);var r=t&&t[i]||0;e.push(r)}function vS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"WCVTP",t,i),n.cvt[i]=t/64}function xS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"RCVT",t),e.push(n.cvt[t]*64)}function fu(n,e){var t=e.stack,i=t.pop(),r=e.z2[i];$.DEBUG&&console.log(e.step,"GC["+n+"]",i),t.push(e.dpv.distance(r,Fr,n,!1)*64)}function du(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z1[i],a=e.z0[r],o=e.dpv.distance(a,s,n,n);$.DEBUG&&console.log(e.step,"MD["+n+"]",i,r,"->",o),e.stack.push(Math.round(o*64))}function _S(n){$.DEBUG&&console.log(n.step,"MPPEM[]"),n.stack.push(n.ppem)}function yS(n){$.DEBUG&&console.log(n.step,"FLIPON[]"),n.autoFlip=!0}function SS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"LT[]",t,i),e.push(i<t?1:0)}function bS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"LTEQ[]",t,i),e.push(i<=t?1:0)}function ES(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"GT[]",t,i),e.push(i>t?1:0)}function MS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"GTEQ[]",t,i),e.push(i>=t?1:0)}function TS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"EQ[]",t,i),e.push(t===i?1:0)}function AS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"NEQ[]",t,i),e.push(t!==i?1:0)}function wS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function RS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function CS(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"IF[]",e),e||(ef(n,!0),$.DEBUG&&console.log(n.step,"EIF[]"))}function LS(n){$.DEBUG&&console.log(n.step,"EIF[]")}function PS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"AND[]",t,i),e.push(t&&i?1:0)}function US(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"OR[]",t,i),e.push(t||i?1:0)}function DS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"NOT[]",t),e.push(t?0:1)}function $a(n,e){var t=e.stack,i=t.pop(),r=e.fv,s=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;$.DEBUG&&console.log(e.step,"DELTAP["+n+"]",i,t);for(var u=0;u<i;u++){var f=t.pop(),h=t.pop(),d=o+((h&240)>>4);if(d===a){var g=(h&15)-8;g>=0&&g++,$.DEBUG&&console.log(e.step,"DELTAPFIX",f,"by",g*l);var v=c[f];r.setRelative(v,v,g*l,s)}}}function FS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"SDB[]",t),n.deltaBase=t}function OS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"SDS[]",t),n.deltaShift=Math.pow(.5,t)}function IS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"ADD[]",t,i),e.push(i+t)}function NS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"SUB[]",t,i),e.push(i-t)}function kS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"DIV[]",t,i),e.push(i*64/t)}function BS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"MUL[]",t,i),e.push(i*t/64)}function GS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"ABS[]",t),e.push(Math.abs(t))}function zS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"NEG[]",t),e.push(-t)}function HS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function VS(n){var e=n.stack,t=e.pop();$.DEBUG&&console.log(n.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function Os(n,e){var t=e.stack,i=t.pop();$.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(i/64)*64)}function WS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"WCVTF[]",t,i),n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function Qa(n,e){var t=e.stack,i=t.pop(),r=e.ppem,s=e.deltaBase+(n-1)*16,a=e.deltaShift;$.DEBUG&&console.log(e.step,"DELTAC["+n+"]",i,t);for(var o=0;o<i;o++){var l=t.pop(),c=t.pop(),u=s+((c&240)>>4);if(u===r){var f=(c&15)-8;f>=0&&f++;var h=f*a;$.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",h),e.cvt[l]+=h}}}function XS(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"SROUND[]",e),n.round=Qh;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function qS(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"S45ROUND[]",e),n.round=Qh;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function YS(n){$.DEBUG&&console.log(n.step,"ROFF[]"),n.round=Ry}function ZS(n){$.DEBUG&&console.log(n.step,"RUTG[]"),n.round=Py}function KS(n){$.DEBUG&&console.log(n.step,"RDTG[]"),n.round=Uy}function jS(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"SCANCTRL[]",e)}function pu(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];$.DEBUG&&console.log(e.step,"SDPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.dpv=Wr(o,l)}function JS(n){var e=n.stack,t=e.pop(),i=0;$.DEBUG&&console.log(n.step,"GETINFO[]",t),t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function $S(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop();$.DEBUG&&console.log(n.step,"ROLL[]"),e.push(i),e.push(t),e.push(r)}function QS(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"MAX[]",t,i),e.push(Math.max(i,t))}function eb(n){var e=n.stack,t=e.pop(),i=e.pop();$.DEBUG&&console.log(n.step,"MIN[]",t,i),e.push(Math.min(i,t))}function tb(n){var e=n.stack.pop();$.DEBUG&&console.log(n.step,"SCANTYPE[]",e)}function nb(n){var e=n.stack.pop(),t=n.stack.pop();switch($.DEBUG&&console.log(n.step,"INSTCTRL[]",e,t),e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Hn(n,e){var t=e.stack,i=e.prog,r=e.ip;$.DEBUG&&console.log(e.step,"PUSHB["+n+"]");for(var s=0;s<n;s++)t.push(i[++r]);e.ip=r}function Vn(n,e){var t=e.ip,i=e.prog,r=e.stack;$.DEBUG&&console.log(e.ip,"PUSHW["+n+"]");for(var s=0;s<n;s++){var a=i[++t]<<8|i[++t];a&32768&&(a=-((a^65535)+1)),r.push(a)}e.ip=t}function Me(n,e,t,i,r,s){var a=s.stack,o=n&&a.pop(),l=a.pop(),c=s.rp0,u=s.z0[c],f=s.z1[l],h=s.minDis,d=s.fv,g=s.dpv,v,p,m,b;p=v=g.distance(f,u,!0,!0),m=p>=0?1:-1,p=Math.abs(p),n&&(b=s.cvt[o],i&&Math.abs(p-b)<s.cvCutIn&&(p=b)),t&&p<h&&(p=h),i&&(p=s.round(p)),d.setRelative(f,u,m*p,g),d.touch(f),$.DEBUG&&console.log(s.step,(n?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(i?"R":"_")+(r===0?"Gr":r===1?"Bl":r===2?"Wh":"")+"]",n?o+"("+s.cvt[o]+","+b+")":"",l,"(d =",v,"->",m*p,")"),s.rp1=s.rp0,s.rp2=l,e&&(s.rp0=l)}Kh=[eu.bind(void 0,Pn),eu.bind(void 0,gn),tu.bind(void 0,Pn),tu.bind(void 0,gn),nu.bind(void 0,Pn),nu.bind(void 0,gn),iu.bind(void 0,0),iu.bind(void 0,1),ru.bind(void 0,0),ru.bind(void 0,1),Fy,Oy,Iy,Ny,ky,By,Gy,zy,Hy,Vy,Wy,Xy,qy,Yy,Zy,Ky,jy,Jy,$y,Qy,void 0,void 0,eS,Ja,tS,nS,iS,aS,oS,void 0,void 0,void 0,rS,sS,lS,void 0,su.bind(void 0,0),su.bind(void 0,1),au.bind(void 0,Pn),au.bind(void 0,gn),ou.bind(void 0,0),ou.bind(void 0,1),lu.bind(void 0,0),lu.bind(void 0,1),cu.bind(void 0,0),cu.bind(void 0,1),cS,uS,uu.bind(void 0,0),uu.bind(void 0,1),hS,fS,hu.bind(void 0,0),hu.bind(void 0,1),dS,pS,mS,gS,vS,xS,fu.bind(void 0,0),fu.bind(void 0,1),void 0,du.bind(void 0,0),du.bind(void 0,1),_S,void 0,yS,void 0,void 0,SS,bS,ES,MS,TS,AS,wS,RS,CS,LS,PS,US,DS,$a.bind(void 0,1),FS,OS,IS,NS,kS,BS,GS,zS,HS,VS,Os.bind(void 0,0),Os.bind(void 0,1),Os.bind(void 0,2),Os.bind(void 0,3),void 0,void 0,void 0,void 0,WS,$a.bind(void 0,2),$a.bind(void 0,3),Qa.bind(void 0,1),Qa.bind(void 0,2),Qa.bind(void 0,3),XS,qS,void 0,void 0,YS,void 0,ZS,KS,Ja,Ja,void 0,void 0,void 0,void 0,void 0,jS,pu.bind(void 0,0),pu.bind(void 0,1),JS,void 0,$S,QS,eb,tb,nb,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Hn.bind(void 0,1),Hn.bind(void 0,2),Hn.bind(void 0,3),Hn.bind(void 0,4),Hn.bind(void 0,5),Hn.bind(void 0,6),Hn.bind(void 0,7),Hn.bind(void 0,8),Vn.bind(void 0,1),Vn.bind(void 0,2),Vn.bind(void 0,3),Vn.bind(void 0,4),Vn.bind(void 0,5),Vn.bind(void 0,6),Vn.bind(void 0,7),Vn.bind(void 0,8),Me.bind(void 0,0,0,0,0,0),Me.bind(void 0,0,0,0,0,1),Me.bind(void 0,0,0,0,0,2),Me.bind(void 0,0,0,0,0,3),Me.bind(void 0,0,0,0,1,0),Me.bind(void 0,0,0,0,1,1),Me.bind(void 0,0,0,0,1,2),Me.bind(void 0,0,0,0,1,3),Me.bind(void 0,0,0,1,0,0),Me.bind(void 0,0,0,1,0,1),Me.bind(void 0,0,0,1,0,2),Me.bind(void 0,0,0,1,0,3),Me.bind(void 0,0,0,1,1,0),Me.bind(void 0,0,0,1,1,1),Me.bind(void 0,0,0,1,1,2),Me.bind(void 0,0,0,1,1,3),Me.bind(void 0,0,1,0,0,0),Me.bind(void 0,0,1,0,0,1),Me.bind(void 0,0,1,0,0,2),Me.bind(void 0,0,1,0,0,3),Me.bind(void 0,0,1,0,1,0),Me.bind(void 0,0,1,0,1,1),Me.bind(void 0,0,1,0,1,2),Me.bind(void 0,0,1,0,1,3),Me.bind(void 0,0,1,1,0,0),Me.bind(void 0,0,1,1,0,1),Me.bind(void 0,0,1,1,0,2),Me.bind(void 0,0,1,1,0,3),Me.bind(void 0,0,1,1,1,0),Me.bind(void 0,0,1,1,1,1),Me.bind(void 0,0,1,1,1,2),Me.bind(void 0,0,1,1,1,3),Me.bind(void 0,1,0,0,0,0),Me.bind(void 0,1,0,0,0,1),Me.bind(void 0,1,0,0,0,2),Me.bind(void 0,1,0,0,0,3),Me.bind(void 0,1,0,0,1,0),Me.bind(void 0,1,0,0,1,1),Me.bind(void 0,1,0,0,1,2),Me.bind(void 0,1,0,0,1,3),Me.bind(void 0,1,0,1,0,0),Me.bind(void 0,1,0,1,0,1),Me.bind(void 0,1,0,1,0,2),Me.bind(void 0,1,0,1,0,3),Me.bind(void 0,1,0,1,1,0),Me.bind(void 0,1,0,1,1,1),Me.bind(void 0,1,0,1,1,2),Me.bind(void 0,1,0,1,1,3),Me.bind(void 0,1,1,0,0,0),Me.bind(void 0,1,1,0,0,1),Me.bind(void 0,1,1,0,0,2),Me.bind(void 0,1,1,0,0,3),Me.bind(void 0,1,1,0,1,0),Me.bind(void 0,1,1,0,1,1),Me.bind(void 0,1,1,0,1,2),Me.bind(void 0,1,1,0,1,3),Me.bind(void 0,1,1,1,0,0),Me.bind(void 0,1,1,1,0,1),Me.bind(void 0,1,1,1,0,2),Me.bind(void 0,1,1,1,0,3),Me.bind(void 0,1,1,1,1,0),Me.bind(void 0,1,1,1,1,1),Me.bind(void 0,1,1,1,1,2),Me.bind(void 0,1,1,1,1,3)];function hr(n){this.char=n,this.state={},this.activeState=null}function Vo(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function ib(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function on(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function la(n){this.eventId=n,this.subscribers=[]}function rb(n){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(r){Object.defineProperty(e.events,r,{value:new la(r)})}),n&&t.forEach(function(r){var s=n[r];typeof s=="function"&&e.events[r].subscribe(s)});var i=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];i.forEach(function(r){e.events[r].subscribe(e.updateContextsRanges)})}function dt(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],rb.call(this,n)}hr.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};hr.prototype.getState=function(n){return this.state[n]||null};dt.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};dt.prototype.composeRUD=function(n){var e=this,t=!0,i=n.map(function(s){return e[s[0]].apply(e,s.slice(1).concat(t))}),r=function(s){return typeof s=="object"&&s.hasOwnProperty("FAIL")};if(i.every(r))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:i.filter(r)};this.dispatch("composeRUD",[i.filter(function(s){return!r(s)})])};dt.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;var r=t.every(function(a){return a instanceof hr});if(!isNaN(n)&&this.inboundIndex(n)&&r){var s=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[s,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};dt.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof hr){var i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};dt.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;var i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};dt.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){var t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};dt.prototype.insertToken=function(n,e,t){var i=n.every(function(r){return r instanceof hr});return i?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};dt.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,r){var s=[i,r],a=e===null||e.apply(this,s)===!0,o=[i,r];if(a){var l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};la.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};la.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};on.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};on.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};dt.prototype.rangeToText=function(n){if(n instanceof Vo)return this.getRangeTokens(n).map(function(e){return e.char}).join("")};dt.prototype.getText=function(){return this.tokens.map(function(n){return n.char}).join("")};dt.prototype.getContext=function(n){var e=this.registeredContexts[n];return e||null};dt.prototype.on=function(n,e){var t=this.events[n];return t?t.subscribe(e):null};dt.prototype.dispatch=function(n,e){var t=this,i=this.events[n];i instanceof la&&i.subscribers.forEach(function(r){r.apply(t,e||[])})};dt.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:"context name '"+n+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var i=new ib(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};dt.prototype.getRangeTokens=function(n){var e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};dt.prototype.getContextRanges=function(n){var e=this.getContext(n);return e?e.ranges:{FAIL:"context checker '"+n+"' is not registered."}};dt.prototype.resetContextsRanges=function(){var n=this.registeredContexts;for(var e in n)if(n.hasOwnProperty(e)){var t=n[e];t.ranges=[]}};dt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var n=this.tokens.map(function(i){return i.char}),e=0;e<n.length;e++){var t=new on(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};dt.prototype.setEndOffset=function(n,e){var t=this.getContext(e).openRange.startIndex,i=new Vo(t,n,e),r=this.getContext(e).ranges;return i.rangeId=e+"."+r.length,r.push(i),this.getContext(e).openRange=null,i};dt.prototype.runContextCheck=function(n){var e=this,t=n.index;this.contextCheckers.forEach(function(i){var r=i.contextName,s=e.getContext(r).openRange;if(!s&&i.checkStart(n)&&(s=new Vo(t,null,r),e.getContext(r).openRange=s,e.dispatch("contextStart",[r,t])),s&&i.checkEnd(n)){var a=t-s.startIndex+1,o=e.setEndOffset(a,r);e.dispatch("contextEnd",[r,o])}})};dt.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();var e=Array.from(n);this.dispatch("start");for(var t=0;t<e.length;t++){var i=e[t],r=new on(e,t);this.dispatch("next",[r]),this.runContextCheck(r);var s=new hr(i);this.tokens.push(s),this.dispatch("newToken",[s,r])}return this.dispatch("end",[this.tokens]),this.tokens};function Jn(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function tf(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function ei(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function ks(n){return/[A-z]/.test(n)}function sb(n){return/\s/.test(n)}function Zt(n){this.font=n,this.features={}}function mi(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function Xr(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:for(var t=e.ranges,i=0;i<t.length;i++){var r=t[i];if(n>=r.start&&n<=r.end){var s=n-r.start;return r.index+s}}break;default:return-1}return-1}function ab(n,e){var t=Xr(n,e.coverage);return t===-1?null:n+e.deltaGlyphId}function ob(n,e){var t=Xr(n,e.coverage);return t===-1?null:e.substitute[t]}function eo(n,e){for(var t=[],i=0;i<n.length;i++){var r=n[i],s=e.current;s=Array.isArray(s)?s[0]:s;var a=Xr(s,r);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function lb(n,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];var i=eo(e.inputCoverage,n);if(i===-1)return[];var r=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];for(var s=n.lookahead.slice(r);s.length&&ei(s[0].char);)s.shift();var a=new on(s,0),o=eo(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&ei(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new on(l,0),u=eo(e.backtrackCoverage,c),f=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&u.length===e.backtrackCoverage.length,h=[];if(f)for(var d=0;d<e.lookupRecords.length;d++)for(var g=e.lookupRecords[d],v=g.lookupListIndex,p=this.getLookupByIndex(v),m=0;m<p.subtables.length;m++){var b=p.subtables[m],x=this.getLookupMethod(p,b),S=this.getSubstitutionType(p,b);if(S==="12")for(var P=0;P<i.length;P++){var R=n.get(P),T=x(R);T&&h.push(T)}}return h}function cb(n,e){var t=n.current,i=Xr(t,e.coverage);if(i===-1)return null;for(var r,s=e.ligatureSets[i],a=0;a<s.length;a++){r=s[a];for(var o=0;o<r.components.length;o++){var l=n.lookahead[o],c=r.components[o];if(l!==c)break;if(o===r.components.length-1)return r}}return null}function ub(n,e){var t=Xr(n,e.coverage);return t===-1?null:e.sequences[t]}Zt.prototype.getDefaultScriptFeaturesIndexes=function(){for(var n=this.font.tables.gsub.scripts,e=0;e<n.length;e++){var t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};Zt.prototype.getScriptFeaturesIndexes=function(n){var e=this.font.tables;if(!e.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,i=0;i<t.length;i++){var r=t[i];if(r.tag===n&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var s=r.langSysRecords;if(s)for(var a=0;a<s.length;a++){var o=s[a];if(o.tag===n){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Zt.prototype.mapTagsToFeatures=function(n,e){for(var t={},i=0;i<n.length;i++){var r=n[i].tag,s=n[i].feature;t[r]=s}this.features[e].tags=t};Zt.prototype.getScriptFeatures=function(n){var e=this.features[n];if(this.features.hasOwnProperty(n))return e;var t=this.getScriptFeaturesIndexes(n);if(!t)return null;var i=this.font.tables.gsub;return e=t.map(function(r){return i.features[r]}),this.features[n]=e,this.mapTagsToFeatures(e,n),e};Zt.prototype.getSubstitutionType=function(n,e){var t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};Zt.prototype.getLookupMethod=function(n,e){var t=this,i=this.getSubstitutionType(n,e);switch(i){case"11":return function(r){return ab.apply(t,[r,e])};case"12":return function(r){return ob.apply(t,[r,e])};case"63":return function(r){return lb.apply(t,[r,e])};case"41":return function(r){return cb.apply(t,[r,e])};case"21":return function(r){return ub.apply(t,[r,e])};default:throw new Error("lookupType: "+n.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};Zt.prototype.lookupFeature=function(n){var e=n.contextParams,t=e.index,i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+n.tag+"' for script '"+n.script+"'.");for(var r=this.getFeatureLookups(i),s=[].concat(e.context),a=0;a<r.length;a++)for(var o=r[a],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var u=l[c],f=this.getSubstitutionType(o,u),h=this.getLookupMethod(o,u),d=void 0;switch(f){case"11":d=h(e.current),d&&s.splice(t,1,new mi({id:11,tag:n.tag,substitution:d}));break;case"12":d=h(e.current),d&&s.splice(t,1,new mi({id:12,tag:n.tag,substitution:d}));break;case"63":d=h(e),Array.isArray(d)&&d.length&&s.splice(t,1,new mi({id:63,tag:n.tag,substitution:d}));break;case"41":d=h(e),d&&s.splice(t,1,new mi({id:41,tag:n.tag,substitution:d}));break;case"21":d=h(e.current),d&&s.splice(t,1,new mi({id:21,tag:n.tag,substitution:d}));break}e=new on(s,t),!(Array.isArray(d)&&!d.length)&&(d=null)}return s.length?s:null};Zt.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);var e=this.features.hasOwnProperty(n.script);if(!n.tag)return e;var t=this.features[n.script].some(function(i){return i.tag===n.tag});return e&&t};Zt.prototype.getLookupSubtables=function(n){return n.subtables||null};Zt.prototype.getLookupByIndex=function(n){var e=this.font.tables.gsub.lookups;return e[n]||null};Zt.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Zt.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function hb(n){var e=n.current,t=n.get(-1);return t===null&&Jn(e)||!Jn(t)&&Jn(e)}function fb(n){var e=n.get(1);return e===null||!Jn(e)}var db={startCheck:hb,endCheck:fb};function pb(n){var e=n.current,t=n.get(-1);return(Jn(e)||ei(e))&&!Jn(t)}function mb(n){var e=n.get(1);switch(!0){case e===null:return!0;case(!Jn(e)&&!ei(e)):var t=sb(e);if(!t)return!0;if(t){var i=!1;if(i=n.lookahead.some(function(r){return Jn(r)||ei(r)}),!i)return!0}break;default:return!1}}var gb={startCheck:pb,endCheck:mb};function vb(n,e,t){e[t].setState(n.tag,n.substitution)}function xb(n,e,t){e[t].setState(n.tag,n.substitution)}function _b(n,e,t){n.substitution.forEach(function(i,r){var s=e[t+r];s.setState(n.tag,i)})}function yb(n,e,t){var i=e[t];i.setState(n.tag,n.substitution.ligGlyph);for(var r=n.substitution.components.length,s=0;s<r;s++)i=e[t+s+1],i.setState("deleted",!0)}var mu={11:vb,12:xb,63:_b,41:yb};function Wo(n,e,t){n instanceof mi&&mu[n.id]&&mu[n.id](n,e,t)}function Sb(n){for(var e=[].concat(n.backtrack),t=e.length-1;t>=0;t--){var i=e[t],r=tf(i),s=ei(i);if(!r&&!s)return!0;if(r)return!1}return!1}function bb(n){if(tf(n.current))return!1;for(var e=0;e<n.lookahead.length;e++){var t=n.lookahead[e],i=ei(t);if(!i)return!0}return!1}function Eb(n){var e=this,t="arab",i=this.featuresTags[t],r=this.tokenizer.getRangeTokens(n);if(r.length!==1){var s=new on(r.map(function(o){return o.getState("glyphIndex")}),0),a=new on(r.map(function(o){return o.char}),0);r.forEach(function(o,l){if(!ei(o.char)){s.setCurrentIndex(l),a.setCurrentIndex(l);var c=0;Sb(a)&&(c|=1),bb(a)&&(c|=2);var u;switch(c){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(i.indexOf(u)!==-1){var f=e.query.lookupFeature({tag:u,script:t,contextParams:s});if(f instanceof Error)return console.info(f.message);f.forEach(function(h,d){h instanceof mi&&(Wo(h,r,d),s.context[d]=h.substitution)})}}})}}function gu(n,e){var t=n.map(function(i){return i.activeState.value});return new on(t,e||0)}function Mb(n){var e=this,t="arab",i=this.tokenizer.getRangeTokens(n),r=gu(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"rlig",script:t,contextParams:r});o.length&&(o.forEach(function(l){return Wo(l,i,a)}),r=gu(i))})}function Tb(n){var e=n.current,t=n.get(-1);return t===null&&ks(e)||!ks(t)&&ks(e)}function Ab(n){var e=n.get(1);return e===null||!ks(e)}var wb={startCheck:Tb,endCheck:Ab};function vu(n,e){var t=n.map(function(i){return i.activeState.value});return new on(t,e||0)}function Rb(n){var e=this,t="latn",i=this.tokenizer.getRangeTokens(n),r=vu(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"liga",script:t,contextParams:r});o.length&&(o.forEach(function(l){return Wo(l,i,a)}),r=vu(i))})}function un(n){this.baseDir=n||"ltr",this.tokenizer=new dt,this.featuresTags={}}un.prototype.setText=function(n){this.text=n};un.prototype.contextChecks={latinWordCheck:wb,arabicWordCheck:db,arabicSentenceCheck:gb};function to(n){var e=this.contextChecks[n+"Check"];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function Cb(){return to.call(this,"latinWord"),to.call(this,"arabicWord"),to.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function Lb(){var n=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var i=n.tokenizer.getRangeTokens(t);n.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())})}un.prototype.registerFeatures=function(n,e){var t=this,i=e.filter(function(r){return t.query.supports({script:n,tag:r})});this.featuresTags.hasOwnProperty(n)?this.featuresTags[n]=this.featuresTags[n].concat(i):this.featuresTags[n]=i};un.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new Zt(n));for(var t=0;t<e.length;t++){var i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};un.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Xo(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function Pb(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Xo.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(i){Eb.call(n,i)})}}function Ub(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){Xo.call(this);var i=this.tokenizer.getContextRanges("arabicWord");i.forEach(function(r){Mb.call(n,r)})}}}function Db(){var n=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){Xo.call(this);var i=this.tokenizer.getContextRanges("latinWord");i.forEach(function(r){Rb.call(n,r)})}}}un.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};un.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(Pb.call(this),Ub.call(this)),this.checkContextReady("latinWord")&&Db.call(this),this.checkContextReady("arabicSentence")&&Lb.call(this)};un.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),Cb.call(this),this.applyFeaturesToContexts())};un.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};un.prototype.getTextGlyphs=function(n){this.processText(n);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var i=this.tokenizer.tokens[t];if(!i.state.deleted){var r=i.activeState.value;e.push(Array.isArray(r)?r[0]:r)}}return e};function at(n){n=n||{},n.tables=n.tables||{},n.empty||(_r(n.familyName,"When creating a new Font object, familyName is required."),_r(n.styleName,"When creating a new Font object, styleName is required."),_r(n.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),_r(n.ascender,"When creating a new Font object, ascender is required."),_r(n.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}},this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,fsSelection:n.fsSelection||this.fsSelectionValues.REGULAR},n.tables.os2)})),this.supported=!0,this.glyphs=new xn.GlyphSet(this,n.glyphs||[]),this.encoding=new xh(this),this.position=new Hr(this),this.substitution=new Yt(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Jh(this)}})}at.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)!==null};at.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};at.prototype.charToGlyph=function(n){var e=this.charToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};at.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return n[t]})}:e})};at.prototype.stringToGlyphs=function(n,e){var t=this,i=new un,r=function(f){return t.charToGlyphIndex(f.char)};i.registerModifier("glyphIndex",null,r);var s=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;i.applyFeatures(this,s);for(var a=i.getTextGlyphs(n),o=a.length,l=new Array(o),c=this.glyphs.get(0),u=0;u<o;u+=1)l[u]=this.glyphs.get(a[u])||c;return l};at.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};at.prototype.nameToGlyph=function(n){var e=this.nameToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};at.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};at.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};at.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};at.prototype.forEachGlyph=function(n,e,t,i,r,s){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,r=Object.assign({},this.defaultRenderOptions,r);var a=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,r),l;if(r.kerning){var c=r.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,r.language)}for(var u=0;u<o.length;u+=1){var f=o[u];if(s.call(this,f,e,t,i,r),f.advanceWidth&&(e+=f.advanceWidth*a),r.kerning&&u<o.length-1){var h=l?this.position.getKerningValue(l,f.index,o[u+1].index):this.getKerningValue(f,o[u+1]);e+=h*a}r.letterSpacing?e+=r.letterSpacing*i:r.tracking&&(e+=r.tracking/1e3*i)}return e};at.prototype.getPath=function(n,e,t,i,r){var s=new xt;return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var u=a.getPath(o,l,c,r,this);s.extend(u)}),s};at.prototype.getPaths=function(n,e,t,i,r){var s=[];return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var u=a.getPath(o,l,c,r,this);s.push(u)}),s};at.prototype.getAdvanceWidth=function(n,e,t){return this.forEachGlyph(n,0,0,e,t,function(){})};at.prototype.draw=function(n,e,t,i,r,s){this.getPath(e,t,i,r,s).draw(n)};at.prototype.drawPoints=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawPoints(n,o,l,c)})};at.prototype.drawMetrics=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawMetrics(n,o,l,c)})};at.prototype.getEnglishName=function(n){var e=this.names[n];if(e)return e.en};at.prototype.validate=function(){var n=this;function e(i,r){}function t(i){var r=n.getEnglishName(i);r&&r.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};at.prototype.toTables=function(){return by.fontToTable(this)};at.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};at.prototype.toArrayBuffer=function(){for(var n=this.toTables(),e=n.encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t),r=0;r<e.length;r++)i[r]=e[r];return t};at.prototype.download=function(n){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");n=n||e.replace(/\s/g,"")+"-"+t+".otf";var i=this.toArrayBuffer();if(window.URL=window.URL||window.webkitURL,window.URL){var r=new DataView(i),s=new Blob([r],{type:"font/opentype"}),a=document.createElement("a");a.href=window.URL.createObjectURL(s),a.download=n;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),a.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.")};at.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};at.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};at.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function nf(n,e){var t=JSON.stringify(n),i=256;for(var r in e){var s=parseInt(r);if(!(!s||s<256)){if(JSON.stringify(e[r])===t)return s;i<=s&&(i=s+1)}}return e[i]=n,i}function Fb(n,e,t){var i=nf(e.name,t);return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:i}]}function Ob(n,e,t){var i={},r=new Te.Parser(n,e);return i.tag=r.parseTag(),i.minValue=r.parseFixed(),i.defaultValue=r.parseFixed(),i.maxValue=r.parseFixed(),r.skip("uShort",1),i.name=t[r.parseUShort()]||{},i}function Ib(n,e,t,i){for(var r=nf(e.name,i),s=[{name:"nameID_"+n,type:"USHORT",value:r},{name:"flags_"+n,type:"USHORT",value:0}],a=0;a<t.length;++a){var o=t[a].tag;s.push({name:"axis_"+n+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return s}function Nb(n,e,t,i){var r={},s=new Te.Parser(n,e);r.name=i[s.parseUShort()]||{},s.skip("uShort",1),r.coordinates={};for(var a=0;a<t.length;++a)r.coordinates[t[a].tag]=s.parseFixed();return r}function kb(n,e){var t=new _e.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(var i=0;i<n.axes.length;i++)t.fields=t.fields.concat(Fb(i,n.axes[i],e));for(var r=0;r<n.instances.length;r++)t.fields=t.fields.concat(Ib(r,n.instances[r],n.axes,e));return t}function Bb(n,e,t){var i=new Te.Parser(n,e),r=i.parseULong();Ue.argument(r===65536,"Unsupported fvar table version.");var s=i.parseOffset16();i.skip("uShort",1);for(var a=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),u=[],f=0;f<a;f++)u.push(Ob(n,e+s+f*o,t));for(var h=[],d=e+s+a*o,g=0;g<l;g++)h.push(Nb(n,d+g*c,u,t));return{axes:u,instances:h}}var Gb={make:kb,parse:Bb},zb=function(){return{coverage:this.parsePointer(k.coverage),attachPoints:this.parseList(k.pointer(k.uShortList))}},Hb=function(){var n=this.parseUShort();if(Ue.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},Vb=function(){return this.parseList(k.pointer(Hb))},Wb=function(){return{coverage:this.parsePointer(k.coverage),ligGlyphs:this.parseList(k.pointer(Vb))}},Xb=function(){return this.parseUShort(),this.parseList(k.pointer(k.coverage))};function qb(n,e){e=e||0;var t=new k(n,e),i=t.parseVersion(1);Ue.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var r={version:i,classDef:t.parsePointer(k.classDef),attachList:t.parsePointer(zb),ligCaretList:t.parsePointer(Wb),markAttachClassDef:t.parsePointer(k.classDef)};return i>=1.2&&(r.markGlyphSets=t.parsePointer(Xb)),r}var Yb={parse:qb},ln=new Array(10);ln[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(k.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(k.coverage),values:this.parseValueRecordList()};Ue.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};ln[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();Ue.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var i=this.parsePointer(k.coverage),r=this.parseUShort(),s=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,pairSets:this.parseList(k.pointer(k.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}})))};if(t===2){var a=this.parsePointer(k.classDef),o=this.parsePointer(k.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,k.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}}))}}};ln[3]=function(){return{error:"GPOS Lookup 3 not supported"}};ln[4]=function(){return{error:"GPOS Lookup 4 not supported"}};ln[5]=function(){return{error:"GPOS Lookup 5 not supported"}};ln[6]=function(){return{error:"GPOS Lookup 6 not supported"}};ln[7]=function(){return{error:"GPOS Lookup 7 not supported"}};ln[8]=function(){return{error:"GPOS Lookup 8 not supported"}};ln[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Zb(n,e){e=e||0;var t=new k(n,e),i=t.parseVersion(1);return Ue.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(ln),variations:t.parseFeatureVariationsList()}}var Kb=new Array(10);function jb(n){return new _e.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new _e.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new _e.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new _e.LookupList(n.lookups,Kb)}])}var Jb={parse:Zb,make:jb};function $b(n){var e={};n.skip("uShort");var t=n.parseUShort();Ue.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);var i=n.parseUShort();n.skip("uShort",3);for(var r=0;r<i;r+=1){var s=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[s+","+a]=o}return e}function Qb(n){var e={};n.skip("uShort");var t=n.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");var i=n.parseUShort(),r=i&255;if(n.skip("uShort"),r===0){var s=n.parseUShort();n.skip("uShort",3);for(var a=0;a<s;a+=1){var o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function eE(n,e){var t=new Te.Parser(n,e),i=t.parseUShort();if(i===0)return $b(t);if(i===1)return Qb(t);throw new Error("Unsupported kern table version ("+i+").")}var tE={parse:eE};function nE(n,e,t,i){for(var r=new Te.Parser(n,e),s=i?r.parseUShort:r.parseULong,a=[],o=0;o<t+1;o+=1){var l=s.call(r);i&&(l*=2),a.push(l)}return a}var iE={parse:nE};function rE(n,e){var t=new XMLHttpRequest;t.open("get",n,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?e(null,t.response):e("Font could not be loaded: "+t.statusText)},t.onerror=function(){e("Font could not be loaded")},t.send()}function xu(n,e){for(var t=[],i=12,r=0;r<e;r+=1){var s=Te.getTag(n,i),a=Te.getULong(n,i+4),o=Te.getULong(n,i+8),l=Te.getULong(n,i+12);t.push({tag:s,checksum:a,offset:o,length:l,compression:!1}),i+=16}return t}function sE(n,e){for(var t=[],i=44,r=0;r<e;r+=1){var s=Te.getTag(n,i),a=Te.getULong(n,i+4),o=Te.getULong(n,i+8),l=Te.getULong(n,i+12),c=void 0;o<l?c="WOFF":c=!1,t.push({tag:s,offset:a,compression:c,compressedLength:o,length:l}),i+=20}return t}function ut(n,e){if(e.compression==="WOFF"){var t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(Kx(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var r=new DataView(i.buffer,0);return{data:r,offset:0}}else return{data:n,offset:e.offset}}function rf(n,e){e=e??{};var t,i,r=new at({empty:!0}),s=new DataView(n,0),a,o=[],l=Te.getTag(s,0);if(l==="\0\0\0"||l==="true"||l==="typ1")r.outlinesFormat="truetype",a=Te.getUShort(s,4),o=xu(s,a);else if(l==="OTTO")r.outlinesFormat="cff",a=Te.getUShort(s,4),o=xu(s,a);else if(l==="wOFF"){var c=Te.getTag(s,4);if(c==="\0\0\0")r.outlinesFormat="truetype";else if(c==="OTTO")r.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=Te.getUShort(s,12),o=sE(s,a)}else throw new Error("Unsupported OpenType signature "+l);for(var u,f,h,d,g,v,p,m,b,x,S,P,R=0;R<a;R+=1){var T=o[R],D=void 0;switch(T.tag){case"cmap":D=ut(s,T),r.tables.cmap=vh.parse(D.data,D.offset),r.encoding=new _h(r.tables.cmap);break;case"cvt ":D=ut(s,T),P=new Te.Parser(D.data,D.offset),r.tables.cvt=P.parseShortList(T.length/2);break;case"fvar":f=T;break;case"fpgm":D=ut(s,T),P=new Te.Parser(D.data,D.offset),r.tables.fpgm=P.parseByteList(T.length);break;case"head":D=ut(s,T),r.tables.head=Ch.parse(D.data,D.offset),r.unitsPerEm=r.tables.head.unitsPerEm,t=r.tables.head.indexToLocFormat;break;case"hhea":D=ut(s,T),r.tables.hhea=Lh.parse(D.data,D.offset),r.ascender=r.tables.hhea.ascender,r.descender=r.tables.hhea.descender,r.numberOfHMetrics=r.tables.hhea.numberOfHMetrics;break;case"hmtx":p=T;break;case"ltag":D=ut(s,T),i=Uh.parse(D.data,D.offset);break;case"COLR":D=ut(s,T),r.tables.colr=Hh.parse(D.data,D.offset);break;case"CPAL":D=ut(s,T),r.tables.cpal=Vh.parse(D.data,D.offset);break;case"maxp":D=ut(s,T),r.tables.maxp=Dh.parse(D.data,D.offset),r.numGlyphs=r.tables.maxp.numGlyphs;break;case"name":x=T;break;case"OS/2":D=ut(s,T),r.tables.os2=Eo.parse(D.data,D.offset);break;case"post":D=ut(s,T),r.tables.post=Bh.parse(D.data,D.offset),r.glyphNames=new Bo(r.tables.post);break;case"prep":D=ut(s,T),P=new Te.Parser(D.data,D.offset),r.tables.prep=P.parseByteList(T.length);break;case"glyf":h=T;break;case"loca":b=T;break;case"CFF ":u=T;break;case"kern":m=T;break;case"GDEF":d=T;break;case"GPOS":g=T;break;case"GSUB":v=T;break;case"meta":S=T;break}}var ee=ut(s,x);if(r.tables.name=kh.parse(ee.data,ee.offset,i),r.names=r.tables.name,h&&b){var _=t===0,A=ut(s,b),q=iE.parse(A.data,A.offset,r.numGlyphs,_),Q=ut(s,h);r.glyphs=Zh.parse(Q.data,Q.offset,q,r,e)}else if(u){var U=ut(s,u);Rh.parse(U.data,U.offset,r,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var B=ut(s,p);if(Ph.parse(r,B.data,B.offset,r.numberOfHMetrics,r.numGlyphs,r.glyphs,e),g_(r,e),m){var I=ut(s,m);r.kerningPairs=tE.parse(I.data,I.offset)}else r.kerningPairs={};if(d){var Y=ut(s,d);r.tables.gdef=Yb.parse(Y.data,Y.offset)}if(g){var W=ut(s,g);r.tables.gpos=Jb.parse(W.data,W.offset),r.position.init()}if(v){var X=ut(s,v);r.tables.gsub=Gh.parse(X.data,X.offset)}if(f){var Z=ut(s,f);r.tables.fvar=Gb.parse(Z.data,Z.offset,r.names)}if(S){var K=ut(s,S);r.tables.meta=zh.parse(K.data,K.offset),r.metas=r.tables.meta}return r}function aE(n,e,t){return t=t??{},new Promise(function(i,r){rE(n,function(s,a){if(s){if(e)return e(s);r(s)}var o;try{o=rf(a,t)}catch(l){if(e)return e(l,null);r(l)}if(e)return e(null,o);i(o)})})}var oE=Object.freeze({__proto__:null,Font:at,Glyph:qt,Path:xt,BoundingBox:On,_parse:Te,parse:rf,load:aE});class lE extends Gr{constructor(e){super(e),this.reversed=!1}load(e,t,i,r){const s=this,a=new Dx(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){function t(r,s){const a=Math.round,o={},l=1e5/((r.unitsPerEm||2048)*72),c=r.encoding.cmap.glyphIndexMap,u=Object.keys(c);for(let f=0;f<u.length;f++){const h=u[f],d=r.glyphs.glyphs[c[h]];if(h!==void 0){const g={ha:a(d.advanceWidth*l),x_min:a(d.xMin*l),x_max:a(d.xMax*l),o:""};s&&(d.path.commands=i(d.path.commands)),d.path.commands.forEach(function(v){v.type.toLowerCase()==="c"&&(v.type="b"),g.o+=v.type.toLowerCase()+" ",v.x!==void 0&&v.y!==void 0&&(g.o+=a(v.x*l)+" "+a(v.y*l)+" "),v.x1!==void 0&&v.y1!==void 0&&(g.o+=a(v.x1*l)+" "+a(v.y1*l)+" "),v.x2!==void 0&&v.y2!==void 0&&(g.o+=a(v.x2*l)+" "+a(v.y2*l)+" ")}),o[String.fromCodePoint(d.unicode)]=g}}return{glyphs:o,familyName:r.getEnglishName("fullName"),ascender:a(r.ascender*l),descender:a(r.descender*l),underlinePosition:r.tables.post.underlinePosition,underlineThickness:r.tables.post.underlineThickness,boundingBox:{xMin:r.tables.head.xMin,xMax:r.tables.head.xMax,yMin:r.tables.head.yMin,yMax:r.tables.head.yMax},resolution:1e3,original_font_information:r.tables.name}}function i(r){const s=[];let a;r.forEach(function(l){l.type.toLowerCase()==="m"?(a=[l],s.push(a)):l.type.toLowerCase()!=="z"&&a.push(l)});const o=[];return s.forEach(function(l){const c={type:"m",x:l[l.length-1].x,y:l[l.length-1].y};o.push(c);for(let u=l.length-1;u>0;u--){const f=l[u],h={type:f.type};f.x2!==void 0&&f.y2!==void 0?(h.x1=f.x2,h.y1=f.y2,h.x2=f.x1,h.y2=f.y1):f.x1!==void 0&&f.y1!==void 0&&(h.x1=f.x1,h.y1=f.y1),h.x=l[u-1].x,h.y=l[u-1].y,o.push(h)}}),o}return t(oE.parse(e),this.reversed)}}class cE{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=uE(e,t,this.data);for(let s=0,a=r.length;s<a;s++)i.push(...r[s].toShapes());return i}}function uE(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)o=0,l-=s;else{const f=hE(u,r,o,l,t);o+=f.offsetX,a.push(f.path)}}return a}function hE(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const a=new Nx;let o,l,c,u,f,h,d,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=v.length;p<m;)switch(v[p++]){case"m":o=v[p++]*e+t,l=v[p++]*e+i,a.moveTo(o,l);break;case"l":o=v[p++]*e+t,l=v[p++]*e+i,a.lineTo(o,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+i,f=v[p++]*e+t,h=v[p++]*e+i,a.quadraticCurveTo(f,h,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+i,f=v[p++]*e+t,h=v[p++]*e+i,d=v[p++]*e+t,g=v[p++]*e+i,a.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*e,path:a}}class hn{constructor(e,t,i,r){this.scene=e,this.text=t,this.font=null,this.mesh=null,this.height=0,this.size=i,this.hover=30,this.curveSegments=4,this.bevelThickness=2,this.bevelSize=1.5,this.color=r,this.mesh=new kt,new lE().load("./fonts/ttf/BBCReithSans_Bd.ttf",a=>this.onLoad(a))}onLoad(e){this.font=new cE(e),this.createText()}createText(){const e=new Gx(this.text,{font:this.font,size:this.size,height:this.height,curveSegments:this.curveSegments,bevelThickness:this.bevelThickness,bevelSize:this.bevelSize,bevelEnabled:!1});e.computeBoundingBox(),e.computeVertexNormals(),-.5*(e.boundingBox.max.x-e.boundingBox.min.x);const t=new sn({color:this.color,side:Rt}),i=this.mesh.matrix.clone();this.mesh.geometry.dispose(),this.mesh.geometry=e,this.mesh.material=t,this.mesh.applyMatrix4(i),this.mesh.position.setZ(.15),this.scene.add(this.mesh)}setX(e){this.mesh.position.setX(e)}setY(e){this.mesh.position.setY(-e)}}let Or=!0,ji=!1,Bs=!1;const fE=0;let dE=window.innerHeight-fE*2,pE=window.innerWidth;const mE=new Ox,st=new jv;st.background=new tt(16777215);const qr=new Jt(75,window.innerWidth/window.innerHeight,.1,8e3);qr.position.x=window.innerWidth/2;qr.position.y=-window.innerHeight/2;qr.position.z=1e3;const gE=new Wu(0,window.innerWidth,0,-window.innerHeight,-1e3,1e3),or=new Ju({antialias:!0});or.setSize(window.innerWidth,window.innerHeight);or.setPixelRatio(window.devicePixelRatio);document.body.appendChild(or.domElement);const sf=new Bx(qr,or.domElement);sf.target.set(pE/2,-dE/2,0);sf.update();const af=new oh,of=af.load("https://static.wikia.nocookie.net/villains/images/b/b7/I.R._Baboon.jpg");of.colorSpace=vt;const vE=new _n(200,200),xE=new sn({map:of,side:Rt}),Qs=new kt(vE,xE);Qs.position.x=100;Qs.position.y=-100;const lf=af.load("./images/bbc.png");lf.colorSpace=vt;const _E=new _n(1920,1080),yE=new sn({map:lf,side:Rt,transparent:!0,opacity:.5}),fr=new kt(_E,yE);fr.visible=Bs;fr.position.x=1920/2;fr.position.y=-1080/2;fr.position.z=0;st.add(fr);const SE=new lr(150,150,150),bE=new sn({color:65280}),Ir=new kt(SE,bE);Ir.position.x=500;Ir.position.y=150;st.add(Ir);st.add(new Ix(1e3));const ni=new lh(4e3,40);ni.visible=ji;ni.position.y=0;ni.position.z=0;ni.rotateX(Co.degToRad(90));ni.material.opacity=.75;ni.material.transparent=!0;st.add(ni);const ii=new lh(4e3,400);ii.visible=ji;ii.position.y=0;ii.position.z=0;ii.rotateX(Co.degToRad(90));ii.material.opacity=.5;ii.material.transparent=!0;st.add(ii);const Yr=new zx(st);Yr.setX(0);Yr.setY(0);Yr.setHeight(63);Yr.setWidth(1920);Yr.setColor(0);const Zr=new ti(st);Zr.setSource("./images/img_1.jpg");Zr.setX(329);Zr.setY(133);Zr.setWidth(616);Zr.setHeight(347);const Kr=new ti(st);Kr.setSource("./images/img_2.jpg");Kr.setX(960);Kr.setY(133);Kr.setWidth(300);Kr.setHeight(170);const jr=new ti(st);jr.setSource("./images/img_3.jpg");jr.setX(1278);jr.setY(133);jr.setWidth(300);jr.setHeight(170);const Jr=new ti(st);Jr.setSource("./images/img_4.jpg");Jr.setX(960);Jr.setY(312);Jr.setWidth(300);Jr.setHeight(170);const $r=new ti(st);$r.setSource("./images/img_5.jpg");$r.setX(1278);$r.setY(312);$r.setWidth(300);$r.setHeight(170);const Qr=new ti(st);Qr.setSource("./images/img_6.jpg");Qr.setX(329);Qr.setY(573);Qr.setWidth(403);Qr.setHeight(226);const es=new ti(st);es.setSource("./images/img_7.jpg");es.setX(750);es.setY(573);es.setWidth(403);es.setHeight(226);const ts=new ti(st);ts.setSource("./images/img_8.jpg");ts.setX(1170);ts.setY(573);ts.setWidth(403);ts.setHeight(226);const cf=new hn(st,"Sign in",9.2,16777215);cf.setX(494);cf.setY(37);const uf=new hn(st,"Home",9.2,16777215);uf.setX(675);uf.setY(37);const hf=new hn(st,"News",9.2,16777215);hf.setX(755);hf.setY(37);const ff=new hn(st,"Sport",9.2,16777215);ff.setX(830);ff.setY(37);const df=new hn(st,"Earth",9.2,16777215);df.setX(907);df.setY(37);const pf=new hn(st,"Reel",9.2,16777215);pf.setX(982);pf.setY(37);const mf=new hn(st,"Worklife",9.2,16777215);mf.setX(1050);mf.setY(37);const gf=new hn(st,"Travel",9.2,16777215);gf.setX(1146);gf.setY(37);const vf=new hn(st,"Culture",9.2,16777215);vf.setX(1225);vf.setY(37);const xf=new hn(st,"Search BBC",9.2,16777215);xf.setX(1387);xf.setY(37);const _f=new hn(st,"Welcome to BBC.com",15.7,4868682);_f.setX(327);_f.setY(114);document.addEventListener("keydown",function(n){n.key==="x"&&(Bs=!Bs,fr.visible=Bs)});const EE=document.getElementById("camButton");EE.addEventListener("click",()=>{Or=!Or});const ME=document.getElementById("gridButton");ME.addEventListener("click",()=>{yf()});document.addEventListener("keydown",function(n){n.key==="z"&&yf()});function yf(){ji=!ji,ni.visible=ji,ii.visible=ji}document.addEventListener("keydown",function(n){n.key==="c"&&TE()});function TE(){Or=!Or}function Sf(){mE.getDelta(),requestAnimationFrame(Sf),Ir.rotation.x+=.01,Ir.rotation.y+=.01,Qs.rotation.x+=.01,Qs.rotation.y+=.01,Or?or.render(st,qr):or.render(st,gE)}Sf()});export default AE();
