(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Or="148",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,Qr=1,Dl=2,Ba=1,Il=2,Di=3,Nn=0,Ie=1,Br=2,$i=3,vn=0,ci=1,to=2,eo=3,no=4,Fl=5,ai=100,zl=101,Nl=102,io=103,so=104,Ol=200,Bl=201,Ul=202,kl=203,Ua=204,ka=205,Vl=206,Gl=207,Wl=208,Hl=209,ql=210,Xl=0,jl=1,$l=2,Tr=3,Yl=4,Zl=5,Kl=6,Jl=7,Va=0,Ql=1,tc=2,dn=0,ec=1,nc=2,ic=3,sc=4,rc=5,Ga=300,ui=301,di=302,Cr=303,Lr=304,Cs=306,Pr=1e3,Ue=1001,Rr=1002,ge=1003,ro=1004,ks=1005,Re=1006,oc=1007,Ni=1008,On=1009,ac=1010,lc=1011,Wa=1012,cc=1013,Dn=1014,In=1015,Oi=1016,hc=1017,uc=1018,hi=1020,dc=1021,fc=1022,ke=1023,pc=1024,mc=1025,Fn=1026,fi=1027,gc=1028,_c=1029,vc=1030,xc=1031,yc=1033,Vs=33776,Gs=33777,Ws=33778,Hs=33779,oo=35840,ao=35841,lo=35842,co=35843,bc=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,_o=37812,vo=37813,xo=37814,yo=37815,bo=37816,Mo=37817,wo=37818,So=37819,Eo=37820,Ao=37821,To=36492,Bn=3e3,Wt=3001,Mc=3200,wc=3201,Ha=0,Sc=1,Xe="srgb",Bi="srgb-linear",qs=7680,Ec=519,Co=35044,Lo="300 es",Dr=1035;class Gn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,Po=180/Math.PI;function Gi(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[a&255]+ue[a>>8&255]+ue[a>>16&255]+ue[a>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function xe(a,t,e){return Math.max(t,Math.min(e,a))}function Ac(a,t){return(a%t+t)%t}function js(a,t,e){return(1-e)*a+e*t}function Ro(a){return(a&a-1)===0&&a!==0}function Ir(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Yi(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Me(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],v=i[1],y=i[4],w=i[7],x=i[2],A=i[5],D=i[8];return s[0]=r*p+o*v+l*x,s[3]=r*f+o*y+l*A,s[6]=r*_+o*w+l*D,s[1]=c*p+h*v+d*x,s[4]=c*f+h*y+d*A,s[7]=c*_+h*w+d*D,s[2]=u*p+m*v+g*x,s[5]=u*f+m*y+g*A,s[8]=u*_+m*w+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,m=c*s-r*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=d*p,t[1]=(i*c-h*n)*p,t[2]=(o*n-i*r)*p,t[3]=u*p,t[4]=(h*e-i*l)*p,t[5]=(i*s-o*e)*p,t[6]=m*p,t[7]=(n*l-c*e)*p,t[8]=(r*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Ee;function qa(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function As(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function zn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ms(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Ys={[Xe]:{[Bi]:zn},[Bi]:{[Xe]:Ms}},pe={legacyMode:!0,get workingColorSpace(){return Bi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.legacyMode||t===e||!t||!e)return a;if(Ys[t]&&Ys[t][e]!==void 0){const n=Ys[t][e];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},Xa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},te={r:0,g:0,b:0},ze={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Zs(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}function Ki(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Ac(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Zs(r,s,t+1/3),this.g=Zs(r,s,t),this.b=Zs(r,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pe.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Xe){const n=Xa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return pe.fromWorkingColorSpace(Ki(this,te),t),xe(te.r*255,0,255)<<16^xe(te.g*255,0,255)<<8^xe(te.b*255,0,255)<<0}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Ki(this,te),e);const n=te.r,i=te.g,s=te.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Ki(this,te),e),t.r=te.r,t.g=te.g,t.b=te.b,t}getStyle(t=Xe){return pe.fromWorkingColorSpace(Ki(this,te),t),t!==Xe?`color(${t} ${te.r} ${te.g} ${te.b})`:`rgb(${te.r*255|0},${te.g*255|0},${te.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(ze),ze.h+=t,ze.s+=e,ze.l+=n,this.setHSL(ze.h,ze.s,ze.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ze),t.getHSL(Zi);const n=js(ze.h,Zi.h,e),i=js(ze.s,Zi.s,e),s=js(ze.l,Zi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Vt.NAMES=Xa;let qn;class ja{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=As("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=As("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=zn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $a{constructor(t=null){this.isSource=!0,this.uuid=Gi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ks(i[r].image)):s.push(Ks(i[r]))}else s=Ks(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ks(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ja.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tc=0;class Ae extends Gn{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Ue,i=Ue,s=Re,r=Ni,o=ke,l=On,c=Ae.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tc++}),this.uuid=Gi(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ga)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Ga;Ae.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,w=(m+1)/2,x=(_+1)/2,A=(h+u)/4,D=(d+p)/4,M=(g+f)/4;return y>w&&y>x?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=D/n):w>x?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=A/i,s=M/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=D/s,i=M/s),this.set(n,i,s,e),this}let v=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-p)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Un extends Gn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Re,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ya extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let kn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||l!==u||c!==m||h!==g){let f=1-o;const _=l*u+c*m+h*g+d*p,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const x=Math.sqrt(y),A=Math.atan2(x,_*v);f=Math.sin(f*A)/x,o=Math.sin(o*A)/x}const w=o*v;if(l=l*f+u*w,c=c*f+m*w,h=h*f+g*w,d=d*f+p*w,f===1-o){const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,h=l*n+o*e-s*i,d=l*i+s*n-r*e,u=-s*e-r*n-o*i;return this.x=c*l+u*-s+h*-o-d*-r,this.y=h*l+u*-r+d*-s-c*-o,this.z=d*l+u*-o+c*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new W,Do=new kn;class Wi{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],d=t[l+1],u=t[l+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),d=t.getY(l),u=t.getZ(l);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Sn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox),Qs.applyMatrix4(t.matrixWorld),this.union(Qs);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),Ji.subVectors(this.max,bi),Xn.subVectors(t.a,bi),jn.subVectors(t.b,bi),$n.subVectors(t.c,bi),fn.subVectors(jn,Xn),pn.subVectors($n,jn),En.subVectors(Xn,$n);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-En.z,En.y,fn.z,0,-fn.x,pn.z,0,-pn.x,En.z,0,-En.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-En.y,En.x,0];return!tr(e,Xn,jn,$n,Ji)||(e=[1,0,0,0,1,0,0,0,1],!tr(e,Xn,jn,$n,Ji))?!1:(Qi.crossVectors(fn,pn),e=[Qi.x,Qi.y,Qi.z],tr(e,Xn,jn,$n,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Sn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const tn=[new W,new W,new W,new W,new W,new W,new W,new W],Sn=new W,Qs=new Wi,Xn=new W,jn=new W,$n=new W,fn=new W,pn=new W,En=new W,bi=new W,Ji=new W,Qi=new W,An=new W;function tr(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){An.fromArray(a,s);const o=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),l=t.dot(An),c=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lc=new Wi,Mi=new W,er=new W;let Ls=class{constructor(t=new W,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(er)),this.expandByPoint(Mi.copy(t.center).sub(er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const en=new W,nr=new W,ts=new W,mn=new W,ir=new W,es=new W,sr=new W;let Za=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.direction).multiplyScalar(e).add(this.origin),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nr.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(nr);const s=t.distanceTo(e)*.5,r=-this.direction.dot(ts),o=mn.dot(this.direction),l=-mn.dot(ts),c=mn.lengthSq(),h=Math.abs(1-r*r);let d,u,m,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ts).multiplyScalar(u).add(nr),m}intersectSphere(t,e){en.subVectors(t.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,i,s){ir.subVectors(e,t),es.subVectors(n,t),sr.crossVectors(ir,es);let r=this.direction.dot(sr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mn.subVectors(this.origin,t);const l=o*this.direction.dot(es.crossVectors(mn,es));if(l<0)return null;const c=o*this.direction.dot(ir.cross(mn));if(c<0||l+c>r)return null;const h=-o*mn.dot(sr);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Kt{constructor(){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,h,d,u,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Yn.setFromMatrixColumn(t,0).length(),s=1/Yn.setFromMatrixColumn(t,1).length(),r=1/Yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-p*c,e[9]=-o*l,e[2]=p-u*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,p=c*d;e[0]=u+p*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=m*o-g,e[6]=p+u*o,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,p=c*d;e[0]=u-p*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*h,e[9]=p-u*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,m=r*d,g=o*h,p=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+p,e[1]=l*d,e[5]=p*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,m=r*c,g=o*l,p=o*c;e[0]=l*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){const u=r*l,m=r*c,g=o*l,p=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+p,e[5]=r*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pc,t,Rc)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),gn.crossVectors(n,we),gn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),gn.crossVectors(n,we)),gn.normalize(),ns.crossVectors(we,gn),i[0]=gn.x,i[4]=ns.x,i[8]=we.x,i[1]=gn.y,i[5]=ns.y,i[9]=we.y,i[2]=gn.z,i[6]=ns.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],v=n[3],y=n[7],w=n[11],x=n[15],A=i[0],D=i[4],M=i[8],L=i[12],I=i[1],V=i[5],K=i[9],C=i[13],R=i[2],F=i[6],N=i[10],J=i[14],k=i[3],Y=i[7],Q=i[11],H=i[15];return s[0]=r*A+o*I+l*R+c*k,s[4]=r*D+o*V+l*F+c*Y,s[8]=r*M+o*K+l*N+c*Q,s[12]=r*L+o*C+l*J+c*H,s[1]=h*A+d*I+u*R+m*k,s[5]=h*D+d*V+u*F+m*Y,s[9]=h*M+d*K+u*N+m*Q,s[13]=h*L+d*C+u*J+m*H,s[2]=g*A+p*I+f*R+_*k,s[6]=g*D+p*V+f*F+_*Y,s[10]=g*M+p*K+f*N+_*Q,s[14]=g*L+p*C+f*J+_*H,s[3]=v*A+y*I+w*R+x*k,s[7]=v*D+y*V+w*F+x*Y,s[11]=v*M+y*K+w*N+x*Q,s[15]=v*L+y*C+w*J+x*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*m-n*l*m)+p*(+e*l*m-e*c*u+s*r*u-i*r*m+i*c*h-s*l*h)+f*(+e*c*d-e*o*m-s*r*d+n*r*m+s*o*h-n*c*h)+_*(-i*o*h-e*l*d+e*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],v=d*f*c-p*u*c+p*l*m-o*f*m-d*l*_+o*u*_,y=g*u*c-h*f*c-g*l*m+r*f*m+h*l*_-r*u*_,w=h*p*c-g*d*c+g*o*m-r*p*m-h*o*_+r*d*_,x=g*d*l-h*p*l-g*o*u+r*p*u+h*o*f-r*d*f,A=e*v+n*y+i*w+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return t[0]=v*D,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*_-n*u*_)*D,t[2]=(o*f*s-p*l*s+p*i*c-n*f*c-o*i*_+n*l*_)*D,t[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*m-n*l*m)*D,t[4]=y*D,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*_+e*u*_)*D,t[6]=(g*l*s-r*f*s-g*i*c+e*f*c+r*i*_-e*l*_)*D,t[7]=(r*u*s-h*l*s+h*i*c-e*u*c-r*i*m+e*l*m)*D,t[8]=w*D,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*_-e*d*_)*D,t[10]=(r*p*s-g*o*s+g*n*c-e*p*c-r*n*_+e*o*_)*D,t[11]=(h*o*s-r*d*s-h*n*c+e*d*c+r*n*m-e*o*m)*D,t[12]=x*D,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*D,t[14]=(g*o*i-r*p*i-g*n*l+e*p*l+r*n*f-e*o*f)*D,t[15]=(r*d*i-h*o*i+h*n*l-e*d*l-r*n*u+e*o*u)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,h=r+r,d=o+o,u=s*c,m=s*h,g=s*d,p=r*h,f=r*d,_=o*d,v=l*c,y=l*h,w=l*d,x=n.x,A=n.y,D=n.z;return i[0]=(1-(p+_))*x,i[1]=(m+w)*x,i[2]=(g-y)*x,i[3]=0,i[4]=(m-w)*A,i[5]=(1-(u+_))*A,i[6]=(f+v)*A,i[7]=0,i[8]=(g+y)*D,i[9]=(f-v)*D,i[10]=(1-(u+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Yn.set(i[0],i[1],i[2]).length();const r=Yn.set(i[4],i[5],i[6]).length(),o=Yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ne.copy(this);const c=1/s,h=1/r,d=1/o;return Ne.elements[0]*=c,Ne.elements[1]*=c,Ne.elements[2]*=c,Ne.elements[4]*=h,Ne.elements[5]*=h,Ne.elements[6]*=h,Ne.elements[8]*=d,Ne.elements[9]*=d,Ne.elements[10]*=d,e.setFromRotationMatrix(Ne),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),h=1/(r-s),d=(e+t)*l,u=(n+i)*c,m=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Yn=new W,Ne=new Kt,Pc=new W(0,0,0),Rc=new W(1,1,1),gn=new W,ns=new W,we=new W,Io=new Kt,Fo=new kn;class Hi{constructor(t=0,e=0,n=0,i=Hi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Hi.DefaultOrder="XYZ";Hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dc=0;const zo=new W,Zn=new kn,nn=new Kt,is=new W,wi=new W,Ic=new W,Fc=new kn,No=new W(1,0,0),Oo=new W(0,1,0),Bo=new W(0,0,1),zc={type:"added"},Uo={type:"removed"};class ce extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DefaultUp.clone();const t=new W,e=new Hi,n=new kn,i=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ee}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DefaultMatrixWorldAutoUpdate,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(wi,is,this.up):nn.lookAt(is,wi,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(nn),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Uo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Ic),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Fc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DefaultUp=new W(0,1,0);ce.DefaultMatrixAutoUpdate=!0;ce.DefaultMatrixWorldAutoUpdate=!0;const Oe=new W,sn=new W,rr=new W,rn=new W,Kn=new W,Jn=new W,ko=new W,or=new W,ar=new W,lr=new W;class un{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Oe.subVectors(i,e),sn.subVectors(n,e),rr.subVectors(t,e);const r=Oe.dot(Oe),o=Oe.dot(sn),l=Oe.dot(rr),c=sn.dot(sn),h=sn.dot(rr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,rn),l.set(0,0),l.addScaledVector(s,rn.x),l.addScaledVector(r,rn.y),l.addScaledVector(o,rn.z),l}static isFrontFacing(t,e,n,i){return Oe.subVectors(n,e),sn.subVectors(t,e),Oe.cross(sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Oe.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return un.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Kn.subVectors(i,n),Jn.subVectors(s,n),or.subVectors(t,n);const l=Kn.dot(or),c=Jn.dot(or);if(l<=0&&c<=0)return e.copy(n);ar.subVectors(t,i);const h=Kn.dot(ar),d=Jn.dot(ar);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Kn,r);lr.subVectors(t,s);const m=Kn.dot(lr),g=Jn.dot(lr);if(g>=0&&m<=g)return e.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Jn,o);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return ko.subVectors(s,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(ko,o);const _=1/(f+p+u);return r=p*_,o=u*_,e.copy(n).addScaledVector(Kn,r).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Nc=0,gi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=ci,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ua,this.blendDst=ka,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ja extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $t=new W,ss=new At;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix3(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix4(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyNormalMatrix(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.transformDirection(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Qa extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tl extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ye extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Oc=0;const Pe=new Kt,cr=new ce,Qn=new W,Se=new Wi,Si=new Wi,ae=new W;class Ke extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tl:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return cr.lookAt(t),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(ae.addVectors(Se.min,Si.min),Se.expandByPoint(ae),ae.addVectors(Se.max,Si.max),Se.expandByPoint(ae)):(Se.expandByPoint(Si.min),Se.expandByPoint(Si.max))}Se.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ae));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ae.fromBufferAttribute(o,c),l&&(Qn.fromBufferAttribute(t,c),ae.add(Qn)),i=Math.max(i,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new W,h[I]=new W;const d=new W,u=new W,m=new W,g=new At,p=new At,f=new At,_=new W,v=new W;function y(I,V,K){d.fromArray(i,I*3),u.fromArray(i,V*3),m.fromArray(i,K*3),g.fromArray(r,I*2),p.fromArray(r,V*2),f.fromArray(r,K*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const C=1/(p.x*f.y-f.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(C),v.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(C),c[I].add(_),c[V].add(_),c[K].add(_),h[I].add(v),h[V].add(v),h[K].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let I=0,V=w.length;I<V;++I){const K=w[I],C=K.start,R=K.count;for(let F=C,N=C+R;F<N;F+=3)y(n[F+0],n[F+1],n[F+2])}const x=new W,A=new W,D=new W,M=new W;function L(I){D.fromArray(s,I*3),M.copy(D);const V=c[I];x.copy(V),x.sub(D.multiplyScalar(D.dot(V))).normalize(),A.crossVectors(M,V);const C=A.dot(h[I])<0?-1:1;l[I*4]=x.x,l[I*4+1]=x.y,l[I*4+2]=x.z,l[I*4+3]=C}for(let I=0,V=w.length;I<V;++I){const K=w[I],C=K.start,R=K.count;for(let F=C,N=C+R;F<N;F+=3)L(n[F+0]),L(n[F+1]),L(n[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new W,s=new W,r=new W,o=new W,l=new W,c=new W,h=new W,d=new W;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*h;for(let _=0;_<h;_++)u[g++]=c[m++]}return new Fe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vo=new Kt,ti=new Za,hr=new Ls,Ei=new W,Ai=new W,Ti=new W,ur=new W,rs=new W,os=new At,as=new At,ls=new At,dr=new W,cs=new W;class Ve extends ce{constructor(t=new Ke,e=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ur.fromBufferAttribute(d,t),r?rs.addScaledVector(ur,h):rs.addScaledVector(ur.sub(e),h))}e.add(rs)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),t.ray.intersectsSphere(hr)===!1)||(Vo.copy(s).invert(),ti.copy(t.ray).applyMatrix4(Vo),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),v=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=_,w=v;y<w;y+=3){const x=o.getX(y),A=o.getX(y+1),D=o.getX(y+2);r=hs(this,f,t,ti,c,h,x,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);r=hs(this,i,t,ti,c,h,_,v,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){const p=d[m],f=i[p.materialIndex],_=Math.max(p.start,u.start),v=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=_,w=v;y<w;y+=3){const x=y,A=y+1,D=y+2;r=hs(this,f,t,ti,c,h,x,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let p=m,f=g;p<f;p+=3){const _=p,v=p+1,y=p+2;r=hs(this,i,t,ti,c,h,_,v,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Bc(a,t,e,n,i,s,r,o){let l;if(t.side===Ie?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Nn,o),l===null)return null;cs.copy(o),cs.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:a}}function hs(a,t,e,n,i,s,r,o,l){a.getVertexPosition(r,Ei),a.getVertexPosition(o,Ai),a.getVertexPosition(l,Ti);const c=Bc(a,t,e,n,Ei,Ai,Ti,dr);if(c){i&&(os.fromBufferAttribute(i,r),as.fromBufferAttribute(i,o),ls.fromBufferAttribute(i,l),c.uv=un.getUV(dr,Ei,Ai,Ti,os,as,ls,new At)),s&&(os.fromBufferAttribute(s,r),as.fromBufferAttribute(s,o),ls.fromBufferAttribute(s,l),c.uv2=un.getUV(dr,Ei,Ai,Ti,os,as,ls,new At));const h={a:r,b:o,c:l,normal:new W,materialIndex:0};un.getNormal(Ei,Ai,Ti,h.normal),c.face=h}return c}class _i extends Ke{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function g(p,f,_,v,y,w,x,A,D,M,L){const I=w/D,V=x/M,K=w/2,C=x/2,R=A/2,F=D+1,N=M+1;let J=0,k=0;const Y=new W;for(let Q=0;Q<N;Q++){const H=Q*V-C;for(let O=0;O<F;O++){const tt=O*I-K;Y[p]=tt*v,Y[f]=H*y,Y[_]=R,c.push(Y.x,Y.y,Y.z),Y[p]=0,Y[f]=0,Y[_]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(O/D),d.push(1-Q/M),J+=1}}for(let Q=0;Q<M;Q++)for(let H=0;H<D;H++){const O=u+H+F*Q,tt=u+H+F*(Q+1),nt=u+(H+1)+F*(Q+1),ot=u+(H+1)+F*Q;l.push(O,tt,ot),l.push(tt,nt,ot),k+=6}o.addGroup(m,k,L),m+=k,u+=J}}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(a){const t={};for(let e=0;e<a.length;e++){const n=pi(a[e]);for(const i in n)t[i]=n[i]}return t}function Uc(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function el(a){return a.getRenderTarget()===null&&a.outputEncoding===Wt?Xe:Bi}const kc={clone:pi,merge:me};var Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=Uc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nl extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class Wc extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new De(ei,ni,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new De(ei,ni,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new De(ei,ni,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new De(ei,ni,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new De(ei,ni,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new De(ei,ni,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=dn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class il extends Ae{constructor(t,e,n,i,s,r,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new il(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _i(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:vn});s.uniforms.tEquirect.value=e;const r=new Ve(i,s),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Re),new Wc(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const fr=new W,qc=new W,Xc=new Ee;let Cn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fr.subVectors(n,e).cross(qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(fr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xc.getNormalMatrix(t),i=this.coplanarPoint(fr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ii=new Ls,us=new W;class Ur{constructor(t=new Cn,e=new Cn,n=new Cn,i=new Cn,s=new Cn,r=new Cn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],v=n[14],y=n[15];return e[0].setComponents(o-i,d-l,p-u,y-f).normalize(),e[1].setComponents(o+i,d+l,p+u,y+f).normalize(),e[2].setComponents(o+s,d+c,p+m,y+_).normalize(),e[3].setComponents(o-s,d-c,p-m,y-_).normalize(),e[4].setComponents(o-r,d-h,p-g,y-v).normalize(),e[5].setComponents(o+r,d+h,p+g,y+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sl(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function jc(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:l}}class Ps extends Ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const v=_*u-r;for(let y=0;y<c;y++){const w=y*d-s;g.push(w,-v,0),p.push(0,0,1),f.push(y/o),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const y=v+c*_,w=v+c*(_+1),x=v+1+c*(_+1),A=v+1+c*_;m.push(y,w,A),m.push(w,x,A)}this.setIndex(m),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(f,2))}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var $c=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,th="vec3 transformed = vec3( position );",eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,ih=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,sh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,mh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rh=`#ifdef USE_GRADIENTMAP
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
}`,Dh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Oh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wh=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Hh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,su=`#ifdef USE_MORPHNORMALS
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
#endif`,ru=`#ifdef USE_MORPHTARGETS
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
#endif`,ou=`#ifdef USE_MORPHTARGETS
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
#endif`,au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Su=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cu=`float getShadowMask() {
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
}`,Lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Du=`#ifdef USE_SKINNING
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
#endif`,Iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ou=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Bu=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Uu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ku=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Vu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Gu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Hu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ju=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yu=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ju=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Qu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,td=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,ed=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,od=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ad=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,cd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,ud=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,md=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,_d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,xd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Md=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Sd=`uniform float rotation;
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
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Et={alphamap_fragment:$c,alphamap_pars_fragment:Yc,alphatest_fragment:Zc,alphatest_pars_fragment:Kc,aomap_fragment:Jc,aomap_pars_fragment:Qc,begin_vertex:th,beginnormal_vertex:eh,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:sh,clipping_planes_fragment:rh,clipping_planes_pars_fragment:oh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:lh,color_fragment:ch,color_pars_fragment:hh,color_pars_vertex:uh,color_vertex:dh,common:fh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:_h,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,encodings_fragment:yh,encodings_pars_fragment:bh,envmap_fragment:Mh,envmap_common_pars_fragment:wh,envmap_pars_fragment:Sh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Oh,envmap_vertex:Ah,fog_vertex:Th,fog_pars_vertex:Ch,fog_fragment:Lh,fog_pars_fragment:Ph,gradientmap_pars_fragment:Rh,lightmap_fragment:Dh,lightmap_pars_fragment:Ih,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:zh,lights_pars_begin:Nh,lights_toon_fragment:Bh,lights_toon_pars_fragment:Uh,lights_phong_fragment:kh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Wh,lights_fragment_begin:Hh,lights_fragment_maps:qh,lights_fragment_end:Xh,logdepthbuf_fragment:jh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Zh,map_fragment:Kh,map_pars_fragment:Jh,map_particle_fragment:Qh,map_particle_pars_fragment:tu,metalnessmap_fragment:eu,metalnessmap_pars_fragment:nu,morphcolor_vertex:iu,morphnormal_vertex:su,morphtarget_pars_vertex:ru,morphtarget_vertex:ou,normal_fragment_begin:au,normal_fragment_maps:lu,normal_pars_fragment:cu,normal_pars_vertex:hu,normal_vertex:uu,normalmap_pars_fragment:du,clearcoat_normal_fragment_begin:fu,clearcoat_normal_fragment_maps:pu,clearcoat_pars_fragment:mu,iridescence_pars_fragment:gu,output_fragment:_u,packing:vu,premultiplied_alpha_fragment:xu,project_vertex:yu,dithering_fragment:bu,dithering_pars_fragment:Mu,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Su,shadowmap_pars_fragment:Eu,shadowmap_pars_vertex:Au,shadowmap_vertex:Tu,shadowmask_pars_fragment:Cu,skinbase_vertex:Lu,skinning_pars_vertex:Pu,skinning_vertex:Ru,skinnormal_vertex:Du,specularmap_fragment:Iu,specularmap_pars_fragment:Fu,tonemapping_fragment:zu,tonemapping_pars_fragment:Nu,transmission_fragment:Ou,transmission_pars_fragment:Bu,uv_pars_fragment:Uu,uv_pars_vertex:ku,uv_vertex:Vu,uv2_pars_fragment:Gu,uv2_pars_vertex:Wu,uv2_vertex:Hu,worldpos_vertex:qu,background_vert:Xu,background_frag:ju,backgroundCube_vert:$u,backgroundCube_frag:Yu,cube_vert:Zu,cube_frag:Ku,depth_vert:Ju,depth_frag:Qu,distanceRGBA_vert:td,distanceRGBA_frag:ed,equirect_vert:nd,equirect_frag:id,linedashed_vert:sd,linedashed_frag:rd,meshbasic_vert:od,meshbasic_frag:ad,meshlambert_vert:ld,meshlambert_frag:cd,meshmatcap_vert:hd,meshmatcap_frag:ud,meshnormal_vert:dd,meshnormal_frag:fd,meshphong_vert:pd,meshphong_frag:md,meshphysical_vert:gd,meshphysical_frag:_d,meshtoon_vert:vd,meshtoon_frag:xd,points_vert:yd,points_frag:bd,shadow_vert:Md,shadow_frag:wd,sprite_vert:Sd,sprite_frag:Ed},rt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ee},uv2Transform:{value:new Ee},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}}},je={basic:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:me([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:me([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:me([rt.points,rt.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:me([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:me([rt.common,rt.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:me([rt.sprite,rt.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:me([rt.common,rt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:me([rt.lights,rt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};je.physical={uniforms:me([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new At(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const ds={r:0,b:0,g:0};function Ad(a,t,e,n,i,s,r){const o=new Vt(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(f,_){let v=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const w=a.xr,x=w.getSession&&w.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Cs)?(h===void 0&&(h=new Ve(new _i(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:pi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==Wt,(d!==y||u!==y.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ve(new Ps(2,2),new Vn({name:"BackgroundMaterial",uniforms:pi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==Wt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,m=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,_){f.getRGB(ds,el(a)),n.buffers.color.setClear(ds.r,ds.g,ds.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(o,l)},render:g}}function Td(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=f(null);let c=l,h=!1;function d(R,F,N,J,k){let Y=!1;if(r){const Q=p(J,N,F);c!==Q&&(c=Q,m(c.object)),Y=_(R,J,N,k),Y&&v(R,J,N,k)}else{const Q=F.wireframe===!0;(c.geometry!==J.id||c.program!==N.id||c.wireframe!==Q)&&(c.geometry=J.id,c.program=N.id,c.wireframe=Q,Y=!0)}k!==null&&e.update(k,34963),(Y||h)&&(h=!1,M(R,F,N,J),k!==null&&a.bindBuffer(34963,e.get(k).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,F,N){const J=N.wireframe===!0;let k=o[R.id];k===void 0&&(k={},o[R.id]=k);let Y=k[F.id];Y===void 0&&(Y={},k[F.id]=Y);let Q=Y[J];return Q===void 0&&(Q=f(u()),Y[J]=Q),Q}function f(R){const F=[],N=[],J=[];for(let k=0;k<i;k++)F[k]=0,N[k]=0,J[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:J,object:R,attributes:{},index:null}}function _(R,F,N,J){const k=c.attributes,Y=F.attributes;let Q=0;const H=N.getAttributes();for(const O in H)if(H[O].location>=0){const nt=k[O];let ot=Y[O];if(ot===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;Q++}return c.attributesNum!==Q||c.index!==J}function v(R,F,N,J){const k={},Y=F.attributes;let Q=0;const H=N.getAttributes();for(const O in H)if(H[O].location>=0){let nt=Y[O];nt===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),k[O]=ot,Q++}c.attributes=k,c.attributesNum=Q,c.index=J}function y(){const R=c.newAttributes;for(let F=0,N=R.length;F<N;F++)R[F]=0}function w(R){x(R,0)}function x(R,F){const N=c.newAttributes,J=c.enabledAttributes,k=c.attributeDivisors;N[R]=1,J[R]===0&&(a.enableVertexAttribArray(R),J[R]=1),k[R]!==F&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,F),k[R]=F)}function A(){const R=c.newAttributes,F=c.enabledAttributes;for(let N=0,J=F.length;N<J;N++)F[N]!==R[N]&&(a.disableVertexAttribArray(N),F[N]=0)}function D(R,F,N,J,k,Y){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(R,F,N,k,Y):a.vertexAttribPointer(R,F,N,J,k,Y)}function M(R,F,N,J){if(n.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=J.attributes,Y=N.getAttributes(),Q=F.defaultAttributeValues;for(const H in Y){const O=Y[H];if(O.location>=0){let tt=k[H];if(tt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),tt!==void 0){const nt=tt.normalized,ot=tt.itemSize,j=e.get(tt);if(j===void 0)continue;const Tt=j.buffer,mt=j.type,yt=j.bytesPerElement;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Nt=pt.stride,St=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let bt=0;bt<O.locationSize;bt++)x(O.location+bt,pt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let bt=0;bt<O.locationSize;bt++)w(O.location+bt);a.bindBuffer(34962,Tt);for(let bt=0;bt<O.locationSize;bt++)D(O.location+bt,ot/O.locationSize,mt,nt,Nt*yt,(St+ot/O.locationSize*bt)*yt)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<O.locationSize;pt++)x(O.location+pt,tt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<O.locationSize;pt++)w(O.location+pt);a.bindBuffer(34962,Tt);for(let pt=0;pt<O.locationSize;pt++)D(O.location+pt,ot/O.locationSize,mt,nt,ot*yt,ot/O.locationSize*pt*yt)}}else if(Q!==void 0){const nt=Q[H];if(nt!==void 0)switch(nt.length){case 2:a.vertexAttrib2fv(O.location,nt);break;case 3:a.vertexAttrib3fv(O.location,nt);break;case 4:a.vertexAttrib4fv(O.location,nt);break;default:a.vertexAttrib1fv(O.location,nt)}}}}A()}function L(){K();for(const R in o){const F=o[R];for(const N in F){const J=F[N];for(const k in J)g(J[k].object),delete J[k];delete F[N]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const F=o[R.id];for(const N in F){const J=F[N];for(const k in J)g(J[k].object),delete J[k];delete F[N]}delete o[R.id]}function V(R){for(const F in o){const N=o[F];if(N[R.id]===void 0)continue;const J=N[R.id];for(const k in J)g(J[k].object),delete J[k];delete N[R.id]}}function K(){C(),h=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:w,disableUnusedAttributes:A}}function Cd(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),e.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function Ld(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),y=u>0,w=r||t.has("OES_texture_float"),x=y&&w,A=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:x,maxSamples:A}}function Pd(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Cn,o=new Ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const g=d.length!==0||u||n!==0||i;return i=u,e=h(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):c();else{const v=s?0:n,y=v*4;let w=_.clippingState||null;l.value=w,w=h(g,u,y,m);for(let x=0;x!==y;++x)w[x]=e[x];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const _=m+p*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<_)&&(f=new Float32Array(_));for(let y=0,w=m;y!==p;++y,w+=4)r.copy(d[y]).applyMatrix4(v,o),r.normal.toArray(f,w),f[w+3]=r.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Rd(a){let t=new WeakMap;function e(r,o){return o===Cr?r.mapping=ui:o===Lr&&(r.mapping=di),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Cr||o===Lr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Hc(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rl extends nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,Go=[.125,.215,.35,.446,.526,.582],Pn=20,pr=new rl,Wo=new Vt;let mr=null;const Ln=(1+Math.sqrt(5))/2,si=1/Ln,Ho=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ln,si),new W(0,Ln,-si),new W(si,0,Ln),new W(-si,0,Ln),new W(Ln,si,0),new W(-Ln,si,0)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){mr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mr),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:Oi,format:ke,encoding:Bn,depthBuffer:!1},i=Xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(s)),this._blurMaterial=Id(s,t,e)}return i}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,i){const o=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wo),h.toneMapping=dn,h.autoClear=!1;const m=new Ja({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Ve(new _i,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Wo),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const y=this._cubeSize;fs(i,v*y,_>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ui||t.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Ho[(i-1)%Ho.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ve(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Pn;f>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Pn}`);const _=[];let v=0;for(let D=0;D<Pn;++D){const M=D/p,L=Math.exp(-M*M/2);_.push(L),D===0?v+=L:D<f&&(v+=2*L)}for(let D=0;D<_.length;D++)_[D]=_[D]/v;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const w=this._sizeLods[i],x=3*w*(i>y-li?i-y+li:0),A=4*(this._cubeSize-w);fs(e,x,A,3*w,2*w),l.setRenderTarget(e),l.render(d,pr)}}function Dd(a){const t=[],e=[],n=[];let i=a;const s=a-li+1+Go.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-li?l=Go[r-a+li-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,_=1,v=new Float32Array(p*g*m),y=new Float32Array(f*g*m),w=new Float32Array(_*g*m);for(let A=0;A<m;A++){const D=A%3*2/3-1,M=A>2?0:-1,L=[D,M,0,D+2/3,M,0,D+2/3,M+1,0,D,M,0,D+2/3,M+1,0,D,M+1,0];v.set(L,p*g*A),y.set(u,f*g*A);const I=[A,A,A,A,A,A];w.set(I,_*g*A)}const x=new Ke;x.setAttribute("position",new Fe(v,p)),x.setAttribute("uv",new Fe(y,f)),x.setAttribute("faceIndex",new Fe(w,_)),t.push(x),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xo(a,t,e){const n=new Un(a,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function Id(a,t,e){const n=new Float32Array(Pn),i=new W(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kr(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function jo(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function $o(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function Fd(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cr||l===Lr,h=l===ui||l===di;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new qo(a)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new qo(a));const u=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function zd(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nd(a,t,e,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let y=0,w=v.length;y<w;y+=3){const x=v[y+0],A=v[y+1],D=v[y+2];u.push(x,A,A,D,D,x)}}else{const v=g.array;p=g.version;for(let y=0,w=v.length/3-1;y<w;y+=3){const x=y+0,A=y+1,D=y+2;u.push(x,A,A,D,D,x)}}const f=new(qa(u)?tl:Qa)(u,1);f.version=p;const _=s.get(d);_&&t.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Od(a,t,e,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,m){a.drawElements(s,m,o,u*l),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,u*l,g),e.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function Bd(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ud(a,t){return a[0]-t[0]}function kd(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Vd(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new le,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let N=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var g=N;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let I=0;w===!0&&(I=1),x===!0&&(I=2),A===!0&&(I=3);let V=h.attributes.position.count*I,K=1;V>t.maxTextureSize&&(K=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const C=new Float32Array(V*K*4*f),R=new Ya(C,V,K,f);R.type=In,R.needsUpdate=!0;const F=I*4;for(let J=0;J<f;J++){const k=D[J],Y=M[J],Q=L[J],H=V*K*4*J;for(let O=0;O<k.count;O++){const tt=O*F;w===!0&&(r.fromBufferAttribute(k,O),C[H+tt+0]=r.x,C[H+tt+1]=r.y,C[H+tt+2]=r.z,C[H+tt+3]=0),x===!0&&(r.fromBufferAttribute(Y,O),C[H+tt+4]=r.x,C[H+tt+5]=r.y,C[H+tt+6]=r.z,C[H+tt+7]=0),A===!0&&(r.fromBufferAttribute(Q,O),C[H+tt+8]=r.x,C[H+tt+9]=r.y,C[H+tt+10]=r.z,C[H+tt+11]=Q.itemSize===4?r.w:1)}}_={count:f,texture:R,size:new At(V,K)},s.set(h,_),h.addEventListener("dispose",N)}let v=0;for(let w=0;w<m.length;w++)v+=m[w];const y=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",m),u.getUniforms().setValue(a,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let x=0;x<p;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<p;x++){const A=f[x];A[0]=x,A[1]=m[x]}f.sort(kd);for(let x=0;x<8;x++)x<p&&f[x][1]?(o[x][0]=f[x][0],o[x][1]=f[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ud);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const A=o[x],D=A[0],M=A[1];D!==Number.MAX_SAFE_INTEGER&&M?(_&&h.getAttribute("morphTarget"+x)!==_[D]&&h.setAttribute("morphTarget"+x,_[D]),v&&h.getAttribute("morphNormal"+x)!==v[D]&&h.setAttribute("morphNormal"+x,v[D]),i[x]=M,y+=M):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const w=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",w),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Gd(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const ol=new Ae,al=new Ya,ll=new Cc,cl=new il,Yo=[],Zo=[],Ko=new Float32Array(16),Jo=new Float32Array(9),Qo=new Float32Array(4);function vi(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Yo[i];if(s===void 0&&(s=new Float32Array(i),Yo[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function ne(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function ie(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Rs(a,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Wd(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function Hd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;a.uniform2fv(this.addr,t),ie(e,t)}}function qd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;a.uniform3fv(this.addr,t),ie(e,t)}}function Xd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;a.uniform4fv(this.addr,t),ie(e,t)}}function jd(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Qo.set(n),a.uniformMatrix2fv(this.addr,!1,Qo),ie(e,n)}}function $d(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Jo.set(n),a.uniformMatrix3fv(this.addr,!1,Jo),ie(e,n)}}function Yd(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Ko.set(n),a.uniformMatrix4fv(this.addr,!1,Ko),ie(e,n)}}function Zd(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Kd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;a.uniform2iv(this.addr,t),ie(e,t)}}function Jd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;a.uniform3iv(this.addr,t),ie(e,t)}}function Qd(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;a.uniform4iv(this.addr,t),ie(e,t)}}function tf(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function ef(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;a.uniform2uiv(this.addr,t),ie(e,t)}}function nf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;a.uniform3uiv(this.addr,t),ie(e,t)}}function sf(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;a.uniform4uiv(this.addr,t),ie(e,t)}}function rf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||ol,i)}function of(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ll,i)}function af(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||cl,i)}function lf(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||al,i)}function cf(a){switch(a){case 5126:return Wd;case 35664:return Hd;case 35665:return qd;case 35666:return Xd;case 35674:return jd;case 35675:return $d;case 35676:return Yd;case 5124:case 35670:return Zd;case 35667:case 35671:return Kd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return lf}}function hf(a,t){a.uniform1fv(this.addr,t)}function uf(a,t){const e=vi(t,this.size,2);a.uniform2fv(this.addr,e)}function df(a,t){const e=vi(t,this.size,3);a.uniform3fv(this.addr,e)}function ff(a,t){const e=vi(t,this.size,4);a.uniform4fv(this.addr,e)}function pf(a,t){const e=vi(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function mf(a,t){const e=vi(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function gf(a,t){const e=vi(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function _f(a,t){a.uniform1iv(this.addr,t)}function vf(a,t){a.uniform2iv(this.addr,t)}function xf(a,t){a.uniform3iv(this.addr,t)}function yf(a,t){a.uniform4iv(this.addr,t)}function bf(a,t){a.uniform1uiv(this.addr,t)}function Mf(a,t){a.uniform2uiv(this.addr,t)}function wf(a,t){a.uniform3uiv(this.addr,t)}function Sf(a,t){a.uniform4uiv(this.addr,t)}function Ef(a,t,e){const n=this.cache,i=t.length,s=Rs(e,i);ne(n,s)||(a.uniform1iv(this.addr,s),ie(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||ol,s[r])}function Af(a,t,e){const n=this.cache,i=t.length,s=Rs(e,i);ne(n,s)||(a.uniform1iv(this.addr,s),ie(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||ll,s[r])}function Tf(a,t,e){const n=this.cache,i=t.length,s=Rs(e,i);ne(n,s)||(a.uniform1iv(this.addr,s),ie(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||cl,s[r])}function Cf(a,t,e){const n=this.cache,i=t.length,s=Rs(e,i);ne(n,s)||(a.uniform1iv(this.addr,s),ie(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||al,s[r])}function Lf(a){switch(a){case 5126:return hf;case 35664:return uf;case 35665:return df;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return yf;case 5125:return bf;case 36294:return Mf;case 36295:return wf;case 36296:return Sf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return Tf;case 36289:case 36303:case 36311:case 36292:return Cf}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=cf(e.type)}}class Rf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Lf(e.type)}}class Df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function ta(a,t){a.seq.push(t),a.map[t.id]=t}function If(a,t,e){const n=a.name,i=n.length;for(gr.lastIndex=0;;){const s=gr.exec(n),r=gr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){ta(e,c===void 0?new Pf(o,a,t):new Rf(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new Df(o),ta(e,d)),e=d}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);If(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function ea(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let Ff=0;function zf(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Nf(a){switch(a){case Bn:return["Linear","( value )"];case Wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function na(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+zf(a.getShaderSource(t),r)}else return i}function Of(a,t){const e=Nf(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Bf(a,t){let e;switch(t){case ec:e="Linear";break;case nc:e="Reinhard";break;case ic:e="OptimizedCineon";break;case sc:e="ACESFilmic";break;case rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Uf(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function kf(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vf(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Ii(a){return a!==""}function ia(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sa(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fr(a){return a.replace(Gf,Wf)}function Wf(a,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Fr(e)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ra(a){return a.replace(Hf,qf)}function qf(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function oa(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xf(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ba?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function jf(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $f(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function Yf(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Va:t="ENVMAP_BLENDING_MULTIPLY";break;case Ql:t="ENVMAP_BLENDING_MIX";break;case tc:t="ENVMAP_BLENDING_ADD";break}return t}function Zf(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Kf(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Xf(e),c=jf(e),h=$f(e),d=Yf(e),u=Zf(e),m=e.isWebGL2?"":Uf(e),g=kf(s),p=i.createProgram();let f,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Ii).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Ii).join(`
`),_.length>0&&(_+=`
`)):(f=[oa(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),_=[m,oa(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Et.tonemapping_pars_fragment:"",e.toneMapping!==dn?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,Of("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),r=Fr(r),r=ia(r,e),r=sa(r,e),o=Fr(o),o=ia(o,e),o=sa(o,e),r=ra(r),o=ra(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+f+r,w=v+_+o,x=ea(i,35633,y),A=ea(i,35632,w);if(i.attachShader(p,x),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){const L=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(x).trim(),V=i.getShaderInfoLog(A).trim();let K=!0,C=!0;if(i.getProgramParameter(p,35714)===!1){K=!1;const R=na(i,x,"vertex"),F=na(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+L+`
`+R+`
`+F)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||V==="")&&(C=!1);C&&(this.diagnostics={runnable:K,programLog:L,vertexShader:{log:I,prefix:f},fragmentShader:{log:V,prefix:_}})}i.deleteShader(x),i.deleteShader(A);let D;this.getUniforms=function(){return D===void 0&&(D=new ws(i,p)),D};let M;return this.getAttributes=function(){return M===void 0&&(M=Vf(i,p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=A,this}let Jf=0;class Qf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tp(t),e.set(t,n)),n}}class tp{constructor(t){this.id=Jf++,this.code=t,this.usedTimes=0}}function ep(a,t,e,n,i,s,r){const o=new Ka,l=new Qf,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,L,I,V,K){const C=V.fog,R=K.geometry,F=M.isMeshStandardMaterial?V.environment:null,N=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),J=N&&N.mapping===Cs?N.image.height:null,k=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Y=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Q=Y!==void 0?Y.length:0;let H=0;R.morphAttributes.position!==void 0&&(H=1),R.morphAttributes.normal!==void 0&&(H=2),R.morphAttributes.color!==void 0&&(H=3);let O,tt,nt,ot;if(k){const Nt=je[k];O=Nt.vertexShader,tt=Nt.fragmentShader}else O=M.vertexShader,tt=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),ot=l.getFragmentShaderID(M);const j=a.getRenderTarget(),Tt=M.alphaTest>0,mt=M.clearcoat>0,yt=M.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:M.type,vertexShader:O,fragmentShader:tt,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:ot,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:u,outputEncoding:j===null?a.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Bn,map:!!M.map,matcap:!!M.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:J,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Sc,tangentSpaceNormalMap:M.normalMapType===Ha,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===Wt,clearcoat:mt,clearcoatMap:mt&&!!M.clearcoatMap,clearcoatRoughnessMap:mt&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!M.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!M.iridescenceMap,iridescenceThicknessMap:yt&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===ci,alphaMap:!!M.alphaMap,alphaTest:Tt,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!R.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:H,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:dn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Br,flipSided:M.side===Ie,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)L.push(I),L.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(L,M),v(L,M),L.push(a.outputEncoding)),L.push(M.customProgramCacheKey),L.join()}function _(M,L){M.push(L.precision),M.push(L.outputEncoding),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.combine),M.push(L.vertexUvs),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function v(M,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.iridescence&&o.enable(18),L.iridescenceMap&&o.enable(19),L.iridescenceThicknessMap&&o.enable(20),L.displacementMap&&o.enable(21),L.specularMap&&o.enable(22),L.roughnessMap&&o.enable(23),L.metalnessMap&&o.enable(24),L.gradientMap&&o.enable(25),L.alphaMap&&o.enable(26),L.alphaTest&&o.enable(27),L.vertexColors&&o.enable(28),L.vertexAlphas&&o.enable(29),L.vertexUvs&&o.enable(30),L.vertexTangents&&o.enable(31),L.uvsVertexOnly&&o.enable(32),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.skinning&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),M.push(o.mask)}function y(M){const L=g[M.type];let I;if(L){const V=je[L];I=kc.clone(V.uniforms)}else I=M.uniforms;return I}function w(M,L){let I;for(let V=0,K=c.length;V<K;V++){const C=c[V];if(C.cacheKey===L){I=C,++I.usedTimes;break}}return I===void 0&&(I=new Kf(a,L,M,s),c.push(I)),I}function x(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:D}}function np(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ip(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function aa(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function la(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,m,g,p,f){let _=a[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},a[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),t++,_}function o(d,u,m,g,p,f){const _=r(d,u,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,u,m,g,p,f){const _=r(d,u,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,u){e.length>1&&e.sort(d||ip),n.length>1&&n.sort(u||aa),i.length>1&&i.sort(u||aa)}function h(){for(let d=t,u=a.length;d<u;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function sp(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new la,a.set(n,[r])):i>=s.length?(r=new la,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function rp(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Vt};break;case"SpotLight":e={position:new W,direction:new W,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new W,halfWidth:new W,halfHeight:new W};break}return a[t.id]=e,e}}}function op(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let ap=0;function lp(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function cp(a,t){const e=new rp,n=op(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new W);const s=new W,r=new Kt,o=new Kt;function l(h,d){let u=0,m=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,f=0,_=0,v=0,y=0,w=0,x=0,A=0,D=0,M=0;h.sort(lp);const L=d!==!0?Math.PI:1;for(let V=0,K=h.length;V<K;V++){const C=h[V],R=C.color,F=C.intensity,N=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=R.r*F*L,m+=R.g*F*L,g+=R.b*F*L;else if(C.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(C.sh.coefficients[k],F);else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*L),C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(R).multiplyScalar(F*L),k.distance=N,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,i.spot[_]=k;const Y=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,Y.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[_]=Y.matrix,C.castShadow){const Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=J,A++}_++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(R).multiplyScalar(F),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=k,v++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*L),k.distance=C.distance,k.decay=C.decay,C.castShadow){const Y=C.shadow,Q=n.get(C);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=J,i.pointShadowMatrix[f]=C.shadow.matrix,x++}i.point[f]=k,f++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(F*L),k.groundColor.copy(C.groundColor).multiplyScalar(F*L),i.hemi[y]=k,y++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==v||I.hemiLength!==y||I.numDirectionalShadows!==w||I.numPointShadows!==x||I.numSpotShadows!==A||I.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+D-M,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=M,I.directionalLength=p,I.pointLength=f,I.spotLength=_,I.rectAreaLength=v,I.hemiLength=y,I.numDirectionalShadows=w,I.numPointShadows=x,I.numSpotShadows=A,I.numSpotMaps=D,i.version=ap++)}function c(h,d){let u=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){const w=h[v];if(w.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(w.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(w.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(w.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const x=i.hemi[f];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:i}}function ca(a,t){const e=new cp(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function hp(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new ca(a,t),e.set(s,[l])):r>=o.length?(l=new ca(a,t),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class up extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dp extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pp=`uniform sampler2D shadow_pass;
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
}`;function mp(a,t,e){let n=new Ur;const i=new At,s=new At,r=new le,o=new up({depthPacking:wc}),l=new dp,c={},h=e.maxTextureSize,d={0:Ie,1:Nn,2:Br},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:fp,fragmentShader:pp}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ve(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba,this.render=function(w,x,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=a.getRenderTarget(),M=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),I=a.state;I.setBlending(vn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let V=0,K=w.length;V<K;V++){const C=w[V],R=C.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const F=R.getFrameExtents();if(i.multiply(F),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/F.x),i.x=s.x*F.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/F.y),i.y=s.y*F.y,R.mapSize.y=s.y)),R.map===null){const J=this.type!==Di?{minFilter:ge,magFilter:ge}:{};R.map=new Un(i.x,i.y,J),R.map.texture.name=C.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const N=R.getViewportCount();for(let J=0;J<N;J++){const k=R.getViewport(J);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(r),R.updateMatrices(C,J),n=R.getFrustum(),y(x,A,R.camera,C,this.type)}R.isPointLightShadow!==!0&&this.type===Di&&_(R,A),R.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(D,M,L)};function _(w,x){const A=t.update(p);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Un(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(x,null,A,u,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(x,null,A,m,p,null)}function v(w,x,A,D,M,L){let I=null;const V=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(V!==void 0)I=V;else if(I=A.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const K=I.uuid,C=x.uuid;let R=c[K];R===void 0&&(R={},c[K]=R);let F=R[C];F===void 0&&(F=I.clone(),R[C]=F),I=F}return I.visible=x.visible,I.wireframe=x.wireframe,L===Di?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=D,I.farDistance=M),I}function y(w,x,A,D,M){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Di)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const V=t.update(w),K=w.material;if(Array.isArray(K)){const C=V.groups;for(let R=0,F=C.length;R<F;R++){const N=C[R],J=K[N.materialIndex];if(J&&J.visible){const k=v(w,J,D,A.near,A.far,M);a.renderBufferDirect(A,null,V,k,w,N)}}}else if(K.visible){const C=v(w,K,D,A.near,A.far,M);a.renderBufferDirect(A,null,V,C,w,null)}}const I=w.children;for(let V=0,K=I.length;V<K;V++)y(I[V],x,A,D,M)}}function gp(a,t,e){const n=e.isWebGL2;function i(){let z=!1;const X=new le;let et=null;const ht=new le(0,0,0,0);return{setMask:function(vt){et!==vt&&!z&&(a.colorMask(vt,vt,vt,vt),et=vt)},setLocked:function(vt){z=vt},setClear:function(vt,Bt,re,he,yn){yn===!0&&(vt*=he,Bt*=he,re*=he),X.set(vt,Bt,re,he),ht.equals(X)===!1&&(a.clearColor(vt,Bt,re,he),ht.copy(X))},reset:function(){z=!1,et=null,ht.set(-1,0,0,0)}}}function s(){let z=!1,X=null,et=null,ht=null;return{setTest:function(vt){vt?Tt(2929):mt(2929)},setMask:function(vt){X!==vt&&!z&&(a.depthMask(vt),X=vt)},setFunc:function(vt){if(et!==vt){switch(vt){case Xl:a.depthFunc(512);break;case jl:a.depthFunc(519);break;case $l:a.depthFunc(513);break;case Tr:a.depthFunc(515);break;case Yl:a.depthFunc(514);break;case Zl:a.depthFunc(518);break;case Kl:a.depthFunc(516);break;case Jl:a.depthFunc(517);break;default:a.depthFunc(515)}et=vt}},setLocked:function(vt){z=vt},setClear:function(vt){ht!==vt&&(a.clearDepth(vt),ht=vt)},reset:function(){z=!1,X=null,et=null,ht=null}}}function r(){let z=!1,X=null,et=null,ht=null,vt=null,Bt=null,re=null,he=null,yn=null;return{setTest:function(Ht){z||(Ht?Tt(2960):mt(2960))},setMask:function(Ht){X!==Ht&&!z&&(a.stencilMask(Ht),X=Ht)},setFunc:function(Ht,Je,Le){(et!==Ht||ht!==Je||vt!==Le)&&(a.stencilFunc(Ht,Je,Le),et=Ht,ht=Je,vt=Le)},setOp:function(Ht,Je,Le){(Bt!==Ht||re!==Je||he!==Le)&&(a.stencilOp(Ht,Je,Le),Bt=Ht,re=Je,he=Le)},setLocked:function(Ht){z=Ht},setClear:function(Ht){yn!==Ht&&(a.clearStencil(Ht),yn=Ht)},reset:function(){z=!1,X=null,et=null,ht=null,vt=null,Bt=null,re=null,he=null,yn=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,y=null,w=null,x=null,A=null,D=null,M=null,L=!1,I=null,V=null,K=null,C=null,R=null;const F=a.getParameter(35661);let N=!1,J=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=J>=2);let Y=null,Q={};const H=a.getParameter(3088),O=a.getParameter(2978),tt=new le().fromArray(H),nt=new le().fromArray(O);function ot(z,X,et){const ht=new Uint8Array(4),vt=a.createTexture();a.bindTexture(z,vt),a.texParameteri(z,10241,9728),a.texParameteri(z,10240,9728);for(let Bt=0;Bt<et;Bt++)a.texImage2D(X+Bt,0,6408,1,1,0,6408,5121,ht);return vt}const j={};j[3553]=ot(3553,3553,1),j[34067]=ot(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Tt(2929),l.setFunc(Tr),Qt(!1),de(Qr),Tt(2884),se(vn);function Tt(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function mt(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function yt(z,X){return m[z]!==X?(a.bindFramebuffer(z,X),m[z]=X,n&&(z===36009&&(m[36160]=X),z===36160&&(m[36009]=X)),!0):!1}function pt(z,X){let et=p,ht=!1;if(z)if(et=g.get(X),et===void 0&&(et=[],g.set(X,et)),z.isWebGLMultipleRenderTargets){const vt=z.texture;if(et.length!==vt.length||et[0]!==36064){for(let Bt=0,re=vt.length;Bt<re;Bt++)et[Bt]=36064+Bt;et.length=vt.length,ht=!0}}else et[0]!==36064&&(et[0]=36064,ht=!0);else et[0]!==1029&&(et[0]=1029,ht=!0);ht&&(e.isWebGL2?a.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Nt(z){return f!==z?(a.useProgram(z),f=z,!0):!1}const St={[ai]:32774,[zl]:32778,[Nl]:32779};if(n)St[io]=32775,St[so]=32776;else{const z=t.get("EXT_blend_minmax");z!==null&&(St[io]=z.MIN_EXT,St[so]=z.MAX_EXT)}const bt={[Ol]:0,[Bl]:1,[Ul]:768,[Ua]:770,[ql]:776,[Wl]:774,[Vl]:772,[kl]:769,[ka]:771,[Hl]:775,[Gl]:773};function se(z,X,et,ht,vt,Bt,re,he){if(z===vn){_===!0&&(mt(3042),_=!1);return}if(_===!1&&(Tt(3042),_=!0),z!==Fl){if(z!==v||he!==L){if((y!==ai||A!==ai)&&(a.blendEquation(32774),y=ai,A=ai),he)switch(z){case ci:a.blendFuncSeparate(1,771,1,771);break;case to:a.blendFunc(1,1);break;case eo:a.blendFuncSeparate(0,769,0,1);break;case no:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ci:a.blendFuncSeparate(770,771,1,771);break;case to:a.blendFunc(770,1);break;case eo:a.blendFuncSeparate(0,769,0,1);break;case no:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,x=null,D=null,M=null,v=z,L=he}return}vt=vt||X,Bt=Bt||et,re=re||ht,(X!==y||vt!==A)&&(a.blendEquationSeparate(St[X],St[vt]),y=X,A=vt),(et!==w||ht!==x||Bt!==D||re!==M)&&(a.blendFuncSeparate(bt[et],bt[ht],bt[Bt],bt[re]),w=et,x=ht,D=Bt,M=re),v=z,L=!1}function Jt(z,X){z.side===Br?mt(2884):Tt(2884);let et=z.side===Ie;X&&(et=!et),Qt(et),z.blending===ci&&z.transparent===!1?se(vn):se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);const ht=z.stencilWrite;c.setTest(ht),ht&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Tt(32926):mt(32926)}function Qt(z){I!==z&&(z?a.frontFace(2304):a.frontFace(2305),I=z)}function de(z){z!==Rl?(Tt(2884),z!==V&&(z===Qr?a.cullFace(1029):z===Dl?a.cullFace(1028):a.cullFace(1032))):mt(2884),V=z}function qt(z){z!==K&&(N&&a.lineWidth(z),K=z)}function Ut(z,X,et){z?(Tt(32823),(C!==X||R!==et)&&(a.polygonOffset(X,et),C=X,R=et)):mt(32823)}function Ce(z){z?Tt(3089):mt(3089)}function _e(z){z===void 0&&(z=33984+F-1),Y!==z&&(a.activeTexture(z),Y=z)}function T(z,X,et){et===void 0&&(Y===null?et=33984+F-1:et=Y);let ht=Q[et];ht===void 0&&(ht={type:void 0,texture:void 0},Q[et]=ht),(ht.type!==z||ht.texture!==X)&&(Y!==et&&(a.activeTexture(et),Y=et),a.bindTexture(z,X||j[z]),ht.type=z,ht.texture=X)}function S(){const z=Q[Y];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{a.compressedTexImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{a.texSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{a.texSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function P(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{a.texStorage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{a.texStorage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{a.texImage2D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{a.texImage3D.apply(a,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(z){tt.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function gt(z){nt.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function Pt(z,X){let et=d.get(X);et===void 0&&(et=new WeakMap,d.set(X,et));let ht=et.get(z);ht===void 0&&(ht=a.getUniformBlockIndex(X,z.name),et.set(z,ht))}function Rt(z,X){const ht=d.get(X).get(z);h.get(X)!==ht&&(a.uniformBlockBinding(X,ht,z.__bindingPointIndex),h.set(X,ht))}function kt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},Y=null,Q={},m={},g=new WeakMap,p=[],f=null,_=!1,v=null,y=null,w=null,x=null,A=null,D=null,M=null,L=!1,I=null,V=null,K=null,C=null,R=null,tt.set(0,0,a.canvas.width,a.canvas.height),nt.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Tt,disable:mt,bindFramebuffer:yt,drawBuffers:pt,useProgram:Nt,setBlending:se,setMaterial:Jt,setFlipSided:Qt,setCullFace:de,setLineWidth:qt,setPolygonOffset:Ut,setScissorTest:Ce,activeTexture:_e,bindTexture:T,unbindTexture:S,compressedTexImage2D:q,compressedTexImage3D:it,texImage2D:ft,texImage3D:lt,updateUBOMapping:Pt,uniformBlockBinding:Rt,texStorage2D:B,texStorage3D:ct,texSubImage2D:st,texSubImage3D:at,compressedTexSubImage2D:Mt,compressedTexSubImage3D:P,scissor:_t,viewport:gt,reset:kt}}function _p(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return _?new OffscreenCanvas(T,S):As("canvas")}function y(T,S,q,it){let st=1;if((T.width>it||T.height>it)&&(st=it/Math.max(T.width,T.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const at=S?Ir:Math.floor,Mt=at(st*T.width),P=at(st*T.height);p===void 0&&(p=v(Mt,P));const B=q?v(Mt,P):p;return B.width=Mt,B.height=P,B.getContext("2d").drawImage(T,0,0,Mt,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Mt+"x"+P+")."),B}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function w(T){return Ro(T.width)&&Ro(T.height)}function x(T){return o?!1:T.wrapS!==Ue||T.wrapT!==Ue||T.minFilter!==ge&&T.minFilter!==Re}function A(T,S){return T.generateMipmaps&&S&&T.minFilter!==ge&&T.minFilter!==Re}function D(T){a.generateMipmap(T)}function M(T,S,q,it,st=!1){if(o===!1)return S;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at=S;return S===6403&&(q===5126&&(at=33326),q===5131&&(at=33325),q===5121&&(at=33321)),S===33319&&(q===5126&&(at=33328),q===5131&&(at=33327),q===5121&&(at=33323)),S===6408&&(q===5126&&(at=34836),q===5131&&(at=34842),q===5121&&(at=it===Wt&&st===!1?35907:32856),q===32819&&(at=32854),q===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function L(T,S,q){return A(T,q)===!0||T.isFramebufferTexture&&T.minFilter!==ge&&T.minFilter!==Re?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){return T===ge||T===ro||T===ks?9728:9729}function V(T){const S=T.target;S.removeEventListener("dispose",V),C(S),S.isVideoTexture&&g.delete(S)}function K(T){const S=T.target;S.removeEventListener("dispose",K),F(S)}function C(T){const S=n.get(T);if(S.__webglInit===void 0)return;const q=T.source,it=f.get(q);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(T),Object.keys(it).length===0&&f.delete(q)}n.remove(T)}function R(T){const S=n.get(T);a.deleteTexture(S.__webglTexture);const q=T.source,it=f.get(q);delete it[S.__cacheKey],r.memory.textures--}function F(T){const S=T.texture,q=n.get(T),it=n.get(S);if(it.__webglTexture!==void 0&&(a.deleteTexture(it.__webglTexture),r.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)a.deleteFramebuffer(q.__webglFramebuffer[st]),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer[st]);else{if(a.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&a.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&a.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let st=0;st<q.__webglColorRenderbuffer.length;st++)q.__webglColorRenderbuffer[st]&&a.deleteRenderbuffer(q.__webglColorRenderbuffer[st]);q.__webglDepthRenderbuffer&&a.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let st=0,at=S.length;st<at;st++){const Mt=n.get(S[st]);Mt.__webglTexture&&(a.deleteTexture(Mt.__webglTexture),r.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(T)}let N=0;function J(){N=0}function k(){const T=N;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),N+=1,T}function Y(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function Q(T,S){const q=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){const it=T.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,T,S);return}}e.bindTexture(3553,q.__webglTexture,33984+S)}function H(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){mt(q,T,S);return}e.bindTexture(35866,q.__webglTexture,33984+S)}function O(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){mt(q,T,S);return}e.bindTexture(32879,q.__webglTexture,33984+S)}function tt(T,S){const q=n.get(T);if(T.version>0&&q.__version!==T.version){yt(q,T,S);return}e.bindTexture(34067,q.__webglTexture,33984+S)}const nt={[Pr]:10497,[Ue]:33071,[Rr]:33648},ot={[ge]:9728,[ro]:9984,[ks]:9986,[Re]:9729,[oc]:9985,[Ni]:9987};function j(T,S,q){if(q?(a.texParameteri(T,10242,nt[S.wrapS]),a.texParameteri(T,10243,nt[S.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,nt[S.wrapR]),a.texParameteri(T,10240,ot[S.magFilter]),a.texParameteri(T,10241,ot[S.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(S.wrapS!==Ue||S.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,I(S.magFilter)),a.texParameteri(T,10241,I(S.minFilter)),S.minFilter!==ge&&S.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ge||S.minFilter!==ks&&S.minFilter!==Ni||S.type===In&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Oi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(a.texParameterf(T,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Tt(T,S){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",V));const it=S.source;let st=f.get(it);st===void 0&&(st={},f.set(it,st));const at=Y(S);if(at!==T.__cacheKey){st[at]===void 0&&(st[at]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,q=!0),st[at].usedTimes++;const Mt=st[T.__cacheKey];Mt!==void 0&&(st[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&R(S)),T.__cacheKey=at,T.__webglTexture=st[at].texture}return q}function mt(T,S,q){let it=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=35866),S.isData3DTexture&&(it=32879);const st=Tt(T,S),at=S.source;e.bindTexture(it,T.__webglTexture,33984+q);const Mt=n.get(at);if(at.version!==Mt.__version||st===!0){e.activeTexture(33984+q),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const P=x(S)&&w(S.image)===!1;let B=y(S.image,P,!1,h);B=_e(S,B);const ct=w(B)||o,ft=s.convert(S.format,S.encoding);let lt=s.convert(S.type),_t=M(S.internalFormat,ft,lt,S.encoding,S.isVideoTexture);j(it,S,ct);let gt;const Pt=S.mipmaps,Rt=o&&S.isVideoTexture!==!0,kt=Mt.__version===void 0||st===!0,z=L(S,B,ct);if(S.isDepthTexture)_t=6402,o?S.type===In?_t=36012:S.type===Dn?_t=33190:S.type===hi?_t=35056:_t=33189:S.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Fn&&_t===6402&&S.type!==Wa&&S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Dn,lt=s.convert(S.type)),S.format===fi&&_t===6402&&(_t=34041,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,lt=s.convert(S.type))),kt&&(Rt?e.texStorage2D(3553,1,_t,B.width,B.height):e.texImage2D(3553,0,_t,B.width,B.height,0,ft,lt,null));else if(S.isDataTexture)if(Pt.length>0&&ct){Rt&&kt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let X=0,et=Pt.length;X<et;X++)gt=Pt[X],Rt?e.texSubImage2D(3553,X,0,0,gt.width,gt.height,ft,lt,gt.data):e.texImage2D(3553,X,_t,gt.width,gt.height,0,ft,lt,gt.data);S.generateMipmaps=!1}else Rt?(kt&&e.texStorage2D(3553,z,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,ft,lt,B.data)):e.texImage2D(3553,0,_t,B.width,B.height,0,ft,lt,B.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Rt&&kt&&e.texStorage3D(35866,z,_t,Pt[0].width,Pt[0].height,B.depth);for(let X=0,et=Pt.length;X<et;X++)gt=Pt[X],S.format!==ke?ft!==null?Rt?e.compressedTexSubImage3D(35866,X,0,0,0,gt.width,gt.height,B.depth,ft,gt.data,0,0):e.compressedTexImage3D(35866,X,_t,gt.width,gt.height,B.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage3D(35866,X,0,0,0,gt.width,gt.height,B.depth,ft,lt,gt.data):e.texImage3D(35866,X,_t,gt.width,gt.height,B.depth,0,ft,lt,gt.data)}else{Rt&&kt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let X=0,et=Pt.length;X<et;X++)gt=Pt[X],S.format!==ke?ft!==null?Rt?e.compressedTexSubImage2D(3553,X,0,0,gt.width,gt.height,ft,gt.data):e.compressedTexImage2D(3553,X,_t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage2D(3553,X,0,0,gt.width,gt.height,ft,lt,gt.data):e.texImage2D(3553,X,_t,gt.width,gt.height,0,ft,lt,gt.data)}else if(S.isDataArrayTexture)Rt?(kt&&e.texStorage3D(35866,z,_t,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,ft,lt,B.data)):e.texImage3D(35866,0,_t,B.width,B.height,B.depth,0,ft,lt,B.data);else if(S.isData3DTexture)Rt?(kt&&e.texStorage3D(32879,z,_t,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,ft,lt,B.data)):e.texImage3D(32879,0,_t,B.width,B.height,B.depth,0,ft,lt,B.data);else if(S.isFramebufferTexture){if(kt)if(Rt)e.texStorage2D(3553,z,_t,B.width,B.height);else{let X=B.width,et=B.height;for(let ht=0;ht<z;ht++)e.texImage2D(3553,ht,_t,X,et,0,ft,lt,null),X>>=1,et>>=1}}else if(Pt.length>0&&ct){Rt&&kt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let X=0,et=Pt.length;X<et;X++)gt=Pt[X],Rt?e.texSubImage2D(3553,X,0,0,ft,lt,gt):e.texImage2D(3553,X,_t,ft,lt,gt);S.generateMipmaps=!1}else Rt?(kt&&e.texStorage2D(3553,z,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,ft,lt,B)):e.texImage2D(3553,0,_t,ft,lt,B);A(S,ct)&&D(it),Mt.__version=at.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function yt(T,S,q){if(S.image.length!==6)return;const it=Tt(T,S),st=S.source;e.bindTexture(34067,T.__webglTexture,33984+q);const at=n.get(st);if(st.version!==at.__version||it===!0){e.activeTexture(33984+q),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const Mt=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,B=[];for(let X=0;X<6;X++)!Mt&&!P?B[X]=y(S.image[X],!1,!0,c):B[X]=P?S.image[X].image:S.image[X],B[X]=_e(S,B[X]);const ct=B[0],ft=w(ct)||o,lt=s.convert(S.format,S.encoding),_t=s.convert(S.type),gt=M(S.internalFormat,lt,_t,S.encoding),Pt=o&&S.isVideoTexture!==!0,Rt=at.__version===void 0||it===!0;let kt=L(S,ct,ft);j(34067,S,ft);let z;if(Mt){Pt&&Rt&&e.texStorage2D(34067,kt,gt,ct.width,ct.height);for(let X=0;X<6;X++){z=B[X].mipmaps;for(let et=0;et<z.length;et++){const ht=z[et];S.format!==ke?lt!==null?Pt?e.compressedTexSubImage2D(34069+X,et,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(34069+X,et,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+X,et,0,0,ht.width,ht.height,lt,_t,ht.data):e.texImage2D(34069+X,et,gt,ht.width,ht.height,0,lt,_t,ht.data)}}}else{z=S.mipmaps,Pt&&Rt&&(z.length>0&&kt++,e.texStorage2D(34067,kt,gt,B[0].width,B[0].height));for(let X=0;X<6;X++)if(P){Pt?e.texSubImage2D(34069+X,0,0,0,B[X].width,B[X].height,lt,_t,B[X].data):e.texImage2D(34069+X,0,gt,B[X].width,B[X].height,0,lt,_t,B[X].data);for(let et=0;et<z.length;et++){const vt=z[et].image[X].image;Pt?e.texSubImage2D(34069+X,et+1,0,0,vt.width,vt.height,lt,_t,vt.data):e.texImage2D(34069+X,et+1,gt,vt.width,vt.height,0,lt,_t,vt.data)}}else{Pt?e.texSubImage2D(34069+X,0,0,0,lt,_t,B[X]):e.texImage2D(34069+X,0,gt,lt,_t,B[X]);for(let et=0;et<z.length;et++){const ht=z[et];Pt?e.texSubImage2D(34069+X,et+1,0,0,lt,_t,ht.image[X]):e.texImage2D(34069+X,et+1,gt,lt,_t,ht.image[X])}}}A(S,ft)&&D(34067),at.__version=st.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function pt(T,S,q,it,st){const at=s.convert(q.format,q.encoding),Mt=s.convert(q.type),P=M(q.internalFormat,at,Mt,q.encoding);n.get(S).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,P,S.width,S.height,S.depth,0,at,Mt,null):e.texImage2D(st,0,P,S.width,S.height,0,at,Mt,null)),e.bindFramebuffer(36160,T),Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(q).__webglTexture,0,qt(S)):(st===3553||st>=34069&&st<=34074)&&a.framebufferTexture2D(36160,it,st,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function Nt(T,S,q){if(a.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let it=33189;if(q||Ut(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===In?it=36012:st.type===Dn&&(it=33190));const at=qt(S);Ut(S)?u.renderbufferStorageMultisampleEXT(36161,at,it,S.width,S.height):a.renderbufferStorageMultisample(36161,at,it,S.width,S.height)}else a.renderbufferStorage(36161,it,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const it=qt(S);q&&Ut(S)===!1?a.renderbufferStorageMultisample(36161,it,35056,S.width,S.height):Ut(S)?u.renderbufferStorageMultisampleEXT(36161,it,35056,S.width,S.height):a.renderbufferStorage(36161,34041,S.width,S.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{const it=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<it.length;st++){const at=it[st],Mt=s.convert(at.format,at.encoding),P=s.convert(at.type),B=M(at.internalFormat,Mt,P,at.encoding),ct=qt(S);q&&Ut(S)===!1?a.renderbufferStorageMultisample(36161,ct,B,S.width,S.height):Ut(S)?u.renderbufferStorageMultisampleEXT(36161,ct,B,S.width,S.height):a.renderbufferStorage(36161,B,S.width,S.height)}}a.bindRenderbuffer(36161,null)}function St(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const it=n.get(S.depthTexture).__webglTexture,st=qt(S);if(S.depthTexture.format===Fn)Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):a.framebufferTexture2D(36160,36096,3553,it,0);else if(S.depthTexture.format===fi)Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):a.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function bt(T){const S=n.get(T),q=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,T)}else if(q){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=a.createRenderbuffer(),Nt(S.__webglDepthbuffer[it],T,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),Nt(S.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function se(T,S,q){const it=n.get(T);S!==void 0&&pt(it.__webglFramebuffer,T,T.texture,36064,3553),q!==void 0&&bt(T)}function Jt(T){const S=T.texture,q=n.get(T),it=n.get(S);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=a.createTexture()),it.__version=S.version,r.memory.textures++);const st=T.isWebGLCubeRenderTarget===!0,at=T.isWebGLMultipleRenderTargets===!0,Mt=w(T)||o;if(st){q.__webglFramebuffer=[];for(let P=0;P<6;P++)q.__webglFramebuffer[P]=a.createFramebuffer()}else{if(q.__webglFramebuffer=a.createFramebuffer(),at)if(i.drawBuffers){const P=T.texture;for(let B=0,ct=P.length;B<ct;B++){const ft=n.get(P[B]);ft.__webglTexture===void 0&&(ft.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Ut(T)===!1){const P=at?S:[S];q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let B=0;B<P.length;B++){const ct=P[B];q.__webglColorRenderbuffer[B]=a.createRenderbuffer(),a.bindRenderbuffer(36161,q.__webglColorRenderbuffer[B]);const ft=s.convert(ct.format,ct.encoding),lt=s.convert(ct.type),_t=M(ct.internalFormat,ft,lt,ct.encoding,T.isXRRenderTarget===!0),gt=qt(T);a.renderbufferStorageMultisample(36161,gt,_t,T.width,T.height),a.framebufferRenderbuffer(36160,36064+B,36161,q.__webglColorRenderbuffer[B])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),Nt(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),j(34067,S,Mt);for(let P=0;P<6;P++)pt(q.__webglFramebuffer[P],T,S,36064,34069+P);A(S,Mt)&&D(34067),e.unbindTexture()}else if(at){const P=T.texture;for(let B=0,ct=P.length;B<ct;B++){const ft=P[B],lt=n.get(ft);e.bindTexture(3553,lt.__webglTexture),j(3553,ft,Mt),pt(q.__webglFramebuffer,T,ft,36064+B,3553),A(ft,Mt)&&D(3553)}e.unbindTexture()}else{let P=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?P=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(P,it.__webglTexture),j(P,S,Mt),pt(q.__webglFramebuffer,T,S,36064,P),A(S,Mt)&&D(P),e.unbindTexture()}T.depthBuffer&&bt(T)}function Qt(T){const S=w(T)||o,q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let it=0,st=q.length;it<st;it++){const at=q[it];if(A(at,S)){const Mt=T.isWebGLCubeRenderTarget?34067:3553,P=n.get(at).__webglTexture;e.bindTexture(Mt,P),D(Mt),e.unbindTexture()}}}function de(T){if(o&&T.samples>0&&Ut(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],q=T.width,it=T.height;let st=16384;const at=[],Mt=T.stencilBuffer?33306:36096,P=n.get(T),B=T.isWebGLMultipleRenderTargets===!0;if(B)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,P.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,P.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){at.push(36064+ct),T.depthBuffer&&at.push(Mt);const ft=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(ft===!1&&(T.depthBuffer&&(st|=256),T.stencilBuffer&&(st|=1024)),B&&a.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ct]),ft===!0&&(a.invalidateFramebuffer(36008,[Mt]),a.invalidateFramebuffer(36009,[Mt])),B){const lt=n.get(S[ct]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,lt,0)}a.blitFramebuffer(0,0,q,it,0,0,q,it,st,9728),m&&a.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),B)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ct,36161,P.__webglColorRenderbuffer[ct]);const ft=n.get(S[ct]).__webglTexture;e.bindFramebuffer(36160,P.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ct,3553,ft,0)}e.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function qt(T){return Math.min(d,T.samples)}function Ut(T){const S=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(T){const S=r.render.frame;g.get(T)!==S&&(g.set(T,S),T.update())}function _e(T,S){const q=T.encoding,it=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Dr||q!==Bn&&(q===Wt?o===!1?t.has("EXT_sRGB")===!0&&it===ke?(T.format=Dr,T.minFilter=Re,T.generateMipmaps=!1):S=ja.sRGBToLinear(S):(it!==ke||st!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=k,this.resetTextureUnits=J,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=tt,this.rebindTextures=se,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ut}function vp(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===On)return 5121;if(s===hc)return 32819;if(s===uc)return 32820;if(s===ac)return 5120;if(s===lc)return 5122;if(s===Wa)return 5123;if(s===cc)return 5124;if(s===Dn)return 5125;if(s===In)return 5126;if(s===Oi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===dc)return 6406;if(s===ke)return 6408;if(s===pc)return 6409;if(s===mc)return 6410;if(s===Fn)return 6402;if(s===fi)return 34041;if(s===fc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Dr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===gc)return 6403;if(s===_c)return 36244;if(s===vc)return 33319;if(s===xc)return 33320;if(s===yc)return 36249;if(s===Vs||s===Gs||s===Ws||s===Hs)if(r===Wt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oo||s===ao||s===lo||s===co)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ao)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===co)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ho||s===uo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ho)return r===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fo||s===po||s===mo||s===go||s===_o||s===vo||s===xo||s===yo||s===bo||s===Mo||s===wo||s===So||s===Eo||s===Ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===fo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===po)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===go)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_o)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===vo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===So)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eo)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ao)return r===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===To)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===To)return r===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===hi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class xp extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ps extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),_=this._getHandJoint(c,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class bp extends Ae{constructor(t,e,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=Dn),n===void 0&&h===fi&&(n=hi),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1}}class Mp extends Gn{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,h=null,d=null,u=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const _=[],v=[],y=new Set,w=new Map,x=new De;x.layers.enable(1),x.viewport=new le;const A=new De;A.layers.enable(2),A.viewport=new le;const D=[x,A],M=new xp;M.layers.enable(1),M.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let O=_[H];return O===void 0&&(O=new _r,_[H]=O),O.getTargetRaySpace()},this.getControllerGrip=function(H){let O=_[H];return O===void 0&&(O=new _r,_[H]=O),O.getGripSpace()},this.getHand=function(H){let O=_[H];return O===void 0&&(O=new _r,_[H]=O),O.getHandSpace()};function V(H){const O=v.indexOf(H.inputSource);if(O===-1)return;const tt=_[O];tt!==void 0&&tt.dispatchEvent({type:H.type,data:H.inputSource})}function K(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",C);for(let H=0;H<_.length;H++){const O=v[H];O!==null&&(v[H]=null,_[H].disconnect(O))}L=null,I=null,t.setRenderTarget(p),u=null,d=null,h=null,i=null,f=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",K),i.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:u}),f=new Un(u.framebufferWidth,u.framebufferHeight,{format:ke,type:On,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,tt=null,nt=null;g.depth&&(nt=g.stencil?35056:33190,O=g.stencil?fi:Fn,tt=g.stencil?hi:Dn);const ot={colorFormat:32856,depthFormat:nt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ot),i.updateRenderState({layers:[d]}),f=new Un(d.textureWidth,d.textureHeight,{format:ke,type:On,depthTexture:new bp(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const j=t.properties.get(f);j.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function C(H){for(let O=0;O<H.removed.length;O++){const tt=H.removed[O],nt=v.indexOf(tt);nt>=0&&(v[nt]=null,_[nt].disconnect(tt))}for(let O=0;O<H.added.length;O++){const tt=H.added[O];let nt=v.indexOf(tt);if(nt===-1){for(let j=0;j<_.length;j++)if(j>=v.length){v.push(tt),nt=j;break}else if(v[j]===null){v[j]=tt,nt=j;break}if(nt===-1)break}const ot=_[nt];ot&&ot.connect(tt)}}const R=new W,F=new W;function N(H,O,tt){R.setFromMatrixPosition(O.matrixWorld),F.setFromMatrixPosition(tt.matrixWorld);const nt=R.distanceTo(F),ot=O.projectionMatrix.elements,j=tt.projectionMatrix.elements,Tt=ot[14]/(ot[10]-1),mt=ot[14]/(ot[10]+1),yt=(ot[9]+1)/ot[5],pt=(ot[9]-1)/ot[5],Nt=(ot[8]-1)/ot[0],St=(j[8]+1)/j[0],bt=Tt*Nt,se=Tt*St,Jt=nt/(-Nt+St),Qt=Jt*-Nt;O.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Qt),H.translateZ(Jt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const de=Tt+Jt,qt=mt+Jt,Ut=bt-Qt,Ce=se+(nt-Qt),_e=yt*mt/qt*de,T=pt*mt/qt*de;H.projectionMatrix.makePerspective(Ut,Ce,_e,T,de,qt)}function J(H,O){O===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(O.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=A.near=x.near=H.near,M.far=A.far=x.far=H.far,(L!==M.near||I!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,I=M.far);const O=H.parent,tt=M.cameras;J(M,O);for(let ot=0;ot<tt.length;ot++)J(tt[ot],O);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),H.matrix.copy(M.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const nt=H.children;for(let ot=0,j=nt.length;ot<j;ot++)nt[ot].updateMatrixWorld(!0);tt.length===2?N(M,x,A):M.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.getPlanes=function(){return y};let k=null;function Y(H,O){if(c=O.getViewerPose(l||r),m=O,c!==null){const tt=c.views;u!==null&&(t.setRenderTargetFramebuffer(f,u.framebuffer),t.setRenderTarget(f));let nt=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let ot=0;ot<tt.length;ot++){const j=tt[ot];let Tt=null;if(u!==null)Tt=u.getViewport(j);else{const yt=h.getViewSubImage(d,j);Tt=yt.viewport,ot===0&&(t.setRenderTargetTextures(f,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(f))}let mt=D[ot];mt===void 0&&(mt=new De,mt.layers.enable(ot),mt.viewport=new le,D[ot]=mt),mt.matrix.fromArray(j.transform.matrix),mt.projectionMatrix.fromArray(j.projectionMatrix),mt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ot===0&&M.matrix.copy(mt.matrix),nt===!0&&M.cameras.push(mt)}}for(let tt=0;tt<_.length;tt++){const nt=v[tt],ot=_[tt];nt!==null&&ot!==void 0&&ot.update(nt,O,l||r)}if(k&&k(H,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let tt=null;for(const nt of y)O.detectedPlanes.has(nt)||(tt===null&&(tt=[]),tt.push(nt));if(tt!==null)for(const nt of tt)y.delete(nt),w.delete(nt),n.dispatchEvent({type:"planeremoved",data:nt});for(const nt of O.detectedPlanes)if(!y.has(nt))y.add(nt),w.set(nt,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:nt});else{const ot=w.get(nt);nt.lastChangedTime>ot&&(w.set(nt,nt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:nt}))}}m=null}const Q=new sl;Q.setAnimationLoop(Y),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}function wp(a,t){function e(p,f){f.color.getRGB(p.fogColor.value,el(a)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?o(p,f,_,v):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ie&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ie&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const w=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*w}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let v;f.map?v=f.map:f.specularMap?v=f.specularMap:f.displacementMap?v=f.displacementMap:f.normalMap?v=f.normalMap:f.bumpMap?v=f.bumpMap:f.roughnessMap?v=f.roughnessMap:f.metalnessMap?v=f.metalnessMap:f.alphaMap?v=f.alphaMap:f.emissiveMap?v=f.emissiveMap:f.clearcoatMap?v=f.clearcoatMap:f.clearcoatNormalMap?v=f.clearcoatNormalMap:f.clearcoatRoughnessMap?v=f.clearcoatRoughnessMap:f.iridescenceMap?v=f.iridescenceMap:f.iridescenceThicknessMap?v=f.iridescenceThicknessMap:f.specularIntensityMap?v=f.specularIntensityMap:f.specularColorMap?v=f.specularColorMap:f.transmissionMap?v=f.transmissionMap:f.thicknessMap?v=f.thicknessMap:f.sheenColorMap?v=f.sheenColorMap:f.sheenRoughnessMap&&(v=f.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ie&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Sp(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",f));const x=y.program;n.updateUBOMapping(v,x);const A=t.render.frame;s[v.id]!==A&&(u(v),s[v.id]=A)}function h(v){const y=d();v.__bindingPointIndex=y;const w=a.createBuffer(),x=v.__size,A=v.usage;return a.bindBuffer(35345,w),a.bufferData(35345,x,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,w),w}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],w=v.uniforms,x=v.__cache;a.bindBuffer(35345,y);for(let A=0,D=w.length;A<D;A++){const M=w[A];if(m(M,A,x)===!0){const L=M.__offset,I=Array.isArray(M.value)?M.value:[M.value];let V=0;for(let K=0;K<I.length;K++){const C=I[K],R=p(C);typeof C=="number"?(M.__data[0]=C,a.bufferSubData(35345,L+V,M.__data)):C.isMatrix3?(M.__data[0]=C.elements[0],M.__data[1]=C.elements[1],M.__data[2]=C.elements[2],M.__data[3]=C.elements[0],M.__data[4]=C.elements[3],M.__data[5]=C.elements[4],M.__data[6]=C.elements[5],M.__data[7]=C.elements[0],M.__data[8]=C.elements[6],M.__data[9]=C.elements[7],M.__data[10]=C.elements[8],M.__data[11]=C.elements[0]):(C.toArray(M.__data,V),V+=R.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,L,M.__data)}}a.bindBuffer(35345,null)}function m(v,y,w){const x=v.value;if(w[y]===void 0){if(typeof x=="number")w[y]=x;else{const A=Array.isArray(x)?x:[x],D=[];for(let M=0;M<A.length;M++)D.push(A[M].clone());w[y]=D}return!0}else if(typeof x=="number"){if(w[y]!==x)return w[y]=x,!0}else{const A=Array.isArray(w[y])?w[y]:[w[y]],D=Array.isArray(x)?x:[x];for(let M=0;M<A.length;M++){const L=A[M];if(L.equals(D[M])===!1)return L.copy(D[M]),!0}}return!1}function g(v){const y=v.uniforms;let w=0;const x=16;let A=0;for(let D=0,M=y.length;D<M;D++){const L=y[D],I={boundary:0,storage:0},V=Array.isArray(L.value)?L.value:[L.value];for(let K=0,C=V.length;K<C;K++){const R=V[K],F=p(R);I.boundary+=F.boundary,I.storage+=F.storage}if(L.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,D>0){A=w%x;const K=x-A;A!==0&&K-I.boundary<0&&(w+=x-A,L.__offset=w)}w+=I.storage}return A=w%x,A>0&&(w+=x-A),v.__size=w,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function f(v){const y=v.target;y.removeEventListener("dispose",f);const w=r.indexOf(y.__bindingPointIndex);r.splice(w,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Ep(){const a=As("canvas");return a.style.display="block",a}function hl(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:Ep(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=dn,this.toneMappingExposure=1;const p=this;let f=!1,_=0,v=0,y=null,w=-1,x=null;const A=new le,D=new le;let M=null,L=t.width,I=t.height,V=1,K=null,C=null;const R=new le(0,0,L,I),F=new le(0,0,L,I);let N=!1;const J=new Ur;let k=!1,Y=!1,Q=null;const H=new Kt,O=new At,tt=new W,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return y===null?V:1}let j=e;function Tt(E,G){for(let $=0;$<E.length;$++){const U=E[$],Z=t.getContext(U,G);if(Z!==null)return Z}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),j===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),j=Tt(G,E),j===null)throw Tt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let mt,yt,pt,Nt,St,bt,se,Jt,Qt,de,qt,Ut,Ce,_e,T,S,q,it,st,at,Mt,P,B,ct;function ft(){mt=new zd(j),yt=new Ld(j,mt,a),mt.init(yt),P=new vp(j,mt,yt),pt=new gp(j,mt,yt),Nt=new Bd,St=new np,bt=new _p(j,mt,pt,St,yt,P,Nt),se=new Rd(p),Jt=new Fd(p),Qt=new jc(j,yt),B=new Td(j,mt,Qt,yt),de=new Nd(j,Qt,Nt,B),qt=new Gd(j,de,Qt,Nt),st=new Vd(j,yt,bt),S=new Pd(St),Ut=new ep(p,se,Jt,mt,yt,B,S),Ce=new wp(p,St),_e=new sp,T=new hp(mt,yt),it=new Ad(p,se,Jt,pt,qt,h,r),q=new mp(p,qt,yt),ct=new Sp(j,Nt,yt,pt),at=new Cd(j,mt,Nt,yt),Mt=new Od(j,mt,Nt,yt),Nt.programs=Ut.programs,p.capabilities=yt,p.extensions=mt,p.properties=St,p.renderLists=_e,p.shadowMap=q,p.state=pt,p.info=Nt}ft();const lt=new Mp(p,j);this.xr=lt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(L,I,!1))},this.getSize=function(E){return E.set(L,I)},this.setSize=function(E,G,$){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,I=G,t.width=Math.floor(E*V),t.height=Math.floor(G*V),$!==!1&&(t.style.width=E+"px",t.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(L*V,I*V).floor()},this.setDrawingBufferSize=function(E,G,$){L=E,I=G,V=$,t.width=Math.floor(E*$),t.height=Math.floor(G*$),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,G,$,U){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,G,$,U),pt.viewport(A.copy(R).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(F)},this.setScissor=function(E,G,$,U){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,G,$,U),pt.scissor(D.copy(F).multiplyScalar(V).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){pt.setScissorTest(N=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){C=E},this.getClearColor=function(E){return E.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(E=!0,G=!0,$=!0){let U=0;E&&(U|=16384),G&&(U|=256),$&&(U|=1024),j.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),_e.dispose(),T.dispose(),St.dispose(),se.dispose(),Jt.dispose(),qt.dispose(),B.dispose(),ct.dispose(),Ut.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ht),lt.removeEventListener("sessionend",vt),Q&&(Q.dispose(),Q=null),Bt.stop()};function _t(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=Nt.autoReset,G=q.enabled,$=q.autoUpdate,U=q.needsUpdate,Z=q.type;ft(),Nt.autoReset=E,q.enabled=G,q.autoUpdate=$,q.needsUpdate=U,q.type=Z}function Pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const G=E.target;G.removeEventListener("dispose",Rt),kt(G)}function kt(E){z(E),St.remove(E)}function z(E){const G=St.get(E).programs;G!==void 0&&(G.forEach(function($){Ut.releaseProgram($)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,$,U,Z,xt){G===null&&(G=nt);const wt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ct=Tl(E,G,$,U,Z);pt.setMaterial(U,wt);let Lt=$.index,zt=1;U.wireframe===!0&&(Lt=de.getWireframeAttribute($),zt=2);const Dt=$.drawRange,It=$.attributes.position;let Xt=Dt.start*zt,ye=(Dt.start+Dt.count)*zt;xt!==null&&(Xt=Math.max(Xt,xt.start*zt),ye=Math.min(ye,(xt.start+xt.count)*zt)),Lt!==null?(Xt=Math.max(Xt,0),ye=Math.min(ye,Lt.count)):It!=null&&(Xt=Math.max(Xt,0),ye=Math.min(ye,It.count));const Qe=ye-Xt;if(Qe<0||Qe===1/0)return;B.setup(Z,U,Ct,$,Lt);let bn,jt=at;if(Lt!==null&&(bn=Qt.get(Lt),jt=Mt,jt.setIndex(bn)),Z.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*ot()),jt.setMode(1)):jt.setMode(4);else if(Z.isLine){let Ft=U.linewidth;Ft===void 0&&(Ft=1),pt.setLineWidth(Ft*ot()),Z.isLineSegments?jt.setMode(1):Z.isLineLoop?jt.setMode(2):jt.setMode(3)}else Z.isPoints?jt.setMode(0):Z.isSprite&&jt.setMode(4);if(Z.isInstancedMesh)jt.renderInstances(Xt,Qe,Z.count);else if($.isInstancedBufferGeometry){const Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ns=Math.min($.instanceCount,Ft);jt.renderInstances(Xt,Qe,Ns)}else jt.render(Xt,Qe)},this.compile=function(E,G){function $(U,Z,xt){U.transparent===!0&&U.side===$i?(U.side=Ie,U.needsUpdate=!0,Le(U,Z,xt),U.side=Nn,U.needsUpdate=!0,Le(U,Z,xt),U.side=$i):Le(U,Z,xt)}u=T.get(E),u.init(),g.push(u),E.traverseVisible(function(U){U.isLight&&U.layers.test(G.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(p.physicallyCorrectLights),E.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let xt=0;xt<Z.length;xt++){const wt=Z[xt];$(wt,E,U)}else $(Z,E,U)}),g.pop(),u=null};let X=null;function et(E){X&&X(E)}function ht(){Bt.stop()}function vt(){Bt.start()}const Bt=new sl;Bt.setAnimationLoop(et),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(E){X=E,lt.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},lt.addEventListener("sessionstart",ht),lt.addEventListener("sessionend",vt),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(G),G=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,G,y),u=T.get(E,g.length),u.init(),g.push(u),H.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(H),Y=this.localClippingEnabled,k=S.init(this.clippingPlanes,Y,G),d=_e.get(E,m.length),d.init(),m.push(d),re(E,G,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(K,C),k===!0&&S.beginShadows();const $=u.state.shadowsArray;if(q.render($,E,G),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(d,E),u.setupLights(p.physicallyCorrectLights),G.isArrayCamera){const U=G.cameras;for(let Z=0,xt=U.length;Z<xt;Z++){const wt=U[Z];he(d,E,wt,wt.viewport)}}else he(d,E,G);y!==null&&(bt.updateMultisampleRenderTarget(y),bt.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,G),B.resetDefaultState(),w=-1,x=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function re(E,G,$,U){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){U&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const wt=qt.update(E),Ct=E.material;Ct.visible&&d.push(E,wt,Ct,$,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Nt.render.frame&&(E.skeleton.update(),E.skeleton.frame=Nt.render.frame),!E.frustumCulled||J.intersectsObject(E))){U&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const wt=qt.update(E),Ct=E.material;if(Array.isArray(Ct)){const Lt=wt.groups;for(let zt=0,Dt=Lt.length;zt<Dt;zt++){const It=Lt[zt],Xt=Ct[It.materialIndex];Xt&&Xt.visible&&d.push(E,wt,Xt,$,tt.z,It)}}else Ct.visible&&d.push(E,wt,Ct,$,tt.z,null)}}const xt=E.children;for(let wt=0,Ct=xt.length;wt<Ct;wt++)re(xt[wt],G,$,U)}function he(E,G,$,U){const Z=E.opaque,xt=E.transmissive,wt=E.transparent;u.setupLightsView($),xt.length>0&&yn(Z,G,$),U&&pt.viewport(A.copy(U)),Z.length>0&&Ht(Z,G,$),xt.length>0&&Ht(xt,G,$),wt.length>0&&Ht(wt,G,$),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function yn(E,G,$){const U=yt.isWebGL2;Q===null&&(Q=new Un(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?Oi:On,minFilter:Ni,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(O),U?Q.setSize(O.x,O.y):Q.setSize(Ir(O.x),Ir(O.y));const Z=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const xt=p.toneMapping;p.toneMapping=dn,Ht(E,G,$),p.toneMapping=xt,bt.updateMultisampleRenderTarget(Q),bt.updateRenderTargetMipmap(Q),p.setRenderTarget(Z)}function Ht(E,G,$){const U=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,xt=E.length;Z<xt;Z++){const wt=E[Z],Ct=wt.object,Lt=wt.geometry,zt=U===null?wt.material:U,Dt=wt.group;Ct.layers.test($.layers)&&Je(Ct,G,$,Lt,zt,Dt)}}function Je(E,G,$,U,Z,xt){E.onBeforeRender(p,G,$,U,Z,xt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(p,G,$,U,E,xt),Z.transparent===!0&&Z.side===$i?(Z.side=Ie,Z.needsUpdate=!0,p.renderBufferDirect($,G,U,Z,E,xt),Z.side=Nn,Z.needsUpdate=!0,p.renderBufferDirect($,G,U,Z,E,xt),Z.side=$i):p.renderBufferDirect($,G,U,Z,E,xt),E.onAfterRender(p,G,$,U,Z,xt)}function Le(E,G,$){G.isScene!==!0&&(G=nt);const U=St.get(E),Z=u.state.lights,xt=u.state.shadowsArray,wt=Z.state.version,Ct=Ut.getParameters(E,Z.state,xt,G,$),Lt=Ut.getProgramCacheKey(Ct);let zt=U.programs;U.environment=E.isMeshStandardMaterial?G.environment:null,U.fog=G.fog,U.envMap=(E.isMeshStandardMaterial?Jt:se).get(E.envMap||U.environment),zt===void 0&&(E.addEventListener("dispose",Rt),zt=new Map,U.programs=zt);let Dt=zt.get(Lt);if(Dt!==void 0){if(U.currentProgram===Dt&&U.lightsStateVersion===wt)return Zr(E,Ct),Dt}else Ct.uniforms=Ut.getUniforms(E),E.onBuild($,Ct,p),E.onBeforeCompile(Ct,p),Dt=Ut.acquireProgram(Ct,Lt),zt.set(Lt,Dt),U.uniforms=Ct.uniforms;const It=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=S.uniform),Zr(E,Ct),U.needsLights=Ll(E),U.lightsStateVersion=wt,U.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.directionalShadowMap.value=Z.state.directionalShadowMap,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotShadowMap.value=Z.state.spotShadowMap,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMap.value=Z.state.pointShadowMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Xt=Dt.getUniforms(),ye=ws.seqWithValue(Xt.seq,It);return U.currentProgram=Dt,U.uniformsList=ye,Dt}function Zr(E,G){const $=St.get(E);$.outputEncoding=G.outputEncoding,$.instancing=G.instancing,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Tl(E,G,$,U,Z){G.isScene!==!0&&(G=nt),bt.resetTextureUnits();const xt=G.fog,wt=U.isMeshStandardMaterial?G.environment:null,Ct=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Bn,Lt=(U.isMeshStandardMaterial?Jt:se).get(U.envMap||wt),zt=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Dt=!!U.normalMap&&!!$.attributes.tangent,It=!!$.morphAttributes.position,Xt=!!$.morphAttributes.normal,ye=!!$.morphAttributes.color,Qe=U.toneMapped?p.toneMapping:dn,bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,jt=bn!==void 0?bn.length:0,Ft=St.get(U),Ns=u.state.lights;if(k===!0&&(Y===!0||E!==x)){const be=E===x&&U.id===w;S.setState(U,E,be)}let oe=!1;U.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ns.state.version||Ft.outputEncoding!==Ct||Z.isInstancedMesh&&Ft.instancing===!1||!Z.isInstancedMesh&&Ft.instancing===!0||Z.isSkinnedMesh&&Ft.skinning===!1||!Z.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==Lt||U.fog===!0&&Ft.fog!==xt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==S.numPlanes||Ft.numIntersection!==S.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==Dt||Ft.morphTargets!==It||Ft.morphNormals!==Xt||Ft.morphColors!==ye||Ft.toneMapping!==Qe||yt.isWebGL2===!0&&Ft.morphTargetsCount!==jt)&&(oe=!0):(oe=!0,Ft.__version=U.version);let Mn=Ft.currentProgram;oe===!0&&(Mn=Le(U,G,Z));let Kr=!1,yi=!1,Os=!1;const fe=Mn.getUniforms(),wn=Ft.uniforms;if(pt.useProgram(Mn.program)&&(Kr=!0,yi=!0,Os=!0),U.id!==w&&(w=U.id,yi=!0),Kr||x!==E){if(fe.setValue(j,"projectionMatrix",E.projectionMatrix),yt.logarithmicDepthBuffer&&fe.setValue(j,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,yi=!0,Os=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const be=fe.map.cameraPosition;be!==void 0&&be.setValue(j,tt.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&fe.setValue(j,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&fe.setValue(j,"viewMatrix",E.matrixWorldInverse)}if(Z.isSkinnedMesh){fe.setOptional(j,Z,"bindMatrix"),fe.setOptional(j,Z,"bindMatrixInverse");const be=Z.skeleton;be&&(yt.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),fe.setValue(j,"boneTexture",be.boneTexture,bt),fe.setValue(j,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bs=$.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&yt.isWebGL2===!0)&&st.update(Z,$,U,Mn),(yi||Ft.receiveShadow!==Z.receiveShadow)&&(Ft.receiveShadow=Z.receiveShadow,fe.setValue(j,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(wn.envMap.value=Lt,wn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),yi&&(fe.setValue(j,"toneMappingExposure",p.toneMappingExposure),Ft.needsLights&&Cl(wn,Os),xt&&U.fog===!0&&Ce.refreshFogUniforms(wn,xt),Ce.refreshMaterialUniforms(wn,U,V,I,Q),ws.upload(j,Ft.uniformsList,wn,bt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ws.upload(j,Ft.uniformsList,wn,bt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&fe.setValue(j,"center",Z.center),fe.setValue(j,"modelViewMatrix",Z.modelViewMatrix),fe.setValue(j,"normalMatrix",Z.normalMatrix),fe.setValue(j,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const be=U.uniformsGroups;for(let Us=0,Pl=be.length;Us<Pl;Us++)if(yt.isWebGL2){const Jr=be[Us];ct.update(Jr,Mn),ct.bind(Jr,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Cl(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Ll(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,G,$){St.get(E.texture).__webglTexture=G,St.get(E.depthTexture).__webglTexture=$;const U=St.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const $=St.get(E);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,$=0){y=E,_=G,v=$;let U=!0,Z=null,xt=!1,wt=!1;if(E){const Lt=St.get(E);Lt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),U=!1):Lt.__webglFramebuffer===void 0?bt.setupRenderTarget(E):Lt.__hasExternalTextures&&bt.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Dt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Z=Dt[G],xt=!0):yt.isWebGL2&&E.samples>0&&bt.useMultisampledRTT(E)===!1?Z=St.get(E).__webglMultisampledFramebuffer:Z=Dt,A.copy(E.viewport),D.copy(E.scissor),M=E.scissorTest}else A.copy(R).multiplyScalar(V).floor(),D.copy(F).multiplyScalar(V).floor(),M=N;if(pt.bindFramebuffer(36160,Z)&&yt.drawBuffers&&U&&pt.drawBuffers(E,Z),pt.viewport(A),pt.scissor(D),pt.setScissorTest(M),xt){const Lt=St.get(E.texture);j.framebufferTexture2D(36160,36064,34069+G,Lt.__webglTexture,$)}else if(wt){const Lt=St.get(E.texture),zt=G||0;j.framebufferTextureLayer(36160,36064,Lt.__webglTexture,$||0,zt)}w=-1},this.readRenderTargetPixels=function(E,G,$,U,Z,xt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){pt.bindFramebuffer(36160,Ct);try{const Lt=E.texture,zt=Lt.format,Dt=Lt.type;if(zt!==ke&&P.convert(zt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===Oi&&(mt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Dt!==On&&P.convert(Dt)!==j.getParameter(35738)&&!(Dt===In&&(yt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-U&&$>=0&&$<=E.height-Z&&j.readPixels(G,$,U,Z,P.convert(zt),P.convert(Dt),xt)}finally{const Lt=y!==null?St.get(y).__webglFramebuffer:null;pt.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(E,G,$=0){const U=Math.pow(2,-$),Z=Math.floor(G.image.width*U),xt=Math.floor(G.image.height*U);bt.setTexture2D(G,0),j.copyTexSubImage2D(3553,$,0,0,E.x,E.y,Z,xt),pt.unbindTexture()},this.copyTextureToTexture=function(E,G,$,U=0){const Z=G.image.width,xt=G.image.height,wt=P.convert($.format),Ct=P.convert($.type);bt.setTexture2D($,0),j.pixelStorei(37440,$.flipY),j.pixelStorei(37441,$.premultiplyAlpha),j.pixelStorei(3317,$.unpackAlignment),G.isDataTexture?j.texSubImage2D(3553,U,E.x,E.y,Z,xt,wt,Ct,G.image.data):G.isCompressedTexture?j.compressedTexSubImage2D(3553,U,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,wt,G.mipmaps[0].data):j.texSubImage2D(3553,U,E.x,E.y,wt,Ct,G.image),U===0&&$.generateMipmaps&&j.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,G,$,U,Z=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,Ct=E.max.z-E.min.z+1,Lt=P.convert(U.format),zt=P.convert(U.type);let Dt;if(U.isData3DTexture)bt.setTexture3D(U,0),Dt=32879;else if(U.isDataArrayTexture)bt.setTexture2DArray(U,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,U.flipY),j.pixelStorei(37441,U.premultiplyAlpha),j.pixelStorei(3317,U.unpackAlignment);const It=j.getParameter(3314),Xt=j.getParameter(32878),ye=j.getParameter(3316),Qe=j.getParameter(3315),bn=j.getParameter(32877),jt=$.isCompressedTexture?$.mipmaps[0]:$.image;j.pixelStorei(3314,jt.width),j.pixelStorei(32878,jt.height),j.pixelStorei(3316,E.min.x),j.pixelStorei(3315,E.min.y),j.pixelStorei(32877,E.min.z),$.isDataTexture||$.isData3DTexture?j.texSubImage3D(Dt,Z,G.x,G.y,G.z,xt,wt,Ct,Lt,zt,jt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Dt,Z,G.x,G.y,G.z,xt,wt,Ct,Lt,jt.data)):j.texSubImage3D(Dt,Z,G.x,G.y,G.z,xt,wt,Ct,Lt,zt,jt),j.pixelStorei(3314,It),j.pixelStorei(32878,Xt),j.pixelStorei(3316,ye),j.pixelStorei(3315,Qe),j.pixelStorei(32877,bn),Z===0&&U.generateMipmaps&&j.generateMipmap(Dt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?bt.setTextureCube(E,0):E.isData3DTexture?bt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?bt.setTexture2DArray(E,0):bt.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,pt.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ap extends hl{}Ap.prototype.isWebGL1Renderer=!0;class Tp extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ul extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ha=new Kt,zr=new Za,ms=new Ls,gs=new W;class Cp extends ce{constructor(t=new Ke,e=new ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=s,t.ray.intersectsSphere(ms)===!1)return;ha.copy(i).invert(),zr.copy(t.ray).applyMatrix4(ha);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=u,p=m;g<p;g++){const f=c.getX(g);gs.fromBufferAttribute(d,f),ua(gs,f,l,i,t,e,this)}}else{const u=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let g=u,p=m;g<p;g++)gs.fromBufferAttribute(d,g),ua(gs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ua(a,t,e,n,i,s,r){const o=zr.distanceSqToPoint(a);if(o<e){const l=new W;zr.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:r})}}class Vr extends Ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new W,u=new W,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const v=[],y=_/n;let w=0;_==0&&r==0?w=.5/e:_==n&&l==Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const A=x/e;d.x=-t*Math.cos(i+A*s)*Math.sin(r+y*o),d.y=t*Math.cos(r+y*o),d.z=t*Math.sin(i+A*s)*Math.sin(r+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(A+w,1-y),v.push(c++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<e;v++){const y=h[_][v+1],w=h[_][v],x=h[_+1][v],A=h[_+1][v+1];(_!==0||r>0)&&m.push(y,w,A),(_!==n-1||l<Math.PI)&&m.push(w,x,A)}this.setIndex(m),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(f,2))}static fromJSON(t){return new Vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gr extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dl extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vr=new Kt,da=new W,fa=new W;class Lp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;da.setFromMatrixPosition(t.matrixWorld),e.position.copy(da),fa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fa),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pp extends Lp{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rp extends dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.target=new ce,this.shadow=new Pp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dp extends dl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ip{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pa(){return(typeof performance>"u"?Date:performance).now()}class ma{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);const ga={type:"change"},xr={type:"start"},_a={type:"end"};class Fp extends Gn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",_e),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ga),n.update(),s=i.NONE},this.update=function(){const P=new W,B=new kn().setFromUnitVectors(t.up,new W(0,1,0)),ct=B.clone().invert(),ft=new W,lt=new kn,_t=2*Math.PI;return function(){const Pt=n.object.position;P.copy(Pt).sub(n.target),P.applyQuaternion(B),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&L(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Rt=n.minAzimuthAngle,kt=n.maxAzimuthAngle;return isFinite(Rt)&&isFinite(kt)&&(Rt<-Math.PI?Rt+=_t:Rt>Math.PI&&(Rt-=_t),kt<-Math.PI?kt+=_t:kt>Math.PI&&(kt-=_t),Rt<=kt?o.theta=Math.max(Rt,Math.min(kt,o.theta)):o.theta=o.theta>(Rt+kt)/2?Math.max(Rt,o.theta):Math.min(kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(o),P.applyQuaternion(ct),Pt.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||ft.distanceToSquared(n.object.position)>r||8*(1-lt.dot(n.object.quaternion))>r?(n.dispatchEvent(ga),ft.copy(n.object.position),lt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",de),n.domElement.removeEventListener("wheel",Ce),n.domElement.removeEventListener("pointermove",Jt),n.domElement.removeEventListener("pointerup",Qt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",_e)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new ma,l=new ma;let c=1;const h=new W;let d=!1;const u=new At,m=new At,g=new At,p=new At,f=new At,_=new At,v=new At,y=new At,w=new At,x=[],A={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function L(P){l.theta-=P}function I(P){l.phi-=P}const V=function(){const P=new W;return function(ct,ft){P.setFromMatrixColumn(ft,0),P.multiplyScalar(-ct),h.add(P)}}(),K=function(){const P=new W;return function(ct,ft){n.screenSpacePanning===!0?P.setFromMatrixColumn(ft,1):(P.setFromMatrixColumn(ft,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ct),h.add(P)}}(),C=function(){const P=new W;return function(ct,ft){const lt=n.domElement;if(n.object.isPerspectiveCamera){const _t=n.object.position;P.copy(_t).sub(n.target);let gt=P.length();gt*=Math.tan(n.object.fov/2*Math.PI/180),V(2*ct*gt/lt.clientHeight,n.object.matrix),K(2*ft*gt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(ct*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),K(ft*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(P){u.set(P.clientX,P.clientY)}function J(P){v.set(P.clientX,P.clientY)}function k(P){p.set(P.clientX,P.clientY)}function Y(P){m.set(P.clientX,P.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const B=n.domElement;L(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),u.copy(m),n.update()}function Q(P){y.set(P.clientX,P.clientY),w.subVectors(y,v),w.y>0?R(M()):w.y<0&&F(M()),v.copy(y),n.update()}function H(P){f.set(P.clientX,P.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),C(_.x,_.y),p.copy(f),n.update()}function O(P){P.deltaY<0?F(M()):P.deltaY>0&&R(M()),n.update()}function tt(P){let B=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),B=!0;break}B&&(P.preventDefault(),n.update())}function nt(){if(x.length===1)u.set(x[0].pageX,x[0].pageY);else{const P=.5*(x[0].pageX+x[1].pageX),B=.5*(x[0].pageY+x[1].pageY);u.set(P,B)}}function ot(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const P=.5*(x[0].pageX+x[1].pageX),B=.5*(x[0].pageY+x[1].pageY);p.set(P,B)}}function j(){const P=x[0].pageX-x[1].pageX,B=x[0].pageY-x[1].pageY,ct=Math.sqrt(P*P+B*B);v.set(0,ct)}function Tt(){n.enableZoom&&j(),n.enablePan&&ot()}function mt(){n.enableZoom&&j(),n.enableRotate&&nt()}function yt(P){if(x.length==1)m.set(P.pageX,P.pageY);else{const ct=Mt(P),ft=.5*(P.pageX+ct.x),lt=.5*(P.pageY+ct.y);m.set(ft,lt)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const B=n.domElement;L(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),u.copy(m)}function pt(P){if(x.length===1)f.set(P.pageX,P.pageY);else{const B=Mt(P),ct=.5*(P.pageX+B.x),ft=.5*(P.pageY+B.y);f.set(ct,ft)}_.subVectors(f,p).multiplyScalar(n.panSpeed),C(_.x,_.y),p.copy(f)}function Nt(P){const B=Mt(P),ct=P.pageX-B.x,ft=P.pageY-B.y,lt=Math.sqrt(ct*ct+ft*ft);y.set(0,lt),w.set(0,Math.pow(y.y/v.y,n.zoomSpeed)),R(w.y),v.copy(y)}function St(P){n.enableZoom&&Nt(P),n.enablePan&&pt(P)}function bt(P){n.enableZoom&&Nt(P),n.enableRotate&&yt(P)}function se(P){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Jt),n.domElement.addEventListener("pointerup",Qt)),it(P),P.pointerType==="touch"?T(P):qt(P))}function Jt(P){n.enabled!==!1&&(P.pointerType==="touch"?S(P):Ut(P))}function Qt(P){st(P),x.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Jt),n.domElement.removeEventListener("pointerup",Qt)),n.dispatchEvent(_a),s=i.NONE}function de(P){st(P)}function qt(P){let B;switch(P.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Wn.DOLLY:if(n.enableZoom===!1)return;J(P),s=i.DOLLY;break;case Wn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;k(P),s=i.PAN}else{if(n.enableRotate===!1)return;N(P),s=i.ROTATE}break;case Wn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;N(P),s=i.ROTATE}else{if(n.enablePan===!1)return;k(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xr)}function Ut(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(P);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(P);break;case i.PAN:if(n.enablePan===!1)return;H(P);break}}function Ce(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(xr),O(P),n.dispatchEvent(_a))}function _e(P){n.enabled===!1||n.enablePan===!1||tt(P)}function T(P){switch(at(P),x.length){case 1:switch(n.touches.ONE){case Hn.ROTATE:if(n.enableRotate===!1)return;nt(),s=i.TOUCH_ROTATE;break;case Hn.PAN:if(n.enablePan===!1)return;ot(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(),s=i.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xr)}function S(P){switch(at(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pt(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(P),n.update();break;default:s=i.NONE}}function q(P){n.enabled!==!1&&P.preventDefault()}function it(P){x.push(P)}function st(P){delete A[P.pointerId];for(let B=0;B<x.length;B++)if(x[B].pointerId==P.pointerId){x.splice(B,1);return}}function at(P){let B=A[P.pointerId];B===void 0&&(B=new At,A[P.pointerId]=B),B.set(P.pageX,P.pageY)}function Mt(P){const B=P.pointerId===x[0].pointerId?x[1]:x[0];return A[B.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",de),n.domElement.addEventListener("wheel",Ce,{passive:!1}),this.update()}}class Ge{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ge);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],_=i[2],v=i[3],y=i[4],w=i[5],x=i[6],A=i[7],D=i[8];return s[0]=r*p+o*v+l*x,s[1]=r*f+o*y+l*A,s[2]=r*_+o*w+l*D,s[3]=c*p+h*v+d*x,s[4]=c*f+h*y+d*A,s[5]=c*_+h*w+d*D,s[6]=u*p+m*v+g*x,s[7]=u*f+m*y+g*A,s[8]=u*_+m*w+g*D,e}scale(t,e){e===void 0&&(e=new Ge);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const m=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*m;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Ge);const e=3,n=6,i=zp;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const h=n;let d;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const u=i[s+n*r]/i[s+n*s];c=h;do d=h-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--c)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--c)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,h=e*o,d=e*l,u=n*o,m=n*l,g=i*l,p=s*r,f=s*o,_=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-_,v[3*0+2]=d+f,v[3*1+0]=h+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-p,v[3*2+0]=d-f,v[3*2+1]=m+p,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Ge);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const zp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ge([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Np,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Op;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(va),va.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Np=new b,Op=new b,va=new b;class Te{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,xa),c=xa),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Te().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ya,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ya,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const xa=new b,ya=[new b,new b,new b,new b,new b,new b,new b,new b];class ba{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class fl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Zt{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Bp,i=Up;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Zt);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*o+i*c-s*l,e.y=i*h+r*l+s*o-n*c,e.z=s*h+r*c+n*l-i*o,e.w=r*h-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new Zt);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Zt),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,h=c*n+o*s-l*i,d=c*i+l*n-r*s,u=c*s+r*i-o*n,m=-r*n-o*i-l*s;return e.x=h*c+m*-r+d*-l-u*-o,e.y=d*c+m*-o+u*-r-h*-l,e.z=u*c+m*-l+h*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*o+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,m=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="YXZ"?(this.x=l*r*o+s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="ZXY"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o-l*c*h):i==="ZYX"?(this.x=l*r*o-s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o+l*c*h):i==="YZX"?(this.x=l*r*o+s*c*h,this.y=s*c*o+l*r*h,this.z=s*r*h-l*c*o,this.w=s*r*o-l*c*h):i==="XZY"&&(this.x=l*r*o-s*c*h,this.y=s*c*o-l*r*h,this.z=s*r*h+l*c*o,this.w=s*r*o+l*c*h),this}clone(){return new Zt(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Zt);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,m,g,p,f;return m=i*l+s*c+r*h+o*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(p=1-e,f=e),n.x=p*i+f*l,n.y=p*s+f*c,n.z=p*r+f*h,n.w=p*o+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new Zt);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+r*h-o*c),i.y+=u*(r*d+o*l-s*h),i.z+=u*(o*d+s*c-r*l),i.w+=u*(-s*l-r*c-o*h),i}}const Bp=new b,Up=new b,kp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ut{constructor(t){t===void 0&&(t={}),this.id=ut.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ut.idCounter=0;ut.types=kp;class Ot{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new Zt,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ot.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ot.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Ma),Ma.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ma=new Zt;class zi extends ut{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:ut.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];zi.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new b,r=new b;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const h=new b;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(r);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new b;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new b,h=new b,d=new b,u=new b,m=new b,g=new b;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],c);const v=f.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<p&&(p=v,r.copy(c))}else{const _=o?o.length:f.faces.length;for(let v=0;v<_;v++){const y=o?o[v]:v;c.copy(f.faceNormals[y]),n.vmult(c,c);const w=f.testSepAxis(c,t,e,n,i,s);if(w===!1)return!1;w<p&&(p=w,r.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const v=f.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<p&&(p=v,r.copy(h))}else{const _=l?l.length:t.faces.length;for(let v=0;v<_;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const w=f.testSepAxis(h,t,e,n,i,s);if(w===!1)return!1;w<p&&(p=w,r.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;zi.project(o,t,n,i,yr),zi.project(e,t,s,r,br);const l=yr[0],c=yr[1],h=br[0],d=br[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new b,c=new b,h=new b,d=new b,u=new b,m=new b,g=new b,p=new b,f=this,_=[],v=i,y=_;let w=-1,x=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){l.copy(f.faceNormals[I]),n.vmult(l,l);const V=l.dot(t);V<x&&(x=V,w=I)}if(w<0)return;const A=f.faces[w];A.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let V=0;V<f.faces[I].length;V++)A.indexOf(f.faces[I][V])!==-1&&I!==w&&A.connectedFaces.indexOf(I)===-1&&A.connectedFaces.push(I);const D=A.length;for(let I=0;I<D;I++){const V=f.vertices[A[I]],K=f.vertices[A[(I+1)%D]];V.vsub(K,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(V),n.vmult(m,m),e.vadd(m,m);const C=A.connectedFaces[I];g.copy(this.faceNormals[C]);const R=this.getPlaneConstantOfFace(C);p.copy(g),n.vmult(p,p);const F=R-p.dot(e);for(this.clipFaceAgainstPlane(v,y,p,F);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[w]);const M=this.getPlaneConstantOfFace(w);p.copy(g),n.vmult(p,p);const L=M-p.dot(e);for(let I=0;I<v.length;I++){let V=p.dot(v[I])+L;if(V<=s&&(console.log(`clamped: depth=${V} to minDist=${s}`),V=s),V<=r){const K=v[I];if(V<=1e-6){const C={point:K,normal:p,depth:V};o.push(C)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<o;h++){if(c=t[h],r=n.dot(c)+i,s<0)if(r<0){const d=new b;d.copy(c),e.push(d)}else{const d=new b;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new b;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,h,d,u=new b;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new b;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],h=new b;t.vsub(c,h);const d=l.dot(h),u=new b;r.vsub(c,u);const m=l.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Vp;let l=0,c=0;const h=Gp,d=t.vertices;h.setZero(),Ot.vectorToLocalFrame(n,i,e,o),Ot.pointToLocalFrame(n,i,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const yr=[],br=[];new b;const Vp=new b,Gp=new b;class Ds extends ut{constructor(t){super({type:ut.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new zi({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Ds.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)_n.set(s[r][0],s[r][1],s[r][2]),e.vmult(_n,_n),t.vadd(_n,_n),n(_n.x,_n.y,_n.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;We[0].set(s.x,s.y,s.z),We[1].set(-s.x,s.y,s.z),We[2].set(-s.x,-s.y,s.z),We[3].set(-s.x,-s.y,-s.z),We[4].set(s.x,-s.y,-s.z),We[5].set(s.x,s.y,-s.z),We[6].set(-s.x,s.y,-s.z),We[7].set(s.x,-s.y,s.z);const r=We[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=We[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const _n=new b,We=[new b,new b,new b,new b,new b,new b,new b,new b],Wr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Hr={AWAKE:0,SLEEPY:1,SLEEPING:2};class dt extends fl{constructor(t){t===void 0&&(t={}),super(),this.id=dt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?dt.STATIC:dt.DYNAMIC,typeof t.type==typeof dt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=dt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new Zt,this.initQuaternion=new Zt,this.previousQuaternion=new Zt,this.interpolatedQuaternion=new Zt,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Ge,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Ge,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Te,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=dt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===dt.SLEEPING&&this.dispatchEvent(dt.wakeupEvent)}sleep(){this.sleepState=dt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===dt.AWAKE&&n<i?(this.sleepState=dt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(dt.sleepyEvent)):e===dt.SLEEPY&&n>i?this.wakeUp():e===dt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(dt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===dt.SLEEPING||this.type===dt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,s=new Zt;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Wp,r=Hp,o=this.quaternion,l=this.aabb,c=qp;for(let h=0;h!==i;h++){const d=t[h];o.vmult(e[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Xp,i=jp;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=Yp;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;const n=Zp,i=Kp;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===dt.DYNAMIC&&(this.sleepState===dt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;this.sleepState===dt.SLEEPING&&this.wakeUp();const n=e,i=Jp;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Qp;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==dt.DYNAMIC)return;const n=tm,i=em;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=nm;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ds.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===dt.DYNAMIC||this.type===dt.KINEMATIC)||this.sleepState===dt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=o.x*m*u.x,i.y+=o.y*m*u.y,i.z+=o.z*m*u.z;const g=d.elements,p=this.angularFactor,f=l.x*p.x,_=l.y*p.y,v=l.z*p.z;s.x+=t*(g[0]*f+g[1]*_+g[2]*v),s.y+=t*(g[3]*f+g[4]*_+g[5]*v),s.z+=t*(g[6]*f+g[7]*_+g[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}dt.idCounter=0;dt.COLLIDE_EVENT_NAME="collide";dt.DYNAMIC=Wr.DYNAMIC;dt.STATIC=Wr.STATIC;dt.KINEMATIC=Wr.KINEMATIC;dt.AWAKE=Hr.AWAKE;dt.SLEEPY=Hr.SLEEPY;dt.SLEEPING=Hr.SLEEPING;dt.wakeupEvent={type:"wakeup"};dt.sleepyEvent={type:"sleepy"};dt.sleepEvent={type:"sleep"};const Wp=new b,Hp=new Zt,qp=new Te,Xp=new Ge,jp=new Ge,$p=new Ge,Yp=new b,Zp=new b,Kp=new b,Jp=new b,Qp=new b,tm=new b,em=new b,nm=new b;class im{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&dt.STATIC||t.sleepState===dt.SLEEPING)&&(e.type&dt.STATIC||e.sleepState===dt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=sm;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=rm,i=om,s=am,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const sm=new b;new b;new Zt;new b;const rm={keys:[]},om=[],am=[];new b;new b;new b;class lm extends im{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Ts{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let pl,ml,gl,_l,vl,xl,yl;const qr={CLOSEST:1,ANY:2,ALL:4};pl=ut.types.SPHERE;ml=ut.types.PLANE;gl=ut.types.BOX;_l=ut.types.CYLINDER;vl=ut.types.CONVEXPOLYHEDRON;xl=ut.types.HEIGHTFIELD;yl=ut.types.TRIMESH;class Yt{get[pl](){return this._intersectSphere}get[ml](){return this._intersectPlane}get[gl](){return this._intersectBox}get[_l](){return this._intersectConvex}get[vl](){return this._intersectConvex}get[xl](){return this._intersectHeightfield}get[yl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Yt.ANY,this.result=new Ts,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Yt.ANY,this.result=e.result||new Ts,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(wa),Mr.length=0,t.broadphase.aabbQuery(t,wa,Mr),this.intersectBodies(Mr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=cm,s=hm;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Sm(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);const h=new b;r.vsub(n,h);const d=h.dot(c);o.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new b,p=new b,f=new b;r.vsub(n,g);const _=-c.dot(g)/m;l.scale(_,p),r.vadd(p,f),this.reportIntersection(c,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=um;r.from.copy(this.from),r.to.copy(this.to),Ot.pointToLocalFrame(n,e,r.from,r.from),Ot.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=dm;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Te;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Ot.pointToWorldFrame(n,e,t.pillarOffset,_s),this._intersectConvex(t.pillarConvex,e,_s,i,s,Sa),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ot.pointToWorldFrame(n,e,t.pillarOffset,_s),this._intersectConvex(t.pillarConvex,e,_s,i,s,Sa)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,m=fm,g=pm;if(!(u<0))if(u===0)r.lerp(o,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*c),f=(-h+Math.sqrt(u))/(2*c);if(p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=mm,l=Ea,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),_=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<_;y++){const w=c?c[y]:y,x=h[w],A=u[w],D=e,M=n;l.copy(d[x[0]]),D.vmult(l,l),l.vadd(M,l),l.vsub(g,l),D.vmult(A,o);const L=m.dot(o);if(Math.abs(L)<this.precision)continue;const I=o.dot(l)/L;if(!(I<0)){m.scale(I,ve),ve.vadd(g,ve),Be.copy(d[x[0]]),D.vmult(Be,Be),M.vadd(Be,Be);for(let V=1;!v.shouldStop&&V<x.length-1;V++){He.copy(d[x[V]]),qe.copy(d[x[V+1]]),D.vmult(He,He),D.vmult(qe,qe),M.vadd(He,He),M.vadd(qe,qe);const K=ve.distanceTo(g);!(Yt.pointInTriangle(ve,Be,He,qe)||Yt.pointInTriangle(ve,He,Be,qe))||K>f||this.reportIntersection(o,ve,s,i,w)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=gm,l=Mm,c=wm,h=Ea,d=_m,u=vm,m=xm,g=bm,p=ym,f=t.indices;t.vertices;const _=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Ot.vectorToLocalFrame(n,e,y,d),Ot.pointToLocalFrame(n,e,_,u),Ot.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const w=u.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let x=0,A=l.length;!this.result.shouldStop&&x!==A;x++){const D=l[x];t.getNormal(D,o),t.getVertex(f[D*3],Be),Be.vsub(u,h);const M=d.dot(o),L=o.dot(h)/M;if(L<0)continue;d.scale(L,ve),ve.vadd(u,ve),t.getVertex(f[D*3+1],He),t.getVertex(f[D*3+2],qe);const I=ve.distanceSquared(u);!(Yt.pointInTriangle(ve,He,Be,qe)||Yt.pointInTriangle(ve,Be,He,qe))||I>w||(Ot.vectorToWorldFrame(e,o,p),Ot.pointToWorldFrame(n,e,ve,g),this.reportIntersection(p,g,s,i,D))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Yt.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case Yt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case Yt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Rn),n.vsub(e,Ci),t.vsub(e,wr);const s=Rn.dot(Rn),r=Rn.dot(Ci),o=Rn.dot(wr),l=Ci.dot(Ci),c=Ci.dot(wr);let h,d;return(h=l*o-r*c)>=0&&(d=s*c-r*o)>=0&&h+d<s*l-r*r}}Yt.CLOSEST=qr.CLOSEST;Yt.ANY=qr.ANY;Yt.ALL=qr.ALL;const wa=new Te,Mr=[],Ci=new b,wr=new b,cm=new b,hm=new Zt,ve=new b,Be=new b,He=new b,qe=new b;new b;new Ts;const Sa={faceList:[0]},_s=new b,um=new Yt,dm=[],fm=new b,pm=new b,mm=new b;new b;new b;const Ea=new b,gm=new b,_m=new b,vm=new b,xm=new b,ym=new b,bm=new b;new Te;const Mm=[],wm=new Ot,Rn=new b,vs=new b;function Sm(a,t,e){e.vsub(a,Rn);const n=Rn.dot(t);return t.scale(n,vs),vs.vadd(a,vs),e.distanceTo(vs)}class Em{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Aa{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class qi{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=qi.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Aa,this.jacobianElementB=new Aa,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Ta),o.scale(h,Ca),n.invInertiaWorldSolve.vmult(r,La),i.invInertiaWorldSolve.vmult(l,Pa),t.multiplyVectors(Ta,La)+e.multiplyVectors(Ca,Pa)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,xs),c+=xs.dot(t.rotational),l.vmult(e.rotational,xs),c+=xs.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Am;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}qi.idCounter=0;const Ta=new b,Ca=new b,La=new b,Pa=new b,xs=new b,Am=new b;class Tm extends qi{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=Cm,c=Lm,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=Pm,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;r.cross(_,l),o.cross(_,c),_.negate(p.spatial),l.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const v=_.dot(g),y=this.restitution+1,w=y*u.dot(_)-y*h.dot(_)+m.dot(c)-d.dot(l),x=this.computeGiMf();return-v*e-w*n-t*x}getImpactVelocityAlongNormal(){const t=Rm,e=Dm,n=Im,i=Fm,s=zm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Cm=new b,Lm=new b,Pm=new b,Rm=new b,Dm=new b,Im=new b,Fm=new b,zm=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Ra extends qi{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Nm,r=Om,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Nm=new b,Om=new b;class Xi{constructor(t,e,n){n=Em.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Xi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Xi.idCounter=0;class ji{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ji.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ji.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Yt;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Bm extends ut{constructor(t){if(super({type:ut.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const l=r[o];n[l]=t[l]-s,i[l]=t[l]+s}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;class Um extends ut{constructor(){super({type:ut.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){on.set(0,0,1),e.vmult(on,on);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),on.x===1?i.x=t.x:on.x===-1&&(n.x=t.x),on.y===1?i.y=t.y:on.y===-1&&(n.y=t.y),on.z===1?i.z=t.z:on.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const on=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Te;new b;new Te;new b;new b;new b;new b;new b;new b;new b;new Te;new b;new Ot;new Te;class km{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Vm extends km{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,h=t;let d,u,m,g,p,f;if(o!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const _=Wm,v=Hm,y=Gm;_.length=o,v.length=o,y.length=o;for(let w=0;w!==o;w++){const x=r[w];y[w]=0,v[w]=x.computeB(h),_[w]=1/x.computeC()}if(o!==0){for(let A=0;A!==c;A++){const D=l[A],M=D.vlambda,L=D.wlambda;M.set(0,0,0),L.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==o;A++){const D=r[A];d=v[A],u=_[A],f=y[A],p=D.computeGWlambda(),m=u*(d-p-D.eps*f),f+m<D.minForce?m=D.minForce-f:f+m>D.maxForce&&(m=D.maxForce-f),y[A]+=m,g+=m>0?m:-m,D.addToWlambda(m)}if(g*g<s)break}for(let A=0;A!==c;A++){const D=l[A],M=D.velocity,L=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),M.vadd(D.vlambda,M),D.wlambda.vmul(D.angularFactor,D.wlambda),L.vadd(D.wlambda,L)}let w=r.length;const x=1/h;for(;w--;)r[w].multiplier=y[w]*x}return n}}const Gm=[],Wm=[],Hm=[];dt.STATIC;class qm{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Xm extends qm{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const Gt={sphereSphere:ut.types.SPHERE,spherePlane:ut.types.SPHERE|ut.types.PLANE,boxBox:ut.types.BOX|ut.types.BOX,sphereBox:ut.types.SPHERE|ut.types.BOX,planeBox:ut.types.PLANE|ut.types.BOX,convexConvex:ut.types.CONVEXPOLYHEDRON,sphereConvex:ut.types.SPHERE|ut.types.CONVEXPOLYHEDRON,planeConvex:ut.types.PLANE|ut.types.CONVEXPOLYHEDRON,boxConvex:ut.types.BOX|ut.types.CONVEXPOLYHEDRON,sphereHeightfield:ut.types.SPHERE|ut.types.HEIGHTFIELD,boxHeightfield:ut.types.BOX|ut.types.HEIGHTFIELD,convexHeightfield:ut.types.CONVEXPOLYHEDRON|ut.types.HEIGHTFIELD,sphereParticle:ut.types.PARTICLE|ut.types.SPHERE,planeParticle:ut.types.PLANE|ut.types.PARTICLE,boxParticle:ut.types.BOX|ut.types.PARTICLE,convexParticle:ut.types.PARTICLE|ut.types.CONVEXPOLYHEDRON,cylinderCylinder:ut.types.CYLINDER,sphereCylinder:ut.types.SPHERE|ut.types.CYLINDER,planeCylinder:ut.types.PLANE|ut.types.CYLINDER,boxCylinder:ut.types.BOX|ut.types.CYLINDER,convexCylinder:ut.types.CONVEXPOLYHEDRON|ut.types.CYLINDER,heightfieldCylinder:ut.types.HEIGHTFIELD|ut.types.CYLINDER,particleCylinder:ut.types.PARTICLE|ut.types.CYLINDER,sphereTrimesh:ut.types.SPHERE|ut.types.TRIMESH,planeTrimesh:ut.types.PLANE|ut.types.TRIMESH};class jm{get[Gt.sphereSphere](){return this.sphereSphere}get[Gt.spherePlane](){return this.spherePlane}get[Gt.boxBox](){return this.boxBox}get[Gt.sphereBox](){return this.sphereBox}get[Gt.planeBox](){return this.planeBox}get[Gt.convexConvex](){return this.convexConvex}get[Gt.sphereConvex](){return this.sphereConvex}get[Gt.planeConvex](){return this.planeConvex}get[Gt.boxConvex](){return this.boxConvex}get[Gt.sphereHeightfield](){return this.sphereHeightfield}get[Gt.boxHeightfield](){return this.boxHeightfield}get[Gt.convexHeightfield](){return this.convexHeightfield}get[Gt.sphereParticle](){return this.sphereParticle}get[Gt.planeParticle](){return this.planeParticle}get[Gt.boxParticle](){return this.boxParticle}get[Gt.convexParticle](){return this.convexParticle}get[Gt.cylinderCylinder](){return this.convexConvex}get[Gt.sphereCylinder](){return this.sphereConvex}get[Gt.planeCylinder](){return this.planeConvex}get[Gt.boxCylinder](){return this.boxConvex}get[Gt.convexCylinder](){return this.convexConvex}get[Gt.heightfieldCylinder](){return this.heightfieldCylinder}get[Gt.particleCylinder](){return this.particleCylinder}get[Gt.sphereTrimesh](){return this.sphereTrimesh}get[Gt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Xm,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Tm(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new Ra(n,i,u*m),f=g.length?g.pop():new Ra(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Tn.setZero(),ri.setZero(),oi.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Tn.vadd(e.ni,Tn),ri.vadd(e.ri,ri),oi.vadd(e.rj,oi)):(Tn.vsub(e.ni,Tn),ri.vadd(e.rj,ri),oi.vadd(e.ri,oi));const r=1/t;ri.scale(r,n.ri),oi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Tn.normalize(),Tn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=Zm,c=Km,h=$m,d=Ym;for(let u=0,m=t.length;u!==m;u++){const g=t[u],p=e[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const _=g.type&dt.KINEMATIC&&p.type&dt.STATIC||g.type&dt.STATIC&&p.type&dt.KINEMATIC||g.type&dt.KINEMATIC&&p.type&dt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let w=0;w<p.shapes.length;w++){p.quaternion.mult(p.shapeOrientations[w],c),p.quaternion.vmult(p.shapeOffsets[w],d),d.vadd(p.position,d);const x=p.shapes[w];if(!(y.collisionFilterMask&x.collisionFilterGroup&&x.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+x.boundingSphereRadius)continue;let A=null;y.material&&x.material&&(A=n.getContactMaterial(y.material,x.material)||null),this.currentContactMaterial=A||f||n.defaultContactMaterial;const D=y.type|x.type,M=this[D];if(M){let L=!1;y.type<x.type?L=M.call(this,y,x,h,d,l,c,g,p,y,x,_):L=M.call(this,x,y,d,h,c,l,p,g,y,x,_),L&&_&&(n.shapeOverlapKeeper.set(y.id,x.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(o,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,h,d){const u=this.createContactEquation(o,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,ys),u.ni.scale(u.ni.dot(ys),Da),ys.vsub(Da,u.rj),-ys.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}sphereBox(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool,m=wg;n.vsub(i,bs),e.getSideNormals(m,r);const g=t.radius;let p=!1;const f=Eg,_=Ag,v=Tg;let y=null,w=0,x=0,A=0,D=null;for(let N=0,J=m.length;N!==J&&p===!1;N++){const k=yg;k.copy(m[N]);const Y=k.length();k.normalize();const Q=bs.dot(k);if(Q<Y+g&&Q>0){const H=bg,O=Mg;H.copy(m[(N+1)%3]),O.copy(m[(N+2)%3]);const tt=H.length(),nt=O.length();H.normalize(),O.normalize();const ot=bs.dot(H),j=bs.dot(O);if(ot<tt&&ot>-tt&&j<nt&&j>-nt){const Tt=Math.abs(Q-Y-g);if((D===null||Tt<D)&&(D=Tt,x=ot,A=j,y=Y,f.copy(k),_.copy(H),v.copy(O),w++,d))return!0}}}if(w){p=!0;const N=this.createContactEquation(o,l,t,e,c,h);f.scale(-g,N.ri),N.ni.copy(f),N.ni.negate(N.ni),f.scale(y,f),_.scale(x,_),f.vadd(_,f),v.scale(A,v),f.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let M=u.get();const L=Sg;for(let N=0;N!==2&&!p;N++)for(let J=0;J!==2&&!p;J++)for(let k=0;k!==2&&!p;k++)if(M.set(0,0,0),N?M.vadd(m[0],M):M.vsub(m[0],M),J?M.vadd(m[1],M):M.vsub(m[1],M),k?M.vadd(m[2],M):M.vsub(m[2],M),i.vadd(M,L),L.vsub(n,L),L.lengthSquared()<g*g){if(d)return!0;p=!0;const Y=this.createContactEquation(o,l,t,e,c,h);Y.ri.copy(L),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(M),Y.ri.vadd(n,Y.ri),Y.ri.vsub(o.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}u.release(M),M=null;const I=u.get(),V=u.get(),K=u.get(),C=u.get(),R=u.get(),F=m.length;for(let N=0;N!==F&&!p;N++)for(let J=0;J!==F&&!p;J++)if(N%3!==J%3){m[J].cross(m[N],I),I.normalize(),m[N].vadd(m[J],V),K.copy(n),K.vsub(V,K),K.vsub(i,K);const k=K.dot(I);I.scale(k,C);let Y=0;for(;Y===N%3||Y===J%3;)Y++;R.copy(n),R.vsub(C,R),R.vsub(V,R),R.vsub(i,R);const Q=Math.abs(k),H=R.length();if(Q<m[Y].length()&&H<g){if(d)return!0;p=!0;const O=this.createContactEquation(o,l,t,e,c,h);V.vadd(C,O.rj),O.rj.copy(O.rj),R.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(I,V,K,C,R)}planeBox(t,e,n,i,s,r,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}convexConvex(t,e,n,i,s,r,o,l,c,h,d,u,m){const g=Gg;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,u,m)){const p=[],f=Wg;t.clipAgainstHull(n,s,e,i,r,g,-100,100,p);let _=0;for(let v=0;v!==p.length;v++){if(d)return!0;const y=this.createContactEquation(o,l,t,e,c,h),w=y.ri,x=y.rj;g.negate(y.ni),p[v].normal.negate(f),f.scale(p[v].depth,f),p[v].point.vadd(f,w),x.copy(p[v].point),w.vsub(n,w),x.vsub(i,x),w.vadd(n,w),w.vsub(o.position,w),x.vadd(i,x),x.vsub(l.position,x),this.result.push(y),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,r,o,l,c,h,d){const u=this.v3pool;n.vsub(i,Cg);const m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius;let _=!1;for(let v=0;v!==p.length;v++){const y=p[v],w=Dg;r.vmult(y,w),i.vadd(w,w);const x=Rg;if(w.vsub(n,x),x.lengthSquared()<f*f){if(d)return!0;_=!0;const A=this.createContactEquation(o,l,t,e,c,h);A.ri.copy(x),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(f,A.ri),w.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&_===!1;v++){const w=m[v],x=g[v],A=Ig;r.vmult(w,A);const D=Fg;r.vmult(p[x[0]],D),D.vadd(i,D);const M=zg;A.scale(-f,M),n.vadd(M,M);const L=Ng;M.vsub(D,L);const I=L.dot(A),V=Og;if(n.vsub(D,V),I<0&&V.dot(A)>0){const K=[];for(let C=0,R=x.length;C!==R;C++){const F=u.get();r.vmult(p[x[C]],F),i.vadd(F,F),K.push(F)}if(xg(K,A,n)){if(d)return!0;_=!0;const C=this.createContactEquation(o,l,t,e,c,h);A.scale(-f,C.ri),A.negate(C.ni);const R=u.get();A.scale(-I,R);const F=u.get();A.scale(-f,F),n.vsub(i,C.rj),C.rj.vadd(F,C.rj),C.rj.vadd(R,C.rj),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(o.position,C.ri),u.release(R),u.release(F),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);for(let N=0,J=K.length;N!==J;N++)u.release(K[N]);return}else for(let C=0;C!==x.length;C++){const R=u.get(),F=u.get();r.vmult(p[x[(C+1)%x.length]],R),r.vmult(p[x[(C+2)%x.length]],F),i.vadd(R,R),i.vadd(F,F);const N=Lg;F.vsub(R,N);const J=Pg;N.unit(J);const k=u.get(),Y=u.get();n.vsub(R,Y);const Q=Y.dot(J);J.scale(Q,k),k.vadd(R,k);const H=u.get();if(k.vsub(n,H),Q>0&&Q*Q<N.lengthSquared()&&H.lengthSquared()<f*f){if(d)return!0;const O=this.createContactEquation(o,l,t,e,c,h);k.vsub(i,O.rj),k.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(f,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(o.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let tt=0,nt=K.length;tt!==nt;tt++)u.release(K[tt]);u.release(R),u.release(F),u.release(k),u.release(H),u.release(Y);return}u.release(R),u.release(F),u.release(k),u.release(H),u.release(Y)}for(let C=0,R=K.length;C!==R;C++)u.release(K[C])}}}planeConvex(t,e,n,i,s,r,o,l,c,h,d){const u=Bg,m=Ug;m.set(0,0,1),s.vmult(m,m);let g=0;const p=kg;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h),y=Vg;m.scale(m.dot(p),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=t.radius,g=e.elementSize,p=e0,f=t0;Ot.pointToLocalFrame(i,r,n,f);let _=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,y=Math.floor((f.y-m)/g)-1,w=Math.ceil((f.y+m)/g)+1;if(v<0||w<0||_>u.length||y>u[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),w<0&&(w=0),_>=u.length&&(_=u.length-1),v>=u.length&&(v=u.length-1),w>=u[0].length&&(w=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const x=[];e.getRectMinMax(_,y,v,w,x);const A=x[0],D=x[1];if(f.z-m>D||f.z+m<A)return;const M=this.result;for(let L=_;L<v;L++)for(let I=y;I<w;I++){const V=M.length;let K=!1;if(e.getConvexTrianglePillar(L,I,!1),Ot.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(K=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,l,t,e,d)),d&&K||(e.getConvexTrianglePillar(L,I,!0),Ot.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(K=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,l,t,e,d)),d&&K))return!0;if(M.length-V>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,l,c,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=Jg,f=Qg,_=Kg;Ot.pointToLocalFrame(i,r,n,_);let v=Math.floor((_.x-g)/m)-1,y=Math.ceil((_.x+g)/m)+1,w=Math.floor((_.y-g)/m)-1,x=Math.ceil((_.y+g)/m)+1;if(y<0||x<0||v>u.length||w>u[0].length)return;v<0&&(v=0),y<0&&(y=0),w<0&&(w=0),x<0&&(x=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),x>=u[0].length&&(x=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const A=[];e.getRectMinMax(v,w,y,x,A);const D=A[0],M=A[1];if(!(_.z-g>M||_.z+g<D))for(let L=v;L<y;L++)for(let I=w;I<x;I++){let V=!1;if(e.getConvexTrianglePillar(L,I,!1),Ot.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,l,null,null,d,f,null)),d&&V||(e.getConvexTrianglePillar(L,I,!0),Ot.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(V=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,l,null,null,d,f,null)),d&&V))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,h,d){const u=jg;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,h,d){const u=Hg;u.set(0,0,1),o.quaternion.vmult(u,u);const m=qg;if(i.vsub(o.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(l,o,e,t,c,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=Xg;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexParticle(t,e,n,i,s,r,o,l,c,h,d){let u=-1;const m=Yg,g=Zg;let p=null;const f=$g;if(f.copy(i),f.vsub(n,f),s.conjugate(Ia),Ia.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const y=[t.worldVertices[t.faces[_][0]]],w=t.worldFaceNormals[_];i.vsub(y[0],Fa);const x=-w.dot(Fa);if(p===null||Math.abs(x)<Math.abs(p)){if(d)return!0;p=x,u=_,m.copy(w)}}if(u!==-1){const _=this.createContactEquation(l,o,e,t,c,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,y=_.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(o.position,y),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,h,d)}particleCylinder(t,e,n,i,s,r,o,l,c,h,d){return this.convexParticle(e,t,i,n,r,s,l,o,c,h,d)}sphereTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=rg,m=og,g=ag,p=lg,f=cg,_=hg,v=pg,y=sg,w=ng,x=mg;Ot.pointToLocalFrame(i,r,n,f);const A=t.radius;v.lowerBound.set(f.x-A,f.y-A,f.z-A),v.upperBound.set(f.x+A,f.y+A,f.z+A),e.getTrianglesInAABB(v,x);const D=ig,M=t.radius*t.radius;for(let C=0;C<x.length;C++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[x[C]*3+R],D),D.vsub(f,w),w.lengthSquared()<=M){if(y.copy(D),Ot.pointToWorldFrame(i,r,y,D),D.vsub(n,w),d)return!0;let F=this.createContactEquation(o,l,t,e,c,h);F.ni.copy(w),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),F.rj.copy(D),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let C=0;C<x.length;C++)for(let R=0;R<3;R++){e.getVertex(e.indices[x[C]*3+R],u),e.getVertex(e.indices[x[C]*3+(R+1)%3],m),m.vsub(u,g),f.vsub(m,_);const F=_.dot(g);f.vsub(u,_);let N=_.dot(g);if(N>0&&F<0&&(f.vsub(u,_),p.copy(g),p.normalize(),N=_.dot(p),p.scale(N,_),_.vadd(u,_),_.distanceTo(f)<t.radius)){if(d)return!0;const k=this.createContactEquation(o,l,t,e,c,h);_.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),Ot.pointToWorldFrame(i,r,_,_),_.vsub(l.position,k.rj),Ot.vectorToWorldFrame(r,k.ni,k.ni),Ot.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const L=ug,I=dg,V=fg,K=eg;for(let C=0,R=x.length;C!==R;C++){e.getTriangleVertices(x[C],L,I,V),e.getNormal(x[C],K),f.vsub(L,_);let F=_.dot(K);if(K.scale(F,_),f.vsub(_,_),F=_.distanceTo(f),Yt.pointInTriangle(_,L,I,V)&&F<t.radius){if(d)return!0;let N=this.createContactEquation(o,l,t,e,c,h);_.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),Ot.pointToWorldFrame(i,r,_,_),_.vsub(l.position,N.rj),Ot.vectorToWorldFrame(r,N.ni,N.ni),Ot.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}x.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,h,d){const u=new b,m=Jm;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const p=new b;p.copy(u),Ot.pointToWorldFrame(i,r,p,u);const f=Qm;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,h);v.ni.copy(m);const y=tg;m.scale(f.dot(m),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Tn=new b,ri=new b,oi=new b,$m=new b,Ym=new b,Zm=new Zt,Km=new Zt,Jm=new b,Qm=new b,tg=new b,eg=new b,ng=new b;new b;const ig=new b,sg=new b,rg=new b,og=new b,ag=new b,lg=new b,cg=new b,hg=new b,ug=new b,dg=new b,fg=new b,pg=new Te,mg=[],ys=new b,Da=new b,gg=new b,_g=new b,vg=new b;function xg(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=gg;a[(s+1)%i].vsub(r,o);const l=_g;o.cross(t,l);const c=vg;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const bs=new b,yg=new b,bg=new b,Mg=new b,wg=[new b,new b,new b,new b,new b,new b],Sg=new b,Eg=new b,Ag=new b,Tg=new b,Cg=new b,Lg=new b,Pg=new b,Rg=new b,Dg=new b,Ig=new b,Fg=new b,zg=new b,Ng=new b,Og=new b;new b;new b;const Bg=new b,Ug=new b,kg=new b,Vg=new b,Gg=new b,Wg=new b,Hg=new b,qg=new b,Xg=new b,jg=new b,Ia=new Zt,$g=new b;new b;const Yg=new b,Fa=new b,Zg=new b,Kg=new b,Jg=new b,Qg=[0],t0=new b,e0=new b;class za{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[o];)o++;c=h===i[o],c||Na(t,h)}o=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[o];)o++;c=n[o]===h,c||Na(e,h)}}}function Na(a,t){a.push((t&4294901760)>>16,t&65535)}const Sr=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class n0{constructor(){this.data={keys:[]}}get(t,e){const n=Sr(t,e);return this.data[n]}set(t,e,n){const i=Sr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Sr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class i0 extends fl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lm,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Vm,this.constraints=[],this.narrowphase=new jm(this),this.collisionMatrix=new ba,this.collisionMatrixPrevious=new ba,this.bodyOverlapKeeper=new za,this.shapeOverlapKeeper=new za,this.contactmaterials=[],this.contactMaterialTable=new n0,this.defaultMaterial=new ji("default"),this.defaultContactMaterial=new Xi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ts?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Yt.ALL,n.from=t,n.to=e,n.callback=i,Er.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Yt.ANY,n.from=t,n.to=e,n.result=i,Er.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Yt.CLOSEST,n.from=t,n.to=e,n.result=i,Er.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof dt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ee.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ee.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ee.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=l0,i=c0,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=dt.DYNAMIC;let u=-1/0;const m=this.constraints,g=a0;l.length();const p=l.x,f=l.y,_=l.z;let v=0;for(c&&(u=ee.now()),v=0;v!==s;v++){const C=r[v];if(C.type===d){const R=C.force,F=C.mass;R.x+=F*p,R.y+=F*f,R.z+=F*_}}for(let C=0,R=this.subsystems.length;C!==R;C++)this.subsystems[C].update();c&&(u=ee.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ee.now()-u);let y=m.length;for(v=0;v!==y;v++){const C=m[v];if(!C.collideConnected)for(let R=n.length-1;R>=0;R-=1)(C.bodyA===n[R]&&C.bodyB===i[R]||C.bodyB===n[R]&&C.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(u=ee.now());const w=o0,x=e.length;for(v=0;v!==x;v++)w.push(e[v]);e.length=0;const A=this.frictionEquations.length;for(v=0;v!==A;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,w,this.frictionEquations,g),c&&(h.narrowphase=ee.now()-u),c&&(u=ee.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const D=e.length;for(let C=0;C!==D;C++){const R=e[C],F=R.bi,N=R.bj,J=R.si,k=R.sj;let Y;if(F.material&&N.material?Y=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(R.restitution=F.material.restitution*N.material.restitution)),o.addEquation(R),F.allowSleep&&F.type===dt.DYNAMIC&&F.sleepState===dt.SLEEPING&&N.sleepState===dt.AWAKE&&N.type!==dt.STATIC){const Q=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),H=N.sleepSpeedLimit**2;Q>=H*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===dt.DYNAMIC&&N.sleepState===dt.SLEEPING&&F.sleepState===dt.AWAKE&&F.type!==dt.STATIC){const Q=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),H=F.sleepSpeedLimit**2;Q>=H*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||(Li.body=N,Li.contact=R,F.dispatchEvent(Li),Li.body=F,N.dispatchEvent(Li)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set(J.id,k.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ee.now()-u,u=ee.now()),v=0;v!==s;v++){const C=r[v];C.wakeUpAfterNarrowphase&&(C.wakeUp(),C.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const C=m[v];C.update();for(let R=0,F=C.equations.length;R!==F;R++){const N=C.equations[R];o.addEquation(N)}}o.solve(t,this),c&&(h.solve=ee.now()-u),o.removeAllEquations();const M=Math.pow;for(v=0;v!==s;v++){const C=r[v];if(C.type&d){const R=M(1-C.linearDamping,t),F=C.velocity;F.scale(R,F);const N=C.angularVelocity;if(N){const J=M(1-C.angularDamping,t);N.scale(J,N)}}}this.dispatchEvent(r0),c&&(u=ee.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,V=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,I,V);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ee.now()-u),this.stepnumber+=1,this.dispatchEvent(s0);let K=!0;if(this.allowSleep)for(K=!1,v=0;v!==s;v++){const C=r[v];C.sleepTick(this.time),C.sleepState!==dt.SLEEPING&&(K=!0)}this.hasActiveBodies=K}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(an,ln),t){for(let s=0,r=an.length;s<r;s+=2)Pi.bodyA=this.getBodyById(an[s]),Pi.bodyB=this.getBodyById(an[s+1]),this.dispatchEvent(Pi);Pi.bodyA=Pi.bodyB=null}if(e){for(let s=0,r=ln.length;s<r;s+=2)Ri.bodyA=this.getBodyById(ln[s]),Ri.bodyB=this.getBodyById(ln[s+1]),this.dispatchEvent(Ri);Ri.bodyA=Ri.bodyB=null}an.length=ln.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(an,ln),n){for(let s=0,r=an.length;s<r;s+=2){const o=this.getShapeById(an[s]),l=this.getShapeById(an[s+1]);cn.shapeA=o,cn.shapeB=l,o&&(cn.bodyA=o.body),l&&(cn.bodyB=l.body),this.dispatchEvent(cn)}cn.bodyA=cn.bodyB=cn.shapeA=cn.shapeB=null}if(i){for(let s=0,r=ln.length;s<r;s+=2){const o=this.getShapeById(ln[s]),l=this.getShapeById(ln[s+1]);hn.shapeA=o,hn.shapeB=l,o&&(hn.bodyA=o.body),l&&(hn.bodyB=l.body),this.dispatchEvent(hn)}hn.bodyA=hn.bodyB=hn.shapeA=hn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Te;const Er=new Yt,ee=globalThis.performance||{};if(!ee.now){let a=Date.now();ee.timing&&ee.timing.navigationStart&&(a=ee.timing.navigationStart),ee.now=()=>Date.now()-a}new b;const s0={type:"postStep"},r0={type:"preStep"},Li={type:dt.COLLIDE_EVENT_NAME,body:null,contact:null},o0=[],a0=[],l0=[],c0=[],an=[],ln=[],Pi={type:"beginContact",bodyA:null,bodyB:null},Ri={type:"endContact",bodyA:null,bodyB:null},cn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},hn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ze{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ze.nextNameID=Ze.nextNameID||0,this.$name.id=`lil-gui-name-${++Ze.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class h0 extends Ze{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Nr(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const u0={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:Nr,toHexString:Nr},Ui={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},d0={isPrimitive:!1,match:Array.isArray,fromHexString(a,t,e=1){const n=Ui.fromHexString(a);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([a,t,e],n=1){n=255/n;const i=a*n<<16^t*n<<8^e*n<<0;return Ui.toHexString(i)}},f0={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const n=Ui.fromHexString(a);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:a,g:t,b:e},n=1){n=255/n;const i=a*n<<16^t*n<<8^e*n<<0;return Ui.toHexString(i)}},p0=[u0,Ui,d0,f0];function m0(a){return p0.find(t=>t.match(a))}class g0 extends Ze{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=m0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Nr(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ar extends Ze{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class _0 extends Ze{constructor(t,e,n,i,s,r){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const o=r!==void 0;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},e=_=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),e(this._step*this._normalizeMouseWheel(_)))};let s=!1,r,o,l,c,h;const d=5,u=_=>{r=_.clientX,o=l=_.clientY,s=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},m=_=>{if(s){const v=_.clientX-r,y=_.clientY-o;Math.abs(y)>d?(_.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&g()}if(!s){const v=_.clientY-l;h-=v*this._step*this._arrowKeyMultiplier(_),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",u),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(_,v,y,w,x)=>(_-v)/(y-v)*(x-w)+w,e=_=>{const v=this.$slider.getBoundingClientRect();let y=t(_,v.left,v.right,this._min,this._max);this._snapClampSetValue(y)},n=_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=_=>{e(_.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,o,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),r=!1},h=_=>{_.touches.length>1||(this._hasScrollBar?(o=_.touches[0].clientX,l=_.touches[0].clientY,r=!0):c(_),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=_=>{if(r){const v=_.touches[0].clientX-o,y=_.touches[0].clientY-l;Math.abs(v)>Math.abs(y)?c(_):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else _.preventDefault(),e(_.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),g=400;let p;const f=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const y=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class v0 extends Ze{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class x0 extends Ze{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const y0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function b0(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Oa=!1;class Xr{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Oa&&r&&(b0(y0),Oa=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,s){if(Object(n)===n)return new v0(this,t,e,n);const r=t[e];switch(typeof r){case"number":return new _0(this,t,e,n,i,s);case"boolean":return new h0(this,t,e);case"string":return new x0(this,t,e);case"function":return new Ar(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,r)}addColor(t,e,n=1){return new g0(this,t,e,n)}addFolder(t){return new Xr({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Ar||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ar)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const jr=document.querySelector("canvas.webgl");if(!jr)throw new Error('Canvas with class "webgl" not found in the HTML.');const xn=new Tp,xi=new i0;xi.gravity.set(0,-9.82,0);const ki=new ji("default"),M0=new Xi(ki,ki,{friction:.1,restitution:.9});xi.addContactMaterial(M0);const Is=5e3,Ss=new Float32Array(Is*3),Es=new Float32Array(Is*3),Fs=()=>new Vt(Math.random(),Math.random(),Math.random());for(let a=0;a<Is;a++){const t=Math.random(),e=t<.25?(Math.random()-.5)*20:t<.5?10:t<.75?-10:(Math.random()-.5)*20,n=t<.25||t<.5?(Math.random()-.5)*20:t<.75?-10:10,i=Math.random()*10+.5;Ss[a*3]=e,Ss[a*3+1]=i,Ss[a*3+2]=n;const s=Fs();Es[a*3]=s.r,Es[a*3+1]=s.g,Es[a*3+2]=s.b}const $r=new Ke;$r.setAttribute("position",new Fe(Ss,3));$r.setAttribute("color",new Fe(Es,3));const w0=new ul({size:.1,vertexColors:!0,transparent:!0,opacity:.8}),Fi=new Cp($r,w0);xn.add(Fi);const $e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{$e.width=window.innerWidth,$e.height=window.innerHeight,mi.aspect=$e.width/$e.height,mi.updateProjectionMatrix(),Vi.setSize($e.width,$e.height),Vi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const mi=new De(75,$e.width/$e.height,.1,100);mi.position.set(0,3,10);xn.add(mi);const bl=new Fp(mi,jr);bl.enableDamping=!0;const Vi=new hl({canvas:jr});Vi.setSize($e.width,$e.height);Vi.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ml=new dt({mass:0,shape:new Um,material:ki});Ml.quaternion.setFromEuler(-Math.PI/2,0,0);xi.addBody(Ml);const wl=new Ve(new Ps(20,20),new Gr({color:8421504}));wl.rotation.x=-Math.PI/2;xn.add(wl);const S0=new Dp(16777215,.5);xn.add(S0);const Sl=new Rp(16777215,.5);Sl.position.set(5,5,5);xn.add(Sl);const El=new Xr,zs={},Yr=[],E0=new Vr(1,20,20),A0=(a,t)=>{const e=Fs(),n=new Gr({color:e,metalness:.3,roughness:.4}),i=new Ve(E0,n);i.scale.set(a,a,a),i.position.copy(t),xn.add(i);const s=new Bm(a),r=new dt({mass:1,position:new b(t.x,t.y,t.z),shape:s,material:ki});xi.addBody(r),Yr.push({mesh:i,body:r})},T0=new _i(1,1,1),C0=(a,t,e,n)=>{const i=Fs(),s=new Gr({color:i,metalness:.3,roughness:.4}),r=new Ve(T0,s);r.scale.set(a,t,e),r.position.copy(n),xn.add(r);const o=new Ds(new b(a*.5,t*.5,e*.5)),l=new dt({mass:1,position:new b(n.x,n.y,n.z),shape:o,material:ki});xi.addBody(l),Yr.push({mesh:r,body:l})};zs.createSphere=()=>{A0(.5,{x:0,y:3,z:0})};El.add(zs,"createSphere");zs.createBox=()=>{C0(Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};El.add(zs,"createBox");const L0=new Ip,Al=()=>{const a=L0.getDelta();xi.step(1/60,a,3);for(const n of Yr)n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion);const t=Fi.geometry.attributes.position.array,e=Fi.geometry.attributes.color.array;for(let n=0;n<Is*3;n+=3)if(t[n+1]<.5){const i=Math.random();t[n]=i<.25?(Math.random()-.5)*20:i<.5?10:i<.75?-10:(Math.random()-.5)*20,t[n+1]=Math.random()*10+.5,t[n+2]=i<.25||i<.5?(Math.random()-.5)*20:i<.75?-10:10;const s=Fs();e[n]=s.r,e[n+1]=s.g,e[n+2]=s.b}Fi.geometry.attributes.position.needsUpdate=!0,Fi.geometry.attributes.color.needsUpdate=!0,bl.update(),Vi.render(xn,mi),window.requestAnimationFrame(Al)};Al();
//# sourceMappingURL=index-f9d4f6b3.js.map
