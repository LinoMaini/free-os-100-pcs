(()=>{var hf=0,Kh=1,uf=2;var fa=1,df=2,io=3,$s=0,kn=1,gi=2,ur=0,so=1,jh=2,Qh=3,eu=4,ff=5;var dr=100,pf=101,mf=102,gf=103,xf=104,yf=200,_f=201,vf=202,Mf=203,tu=204,nu=205,Sf=206,Ef=207,bf=208,wf=209,Tf=210,Af=211,Rf=212,Cf=213,Pf=214,hl=0,ul=1,dl=2,zr=3,fl=4,pl=5,ml=6,gl=7,iu=0,If=1,Lf=2,ls=0,su=1,ru=2,ou=3,au=4,lu=5,cu=6,hu=7;var uu=300,fr=301,ro=302,Zl=303,Jl=304,xl=1e3,rs=1001,yl=1002,Fn=1003,Ff=1004;var pa=1005;var ui=1006,Kl=1007;var bs=1008;var Si=1009,du=1010,fu=1011,oo=1012,jl=1013,Ki=1014,zi=1015,ji=1016,Ql=1017,ec=1018,pr=1020,pu=35902,mu=35899,gu=1021,xu=1022,Qi=1023,Ss=1026,ws=1027,ao=1028,tc=1029,Zs=1030,nc=1031;var ic=1033,ma=33776,ga=33777,xa=33778,ya=33779,sc=35840,rc=35841,oc=35842,ac=35843,lc=36196,cc=37492,hc=37496,uc=37488,dc=37489,_a=37490,fc=37491,pc=37808,mc=37809,gc=37810,xc=37811,yc=37812,_c=37813,vc=37814,Mc=37815,Sc=37816,Ec=37817,bc=37818,wc=37819,Tc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Ic=36283,Lc=36284,va=36285,Fc=36286;var No=2300,_l=2301,ll=2302,kh=2303,Hh=2400,zh=2401,Gh=2402;var Df=3200;var Dc=0,Nf=1,Ts="",an="srgb",Uo="srgb-linear",Bo="linear",nn="srgb";var cl=7680;var Uf=519,Bf=512,Of=513,kf=514,yu=515,Hf=516,zf=517,_u=518,vu=519,Mu=35044;var Su="300 es",ki=2e3,Gr=2001;function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=Oo("canvas");return i.style.display="block",i}var Md={},Vr=null;function ko(...i){let e="THREE."+i.shift();Vr?Vr("log",e,...i):console.log(e,...i)}function Vf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function xt(...i){i=Vf(i);let e="THREE."+i.shift();if(Vr)Vr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function vt(...i){i=Vf(i);let e="THREE."+i.shift();if(Vr)Vr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Lo(...i){let e=i.join(" ");e in Md||(Md[e]=!0,xt(...i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xf={[hl]:hl,[dl]:ml,[fl]:fl,[zr]:pl,[ul]:ul,[ml]:dl,[gl]:gl,[pl]:zr},os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dh=Math.PI/180,vl=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[e&255]+si[e>>8&255]+"-"+si[e>>16&15|64]+si[e>>24&255]+"-"+si[t&63|128]+si[t>>8&255]+"-"+si[t>>16&255]+si[t>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function bp(i,e){return(i%e+e)%e}function fh(i,e,t){return(1-t)*i+t*e}function qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yf(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function $f(i,e){if(e.constructor===Float32Array)return i;let t=Nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ru=class Ru{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ru.prototype.isVector2=!0;var Fe=Ru,Xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3];if(f!==_||c!==d||l!==u||h!==p){let g=c*d+l*u+h*p+f*_;g<0&&(d=-d,u=-u,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b,c=c*m+d*a,l=l*m+u*a,h=h*m+p*a,f=f*m+_*a}else{c=c*m+d*a,l=l*m+u*a,h=h*m+p*a,f=f*m+_*a;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],d=r[o+1],u=r[o+2],p=r[o+3];return e[t]=a*p+h*f+c*u-l*d,e[t+1]=c*p+h*d+l*f-a*u,e[t+2]=l*p+h*u+a*d-c*f,e[t+3]=h*p-a*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),d=c(n/2),u=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f+d*u*p;break;case"YZX":this._x=d*h*f+l*u*p,this._y=l*u*f+d*h*p,this._z=l*h*p-d*u*f,this._w=l*h*f-d*u*p;break;case"XZY":this._x=d*h*f-l*u*p,this._y=l*u*f-d*h*p,this._z=l*h*p+d*u*f,this._w=l*h*f+d*u*p;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cu=class Cu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cu.prototype.isVector3=!0;var k=Cu,ph=new k,Sd=new Xn,Pu=class Pu{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],b=s[4],v=s[7],T=s[2],E=s[5],x=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*g+a*b+c*E,r[6]=o*m+a*v+c*x,r[1]=l*_+h*M+f*T,r[4]=l*g+h*b+f*E,r[7]=l*m+h*v+f*x,r[2]=d*_+u*M+p*T,r[5]=d*g+u*b+p*E,r[8]=d*m+u*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,u=l*r-o*c,p=t*f+n*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pu.prototype.isMatrix3=!0;var Tt=Pu,mh=new Tt,Ed=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){let i={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nn&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nn&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ts?Bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Uo]:{primaries:e,whitePoint:n,transfer:Bo,toXYZ:Ed,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:nn,toXYZ:Ed,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var $t=wp();function Ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sr,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Oo("canvas")),Sr.width=e.width,Sr.height=e.height;let s=Sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tp=0,Wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gh(s[o].image)):r.push(gh(s[o]))}else r=gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}var Ap=0,xh=new k,di=class i extends os{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=rs,s=rs,r=ui,o=bs,a=Qi,c=Si,l=i.DEFAULT_ANISOTROPY,h=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Js(),this.name="",this.source=new Wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=uu;di.DEFAULT_ANISOTROPY=1;var Iu=class Iu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(u+1)/2,T=(m+1)/2,E=(h+d)/4,x=(f+_)/4,S=(p+g)/4;return b>v&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=x/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Iu.prototype.isVector4=!0;var fn=Iu,Sl=class extends os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new di({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends Sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ho=class extends di{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends di{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $l=class $l{constructor(e,t,n,s,r,o,a,c,l,h,f,d,u,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,d,u,p,_,g)}set(e,t,n,s,r,o,a,c,l,h,f,d,u,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=o*h,u=o*f,p=a*h,_=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+p*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=p+u*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,p=l*h,_=l*f;t[0]=d+_*a,t[4]=p*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-p,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,p=l*h,_=l*f;t[0]=d-_*a,t[4]=-o*f,t[8]=p+u*a,t[1]=u+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,u=o*f,p=a*h,_=a*f;t[0]=c*h,t[4]=p*l-u,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=u*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,u=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-d*f,t[8]=p*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*f+p,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*c,u=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-p,t[2]=p*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Cp)}lookAt(e,t,n){let s=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Bs.crossVectors(n,Ci),Bs.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Bs.crossVectors(n,Ci)),Bs.normalize(),La.crossVectors(Ci,Bs),s[0]=Bs.x,s[4]=La.x,s[8]=Ci.x,s[1]=Bs.y,s[5]=La.y,s[9]=Ci.y,s[2]=Bs.z,s[6]=La.z,s[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],b=n[7],v=n[11],T=n[15],E=s[0],x=s[4],S=s[8],L=s[12],R=s[1],D=s[5],z=s[9],q=s[13],F=s[2],N=s[6],G=s[10],W=s[14],ue=s[3],ie=s[7],ae=s[11],ce=s[15];return r[0]=o*E+a*R+c*F+l*ue,r[4]=o*x+a*D+c*N+l*ie,r[8]=o*S+a*z+c*G+l*ae,r[12]=o*L+a*q+c*W+l*ce,r[1]=h*E+f*R+d*F+u*ue,r[5]=h*x+f*D+d*N+u*ie,r[9]=h*S+f*z+d*G+u*ae,r[13]=h*L+f*q+d*W+u*ce,r[2]=p*E+_*R+g*F+m*ue,r[6]=p*x+_*D+g*N+m*ie,r[10]=p*S+_*z+g*G+m*ae,r[14]=p*L+_*q+g*W+m*ce,r[3]=M*E+b*R+v*F+T*ue,r[7]=M*x+b*D+v*N+T*ie,r[11]=M*S+b*z+v*G+T*ae,r[15]=M*L+b*q+v*W+T*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],p=e[3],_=e[7],g=e[11],m=e[15],M=c*u-l*d,b=a*u-l*f,v=a*d-c*f,T=o*u-l*h,E=o*d-c*h,x=o*f-a*h;return t*(_*M-g*b+m*v)-n*(p*M-g*T+m*E)+s*(p*b-_*T+m*x)-r*(p*v-_*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],p=e[12],_=e[13],g=e[14],m=e[15],M=t*a-n*o,b=t*c-s*o,v=t*l-r*o,T=n*c-s*a,E=n*l-r*a,x=s*l-r*c,S=h*_-f*p,L=h*g-d*p,R=h*m-u*p,D=f*g-d*_,z=f*m-u*_,q=d*m-u*g,F=M*q-b*z+v*D+T*R-E*L+x*S;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/F;return e[0]=(a*q-c*z+l*D)*N,e[1]=(s*z-n*q-r*D)*N,e[2]=(_*x-g*E+m*T)*N,e[3]=(d*E-f*x-u*T)*N,e[4]=(c*R-o*q-l*L)*N,e[5]=(t*q-s*R+r*L)*N,e[6]=(g*v-p*x-m*b)*N,e[7]=(h*x-d*v+u*b)*N,e[8]=(o*z-a*R+l*S)*N,e[9]=(n*R-t*z-r*S)*N,e[10]=(p*E-_*v+m*M)*N,e[11]=(f*v-h*E-u*M)*N,e[12]=(a*L-o*D-c*S)*N,e[13]=(t*D-n*L+s*S)*N,e[14]=(_*b-p*T-g*M)*N,e[15]=(h*T-f*b+d*M)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,u=r*h,p=r*f,_=o*h,g=o*f,m=a*f,M=c*l,b=c*h,v=c*f,T=n.x,E=n.y,x=n.z;return s[0]=(1-(_+m))*T,s[1]=(u+v)*T,s[2]=(p-b)*T,s[3]=0,s[4]=(u-v)*E,s[5]=(1-(d+m))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(p+b)*x,s[9]=(g-M)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Er.set(s[0],s[1],s[2]).length(),a=Er.set(s[4],s[5],s[6]).length(),c=Er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yi.copy(this);let l=1/o,h=1/a,f=1/c;return Yi.elements[0]*=l,Yi.elements[1]*=l,Yi.elements[2]*=l,Yi.elements[4]*=h,Yi.elements[5]*=h,Yi.elements[6]*=h,Yi.elements[8]*=f,Yi.elements[9]*=f,Yi.elements[10]*=f,t.setFromRotationMatrix(Yi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=ki,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),p,_;if(c)p=r/(o-r),_=o*r/(o-r);else if(a===ki)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Gr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ki,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),p,_;if(c)p=1/(o-r),_=o/(o-r);else if(a===ki)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Gr)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$l.prototype.isMatrix4=!0;var Nt=$l,Er=new k,Yi=new Nt,Rp=new k(0,0,0),Cp=new k(1,1,1),Bs=new k,La=new k,Ci=new k,wd=new Nt,Td=new Xn,Gs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gs.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pp=0,Ad=new k,br=new Xn,ms=new Nt,Fa=new k,Mo=new k,Ip=new k,Lp=new Xn,Rd=new k(1,0,0),Cd=new k(0,1,0),Pd=new k(0,0,1),Id={type:"added"},Fp={type:"removed"},wr={type:"childadded",child:null},yh={type:"childremoved",child:null},sn=class i extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new Gs,n=new Xn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Tt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ms.lookAt(Mo,Fa,this.up):ms.lookAt(Fa,Mo,this.up),this.quaternion.setFromRotationMatrix(ms),s&&(ms.extractRotation(s.matrixWorld),br.setFromRotationMatrix(ms),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Id),wr.child=e,this.dispatchEvent(wr),wr.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Id),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};sn.DEFAULT_UP=new k(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ie=class extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dp={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Da={h:0,s:0,l:0};function _h(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$t.workingColorSpace){if(e=bp(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_h(o,r,e+1/3),this.g=_h(o,r,e),this.b=_h(o,r,e-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return $t.workingToColorSpace(ri.copy(this),e),Math.round(Vt(ri.r*255,0,255))*65536+Math.round(Vt(ri.g*255,0,255))*256+Math.round(Vt(ri.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.workingToColorSpace(ri.copy(this),t);let n=ri.r,s=ri.g,r=ri.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$t.workingColorSpace){return $t.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=an){$t.workingToColorSpace(ri.copy(this),e);let t=ri.r,n=ri.g,s=ri.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(Da);let n=fh(Os.h,Da.h,t),s=fh(Os.s,Da.s,t),r=fh(Os.l,Da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new et;et.NAMES=Zf;var Vs=class extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new k,gs=new k,vh=new k,xs=new k,Tr=new k,Ar=new k,Ld=new k,Mh=new k,Sh=new k,Eh=new k,bh=new fn,wh=new fn,Th=new fn,vs=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$i.subVectors(e,t),s.cross($i);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$i.subVectors(s,t),gs.subVectors(n,t),vh.subVectors(e,t);let o=$i.dot($i),a=$i.dot(gs),c=$i.dot(vh),l=gs.dot(gs),h=gs.dot(vh),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-u-p,p,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,xs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xs.x),c.addScaledVector(o,xs.y),c.addScaledVector(a,xs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return bh.setScalar(0),wh.setScalar(0),Th.setScalar(0),bh.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bh,r.x),o.addScaledVector(wh,r.y),o.addScaledVector(Th,r.z),o}static isFrontFacing(e,t,n,s){return $i.subVectors(n,t),gs.subVectors(e,t),$i.cross(gs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),$i.cross(gs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Tr.subVectors(s,n),Ar.subVectors(r,n),Mh.subVectors(e,n);let c=Tr.dot(Mh),l=Ar.dot(Mh);if(c<=0&&l<=0)return t.copy(n);Sh.subVectors(e,s);let h=Tr.dot(Sh),f=Ar.dot(Sh);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(Tr,o);Eh.subVectors(e,r);let u=Tr.dot(Eh),p=Ar.dot(Eh);if(p>=0&&u<=p)return t.copy(r);let _=u*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Ar,a);let g=h*p-u*f;if(g<=0&&f-h>=0&&u-p>=0)return Ld.subVectors(r,s),a=(f-h)/(f-h+(u-p)),t.copy(s).addScaledVector(Ld,a);let m=1/(g+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Tr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(r,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ua.subVectors(this.max,So),Rr.subVectors(e.a,So),Cr.subVectors(e.b,So),Pr.subVectors(e.c,So),ks.subVectors(Cr,Rr),Hs.subVectors(Pr,Cr),tr.subVectors(Rr,Pr);let t=[0,-ks.z,ks.y,0,-Hs.z,Hs.y,0,-tr.z,tr.y,ks.z,0,-ks.x,Hs.z,0,-Hs.x,tr.z,0,-tr.x,-ks.y,ks.x,0,-Hs.y,Hs.x,0,-tr.y,tr.x,0];return!Ah(t,Rr,Cr,Pr,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,Rr,Cr,Pr,Ua))?!1:(Ba.crossVectors(ks,Hs),t=[Ba.x,Ba.y,Ba.z],Ah(t,Rr,Cr,Pr,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ys=[new k,new k,new k,new k,new k,new k,new k,new k],Zi=new k,Na=new Hi,Rr=new k,Cr=new k,Pr=new k,ks=new k,Hs=new k,tr=new k,So=new k,Ua=new k,Ba=new k,nr=new k;function Ah(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){nr.fromArray(i,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),c=e.dot(nr),l=t.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ln=new k,Oa=new Fe,Np=0,Kn=class extends os{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=zi,this.version=0,this._normalizationScale=e!==void 0?Nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix3(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$f(e,this.array)}};var zo=class extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Go=class extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Wt=class extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Up=new Hi,Eo=new k,Rh=new k,as=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Up.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Rh)),this.expandByPoint(Eo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bp=0,Oi=new Nt,Ch=new sn,Ir=new k,Pi=new Hi,bo=new Hi,Wn=new k,yn=class i extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Go:zo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,n){return Oi.makeTranslation(e,t,n),this.applyMatrix4(Oi),this}scale(e,t,n){return Oi.makeScale(e,t,n),this.applyMatrix4(Oi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(Pi.min,bo.min),Pi.expandByPoint(Wn),Wn.addVectors(Pi.max,bo.max),Pi.expandByPoint(Wn)):(Pi.expandByPoint(bo.min),Pi.expandByPoint(bo.max))}Pi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wn.fromBufferAttribute(a,l),c&&(Ir.fromBufferAttribute(e,l),Wn.add(Ir)),s=Math.max(s,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new k,c[L]=new k;let h=new k,f=new k,d=new k,u=new Fe,p=new Fe,_=new Fe,g=new k,m=new k;function M(L,R,D){l[L]=l[R]=l[D]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,R),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,D),f.sub(h),d.sub(h),p.sub(u),_.sub(u);let z=1/(p.x*_.y-_.x*p.y);isFinite(z)&&(g.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(z),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(z),a[L].add(g),a[R].add(g),a[D].add(g),c[L].add(m),c[R].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,R=b.length;L<R;++L){let D=b[L],z=D.start,q=D.count;for(let F=z,N=z+q;F<N;F+=3)M(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new k,T=new k,E=new k,x=new k;function S(L){E.fromBufferAttribute(s,L),x.copy(E);let R=a[L];v.copy(R),v.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(x,R);let z=T.dot(c[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,z)}for(let L=0,R=n.count;L<R;++L)l[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,c=new k,l=new k,h=new k,f=new k;if(e)for(let d=0,u=e.count;d<u;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),u=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?u=c[_]*a.data.stride+a.offset:u=c[_]*h;for(let m=0;m<h;m++)d[p++]=l[u++]}return new Kn(d,h,f)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Js()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Fd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Js()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var hi=new k,Yr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Nc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$f(e,this.data.array)}},Ph=new k,Op=new k,kp=new Tt,Ii=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ph.subVectors(n,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kp.getNormalMatrix(e),s=this.coplanarPoint(Ph).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hp=0,Ji=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=so,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=nu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ii().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},or=class extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lr,wo=new k,Fr=new k,Dr=new k,Nr=new Fe,To=new Fe,Jf=new Nt,ka=new k,Ao=new k,Ha=new k,Dd=new Fe,Ih=new Fe,Nd=new Fe,$r=class extends sn{constructor(e=new or){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new yn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vo(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new Yr(n,3,0,!1)),Lr.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Dr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;za(ka.set(-.5,-.5,0),Dr,o,Fr,s,r),za(Ao.set(.5,-.5,0),Dr,o,Fr,s,r),za(Ha.set(.5,.5,0),Dr,o,Fr,s,r),Dd.set(0,0),Ih.set(1,0),Nd.set(1,1);let a=e.ray.intersectTriangle(ka,Ao,Ha,!1,wo);if(a===null&&(za(Ao.set(-.5,.5,0),Dr,o,Fr,s,r),Ih.set(0,1),a=e.ray.intersectTriangle(ka,Ha,Ao,!1,wo),a===null))return;let c=e.ray.origin.distanceTo(wo);c<e.near||c>e.far||t.push({distance:c,point:wo.clone(),uv:vs.getInterpolation(wo,ka,Ao,Ha,Dd,Ih,Nd,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function za(i,e,t,n,s,r){Nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(To.x=r*Nr.x-s*Nr.y,To.y=s*Nr.x+r*Nr.y):To.copy(Nr),i.copy(e),i.x+=To.x,i.y+=To.y,i.applyMatrix4(Jf)}var _s=new k,Lh=new k,Ga=new k,Va=new k,ar=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_s.copy(this.origin).addScaledVector(this.direction,t),_s.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lh.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Va.copy(this.origin).sub(Lh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=Va.dot(this.direction),c=-Va.dot(Ga),l=Va.lengthSq(),h=Math.abs(1-o*o),f,d,u,p;if(h>0)if(f=o*c-a,d=o*a-c,p=r*h,f>=0)if(d>=-p)if(d<=p){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d<=-p?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=p?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Lh).addScaledVector(Ga,d),u}intersectSphere(e,t){if(e.radius<0)return null;_s.subVectors(e.center,this.origin);let n=_s.dot(this.direction),s=_s.dot(_s)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_s)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=e.x-o.x,d=e.y-o.y,u=e.z-o.z,p=t.x-o.x,_=t.y-o.y,g=t.z-o.z,m=n.x-o.x,M=n.y-o.y,b=n.z-o.z,v=Math.abs(c),T=Math.abs(l),E=Math.abs(h),x,S,L,R,D,z,q,F,N,G,W,ue;if(v>=T&&v>=E?(L=c,z=f,N=p,ue=m,c>=0?(x=l,S=h,R=d,D=u,q=_,F=g,G=M,W=b):(x=h,S=l,R=u,D=d,q=g,F=_,G=b,W=M)):T>=E?(L=l,z=d,N=_,ue=M,l>=0?(x=h,S=c,R=u,D=f,q=g,F=p,G=b,W=m):(x=c,S=h,R=f,D=u,q=p,F=g,G=m,W=b)):(L=h,z=u,N=g,ue=b,h>=0?(x=c,S=l,R=f,D=d,q=p,F=_,G=m,W=M):(x=l,S=c,R=d,D=f,q=_,F=p,G=M,W=m)),L===0)return null;let ie=x/L,ae=S/L,ce=1/L,Ee=R-ie*z,Le=D-ae*z,oe=q-ie*N,be=F-ae*N,ee=G-ie*ue,xe=W-ae*ue,ye=ee*be-xe*oe,Ue=Ee*xe-Le*ee,Ge=oe*Le-be*Ee;if(s){if(ye<0||Ue<0||Ge<0)return null}else if((ye<0||Ue<0||Ge<0)&&(ye>0||Ue>0||Ge>0))return null;let Ne=ye+Ue+Ge;if(Ne===0)return null;let Ye=ce*(ye*z+Ue*N+Ge*ue);return(Ne>0?Ye<0:Ye>0)?null:this.at(Ye/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ud=new Nt,ir=new ar,Wa=new as,Bd=new k,Xa=new k,qa=new k,Ya=new k,Fh=new k,$a=new k,Od=new k,Za=new k,$e=class extends sn{constructor(e=new yn,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Fh.fromBufferAttribute(f,e),o?$a.addScaledVector(Fh,h):$a.addScaledVector(Fh.sub(t),h))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),ir.copy(e.ray).recast(e.near),!(Wa.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Wa,Bd)===null||ir.origin.distanceToSquared(Bd)>(e.far-e.near)**2))&&(Ud.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Ud),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,T=b;v<T;v+=3){let E=a.getX(v),x=a.getX(v+1),S=a.getX(v+2);s=Ja(this,m,e,n,l,h,f,E,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),b=a.getX(g+1),v=a.getX(g+2);s=Ja(this,o,e,n,l,h,f,M,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,T=b;v<T;v+=3){let E=v,x=v+1,S=v+2;s=Ja(this,m,e,n,l,h,f,E,x,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){let M=g,b=g+1,v=g+2;s=Ja(this,o,e,n,l,h,f,M,b,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function zp(i,e,t,n,s,r,o,a){let c;if(e.side===kn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===$s,a),c===null)return null;Za.copy(a),Za.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Za);return l<t.near||l>t.far?null:{distance:l,point:Za.clone(),object:i}}function Ja(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xa),i.getVertexPosition(c,qa),i.getVertexPosition(l,Ya);let h=zp(i,e,t,n,Xa,qa,Ya,Od);if(h){let f=new k;vs.getBarycoord(Od,Xa,qa,Ya,f),s&&(h.uv=vs.getInterpolatedAttribute(s,a,c,l,f,new Fe)),r&&(h.uv1=vs.getInterpolatedAttribute(r,a,c,l,f,new Fe)),o&&(h.normal=vs.getInterpolatedAttribute(o,a,c,l,f,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new k,materialIndex:0};vs.getNormal(Xa,qa,Ya,d.normal),h.face=d,h.barycoord=f}return h}var lr=class extends di{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Fn,h=Fn,f,d){super(null,o,a,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zr=class extends Kn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ur=new Nt,kd=new Nt,Ka=[],Hd=new Hi,Gp=new Nt,Ro=new $e,Co=new as,Et=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Hd.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Co.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),e.ray.intersectsSphere(Co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),kd.multiplyMatrices(n,Ur),Ro.matrixWorld=kd,Ro.raycast(e,Ka);for(let o=0,a=Ka.length;o<a;o++){let c=Ka[o];c.instanceId=r,c.object=this,t.push(c)}Ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,ao,zi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sr=new as,Vp=new Fe(.5,.5),ja=new k,Ws=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],b=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,u-h,m-p,T-M).normalize(),s[1].setComponents(l+o,u+h,m+p,T+M).normalize(),s[2].setComponents(l+a,u+f,m+_,T+b).normalize(),s[3].setComponents(l-a,u-f,m-_,T-b).normalize(),n)s[4].setComponents(c,d,g,v).normalize(),s[5].setComponents(l-c,u-d,m-g,T-v).normalize();else if(s[4].setComponents(l-c,u-d,m-g,T-v).normalize(),t===ki)s[5].setComponents(l+c,u+d,m+g,T+v).normalize();else if(t===Gr)s[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let t=Vp.distanceTo(e.center);return sr.radius=.7071067811865476+t,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zd=new Nt,bl=class i{constructor(){this.coordinateSystem=ki,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];zd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ws),n[s].setFromProjectionMatrix(zd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ws),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Jr=class extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wl=new k,Tl=new k,Gd=new Nt,Po=new ar,Qa=new as,Dh=new k,Vd=new k,Al=class extends sn{constructor(e=new yn,t=new Jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wl.fromBufferAttribute(t,s-1),Tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wl.distanceTo(Tl);e.setAttribute("lineDistance",new Wt(n,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Gd.copy(s).invert(),Po.copy(e.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=u,g=p-1;_<g;_+=l){let m=h.getX(_),M=h.getX(_+1),b=el(this,e,Po,c,m,M,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(u),m=el(this,e,Po,c,_,g,p-1);m&&t.push(m)}}else{let u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=u,g=p-1;_<g;_+=l){let m=el(this,e,Po,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=el(this,e,Po,c,p-1,u,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function el(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(wl.fromBufferAttribute(a,s),Tl.fromBufferAttribute(a,r),t.distanceSqToSegment(wl,Tl,Dh,Vd)>n)return;Dh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Dh);if(!(l<e.near||l>e.far))return{distance:l,point:Vd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Wd=new k,Xd=new k,Wo=class extends Al{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wd.fromBufferAttribute(t,s),Xd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wd.distanceTo(Xd);e.setAttribute("lineDistance",new Wt(n,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kr=class extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qd=new Nt,Vh=new ar,tl=new as,nl=new k,Xo=class extends sn{constructor(e=new yn,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;qd.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let p=d,_=u;p<_;p++){let g=l.getX(p);nl.fromBufferAttribute(f,g),Yd(nl,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let p=d,_=u;p<_;p++)nl.fromBufferAttribute(f,p),Yd(nl,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yd(i,e,t,n,s,r,o){let a=Vh.distanceSqToPoint(i);if(a<t){let c=new k;Vh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qo=class extends di{constructor(e=[],t=fr,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qn=class extends di{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Es=class extends di{constructor(e,t,n=Ki,s,r,o,a=Fn,c=Fn,l,h=Ss,f=1){if(h!==Ss&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yo=class extends Es{constructor(e,t=Ki,n=fr,s,r,o=Fn,a=Fn,c,l=Ss){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$o=class extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ai=class i extends yn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function p(_,g,m,M,b,v,T,E,x,S,L){let R=v/x,D=T/S,z=v/2,q=T/2,F=E/2,N=x+1,G=S+1,W=0,ue=0,ie=new k;for(let ae=0;ae<G;ae++){let ce=ae*D-q;for(let Ee=0;Ee<N;Ee++){let Le=Ee*R-z;ie[_]=Le*M,ie[g]=ce*b,ie[m]=F,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[g]=0,ie[m]=E>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Ee/x),f.push(1-ae/S),W+=1}}for(let ae=0;ae<S;ae++)for(let ce=0;ce<x;ce++){let Ee=d+ce+N*ae,Le=d+ce+N*(ae+1),oe=d+(ce+1)+N*(ae+1),be=d+(ce+1)+N*ae;c.push(Ee,Le,be),c.push(Le,oe,be),ue+=6}a.addGroup(u,ue,L),u+=ue,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Zo=class i extends yn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,p=n*2+r,_=s+1,g=new k,m=new k;for(let M=0;M<=p;M++){let b=0,v=0,T=0,E=0;if(M<=n){let L=M/n,R=L*Math.PI/2;v=-h-e*Math.cos(R),T=e*Math.sin(R),E=-e*Math.cos(R),b=L*f}else if(M<=n+r){let L=(M-n)/r;v=-h+L*t,T=e,E=0,b=f+L*d}else{let L=(M-n-r)/n,R=L*Math.PI/2;v=h+e*Math.sin(R),T=e*Math.cos(R),E=e*Math.sin(R),b=f+d+L*f}let x=Math.max(0,Math.min(1,b/u)),S=0;M===0?S=.5/s:M===p&&(S=-.5/s);for(let L=0;L<=s;L++){let R=L/s,D=R*Math.PI*2,z=Math.sin(D),q=Math.cos(D);m.x=-T*q,m.y=v,m.z=T*z,a.push(m.x,m.y,m.z),g.set(-T*q,E,T*z),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+S,x)}if(M>0){let L=(M-1)*_;for(let R=0;R<s;R++){let D=L+R,z=L+R+1,q=M*_+R,F=M*_+R+1;o.push(D,z,q),o.push(z,F,q)}}}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fi=class i extends yn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new k,h=new Fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let u=n+f/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},un=class i extends yn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(u,2));function M(){let v=new k,T=new k,E=0,x=(t-e)/n;for(let S=0;S<=r;S++){let L=[],R=S/r,D=R*(t-e)+e;for(let z=0;z<=s;z++){let q=z/s,F=q*c+a,N=Math.sin(F),G=Math.cos(F);T.x=D*N,T.y=-R*n+g,T.z=D*G,f.push(T.x,T.y,T.z),v.set(N,x,G).normalize(),d.push(v.x,v.y,v.z),u.push(q,1-R),L.push(p++)}_.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let R=_[L][S],D=_[L+1][S],z=_[L+1][S+1],q=_[L][S+1];(e>0||L!==0)&&(h.push(R,D,q),E+=3),(t>0||L!==r-1)&&(h.push(D,z,q),E+=3)}l.addGroup(m,E,0),m+=E}function b(v){let T=p,E=new Fe,x=new k,S=0,L=v===!0?e:t,R=v===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let F=z/s*c+a,N=Math.cos(F),G=Math.sin(F);x.x=L*G,x.y=g*R,x.z=L*N,f.push(x.x,x.y,x.z),d.push(0,R,0),E.x=N*.5+.5,E.y=G*.5*R+.5,u.push(E.x,E.y),p++}for(let z=0;z<s;z++){let q=T+z,F=D+z;v===!0?h.push(F,F+1,q):h.push(F+1,F,q),S+=3}l.addGroup(m,S,v===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vi=class i extends un{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Fe:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],o=[],a=new k,c=new Nt;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new k)}r[0]=new k,o[0]=new k;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Vt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,p))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Vt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],u*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},jr=class extends Li{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rl=class extends jr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+f)+(c-a)/f;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $d=new k,Zd=new k,Nh=new Eu,Uh=new Eu,Bh=new Eu,Qr=class extends Li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Zd.subVectors(s[0],s[1]).add(s[0]),l=Zd);let f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($d.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$d),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Nh.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,p,_,g),Uh.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,p,_,g),Bh.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Uh.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Bh.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Nh.calc(c),Uh.calc(c),Bh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Wp(i,e){let t=1-i;return t*t*e}function Xp(i,e){return 2*(1-i)*i*e}function qp(i,e){return i*i*e}function Fo(i,e,t,n){return Wp(i,e)+Xp(i,t)+qp(i,n)}function Yp(i,e){let t=1-i;return t*t*t*e}function $p(i,e){let t=1-i;return 3*t*t*i*e}function Zp(i,e){return 3*(1-i)*i*i*e}function Jp(i,e){return i*i*i*e}function Do(i,e,t,n,s){return Yp(i,e)+$p(i,t)+Zp(i,n)+Jp(i,s)}var Jo=class extends Li{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cl=class extends Li{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(e,s.x,r.x,o.x,a.x),Do(e,s.y,r.y,o.y,a.y),Do(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends Li{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends Li{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Li{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends Li{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fo(e,s.x,r.x,o.x),Fo(e,s.y,r.y,o.y),Fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Jd(a,c.x,l.x,h.x,f.x),Jd(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Qr,CubicBezierCurve:Jo,CubicBezierCurve3:Cl,EllipseCurve:jr,LineCurve:Ko,LineCurve3:Pl,QuadraticBezierCurve:jo,QuadraticBezierCurve3:Qo,SplineCurve:ea}),Ll=class extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Il[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ta=class extends Ll{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ko(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new jo(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Jo(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ea(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new jr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends ta{constructor(e){super(e),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ta().fromJSON(s))}return this}};function Kp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Kf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=nm(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,f=c;for(let d=t;d<s;d+=t){let u=i[d],p=i[d+1];u<a&&(a=u),p<c&&(c=p),u>h&&(h=u),p>f&&(f=p)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return na(r,o,t,a,c,l,0),o}function Kf(i,e,t,n,s){let r;if(s===fm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Kd(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Kd(o/n|0,i[o],i[o+1],r);return r&&eo(r,r.next)&&(sa(r),r=r.next),r}function cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||En(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(i,e,t,n,s,r,o){if(!i)return;!o&&r&&am(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Qp(i,n,s,r):jp(i)){e.push(c.i,i.i,l.i),sa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=em(cr(i),e),na(i,e,t,n,s,r,2)):o===2&&tm(i,e,t,n,s,r):na(cr(i),e,t,n,s,r,1);break}}}function jp(i){let e=i.prev,t=i,n=i.next;if(En(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),d=Math.max(s,r,o),u=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&Io(s,a,r,c,o,l,p.x,p.y)&&En(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Qp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(En(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,d=o.y,u=Math.min(a,c,l),p=Math.min(h,f,d),_=Math.max(a,c,l),g=Math.max(h,f,d),m=Wh(u,p,e,t,n),M=Wh(_,g,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=m&&v&&v.z<=M;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Io(a,h,c,f,l,d,b.x,b.y)&&En(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=u&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Io(a,h,c,f,l,d,v.x,v.y)&&En(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==o&&Io(a,h,c,f,l,d,b.x,b.y)&&En(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=M;){if(v.x>=u&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&Io(a,h,c,f,l,d,v.x,v.y)&&En(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function em(i,e){let t=i;do{let n=t.prev,s=t.next.next;!eo(n,s)&&Qf(n,t,t.next,s)&&ia(n,s)&&ia(s,n)&&(e.push(n.i,t.i,s.i),sa(t),sa(t.next),t=i=s),t=t.next}while(t!==i);return cr(t)}function tm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let c=e0(o,a);o=cr(o,o.next),c=cr(c,c.next),na(o,e,t,n,s,r,0),na(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nm(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Kf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(cm(l))}s.sort(im);for(let r=0;r<s.length;r++)t=sm(s[r],t);return t}function im(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function sm(i,e){let t=rm(i,e);if(!t)return e;let n=e0(t,i);return cr(n,n.next),cr(t,t.next)}function rm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(eo(i,t))return t;do{if(eo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&jf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ia(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&om(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function om(i,e){return En(i.prev,i,e.prev)<0&&En(e.next,i,i.next)<0}function am(i,e,t,n){let s=i;do s.z===0&&(s.z=Wh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lm(s)}function lm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Wh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Io(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&jf(i,e,t,n,s,r,o,a)}function hm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!um(i,e)&&(ia(i,e)&&ia(e,i)&&dm(i,e)&&(En(i.prev,i,e.prev)||En(i,e.prev,e))||eo(i,e)&&En(i.prev,i,i.next)>0&&En(e.prev,e,e.next)>0)}function En(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function eo(i,e){return i.x===e.x&&i.y===e.y}function Qf(i,e,t,n){let s=sl(En(i,e,t)),r=sl(En(i,e,n)),o=sl(En(t,n,i)),a=sl(En(t,n,e));return!!(s!==r&&o!==a||s===0&&il(i,t,e)||r===0&&il(i,n,e)||o===0&&il(t,i,n)||a===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function um(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ia(i,e){return En(i.prev,i,i.next)<0?En(i,e,i.next)>=0&&En(i,i.prev,e)>=0:En(i,e,i.prev)<0||En(i,i.next,e)<0}function dm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function e0(i,e){let t=Xh(i.i,i.x,i.y),n=Xh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kd(i,e,t,n){let s=Xh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qh=class{static triangulate(e,t,n=2){return Kp(e,t,n)}},rr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];jd(e),Qd(n,e);let o=e.length;t.forEach(jd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Qd(n,t[c]);let a=qh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fi=class i extends yn{constructor(e=new Mi([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Wt(s,3)),this.setAttribute("uv",new Wt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:u-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:pm,b,v=!1,T,E,x,S;if(m){b=m.getSpacedPoints(h),v=!0,d=!1;let fe=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,fe),E=new k,x=new k,S=new k}d||(g=0,u=0,p=0,_=0);let L=a.extractPoints(l),R=L.shape,D=L.holes;if(!rr.isClockWise(R)){R=R.reverse();for(let fe=0,Re=D.length;fe<Re;fe++){let we=D[fe];rr.isClockWise(we)&&(D[fe]=we.reverse())}}function q(fe){let we=10000000000000001e-36,We=fe[0];for(let ze=1;ze<=fe.length;ze++){let lt=ze%fe.length,je=fe[lt],_t=je.x-We.x,pt=je.y-We.y,St=_t*_t+pt*pt,Y=Math.max(Math.abs(je.x),Math.abs(je.y),Math.abs(We.x),Math.abs(We.y)),Dt=we*Y*Y;if(St<=Dt){fe.splice(lt,1),ze--;continue}We=je}}q(R),D.forEach(q);let F=D.length,N=R;for(let fe=0;fe<F;fe++){let Re=D[fe];R=R.concat(Re)}function G(fe,Re,we){return Re||vt("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(Re,we)}let W=R.length;function ue(fe,Re,we){let We,ze,lt,je=fe.x-Re.x,_t=fe.y-Re.y,pt=we.x-fe.x,St=we.y-fe.y,Y=je*je+_t*_t,Dt=je*St-_t*pt;if(Math.abs(Dt)>Number.EPSILON){let ht=Math.sqrt(Y),yt=Math.sqrt(pt*pt+St*St),Be=Re.x-_t/ht,Kt=Re.y+je/ht,O=we.x-St/yt,K=we.y+pt/yt,w=((O-Be)*St-(K-Kt)*pt)/(je*St-_t*pt);We=Be+je*w-fe.x,ze=Kt+_t*w-fe.y;let y=We*We+ze*ze;if(y<=2)return new Fe(We,ze);lt=Math.sqrt(y/2)}else{let ht=!1;je>Number.EPSILON?pt>Number.EPSILON&&(ht=!0):je<-Number.EPSILON?pt<-Number.EPSILON&&(ht=!0):Math.sign(_t)===Math.sign(St)&&(ht=!0),ht?(We=-_t,ze=je,lt=Math.sqrt(Y)):(We=je,ze=_t,lt=Math.sqrt(Y/2))}return new Fe(We/lt,ze/lt)}let ie=[];for(let fe=0,Re=N.length,we=Re-1,We=fe+1;fe<Re;fe++,we++,We++)we===Re&&(we=0),We===Re&&(We=0),ie[fe]=ue(N[fe],N[we],N[We]);let ae=[],ce,Ee=ie.concat();for(let fe=0,Re=F;fe<Re;fe++){let we=D[fe];ce=[];for(let We=0,ze=we.length,lt=ze-1,je=We+1;We<ze;We++,lt++,je++)lt===ze&&(lt=0),je===ze&&(je=0),ce[We]=ue(we[We],we[lt],we[je]);ae.push(ce),Ee=Ee.concat(ce)}let Le;if(g===0)Le=rr.triangulateShape(N,D);else{let fe=[],Re=[];for(let we=0;we<g;we++){let We=we/g,ze=u*Math.cos(We*Math.PI/2),lt=p*Math.sin(We*Math.PI/2)+_;for(let je=0,_t=N.length;je<_t;je++){let pt=G(N[je],ie[je],lt);Ue(pt.x,pt.y,-ze),We===0&&fe.push(pt)}for(let je=0,_t=F;je<_t;je++){let pt=D[je];ce=ae[je];let St=[];for(let Y=0,Dt=pt.length;Y<Dt;Y++){let ht=G(pt[Y],ce[Y],lt);Ue(ht.x,ht.y,-ze),We===0&&St.push(ht)}We===0&&Re.push(St)}}Le=rr.triangulateShape(fe,Re)}let oe=Le.length,be=p+_;for(let fe=0;fe<W;fe++){let Re=d?G(R[fe],Ee[fe],be):R[fe];v?(x.copy(T.normals[0]).multiplyScalar(Re.x),E.copy(T.binormals[0]).multiplyScalar(Re.y),S.copy(b[0]).add(x).add(E),Ue(S.x,S.y,S.z)):Ue(Re.x,Re.y,0)}for(let fe=1;fe<=h;fe++)for(let Re=0;Re<W;Re++){let we=d?G(R[Re],Ee[Re],be):R[Re];v?(x.copy(T.normals[fe]).multiplyScalar(we.x),E.copy(T.binormals[fe]).multiplyScalar(we.y),S.copy(b[fe]).add(x).add(E),Ue(S.x,S.y,S.z)):Ue(we.x,we.y,f/h*fe)}for(let fe=g-1;fe>=0;fe--){let Re=fe/g,we=u*Math.cos(Re*Math.PI/2),We=p*Math.sin(Re*Math.PI/2)+_;for(let ze=0,lt=N.length;ze<lt;ze++){let je=G(N[ze],ie[ze],We);Ue(je.x,je.y,f+we)}for(let ze=0,lt=D.length;ze<lt;ze++){let je=D[ze];ce=ae[ze];for(let _t=0,pt=je.length;_t<pt;_t++){let St=G(je[_t],ce[_t],We);v?Ue(St.x,St.y+b[h-1].y,b[h-1].x+we):Ue(St.x,St.y,f+we)}}}ee(),xe();function ee(){let fe=s.length/3;if(d){let Re=0,we=W*Re;for(let We=0;We<oe;We++){let ze=Le[We];Ge(ze[2]+we,ze[1]+we,ze[0]+we)}Re=h+g*2,we=W*Re;for(let We=0;We<oe;We++){let ze=Le[We];Ge(ze[0]+we,ze[1]+we,ze[2]+we)}}else{for(let Re=0;Re<oe;Re++){let we=Le[Re];Ge(we[2],we[1],we[0])}for(let Re=0;Re<oe;Re++){let we=Le[Re];Ge(we[0]+W*h,we[1]+W*h,we[2]+W*h)}}n.addGroup(fe,s.length/3-fe,0)}function xe(){let fe=s.length/3,Re=0;ye(N,Re),Re+=N.length;for(let we=0,We=D.length;we<We;we++){let ze=D[we];ye(ze,Re),Re+=ze.length}n.addGroup(fe,s.length/3-fe,1)}function ye(fe,Re){let we=fe.length;for(;--we>=0;){let We=we,ze=we-1;ze<0&&(ze=fe.length-1);for(let lt=0,je=h+g*2;lt<je;lt++){let _t=W*lt,pt=W*(lt+1),St=Re+We+_t,Y=Re+ze+_t,Dt=Re+ze+pt,ht=Re+We+pt;Ne(St,Y,Dt,ht)}}}function Ue(fe,Re,we){c.push(fe),c.push(Re),c.push(we)}function Ge(fe,Re,we){Ye(fe),Ye(Re),Ye(we);let We=s.length/3,ze=M.generateTopUV(n,s,We-3,We-2,We-1);tt(ze[0]),tt(ze[1]),tt(ze[2])}function Ne(fe,Re,we,We){Ye(fe),Ye(Re),Ye(We),Ye(Re),Ye(we),Ye(We);let ze=s.length/3,lt=M.generateSideWallUV(n,s,ze-6,ze-3,ze-2,ze-1);tt(lt[0]),tt(lt[1]),tt(lt[3]),tt(lt[1]),tt(lt[2]),tt(lt[3])}function Ye(fe){s.push(c[fe*3+0]),s.push(c[fe*3+1]),s.push(c[fe*3+2])}function tt(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Il[s.type]().fromJSON(s)),new i(n,e.options)}},pm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Fe(r,o),new Fe(a,c),new Fe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Fe(o,1-c),new Fe(l,1-f),new Fe(d,1-p),new Fe(_,1-m)]:[new Fe(a,1-c),new Fe(h,1-f),new Fe(u,1-p),new Fe(g,1-m)]}};function mm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ra=class i extends yn{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Vt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,f=new k,d=new Fe,u=new k,p=new k,_=new k,g=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,_.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:g=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,u.x=m*1,u.y=-g,u.z=m*0,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),c.push(u.x,u.y,u.z),_.copy(p)}for(let M=0;M<=t;M++){let b=n+M*h*s,v=Math.sin(b),T=Math.cos(b);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*v,f.y=e[E].y,f.z=e[E].x*T,o.push(f.x,f.y,f.z),d.x=M/t,d.y=E/(e.length-1),a.push(d.x,d.y);let x=c[3*E+0]*v,S=c[3*E+1],L=c[3*E+0]*T;l.push(x,S,L)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let v=b+M*e.length,T=v,E=v+e.length,x=v+e.length+1,S=v+1;r.push(T,E,S),r.push(x,S,E)}this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class i extends yn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,d=t/c,u=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*d-o;for(let b=0;b<l;b++){let v=b*f-r;p.push(v,-M,0),_.push(0,0,1),g.push(b/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let b=M+l*m,v=M+l*(m+1),T=M+1+l*(m+1),E=M+1+l*m;u.push(b,v,E),u.push(v,T,E)}this.setIndex(u),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var tn=class i extends yn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new k,d=new k,u=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],b=m/n,v=o+b*a,T=e*Math.cos(v),E=Math.sqrt(e*e-T*T),x=0;m===0&&o===0?x=.5/t:m===n&&c===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let L=S/t,R=s+L*r;f.x=-E*Math.cos(R),f.y=T,f.z=E*Math.sin(R),p.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(L+x,1-b),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let b=h[m][M+1],v=h[m][M],T=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&u.push(b,v,E),(m!==n-1||c<Math.PI)&&u.push(v,T,E)}this.setIndex(u),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pi=class i extends yn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new k,u=new k,p=new k;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=s;m++){let M=m/s*r;u.x=(e+t*Math.cos(g))*Math.cos(M),u.y=(e+t*Math.cos(g))*Math.sin(M),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(m/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,v=(s+1)*_+g;c.push(m,M,v),c.push(M,b,v)}this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var oa=class i extends yn{constructor(e=new Qo(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,c=new k,l=new Fe,h=new k,f=[],d=[],u=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(u,2));function _(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),M(),m()}function g(b){h=e.getPointAt(b/t,h);let v=o.normals[b],T=o.binormals[b];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,S=Math.sin(x),L=-Math.cos(x);c.x=L*v.x+S*T.x,c.y=L*v.y+S*T.y,c.z=L*v.z+S*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let T=(s+1)*(b-1)+(v-1),E=(s+1)*b+(v-1),x=(s+1)*b+v,S=(s+1)*(b-1)+v;p.push(T,E,S),p.push(E,x,S)}}function M(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)l.x=b/t,l.y=v/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ef(s))s.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ef(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function li(i){let e={};for(let t=0;t<i.length;t++){let n=mr(i[t]);for(let s in n)e[s]=n[s]}return e}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$t.workingColorSpace}var t0={clone:mr,merge:li},xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Fl=class extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var to=class extends Ji{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dl=class extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Br(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ul=class extends Xs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:r=e,a=2*t-n;break;case Gh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zh:o=e,c=2*n-t;break;case Gh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-u)*g+(1.5+u)*_+.5*p,v=u*g-u*_;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+M*o[l+T]+b*o[c+T]+v*o[f+T];return r}},Bl=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},Ol=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kl=class extends Xs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(s-t),_=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*_+o[c+g]*p;return r}let d=a*2,u=e-1;for(let p=0;p!==a;++p){let _=o[l+p],g=o[c+p],m=u*d+p*2,M=f[m],b=f[m+1],v=e*d+p*2,T=h[v],E=h[v+1],x=vm(n,t,M,T,s);r[p]=n0(x,_,b,E,g)}return r}};function n0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _m(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function vm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=n0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=_m(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Di=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Br(t,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Br(e.times,Array),values:Br(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),rl(e.settings)&&(n.settings={inTangents:Br(e.settings.inTangents,Array),outTangents:Br(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new kl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case _l:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break;case kh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;rl(this.settings)&&(tf(this.settings.inTangents,e),tf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;rl(this.settings)&&(nf(this.settings.inTangents,e),nf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(vt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(vt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){vt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){vt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ep(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){vt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let _=t[f+p];if(_!==t[d+p]||_!==t[u+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function tf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=_l;var qs=class extends Di{constructor(e,t,n){super(e,t,n)}};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=No;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};Hl.prototype.ValueTypeName="color";var zl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};zl.prototype.ValueTypeName="number";var Gl=class extends Xs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},aa=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Di{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=No;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}};Vl.prototype.ValueTypeName="vector";var Wl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],p=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i0=new Wl,Xl=class{constructor(e){this.manager=e!==void 0?e:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends sn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Oh=new Nt,sf=new k,rf=new k,ql=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Gr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ol=new k,al=new Xn,ss=new k,ca=class extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ol,al,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,al,ss.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ol,al,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ol,al,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new k,of=new Fe,af=new Fe,oi=class extends ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var hr=class extends ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yh=class extends ql{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ha=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new Yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ua=class extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Or=-90,kr=1,no=class extends sn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new oi(Or,kr,e,t);s.layers=this.layers,this.add(s);let r=new oi(Or,kr,e,t);r.layers=this.layers,this.add(r);let o=new oi(Or,kr,e,t);o.layers=this.layers,this.add(o);let a=new oi(Or,kr,e,t);a.layers=this.layers,this.add(a);let c=new oi(Or,kr,e,t);c.layers=this.layers,this.add(c);let l=new oi(Or,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Yl=class extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var wu="\\[\\]\\.:\\/",Mm=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",Sm="[^"+wu.replace("\\.","")+"]",Em=/((?:WC+[\/:])*)/.source.replace("WC",Tu),bm=/(WCOD+)?/.source.replace("WCOD",Sm),wm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),Am=new RegExp("^"+Em+bm+wm+Tm+"$"),Rm=["material","materials","bones","map"],$h=class{constructor(e,t,n){let s=n||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(e){let t=Am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;vt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=$h;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var lf=new Nt,da=class{constructor(e,t,n=0,s=1/0){this.ray=new ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(e,t=!0,n=[]){return Zh(e,this,n,t),n.sort(cf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zh(e[s],this,n,t);return n.sort(cf),n}};function cf(i,e){return i.distance-e.distance}function Zh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Zh(r[o],e,t,!0)}}var Lu=class Lu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Lu.prototype.isMatrix2=!0;var Jh=Lu;function Au(i,e,t,n){let s=Cm(n);switch(t){case gu:return i*e;case ao:return i*e/s.components*s.byteLength;case tc:return i*e/s.components*s.byteLength;case Zs:return i*e*2/s.components*s.byteLength;case nc:return i*e*2/s.components*s.byteLength;case xu:return i*e*3/s.components*s.byteLength;case Qi:return i*e*4/s.components*s.byteLength;case ic:return i*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:case ac:return Math.max(i,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(i,8)*Math.max(e,8)/2;case lc:case cc:case uc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hc:case _a:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case va:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(i){switch(i){case Si:case du:return{byteLength:1,components:1};case oo:case fu:case ji:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Ki:case jl:case zi:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function w0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nm(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],_=f[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let _=f[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",d1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,A1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,F1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,s2=`#ifdef USE_NORMALMAP
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
#endif`,r2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,u2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,_2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,v2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,M2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,E2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b2=`#ifdef USE_SKINNING
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
#endif`,w2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R2=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C2=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P2=`#ifdef USE_TRANSMISSION
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,D2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U2=`uniform sampler2D t2D;
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
}`,B2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`#include <common>
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
}`,G2=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V2=`#define DISTANCE
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
}`,W2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`uniform float scale;
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
}`,$2=`uniform vec3 diffuse;
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
}`,Z2=`#include <common>
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
}`,J2=`uniform vec3 diffuse;
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
}`,K2=`#define LAMBERT
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
}`,j2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Q2=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rg=`#define STANDARD
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
}`,og=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,ag=`#define TOON
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
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,pg=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Um,alphahash_pars_fragment:Bm,alphamap_fragment:Om,alphamap_pars_fragment:km,alphatest_fragment:Hm,alphatest_pars_fragment:zm,aomap_fragment:Gm,aomap_pars_fragment:Vm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:$m,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:e1,color_fragment:t1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:s1,common:r1,defaultnormal_vertex:o1,displacementmap_pars_vertex:a1,displacementmap_vertex:l1,emissivemap_fragment:c1,emissivemap_pars_fragment:h1,colorspace_fragment:u1,colorspace_pars_fragment:d1,envmap_fragment:f1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:A1,envmap_vertex:x1,fog_vertex:y1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:M1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:E1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:w1,lights_pars_begin:T1,lights_toon_fragment:R1,lights_toon_pars_fragment:C1,lights_phong_fragment:P1,lights_phong_pars_fragment:I1,lights_physical_fragment:L1,lights_physical_pars_fragment:F1,lights_fragment_begin:D1,lights_fragment_maps:N1,lights_fragment_end:U1,lightprobes_pars_fragment:B1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:z1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:W1,map_particle_pars_fragment:X1,metalnessmap_fragment:q1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:$1,morphcolor_vertex:Z1,morphnormal_vertex:J1,morphtarget_pars_vertex:K1,morphtarget_vertex:j1,normal_fragment_begin:Q1,normal_fragment_maps:e2,normal_pars_fragment:t2,normal_pars_vertex:n2,normal_vertex:i2,normalmap_pars_fragment:s2,clearcoat_normal_fragment_begin:r2,clearcoat_normal_fragment_maps:o2,clearcoat_pars_fragment:a2,iridescence_pars_fragment:l2,opaque_fragment:c2,packing:h2,premultiplied_alpha_fragment:u2,project_vertex:d2,dithering_fragment:f2,dithering_pars_fragment:p2,roughnessmap_fragment:m2,roughnessmap_pars_fragment:g2,shadowmap_pars_fragment:x2,shadowmap_pars_vertex:y2,shadowmap_vertex:_2,shadowmask_pars_fragment:v2,skinbase_vertex:M2,skinning_pars_vertex:S2,skinning_vertex:E2,skinnormal_vertex:b2,specularmap_fragment:w2,specularmap_pars_fragment:T2,tonemapping_fragment:A2,tonemapping_pars_fragment:R2,transmission_fragment:C2,transmission_pars_fragment:P2,uv_pars_fragment:I2,uv_pars_vertex:L2,uv_vertex:F2,worldpos_vertex:D2,background_vert:N2,background_frag:U2,backgroundCube_vert:B2,backgroundCube_frag:O2,cube_vert:k2,cube_frag:H2,depth_vert:z2,depth_frag:G2,distance_vert:V2,distance_frag:W2,equirect_vert:X2,equirect_frag:q2,linedashed_vert:Y2,linedashed_frag:$2,meshbasic_vert:Z2,meshbasic_frag:J2,meshlambert_vert:K2,meshlambert_frag:j2,meshmatcap_vert:Q2,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},it={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},hs={basic:{uniforms:li([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:li([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:li([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:li([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:li([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new et(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:li([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:li([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:li([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:li([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:li([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:li([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:li([it.common,it.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:li([it.lights,it.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};hs.physical={uniforms:li([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Uc={r:0,b:0,g:0},mg=new Nt,T0=new Tt;T0.set(-1,0,0,0,1,0,0,0,1);function gg(i,e,t,n,s,r){let o=new et(0),a=s===!0?0:1,c,l,h=null,f=0,d=null;function u(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let v=M.backgroundBlurriness>0;b=e.get(b,v)}return b}function p(M){let b=!1,v=u(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,b){let v=u(b);v&&v.isCubeTexture?(l===void 0&&(l=new $e(new ai(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:mr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(T0),l.material.toneMapped=$t.getTransfer(v.colorSpace)!==nn,(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new $e(new Ft(2,2),new mi({name:"BackgroundMaterial",uniforms:mr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=$t.getTransfer(v.colorSpace)!==nn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,b){M.getRGB(Uc,bu(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:_,dispose:m}}function xg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(D,z,q,F,N){let G=!1,W=f(D,F,q,z);r!==W&&(r=W,l(r.object)),G=u(D,F,q,N),G&&p(D,F,q,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(D,z,q,F),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,z,q,F){let N=F.wireframe===!0,G=n[z.id];G===void 0&&(G={},n[z.id]=G);let W=D.isInstancedMesh===!0?D.id:0,ue=G[W];ue===void 0&&(ue={},G[W]=ue);let ie=ue[q.id];ie===void 0&&(ie={},ue[q.id]=ie);let ae=ie[N];return ae===void 0&&(ae=d(c()),ie[N]=ae),ae}function d(D){let z=[],q=[],F=[];for(let N=0;N<t;N++)z[N]=0,q[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:F,object:D,attributes:{},index:null}}function u(D,z,q,F){let N=r.attributes,G=z.attributes,W=0,ue=q.getAttributes();for(let ie in ue)if(ue[ie].location>=0){let ce=N[ie],Ee=G[ie];if(Ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function p(D,z,q,F){let N={},G=z.attributes,W=0,ue=q.getAttributes();for(let ie in ue)if(ue[ie].location>=0){let ce=G[ie];ce===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));let Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),N[ie]=Ee,W++}r.attributes=N,r.attributesNum=W,r.index=F}function _(){let D=r.newAttributes;for(let z=0,q=D.length;z<q;z++)D[z]=0}function g(D){m(D,0)}function m(D,z){let q=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;q[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),N[D]!==z&&(i.vertexAttribDivisor(D,z),N[D]=z)}function M(){let D=r.newAttributes,z=r.enabledAttributes;for(let q=0,F=z.length;q<F;q++)z[q]!==D[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function b(D,z,q,F,N,G,W){W===!0?i.vertexAttribIPointer(D,z,q,N,G):i.vertexAttribPointer(D,z,q,F,N,G)}function v(D,z,q,F){_();let N=F.attributes,G=q.getAttributes(),W=z.defaultAttributeValues;for(let ue in G){let ie=G[ue];if(ie.location>=0){let ae=N[ue];if(ae===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){let ce=ae.normalized,Ee=ae.itemSize,Le=e.get(ae);if(Le===void 0)continue;let oe=Le.buffer,be=Le.type,ee=Le.bytesPerElement,xe=be===i.INT||be===i.UNSIGNED_INT||ae.gpuType===jl;if(ae.isInterleavedBufferAttribute){let ye=ae.data,Ue=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Ge=ae.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ne=0;Ne<ie.locationSize;Ne++)m(ie.location+Ne,ye.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)g(ie.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Ne=0;Ne<ie.locationSize;Ne++)b(ie.location+Ne,Ee/ie.locationSize,be,ce,Ue*ee,(Ge+Ee/ie.locationSize*Ne)*ee,xe)}else{if(ae.isInstancedBufferAttribute){for(let ye=0;ye<ie.locationSize;ye++)m(ie.location+ye,ae.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ye=0;ye<ie.locationSize;ye++)g(ie.location+ye);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ye=0;ye<ie.locationSize;ye++)b(ie.location+ye,Ee/ie.locationSize,be,ce,Ee*ee,Ee/ie.locationSize*ye*ee,xe)}}else if(W!==void 0){let ce=W[ue];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ie.location,ce);break;case 3:i.vertexAttrib3fv(ie.location,ce);break;case 4:i.vertexAttrib4fv(ie.location,ce);break;default:i.vertexAttrib1fv(ie.location,ce)}}}}M()}function T(){L();for(let D in n){let z=n[D];for(let q in z){let F=z[q];for(let N in F){let G=F[N];for(let W in G)h(G[W].object),delete G[W];delete F[N]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let q in z){let F=z[q];for(let N in F){let G=F[N];for(let W in G)h(G[W].object),delete G[W];delete F[N]}}delete n[D.id]}function x(D){for(let z in n){let q=n[z];for(let F in q){let N=q[F];if(N[D.id]===void 0)continue;let G=N[D.id];for(let W in G)h(G[W].object),delete G[W];delete N[D.id]}}}function S(D){for(let z in n){let q=n[z],F=D.isInstancedMesh===!0?D.id:0,N=q[F];if(N!==void 0){for(let G in N){let W=N[G];for(let ue in W)h(W[ue].object),delete W[ue];delete N[G]}delete q[F],Object.keys(q).length===0&&delete n[z]}}}function L(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function yg(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _g(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Qi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Si&&x!==zi&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(xt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:E}}function vg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ii,a=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let M=r?0:n,b=M*4,v=m.clippingState||null;c.value=v,v=h(p,d,b,u);for(let T=0;T!==b;++T)v[T]=t[T];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,p){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=u+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,v=u;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ea=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:ur});r.uniforms.tEquirect.value=t;let o=new $e(s,r),a=t.minFilter;return t.minFilter===bs&&(t.minFilter=ui),new no(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},s0=256,Mg=3,Sg=20,A0=256,R0=16,Eg=3,bg=new k,wg=new et,Oc=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new no(1,10,null),this._boxMesh=new $e(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=bg}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(wg));let g=new no(n,s,h);return g.position.copy(a),g.update(c,e),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(s0,qf(e))}_fromTexture(e,t){e.mapping===fr||e.mapping===ro?this._setSize(e.image.length===0?s0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=r0(e,!1,!1),n=Math.log2(e)-Mg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=r0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fr||e.mapping===ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=o0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Tg(),this._integrationMaterial=Ag());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/R0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Eg)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(A0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Rg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function r0(i,e,t){return new Ea(i,{minFilter:bs,generateMipmaps:e,type:ji,colorSpace:Uo,depthBuffer:t})}function ba(i,e,t){return new mi({name:i,uniforms:e,vertexShader:Ut.cube_vert,fragmentShader:t,side:kn,blending:ur,depthTest:!1,depthWrite:!1})}function Tg(){return ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${A0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ag(){return ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:R0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rg(){return ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function o0(){return ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function a0(){return ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Zl||u===Jl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Ea(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,p=u===Zl||u===Jl,_=u===fr||u===ro;if(p||_){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Oc(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let M=d.image;return p&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new Oc(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,u){return u===Zl?d.mapping=fr:u===Jl&&(d.mapping=ro),d}function c(d){let u=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&u++;return u===p}function l(d){let u=d.target;u.removeEventListener("dispose",l);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Pg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Lo("WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let g in _)e.update(_[g],i.ARRAY_BUFFER)}function f(p){let _=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let M=_!==null?_.array.length:g.array.length/3-1,b=g.count>=65535?Go:zo,v=new b(Math.ceil(M/3)*6,1),T=v.array;if(_!==null){let x=_.array;m=_.version;for(let S=0,L=0;S<M;S+=3){let R=x[S+0],D=x[S+1],z=x[S+2];T[L++]=R,T[L++]=D,T[L++]=D,T[L++]=z,T[L++]=z,T[L++]=R}}else{m=g.version;for(let x=0,S=0;x<M;x+=3){let L=x+0,R=x+1,D=x+2;T[S++]=L,T[S++]=R,T[S++]=R,T[S++]=D,T[S++]=D,T[S++]=L}}v.version=m;let E=r.get(p);E&&e.remove(E),r.set(p,v)}function d(p){let _=r.get(p);if(_){let g=p.index;g!==null&&_.version<g.version&&f(p)}else f(p);return r.get(p)}function u(){for(let p in s){let _=s[p].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Lg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*o,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Fg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dg(i,e,t){let n=new WeakMap,s=new fn;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let L=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*T*4*f),x=new Ho(E,v,T,f);x.type=zi,x.needsUpdate=!0;let S=b*4;for(let R=0;R<f;R++){let D=g[R],z=m[R],q=M[R],F=v*T*4*R;for(let N=0;N<D.count;N++){let G=N*S;u===!0&&(s.fromBufferAttribute(D,N),E[F+G+0]=s.x,E[F+G+1]=s.y,E[F+G+2]=s.z,E[F+G+3]=0),p===!0&&(s.fromBufferAttribute(z,N),E[F+G+4]=s.x,E[F+G+5]=s.y,E[F+G+6]=s.z,E[F+G+7]=0),_===!0&&(s.fromBufferAttribute(q,N),E[F+G+8]=s.x,E[F+G+9]=s.y,E[F+G+10]=s.z,E[F+G+11]=q.itemSize===4?s.w:1)}}d={count:f,texture:x,size:new Fe(v,T)},n.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let p=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ng(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ug={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[ou]:"CINEON_TONE_MAPPING",[au]:"ACES_FILMIC_TONE_MAPPING",[cu]:"AGX_TONE_MAPPING",[hu]:"NEUTRAL_TONE_MAPPING",[lu]:"CUSTOM_TONE_MAPPING"};function Bg(i,e,t,n,s,r){let o=new jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new yn;h.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let f=new Fl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $e(h,f),u=new hr(-1,1,1,-1,0,1),p=null,_=null,g=!1,m,M=null,b=[],v=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),c!==null&&c.setSize(T,E);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){b=T,v=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new jn(E,x,{type:ji,depthBuffer:!1,stencilBuffer:!1}),c=new jn(E,x,{type:ji,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(L=>L.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new Es(E,x),r===!0&&(l.format=ws,l.type=pr)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let L=0;L<b.length;L++){let R=b[L];R.setSize&&R.setSize(E,x),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,E){if(g||T.toneMapping===ls&&b.length===0)return!1;if(M=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return v===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=ls,!0},this.hasRenderPass=function(){return v},this.end=function(T,E){T.toneMapping=m,g=!0;let x=o,S=a;for(let L=0;L<b.length;L++){let R=b[L];R.enabled!==!1&&(R.render(T,S,x,E),R.needsSwap!==!1&&(x=S,S=S===a?c:a))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,f.defines={},$t.getTransfer(p)===nn&&(f.defines.SRGB_TRANSFER="");let L=Ug[_];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(M),T.render(d,u),M=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var C0=new di,P0=new Es(1,1),I0=new Yo(1),L0=new Ho,F0=new El,D0=new qo,l0=[],c0=[],h0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function co(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=l0[s];if(r===void 0&&(r=new Float32Array(s),l0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2fv(this.addr,e),zn(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Hn(t,e))return;i.uniform3fv(this.addr,e),zn(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4fv(this.addr,e),zn(t,e)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(Hn(t,n))return;d0.set(n),i.uniformMatrix2fv(this.addr,!1,d0),zn(t,n)}}function Vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(Hn(t,n))return;u0.set(n),i.uniformMatrix3fv(this.addr,!1,u0),zn(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(Hn(t,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),zn(t,n)}}function Xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2iv(this.addr,e),zn(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3iv(this.addr,e),zn(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4iv(this.addr,e),zn(t,e)}}function Zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Hn(t,e))return;i.uniform2uiv(this.addr,e),zn(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Hn(t,e))return;i.uniform3uiv(this.addr,e),zn(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Hn(t,e))return;i.uniform4uiv(this.addr,e),zn(t,e)}}function zc(i){return i.version===0&&(i.compareFunction=vu,i.needsUpdate=!0),i}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=zc(P0):r=C0,t.setTexture2D(e||r,s)}function e3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||F0,s)}function t3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=zc(I0):r=D0,t.setTextureCube(e||r,s)}function n3(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||L0,s)}function i3(i){switch(i){case 5126:return Og;case 35664:return kg;case 35665:return Hg;case 35666:return zg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return Zg;case 36294:return Jg;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}function s3(i,e){i.uniform1fv(this.addr,e)}function r3(i,e){let t=co(e,this.size,2);i.uniform2fv(this.addr,t)}function o3(i,e){let t=co(e,this.size,3);i.uniform3fv(this.addr,t)}function a3(i,e){let t=co(e,this.size,4);i.uniform4fv(this.addr,t)}function l3(i,e){let t=co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c3(i,e){let t=co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h3(i,e){let t=co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u3(i,e){i.uniform1iv(this.addr,e)}function d3(i,e){i.uniform2iv(this.addr,e)}function f3(i,e){i.uniform3iv(this.addr,e)}function p3(i,e){i.uniform4iv(this.addr,e)}function m3(i,e){i.uniform1uiv(this.addr,e)}function g3(i,e){i.uniform2uiv(this.addr,e)}function x3(i,e){i.uniform3uiv(this.addr,e)}function y3(i,e){i.uniform4uiv(this.addr,e)}function _3(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zc(P0):o=C0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function v3(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||F0,r[o])}function M3(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=zc(I0):o=D0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function S3(i,e,t){let n=this.cache,s=e.length,r=Hc(t,s);Hn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||L0,r[o])}function E3(i){switch(i){case 5126:return s3;case 35664:return r3;case 35665:return o3;case 35666:return a3;case 35674:return l3;case 35675:return c3;case 35676:return h3;case 5124:case 35670:return u3;case 35667:case 35671:return d3;case 35668:case 35672:return f3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return g3;case 36295:return x3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return v3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return S3}}var Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i3(t.type)}},Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E3(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function f0(i,e){i.seq.push(e),i.map[e.id]=e}function b3(i,e,t){let n=i.name,s=n.length;for(Fu.lastIndex=0;;){let r=Fu.exec(n),o=Fu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){f0(t,l===void 0?new Nu(a,i,e):new Uu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Bu(a),f0(t,f)),t=f}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);b3(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function p0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var w3=37297,T3=0;function A3(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var m0=new Tt;function R3(i){$t._getMatrix(m0,$t.workingColorSpace,i);let e=`mat3( ${m0.elements.map(t=>t.toFixed(4))} )`;switch($t.getTransfer(i)){case Bo:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function g0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+A3(i.getShaderSource(e),a)}else return r}function C3(i,e){let t=R3(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var P3={[su]:"Linear",[ru]:"Reinhard",[ou]:"Cineon",[au]:"ACESFilmic",[cu]:"AgX",[hu]:"Neutral",[lu]:"Custom"};function I3(i,e){let t=P3[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bc=new k;function L3(){$t.getLuminanceCoefficients(Bc);let i=Bc.x.toFixed(4),e=Bc.y.toFixed(4),t=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function D3(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N3(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sa(i){return i!==""}function x0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function y0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(i){return i.replace(U3,B3)}function B3(i,e){let t=Ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ou(t)}var O3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(i){return i.replace(O3,k3)}function k3(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var H3={[fa]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function z3(i){return H3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G3={[ro]:"ENVMAP_MODE_REFRACTION"};function V3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":G3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var W3={[iu]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function X3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":W3[i.combine]||"ENVMAP_BLENDING_NONE"}function q3(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=z3(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=V3(t),f=X3(t),d=F3(t),u=D3(r),p=s.createProgram(),_,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Sa).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Sa).join(`
`),g.length>0&&(g+=`
`)):(_=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),g=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?Ut.tonemapping_pars_fragment:"",t.toneMapping!==ls?I3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,C3("linearToOutputTexel",t.outputColorSpace),L3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Ou(o),o=x0(o,t),o=y0(o,t),a=Ou(a),a=x0(a,t),a=y0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=m+_+o,b=m+g+a,v=p0(s,s.VERTEX_SHADER,M),T=p0(s,s.FRAGMENT_SHADER,b);s.attachShader(p,v),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",q=s.getShaderInfoLog(T)||"",F=D.trim(),N=z.trim(),G=q.trim(),W=!0,ue=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,T);else{let ie=g0(s,v,"vertex"),ae=g0(s,T,"fragment");vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ie+`
`+ae)}else F!==""?xt("WebGLProgram: Program Info Log:",F):(N===""||G==="")&&(ue=!1);ue&&(R.diagnostics={runnable:W,programLog:F,vertexShader:{log:N,prefix:_},fragmentShader:{log:G,prefix:g}})}s.deleteShader(v),s.deleteShader(T),x=new lo(s,p),S=N3(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,w3)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T3++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}var Y3=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hu(e),t.set(e,n)),n}},Hu=class{constructor(e){this.id=Y3++,this.code=e,this.usedTimes=0}};function $3(i){return i===Zs||i===_a||i===va}function Z3(i,e,t,n,s,r){let o=new Xr,a=new ku,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,L,R,D,z){let q=R.fog,F=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||N,G),ue=d[x.type],ie=n.precision;x.precision!==null&&(ie=n.getMaxPrecision(x.precision),ie!==x.precision&&xt("WebGLProgram.getParameters:",x.precision,"not supported, using",ie,"instead."));let ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ce=ae!==void 0?ae.length:0,Ee=0;F.morphAttributes.position!==void 0&&(Ee=1),F.morphAttributes.normal!==void 0&&(Ee=2),F.morphAttributes.color!==void 0&&(Ee=3);let Le,oe,be,ee;if(ue){let Ae=hs[ue];Le=Ae.vertexShader,oe=Ae.fragmentShader}else{Le=x.vertexShader,oe=x.fragmentShader;let Ae=a.getVertexShaderStage(x),Q=a.getFragmentShaderStage(x);a.update(x,Ae,Q),be=Ae.id,ee=Q.id}let xe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ue=D.isInstancedMesh===!0,Ge=D.isBatchedMesh===!0,Ne=!!x.map,Ye=!!x.matcap,tt=!!W,fe=tt&&W.isPMREMTexture===!0,Re=!!x.aoMap,we=!!x.lightMap,We=!!x.bumpMap&&x.wireframe===!1,ze=!!x.normalMap,lt=!!x.displacementMap,je=!!x.emissiveMap,_t=!!x.metalnessMap,pt=!!x.roughnessMap,St=x.anisotropy>0,Y=x.clearcoat>0,Dt=x.diffuseRoughness>0,ht=x.dispersion>0,yt=x.retroreflectivity>0,Be=x.iridescence>0,Kt=x.sheen>0,O=x.transmission>0,K=St&&!!x.anisotropyMap,w=Y&&!!x.clearcoatMap,y=Y&&!!x.clearcoatNormalMap,U=Y&&!!x.clearcoatRoughnessMap,C=Dt&&!!x.diffuseRoughnessMap,I=Be&&!!x.iridescenceMap,H=Be&&!!x.iridescenceThicknessMap,$=Kt&&!!x.sheenColorMap,B=Kt&&!!x.sheenRoughnessMap,X=!!x.specularMap,te=!!x.specularColorMap,P=!!x.specularIntensityMap,Z=O&&!!x.transmissionMap,J=O&&!!x.thicknessMap,j=!!x.gradientMap,re=!!x.alphaMap,me=x.alphaTest>0,ge=!!x.alphaHash,ke=!!x.extensions,de=ls;x.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(de=i.toneMapping);let Ce=fe?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Se={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Le,fragmentShader:oe,defines:x.defines,customVertexShaderID:be,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:ie,batching:Ge,batchingColor:Ge&&D._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:Ye,envMap:tt,envMapMode:tt&&W.mapping,envMapPMREM:fe,envMapMaxLod:fe?Ce.length-1:null,envMapSize:fe?Ce[0].width:null,aoMap:Re,lightMap:we,bumpMap:We,normalMap:ze,displacementMap:lt,emissiveMap:je,normalMapObjectSpace:ze&&x.normalMapType===Nf,normalMapTangentSpace:ze&&x.normalMapType===Dc,packedNormalMap:ze&&x.normalMapType===Dc&&$3(x.normalMap.format),metalnessMap:_t,roughnessMap:pt,anisotropy:St,anisotropyMap:K,clearcoat:Y,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:U,diffuseRoughness:Dt,diffuseRoughnessMap:C,dispersion:ht,retroreflection:yt,iridescence:Be,iridescenceMap:I,iridescenceThicknessMap:H,sheen:Kt,sheenColorMap:$,sheenRoughnessMap:B,specularMap:X,specularColorMap:te,specularIntensityMap:P,transmission:O,transmissionMap:Z,thicknessMap:J,gradientMap:j,opaque:x.transparent===!1&&x.blending===so&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:me,alphaHash:ge,combine:x.combine,mapUv:Ne&&u(x.map.channel),aoMapUv:Re&&u(x.aoMap.channel),lightMapUv:we&&u(x.lightMap.channel),bumpMapUv:We&&u(x.bumpMap.channel),normalMapUv:ze&&u(x.normalMap.channel),displacementMapUv:lt&&u(x.displacementMap.channel),emissiveMapUv:je&&u(x.emissiveMap.channel),metalnessMapUv:_t&&u(x.metalnessMap.channel),roughnessMapUv:pt&&u(x.roughnessMap.channel),anisotropyMapUv:K&&u(x.anisotropyMap.channel),clearcoatMapUv:w&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:C&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:I&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:H&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:$&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:B&&u(x.sheenRoughnessMap.channel),specularMapUv:X&&u(x.specularMap.channel),specularColorMapUv:te&&u(x.specularColorMap.channel),specularIntensityMapUv:P&&u(x.specularIntensityMap.channel),transmissionMapUv:Z&&u(x.transmissionMap.channel),thicknessMapUv:J&&u(x.thicknessMap.channel),alphaMapUv:re&&u(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ze||St),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Ne||re),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ze===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===nn,decodeVideoTextureEmissive:je&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===nn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ke&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&x.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(g(S,x),m(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let S=d[x.type],L;if(S){let R=hs[S];L=t0.clone(R.uniforms)}else L=x.uniforms;return L}function b(x,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new q3(i,S,x,s),l.push(L),h.set(S,L)),L}function v(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:E}}function J3(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K3(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function S0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,p,_,g,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:u,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=p,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=g,M.group=m),e++,M}function c(d,u,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let b=a(d,u,p,_,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,u,p,_,g,m){let M=a(d,u,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,u){t.length>1&&t.sort(d||K3),n.length>1&&n.sort(u||M0),s.length>1&&s.sort(u||M0)}function f(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function j3(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new S0,i.set(n,[o])):s>=r.length?(o=new S0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q3(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new et};break;case"SpotLight":t={position:new k,direction:new k,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function ex(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tx=0;function nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ix(i){let e=new Q3,t=ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new Nt,o=new Nt;function a(l){let h=0,f=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let u=0,p=0,_=0,g=0,m=0,M=0,b=0,v=0,T=0,E=0,x=0,S=0,L=0,R=0;l.sort(nx);for(let z=0,q=l.length;z<q;z++){let F=l[z],N=F.color,G=F.intensity,W=F.distance,ue=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Zs?ue=F.shadow.map.texture:ue=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=N.r*G,f+=N.g*G,d+=N.b*G;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(F.sh.coefficients[ie],G);R++}else if(F.isSunLight){let ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ae=F.shadow,ce=t.get(F);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[p]=ce,n.sunShadowMap[p]=ue;let Ee=ae.getViewportCount();for(let Le=0;Le<Ee;Le++)n.sunShadowMatrix[_+Le]=ae.getMatrix(Le),n.sunShadowCascade[_+Le]=ae._cascadeData[Le];_+=Ee,p++}n.sun[u]=ie,u++}else if(F.isDirectionalLight){let ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let ae=F.shadow,ce=t.get(F);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,n.directionalShadow[g]=ce,n.directionalShadowMap[g]=ue,n.directionalShadowMatrix[g]=F.shadow.matrix,T++}n.directional[g]=ie,g++}else if(F.isSpotLight){let ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(N).multiplyScalar(G),ie.distance=W,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,n.spot[M]=ie;let ae=F.shadow;if(F.map&&(n.spotLightMap[S]=F.map,S++,ae.updateMatrices(F),F.castShadow&&L++),n.spotLightMatrix[M]=ae.matrix,F.castShadow){let ce=t.get(F);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,n.spotShadow[M]=ce,n.spotShadowMap[M]=ue,x++}M++}else if(F.isRectAreaLight){let ie=e.get(F);ie.color.copy(N).multiplyScalar(G),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),n.rectArea[b]=ie,b++}else if(F.isPointLight){let ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){let ae=F.shadow,ce=t.get(F);ce.shadowIntensity=ae.intensity,ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,n.pointShadow[m]=ce,n.pointShadowMap[m]=ue,n.pointShadowMatrix[m]=F.shadow.matrix,E++}n.point[m]=ie,m++}else if(F.isHemisphereLight){let ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar(G),ie.groundColor.copy(F.groundColor).multiplyScalar(G),n.hemi[v]=ie,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==b||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==S||D.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,D.sunLength=u,D.directionalLength=g,D.pointLength=m,D.spotLength=M,D.rectAreaLength=b,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=S,D.numLightProbes=R,n.version=tx++)}function c(l,h){let f=0,d=0,u=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let v=l[M];if(v.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(v.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let T=n.hemi[g];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function E0(i){let e=new ix(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function sx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new E0(i),e.set(s,[a])):r>=o.length?(a=new E0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ax=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],lx=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],b0=new Nt,Ma=new k,Du=new k;function cx(i,e,t){let n=new Ws,s=new Fe,r=new Fe,o=new fn,a=new Dl,c=new Nl,l={},h=t.maxTextureSize,f={[$s]:kn,[kn]:$s,[gi]:gi},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:rx,fragmentShader:ox}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new yn;p.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let m=this.type;this.render=function(E,x,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===df&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fa);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ur),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==this.type;q&&x.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(N=>N.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,N=E.length;F<N;F++){let G=E[F],W=G.shadow;if(W===void 0){xt("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();s.multiply(ue),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y));let ie=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ie,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===io){if(G.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new jn(s.x,s.y,{format:Zs,type:ji,minFilter:ui,magFilter:ui,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Es(s.x,s.y,zi),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=Ss,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn}else G.isPointLight?(W.map=new Ea(s.x),W.map.depthTexture=new Yo(s.x,Ki)):(W.map=new jn(s.x,s.y),W.map.depthTexture=new Es(s.x,s.y,Ki)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=Ss,this.type===fa?(W.map.depthTexture.compareFunction=ie?_u:yu,W.map.depthTexture.minFilter=ui,W.map.depthTexture.magFilter=ui):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Fn,W.map.depthTexture.magFilter=Fn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let ae=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,S);let ce=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let Ee=0;Ee<ae;Ee++){let Le=W.getCamera(Ee);if(G.isPointLight){let oe=W.camera,be=W.matrix,ee=G.distance||oe.far;ee!==oe.far&&(oe.far=ee,oe.updateProjectionMatrix()),Ma.setFromMatrixPosition(G.matrixWorld),oe.position.copy(Ma),Du.copy(oe.position),Du.add(ax[Ee]),oe.up.copy(lx[Ee]),oe.lookAt(Du),oe.updateMatrixWorld(),be.makeTranslation(-Ma.x,-Ma.y,-Ma.z),b0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(b0,oe.coordinateSystem,oe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(W.map),i.clear());let oe=W.getViewport(Ee);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),z.viewport(o)}n=W.getFrustum(Ee),v(x,S,Le,G,ce,this.type)}W.isPointLightShadow!==!0&&this.type===io&&M(W,S),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(L,R,D)};function M(E,x){let S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new jn(s.x,s.y,{format:Zs,type:ji}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,S,d,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,S,u,_,null)}function b(E,x,S,L){let R=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?c:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=R.uuid,q=x.uuid,F=l[z];F===void 0&&(F={},l[z]=F);let N=F[q];N===void 0&&(N=R.clone(),F[q]=N,x.addEventListener("dispose",T)),R=N}if(R.visible=x.visible,R.wireframe=x.wireframe,L===io?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:f[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=i.properties.get(R);z.light=S}return R}function v(E,x,S,L,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===io)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let F=e.update(E),N=E.material;if(Array.isArray(N)){let G=F.groups;for(let W=0,ue=G.length;W<ue;W++){let ie=G[W],ae=N[ie.materialIndex];if(ae&&ae.visible){let ce=b(E,ae,L,D);E.onBeforeShadow(i,E,x,S,F,ce,ie),i.renderBufferDirect(S,null,F,ce,E,ie),E.onAfterShadow(i,E,x,S,F,ce,ie)}}}else if(N.visible){let G=b(E,N,L,D);E.onBeforeShadow(i,E,x,S,F,G,null),i.renderBufferDirect(S,null,F,G,E,null),E.onAfterShadow(i,E,x,S,F,G,null)}}let q=E.children;for(let F=0,N=q.length;F<N;F++)v(q[F],x,S,L,R,D)}function T(E){E.target.removeEventListener("dispose",T);for(let S in l){let L=l[S],R=E.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function hx(i,e){function t(){let P=!1,Z=new fn,J=null,j=new fn(0,0,0,0);return{setMask:function(re){J!==re&&!P&&(i.colorMask(re,re,re,re),J=re)},setLocked:function(re){P=re},setClear:function(re,me,ge,ke,de){de===!0&&(re*=ke,me*=ke,ge*=ke),Z.set(re,me,ge,ke),j.equals(Z)===!1&&(i.clearColor(re,me,ge,ke),j.copy(Z))},reset:function(){P=!1,J=null,j.set(-1,0,0,0)}}}function n(){let P=!1,Z=!1,J=null,j=null,re=null;return{setReversed:function(me){if(Z!==me){let ge=e.get("EXT_clip_control");me?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),Z=me;let ke=re;re=null,this.setClear(ke)}},getReversed:function(){return Z},setTest:function(me){me?ye(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(me){J!==me&&!P&&(i.depthMask(me),J=me)},setFunc:function(me){if(Z&&(me=Xf[me]),j!==me){switch(me){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case dl:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=me}},setLocked:function(me){P=me},setClear:function(me){re!==me&&(re=me,Z&&(me=1-me),i.clearDepth(me))},reset:function(){P=!1,J=null,j=null,re=null,Z=!1}}}function s(){let P=!1,Z=null,J=null,j=null,re=null,me=null,ge=null,ke=null,de=null;return{setTest:function(Ce){P||(Ce?ye(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Ce){Z!==Ce&&!P&&(i.stencilMask(Ce),Z=Ce)},setFunc:function(Ce,Se,Ae){(J!==Ce||j!==Se||re!==Ae)&&(i.stencilFunc(Ce,Se,Ae),J=Ce,j=Se,re=Ae)},setOp:function(Ce,Se,Ae){(me!==Ce||ge!==Se||ke!==Ae)&&(i.stencilOp(Ce,Se,Ae),me=Ce,ge=Se,ke=Ae)},setLocked:function(Ce){P=Ce},setClear:function(Ce){de!==Ce&&(i.clearStencil(Ce),de=Ce)},reset:function(){P=!1,Z=null,J=null,j=null,re=null,me=null,ge=null,ke=null,de=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],_=null,g=!1,m=null,M=null,b=null,v=null,T=null,E=null,x=null,S=new et(0,0,0),L=0,R=!1,D=null,z=null,q=null,F=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ue=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ie)[1]),W=ue>=1):ie.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),W=ue>=2);let ae=null,ce={},Ee=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),oe=new fn().fromArray(Ee),be=new fn().fromArray(Le);function ee(P,Z,J,j){let re=new Uint8Array(4),me=i.createTexture();i.bindTexture(P,me),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<J;ge++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(Z+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return me}let xe={};xe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(i.DEPTH_TEST),o.setFunc(zr),We(!1),ze(Kh),ye(i.CULL_FACE),Re(ur);function ye(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ue(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ge(P,Z){return d[P]!==Z?(i.bindFramebuffer(P,Z),d[P]=Z,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ne(P,Z){let J=p,j=!1;if(P){J=u.get(Z),J===void 0&&(J=[],u.set(Z,J));let re=P.textures;if(J.length!==re.length||J[0]!==i.COLOR_ATTACHMENT0){for(let me=0,ge=re.length;me<ge;me++)J[me]=i.COLOR_ATTACHMENT0+me;J.length=re.length,j=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,j=!0);j&&i.drawBuffers(J)}function Ye(P){return _!==P?(i.useProgram(P),_=P,!0):!1}let tt={[dr]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};tt[gf]=i.MIN,tt[xf]=i.MAX;let fe={[yf]:i.ZERO,[_f]:i.ONE,[vf]:i.SRC_COLOR,[tu]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[nu]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(P,Z,J,j,re,me,ge,ke,de,Ce){if(P===ur){g===!0&&(Ue(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),P!==ff){if(P!==m||Ce!==R){if((M!==dr||T!==dr)&&(i.blendEquation(i.FUNC_ADD),M=dr,T=dr),Ce)switch(P){case so:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFunc(i.ONE,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",P);break}else switch(P){case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qh:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",P);break}b=null,v=null,E=null,x=null,S.set(0,0,0),L=0,m=P,R=Ce}return}re=re||Z,me=me||J,ge=ge||j,(Z!==M||re!==T)&&(i.blendEquationSeparate(tt[Z],tt[re]),M=Z,T=re),(J!==b||j!==v||me!==E||ge!==x)&&(i.blendFuncSeparate(fe[J],fe[j],fe[me],fe[ge]),b=J,v=j,E=me,x=ge),(ke.equals(S)===!1||de!==L)&&(i.blendColor(ke.r,ke.g,ke.b,de),S.copy(ke),L=de),m=P,R=!1}function we(P,Z){P.side===gi?Ue(i.CULL_FACE):ye(i.CULL_FACE);let J=P.side===kn;Z&&(J=!J),We(J),P.blending===so&&P.transparent===!1?Re(ur):Re(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let j=P.stencilWrite;a.setTest(j),j&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),je(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function ze(P){P!==hf?(ye(i.CULL_FACE),P!==z&&(P===Kh?i.cullFace(i.BACK):P===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),z=P}function lt(P){P!==q&&(W&&i.lineWidth(P),q=P)}function je(P,Z,J){P?(ye(i.POLYGON_OFFSET_FILL),(F!==Z||N!==J)&&(F=Z,N=J,o.getReversed()&&(Z=-Z,J=-J),i.polygonOffset(Z,J))):Ue(i.POLYGON_OFFSET_FILL)}function _t(P){P?ye(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function pt(P){P===void 0&&(P=i.TEXTURE0+G-1),ae!==P&&(i.activeTexture(P),ae=P)}function St(P,Z,J){J===void 0&&(ae===null?J=i.TEXTURE0+G-1:J=ae);let j=ce[J];j===void 0&&(j={type:void 0,texture:void 0},ce[J]=j),(j.type!==P||j.texture!==Z)&&(ae!==J&&(i.activeTexture(J),ae=J),i.bindTexture(P,Z||xe[P]),j.type=P,j.texture=Z)}function Y(){let P=ce[ae];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Dt(){try{i.compressedTexImage2D(...arguments)}catch(P){vt("WebGLState:",P)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(P){vt("WebGLState:",P)}}function yt(){try{i.texSubImage2D(...arguments)}catch(P){vt("WebGLState:",P)}}function Be(){try{i.texSubImage3D(...arguments)}catch(P){vt("WebGLState:",P)}}function Kt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){vt("WebGLState:",P)}}function O(){try{i.compressedTexSubImage3D(...arguments)}catch(P){vt("WebGLState:",P)}}function K(){try{i.texStorage2D(...arguments)}catch(P){vt("WebGLState:",P)}}function w(){try{i.texStorage3D(...arguments)}catch(P){vt("WebGLState:",P)}}function y(){try{i.texImage2D(...arguments)}catch(P){vt("WebGLState:",P)}}function U(){try{i.texImage3D(...arguments)}catch(P){vt("WebGLState:",P)}}function C(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function I(P,Z){f[P]!==Z&&(i.pixelStorei(P,Z),f[P]=Z)}function H(P){oe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function $(P){be.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),be.copy(P))}function B(P,Z){let J=l.get(Z);J===void 0&&(J=new WeakMap,l.set(Z,J));let j=J.get(P);j===void 0&&(j=i.getUniformBlockIndex(Z,P.name),i.uniformBlockBinding(Z,j,j),J.set(P,j))}function X(P,Z,J){let re=l.get(Z).get(P);c[re]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,re,J),c[re]=J)}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ae=null,ce={},d={},c={},u=new WeakMap,p=[],_=null,g=!1,m=null,M=null,b=null,v=null,T=null,E=null,x=null,S=new et(0,0,0),L=0,R=!1,D=null,z=null,q=null,F=null,N=null,oe.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Ue,bindFramebuffer:Ge,drawBuffers:Ne,useProgram:Ye,setBlending:Re,setMaterial:we,setFlipSided:We,setCullFace:ze,setLineWidth:lt,setPolygonOffset:je,setScissorTest:_t,activeTexture:pt,bindTexture:St,unbindTexture:Y,compressedTexImage2D:Dt,compressedTexImage3D:ht,texImage2D:y,texImage3D:U,pixelStorei:I,getParameter:C,updateUBOMapping:B,uniformBlockBinding:X,texStorage2D:K,texStorage3D:w,texSubImage2D:yt,texSubImage3D:Be,compressedTexSubImage2D:Kt,compressedTexSubImage3D:O,scissor:H,viewport:$,reset:te}}function ux(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap,f=new Set,d,u=new WeakMap,p=new Set,_=new FinalizationRegistry(w=>p.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return g?new OffscreenCanvas(w,y):Oo("canvas")}function M(w,y,U){let C=1,I=K(w);if((I.width>U||I.height>U)&&(C=U/Math.max(I.width,I.height)),C<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(C*I.width),$=Math.floor(C*I.height);d===void 0&&(d=m(H,$));let B=y?m(H,$):d;return B.width=H,B.height=$,B.getContext("2d").drawImage(w,0,0,H,$),xt("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+H+"x"+$+")."),B}else return"data"in w&&xt("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),w;return w}function b(w){return w.generateMipmaps}function v(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,y,U,C,I,H=!1){if(w!==null){if(i[w]!==void 0)return i[w];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $;C&&($=e.get("EXT_texture_norm16"),$||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=y;if(y===i.RED&&(U===i.FLOAT&&(B=i.R32F),U===i.HALF_FLOAT&&(B=i.R16F),U===i.UNSIGNED_BYTE&&(B=i.R8),U===i.UNSIGNED_SHORT&&$&&(B=$.R16_EXT),U===i.SHORT&&$&&(B=$.R16_SNORM_EXT)),y===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(B=i.R8UI),U===i.UNSIGNED_SHORT&&(B=i.R16UI),U===i.UNSIGNED_INT&&(B=i.R32UI),U===i.BYTE&&(B=i.R8I),U===i.SHORT&&(B=i.R16I),U===i.INT&&(B=i.R32I)),y===i.RG&&(U===i.FLOAT&&(B=i.RG32F),U===i.HALF_FLOAT&&(B=i.RG16F),U===i.UNSIGNED_BYTE&&(B=i.RG8),U===i.UNSIGNED_SHORT&&$&&(B=$.RG16_EXT),U===i.SHORT&&$&&(B=$.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(B=i.RG8UI),U===i.UNSIGNED_SHORT&&(B=i.RG16UI),U===i.UNSIGNED_INT&&(B=i.RG32UI),U===i.BYTE&&(B=i.RG8I),U===i.SHORT&&(B=i.RG16I),U===i.INT&&(B=i.RG32I)),y===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(B=i.RGB8UI),U===i.UNSIGNED_SHORT&&(B=i.RGB16UI),U===i.UNSIGNED_INT&&(B=i.RGB32UI),U===i.BYTE&&(B=i.RGB8I),U===i.SHORT&&(B=i.RGB16I),U===i.INT&&(B=i.RGB32I)),y===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),U===i.UNSIGNED_INT&&(B=i.RGBA32UI),U===i.BYTE&&(B=i.RGBA8I),U===i.SHORT&&(B=i.RGBA16I),U===i.INT&&(B=i.RGBA32I)),y===i.RGB&&(U===i.UNSIGNED_SHORT&&$&&(B=$.RGB16_EXT),U===i.SHORT&&$&&(B=$.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),y===i.RGBA){let X=H?Bo:$t.getTransfer(I);U===i.FLOAT&&(B=i.RGBA32F),U===i.HALF_FLOAT&&(B=i.RGBA16F),U===i.UNSIGNED_BYTE&&(B=X===nn?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&$&&(B=$.RGBA16_EXT),U===i.SHORT&&$&&(B=$.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function x(w,y){let U;return w?y===null||y===Ki||y===pr?U=i.DEPTH24_STENCIL8:y===zi?U=i.DEPTH32F_STENCIL8:y===oo&&(U=i.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===pr?U=i.DEPTH_COMPONENT24:y===zi?U=i.DEPTH_COMPONENT32F:y===oo&&(U=i.DEPTH_COMPONENT16),U}function S(w,y){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fn&&w.minFilter!==ui?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){let y=new WeakRef(w);n.get(w).__ref=y,p.add(y),_.register(w,y,y)}function R(w){let y=n.get(w).__ref;y!==void 0&&(p.delete(y),_.unregister(y))}function D(w){q(w.target)}function z(w){F(w.target)}function q(w){w.removeEventListener("dispose",D),R(w),G(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function F(w){w.removeEventListener("dispose",z),R(w),ue(w)}function N(){for(let w of p){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?F(y):q(y))}p.clear(),f.clear()}function G(w){let y=n.get(w);if(y.__webglInit===void 0)return;let U=w.source,C=u.get(U);if(C){let I=C[y.__cacheKey];I.usedTimes--,I.usedTimes===0&&W(w),Object.keys(C).length===0&&u.delete(U)}n.remove(w)}function W(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let U=w.source,C=u.get(U);delete C[y.__cacheKey],o.memory.textures--}function ue(w){let y=n.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let U=w.depthTexture;if(U&&U.renderTarget===w&&q(U),w.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(y.__webglFramebuffer[I]))for(let H=0;H<y.__webglFramebuffer[I].length;H++)i.deleteFramebuffer(y.__webglFramebuffer[I][H]);else i.deleteFramebuffer(y.__webglFramebuffer[I]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[I])}else{if(Array.isArray(y.__webglFramebuffer))for(let I=0;I<y.__webglFramebuffer.length;I++)i.deleteFramebuffer(y.__webglFramebuffer[I]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let I=0;I<y.__webglColorRenderbuffer.length;I++)y.__webglColorRenderbuffer[I]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[I]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let C=w.textures;for(let I=0,H=C.length;I<H;I++){let $=n.get(C[I]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(C[I])}n.remove(w)}let ie=0;function ae(){ie=0}function ce(){return ie}function Ee(w){ie=w}function Le(){let w=ie;return w>=s.maxTextures&&xt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),ie+=1,w}function oe(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function be(w,y){let U=n.get(w);if(w.isVideoTexture&&Kt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let C=w.image;if(C===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(U,w,y);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+y)}function ee(w,y){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){we(U,w,y);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+y)}function xe(w,y){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){we(U,w,y);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+y)}function ye(w,y){let U=n.get(w);if(w.version>0&&U.__version!==w.version){We(U,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+y)}let Ue={[xl]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},Ge={[Fn]:i.NEAREST,[Ff]:i.NEAREST_MIPMAP_NEAREST,[pa]:i.NEAREST_MIPMAP_LINEAR,[ui]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},Ne={[Bf]:i.NEVER,[vu]:i.ALWAYS,[Of]:i.LESS,[yu]:i.LEQUAL,[kf]:i.EQUAL,[_u]:i.GEQUAL,[Hf]:i.GREATER,[zf]:i.NOTEQUAL};function Ye(w,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ui||y.magFilter===Kl||y.magFilter===pa||y.magFilter===bs||y.minFilter===ui||y.minFilter===Kl||y.minFilter===pa||y.minFilter===bs)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ue[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ue[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ue[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ge[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ge[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fn||y.minFilter!==pa&&y.minFilter!==bs||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function tt(w,y){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",D),L(y));let C=y.source,I=u.get(C);I===void 0&&(I={},u.set(C,I));let H=oe(y);if(H!==w.__cacheKey){I[H]===void 0&&(I[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),I[H].usedTimes++;let $=I[w.__cacheKey];$!==void 0&&(I[w.__cacheKey].usedTimes--,$.usedTimes===0&&W(y)),w.__cacheKey=H,w.__webglTexture=I[H].texture}return U}function fe(w,y,U){return Math.floor(Math.floor(w/U)/y)}function Re(w,y,U,C){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,U,C,y.data);else{H.sort((P,Z)=>P.start-Z.start);let $=0;for(let P=1;P<H.length;P++){let Z=H[$],J=H[P],j=Z.start+Z.count,re=fe(J.start,y.width,4),me=fe(Z.start,y.width,4);J.start<=j+1&&re===me&&fe(J.start+J.count-1,y.width,4)===re?Z.count=Math.max(Z.count,J.start+J.count-Z.start):(++$,H[$]=J)}H.length=$+1;let B=t.getParameter(i.UNPACK_ROW_LENGTH),X=t.getParameter(i.UNPACK_SKIP_PIXELS),te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let P=0,Z=H.length;P<Z;P++){let J=H[P],j=Math.floor(J.start/4),re=Math.ceil(J.count/4),me=j%y.width,ge=Math.floor(j/y.width),ke=re,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,me),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge),t.texSubImage2D(i.TEXTURE_2D,0,me,ge,ke,de,U,C,y.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,B),t.pixelStorei(i.UNPACK_SKIP_PIXELS,X),t.pixelStorei(i.UNPACK_SKIP_ROWS,te)}}function we(w,y,U){let C=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(C=i.TEXTURE_3D);let I=tt(w,y),H=y.source;t.bindTexture(C,w.__webglTexture,i.TEXTURE0+U);let $=n.get(H);if(H.version!==$.__version||I===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let de=$t.getPrimaries($t.workingColorSpace),Ce=y.colorSpace===Ts?null:$t.getPrimaries(y.colorSpace),Se=y.colorSpace===Ts||de===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let X=M(y.image,!1,s.maxTextureSize);X=O(y,X);let te=r.convert(y.format,y.colorSpace),P=r.convert(y.type),Z=E(y.internalFormat,te,P,y.normalized,y.colorSpace,y.isVideoTexture);Ye(C,y);let J,j=y.mipmaps,re=y.isVideoTexture!==!0,me=$.__version===void 0||I===!0,ge=H.dataReady,ke=S(y,X);if(y.isDepthTexture)Z=x(y.format===ws,y.type),me&&(re?t.texStorage2D(i.TEXTURE_2D,1,Z,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,Z,X.width,X.height,0,te,P,null));else if(y.isDataTexture)if(j.length>0){re&&me&&t.texStorage2D(i.TEXTURE_2D,ke,Z,j[0].width,j[0].height);for(let de=0,Ce=j.length;de<Ce;de++)J=j[de],re?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,J.width,J.height,te,P,J.data):t.texImage2D(i.TEXTURE_2D,de,Z,J.width,J.height,0,te,P,J.data);y.generateMipmaps=!1}else re?(me&&t.texStorage2D(i.TEXTURE_2D,ke,Z,X.width,X.height),ge&&Re(y,X,te,P)):t.texImage2D(i.TEXTURE_2D,0,Z,X.width,X.height,0,te,P,X.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){re&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Z,j[0].width,j[0].height,X.depth);for(let de=0,Ce=j.length;de<Ce;de++)if(J=j[de],y.format!==Qi)if(te!==null)if(re){if(ge)if(y.layerUpdates.size>0){let Se=Au(J.width,J.height,y.format,y.type);for(let Ae of y.layerUpdates){let Q=J.data.subarray(Ae*Se/J.data.BYTES_PER_ELEMENT,(Ae+1)*Se/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Ae,J.width,J.height,1,te,Q)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,J.width,J.height,X.depth,te,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Z,J.width,J.height,X.depth,0,J.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,J.width,J.height,X.depth,te,P,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Z,J.width,J.height,X.depth,0,te,P,J.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{re&&me&&t.texStorage2D(i.TEXTURE_2D,ke,Z,j[0].width,j[0].height);for(let de=0,Ce=j.length;de<Ce;de++)J=j[de],y.format!==Qi?te!==null?re?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,J.width,J.height,te,J.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Z,J.width,J.height,0,J.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,J.width,J.height,te,P,J.data):t.texImage2D(i.TEXTURE_2D,de,Z,J.width,J.height,0,te,P,J.data)}else if(y.isDataArrayTexture)if(re){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Z,X.width,X.height,X.depth),ge)if(y.layerUpdates.size>0){let de=Au(X.width,X.height,y.format,y.type);for(let Ce of y.layerUpdates){let Se=X.data.subarray(Ce*de/X.data.BYTES_PER_ELEMENT,(Ce+1)*de/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,X.width,X.height,1,te,P,Se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,te,P,X.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,X.width,X.height,X.depth,0,te,P,X.data);else if(y.isData3DTexture)re?(me&&t.texStorage3D(i.TEXTURE_3D,ke,Z,X.width,X.height,X.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,te,P,X.data)):t.texImage3D(i.TEXTURE_3D,0,Z,X.width,X.height,X.depth,0,te,P,X.data);else if(y.isFramebufferTexture){if(me)if(re)t.texStorage2D(i.TEXTURE_2D,ke,Z,X.width,X.height);else{let de=X.width,Ce=X.height;for(let Se=0;Se<ke;Se++)t.texImage2D(i.TEXTURE_2D,Se,Z,de,Ce,0,te,P,null),de>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),X.parentNode!==de){de.appendChild(X),f.add(y),de.onpaint=Ce=>{let Se=Ce.changedElements;for(let Ae of f)Se.includes(Ae.image)&&(Ae.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,X);else{let Se=i.RGBA,Ae=i.RGBA,Q=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,Ae,Q,X)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(j.length>0){if(re&&me){let de=K(j[0]);t.texStorage2D(i.TEXTURE_2D,ke,Z,de.width,de.height)}for(let de=0,Ce=j.length;de<Ce;de++)J=j[de],re?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,te,P,J):t.texImage2D(i.TEXTURE_2D,de,Z,te,P,J);y.generateMipmaps=!1}else if(re){if(me){let de=K(X);t.texStorage2D(i.TEXTURE_2D,ke,Z,de.width,de.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,P,X)}else t.texImage2D(i.TEXTURE_2D,0,Z,te,P,X);b(y)&&y.mipmapsAutoUpdate===!0&&v(C),$.__version=H.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function We(w,y,U){if(y.image.length!==6)return;let C=tt(w,y),I=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);let H=n.get(I);if(I.version!==H.__version||C===!0){t.activeTexture(i.TEXTURE0+U);let $=$t.getPrimaries($t.workingColorSpace),B=y.colorSpace===Ts?null:$t.getPrimaries(y.colorSpace),X=y.colorSpace===Ts||$===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let te=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,Z=[];for(let Ae=0;Ae<6;Ae++)!te&&!P?Z[Ae]=M(y.image[Ae],!0,s.maxCubemapSize):Z[Ae]=P?y.image[Ae].image:y.image[Ae],Z[Ae]=O(y,Z[Ae]);let J=Z[0],j=r.convert(y.format,y.colorSpace),re=r.convert(y.type),me=E(y.internalFormat,j,re,y.normalized,y.colorSpace),ge=y.isVideoTexture!==!0,ke=H.__version===void 0||C===!0,de=I.dataReady,Ce=S(y,J);Ye(i.TEXTURE_CUBE_MAP,y);let Se;if(y.isDepthTexture){if(me=x(y.format===ws,y.type),ke)if(ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,me,J.width,J.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,me,J.width,J.height,0,j,re,null)}else if(te){ge&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,me,J.width,J.height);for(let Ae=0;Ae<6;Ae++){Se=Z[Ae].mipmaps;for(let Q=0;Q<Se.length;Q++){let Xe=Se[Q];y.format!==Qi?j!==null?ge?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q,0,0,Xe.width,Xe.height,j,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q,me,Xe.width,Xe.height,0,Xe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q,0,0,Xe.width,Xe.height,j,re,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q,me,Xe.width,Xe.height,0,j,re,Xe.data)}}}else{if(Se=y.mipmaps,ge&&ke){Se.length>0&&Ce++;let Ae=K(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,me,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(P){ge?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Z[Ae].width,Z[Ae].height,j,re,Z[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,me,Z[Ae].width,Z[Ae].height,0,j,re,Z[Ae].data);for(let Q=0;Q<Se.length;Q++){let ot=Se[Q].image[Ae].image;ge?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q+1,0,0,ot.width,ot.height,j,re,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q+1,me,ot.width,ot.height,0,j,re,ot.data)}}else{ge?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,j,re,Z[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,me,j,re,Z[Ae]);for(let Q=0;Q<Se.length;Q++){let Xe=Se[Q];ge?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q+1,0,0,j,re,Xe.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Q+1,me,j,re,Xe.image[Ae])}}}b(y)&&y.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),H.__version=I.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ze(w,y,U,C,I,H){let $=r.convert(U.format,U.colorSpace),B=r.convert(U.type),X=E(U.internalFormat,$,B,U.normalized,U.colorSpace),te=n.get(y),P=n.get(U);if(P.__renderTarget=y,!te.__hasExternalTextures){let Z=Math.max(1,y.width>>H),J=Math.max(1,y.height>>H);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?t.texImage3D(I,H,X,Z,J,y.depth,0,$,B,null):t.texImage2D(I,H,X,Z,J,0,$,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Be(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,I,P.__webglTexture,0,yt(y)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,I,P.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,y,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let C=y.depthTexture,I=C&&C.isDepthTexture?C.type:null,H=x(y.stencilBuffer,I),$=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Be(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(y),H,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(y),H,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,H,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,w)}else{let C=y.textures;for(let I=0;I<C.length;I++){let H=C[I],$=r.convert(H.format,H.colorSpace),B=r.convert(H.type),X=E(H.internalFormat,$,B,H.normalized,H.colorSpace);Be(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(y),X,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(y),X,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,X,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(w,y,U){let C=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let I=n.get(y.depthTexture);I.__renderTarget=y;let H=C?y.depthTexture.image[0]:y.depthTexture.image;(!I.__webglTexture||H.width!==y.width||H.height!==y.height)&&(H.width=y.width,H.height=y.height,y.depthTexture.needsUpdate=!0),C?ye(y.depthTexture,0):be(y.depthTexture,0);let $=I.__webglTexture,B=yt(y),X=C?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,te=y.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ss)Be(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,X,$,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,te,X,$,0);else if(y.depthTexture.format===ws)Be(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,X,$,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,te,X,$,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(w){let y=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let C=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),C){let I=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,C.removeEventListener("dispose",I)};C.addEventListener("dispose",I),y.__depthDisposeCallback=I}y.__boundDepthTexture=C}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let C=0;C<6;C++)je(y.__webglFramebuffer[C],w,C);else w.texture.mipmaps.length>0?je(y.__webglFramebuffer[0],w,0):je(y.__webglFramebuffer,w,0);else if(U){y.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[C]),y.__webglDepthbuffer[C]===void 0)y.__webglDepthbuffer[C]=i.createRenderbuffer(),lt(y.__webglDepthbuffer[C],w,!1);else{let I=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,H)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),lt(y.__webglDepthbuffer,w,!1);else{let I=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,H)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,y,U){let C=n.get(w);y!==void 0&&ze(C.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&_t(w)}function St(w){let y=w.texture,U=n.get(w),C=n.get(y);w.addEventListener("dispose",z),L(w);let I=w.textures,H=w.isWebGLCubeRenderTarget===!0,$=I.length>1;if($||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=y.version,o.memory.textures++),H){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(y.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let X=0;X<y.mipmaps.length;X++)U.__webglFramebuffer[B][X]=i.createFramebuffer()}else U.__webglFramebuffer[B]=i.createFramebuffer()}else{if(y.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<y.mipmaps.length;B++)U.__webglFramebuffer[B]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if($)for(let B=0,X=I.length;B<X;B++){let te=n.get(I[B]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Be(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<I.length;B++){let X=I[B];U.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[B]);let te=r.convert(X.format,X.colorSpace),P=r.convert(X.type),Z=E(X.internalFormat,te,P,X.normalized,X.colorSpace,w.isXRRenderTarget===!0),J=yt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,U.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,y);for(let B=0;B<6;B++)if(y.mipmaps.length>0)for(let X=0;X<y.mipmaps.length;X++)ze(U.__webglFramebuffer[B][X],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,X);else ze(U.__webglFramebuffer[B],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);b(y)?v(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if($){for(let B=0,X=I.length;B<X;B++){let te=I[B],P=n.get(te),Z=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,P.__webglTexture),Ye(Z,te),ze(U.__webglFramebuffer,w,te,i.COLOR_ATTACHMENT0+B,Z,0),b(te)&&v(Z)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(B=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,C.__webglTexture),Ye(B,y),y.mipmaps.length>0)for(let X=0;X<y.mipmaps.length;X++)ze(U.__webglFramebuffer[X],w,y,i.COLOR_ATTACHMENT0,B,X);else ze(U.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,B,0);b(y)?v(B):y.mipmaps.length>0&&i.texParameteri(B,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&_t(w)}function Y(w){let y=w.textures;for(let U=0,C=y.length;U<C;U++){let I=y[U];if(b(I)&&I.mipmapsAutoUpdate===!0){let H=T(w),$=n.get(I).__webglTexture;t.bindTexture(H,$),v(H),t.unbindTexture()}}}let Dt=[];function ht(w){if(w.samples>0){if(Be(w)===!1){let y=w.textures,U=w.width,C=w.height,I=i.COLOR_BUFFER_BIT,H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(w),B=y.length>1;if(B)for(let te=0;te<y.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let te=0;te<y.length;te++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[te]);let P=n.get(y[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,U,C,0,0,U,C,I,i.NEAREST),c===!0&&(Dt.length=0,Dt.push(i.COLOR_ATTACHMENT0+te),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Dt.push(H),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let te=0;te<y.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,$.__webglColorRenderbuffer[te]);let P=n.get(y[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function yt(w){return Math.min(s.maxSamples,w.samples)}function Be(w){let y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Kt(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function O(w,y){let U=w.colorSpace,C=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Uo&&U!==Ts&&($t.getTransfer(U)===nn?(C!==Qi||I!==Si)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",U)),y}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=ae,this.getTextureUnits=ce,this.setTextureUnits=Ee,this.setTexture2D=be,this.setTexture2DArray=ee,this.setTexture3D=xe,this.setTextureCube=ye,this.rebindTextures=pt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Be,this.dispose=N}function dx(i,e){function t(n,s=Ts){let r,o=$t.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return i.BYTE;if(n===fu)return i.SHORT;if(n===oo)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===ji)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===xu)return i.RGB;if(n===Qi)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===ao)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Zs)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===ma||n===ga||n===xa||n===ya)if(o===nn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===_a||n===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lc||n===cc)return o===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return r.COMPRESSED_R11_EAC;if(n===dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===xc||n===yc||n===_c||n===vc||n===Mc||n===Sc||n===Ec||n===bc||n===wc||n===Tc||n===Ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return o===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Lc||n===va||n===Fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,px=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $o(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mi({vertexShader:fx,fragmentShader:px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends os{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,p=null,_=typeof XRWebGLBinding<"u",g=new zu,m={},M=t.getContextAttributes(),b=null,v=null,T=[],E=[],x=new Fe,S=null,L=null,R=new oi;R.viewport=new fn;let D=new oi;D.viewport=new fn;let z=[R,D],q=new Yl,F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let be=T[oe];return be===void 0&&(be=new qr,T[oe]=be),be.getTargetRaySpace()},this.getControllerGrip=function(oe){let be=T[oe];return be===void 0&&(be=new qr,T[oe]=be),be.getGripSpace()},this.getHand=function(oe){let be=T[oe];return be===void 0&&(be=new qr,T[oe]=be),be.getHandSpace()};function G(oe){let be=E.indexOf(oe.inputSource);if(be===-1)return;let ee=T[be];ee!==void 0&&(ee.update(oe.inputSource,oe.frame,l||o),ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ue);for(let oe=0;oe<T.length;oe++){let be=E[oe];be!==null&&(E[oe]=null,T[oe].disconnect(be))}F=null,N=null,g.reset();for(let oe in m)delete m[oe];if(e.setRenderTarget(b),u=null,d=null,f=null,s=null,v=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),L!==null){let oe=L.camera;oe.fov=L.fov,oe.zoom=L.zoom,oe.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(oe){l=oe},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ue),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,xe=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?ws:Ss,xe=M.stencil?pr:Ki);let Ue={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jn(d.textureWidth,d.textureHeight,{format:Qi,type:Si,depthTexture:new Es(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new jn(u.framebufferWidth,u.framebufferHeight,{format:Qi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ue(oe){for(let be=0;be<oe.removed.length;be++){let ee=oe.removed[be],xe=E.indexOf(ee);xe>=0&&(E[xe]=null,T[xe].disconnect(ee))}for(let be=0;be<oe.added.length;be++){let ee=oe.added[be],xe=E.indexOf(ee);if(xe===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(ee),xe=Ue;break}else if(E[Ue]===null){E[Ue]=ee,xe=Ue;break}if(xe===-1)break}let ye=T[xe];ye&&ye.connect(ee)}}function ie(oe,be){be===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(be.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let be=oe.near,ee=oe.far;g.texture!==null&&(g.depthNear>0&&(be=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),q.near=D.near=R.near=be,q.far=D.far=R.far=ee,(F!==q.near||N!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),F=q.near,N=q.far),q.layers.mask=oe.layers.mask|6,R.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let xe=oe.parent,ye=q.cameras;ie(q,xe);for(let Ue=0;Ue<ye.length;Ue++)ie(ye[Ue],xe);q.projectionMatrix.copy(R.projectionMatrix),q.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&oe.isPerspectiveCamera&&(L={camera:oe,fov:oe.fov,zoom:oe.zoom}),ae(oe,q,xe)};function ae(oe,be,ee){ee===null?oe.matrix.copy(be.matrixWorld):(oe.matrix.copy(ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(be.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(be.projectionMatrix),oe.projectionMatrixInverse.copy(be.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=vl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(oe){c=oe,d!==null&&(d.fixedFoveation=oe),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(q)},this.getCameraTexture=function(oe){return m[oe]};let ce=null;function Ee(oe,be){if(h=be.getViewerPose(l||o),p=be,h!==null){let ee=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let xe=!1;ee.length!==q.cameras.length&&(q.cameras.length=0,xe=!0);for(let Ne=0;Ne<ee.length;Ne++){let Ye=ee[Ne],tt=null;if(u!==null)tt=u.getViewport(Ye);else{let Re=f.getViewSubImage(d,Ye);tt=Re.viewport,Ne===0&&(e.setRenderTargetTextures(v,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(v))}let fe=z[Ne];fe===void 0&&(fe=new oi,fe.layers.enable(Ne),fe.viewport=new fn,z[Ne]=fe),fe.matrix.fromArray(Ye.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ye.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ne===0&&(q.matrix.copy(fe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),xe===!0&&q.cameras.push(fe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Ne=f.getDepthInformation(ee[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Ne=0;Ne<ee.length;Ne++){let Ye=ee[Ne].camera;if(Ye){let tt=m[Ye];tt||(tt=new $o,m[Ye]=tt);let fe=f.getCameraImage(Ye);tt.sourceTexture=fe}}}}for(let ee=0;ee<T.length;ee++){let xe=E[ee],ye=T[ee];xe!==null&&ye!==void 0&&ye.update(xe,be,l||o)}ce&&ce(oe,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),p=null}let Le=new w0;Le.setAnimationLoop(Ee),this.setAnimationLoop=function(oe){ce=oe},this.dispose=function(){}}},mx=new Nt,N0=new Tt;N0.set(-1,0,0,0,1,0,0,0,1);function gx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,bu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,M,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m),b=M.envMap,v=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(mx.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(N0),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,M){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xx(i,e,t,n){let s={},r={};function o(M,b){let v=b.program;n.uniformBlockBinding(M,v,s[M.id])}function a(M,b){let v=s[M.id];v===void 0&&(p(M),v=c(M),s[M.id]=v,M.addEventListener("dispose",g));let T=b.program;n.updateUBOMapping(M,T);let E=e.render.frame;r[M.id]!==E&&(l(M),r[M.id]=E)}function c(M){let b=i.createBuffer(),v=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(M){let b=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,x=v.length;E<x;E++){let S=v[E];if(Array.isArray(S))for(let L=0,R=S.length;L<R;L++)h(S[L],E,L,T);else h(S,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,v,T){if(d(M,b,v,T)===!0){let E=M.__offset,x=M.value;if(Array.isArray(x)){let S=0;for(let L=0;L<x.length;L++){let R=x[L],D=_(R,!0);f(R,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function f(M,b,v){typeof M=="number"||typeof M=="boolean"?b[v]=M:M.isMatrix3?(b[v]=M.elements[0],b[v+1]=M.elements[1],b[v+2]=M.elements[2],b[v+3]=0,b[v+4]=M.elements[3],b[v+5]=M.elements[4],b[v+6]=M.elements[5],b[v+7]=0,b[v+8]=M.elements[6],b[v+9]=M.elements[7],b[v+10]=M.elements[8],b[v+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-v),v):M.toArray(b,v)}function d(M,b,v,T){let E=M.value,x=b+"_"+v;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let S=T[x],L=!1;for(let R=0;R<E.length;R++)u(E[R],S,R)===!0&&(L=!0);return L}return u(E,T,x)}function u(M,b,v){if(b[v]===void 0)return typeof M=="number"||typeof M=="boolean"?b[v]=M:ArrayBuffer.isView(M)?b[v]=M.slice():b[v]=M.clone(),!0;{let T=b[v];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return b[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function p(M){let b=M.uniforms,v=0,T=16;for(let x=0,S=b.length;x<S;x++){let L=Array.isArray(b[x])?b[x]:[b[x]];for(let R=0,D=L.length;R<D;R++){let z=L[R],q=Array.isArray(z.value)?z.value:[z.value],F=Array.isArray(b[x])||Array.isArray(z.value),N=v;for(let W=0,ue=q.length;W<ue;W++){let ie=q[W],ae=_(ie,F),ce=v%T,Ee=ce%ae.boundary,Le=ce+Ee;v+=Ee,Le!==0&&T-Le<ae.storage&&(v+=T-Le),W===0&&(N=v),v+=ae.storage}let G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((v-N)/Float32Array.BYTES_PER_ELEMENT),z.__offset=N}}let E=v%T;return E>0&&(v+=T-E),M.__size=v,M.__cache={},this}function _(M,b){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(M){let b=M.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}var yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function _x(){return cs===null&&(cs=new lr(yx,16,16,Zs,ji),cs.name="DFG_LUT",cs.minFilter=ui,cs.magFilter=ui,cs.wrapS=rs,cs.wrapT=rs,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var kc=class{constructor(e={}){let{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Si}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=u,g=new Set([ic,nc,tc]),m=new Set([Si,Ki,oo,pr,Ql,ec]),M=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,z=null,q=null,F=null,N=null;this._outputColorSpace=an;let G=0,W=0,ue=null,ie=-1,ae=null,ce=new fn,Ee=new fn,Le=null,oe=new et(0),be=0,ee=t.width,xe=t.height,ye=1,Ue=null,Ge=null,Ne=new fn(0,0,ee,xe),Ye=new fn(0,0,ee,xe),tt=!1,fe=new Ws,Re=new bl,we=!1,We=!1,ze=new Nt,lt=new k,je=new fn,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function St(){return ue===null?ye:1}let Y=n;function Dt(A,V){return t.getContext(A,V)}let ht,yt,Be,Kt,O,K,w,y,U,C,I,H,$,B,X,te,P,Z,J,j,re,me,ge;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),Y===null){let V="webgl2";if(Y=Dt(V,A),Y===null)throw Dt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),vt("WebGLRenderer: "+A.message),A}function ke(){ht=new Pg(Y),ht.init(),re=new dx(Y,ht),yt=new _g(Y,ht,e,re),Be=new hx(Y,ht),yt.reversedDepthBuffer&&d&&Be.buffers.depth.setReversed(!0),q=Y.createFramebuffer(),F=Y.createFramebuffer(),N=Y.createFramebuffer(),Kt=new Fg(Y),O=new J3,K=new ux(Y,ht,Be,O,yt,re,Kt),w=new Cg(R),y=new Nm(Y),me=new xg(Y,y),U=new Ig(Y,y,Kt,me),C=new Ng(Y,U,y,me,Kt),Z=new Dg(Y,yt,K),X=new vg(O),I=new Z3(R,w,ht,yt,me,X),H=new gx(R,O),$=new j3,B=new sx(ht),P=new gg(R,w,Be,C,p,c),te=new cx(R,C,yt),ge=new xx(Y,Kt,yt,Be),J=new yg(Y,ht,Kt),j=new Lg(Y,ht,Kt),Kt.programs=I.programs,R.capabilities=yt,R.extensions=ht,R.properties=O,R.renderLists=$,R.shadowMap=te,R.state=Be,R.info=Kt}_!==Si&&(L=new Bg(_,t.width,t.height,a,s,r));let de=new Gu(R,Y);this.xr=de,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(ee,xe,!1))},this.getSize=function(A){return A.set(ee,xe)},this.setSize=function(A,V,le=!0){if(de.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,xe=V,t.width=Math.floor(A*ye),t.height=Math.floor(V*ye),le===!0&&(t.style.width=A+"px",t.style.height=V+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ee*ye,xe*ye).floor()},this.setDrawingBufferSize=function(A,V,le){ee=A,xe=V,ye=le,t.width=Math.floor(A*le),t.height=Math.floor(V*le),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(_===Si){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ce)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,V,le,se){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,V,le,se),Be.viewport(ce.copy(Ne).multiplyScalar(St()).round())},this.getScissor=function(A){return A.copy(Ye)},this.setScissor=function(A,V,le,se){A.isVector4?Ye.set(A.x,A.y,A.z,A.w):Ye.set(A,V,le,se),Be.scissor(Ee.copy(Ye).multiplyScalar(St()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){Be.setScissorTest(tt=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,le=!0){let se=0;if(A){let he=!1;if(ue!==null){let Ve=ue.texture.format;he=g.has(Ve)}if(he){let Ve=ue.texture.type,Qe=m.has(Ve),He=P.getClearColor(),Ke=P.getClearAlpha(),at=He.r,mt=He.g,Lt=He.b;Qe?(M[0]=at,M[1]=mt,M[2]=Lt,M[3]=Ke,Y.clearBufferuiv(Y.COLOR,0,M)):(b[0]=at,b[1]=mt,b[2]=Lt,b[3]=Ke,Y.clearBufferiv(Y.COLOR,0,b))}else se|=Y.COLOR_BUFFER_BIT}V&&(se|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(se|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Y.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),P.dispose(),$.dispose(),B.dispose(),K.dispose(),O.dispose(),w.dispose(),C.dispose(),U.dispose(),me.dispose(),ge.dispose(),I.dispose(),de.dispose(),de.removeEventListener("sessionstart",Je),de.removeEventListener("sessionend",dt),Yt.stop()};function Ce(A){A.preventDefault(),ko("WebGLRenderer: Context Lost."),D=!0}function Se(){ko("WebGLRenderer: Context Restored."),D=!1;let A=Kt.autoReset,V=te.enabled,le=te.autoUpdate,se=te.needsUpdate,he=te.type;ke(),Kt.autoReset=A,te.enabled=V,te.autoUpdate=le,te.needsUpdate=se,te.type=he}function Ae(A){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){let V=A.target;V.removeEventListener("dispose",Q),Xe(V)}function Xe(A){ot(A),O.remove(A)}function ot(A){let V=O.get(A).programs;V!==void 0&&(V.forEach(function(le){I.releaseProgram(le)}),A.isShaderMaterial&&I.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,le,se,he,Ve){V===null&&(V=_t);let Qe=he.isMesh&&he.matrixWorld.determinantAffine()<0,He=Un(A,V,le,se,he);Be.setMaterial(se,Qe);let Ke=le.index,at=1;if(se.wireframe===!0){if(Ke=U.getWireframeAttribute(le),Ke===void 0)return;at=2}let mt=le.drawRange,Lt=le.attributes.position,Ze=mt.start*at,Rt=(mt.start+mt.count)*at;Ve!==null&&(Ze=Math.max(Ze,Ve.start*at),Rt=Math.min(Rt,(Ve.start+Ve.count)*at)),Ke!==null?(Ze=Math.max(Ze,0),Rt=Math.min(Rt,Ke.count)):Lt!=null&&(Ze=Math.max(Ze,0),Rt=Math.min(Rt,Lt.count));let cn=Rt-Ze;if(cn<0||cn===1/0)return;me.setup(he,se,He,le,Ke);let wt,Zt=J;if(Ke!==null&&(wt=y.get(Ke),Zt=j,Zt.setIndex(wt)),he.isMesh)se.wireframe===!0?(Be.setLineWidth(se.wireframeLinewidth*St()),Zt.setMode(Y.LINES)):Zt.setMode(Y.TRIANGLES);else if(he.isLine){let wn=se.linewidth;wn===void 0&&(wn=1),Be.setLineWidth(wn*St()),he.isLineSegments?Zt.setMode(Y.LINES):he.isLineLoop?Zt.setMode(Y.LINE_LOOP):Zt.setMode(Y.LINE_STRIP)}else he.isPoints?Zt.setMode(Y.POINTS):he.isSprite&&Zt.setMode(Y.TRIANGLES);if(he.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let wn=he._multiDrawStarts,st=he._multiDrawCounts,Ct=he._multiDrawCount,Xt=Ke?y.get(Ke).bytesPerElement:1,ii=O.get(se).currentProgram.getUniforms();for(let pn=0;pn<Ct;pn++)ii.setValue(Y,"_gl_DrawID",pn),Zt.render(wn[pn]/Xt,st[pn])}else if(he.isInstancedMesh)Zt.renderInstances(Ze,cn,he.count);else if(le.isInstancedBufferGeometry){let wn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,st=Math.min(le.instanceCount,wn);Zt.renderInstances(Ze,cn,st)}else Zt.render(Ze,cn)};function Bt(A,V,le,se){z!==null&&A.isNodeMaterial&&z.setObject(se,A),we===!0&&X.setState(A,le,!1),A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Ti(A,V,se),A.side=$s,A.needsUpdate=!0,Ti(A,V,se),A.side=gi):Ti(A,V,se)}this.compile=function(A,V,le=null){le===null&&(le=A),z!==null&&z.renderStart(A,V,le),E=B.get(le),E.init(V),S.push(E),le.traverseVisible(function(he){he.isLight&&he.layers.test(V.layers)&&(E.pushLight(he),he.castShadow&&E.pushShadow(he))}),A!==le&&A.traverseVisible(function(he){he.isLight&&he.layers.test(V.layers)&&(E.pushLight(he),he.castShadow&&E.pushShadow(he))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),We=this.localClippingEnabled,we=X.init(this.clippingPlanes,We),we===!0&&X.setGlobalState(this.clippingPlanes,V),z!==null&&te.render(E.state.shadowsArray,le,V);let se=new Set;return A.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let Ve=he.material;if(Ve)if(Array.isArray(Ve))for(let Qe=0;Qe<Ve.length;Qe++){let He=Ve[Qe];Bt(He,le,V,he),se.add(He)}else Bt(Ve,le,V,he),se.add(Ve)}),E=S.pop(),z!==null&&z.renderEnd(),se},this.compileAsync=function(A,V,le=null){let se=this.compile(A,V,le);return new Promise(he=>{function Ve(){if(se.forEach(function(Qe){let Ke=O.get(Qe).currentProgram;(Ke===void 0||Ke.isReady())&&se.delete(Qe)}),se.size===0){he(A);return}setTimeout(Ve,10)}ht.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ve=null;function nt(A){ve&&ve(A)}function Je(){Yt.stop()}function dt(){Yt.start()}let Yt=new w0;Yt.setAnimationLoop(nt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(A){ve=A,de.setAnimationLoop(A),A===null?Yt.stop():Yt.start()},de.addEventListener("sessionstart",Je),de.addEventListener("sessionend",dt),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(A,V);let le=de.enabled===!0&&de.isPresenting===!0,se=L!==null&&(ue===null||le)&&L.begin(R,ue);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(V),V=de.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,V,ue),E=B.get(A,S.length),E.init(V),E.state.textureUnits=K.getTextureUnits(),S.push(E),ze.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Re.setFromArrayCamera(V):fe.setFromProjectionMatrix(ze,ki,V.reversedDepth),We=this.localClippingEnabled,we=X.init(this.clippingPlanes,We),T=$.get(A,x.length),T.init(),x.push(T),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Qe=R.xr.getDepthSensingMesh();Qe!==null&&ti(Qe,V,-1/0,R.sortObjects)}ti(A,V,0,R.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Ue,Ge),pt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,pt&&P.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),we===!0&&X.beginShadows();let he=E.state.shadowsArray;if(te.render(he,A,V),we===!0&&X.endShadows(),(se&&L.hasRenderPass())===!1){let Qe=T.opaque,He=T.transmissive;if(E.setupLights(),V.isArrayCamera){let Ke=V.cameras;if(He.length>0)for(let at=0,mt=Ke.length;at<mt;at++){let Lt=Ke[at];zt(Qe,He,A,Lt)}pt&&P.render(A);for(let at=0,mt=Ke.length;at<mt;at++){let Lt=Ke[at];Sn(T,A,Lt,Lt.viewport)}}else He.length>0&&zt(Qe,He,A,V),pt&&P.render(A),Sn(T,A,V)}ue!==null&&W===0&&(K.updateMultisampleRenderTarget(ue),K.updateRenderTargetMipmap(ue)),se&&L.end(R),A.isScene===!0&&A.onAfterRender(R,A,V),me.resetDefaultState(),ie=-1,ae=null,S.pop(),S.length>0?(E=S[S.length-1],K.setTextureUnits(E.state.textureUnits),we===!0&&X.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,z!==null&&z.renderEnd()};function ti(A,V,le,se){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){let Qe=V.isArrayCamera?Re:fe;if(!A.frustumCulled||A.intersectsFrustum(Qe)){se&&je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ze);let He=C.update(A),Ke=A.material;Ke.visible&&T.push(A,He,Ke,le,je.z,null,V)}}else if(A.isMesh||A.isLine||A.isPoints){let Qe=V.isArrayCamera?Re:fe;if(!A.frustumCulled||A.intersectsFrustum(Qe)){let He=C.update(A),Ke=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),je.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),je.copy(He.boundingSphere.center)),je.applyMatrix4(A.matrixWorld).applyMatrix4(ze)),Array.isArray(Ke)){let at=He.groups;for(let mt=0,Lt=at.length;mt<Lt;mt++){let Ze=at[mt],Rt=Ke[Ze.materialIndex];Rt&&Rt.visible&&T.push(A,He,Rt,le,je.z,Ze,V)}}else Ke.visible&&T.push(A,He,Ke,le,je.z,null,V)}}}let Ve=A.children;for(let Qe=0,He=Ve.length;Qe<He;Qe++)ti(Ve[Qe],V,le,se)}function Sn(A,V,le,se){let{opaque:he,transmissive:Ve,transparent:Qe}=A;E.setupLightsView(le),we===!0&&X.setGlobalState(R.clippingPlanes,le),se&&Be.viewport(ce.copy(se)),he.length>0&&Nn(he,V,le),Ve.length>0&&Nn(Ve,V,le),Qe.length>0&&Nn(Qe,V,le),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function zt(A,V,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[se.id]===void 0){let Ze=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[se.id]=new jn(1,1,{generateMipmaps:!0,type:Ze?ji:Si,minFilter:bs,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let Ve=E.state.transmissionRenderTarget[se.id],Qe=se.viewport||ce;Ve.setSize(Qe.z*R.transmissionResolutionScale,Qe.w*R.transmissionResolutionScale);let He=R.getRenderTarget(),Ke=R.getActiveCubeFace(),at=R.getActiveMipmapLevel();R.setRenderTarget(Ve),R.getClearColor(oe),be=R.getClearAlpha(),be<1&&R.setClearColor(16777215,.5),R.clear(),pt&&P.render(le);let mt=R.toneMapping;R.toneMapping=ls;let Lt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),E.setupLightsView(se),we===!0&&X.setGlobalState(R.clippingPlanes,se),Nn(A,le,se),K.updateMultisampleRenderTarget(Ve),K.updateRenderTargetMipmap(Ve),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Rt=0,cn=V.length;Rt<cn;Rt++){let wt=V[Rt],{object:Zt,geometry:wn,material:st,group:Ct}=wt;if(st.side===gi&&Zt.layers.test(se.layers)){let Xt=st.side;st.side=kn,st.needsUpdate=!0,ni(Zt,le,se,wn,st,Ct),st.side=Xt,st.needsUpdate=!0,Ze=!0}}Ze===!0&&(K.updateMultisampleRenderTarget(Ve),K.updateRenderTargetMipmap(Ve))}R.setRenderTarget(He,Ke,at),R.setClearColor(oe,be),Lt!==void 0&&(se.viewport=Lt),R.toneMapping=mt}function Nn(A,V,le){let se=V.isScene===!0?V.overrideMaterial:null;for(let he=0,Ve=A.length;he<Ve;he++){let Qe=A[he],{object:He,geometry:Ke,group:at}=Qe,mt=Qe.material;mt.allowOverride===!0&&se!==null&&(mt=se),He.layers.test(le.layers)&&ni(He,V,le,Ke,mt,at)}}function ni(A,V,le,se,he,Ve){z!==null&&he.isNodeMaterial&&z.setObject(A,he),A.onBeforeRender(R,V,le,se,he,Ve),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),he.onBeforeRender(R,V,le,se,A,Ve),he.transparent===!0&&he.side===gi&&he.forceSinglePass===!1?(he.side=kn,he.needsUpdate=!0,R.renderBufferDirect(le,V,se,he,A,Ve),he.side=$s,he.needsUpdate=!0,R.renderBufferDirect(le,V,se,he,A,Ve),he.side=gi):R.renderBufferDirect(le,V,se,he,A,Ve),A.onAfterRender(R,V,le,se,he,Ve)}function ln(A){let V=0;for(let le of A)le.texture!==null&&V++;return V}function Ti(A,V,le){V.isScene!==!0&&(V=_t);let se=O.get(A),he=E.state.lights,Ve=E.state.shadowsArray,Qe=he.state.version,He=I.getParameters(A,he.state,Ve,V,le,E.state.lightProbeGridArray),Ke=I.getProgramCacheKey(He),at=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,se.fog=V.fog;let mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=w.get(A.envMap||se.environment,mt),se.envMapRotation=se.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,at===void 0&&(A.addEventListener("dispose",Q),at=new Map,se.programs=at,se.programVariants=new Map);let Lt=at.get(Ke);if(Lt!==void 0){if(se.currentProgram===Lt&&se.lightsStateVersion===Qe)return is(A,He),Lt}else He.uniforms=I.getUniforms(A),z!==null&&A.isNodeMaterial&&z.build(A,le,He),A.onBeforeCompile(He,R),Lt=I.acquireProgram(He,Ke),at.set(Ke,Lt),se.uniforms=He.uniforms;let Ze=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=X.uniform),is(A,He),se.needsLights=en(A),se.lightsStateVersion=Qe,se.needsLights&&(Ze.ambientLightColor.value=he.state.ambient,Ze.lightProbe.value=he.state.probe,Ze.sunLights.value=he.state.sun,Ze.sunLightShadows.value=he.state.sunShadow,Ze.directionalLights.value=he.state.directional,Ze.directionalLightShadows.value=he.state.directionalShadow,Ze.spotLights.value=he.state.spot,Ze.spotLightShadows.value=he.state.spotShadow,Ze.rectAreaLights.value=he.state.rectArea,Ze.ltc_1.value=he.state.rectAreaLTC1,Ze.ltc_2.value=he.state.rectAreaLTC2,Ze.pointLights.value=he.state.point,Ze.pointLightShadows.value=he.state.pointShadow,Ze.hemisphereLights.value=he.state.hemi,Ze.sunShadowMatrix.value=he.state.sunShadowMatrix,Ze.sunShadowCascade.value=he.state.sunShadowCascade,Ze.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Ze.spotLightMatrix.value=he.state.spotLightMatrix,Ze.spotLightMap.value=he.state.spotLightMap,Ze.pointShadowMatrix.value=he.state.pointShadowMatrix),se.numLightProbeGrids=ln(E.state.lightProbeGridArray),se.currentProgram=Lt,se.uniformsList=null,Lt}function ns(A,V,le,se,he){let Ve=O.get(A),Qe=Ve.currentProgram.id+","+se+","+he,He=Ve.programVariants.get(Qe);return He===void 0?(He=Ti(A,V,le),Ve.programVariants.set(Qe,He)):(Ve.currentProgram=He,Ve.uniformsList=null,Ve.outputColorSpace=se,Ve.toneMapping=he),He}function Xi(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=lo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function is(A,V){let le=O.get(A);le.outputColorSpace=V.outputColorSpace,le.batching=V.batching,le.batchingColor=V.batchingColor,le.instancing=V.instancing,le.instancingColor=V.instancingColor,le.instancingMorph=V.instancingMorph,le.skinning=V.skinning,le.morphTargets=V.morphTargets,le.morphNormals=V.morphNormals,le.morphColors=V.morphColors,le.morphTargetsCount=V.morphTargetsCount,le.numClippingPlanes=V.numClippingPlanes,le.numIntersection=V.numClipIntersection,le.vertexAlphas=V.vertexAlphas,le.vertexTangents=V.vertexTangents,le.toneMapping=V.toneMapping}function Un(A,V,le,se,he){V.isScene!==!0&&(V=_t),K.resetTextureUnits();let Ve=V.fog,Qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?V.environment:null,He=ue===null?R.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:$t.workingColorSpace,Ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,at=w.get(se.envMap||Qe,Ke),mt=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Lt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!le.morphAttributes.position,Rt=!!le.morphAttributes.normal,cn=!!le.morphAttributes.color,wt=ls;se.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(wt=R.toneMapping);let Zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,wn=Zt!==void 0?Zt.length:0,st=O.get(se),Ct=E.state.lights;if(we===!0&&(We===!0||A!==ae)){let dn=A===ae&&se.id===ie;X.setState(se,A,dn)}let Xt=!1,ii=!1;se.version===st.__version?st.needsLights&&st.lightsStateVersion!==Ct.state.version||he.isBatchedMesh&&st.batching===!1||!he.isBatchedMesh&&st.batching===!0||he.isBatchedMesh&&st.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&st.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&st.instancing===!1||!he.isInstancedMesh&&st.instancing===!0||he.isSkinnedMesh&&st.skinning===!1||!he.isSkinnedMesh&&st.skinning===!0||he.isInstancedMesh&&st.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&st.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&st.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&st.instancingMorph===!1&&he.morphTexture!==null||st.envMap!==at||se.fog===!0&&st.fog!==Ve||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==X.numPlanes||st.numIntersection!==X.numIntersection)||st.vertexAlphas!==mt||st.vertexTangents!==Lt||st.morphTargets!==Ze||st.morphNormals!==Rt||st.morphColors!==cn||st.morphTargetsCount!==wn||st.numLightProbeGrids!==ln(E.state.lightProbeGridArray)?Xt=!0:(st.outputColorSpace!==He||st.toneMapping!==wt)&&(ii=!0):(Xt=!0,st.__version=se.version);let pn=st.currentProgram;(Xt===!0||ii===!0)&&(pn=ii===!0?ns(se,V,he,He,wt):Ti(se,V,he),z&&se.isNodeMaterial&&z.onUpdateProgram(se,pn,st));let Ls=!1,qi=!1,Ni=!1,Gt=pn.getUniforms(),Pn=st.uniforms;if(Be.useProgram(pn.program)&&(Ls=!0,qi=!0,Ni=!0),se.id!==ie&&(ie=se.id,qi=!0),Ls||ae!==A){Be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(Y,"projectionMatrix",A.projectionMatrix),Gt.setValue(Y,"viewMatrix",A.matrixWorldInverse);let Tn=Gt.map.cameraPosition;Tn!==void 0&&Tn.setValue(Y,lt.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&Gt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ae!==A&&(ae=A,qi=!0,Ni=!0)}if(st.needsLights&&(Ct.state.sunShadowMap.length>0&&Gt.setValue(Y,"sunShadowMap",Ct.state.sunShadowMap,K),Ct.state.directionalShadowMap.length>0&&Gt.setValue(Y,"directionalShadowMap",Ct.state.directionalShadowMap,K),Ct.state.spotShadowMap.length>0&&Gt.setValue(Y,"spotShadowMap",Ct.state.spotShadowMap,K),Ct.state.pointShadowMap.length>0&&Gt.setValue(Y,"pointShadowMap",Ct.state.pointShadowMap,K)),he.isSkinnedMesh){Gt.setOptional(Y,he,"bindMatrix"),Gt.setOptional(Y,he,"bindMatrixInverse");let dn=he.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Gt.setValue(Y,"boneTexture",dn.boneTexture,K))}he.isBatchedMesh&&(Gt.setOptional(Y,he,"batchingTexture"),Gt.setValue(Y,"batchingTexture",he._matricesTexture,K),Gt.setOptional(Y,he,"batchingIdTexture"),Gt.setValue(Y,"batchingIdTexture",he._indirectTexture,K),Gt.setOptional(Y,he,"batchingColorTexture"),he._colorsTexture!==null&&Gt.setValue(Y,"batchingColorTexture",he._colorsTexture,K));let Bn=le.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Z.update(he,le,pn),(qi||st.receiveShadow!==he.receiveShadow)&&(st.receiveShadow=he.receiveShadow,Gt.setValue(Y,"receiveShadow",he.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&V.environment!==null&&(Pn.envMapIntensity.value=V.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=_x()),qi){if(Gt.setValue(Y,"toneMappingExposure",R.toneMappingExposure),st.needsLights&&gt(Pn,Ni),Ve&&se.fog===!0&&H.refreshFogUniforms(Pn,Ve),H.refreshMaterialUniforms(Pn,se,ye,xe,E.state.transmissionRenderTarget[A.id]),st.needsLights&&st.numLightProbeGrids>0){let dn=v,Tn=0;for(let Ui of E.state.lightProbeGridArray)Ui.texture!==null&&(dn.textures[Tn]=Ui.texture,dn.min[Tn]=Ui.boundingBox.min,dn.max[Tn]=Ui.boundingBox.max,dn.resolution[Tn]=Ui.resolution,Tn++);for(let Ui in dn)dn[Ui].length=Tn;Pn.probesSH.value=dn.textures,Pn.probesMin.value=dn.min,Pn.probesMax.value=dn.max,Pn.probesResolution.value=dn.resolution}lo.upload(Y,Xi(st),Pn,K)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(lo.upload(Y,Xi(st),Pn,K),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(Y,"center",he.center),Gt.setValue(Y,"modelViewMatrix",he.modelViewMatrix),Gt.setValue(Y,"normalMatrix",he.normalMatrix),Gt.setValue(Y,"modelMatrix",he.matrixWorld),se.uniformsGroups!==void 0){let dn=se.uniformsGroups;for(let Tn=0,Ui=dn.length;Tn<Ui;Tn++){let Fs=dn[Tn];ge.update(Fs,pn),ge.bind(Fs,pn)}}return pn}function gt(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function en(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(A,V,le){let se=O.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=V,O.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let le=O.get(A);le.__webglFramebuffer=V,le.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,le=0){ue=A,G=V,W=le;let se=null,he=!1,Ve=!1;if(A){let He=O.get(A);if(He.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(Y.FRAMEBUFFER,He.__webglFramebuffer),ce.copy(A.viewport),Ee.copy(A.scissor),Le=A.scissorTest,Be.viewport(ce),Be.scissor(Ee),Be.setScissorTest(Le),ie=-1;return}else if(He.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(He.__hasExternalTextures)K.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let mt=A.depthTexture;if(He.__boundDepthTexture!==mt){if(mt!==null&&O.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ve=!0);let at=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[V])?se=at[V][le]:se=at[V],he=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?se=O.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?se=at[le]:se=at,ce.copy(A.viewport),Ee.copy(A.scissor),Le=A.scissorTest}else ce.copy(Ne).multiplyScalar(ye).floor(),Ee.copy(Ye).multiplyScalar(ye).floor(),Le=tt;if(le!==0&&(se=q),Be.bindFramebuffer(Y.FRAMEBUFFER,se)&&Be.drawBuffers(A,se),Be.viewport(ce),Be.scissor(Ee),Be.setScissorTest(Le),he){let He=O.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+V,He.__webglTexture,le)}else if(Ve){let He=V;for(let Ke=0;Ke<A.textures.length;Ke++){let at=O.get(A.textures[Ke]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ke,at.__webglTexture,le,He)}}else if(A!==null&&le!==0){let He=O.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,He.__webglTexture,le)}ie=-1};function on(A){let V=O.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=yt.textureFormatReadable(A.format),V.__typeReadable=yt.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,le,se,he,Ve,Qe,He=0){if(!(A&&A.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ke=Ke[Qe],Array.isArray(Ke)&&(Ke=Ke[0])),Ke){Be.bindFramebuffer(Y.FRAMEBUFFER,Ke);try{let at=A.textures[He],mt=at.format,Lt=at.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+He);let Ze=on(at);if(Ze.__formatReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-se&&le>=0&&le<=A.height-he&&Y.readPixels(V,le,se,he,re.convert(mt),re.convert(Lt),Ve)}finally{let at=ue!==null?O.get(ue).__webglFramebuffer:null;Be.bindFramebuffer(Y.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(A,V,le,se,he,Ve,Qe,He=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ke=Ke[Qe],Array.isArray(Ke)&&(Ke=Ke[0])),Ke)if(V>=0&&V<=A.width-se&&le>=0&&le<=A.height-he){Be.bindFramebuffer(Y.FRAMEBUFFER,Ke);let at=A.textures[He],mt=at.format,Lt=at.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+He);let Ze=on(at);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Rt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ve.byteLength,Y.STREAM_READ),Y.readPixels(V,le,se,he,re.convert(mt),re.convert(Lt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let cn=ue!==null?O.get(ue).__webglFramebuffer:null;Be.bindFramebuffer(Y.FRAMEBUFFER,cn);let wt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Wf(Y,wt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Rt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ve),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Rt),Y.deleteSync(wt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,le=0){let se=Math.pow(2,-le),he=Math.floor(A.image.width*se),Ve=Math.floor(A.image.height*se),Qe=V!==null?V.x:0,He=V!==null?V.y:0;K.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,le,0,0,Qe,He,he,Ve),Be.unbindTexture()},this.copyTextureToTexture=function(A,V,le=null,se=null,he=0,Ve=0){let Qe,He,Ke,at,mt,Lt,Ze,Rt,cn,wt=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(le!==null)Qe=le.max.x-le.min.x,He=le.max.y-le.min.y,Ke=le.isBox3?le.max.z-le.min.z:1,at=le.min.x,mt=le.min.y,Lt=le.isBox3?le.min.z:0;else{let Gt=Math.pow(2,-he);Qe=Math.floor(wt.width*Gt),He=Math.floor(wt.height*Gt),A.isDataArrayTexture?Ke=wt.depth:A.isData3DTexture?Ke=Math.floor(wt.depth*Gt):Ke=1,at=0,mt=0,Lt=0}se!==null?(Ze=se.x,Rt=se.y,cn=se.z):(Ze=0,Rt=0,cn=0);let Zt=re.convert(V.format),wn=re.convert(V.type),st;V.isData3DTexture?(K.setTexture3D(V,0),st=Y.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),st=Y.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),st=Y.TEXTURE_2D),Be.activeTexture(Y.TEXTURE0),Be.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,V.flipY),Be.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Be.pixelStorei(Y.UNPACK_ALIGNMENT,V.unpackAlignment);let Ct=Be.getParameter(Y.UNPACK_ROW_LENGTH),Xt=Be.getParameter(Y.UNPACK_IMAGE_HEIGHT),ii=Be.getParameter(Y.UNPACK_SKIP_PIXELS),pn=Be.getParameter(Y.UNPACK_SKIP_ROWS),Ls=Be.getParameter(Y.UNPACK_SKIP_IMAGES);Be.pixelStorei(Y.UNPACK_ROW_LENGTH,wt.width),Be.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,wt.height),Be.pixelStorei(Y.UNPACK_SKIP_PIXELS,at),Be.pixelStorei(Y.UNPACK_SKIP_ROWS,mt),Be.pixelStorei(Y.UNPACK_SKIP_IMAGES,Lt);let qi=A.isDataArrayTexture||A.isData3DTexture,Ni=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Gt=O.get(A),Pn=O.get(V),Bn=O.get(Gt.__renderTarget),dn=O.get(Pn.__renderTarget);Be.bindFramebuffer(Y.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let Tn=0;Tn<Ke;Tn++)qi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,O.get(A).__webglTexture,he,Lt+Tn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,O.get(V).__webglTexture,Ve,cn+Tn)),Y.blitFramebuffer(at,mt,at+Qe,mt+He,Ze,Rt,Ze+Qe,Rt+He,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Be.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(he!==0||A.isRenderTargetTexture||O.has(A)){let Gt=O.get(A),Pn=O.get(V);Be.bindFramebuffer(Y.READ_FRAMEBUFFER,F),Be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,N);for(let Bn=0;Bn<Ke;Bn++)qi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Gt.__webglTexture,he,Lt+Bn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Gt.__webglTexture,he),Ni?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pn.__webglTexture,Ve,cn+Bn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pn.__webglTexture,Ve),he!==0?Y.blitFramebuffer(at,mt,at+Qe,mt+He,Ze,Rt,Ze+Qe,Rt+He,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ni?Y.copyTexSubImage3D(st,Ve,Ze,Rt,cn+Bn,at,mt,Qe,He):Y.copyTexSubImage2D(st,Ve,Ze,Rt,at,mt,Qe,He);Be.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Be.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ni?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(st,Ve,Ze,Rt,cn,Qe,He,Ke,Zt,wn,wt.data):V.isCompressedArrayTexture?Y.compressedTexSubImage3D(st,Ve,Ze,Rt,cn,Qe,He,Ke,Zt,wt.data):Y.texSubImage3D(st,Ve,Ze,Rt,cn,Qe,He,Ke,Zt,wn,wt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ve,Ze,Rt,Qe,He,Zt,wn,wt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ve,Ze,Rt,wt.width,wt.height,Zt,wt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ve,Ze,Rt,Qe,He,Zt,wn,wt);Be.pixelStorei(Y.UNPACK_ROW_LENGTH,Ct),Be.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Xt),Be.pixelStorei(Y.UNPACK_SKIP_PIXELS,ii),Be.pixelStorei(Y.UNPACK_SKIP_ROWS,pn),Be.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ls),Ve===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&Y.generateMipmap(st),Be.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){G=0,W=0,ue=null,Be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(e),t.unpackColorSpace=$t._getUnpackColorSpace()}};function As(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yn;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let f=i[h],d=0,u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p]),u++}if(u!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=U0(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let _=0;_<o[h].length;++_)u.push(o[h][_][d]);let p=U0(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function U0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Kn(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<t;p++){let _=h.getComponent(d,p);a.setComponent(d+f,p,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var pe={ink:"#000000",paper:"#FFFFFF",yellow:"#FFE14D",mint:"#2FBF71",zorin:"#3D7BFF",endless:"#FF7A1A",grey:"#D9D9D3",light:"#ECECE6"},Ht=1024,It=626,Gc='"Archivo Black", "Arial Black", Impact, sans-serif';function k0(i,e,t,n,s,r){if(i.beginPath(),i.roundRect){i.roundRect(e,t,n,s,r);return}i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function qt(i,e,t,n,s,r,o,a=8){k0(i,e,t,n,s,r),i.fillStyle=o,i.fill(),a&&(i.lineWidth=a,i.strokeStyle=pe.ink,i.stroke())}function Gn(i,e,t,n,s,r=8){i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fillStyle=s,i.fill(),r&&(i.lineWidth=r,i.strokeStyle=pe.ink,i.stroke())}function Rs(i,e,t=10,n=pe.ink){i.beginPath(),i.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)i.lineTo(e[s],e[s+1]);i.lineWidth=t,i.lineCap="round",i.lineJoin="round",i.strokeStyle=n,i.stroke()}function B0(i,e,t,n,s,r,o){qt(i,e+12,t+12,n,s,18,pe.ink,0),qt(i,e,t,n,s,18,pe.paper),k0(i,e+4,t+4,n-8,52,14),i.fillStyle=pe.light,i.fill(),i.fillStyle=pe.ink,i.fillRect(e+4,t+56,n-8,6),[r,pe.grey,pe.grey].forEach((c,l)=>Gn(i,e+n-34-l*34,t+30,11,c,4)),[.62,.8,.5].forEach((c,l)=>qt(i,e+32,t+92+l*34,n*c-40,16,8,pe.grey,0)),qt(i,e+32,t+200,n*.42,s-232,12,o,5)}function O0(i,e,t,n,s,r){let o=70+s*44;qt(i,e+10,t+10,n,o,16,pe.ink,0),qt(i,e,t,n,o,16,pe.paper),qt(i,e+18,t+18,n-36,34,17,pe.light,4);for(let a=0;a<s;a++){let c=t+72+a*44;qt(i,e+22,c,26,26,6,r[a%r.length],4),qt(i,e+64,c+7,[150,110,170,130,140][a%5],12,6,pe.grey,0)}}var H0={hello(i){i.fillStyle=pe.endless,i.fillRect(0,0,Ht,It),Gn(i,Ht/2+16,It/2+16,200,pe.ink,0),Gn(i,Ht/2,It/2,200,pe.paper,10),i.fillStyle=pe.ink,i.font=`300px ${Gc}`,i.textAlign="center",i.textBaseline="middle",i.fillText("?",Ht/2+6,It/2+18)},grid100(i){i.fillStyle=pe.yellow,i.fillRect(0,0,Ht,It);let e=40,t=12,n=10,s=n*e+(n-1)*t,r=(Ht-s)/2,o=(It-s)/2;for(let a=0;a<100;a++){let c=r+a%n*(e+t),l=o+Math.floor(a/n)*(e+t);qt(i,c,l,e,e,8,pe.paper,5)}},funnel(i){i.fillStyle=pe.ink,i.fillRect(0,0,Ht,It),i.beginPath(),i.moveTo(262,110),i.lineTo(762,110),i.lineTo(580,330),i.lineTo(580,450),i.lineTo(444,450),i.lineTo(444,330),i.closePath(),i.fillStyle=pe.paper,i.fill(),i.lineWidth=10,i.strokeStyle=pe.yellow,i.stroke(),[pe.mint,pe.zorin,pe.endless].forEach((e,t)=>Gn(i,412+t*100,530,30,e,7)),i.strokeStyle=pe.ink},mint(i){i.fillStyle=pe.mint,i.fillRect(0,0,Ht,It),qt(i,36,34,64,64,14,pe.paper,6),qt(i,36,130,64,64,14,pe.yellow,6),B0(i,420,60,560,410,pe.mint,"#CDEFD9"),O0(i,30,238,330,5,[pe.ink,pe.grey,pe.mint,pe.light,pe.ink]),i.fillStyle=pe.ink,i.fillRect(0,It-62,Ht,62),qt(i,22,It-50,38,38,8,pe.yellow,0),[84,132,180].forEach(e=>qt(i,e,It-46,34,30,6,pe.paper,0)),qt(i,Ht-120,It-42,96,22,11,pe.paper,0)},zorin(i){i.fillStyle=pe.zorin,i.fillRect(0,0,Ht,It),qt(i,36,34,64,64,14,pe.paper,6),qt(i,36,130,64,64,14,pe.yellow,6),B0(i,150,70,480,380,pe.zorin,"#D5E3FF"),qt(i,702,82,290,250,22,pe.ink,0),qt(i,690,70,290,250,22,pe.paper);let e=835,t=250,n=92;i.lineCap="round",i.beginPath(),i.arc(e,t,n,Math.PI,0),i.lineWidth=22,i.strokeStyle=pe.light,i.stroke(),i.beginPath(),i.arc(e,t,n,Math.PI,Math.PI*1.25),i.strokeStyle=pe.zorin,i.stroke(),Rs(i,[e,t,e+Math.cos(Math.PI*1.2)*74,t+Math.sin(Math.PI*1.2)*74],12),Gn(i,e,t,14,pe.ink,0),O0(i,30,300,300,3,[pe.zorin,pe.ink,pe.grey]),i.fillStyle=pe.paper,i.fillRect(0,It-62,Ht,62),i.fillStyle=pe.ink,i.fillRect(0,It-66,Ht,6),qt(i,22,It-50,38,38,8,pe.zorin,5),[84,132].forEach(s=>qt(i,s,It-46,34,30,6,"#777770",0)),qt(i,Ht-120,It-42,96,22,11,"#777770",0)},endless(i){i.fillStyle=pe.endless,i.fillRect(0,0,Ht,It),qt(i,300,40,424,64,32,pe.paper,7),Gn(i,340,72,13,pe.paper,6),Rs(i,[350,82,362,94],7),qt(i,380,64,200,14,7,pe.grey,0);let e=[pe.paper,pe.ink,pe.yellow];for(let t=0;t<18;t++){let n=182+t%6*112,s=140+Math.floor(t/6)*128,r=e[(t+Math.floor(t/6))%3];qt(i,n,s,84,84,22,r,7);let o=r===pe.paper?pe.endless:r===pe.ink?pe.yellow:pe.ink;t%3===0?Gn(i,n+42,s+42,17,o,0):t%3===1?qt(i,n+26,s+26,32,32,7,o,0):(qt(i,n+22,s+28,40,10,5,o,0),qt(i,n+22,s+46,28,10,5,o,0))}i.fillStyle=pe.ink,i.fillRect(0,It-56,Ht,56);for(let t=0;t<5;t++)Gn(i,Ht/2-100+t*50,It-28,11,pe.paper,0);Gn(i,930,72,44,pe.ink,0),i.lineCap="round",[12,24,36].forEach(t=>{i.beginPath(),i.arc(930,92,t,Math.PI*1.25,Math.PI*1.75),i.lineWidth=6,i.strokeStyle=pe.paper,i.stroke()}),Rs(i,[904,44,956,100],8,pe.yellow)},chart(i){i.fillStyle=pe.paper,i.fillRect(0,0,Ht,It);let e=It-90;[[18,pe.mint],[16,pe.zorin],[20,pe.endless]].forEach(([n,s],r)=>{let o=n/25*420,a=222+r*210;qt(i,a+14,e-o+14,150,o,10,pe.ink,0),qt(i,a,e-o,150,o,10,s)}),Rs(i,[120,e+4,Ht-120,e+4],12)},access(i){i.fillStyle=pe.zorin,i.fillRect(0,0,Ht,It),Gn(i,Ht/2+16,It/2+16,220,pe.ink,0),Gn(i,Ht/2,It/2,220,pe.paper,10);let e=Ht/2,t=It/2;Gn(i,e,t-118,34,pe.ink,0),Rs(i,[e-130,t-54,e+130,t-54],30),Rs(i,[e,t-54,e,t+40],30),Rs(i,[e,t+40,e-66,t+150],30),Rs(i,[e,t+40,e+66,t+150],30)},check(i){i.fillStyle=pe.endless,i.fillRect(0,0,Ht,It),Gn(i,Ht/2+16,It/2+16,210,pe.ink,0),Gn(i,Ht/2,It/2,210,pe.paper,10),Rs(i,[Ht/2-104,It/2+6,Ht/2-30,It/2+82,Ht/2+112,It/2-76],46)},usb(i){i.fillStyle=pe.yellow,i.fillRect(0,0,Ht,It),i.save(),i.translate(Ht/2,It/2),i.rotate(-.35),qt(i,-242,-77,360,190,30,pe.ink,0),qt(i,-260,-95,360,190,30,pe.ink,0),qt(i,-200,-50,200,100,14,pe.endless,7),qt(i,100,-66,170,132,12,pe.paper,9),qt(i,150,-34,34,26,4,pe.ink,0),qt(i,150,10,34,26,4,pe.ink,0),i.restore()},smile(i){i.fillStyle=pe.mint,i.fillRect(0,0,Ht,It),Gn(i,Ht/2+16,It/2+16,220,pe.ink,0),Gn(i,Ht/2,It/2,220,pe.yellow,10),Gn(i,Ht/2-76,It/2-50,26,pe.ink,0),Gn(i,Ht/2+76,It/2-50,26,pe.ink,0),i.beginPath(),i.arc(Ht/2,It/2+10,120,.15*Math.PI,.85*Math.PI),i.lineWidth=26,i.lineCap="round",i.strokeStyle=pe.ink,i.stroke()}},z0=Object.keys(H0);function Vu(i,e){let t=e||document.createElement("canvas");t.width=Ht,t.height=It;let n=t.getContext("2d");return n.clearRect(0,0,Ht,It),n.lineJoin="round",H0[i](n),t}function Wu(i,e,t,n){let s=n||document.createElement("canvas");s.width=640,s.height=208;let r=s.getContext("2d");r.clearRect(0,0,s.width,s.height),qt(r,9,9,s.width-18,s.height-18,22,e,18);let o=96;for(r.font=`${o}px ${Gc}`;r.measureText(i).width>s.width-110&&o>40;)o-=4,r.font=`${o}px ${Gc}`;return r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(i,s.width/2,s.height/2+o*.06),s}function Xu(i,e,t,n){let s=n||document.createElement("canvas");s.width=256,s.height=256;let r=s.getContext("2d");return r.clearRect(0,0,256,256),Gn(r,128,128,116,e,14),r.fillStyle=t,r.font=`160px ${Gc}`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,140),s}var wa=new k;function Gi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;wa.copy(e),wa[n]=0,wa.normalize();let l=.5*o/(o+a),h=1-wa.angleTo(i)/c;return Math.sign(wa[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Vc=class i extends ai{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new k,l=new k,h=new k(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=f.length/6,_=new k,g=.5/o;for(let m=0,M=0;m<f.length;m+=3,M+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*r,f[m+1]=h.y*Math.sign(c.y)+l.y*r,f[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),u[M+0]=Gi(_,l,"z","y",r,n),u[M+1]=1-Gi(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),u[M+0]=1-Gi(_,l,"z","y",r,n),u[M+1]=1-Gi(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),u[M+0]=1-Gi(_,l,"x","z",r,e),u[M+1]=Gi(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),u[M+0]=1-Gi(_,l,"x","z",r,e),u[M+1]=1-Gi(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),u[M+0]=1-Gi(_,l,"x","y",r,e),u[M+1]=1-Gi(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),u[M+0]=Gi(_,l,"x","y",r,e),u[M+1]=1-Gi(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var ft=(i,e,t)=>i+(e-i)*t,rn=i=>Math.min(1,Math.max(0,i)),De=(i,e,t)=>{let n=rn((t-i)/(e-i));return n*n*(3-2*n)},Wc=i=>1-(1-i)**3,jt=i=>{let e=i-1;return 1+2.7*e*e*e+1.7*e*e},Jt={pop(){},whoosh(){},tada(){},beat(){return-1}},ne={yellow:"#FFE14D",pink:"#FF9ECF",lilac:"#B7A3FF",sky:"#7CC8FF",peach:"#FFB07A",lime:"#C8EE5A",aqua:"#6EE2D0",coral:"#FF8F8F",red:"#FF4D4D",cyan:"#5CE1E6",white:"#FFFFFF",ink:"#000000",grey:"#D9D9D9"},qu=new Map;function _n(i=.035){if(qu.has(i))return qu.get(i);let e=new mi({uniforms:{uT:{value:i}},vertexShader:`uniform float uT;
      void main(){
        vec4 p = vec4(position + normal * uT, 1.0);
        #ifdef USE_INSTANCING
        p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
      }`,fragmentShader:"void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }",side:kn});return qu.set(i,e),e}var Ta=new lr(new Uint8Array([110,190,255]),3,1,ao);Ta.minFilter=Ta.magFilter=Fn;Ta.needsUpdate=!0;var Yu=new Map,Me=i=>(Yu.has(i)||Yu.set(i,new to({color:i,gradientMap:Ta})),Yu.get(i)),Qn=(i,e={})=>new to({color:i,gradientMap:Ta,...e}),Te=(i,e,t=.035)=>{let n=new Ie;return n.add(new $e(i,e)),n.add(new $e(i,_n(t))),n},Oe=(i,e,t,n=.06,s=3)=>new Vc(i,e,t,s,Math.min(n,Math.min(i,e,t)/2-.002)),uo=[];function Yn(i,e,t=pe.ink){let n=new Ie,s=1.9,r=.62,o=Oe(s,r,.07,.04,2);n.add(new $e(o,Me(e))),n.add(new $e(o,_n(.022)));let a=new qn(Wu(i,e,t));a.colorSpace=an,a.anisotropy=4;let c=new $e(new Ft(s,r),new Mt({map:a,transparent:!0,toneMapped:!1}));return c.position.z=.036,n.add(c),n.userData.redraw=()=>{Wu(i,e,t,a.image),a.needsUpdate=!0},uo.push(n),n}var Vi=new sn;function fo(i,e=[0,.2,.6]){let n=new Et(new Ft(.15,.09),new Mt({side:gi,toneMapped:!1}),120),s=[pe.mint,pe.zorin,pe.endless,ne.white,ne.ink,ne.yellow,ne.pink].map(l=>new et(l)),r=[],o=[],a=[];for(let l=0;l<120;l++)n.setColorAt(l,s[l%s.length]),r.push(new k),o.push(new k),a.push(new k);n.visible=!1,n.frustumCulled=!1,i.add(n);let c=99;return{burst(){c=0,n.visible=!0;for(let l=0;l<120;l++)r[l].set(e[0]+(Math.random()-.5)*1.2,e[1],e[2]),o[l].set((Math.random()-.5)*6,2.5+Math.random()*4,.4+Math.random()*2.4),a[l].set(Math.random()*6,Math.random()*6,Math.random()*6)},update(l){if(n.visible){c+=l;for(let h=0;h<120;h++)o[h].y-=7*l,r[h].addScaledVector(o[h],l),a[h].x+=l*5,a[h].y+=l*4,Vi.position.copy(r[h]),Vi.rotation.set(a[h].x,a[h].y,a[h].z),Vi.scale.setScalar(c>2.4?Math.max(1e-4,1-(c-2.4)/.4):1),Vi.updateMatrix(),n.setMatrixAt(h,Vi.matrix);n.instanceMatrix.needsUpdate=!0,c>2.8&&(n.visible=!1)}}}}function $u(i,{count:e=32,colors:t,seed:n=1,spread:s=[8,5,4],back:r=-2.5}={}){let o=n,a=()=>(o=o*16807%2147483647,o/2147483647),c=[Oe(.34,.34,.34,.07),new tn(.2,20,14),new pi(.18,.075,10,26),new vi(.21,.38,20)],l=Math.ceil(e/c.length),h=c.map(f=>{let d=new Et(f,Qn(ne.white),l),u=new Et(f,_n(.025),l);d.frustumCulled=u.frustumCulled=!1,i.add(u,d);let p=[];for(let _=0;_<l;_++){let g,m;do g=(a()-.5)*2*s[0],m=(a()-.5)*2*s[1];while(Math.abs(g)<2.8&&Math.abs(m)<2.3);p.push({x:g,y:m,z:r-a()*s[2],ph:a()*6.28,sp:.4+a()*.8,sc:.7+a()*.8}),d.setColorAt(_,new et(t[Math.floor(a()*t.length)]))}return{m:d,o:u,items:p}});return{update(f,d=1,u=null){for(let{m:p,o:_,items:g}of h)g.forEach((m,M)=>{Vi.position.set(m.x+Math.sin(f*.3*m.sp+m.ph)*.3,m.y+Math.sin(f*.6*m.sp+m.ph)*.35,m.z),Vi.rotation.set(f*.5*m.sp+m.ph,f*.7*m.sp,m.ph),m.k=ft(m.k??1,u?u(Vi.position):1,.12),Vi.scale.setScalar(Math.max(m.sc*d*m.k,1e-4)),Vi.updateMatrix(),p.setMatrixAt(M,Vi.matrix),_.setMatrixAt(M,Vi.matrix)}),p.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,p.visible=_.visible=d>.01}}}var vx='"Helvetica Neue", Helvetica, Arial, "DejaVu Sans", sans-serif',ei=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]};function At(i,e,t,n,s,r){let o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}function xn(i,e,t,n,s,r,o=400,a="left"){i.font=`${o} ${s}px ${vx}`,i.fillStyle=r,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)}function Ju(i,e,t,n,s=15){i.save(),i.shadowColor="rgba(0,0,0,.75)",i.shadowBlur=5,i.shadowOffsetY=1,xn(i,e,t,n,s,"#fff",600,"center"),i.restore()}function Zu(i,e){let t=parseInt(i.slice(1),16),n=s=>Math.round(e<0?s*(1+e):s+(255-s)*e);return`rgb(${n(t>>16&255)},${n(t>>8&255)},${n(t&255)})`}function bn(i,e,t){i.strokeStyle=e,i.lineWidth=t,i.lineCap="round",i.lineJoin="round",i.stroke()}var ut={folder(i,e,t,n,s="#7EBA4A"){let r=n,o=n*.78,a=e-r/2,c=t-o/2;i.fillStyle=Zu(s,-.22),At(i,a,c,r*.46,o*.3,n*.07),i.fill(),At(i,a,c+o*.1,r,o*.9,n*.08),i.fill(),i.fillStyle=s,At(i,a,c+o*.24,r,o*.76,n*.08),i.fill(),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(a+n*.06,c+o*.3,r-n*.12,n*.04)},globe(i,e,t,n,s="#2E86FF"){let r=n*.46,o=i.createLinearGradient(e,t-r,e,t+r);o.addColorStop(0,Zu(s,.25)),o.addColorStop(1,Zu(s,-.25)),i.fillStyle=o,i.beginPath(),i.arc(e,t,r,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(e,t,r*.45,r,0,0,Math.PI*2),i.moveTo(e-r,t),i.lineTo(e+r,t),i.moveTo(e-r*.86,t-r*.5),i.lineTo(e+r*.86,t-r*.5),i.moveTo(e-r*.86,t+r*.5),i.lineTo(e+r*.86,t+r*.5),bn(i,"rgba(255,255,255,.85)",Math.max(1.2,n*.045))},terminal(i,e,t,n){let s=n*.92,r=n*.78;i.fillStyle="#2b2b2b",At(i,e-s/2,t-r/2,s,r,n*.1),i.fill(),i.fillStyle="#4a4a4a",At(i,e-s/2,t-r/2,s,r*.2,n*.1),i.fill(),xn(i,">_",e-s*.32,t+r*.1,n*.34,"#7CFC8A",700)},gear(i,e,t,n,s="#8a96a3"){let r=n*.3;i.fillStyle=s;for(let o=0;o<8;o++)i.save(),i.translate(e,t),i.rotate(o*Math.PI/4),i.fillRect(-n*.07,-r-n*.13,n*.14,n*.2),i.restore();i.beginPath(),i.arc(e,t,r,0,Math.PI*2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e,t,r*.42,0,Math.PI*2),i.fill()},doc(i,e,t,n,s="#3D7BFF"){let r=n*.7,o=n*.9,a=e-r/2,c=t-o/2,l=n*.2;i.fillStyle="#fff",i.beginPath(),i.moveTo(a,c),i.lineTo(a+r-l,c),i.lineTo(a+r,c+l),i.lineTo(a+r,c+o),i.lineTo(a,c+o),i.closePath(),i.fill(),bn(i,"rgba(0,0,0,.25)",1.5),i.fillStyle=s;for(let h=0;h<4;h++)i.fillRect(a+r*.15,c+o*(.32+h*.15),r*(h===3?.45:.7),Math.max(2,n*.045))},picture(i,e,t,n){let s=n*.9,r=n*.72,o=e-s/2,a=t-r/2;i.fillStyle="#6EC6FF",At(i,o,a,s,r,n*.08),i.fill(),i.fillStyle="#FFE14D",i.beginPath(),i.arc(o+s*.72,a+r*.3,n*.1,0,Math.PI*2),i.fill(),i.fillStyle="#3BAA5C",i.beginPath(),i.moveTo(o,a+r),i.lineTo(o+s*.35,a+r*.4),i.lineTo(o+s*.6,a+r*.75),i.lineTo(o+s*.75,a+r*.55),i.lineTo(o+s,a+r),i.closePath(),i.fill()},music(i,e,t,n,s="#FF7A1A"){i.fillStyle=s,At(i,e-n*.45,t-n*.45,n*.9,n*.9,n*.2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(e-n*.12,t+n*.18,n*.11,n*.08,-.4,0,Math.PI*2),i.fill(),i.fillRect(e-n*.03,t-n*.25,n*.06,n*.44),i.fillRect(e-n*.03,t-n*.25,n*.2,n*.07)},film(i,e,t,n,s="#8E5CF7"){i.fillStyle=s,At(i,e-n*.45,t-n*.45,n*.9,n*.9,n*.2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(e-n*.12,t-n*.2),i.lineTo(e+n*.22,t),i.lineTo(e-n*.12,t+n*.2),i.closePath(),i.fill()},trash(i,e,t,n){i.fillStyle="#c9ced6",i.beginPath(),i.moveTo(e-n*.3,t-n*.22),i.lineTo(e+n*.3,t-n*.22),i.lineTo(e+n*.24,t+n*.42),i.lineTo(e-n*.24,t+n*.42),i.closePath(),i.fill(),i.fillStyle="#9aa3ad",At(i,e-n*.36,t-n*.34,n*.72,n*.1,n*.03),i.fill(),i.fillRect(e-n*.08,t-n*.42,n*.16,n*.08),i.fillStyle="rgba(0,0,0,.18)";for(let s of[-.12,0,.12])i.fillRect(e+s*n-n*.02,t-n*.12,n*.04,n*.44)},monitor(i,e,t,n){i.fillStyle="#2b3440",At(i,e-n*.46,t-n*.38,n*.92,n*.6,n*.06),i.fill();let s=i.createLinearGradient(e,t-n*.34,e,t+n*.18);s.addColorStop(0,"#5CC8FF"),s.addColorStop(1,"#2E6BFF"),i.fillStyle=s,i.fillRect(e-n*.41,t-n*.33,n*.82,n*.5),i.fillStyle="#2b3440",i.fillRect(e-n*.06,t+n*.22,n*.12,n*.12),At(i,e-n*.22,t+n*.32,n*.44,n*.07,n*.03),i.fill()},bag(i,e,t,n,s="#FF7A1A"){i.fillStyle=s,At(i,e-n*.36,t-n*.18,n*.72,n*.6,n*.08),i.fill(),i.beginPath(),i.arc(e,t-n*.18,n*.17,Math.PI,0),bn(i,s,n*.07),i.fillStyle="#fff",i.beginPath(),i.arc(e,t+n*.1,n*.09,0,Math.PI*2),i.fill()},book(i,e,t,n){i.fillStyle="#fff",i.beginPath(),i.moveTo(e,t-n*.22),i.quadraticCurveTo(e-n*.2,t-n*.32,e-n*.4,t-n*.26),i.lineTo(e-n*.4,t+n*.3),i.quadraticCurveTo(e-n*.2,t+n*.24,e,t+n*.34),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e,t-n*.22),i.quadraticCurveTo(e+n*.2,t-n*.32,e+n*.4,t-n*.26),i.lineTo(e+n*.4,t+n*.3),i.quadraticCurveTo(e+n*.2,t+n*.24,e,t+n*.34),i.closePath(),i.fill(),i.fillStyle="rgba(0,0,0,.2)";for(let s=0;s<3;s++)i.fillRect(e-n*.32,t-n*.1+s*n*.12,n*.24,n*.03),i.fillRect(e+n*.08,t-n*.1+s*n*.12,n*.24,n*.03)},keyboard(i,e,t,n){i.fillStyle="#fff",At(i,e-n*.42,t-n*.22,n*.84,n*.44,n*.06),i.fill(),i.fillStyle="#5b6470";for(let s=0;s<3;s++)for(let r=0;r<6;r++)i.fillRect(e-n*.36+r*n*.12,t-n*.16+s*n*.12,n*.09,n*.08)},pin(i,e,t,n){i.fillStyle="#FF4D4D",i.beginPath(),i.arc(e,t-n*.1,n*.24,Math.PI*.9,Math.PI*2.1),i.lineTo(e,t+n*.38),i.closePath(),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e,t-n*.1,n*.09,0,Math.PI*2),i.fill()},weather(i,e,t,n){i.fillStyle="#FFE14D",i.beginPath(),i.arc(e+n*.12,t-n*.1,n*.2,0,Math.PI*2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e-n*.12,t+n*.12,n*.16,0,Math.PI*2),i.arc(e+n*.06,t+n*.06,n*.19,0,Math.PI*2),i.arc(e+n*.24,t+n*.16,n*.13,0,Math.PI*2),i.fill(),i.fillRect(e-n*.12,t+n*.14,n*.36,n*.14)},gamepad(i,e,t,n){i.fillStyle="#fff",At(i,e-n*.4,t-n*.18,n*.8,n*.38,n*.18),i.fill(),i.fillStyle="#5b6470",i.fillRect(e-n*.28,t-n*.03,n*.16,n*.05),i.fillRect(e-n*.225,t-n*.085,n*.05,n*.16),i.fillStyle="#FF4D4D",i.beginPath(),i.arc(e+n*.18,t-n*.04,n*.045,0,Math.PI*2),i.fill(),i.fillStyle="#3D7BFF",i.beginPath(),i.arc(e+n*.27,t+n*.04,n*.045,0,Math.PI*2),i.fill()},cap(i,e,t,n){i.fillStyle="#fff",i.beginPath(),i.moveTo(e-n*.42,t-n*.06),i.lineTo(e,t-n*.26),i.lineTo(e+n*.42,t-n*.06),i.lineTo(e,t+n*.14),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e-n*.24,t+n*.02),i.lineTo(e-n*.24,t+n*.22),i.quadraticCurveTo(e,t+n*.36,e+n*.24,t+n*.22),i.lineTo(e+n*.24,t+n*.02),i.lineTo(e,t+n*.14),i.closePath(),i.fill()},calc(i,e,t,n){i.fillStyle="#5b6470",At(i,e-n*.32,t-n*.42,n*.64,n*.84,n*.08),i.fill(),i.fillStyle="#C8EE5A",i.fillRect(e-n*.24,t-n*.34,n*.48,n*.18),i.fillStyle="#fff";for(let s=0;s<3;s++)for(let r=0;r<3;r++)i.fillRect(e-n*.24+r*n*.17,t-n*.08+s*n*.15,n*.12,n*.1)},wifi(i,e,t,n,s="#ddd"){for(let r of[.18,.32,.46])i.beginPath(),i.arc(e,t+n*.3,r*n,Math.PI*1.25,Math.PI*1.75),bn(i,s,n*.09);i.fillStyle=s,i.beginPath(),i.arc(e,t+n*.3,n*.06,0,Math.PI*2),i.fill()},speaker(i,e,t,n,s="#ddd"){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.36,t-n*.12),i.lineTo(e-n*.18,t-n*.12),i.lineTo(e+n*.04,t-n*.32),i.lineTo(e+n*.04,t+n*.32),i.lineTo(e-n*.18,t+n*.12),i.lineTo(e-n*.36,t+n*.12),i.closePath(),i.fill(),i.beginPath(),i.arc(e+n*.06,t,n*.2,-.9,.9),bn(i,s,n*.08),i.beginPath(),i.arc(e+n*.06,t,n*.36,-.9,.9),bn(i,s,n*.08)},battery(i,e,t,n,s="#ddd"){i.strokeStyle=s,i.lineWidth=n*.08,At(i,e-n*.4,t-n*.2,n*.72,n*.4,n*.06),i.stroke(),i.fillStyle=s,i.fillRect(e+n*.34,t-n*.08,n*.08,n*.16),i.fillRect(e-n*.32,t-n*.12,n*.42,n*.24)},search(i,e,t,n,s="#999"){i.beginPath(),i.arc(e-n*.08,t-n*.08,n*.28,0,Math.PI*2),bn(i,s,n*.12),i.beginPath(),i.moveTo(e+n*.13,t+n*.13),i.lineTo(e+n*.38,t+n*.38),bn(i,s,n*.14)},power(i,e,t,n,s="#ccc"){i.beginPath(),i.arc(e,t+n*.04,n*.3,-Math.PI*.32,Math.PI*1.32),bn(i,s,n*.1),i.beginPath(),i.moveTo(e,t-n*.36),i.lineTo(e,t-n*.02),bn(i,s,n*.1)},lock(i,e,t,n,s="#ccc"){i.fillStyle=s,At(i,e-n*.28,t-n*.04,n*.56,n*.42,n*.06),i.fill(),i.beginPath(),i.arc(e,t-n*.06,n*.18,Math.PI,0),bn(i,s,n*.09)},grid(i,e,t,n,s="#fff"){i.fillStyle=s;for(let r=0;r<3;r++)for(let o=0;o<3;o++)i.beginPath(),i.arc(e-n*.3+o*n*.3,t-n*.3+r*n*.3,n*.09,0,Math.PI*2),i.fill()},home(i,e,t,n,s="#666"){i.fillStyle=s,i.beginPath(),i.moveTo(e,t-n*.4),i.lineTo(e+n*.42,t-n*.02),i.lineTo(e+n*.3,t-n*.02),i.lineTo(e+n*.3,t+n*.38),i.lineTo(e-n*.3,t+n*.38),i.lineTo(e-n*.3,t-n*.02),i.lineTo(e-n*.42,t-n*.02),i.closePath(),i.fill()},arrow(i,e,t,n,s="#666",r=-1){i.beginPath(),i.moveTo(e-r*n*.12,t-n*.22),i.lineTo(e+r*n*.12,t),i.lineTo(e-r*n*.12,t+n*.22),bn(i,s,n*.12)},ring(i,e,t,n,s="#fff"){i.beginPath(),i.arc(e,t,n*.32,0,Math.PI*2),bn(i,s,n*.12),i.fillStyle=s,i.beginPath(),i.arc(e,t,n*.1,0,Math.PI*2),i.fill()}};function Ku(i,e,t,n,s){i.beginPath(),i.moveTo(e-76,t),i.lineTo(e-64,t),bn(i,n,2),i.strokeStyle=n,i.lineWidth=2,i.strokeRect(e-46,t-6,12,12),s&&(i.fillStyle=s,i.beginPath(),i.arc(e-14,t,11,0,Math.PI*2),i.fill()),i.beginPath(),i.moveTo(e-19,t-5),i.lineTo(e-9,t+5),i.moveTo(e-9,t-5),i.lineTo(e-19,t+5),bn(i,s?"#fff":n,2)}function ju(){let[i,e]=ei(40,56);e.beginPath();let t=[[3,3],[3,44],[13,34],[20,50],[27,47],[20,31],[34,31]];e.moveTo(t[0][0],t[0][1]);for(let[n,s]of t.slice(1))e.lineTo(n,s);return e.closePath(),e.fillStyle="#fff",e.fill(),bn(e,"#000",2.5),i}function Qu(i,e,t,n=6){let[s,r]=ei(i,e);return At(r,1,1,i-2,e-2,n),r.fillStyle=t,r.fill(),s}var Aa="#35A854",gr="#7EBA4A";function G0(){let i={},[e,t]=ei(1280,800),n=t.createLinearGradient(0,0,1280,800);n.addColorStop(0,"#0c2925"),n.addColorStop(.55,"#1d5a44"),n.addColorStop(1,"#64b06f"),t.fillStyle=n,t.fillRect(0,0,1280,800);for(let[s,r,o,a]of[[990,170,280,.18],[1160,560,210,.12],[320,660,320,.08],[720,380,150,.1]]){let c=t.createRadialGradient(s,r,0,s,r,o);c.addColorStop(0,`rgba(190,255,205,${a})`),c.addColorStop(1,"rgba(190,255,205,0)"),t.fillStyle=c,t.fillRect(s-o,r-o,o*2,o*2)}t.strokeStyle="rgba(255,255,255,.035)",t.lineWidth=2;for(let s=-800;s<1280;s+=26)t.beginPath(),t.moveTo(s,800),t.lineTo(s+800,0),t.stroke();return[["monitor","Computer"],["folder","Home"],["trash","Trash"]].forEach(([s,r],o)=>{let a=64+o*118;ut[s](t,70,a,62,s==="folder"?gr:void 0),Ju(t,r,70,a+48)}),i.wall=e,[e,t]=ei(1280,44),t.fillStyle="#2d2d2d",t.fillRect(0,0,1280,44),t.fillStyle="#454545",t.fillRect(0,0,1280,1),t.fillStyle=Aa,At(t,8,6,32,32,6),t.fill(),ut.grid(t,24,22,17,"#fff"),ut.folder(t,66,22,26,gr),ut.globe(t,102,22,26),ut.terminal(t,138,22,26),t.fillStyle="#4a4a4a",t.fillRect(158,10,1,24),ut.wifi(t,1106,20,22,"#ddd"),ut.speaker(t,1140,22,20,"#ddd"),ut.battery(t,1176,22,24,"#ddd"),xn(t,"10:24",1240,22,15,"#eee",500,"center"),i.panel=e,[e,t]=ei(170,36),At(t,0,0,170,36,4),t.fillStyle="#4a4a4a",t.fill(),t.fillStyle=Aa,t.fillRect(8,33,154,3),ut.folder(t,24,17,20,gr),xn(t,"Home",44,18,14,"#eee",500),i.taskBtn=e,[e,t]=ei(560,480),At(t,0,0,560,480,8),t.fillStyle="#353535",t.fill(),t.save(),At(t,0,0,560,480,8),t.clip(),t.fillStyle="#2a2a2a",t.fillRect(0,0,64,480),ut.globe(t,32,40,30),ut.folder(t,32,94,30,gr),ut.terminal(t,32,148,30),ut.gear(t,32,202,30,"#9aa6b2"),ut.lock(t,32,362,24),ut.arrow(t,32,410,24,"#ccc",1),ut.power(t,32,452,24),t.restore(),At(t,80,16,464,36,6),t.fillStyle="#262626",t.fill(),ut.search(t,102,34,18,"#9a9a9a"),["All Applications","Accessories","Administration","Education","Graphics","Internet","Office","Sound & Video","System Tools","Preferences"].forEach((s,r)=>{let o=84+r*38;r===0&&(At(t,76,o-16,178,32,5),t.fillStyle="#4a4a4a",t.fill()),t.fillStyle=["#9aa6b2","#FFB74D","#EF5350","#AB47BC","#29B6F6","#42A5F5","#66BB6A","#FF7043","#78909C","#BDBDBD"][r],t.beginPath(),t.arc(94,o,7,0,Math.PI*2),t.fill(),xn(t,s,110,o,14,"#e6e6e6")}),t.fillStyle="#444",t.fillRect(262,72,1,390),[["calc","Calculator"],["folder","Files"],["doc","Text Editor"],["picture","Image Viewer"],["music","Music"],["film","Videos"],["globe","Web Browser"],["bag","Software Manager"],["terminal","Terminal"],["gear","System Settings"]].forEach(([s,r],o)=>{let a=84+o*38;ut[s](t,290,a,24,s==="folder"?gr:s==="bag"?Aa:void 0),xn(t,r,312,a,14,"#f0f0f0")}),i.menu=e,i.menuHi=Qu(272,32,"rgba(53,168,84,.55)",5),[e,t]=ei(780,480),At(t,0,0,780,480,8),t.fillStyle="#fafafa",t.fill(),t.save(),At(t,0,0,780,480,8),t.clip(),t.fillStyle="#e2e2e2",t.fillRect(0,0,780,44),xn(t,"Home",390,22,15,"#333",700,"center"),Ku(t,770,22,"#555"),t.fillStyle="#efefef",t.fillRect(0,44,780,44),ut.arrow(t,24,66,22,"#777",-1),ut.arrow(t,52,66,22,"#bbb",1),At(t,84,54,110,24,12),t.fillStyle=Aa,t.fill(),xn(t,"Home",139,66,13,"#fff",600,"center"),ut.search(t,752,66,18,"#777"),t.fillStyle="#f3f3f3",t.fillRect(0,88,180,392),t.fillStyle="#dcdcdc",t.fillRect(180,88,1,392),xn(t,"My Computer",16,108,12,"#888",700),["Home","Desktop","Documents","Music","Pictures","Videos","Downloads","Trash"].forEach((s,r)=>{let o=136+r*34;r===0&&(t.fillStyle=Aa,t.fillRect(0,o-15,180,30)),r===0?ut.home(t,26,o,18,"#fff"):r===7?ut.trash(t,26,o,20):ut.folder(t,26,o,18,gr),xn(t,s,46,o,14,r===0?"#fff":"#333",r===0?600:400)}),["Desktop","Documents","Downloads","Music","Pictures","Public","Templates","Videos"].forEach((s,r)=>{let o=262+r%4*130,a=166+Math.floor(r/4)*140;ut.folder(t,o,a,74,gr),xn(t,s,o,a+56,13,"#333",400,"center")}),t.fillStyle="#efefef",t.fillRect(181,452,600,28),xn(t,"8 items",480,466,12,"#777",400,"center"),t.restore(),At(t,1,1,778,478,8),bn(t,"rgba(0,0,0,.28)",2),i.win=e,i.cursor=ju(),i}var Cs="#2F6DF6",xr="#4C8DFF";function V0(){let i={},[e,t]=ei(1280,800),n=t.createLinearGradient(0,0,1280*.6,800);n.addColorStop(0,"#0a1a5c"),n.addColorStop(.5,"#1f56d8"),n.addColorStop(1,"#79b6ff"),t.fillStyle=n,t.fillRect(0,0,1280,800);for(let s=0;s<7;s++){t.beginPath();for(let r=0;r<=1280;r+=16){let o=250+s*70+Math.sin(r/210+s*.9)*60+Math.sin(r/90+s)*12;r===0?t.moveTo(r,o):t.lineTo(r,o)}t.lineTo(1280,800),t.lineTo(0,800),t.closePath(),t.fillStyle=`rgba(255,255,255,${.035+s*.006})`,t.fill()}return[["folder","Home"],["trash","Trash"]].forEach(([s,r],o)=>{let a=64+o*118;ut[s](t,70,a,62,s==="folder"?xr:void 0),Ju(t,r,70,a+48)}),i.wall=e,[e,t]=ei(1280,46),t.fillStyle="#16181d",t.fillRect(0,0,1280,46),t.fillStyle=Cs,At(t,10,7,32,32,8),t.fill(),ut.grid(t,26,23,17,"#fff"),ut.folder(t,70,23,26,xr),ut.globe(t,106,23,26),ut.bag(t,142,24,26,Cs),ut.wifi(t,1108,21,22,"#cfd6e4"),ut.speaker(t,1142,23,20,"#cfd6e4"),ut.battery(t,1178,23,24,"#cfd6e4"),xn(t,"10:24",1240,23,15,"#eef2fa",500,"center"),i.panel=e,[e,t]=ei(170,36),At(t,0,0,170,36,6),t.fillStyle="#2a2e37",t.fill(),t.fillStyle=Cs,t.fillRect(10,32,150,4),ut.folder(t,24,17,20,xr),xn(t,"Home",44,18,14,"#eef2fa",500),i.taskBtn=e,[e,t]=ei(620,520),At(t,0,0,620,520,14),t.fillStyle="#fdfdfd",t.fill(),At(t,18,18,584,42,21),t.fillStyle="#eef1f6",t.fill(),ut.search(t,44,39,18,"#8a93a3"),xn(t,"Search\u2026",64,39,15,"#8a93a3"),[["globe","Web Browser"],["folder","Files"],["doc","Writer"],["bag","Software"],["gear","Settings"],["terminal","Terminal"],["calc","Calculator"],["picture","Photos"]].forEach(([s,r],o)=>{let a=96+o*46;ut[s](t,46,a,28,s==="folder"?xr:s==="bag"?Cs:void 0),xn(t,r,74,a,15,"#1d2330")}),t.fillStyle="#e4e8ef",t.fillRect(372,80,1,370),["Home","Documents","Downloads","Pictures","Music","Videos"].forEach((s,r)=>{let o=100+r*44;r===0?ut.home(t,400,o,20,Cs):ut.folder(t,400,o,20,xr),xn(t,s,422,o,15,"#1d2330")}),t.fillStyle="#e4e8ef",t.fillRect(18,462,584,1),t.fillStyle="#c9d6f5",t.beginPath(),t.arc(46,492,16,0,Math.PI*2),t.fill(),t.fillStyle=Cs,t.beginPath(),t.arc(46,487,6,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(46,503,10,Math.PI,0),t.fill(),ut.lock(t,540,492,22,"#6b7487"),ut.power(t,580,492,22,"#6b7487"),At(t,1,1,618,518,14),bn(t,"rgba(0,0,0,.18)",2),i.menu=e,i.menuHi=Qu(340,40,"rgba(47,109,246,.22)",8),[e,t]=ei(760,470),At(t,0,0,760,470,10),t.fillStyle="#ffffff",t.fill(),t.save(),At(t,0,0,760,470,10),t.clip(),t.fillStyle="#f2f4f8",t.fillRect(0,0,760,92),xn(t,"Home",380,22,15,"#1d2330",700,"center"),Ku(t,750,22,"#5b6475",Cs),ut.arrow(t,26,66,22,"#5b6475",-1),ut.arrow(t,54,66,22,"#b9c0cc",1),At(t,86,52,560,28,14),t.fillStyle="#ffffff",t.fill(),bn(t,"#d9dee8",1.5),ut.home(t,106,66,16,Cs),xn(t,"Home",122,66,13,"#1d2330",600),t.fillStyle="#e4e8ef",t.fillRect(0,92,760,1),t.fillStyle="#f7f8fb",t.fillRect(0,93,176,377),xn(t,"Places",16,114,12,"#8a93a3",700),["Home","Desktop","Documents","Downloads","Music","Pictures","Videos","Trash"].forEach((s,r)=>{let o=142+r*34;r===0&&(At(t,6,o-15,164,30,8),t.fillStyle="rgba(47,109,246,.14)",t.fill()),r===0?ut.home(t,28,o,18,Cs):r===7?ut.trash(t,28,o,20):ut.folder(t,28,o,18,xr),xn(t,s,48,o,14,"#1d2330",r===0?600:400)}),["Desktop","Documents","Downloads","Music","Pictures","Public","Templates","Videos"].forEach((s,r)=>{let o=256+r%4*128,a=170+Math.floor(r/4)*140;ut.folder(t,o,a,72,xr),xn(t,s,o,a+56,13,"#1d2330",400,"center")}),t.restore(),At(t,1,1,758,468,10),bn(t,"rgba(0,0,0,.2)",2),i.win=e,i.cursor=ju(),i}var Mx=[["book","Encyclopedia",["#FF8A3D","#E8452C"]],["globe","Browser",["#4FA3FF","#2462E8"]],["folder","Files",["#FFC94D","#F29A1F"]],["doc","Writer",["#5BC0EB","#2C7BE5"]],["picture","Photos",["#7CE38B","#2FA65A"]],["film","Videos",["#B98CFF","#7340E0"]],["keyboard","Typing",["#FF9ECF","#E05297"]],["pin","Maps",["#8CE0C9","#2FA38A"]],["weather","Weather",["#7CC8FF","#3D8BFF"]],["gamepad","Games",["#FF8F8F","#E04B4B"]],["cap","Learn",["#FFD36E","#E0A21F"]],["bag","App Center",["#C8EE5A","#7DB51E"]]];function W0(){let i={},[e,t]=ei(1280,800),n=t.createLinearGradient(0,0,0,800);n.addColorStop(0,"#5a3fd1"),n.addColorStop(.45,"#ff6f91"),n.addColorStop(.75,"#ffb36b"),n.addColorStop(1,"#ffd98a"),t.fillStyle=n,t.fillRect(0,0,1280,800),t.fillStyle="rgba(255,240,180,.9)",t.beginPath(),t.arc(880,470,110,0,Math.PI*2),t.fill(),[["#7b4fc9",470,120],["#5b33a8",540,90],["#3d2183",610,70],["#2a145e",690,50]].forEach(([r,o,a],c)=>{t.beginPath(),t.moveTo(0,800);for(let l=0;l<=1280;l+=20)t.lineTo(l,o-Math.abs(Math.sin(l/(170+c*40)+c*1.3))*a-Math.sin(l/53+c)*8);t.lineTo(1280,800),t.closePath(),t.fillStyle=r,t.fill()}),i.wall=e,[e,t]=ei(600,56),At(t,2,2,596,52,26),t.fillStyle="rgba(255,255,255,.94)",t.fill(),ut.search(t,36,28,22,"#7a7f8c"),xn(t,"Search",62,28,18,"#8a8f9c"),i.search=e,i.icons=Mx.map(([r,o,a])=>{let[c,l]=ei(150,160),h=l.createLinearGradient(23,6,127,110);return h.addColorStop(0,a[0]),h.addColorStop(1,a[1]),l.save(),l.shadowColor="rgba(0,0,0,.35)",l.shadowBlur=10,l.shadowOffsetY=4,At(l,23,6,104,104,26),l.fillStyle=h,l.fill(),l.restore(),ut[r](l,75,58,62,r==="folder"?"#fff3c4":r==="bag"?"#ffffff":void 0),Ju(l,o,75,136,16),c}),i.iconHi=Qu(150,160,"rgba(255,255,255,.28)",22),[e,t]=ei(1280,48),t.fillStyle="rgba(20,20,26,.92)",t.fillRect(0,0,1280,48),ut.ring(t,30,24,30,"#fff"),ut.globe(t,78,24,28),ut.folder(t,116,24,28,"#FFC94D"),ut.wifi(t,1108,22,22,"#e6e6ee"),ut.speaker(t,1142,24,20,"#e6e6ee"),ut.battery(t,1178,24,24,"#e6e6ee"),xn(t,"10:24",1240,24,15,"#f2f2f7",500,"center"),i.panel=e,[e,t]=ei(1080,640),At(t,0,0,1080,640,12),t.fillStyle="#ffffff",t.fill(),t.save(),At(t,0,0,1080,640,12),t.clip(),t.fillStyle="#f4f4f6",t.fillRect(0,0,1080,54),ut.arrow(t,30,27,24,"#5b6070",-1),xn(t,"Encyclopedia",540,27,17,"#22252e",700,"center"),Ku(t,1068,27,"#5b6070"),At(t,60,84,420,30,6),t.fillStyle="#22252e",t.fill();let s=t.createLinearGradient(60,136,680,436);s.addColorStop(0,"#0b1240"),s.addColorStop(1,"#2a1d6b"),t.fillStyle=s,At(t,60,136,620,300,10),t.fill(),t.fillStyle="#FFD36E",t.beginPath(),t.arc(120,286,70,0,Math.PI*2),t.fill(),[[230,10,"#c9c9c9"],[300,14,"#f0b56e"],[380,16,"#5aa9ff"],[460,12,"#ff7b5c"],[560,30,"#e8c29a"],[640,24,"#f2dca0"]].forEach(([r,o,a])=>{t.beginPath(),t.arc(120,286,r-120,-.35,.35),bn(t,"rgba(255,255,255,.18)",1.5),t.fillStyle=a,t.beginPath(),t.arc(r,286+Math.sin(r)*30,o,0,Math.PI*2),t.fill()});for(let r=0;r<7;r++)t.fillStyle="#d5d8e0",t.fillRect(60,466+r*22,r===6?380:620,9);t.fillStyle="#f4f4f6",t.fillRect(720,84,320,520);for(let r=0;r<4;r++){let o=100+r*124;t.fillStyle=["#FFB36B","#7CC8FF","#C8EE5A","#FF9ECF"][r],At(t,736,o,96,96,8),t.fill(),t.fillStyle="#c9ccd6",t.fillRect(848,o+18,170,10),t.fillRect(848,o+42,140,8),t.fillRect(848,o+62,110,8)}return t.restore(),At(t,1,1,1078,638,12),bn(t,"rgba(0,0,0,.22)",2),i.win=e,i.cursor=ju(),i}var Dn=new sn,Xc='ui-monospace, "Cascadia Mono", Consolas, Menlo, "DejaVu Sans Mono", monospace',Sx=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,_r=(i,e,t)=>{let n=document.createElement("canvas");return n.width=i,n.height=e,t(n.getContext("2d"),i,e),n},yr=i=>{let e=new qn(i);return e.colorSpace=an,e.anisotropy=8,e},Wi=(i,e={})=>new Mt({map:i,toneMapped:!1,...e});var Ei=(i,e)=>i.scale.setScalar(Math.max(e,1e-4));function X0(i,e=ne.white,t="#3A3A44"){let n=new Ie,s=Te(new pi(i,i*.12,10,40),Me(t),.015);n.add(s);let r=new Ie;for(let o=0;o<5;o++){let a=Te(Oe(i*.95,i*.34,.03,.01,1),Me(e),.012);a.position.x=i*.45;let c=new Ie;c.rotation.z=o*Math.PI*2/5,a.rotation.x=.35,c.add(a),r.add(c)}return r.add(Te(new un(i*.25,i*.25,.06,20).rotateX(Math.PI/2),Me(t),.012)),n.add(r),n.userData.rot=r,n}var Ex=["#include <kernel.h>","","int main(void) {","    power_on();","    check_memory(2 * GB);",'    mount("/", OFFLINE);','    load_kernel("linux");','    start_desktop("Endless OS");',"    while (1) {","        learn();","    }","}"],q0=7;var bx=/^(#include|int|void|while|return)$/;function wx(){let r=null;return{c:_r(1024,1024,a=>{a.fillStyle="#15132B",a.fillRect(0,0,1024,1024),a.fillStyle="#26234A",a.fillRect(0,0,1024,86),["#FF4D4D","#FFE14D","#2FBF71"].forEach((c,l)=>{a.fillStyle=c,a.beginPath(),a.arc(46+l*40,43,13,0,Math.PI*2),a.fill()}),a.font=`600 30px ${Xc}`,a.fillStyle="#B7A3FF",a.fillText("kernel.c",200,54),a.font=`500 38px ${Xc}`,a.textBaseline="alphabetic",Ex.forEach((c,l)=>{let h=170+l*62;l===q0&&(a.fillStyle="rgba(255,225,77,.12)",a.fillRect(70,h-38,914,62)),a.fillStyle="#5B5880",a.textAlign="right",a.fillText(String(l+1),58,h),a.textAlign="left";let f=92,d=c.match(/"[^"]*"|#include|<[^>]*>|[A-Za-z_]\w*|\d+|\s+|./g)||[];d.forEach((u,p)=>{let _="#F4F1FF";if(bx.test(u)?_="#FF9ECF":u[0]==='"'||u[0]==="<"?_="#FFE14D":/^\d/.test(u)?_="#C8EE5A":/^[A-Za-z_]/.test(u)&&d[p+1]==="("?_="#5CE1E6":/^[A-Z_]+$/.test(u)&&(_="#FFB07A"),l===q0&&u==='"Endless OS"'){a.fillStyle=_,a.fillText('"',f,h);let g=f+a.measureText('"').width,m=a.measureText("E").width;r={x:g,y:h,w:m},a.fillText('ndless OS"',g+m,h),f+=a.measureText(u).width;return}a.fillStyle=_,a.fillText(u,f,h),f+=a.measureText(u).width})})}),glyph:r,S:1024,FS:38}}function Y0(i){{let e=new Ie,t=Q=>Math.log(Math.max(Q,1e-6)),n=(Q,Xe,ot)=>De(t(Xe),t(ot),t(Q)),s=new Ie,r=new Ie;s.add(r),e.add(s);let o=Me(ne.white),a=[],c=(Q,Xe,ot,Bt,ve=-1)=>{Q.position.set(Xe,ot,Bt),r.add(Q);let nt={o:Q,home:Q.position.clone(),dir:new k,spin:new k(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(4),pop:ve};return a.push(nt),nt};c(Te(Oe(2.3,2.6,.08,.04),o,.03),0,0,-.46),c(Te(Oe(2.3,.08,1,.03),o,.03),0,1.27,0),c(Te(Oe(2.3,.08,1,.03),o,.03),0,-1.27,0),c(Te(Oe(.08,2.6,1,.03),o,.03),-1.13,0,0),c(Te(Oe(.08,2.6,1,.03),o,.03),1.13,0,0),[-.9,.9].forEach(Q=>[-.35,.35].forEach(Xe=>c(Te(Oe(.22,.1,.22,.03),Me(ne.ink),.01),Q,-1.36,Xe)));let l=new $e(new Ft(2,.07),Wi(yr(_r(256,8,Q=>{let Xe=Q.createLinearGradient(0,0,256,0);["#FF4D4D","#FFB07A","#FFE14D","#C8EE5A","#5CE1E6","#7CC8FF","#B7A3FF","#FF9ECF"].forEach((ot,Bt,ve)=>Xe.addColorStop(Bt/(ve.length-1),ot)),Q.fillStyle=Xe,Q.fillRect(0,0,256,8)}))));c(l,0,1.18,-.2);let h=new $e(Oe(2,2.3,.05,.02),Qn("#138A4A")),f=new $e(new Ft(2,2.3),Wi(yr(_r(512,590,(Q,Xe,ot)=>{Q.strokeStyle="#F2B632",Q.lineWidth=3,Q.globalAlpha=.8;for(let Bt=0;Bt<36;Bt++){let ve=Bt*97%Xe,nt=Bt*173%ot;Q.beginPath(),Q.moveTo(ve,nt),Q.lineTo(ve+60*(Bt%3-1),nt),Q.lineTo(ve+60*(Bt%3-1),nt+90),Q.stroke(),Q.beginPath(),Q.arc(ve,nt,5,0,Math.PI*2),Q.fill()}})),{transparent:!0}));f.position.z=.03;let d=new Ie;d.add(h,f);let u=c(d,0,0,-.4),p=new k(-.2,.55,-.355),_=Te(Oe(.42,.42,.04,.012),Me("#C9CED6"),.012);_.position.copy(p),r.add(_);let g=new Ie;g.add(Te(Oe(.62,.62,.3,.05),Me("#9AA3AD"),.02));let m=X0(.25);m.position.z=.16,g.add(m);let M=c(g,p.x,p.y,-.18,0);[ne.pink,ne.cyan,ne.lime,ne.lilac].forEach((Q,Xe)=>c(Te(Oe(.07,1,.28,.02),Me(Q),.012),.42+Xe*.13,.42,-.24,1+Xe));let b=new Ie;b.add(Te(Oe(1.5,.3,.45,.04),Me("#2B2B33"),.02)),[-.38,.38].forEach(Q=>{let Xe=X0(.12,ne.yellow);Xe.position.set(Q,0,.235),b.add(Xe)}),c(b,-.15,-.35,-.12,5),c(Te(Oe(.5,.12,.03,.01),Me("#0E6B3A"),.01),.42,-.75,-.36,6),c(Te(Oe(.9,.5,.75,.05),Me("#3A3A44"),.02),.55,-.96,0,7),[[ne.coral,[.4,-.7,.1],[.1,-.2,.25],[.3,.1,-.1]],[ne.yellow,[.75,-.7,.05],[.95,0,.15],[.7,.85,-.25]]].forEach(([Q,Xe,ot,Bt],ve)=>{let nt=new Qr([new k(...Xe),new k(...ot),new k(...Bt)]);c(Te(new oa(nt,24,.035,8),Me(Q),.012),0,0,0,8+ve)});let v=new Ie;v.position.set(1.15,0,.53);let T=new Ie;T.add(Te(Oe(2.3,2.6,.06,.04),o,.03));let E=yr(_r(256,256,Q=>{Q.fillStyle=ne.yellow,Q.beginPath(),Q.arc(128,128,118,0,Math.PI*2),Q.fill(),Q.lineWidth=12,Q.strokeStyle="#000",Q.stroke(),Q.fillStyle="#000",Q.font='900 170px "Archivo Black", "Arial Black", sans-serif',Q.textAlign="center",Q.textBaseline="middle",Q.fillText("?",128,140)})),x=new $e(new fi(.42,40),Wi(E,{transparent:!0}));x.position.set(0,.15,.04),T.add(x);for(let Q=0;Q<6;Q++){let Xe=new $e(Oe(1.2,.05,.02,.01),Me(ne.ink));Xe.position.set(0,-.55-Q*.11,.035),T.add(Xe)}T.position.x=-1.15,v.add(T),r.add(v);let S=Yn("CPU",ne.yellow);S.position.set(.28,1,.2),r.add(S),a.forEach(Q=>{Q.dir.copy(Q.home).sub(p),Q.dir.z=-.35,Q.dir.normalize()});let L=10,R=new Ie,D=new Ie;R.add(D),e.add(R);let z=2.6,q=2,F=400,N=(Q,Xe)=>[-.93+Q*.62,Xe?-.62:.62],G=new k(.31,.62,.15),W=yr(_r(z*F,q*F,(Q,Xe,ot)=>{Q.fillStyle="#2A1B4A",Q.fillRect(0,0,Xe,ot);let Bt=(dt,Yt)=>[(dt+z/2)*F,(q/2-Yt)*F];Q.fillStyle="#5B6B9A";let[ve,nt]=Bt(-1.25,.3);Q.fillRect(ve,nt,2.5*F,.6*F),Q.strokeStyle="#8FA2D6",Q.lineWidth=2;for(let dt=ve;dt<ve+2.5*F;dt+=14)Q.beginPath(),Q.moveTo(dt,nt),Q.lineTo(dt,nt+.6*F),Q.stroke();for(let dt=nt;dt<nt+.6*F;dt+=14)Q.beginPath(),Q.moveTo(ve,dt),Q.lineTo(ve+2.5*F,dt),Q.stroke();let Je=[ne.pink,ne.cyan,ne.lime,ne.lilac,ne.coral,ne.peach,ne.sky,ne.aqua];for(let dt=0;dt<2;dt++)for(let Yt=0;Yt<4;Yt++){let[ti,Sn]=N(Yt,dt),[zt,Nn]=Bt(ti-.275,Sn+.275);if(dt===0&&Yt===2){Q.fillStyle="#0D0820",Q.fillRect(zt,Nn,.55*F,.55*F);continue}Q.fillStyle=Je[dt*4+Yt],Q.fillRect(zt,Nn,.55*F,.55*F),Q.fillStyle="rgba(0,0,0,.22)";for(let ni=0;ni<5;ni++)Q.fillRect(zt+14,Nn+18+ni*40,.55*F-28,16)}Q.strokeStyle="#F2B632",Q.lineWidth=5;for(let dt=0;dt<9;dt++){let Yt=30+dt*125;Q.beginPath(),Q.moveTo(Yt,0),Q.lineTo(Yt,ot),Q.globalAlpha=.35,Q.stroke(),Q.globalAlpha=1}})),ue=Te(Oe(4.8,4.8,.2,.06),Me("#0E6B3A"),.03),ie=new $e(new Ft(z,q),Wi(W));ie.position.z=.11;let ae=new Ie;for(let Q=0;Q<12;Q++){let Xe=Q/12*Math.PI*2,ot=Te(Oe(.22,.12,.1,.02),Me(Q%2?"#F2B632":ne.ink),.01);ot.position.set(Math.cos(Xe)*1.95,Math.sin(Xe)*1.95,.15),ot.rotation.z=Xe,ae.add(ot)}let ce=Te(Oe(.55,.55,.06,.015),Me(ne.yellow),.012);ce.position.copy(G).setZ(.14);let Ee=Te(Oe(4.2,4.2,.35,.12),Me("#C9CED6"),.03);Ee.position.z=.3,D.add(ue,ie,ae,ce,Ee);let Le=4.6,oe=L*Le/.55,be=new Ie,ee=new Ie;be.add(ee),e.add(be);let xe=wx(),ye=Wi(yr(xe.c),{transparent:!0,opacity:0,depthWrite:!1}),Ue=new $e(new Ft(Le,Le),ye);Ue.renderOrder=2,ee.add(Ue);let Ge=Le/xe.S,Ne=xe.glyph.w*Ge,Ye=xe.FS*1.25*Ge,tt=new k((xe.glyph.x+xe.glyph.w/2)*Ge-Le/2,Le/2-(xe.glyph.y-xe.FS*.36)*Ge,0),fe=160,Re=Math.max(32,Math.round(fe*Ne/Ye)),we=Wi(yr(_r(Re,fe,Q=>{Q.font=`700 ${Math.round(fe/1.25)}px ${Xc}`,Q.fillStyle="#FF7A1A",Q.textAlign="center",Q.textBaseline="middle",Q.fillText("E",Re/2,fe*.53)})),{transparent:!0,depthWrite:!1}),We=new $e(new Ft(Ne,Ye),we);We.position.copy(tt),We.renderOrder=3,ee.add(We);let ze="01000101",lt=.48,je=.56,_t=oe*ze.length*je/Ne,pt=new Ie,St=new Ie;pt.add(St),e.add(pt);let Y=Q=>yr(_r(128,160,Xe=>{Xe.font=`700 120px ${Xc}`,Xe.fillStyle=Q==="1"?"#000":"#FFFFFF",Xe.textAlign="center",Xe.textBaseline="middle",Xe.fillText(Q,64,86)})),Dt=Y("0"),ht=Y("1"),yt=[...ze].map((Q,Xe)=>{let ot=Q==="1",Bt=new Ie,ve=ot?.9:.45,nt=Te(Oe(lt,ve,.4,.06),Me(ot?ne.yellow:"#2A2A36"),.02);nt.position.y=ve/2-.45;let Je=new $e(new Ft(lt*.8,lt),Wi(ot?ht:Dt,{transparent:!0}));return Je.position.set(0,ve/2-.45,.21),Bt.add(nt,Je),Bt.position.x=(Xe-(ze.length-1)/2)*je,St.add(Bt),{b:Bt,on:ot,home:Bt.position.clone(),dir:new k((Xe-3.5)*.4,(Xe%2?1:-1)*.6,1).normalize()}}),Be=1,Kt=new k(yt[Be].home.x,0,0),O=Yn("E = 01000101",ne.white);O.scale.setScalar(1.1),O.position.set(0,.85,.1),St.add(O);let K=_t*4/lt,w=2*oe/Ne,y=2.2*_t/lt,U=K*1.4,C=new Ie,I=new Ie;C.add(I),e.add(C);let H=Te(Oe(4,.8,2,.08),Me("#B8BEC8"),.03);H.position.set(0,-.75,0),I.add(H);let $=Te(Oe(1.1,.3,1.6,.06),Me(ne.coral),.02);$.position.set(-1.25,-.25,0);let B=Te(Oe(1.1,.3,1.6,.06),Me(ne.sky),.02);B.position.set(1.25,-.25,0);let X=Te(Oe(1.3,.08,1.6,.02),Me(ne.white),.015);X.position.set(0,-.06,0);let te=Te(Oe(1.2,.55,1.6,.06),Me(ne.yellow),.02);te.position.set(0,.26,0),I.add($,B,X,te);let P=Yn("1 = ON",ne.lime);P.scale.setScalar(.8),P.position.set(0,1.25,.3),I.add(P);let Z=36,J=new Et(new tn(.1,12,10),Wi(null,{color:"#00E5FF"}),Z);J.frustumCulled=!1;let j=Array.from({length:Z},(Q,Xe)=>({u:Xe/Z,z:(Xe*37%11/11-.5)*1.3,y:Xe*53%7/7*.12}));I.add(J);let re=70,me=Wi(Dt,{transparent:!0,depthWrite:!1,color:"#B7A3FF"}),ge=Wi(ht,{transparent:!0,depthWrite:!1,color:"#FFE14D"}),ke=new Et(new Ft(.32,.4),me,re),de=new Et(new Ft(.32,.4),ge,re);ke.frustumCulled=de.frustumCulled=!1;let Ce=Array.from({length:re*2},(Q,Xe)=>({a:Xe*2.399,r:2.2+Xe*.618%1*5,z:-30+Xe*.37%1*38,sp:9+Xe*.29%1*9}));e.add(ke,de);let Se={n:0},Ae=new k;i.teardown={group:e,onEnter(){Se.n=0},update(Q,Xe,ot,Bt=0){let ve=ot?.3:rn((Bt-.2)/.6),nt=Sx(De(.27,.97,ve)),Je=Math.exp(nt*Math.log(U)),dt=Je<4?1:Je<60?2:Je<w?3:Je<y?4:5;dt>Se.n&&Se.n&&Jt.pop(260+dt*140),Se.n=dt;let Yt=Math.min(4,dt);Yt!==Se.cap&&(Se.cap=Yt,document.documentElement.dataset.td=String(Yt));let ti=De(.03,.13,ve),Sn=De(.12,.2,ve);v.rotation.y=-ti*1.9-Sn*1.5,v.position.set(1.15+Sn*4,Sn*3,.53+Sn*2),v.rotation.x=Sn*2,v.visible=Sn<.99;let zt=De(.2,.27,ve),Nn=n(Je,1.05,2.6),ni=n(Je,2.2,14),ln=n(Je,12,150);for(let gt of a){let en=1;gt.pop>=0&&gt!==M&&(en=jt(De(.08+gt.pop*.014,.14+gt.pop*.014,ve)));let on=gt===u?0:ni;gt.o.position.copy(gt.home).addScaledVector(gt.dir,on*3.2),gt===M&&gt.o.position.add(new k(.4*zt,1.6*zt,2.4*zt)),gt.o.rotation.set(gt.spin.x*on+(gt===M?zt*1.4:0),gt.spin.y*on,gt.spin.z*on),gt===u&&(gt.o.position.z=gt.home.z-ln*2,en=1-ln*.3),Ei(gt.o,en),gt.o.visible=(gt===u?ln:on)<.985&&!(gt===M&&zt>.99)}m.userData.rot.rotation.z+=ot?0:Xe*(4+ti*18),_.visible=Je<4.2,Ei(S,.32*jt(De(.22,.27,ve))*(1-ni)),S.visible=ni<.98,Ae.set(0,0,0).lerp(p,Nn),r.position.copy(Ae).negate(),s.rotation.y=-.35*(1-Nn),Ei(s,Je),s.visible=Je<160;let Ti=Je>=3.9&&Je<420;if(R.visible=Ti,Ti){let gt=n(Je,6,40),en=n(Je,5,15),on=n(Je,90,420);Ee.position.set(en*3,en*2,.3+en*9),Ee.rotation.set(en*2.4,en*1.2,0),Ee.visible=en<.98,ce.visible=Je<95,ue.position.z=-on*3,ie.position.z=.11-on*3,ae.position.z=-on*3,ae.rotation.z=on*2,Ae.set(0,0,0).lerp(G,gt),D.position.copy(Ae).negate(),Ei(R,Je/L)}let ns=Je>=38&&Je<w*8;if(be.visible=ns,ns){ye.opacity=n(Je,40,80);let gt=Je<100;ye.depthTest=we.depthTest=!gt,Ue.position.z=gt?0:-.02,We.position.z=Ue.position.z+.002;let en=n(Je,85,700);Ae.set(0,0,0).lerp(tt,en),ee.position.copy(Ae).negate(),we.opacity=ye.opacity*(1-n(Je,w,w*1.7)),Ei(We,1+(ot?0:Math.max(0,Math.sin(Q*6))*.25*n(Je,300,900))),Ei(be,Je/oe)}let Xi=Je>=w*.9;if(pt.visible=Xi,Xi){let gt=n(Je,w*2,w*7),en=n(Je,y,y*2.2);yt.forEach((on,A)=>{let V=jt(n(Je,w*.9*(1+A*.08),w*1.6*(1+A*.08))),le=A===Be?0:en;on.b.position.copy(on.home).addScaledVector(on.dir,le*6),on.b.rotation.set(le*3,le*(A-3.5),0),Ei(on.b,V),on.b.visible=le<.98&&!(A===Be&&Je>y*1.45)}),Ei(O,1.1*jt(n(Je,w*1.5,w*2.6))),O.position.y=.85+en*4,O.visible=en<.9,Ae.set(0,0,0).lerp(Kt,gt),St.position.copy(Ae).negate(),Ei(pt,Je/_t)}let is=Je>=y;if(C.visible=is,is){Ei(I,jt(n(Je,y,y*1.5))),Ei(P,.8*jt(n(Je,U*.7,U*.92)));for(let gt=0;gt<Z;gt++){let en=j[gt],on=ot?en.u:(en.u+Q*.35)%1;Dn.position.set(-1.7+on*3.4,-.24+en.y+Math.sin(on*Math.PI)*.08,.92+en.z*.12),Dn.scale.setScalar(Math.sin(on*Math.PI)*1.1+.2),Dn.updateMatrix(),J.setMatrixAt(gt,Dn.matrix)}J.instanceMatrix.needsUpdate=!0,te.position.y=.26+(ot?0:Math.sin(Q*8)*.015),Ei(C,Je/K)}let Un=ot?0:n(Je,w*1.2,w*5);ke.visible=de.visible=Un>.01,Un>.01&&(Ce.forEach((gt,en)=>{gt.z+=Xe*gt.sp*(.6+Un),gt.z>9&&(gt.z-=40),Dn.position.set(Math.cos(gt.a)*gt.r,Math.sin(gt.a)*gt.r*.7,gt.z),Dn.rotation.set(0,0,0),Dn.scale.setScalar(Un),Dn.updateMatrix(),(en%2?de:ke).setMatrixAt(en>>1,Dn.matrix)}),ke.instanceMatrix.needsUpdate=de.instanceMatrix.needsUpdate=!0)}}}{let e=new Ie,t=new Ie;t.position.y=-1,e.add(t);let n=[-.99,-.33,.33,.99],s=Me("#24242C"),r=72,o=new Et(Oe(.07,.05,.03,.01,1),new Mt({toneMapped:!1}),r);o.frustumCulled=!1;for(let S=0;S<r;S++)o.setColorAt(S,new et("#3A3A44"));let a=["#2FBF71","#FFE14D","#5CE1E6","#FF7A1A"].map(S=>new et(S)),c=new et("#3A3A44"),l=n.map((S,L)=>{let R=new Ie;R.add(Te(Oe(.62,2.1,.8,.05),s,.025));let D=new $e(new Ft(.05,1.7),Wi(null,{color:"#3D7BFF"}));return D.position.set(.2,.05,.405),R.add(D),R.position.set(S,1.05,0),t.add(R),R});t.add(o);let h=Yn("2,558 kg",ne.white);h.position.set(0,1.35,.5),t.add(h);let f=Te(new Fi(new Mi([[-.05,.55],[.25,.55],[.05,.12],[.28,.12],[-.12,-.55],[0,-.05],[-.25,-.05]].map(([S,L])=>new Fe(S,L))),{depth:.1,bevelEnabled:!1}).center(),Me(ne.yellow),.02);f.position.set(-1.55,1.55,.3),t.add(f);let d=new Ie;d.add(Te(Oe(.5,.34,.05,.03),Me(ne.white),.015));let u=new $e(new Ft(.42,.26),Wi(null,{color:"#FF7A1A"}));u.position.z=.03,d.add(u);let p=Te(Oe(.08,.16,.05,.02),Me(ne.white),.012);p.position.y=-.24;let _=Te(Oe(.3,.04,.16,.02),Me(ne.white),.012);_.position.y=-.33,d.add(p,_),d.position.set(1.72,.36,.45),d.rotation.y=-.4,t.add(d);let g=26,m=new Et(new un(.13,.13,.04,24).rotateX(Math.PI/2),Me("#F2B632"),g),M=new Et(new un(.13,.13,.04,24).rotateX(Math.PI/2),_n(.015),g);m.frustumCulled=M.frustumCulled=!1,t.add(M,m);let b=Array.from({length:g},(S,L)=>({x:(L*.618%1-.5)*3.2,z:.2+L*.37%1*.8,d:L*.173%1,r:L})),v=Array.from({length:4},(S,L)=>{let R=new $e(new pi(.45,.06,8,30),Me(ne.white));return R.rotation.x=Math.PI/2,R.position.set(n[L],-.02,.1),t.add(R),R}),T=[!1,!1,!1,!1],E=S=>.25+S*.32,x=S=>S<1/2.75?7.5625*S*S:S<2/2.75?7.5625*(S-=1.5/2.75)*S+.75:S<2.5/2.75?7.5625*(S-=2.25/2.75)*S+.9375:7.5625*(S-=2.625/2.75)*S+.984375;i.mainframe={group:e,onEnter(){T.fill(!1)},update(S,L,R){let D=0;l.forEach((F,N)=>{let G=R?1:rn((S-E(N))/.75);F.position.y=1.05+(1-x(G))*6,F.rotation.z=R?0:(1-G)*(N%2?.2:-.2),!R&&G>=.36&&!T[N]&&(T[N]=!0,Jt.pop(70+N*12));let W=S-E(N)-.27;D+=W>0&&W<.4?Math.sin(W*40)*(.4-W)*.12:0;let ue=R?1:rn(W/.7);v[N].visible=!R&&ue>0&&ue<1,v[N].scale.setScalar(.4+ue*2.2),v[N].position.y=-.02+ue*.15}),t.position.y=-1+D;for(let F=0;F<r;F++){let N=Math.floor(F/18),G=F%18;Dn.position.set(n[N]-.17+G%3*.11,.35+Math.floor(G/3)*.13+l[N].position.y-1.05+.25,.42),Dn.rotation.set(0,0,0),Dn.scale.setScalar(1),Dn.updateMatrix(),o.setMatrixAt(F,Dn.matrix);let W=R?F%3!==0:Math.sin(S*(3+F%5)+F*1.7)>.1;o.setColorAt(F,W?a[F%4]:c)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0);let z=R?1:jt(rn((S-1.75)/.4));Ei(h,.62*z),h.rotation.z=-.08,Ei(f,.75*(R?1:jt(rn((S-2.1)/.4))*(1+Math.max(0,Math.sin(S*7))*.18))),f.rotation.z=R?0:Math.sin(S*9)*.12;let q=R?0:rn((S-2.4)/.5);m.visible=M.visible=q>0,q>0&&(b.forEach((F,N)=>{let G=(F.d+(S-2.4)*.35)%1;Dn.position.set(F.x,3.2-G*4.6,F.z),Dn.rotation.set(S*3+F.r,S*2+F.r*.5,0),Dn.scale.setScalar(q*(G<.92?1:(1-G)/.08)),Dn.updateMatrix(),m.setMatrixAt(N,Dn.matrix),M.setMatrixAt(N,Dn.matrix)}),m.instanceMatrix.needsUpdate=M.instanceMatrix.needsUpdate=!0),d.position.y=.36+(R?0:Math.max(0,Math.sin(S*4))*.04+D*2)}}}}function ed(i){return i}function qc(i){if(i==null)return ed;var e,t,n=i.scale[0],s=i.scale[1],r=i.translate[0],o=i.translate[1];return function(a,c){c||(e=t=0);var l=2,h=a.length,f=new Array(h);for(f[0]=(e+=a[0])*n+r,f[1]=(t+=a[1])*s+o;l<h;)f[l]=a[l],++l;return f}}function $0(i,e){for(var t,n=i.length,s=n-e;s<--n;)t=i[s],i[s++]=i[n],i[n]=t}function td(i,e){return typeof e=="string"&&(e=i.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(t){return Z0(i,t)})}:Z0(i,e)}function Z0(i,e){var t=e.id,n=e.bbox,s=e.properties==null?{}:e.properties,r=nd(i,e);return t==null&&n==null?{type:"Feature",properties:s,geometry:r}:n==null?{type:"Feature",id:t,properties:s,geometry:r}:{type:"Feature",id:t,bbox:n,properties:s,geometry:r}}function nd(i,e){var t=qc(i.transform),n=i.arcs;function s(h,f){f.length&&f.pop();for(var d=n[h<0?~h:h],u=0,p=d.length;u<p;++u)f.push(t(d[u],u));h<0&&$0(f,p)}function r(h){return t(h)}function o(h){for(var f=[],d=0,u=h.length;d<u;++d)s(h[d],f);return f.length<2&&f.push(f[0]),f}function a(h){for(var f=o(h);f.length<4;)f.push(f[0]);return f}function c(h){return h.map(a)}function l(h){var f=h.type,d;switch(f){case"GeometryCollection":return{type:f,geometries:h.geometries.map(l)};case"Point":d=r(h.coordinates);break;case"MultiPoint":d=h.coordinates.map(r);break;case"LineString":d=o(h.arcs);break;case"MultiLineString":d=h.arcs.map(o);break;case"Polygon":d=c(h.arcs);break;case"MultiPolygon":d=h.arcs.map(c);break;default:return null}return{type:f,coordinates:d}}return l(e)}var id={type:"Topology",objects:{land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[9]],[[10]],[[11]],[[12]],[[13]],[[14]],[[15]],[[16,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[48]],[[49]],[[50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62]],[[63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76]],[[77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90]],[[91]],[[92,115],[114]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106]],[[107]],[[108]],[[109]],[[110]],[[111]],[[112]],[[113]],[[116]],[[117]],[[118]],[[119]],[[120]],[[121]],[[122]],[[123]],[[124]],[[125]],[[126]],[[127]],[[128]],[[129]]]}]}},arcs:[[[33452,3290],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243]],[[5775,3611],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266]],[[37457,4468],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127]],[[16330,7154],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208],[60,197],[332,-104]],[[15122,7165],[425,-231],[-164,23],[-359,58],[-381,162],[202,127],[277,-139]],[[22505,8080],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46]],[[30985,8657],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[78,49],[94,61],[81,52],[41,26],[41,-1],[29,-10],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99520,-142]],[[31180,18764],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70],[106,-274],[139,-443]],[[33736,20389],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266],[333,354],[236,-148],[167,237]],[[69522,21210],[-427,-38],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269]],[[90387,26479],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52]],[[98060,26404],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251]],[[98502,29218],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526]],[[96421,37487],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272]],[[99547,40335],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74],[69,98]],[[0,40798],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[-99836,184]],[[0,41087],[0,-289]],[[0,41087],[57,27],[-34,-284],[-23,-32]],[[96623,40851],[-92,-78],[-93,259],[10,158],[175,-339]],[[96418,41756],[45,-476],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182]],[[63904,42571],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390]],[[89877,42448],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[83531,44530],[-117,-11],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[84565,44589],[-238,-130],[-33,71],[25,201],[119,360],[275,235],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170],[-181,-441]],[[82749,45797],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209]],[[84139,45797],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216]],[[94409,45654],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187]],[[93760,46238],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250],[111,-193]],[[80172,46575],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210]],[[87423,46908],[-143,-402],[-27,445],[49,212],[58,200],[63,-173],[0,-282]],[[93299,46550],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166]],[[92217,47343],[-146,-48],[-44,-166],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361]],[[85346,48536],[-104,-196],[-192,108],[-54,254],[281,29],[69,-195]],[[86241,48752],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172]],[[92538,47921],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307]],[[87261,49899],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220]],[[84788,51419],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132]],[[85746,51249],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241]],[[79393,47122],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914]],[[82742,51659],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374],[110,221],[236,323],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201],[-158,-533],[204,-560],[-48,-272]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[72560,54241],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168]],[[33073,56553],[-232,-65],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440]],[[84439,56653],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83856,57606],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301],[-43,282]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[83757,58301],[-74,-510],[-119,295],[-142,450],[238,-22],[97,-213]],[[83700,61512],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1]],[[31780,61349],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3],[142,-52],[50,-118]],[[28638,61137],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11]],[[29839,62320],[241,-93],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26]],[[80649,61615],[-240,-284],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341]],[[6794,61855],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92]],[[6645,62777],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6207,63177],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196]],[[5737,63567],[-33,-58],[-93,107],[14,43],[43,58],[64,-12],[5,-138]],[[27867,64030],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201]],[[28462,64617],[-68,-29],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343]],[[83659,64045],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947]],[[28383,66284],[-303,-95],[-19,219],[130,47],[184,-18],[8,-153]],[[28611,66290],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67],[220,-265]],[[87399,70756],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127]],[[59604,71655],[-188,-251],[21,-111],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22],[19,3],[40,143],[200,-8],[253,176]],[[56583,71675],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251]],[[54311,73167],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51]],[[52558,74927],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30],[139,183]],[[89159,72524],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610]],[[52655,75484],[-92,-456],[-126,120],[-64,398],[56,219],[179,226],[47,-507]],[[89974,76679],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198]],[[32315,78082],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183],[97,-288]],[[32831,79592],[-135,-11],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[34407,80527],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[89901,80562],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597]],[[48114,81456],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276],[233,24],[298,-365],[-149,-406],[46,-422],[-210,-528]],[[53524,83435],[-166,-478],[-291,333],[-39,246],[408,195],[88,-296]],[[7498,84325],[-277,-225],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281]],[[49165,85222],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49]],[[4006,85976],[-171,-92],[-182,110],[-168,161],[274,101],[220,-54],[27,-226]],[[27981,87304],[-108,-310],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121]],[[27250,87631],[-325,-326],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[26344,89371],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[28926,90253],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174]],[[0,91325],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251]],[[0,88971],[0,2354]],[[23431,91410],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226]],[[0,92833],[99999,-404],[-305,-30],[-49,187],[-99645,247]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[0,404]],[[24848,91640],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,648],[394,-45],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-258],[-322,-400],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-15,-686],[408,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-162],[294,-249],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-22,395],[-189,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[416,59],[245,-290],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-159,-386],[-35,-98],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,12],[-205,-104],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,31],[-91,147],[57,-318],[66,-106],[8,-222],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,226],[-33,490],[-53,-255],[59,-375],[-175,88],[183,-186],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-74],[-137,71],[-44,259],[-106,136],[-147,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,91],[-281,-269],[-49,30],[-135,276],[-174,146],[-314,-75],[-247,66],[-212,-41],[-118,-83],[54,-166],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,313],[-242,-74],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201],[1,-1],[-1,-1],[-107,-516],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205],[90,-107],[24,88],[82,-75],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,16],[90,65],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97],[70,-321],[108,-238],[130,-252],[100,-212],[-6,-125],[111,-27],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-343],[105,-469],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-73],[155,184],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205],[333,-119],[30,107],[225,43],[298,-159],[95,-65],[204,-140],[294,-499],[46,-242],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[274,-433],[265,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-79,576],[-23,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315],[-93,170],[-59,319],[68,158],[-70,40],[-52,195],[-138,165],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,92],[46,-89],[21,41],[-48,185],[-84,52],[-31,-140],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127],[-142,103],[-174,11],[-127,117],[-149,244],[-314,636],[-144,192],[-226,154],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,137],[-164,288],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,235],[-93,-26],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-182,337],[-200,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-70,95],[-34,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[68,156],[-44,485],[-94,484],[-38,1],[-537,581],[-199,255],[-503,245],[-155,523],[40,362],[-356,252],[-48,476],[-336,429],[-6,304],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-50],[-546,271],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-307,-126],[-40,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-247],[-278,-181],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,217],[-179,210],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-295],[586,22],[-225,366],[-342,226],[-197,295],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83],[518,-142],[438,-284],[289,-55],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-448],[341,96],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[375,-300],[-391,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120]],[[18287,93781],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-824,-103],[-374,-41],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114]],[[20972,93958],[-244,-390],[-434,413],[95,83],[372,24],[211,-130]],[[28794,93770],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325]],[[25955,93803],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382]],[[22123,94208],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286]],[[89889,93835],[-421,-4],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155]],[[24112,93575],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115]],[[16539,92764],[-731,-294],[-147,259],[-641,312],[93,193],[218,489],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-248]],[[91869,94941],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89],[697,-155]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[90301,95224],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111],[734,-26],[1004,-313]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[19941,95601],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282]],[[65981,92363],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484]],[[23699,96131],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37]],[[17722,96454],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128],[472,442],[570,383],[426,-9],[381,87]],[[63641,74970],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-47,-207],[-102,-138],[7,-293],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696],[146,-311]],[[0,88971],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,220],[-268,-254],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-301],[-96,-675],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[15,276],[431,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-648],[-227,726],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-913,-175],[-900,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,296],[305,-39],[401,-650],[9,-502],[-217,-591],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197],[-106,36],[-120,-201],[-83,-201],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[52,443],[-123,615],[206,99],[-190,506],[-135,113],[-34,-112],[-81,-49],[-10,112],[-72,54],[-75,94],[77,260],[65,69],[-25,108],[71,319],[-18,97],[-163,64],[-131,158],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-172],[311,421],[247,-230],[179,-15],[46,-310],[-394,-165],[-130,-319],[-270,-296],[-142,-414],[299,-324],[109,-582],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,190],[-131,-97],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335],[-233,87],[-112,307],[-141,611],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481],[-79,309],[-16,301],[-53,284],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-386],[-1,-272],[-138,-146],[-250,-212],[-130,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-167],[-93,-402],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501],[-203,150],[-83,425],[-215,449],[-512,-111],[-451,-11],[-391,-83],[-523,179],[-302,136],[-314,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-103,-231],[-165,29],[58,-261],[-25,-135],[89,-445],[109,-510],[137,-135],[47,-207],[190,-248],[16,-244],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145],[-18,430],[75,310],[76,64],[84,-186],[5,-345],[-61,-348],[53,-226],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364],[80,201],[35,-51],[-26,-244],[-37,-108],[38,-466],[125,-404],[155,-214],[204,-78],[164,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-239],[-134,-164],[-153,56],[-186,-199],[-128,-33],[-201,-159],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-32],[-83,34],[-163,-245],[-177,-113],[-233,-31],[-70,-34],[-61,-156],[-73,-43],[-42,-150],[-138,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257],[-36,253],[-84,177],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,307],[-81,131],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236],[-9,86],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219],[161,-683],[77,-543],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178],[66,-183],[-9,-245],[-158,-142],[119,-161],[91,-109],[54,-244],[125,-248],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-274],[65,-102],[-41,-246],[-116,-210],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-209,-269],[-291,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115],[-39,183],[-74,444],[-228,626],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438],[-52,90],[96,663],[40,467],[-108,390],[-127,100],[-56,265],[-71,85],[3,163],[-289,-213],[-105,32],[-107,-133],[-222,13],[-149,370],[-91,427],[-197,390],[-209,-8],[-245,1],[-229,-69],[-224,-126],[-436,-346],[-154,-203],[-250,-171],[-248,168],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15],[-73,-5],[-286,282],[-252,450],[-237,323],[-187,381],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127],[-46,453],[36,262],[-115,460],[-138,210],[122,112],[134,415],[66,304],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255],[12,249],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235],[259,66],[219,403],[139,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-289],[-2,-274],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-69],[68,-196],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6],[99,482],[138,416],[5,21],[-26,452],[68,243],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-71],[-268,315],[-303,-10],[-165,587],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-416],[399,-229],[323,91],[239,-53],[328,309],[42,252],[-70,403],[-160,218],[-154,68],[-102,181],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437],[6,-152],[-135,-128],[-84,56],[-78,-713],[-144,-245],[-101,-422],[89,-337],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,275],[3,122],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,0],[-147,304],[-52,-130],[62,-353],[139,-277],[-105,-130],[155,-272],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-7],[-228,257],[-104,472],[-49,393],[-108,272],[-143,337],[-18,168],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-46,93],[-59,46],[-78,192],[-120,118],[-261,218],[-161,213],[-254,176],[-233,435],[56,44],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9],[62,54],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-213],[204,-179],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,341],[-86,584],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43],[-252,-334],[-548,160],[-404,-192],[-32,-355],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-455],[-352,-8],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200],[14,420],[-114,257],[393,426],[340,-107],[373,4],[296,-101],[230,31],[449,-19],[144,354],[53,1177],[-287,620],[-205,299],[-424,228],[-28,430],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119],[222,117],[143,162],[244,870],[380,247],[231,-17],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335],[-113,328],[-8,604],[46,159],[80,178],[244,36],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7],[63,260],[383,191],[-59,497],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17],[316,327],[-291,280],[-504,-47],[-489,-216],[-452,-125],[-161,322],[-269,195],[62,581],[-135,534],[133,344],[252,371],[635,640],[185,124],[-28,250],[-387,279],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835],[-187,363],[-548,-684],[-370,-138],[-385,301],[-99,635],[-88,1364],[256,380],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286],[-174,263],[183,215],[672,-368],[234,144],[-187,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[2,-328],[218,-203],[429,128],[68,377],[581,282],[969,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[182,537],[207,116],[735,-156],[58,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,594],[-361,481],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[484,119],[668,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[250,112],[142,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-103],[443,3],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,263],[886,-166],[578,36],[799,-282],[-99610,-258]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[19392,96485],[-518,-170],[-411,191],[224,188],[406,60],[392,-92],[-93,-177]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[19538,97019],[-339,-115],[-461,1],[5,84],[285,177],[149,-27],[361,-120]],[[23380,96697],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214]],[[22205,96856],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281]],[[79187,96845],[-1566,-228],[507,776],[229,66],[208,-38],[704,-336],[-82,-240]],[[55069,97669],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206]],[[57068,98086],[545,-207],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148]],[[64204,98169],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90]],[[77760,97184],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531]],[[25828,97644],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390]],[[30972,99681],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37]],[[42472,99925],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74]]],bbox:[-180,-85.60903777459777,180,83.64513000000002],transform:{scale:[.0036000360003600037,.0016925586033320111],translate:[-180,-85.60903777459777]}};var bi=1.6,J0=Math.PI/180,Ps=(i,e,t=bi)=>{let n=(e+180)*J0,s=(90-i)*J0;return new k(-t*Math.cos(n)*Math.sin(s),t*Math.cos(s),t*Math.sin(n)*Math.sin(s))},sd=i=>{let e=Math.atan2(-i.x,i.z),t=-i.x*Math.sin(e)+i.z*Math.cos(e);return{yaw:e,pitch:Math.atan2(i.y,t)}},K0=(i,e,t)=>{let n=(e-i)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),i+n*t},rd=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,Rn=new sn,po=new k(0,1,0);function Px(){let t=document.createElement("canvas");t.width=2048,t.height=1024;let n=t.getContext("2d");n.fillStyle="#5CC8F0",n.fillRect(0,0,2048,1024),n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=2;for(let h=-180;h<=180;h+=30){let f=(h+180)/360*2048;n.beginPath(),n.moveTo(f,0),n.lineTo(f,1024),n.stroke()}for(let h=-60;h<=60;h+=30){let f=(90-h)/180*1024;n.beginPath(),n.moveTo(0,f),n.lineTo(2048,f),n.stroke()}let s=h=>(h+180)/360*2048,r=h=>(90-h)/180*1024,o=new Path2D,a=h=>{let f=h[0][0],d=0,u=h.map(([p,_])=>(p-f>180?d-=360:f-p>180&&(d+=360),f=p,[p+d,_]));for(let p of[-360,0,360])u.forEach(([_,g],m)=>m?o.lineTo(s(_+p),r(g)):o.moveTo(s(_+p),r(g))),o.closePath()},c=td(id,id.objects.land);for(let h of c.features||[c]){let f=h.geometry;if(!f)continue;let d=f.type==="Polygon"?[f.coordinates]:f.coordinates;for(let u of d)u.forEach(a)}n.fillStyle="#C8EE5A",n.fill(o,"evenodd"),n.strokeStyle="#000",n.lineWidth=3.5,n.lineJoin="round",n.stroke(o);let l=new qn(t);return l.colorSpace=an,l.anisotropy=8,l}function Yc(i,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");n.fillStyle="#fff",n.strokeStyle="#000",n.lineWidth=7,n.beginPath(),n.arc(64,64,56,0,Math.PI*2),n.fill(),n.stroke(),i==="wifi"?(n.strokeStyle=e?"#2FBF71":"#B9B9C3",n.lineCap="round",n.lineWidth=10,[38,26,14].forEach(r=>{n.beginPath(),n.arc(64,84,r,Math.PI*1.22,Math.PI*1.78),n.stroke()}),n.fillStyle=e?"#2FBF71":"#B9B9C3",n.beginPath(),n.arc(64,84,6,0,Math.PI*2),n.fill()):(n.fillStyle=e?"#FFE14D":"#B9B9C3",n.beginPath(),[[70,22],[40,70],[60,70],[52,106],[88,54],[68,54],[78,22]].forEach(([r,o],a)=>a?n.lineTo(r,o):n.moveTo(r,o)),n.closePath(),n.fill(),n.lineWidth=5,n.stroke()),e||(n.strokeStyle="#FF4D4D",n.lineWidth=11,n.lineCap="round",n.beginPath(),n.moveTo(34,34),n.lineTo(94,94),n.stroke());let s=new qn(t);return s.colorSpace=an,s}function j0(i){let e=new Ie,t=new Ie;t.rotation.order="XYZ",e.add(t),t.add(Te(new tn(bi,96,64),Qn("#ffffff",{map:Px()}),.03));let n=new $e(new tn(bi*1.1,48,32),new Mt({color:"#7CC8FF",transparent:!0,opacity:.16,side:kn,depthWrite:!1}));t.add(n);let s=new Float32Array(420*3);for(let C=0;C<420;C++){let I=Math.random()*2-1,H=Math.random()*Math.PI*2,$=9+Math.random()*5,B=Math.sqrt(1-I*I);s.set([Math.cos(H)*B*$,I*$,Math.sin(H)*B*$-4],C*3)}let r=new yn;r.setAttribute("position",new Kn(s,3));let o=new Xo(r,new Kr({color:"#FFFFFF",size:.05,sizeAttenuation:!0,transparent:!0,opacity:.9,depthWrite:!1}));e.add(o);let a=As([new tn(.07,14,10),new tn(.055,14,10).translate(.07,-.01,0),new tn(.05,14,10).translate(-.065,-.015,.01)]),c=new Ie;t.add(c),[[48,-30],[15,60],[-20,-70],[35,150],[-5,10],[-35,120],[60,95],[5,-150]].forEach(([C,I],H)=>{let $=Te(a,Me(ne.white),.012),B=Ps(C,I,bi+.16);$.position.copy(B),$.quaternion.setFromUnitVectors(new k(0,0,1),B.clone().normalize()),$.scale.setScalar(1+H%3*.35),c.add($)});let l={lat:25.03,lon:121.56},h=[{lat:12.4,lon:-1.5},{lat:4.6,lon:18.6},{lat:9.1,lon:40.5},{lat:-13.5,lon:34}],f=3,d={lat:2,lon:20},u=As([Oe(1,.66,.09,.04).translate(0,.66,0),Oe(.12,.24,.07,.02).translate(0,.2,-.01),Oe(.46,.05,.28,.02).translate(0,.025,0)]),p=100,_=new Et(u,Me(ne.white),p),g=new Et(u,_n(.05),p),m=new Et(new Ft(.88,.54).translate(0,.66,.047),new Mt({toneMapped:!1}),p),M=[ne.yellow,ne.pink,ne.cyan,ne.lime,ne.lilac,"#FF7A1A"].map(C=>new et(C));for(let C of[_,g,m])C.frustumCulled=!1;let b=Array.from({length:p},(C,I)=>{let H=I===0?f:I%4,$=(B,X)=>((I*9301+B*49297)%233280/233280-.5)*X;return m.setColorAt(I,M[I%M.length]),{a:Ps(l.lat+$(1,4),l.lon+$(2,5),1).normalize(),b:Ps(h[H].lat+$(3,H===f?.6:3.4),h[H].lon+$(4,H===f?.6:3.4),1).normalize(),home:H===f,delay:I%25/25*.35+$(5,.06),lift:.42+$(6,.24),yaw:$(7,6)}});t.add(g,_,m);let v=new Xn,T=new Xn,E=new Xn,x=new k,S=Yc("wifi",!0),L=Yc("wifi",!1),R=Yc("power",!0),D=Yc("power",!1),z=a,q=new Mi([[.02,.09],[-.03,0],[0,0],[-.025,-.09],[.04,.015],[.01,.015],[.035,.09]].map(([C,I])=>new Fe(C,I))),F=new Fi(q,{depth:.012,bevelEnabled:!1}).center(),N=h.map((C,I)=>{let H=new Ie,$=Ps(C.lat,C.lon,1).normalize();H.position.copy($).multiplyScalar(bi),H.quaternion.setFromUnitVectors(po,$);let B=Te(new vi(.03,.14,14).rotateX(Math.PI).translate(0,.07,0),Me(ne.coral),.008),X=Te(new tn(.04,16,12).translate(0,.15,0),Me(ne.coral),.008),te=new $r(new or({map:S,depthWrite:!1})),P=new $r(new or({map:R,depthWrite:!1}));te.position.set(-.06,.27,0),P.position.set(.07,.25,0);let Z=Te(a,Me("#5B5F73"),.008);Z.position.set(0,.44,0),Z.scale.setScalar(1.3);let J=new $e(F,new Mt({color:"#FFE14D",toneMapped:!1}));return J.position.set(.01,.34,.02),J.scale.setScalar(1.1),H.add(B,X,te,P,Z,J),t.add(H),{g:H,wifi:te,pow:P,storm:Z,zap:J,phase:I*1.7}}),G=new Ie,W=Ps(h[f].lat,h[f].lon,1).normalize(),ue=new k(0,-1,0).addScaledVector(W,W.y).normalize(),ie=new k().crossVectors(W,ue).normalize(),ae=new Xn().setFromRotationMatrix(new Nt().makeBasis(ie,W,ue)),ce=new Xn,Ee=new k(1,0,0),Le=24,oe=new Et(u,Me(ne.white),Le),be=new Et(u,_n(.05),Le),ee=new Et(new Ft(.88,.54).translate(0,.66,.047),new Mt({toneMapped:!1}),Le);for(let C of[oe,be,ee])C.frustumCulled=!1;for(let C=0;C<Le;C++)ee.setColorAt(C,M[C%M.length]);{G.position.copy(W).multiplyScalar(bi);let C=new Ie;C.add(be,oe,ee),C.add(Te(new un(.16,.16,.012,40).translate(0,.006,0),Me("#2FBF71"),.006));let I=Te(Oe(.13,.07,.08,.008).translate(0,.047,0),Me(ne.white),.006),H=new Mi([new Fe(-.078,0),new Fe(.078,0),new Fe(0,.05)]),$=Te(new Fi(H,{depth:.09,bevelEnabled:!1}).translate(0,.082,-.045),Me(ne.coral),.006),B=new $e(new Ft(.022,.04),new Mt({color:"#3A2A1A"}));B.position.set(0,.032,.0405);let X=Te(Oe(.05,.004,.03,.001).translate(.025,.106,.015),Me("#3D7BFF"),.004);X.rotation.z=-.55;let te=Te(Oe(.004,.11,.004,.001).translate(-.1,.055,.05),Me(ne.ink),.002),P=new $e(new Ft(.04,.025),new Mt({color:ne.yellow,side:gi}));P.position.set(-.078,.098,.05),C.add(I,$,B,X,te,P),[[.11,-.05],[.095,.07],[-.12,-.06]].forEach(([Z,J],j)=>{C.add(Te(new un(.006,.006,.03,8).translate(Z,.015,J),Me("#8B5A2B"),.003)),C.add(Te(new tn(.026+j*.004,14,10).translate(Z,.045,J),Me("#2E9E55"),.004))}),G.add(C),G.userData.flag=P}t.add(G);let xe=sd(Ps(l.lat,l.lon,1)),ye=sd(Ps(d.lat,d.lon,1)),Ue=sd(Ps(h[f].lat,h[f].lon,1)),Ge=Ps(l.lat,l.lon,1).normalize(),Ne=bi+.9,Ye=new Ie,tt=new Ie,fe=[];{let C=Me("#C8914B"),I=Me("#F2D59B");[[0,.11,0,.22,.02,.22],[0,-.11,0,.22,.02,.22],[.11,0,0,.02,.22,.22],[-.11,0,0,.02,.22,.22],[0,0,.11,.22,.22,.02],[0,0,-.11,.22,.22,.02]].forEach(([X,te,P,Z,J,j],re)=>{let me=Te(Oe(Z,J,j,.008),C,.008);me.position.set(X,te,P),tt.add(me),fe.push({o:me,home:me.position.clone(),dir:new k(X,te,P).normalize(),spin:new k(re+1,re*2-3,3-re)})});let $=Te(Oe(.05,.226,.226,.004),I,.004);tt.add($),fe.push({o:$,home:new k,dir:new k(.3,1,.2).normalize(),spin:new k(4,1,2)});let B=Yn("100 PCs",ne.white);B.scale.setScalar(.09),B.position.set(0,0,.125),tt.add(B),fe.push({o:B,home:B.position.clone(),dir:new k(0,.4,1).normalize(),spin:new k(1,3,6)})}Ye.add(tt);let Re=new $e(new vi(.06,.22,16).rotateX(Math.PI).translate(0,-.22,0),new Mt({color:"#FFB020",toneMapped:!1})),we=new $e(new vi(.032,.14,12).rotateX(Math.PI).translate(0,-.19,0),new Mt({color:"#FFF3B0",toneMapped:!1}));Ye.add(Re,we),Ye.scale.setScalar(1.5),t.add(Ye);let We=14,ze=Array.from({length:We},(C,I)=>{let H=Te(new tn(.075,12,10),Me("#F4F1FF"),.008);return t.add(H),{m:H,k:I/We}}),lt=60,je=new Et(new ai(.03,.012,.004),new Mt({toneMapped:!1}),lt);je.frustumCulled=!1;let _t=[ne.yellow,ne.pink,ne.cyan,ne.lime,ne.lilac,ne.coral].map(C=>new et(C)),pt=Array.from({length:lt},(C,I)=>{je.setColorAt(I,_t[I%_t.length]);let H=I*2.399,$=Math.acos(1-2*((I+.5)/lt));return{d:new k(Math.sin($)*Math.cos(H),Math.cos($),Math.sin($)*Math.sin(H)),s:.5+I*.37%1}});t.add(je);let St=!1,Y=0,Dt=new Ie;{Dt.add(Te(Oe(.12,.08,.08,.01),Me(ne.white),.008)),[-1,1].forEach(I=>{let H=Te(Oe(.16,.005,.07,.003),Me("#3D7BFF"),.005);H.position.x=I*.15,Dt.add(H)});let C=Te(new tn(.035,16,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI),Me(ne.yellow),.006);C.position.y=-.055,Dt.add(C)}let ht=new $e(new vi(.22,.75,24,1,!0).translate(0,-.42,0),new Mt({color:"#5CE1E6",transparent:!0,opacity:.22,depthWrite:!1,side:gi}));Dt.add(ht);let yt=new Ie;yt.rotation.z=.5,yt.add(Dt),e.add(yt);let Be=Te(new tn(.32,32,24),Me("#D9D9E3"),.012);[[.1,.12,.27],[-.14,-.05,.26],[.05,-.17,.25]].forEach(([C,I,H],$)=>{let B=new $e(new fi(.05+$*.012,18),new Mt({color:"#B4B4C6"}));B.position.set(C,I,H),B.lookAt(C*4,I*4,H*4),Be.add(B)}),e.add(Be);let Kt=180,O=new Float32Array(Kt*6),K=Array.from({length:Kt},(C,I)=>({a:I*2.399,r:.6+I*.618%1*7,z:-6+I*.37%1*12})),w=new yn;w.setAttribute("position",new Kn(O,3));let y=new Wo(w,new Jr({color:"#FFFFFF",transparent:!0,opacity:.85,depthWrite:!1}));y.frustumCulled=!1,e.add(y);let U=Array.from({length:9},(C,I)=>{let H=Te(a,Me(ne.white),.004),$=I/9*Math.PI*2+.4;return e.add(H),{c:H,a:$,r0:.6+I%3*.35,s:9+I%4*3}});i.globe={group:e,update(C,I,H,$=0){Y=Math.min(2,Y+I);let B=H?.62:rn(($-.13)/.65),X=De(.15,.55,B),te=rd(De(.7,1,B)),P=H?1:De(.03,.15,B),Z=H?1:jt(rn((Y-.35)/.9)),J=rd(De(.16,.55,B)),j=K0(xe.yaw,ye.yaw,J),re=xe.pitch+(ye.pitch-xe.pitch)*J;j=K0(j,Ue.yaw,te),re+=(Ue.pitch-re)*te;let me=H?0:(1-te)*(Math.sin(C*.25)*.06+(1-De(.14,.34,B))*.75);t.rotation.set(re*(.55+.45*te),j+me,0);let ge=Math.exp(te*Math.log(9));t.scale.setScalar(ge*(H?1:Z)),t.position.z=-bi*(ge-1),c.rotation.y=H?0:C*.02;let ke=H?1:rn(Y/1.5);if(y.visible=ke<1,y.visible){let ve=(1-ke)**2*9;K.forEach((nt,Je)=>{let dt=Math.cos(nt.a)*nt.r,Yt=Math.sin(nt.a)*nt.r;O.set([dt,Yt,nt.z,dt*1.02,Yt*1.02,nt.z+ve],Je*6)}),w.attributes.position.needsUpdate=!0,y.material.opacity=.9*(1-ke)}let de=De(0,.92,P)**1.6,Ce=rn((P-.92)/.08),Se=bi+.13+de*(Ne-bi-.13);Ye.position.copy(Ge).multiplyScalar(Se),Ye.quaternion.setFromUnitVectors(po,Ge),Ye.rotateY(H?0:C*2*de),Ye.visible=!H&&B<.4&&ge<2;let Ae=P>0&&P<.92&&!H?Math.sin(C*60)*.01:0;if(tt.position.x=Ae,Re.visible=we.visible=P>.01&&Ce===0,Re.scale.set(1,.7+Math.sin(C*40)*.3,1),we.scale.set(1,.7+Math.cos(C*50)*.3,1),fe.forEach(ve=>{ve.o.position.copy(ve.home).addScaledVector(ve.dir,Ce*.9),ve.o.rotation.set(ve.spin.x*Ce,ve.spin.y*Ce,ve.spin.z*Ce),ve.o.visible=Ce<.98}),ze.forEach(ve=>{let nt=(ve.k+C*.9)%1,Je=bi+.1+de*(Ne-bi-.13)*(1-nt);ve.m.position.copy(Ge).multiplyScalar(Je).addScaledVector(Ge.clone().cross(po).normalize(),Math.sin(nt*9+ve.k*20)*.04*nt),ve.m.scale.setScalar((.5+nt*2.2)*(1-nt)),ve.m.visible=!H&&P>.02&&P<1&&B<.3}),!H&&Ce>0&&!St&&(St=!0,Jt.tada()),Ce===0&&(St=!1),je.visible=Ce>0&&B<.45,je.visible){let ve=rn((B-.145)/.25),nt=Ge.clone().multiplyScalar(Ne);pt.forEach((Je,dt)=>{Rn.position.copy(nt).addScaledVector(Je.d,ve*.8*Je.s),Rn.position.addScaledVector(Ge,-ve*ve*.5),Rn.rotation.set(C*6+dt,C*4+dt*.5,0),Rn.scale.setScalar(Math.max(1e-4,1-ve)),Rn.updateMatrix(),je.setMatrixAt(dt,Rn.matrix)}),je.instanceMatrix.needsUpdate=!0}yt.rotation.y=H?1:C*.45,Dt.position.set(bi+.85,0,0),Dt.rotation.z=Math.PI/2,ht.visible=!H&&Math.sin(C*3.1)>-.3&&Math.sin(C*7.7)>-.6&&ge<2,yt.visible=ge<2.5,Be.position.set(Math.cos(C*.12)*3.4,.9+Math.sin(C*.12)*.4,-2.2+Math.sin(C*.12)*2.6),Be.visible=ge<2;let Q=De(.2,.75,te);U.forEach((ve,nt)=>{let Je=ve.r0+Q*6;ve.c.position.set(Math.cos(ve.a)*Je,Math.sin(ve.a)*Je*.75,2+Q*6+nt%3*.4),ve.c.scale.setScalar(ve.s*(.6+Q)),ve.c.visible=!H&&Q>.01&&Q<.99}),c.visible=ge<4,n.visible=ge<3,o.rotation.y=H?0:C*.005;for(let ve=0;ve<p;ve++){let nt=b[ve],Je=H?1:rn((X-nt.delay)/.62),dt=rd(Je);v.setFromUnitVectors(po,nt.a),T.setFromUnitVectors(po,nt.b),E.slerpQuaternions(v,T,dt),x.copy(po).applyQuaternion(E);let Yt=Ne+(bi+.012-Ne)*dt+Math.sin(Je*Math.PI)*nt.lift*.6;Rn.position.copy(x).multiplyScalar(Yt),Rn.quaternion.copy(E),Rn.rotateY(nt.yaw+(Je>0&&Je<1?Math.sin(C*8+ve)*.3:0));let ti=nt.home&&Je>=1&&te>.35||!H&&P<1;Rn.scale.setScalar(ti?1e-4:(Je>0&&Je<1?.1:.075)/Math.pow(ge,.35)),Rn.updateMatrix(),_.setMatrixAt(ve,Rn.matrix),g.setMatrixAt(ve,Rn.matrix),m.setMatrixAt(ve,Rn.matrix)}_.instanceMatrix.needsUpdate=g.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0;let Xe=H?1:jt(De(.42,.56,B));N.forEach((ve,nt)=>{ve.g.scale.setScalar(Math.max(1e-4,Xe)*1.8/Math.pow(ge,.85));let Je=H?!1:Math.sin(C*2.6+ve.phase)>.35,dt=H?!0:Math.sin(C*1.9+ve.phase*1.3)>-.2;ve.wifi.material.map=Je&&dt?S:L,ve.pow.material.map=dt?R:D,ve.zap.visible=!H&&!dt&&Math.sin(C*40+nt)>0,ve.storm.position.x=Math.sin(C*.8+nt)*.03,ve.wifi.scale.setScalar(.13),ve.pow.scale.setScalar(.11),ve.g.visible=Xe>.01&&!(nt===f&&te>.75)});let ot=H?1:De(.8,.95,B),Bt=H?1:jt(ot);G.visible=ot>.001,G.scale.setScalar(Math.max(1e-4,Bt)*.9),G.quaternion.copy(ae).multiply(ce.setFromAxisAngle(Ee,-1*Math.min(1,Bt))),G.userData.flag.rotation.y=H?0:Math.sin(C*5)*.4;for(let ve=0;ve<Le;ve++){let nt=Math.floor(ve/8),Je=ve%8,dt=H?1:jt(De(.86+ve*.004,.9+ve*.004,B));Rn.position.set(-.098+Je*.028,.012,.07+nt*.026),Rn.quaternion.identity(),Rn.scale.setScalar(Math.max(1e-4,dt)*.021),Rn.updateMatrix(),oe.setMatrixAt(ve,Rn.matrix),be.setMatrixAt(ve,Rn.matrix),ee.setMatrixAt(ve,Rn.matrix)}oe.instanceMatrix.needsUpdate=be.instanceMatrix.needsUpdate=ee.instanceMatrix.needsUpdate=!0}}}var Ix='"Archivo Black", "Arial Black", Impact, sans-serif',Lx='700 1em Archivo, "Helvetica Neue", Arial, sans-serif',wi=pe.endless,Fx="#262633",$c=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,$n=new sn;function tp(i,e,t,n,s,r){i.beginPath(),i.roundRect?i.roundRect(e,t,n,s,r):i.rect(e,t,n,s)}function ds(i,e,t,n,s,r,o,a=6){tp(i,e,t,n,s,r),i.fillStyle=o,i.fill(),a&&(i.lineWidth=a,i.strokeStyle="#000",i.stroke())}function Zn(i,e,t,n,s,r="#000",{body:o=!1,align:a="left"}={}){i.font=o?Lx.replace("1em",`${s}px`):`${s}px ${Ix}`,i.fillStyle=r,i.textAlign=a,i.textBaseline="middle",i.fillText(e,t,n)}function us(i,e=512,t=320){let n=document.createElement("canvas");n.width=e,n.height=t;let s=new qn(n);s.colorSpace=an,s.anisotropy=4;let r=[],o=(...a)=>{a.length&&(r=a);let c=n.getContext("2d");c.clearRect(0,0,e,t),c.lineJoin="round",i(c,e,t,...r),s.needsUpdate=!0};return o(),uo.push({userData:{redraw:()=>o()}}),s.userData.paint=o,s}var Is={x:58,y:222,w:396,h:34};function np(i){ds(i,Is.x,Is.y,Is.w,Is.h,17,"#FFFFFF",6)}var Q0=(i,e)=>(t,n,s)=>{t.fillStyle="#D6E4FA",t.fillRect(0,0,n,s),ds(t,22,18,n-44,s-36,14,"#FFFFFF",6),t.fillStyle="#ECECE6",tp(t,25,21,n-50,40,11),t.fill(),t.fillStyle="#000",t.fillRect(25,61,n-50,5),Zn(t,"Endless OS Installer",44,42,19,"#000",{body:!0}),ds(t,58,92,92,92,22,wi,6),Zn(t,"e",104,134,72,"#FFFFFF",{align:"center"}),Zn(t,i,172,120,34),Zn(t,e,172,160,21,"#000",{body:!0}),np(t)},ip=i=>(e,t,n)=>{let s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1B47A8"),s.addColorStop(1,"#0B1F4D"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255,255,255,.14)",e.fillRect(0,0,t,50),Zn(e,"BIOS",22,26,26,"#FFFFFF"),Zn(e,"Setup utility",104,27,18,"#BFD3FF",{body:!0}),[["CPU","3.4 GHz"],["Memory","8 GB"],["Storage","SSD 256 GB"],["Boot order","Windows, USB"]].forEach(([r,o],a)=>{Zn(e,r,30,88+a*40,20,"#BFD3FF",{body:!0}),Zn(e,o,200,88+a*40,20,"#FFFFFF",{body:!0})}),ds(e,t-214,n-62,192,44,10,ne.yellow,5),Zn(e,"F8  Boot Menu",t-118,n-39,21,"#000",{align:"center"}),i&&(e.fillStyle="rgba(0,0,0,.45)",e.fillRect(0,0,t,n))},Dx=(i,e,t)=>{ip(!0)(i,e,t),ds(i,70,34,e-140,t-68,14,"#FFFFFF",6),Zn(i,"Boot Menu",e/2,74,28,"#000",{align:"center"}),["Windows Boot Manager","UEFI: USB Flash Disk","Enter Setup"].forEach((n,s)=>{s===1&&ds(i,92,108+s*50,e-184,42,10,wi,5),Zn(i,n,e/2,130+s*50,22,s===1?"#FFFFFF":"#000",{body:!0,align:"center"})})},Nx=(i,e,t)=>{i.fillStyle=wi,i.fillRect(0,0,e,t),Zn(i,"Endless OS",e/2,104,54,"#FFFFFF",{align:"center"}),Zn(i,"Reformatting this computer",e/2,162,23,"#FFFFFF",{body:!0,align:"center"}),np(i)},Ux=(i,e,t)=>{let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#7CC8FF"),n.addColorStop(1,"#B7A3FF"),i.fillStyle=n,i.fillRect(0,0,e,t),ds(i,136,22,240,38,19,"#FFFFFF",5);let s=[wi,ne.yellow,ne.lime,ne.pink,"#3D7BFF",ne.aqua];for(let r=0;r<2;r++)for(let o=0;o<6;o++)ds(i,52+o*72,90+r*88,52,52,14,s[(o+r*3)%6],5);i.fillStyle="#000",i.fillRect(0,t-40,e,40),ds(i,14,t-32,24,24,12,wi,0),Zn(i,"9:41",e-18,t-20,18,"#FFFFFF",{body:!0,align:"right"})},Bx=(i,e,t)=>{i.fillStyle="#1E1E28",i.fillRect(0,0,e,t),i.strokeStyle="rgba(255,255,255,.08)",i.lineWidth=26,i.beginPath(),i.moveTo(e*.55,-10),i.lineTo(e*.25,t+10),i.stroke()},Ox=(i,e,t)=>{i.fillStyle="#000",i.fillRect(0,0,e,t),Zn(i,"Press F2 to enter Setup",30,t-40,20,"#FFFFFF",{body:!0})};function kx(i,e,t,n){if(i.fillStyle="#FFFFFF",i.fillRect(0,0,e,t),n==="power"){i.strokeStyle="#000",i.lineWidth=20,i.lineCap="round",i.beginPath(),i.arc(e/2,t/2+8,66,-Math.PI*.32,Math.PI*1.32),i.stroke(),i.beginPath(),i.moveTo(e/2,t/2-74),i.lineTo(e/2,t/2+4),i.stroke();return}Zn(i,n,e/2,t/2+6,n.length>2?64:112,"#000",{align:"center"})}function Hx(i,e,t,n=0){ds(i,8,8,e-16,t-16,28,"#FFFFFF",12),Zn(i,"PCs ready",e/2,64,42,"#000",{align:"center"}),Zn(i,`${n}/100`,e/2,164,104,n>=100?wi:"#000",{align:"center"})}function zx(i,e=.1){let t=new Mi;t.moveTo(i[0][0],i[0][1]);for(let[s,r]of i.slice(1))t.lineTo(s,r);let n=new Fi(t,{depth:e,bevelEnabled:!1});return n.center(),n}var Gx=[[-.17,.5],[.17,.5],[.17,.02],[.4,.02],[0,-.48],[-.4,.02],[-.17,.02]],es={body:Oe(.62,.28,.14,.06),plug:Oe(.24,.17,.09,.015),eye:new tn(.062,16,12),pupil:new tn(.034,12,10)},od=[[-.17,.03],[0,.03]];function Vx(){let i=new Ie,e=Qn(wi,{emissive:new et("#FFB020"),emissiveIntensity:0});i.add(Te(es.body,e,.02));let t=Te(es.plug,Me("#CFCFD6"),.018);t.position.x=.42,i.add(t);let n=od.map(([s,r])=>{let o=Te(es.eye,Me(ne.white),.012);o.position.set(s,r,.075);let a=new $e(es.pupil,new Mt({color:"#000"}));return a.position.z=.04,o.add(a),i.add(o),a});return i.userData={bodyMat:e,pupils:n},i}function Wx(i){let e=(c,l,h)=>{let f=new Et(c,l,h);return f.frustumCulled=!1,f},t={bodyL:e(es.body,_n(.02),i),body:e(es.body,Me(wi),i),plugL:e(es.plug,_n(.018),i),plug:e(es.plug,Me("#CFCFD6"),i),eyeL:e(es.eye,_n(.012),i*2),eye:e(es.eye,Me(ne.white),i*2),pup:e(es.pupil,new Mt({color:"#000"}),i*2)},n=new Ie;Object.values(t).forEach(c=>n.add(c));let s=new Nt().makeTranslation(.42,0,0),r=od.map(([c,l])=>new Nt().makeTranslation(c,l,.075)),o=od.map(([c,l])=>new Nt().makeTranslation(c,l+.012,.115)),a=new Nt;return{group:n,set(c,l){t.body.setMatrixAt(c,l),t.bodyL.setMatrixAt(c,l),a.multiplyMatrices(l,s),t.plug.setMatrixAt(c,a),t.plugL.setMatrixAt(c,a);for(let h=0;h<2;h++)a.multiplyMatrices(l,r[h]),t.eye.setMatrixAt(c*2+h,a),t.eyeL.setMatrixAt(c*2+h,a),a.multiplyMatrices(l,o[h]),t.pup.setMatrixAt(c*2+h,a)},commit(){Object.values(t).forEach(c=>{c.instanceMatrix.needsUpdate=!0})}}}function ep(i,e,t=wi){let n=((Is.x+9)/512-.5)*i,s=(Is.w-18)/512*i,r=(.5-(Is.y+Is.h/2)/320)*e,o=(Is.h-16)/320*e,a=new $e(new Ft(1,o).translate(.5,0,0),new Mt({color:t,toneMapped:!1}));return a.position.set(n,r,.004),a.userData.set=c=>{a.scale.x=Math.max(1e-4,s*c),a.visible=c>.003},a}function Xx(i,e=.66){let t=new Ie,n=Te(Oe(e+.1,.76,.16,.06),Me("#2C2C38"),.02);n.position.z=-.1;let s=Qn(ne.white),r=Te(Oe(e,.62,.22,.08),s,.022),o=new $e(new Ft(e-.12,.5),new Mt({map:us((a,c,l)=>kx(a,c,l,i),256,Math.round(256*.5/(e-.12))),toneMapped:!1}));return o.position.z=.112,r.add(o),t.add(n,r),t.userData={cap:r,capMat:s},t}function sp(i){let e=new Ie,t=new Ie;e.add(t);let n=new Ie;t.add(n);let s=new Ie;s.position.set(0,-.95,0),n.add(s);let r=Te(Oe(2.3,.1,1.5,.05),Me("#E6E6EE"),.025);r.position.y=.05;let o=new $e(new Ft(1.9,.62),new Mt({color:"#2B2B36"}));o.rotation.x=-Math.PI/2,o.position.set(0,.102,-.05);let a=new $e(new Ft(.6,.32),new Mt({color:"#C9C9D3"}));a.rotation.x=-Math.PI/2,a.position.set(0,.102,.5);let c=new Ie;c.position.set(0,.1,-.72),c.rotation.x=-.2;let l=Te(Oe(2.3,1.45,.07,.05),Me("#E6E6EE"),.025);l.position.y=.725;let h={down:us(Q0("Downloading","Endless OS, Full edition")),write:us(Q0("Reformatter","Writing the USB stick")),off:us(Bx),post:us(Ox),bios:us(ip(!1)),boot:us(Dx),reformat:us(Nx),home:us(Ux)},f=new $e(new Ft(2.1,1.31),new Mt({map:h.down,toneMapped:!1}));f.position.set(0,.725,.037);let d=ep(2.1,1.31);f.add(d),c.add(l,f);let u=Te(Oe(.05,.06,.22,.01),Me("#333340"),.01);u.position.set(1.16,.05,.25),s.add(r,o,a,c,u);let p=As([new tn(.55,24,16),new tn(.42,24,16).translate(.62,-.12,0),new tn(.38,24,16).translate(-.6,-.14,.05),new tn(.3,20,14).translate(.22,.34,.05)]),_=Te(p,Me(ne.white),.03);_.position.set(-.15,1.95,-.7);let g=Te(zx(Gx,.16),Me(wi),.022);g.position.set(-.15,1.15,-.5),g.scale.setScalar(.75);let m=Yn("Endless OS",wi,ne.white);m.scale.setScalar(.42),m.position.set(-.15,2,-.12),m.rotation.z=-.08,n.add(_,g,m);let M=40,b=new Et(Oe(.13,.13,.13,.025),Qn(ne.white),M),v=[wi,ne.yellow,ne.white,ne.cyan,ne.pink].map(ge=>new et(ge));for(let ge=0;ge<M;ge++)b.setColorAt(ge,v[ge%v.length]);b.frustumCulled=!1,n.add(b);let T=Array.from({length:M},(ge,ke)=>({ph:ke*.618%1,a:ke*2.399,r:.15+ke*.37%1*.35})),E=new Ie;E.position.set(1.45,1.25,.1);let x=Te(new un(.5,.5,.1,40).rotateX(Math.PI/2),Me(ne.white),.025);E.add(x),E.add(new $e(As(Array.from({length:12},(ge,ke)=>{let de=ke/12*Math.PI*2;return new ai(.035,ke%3?.06:.1,.01).rotateZ(-de).translate(Math.sin(de)*.4,Math.cos(de)*.4,.056)})),new Mt({color:"#000"})));let S=new $e(new ai(.05,.24,.01).translate(0,.1,0),new Mt({color:"#000"})),L=new $e(new ai(.035,.36,.01).translate(0,.16,0),new Mt({color:wi}));S.position.z=L.position.z=.062,E.add(S,L),n.add(E);let R=Yn("Reformatter",ne.yellow);R.scale.setScalar(.3),t.add(R);let D=new Ie;D.position.set(7,-1,0),t.add(D);let z=Te(Oe(2.3,1.5,.12,.06),Me(ne.white),.03);z.position.set(0,1.42,0);let q=new $e(new Ft(2.1,1.31),new Mt({map:h.off,toneMapped:!1}));q.position.set(0,1.42,.062);let F=ep(2.1,1.31);q.add(F);let N=Te(Oe(.2,.62,.1,.03),Me(ne.white),.025);N.position.set(0,.36,-.06);let G=Te(Oe(.9,.08,.5,.04),Me(ne.white),.025);G.position.y=.04;let W=Te(Oe(.75,1.75,1.3,.06),Me("#2C2C38"),.03);W.position.set(1.8,.875,-.15);let ue=new Mt({color:"#5A5A66",toneMapped:!1}),ie=new $e(new fi(.1,28),ue);ie.position.set(1.8,1.42,.505);let ae=new $e(new Ft(.42,.5),new Mt({color:"#1A1A22"}));ae.position.set(1.8,.62,.503);let ce=Te(Oe(.22,.04,.1,.01),Me("#111118"),.008);ce.position.set(1.8,1.76,.25);let Ee=Te(Oe(1.8,.08,.62,.04),Me(ne.white),.02);Ee.position.set(-.1,.04,.95);let Le=new Et(Oe(.13,.06,.13,.02),Me("#2C2C38"),36);for(let ge=0,ke=0;ge<3;ge++)for(let de=0;de<12;de++,ke++)$n.position.set(-.83+de*.152-.1,.1,.77+ge*.17),$n.rotation.set(0,0,0),$n.scale.setScalar(1),$n.updateMatrix(),Le.setMatrixAt(ke,$n.matrix);D.add(z,q,N,G,W,ie,ae,ce,Ee,Le);let oe=[["power",.66],["F2",.66],["F8",.66],["Enter",1]].map(([ge,ke],de)=>{let Ce=Xx(ge,ke);return Ce.position.set(-1.15+de*.86+(de===3?.17:0),3.05,.6),D.add(Ce),Ce}),be=new Ie;be.position.set(16.2,-.9,0),t.add(be);let ee=new Ie;ee.rotation.x=.72,be.add(ee);let xe=As([Oe(1,.66,.09,.04).translate(0,.66,0),Oe(.12,.24,.07,.02).translate(0,.2,-.01),Oe(.46,.05,.28,.02).translate(0,.025,0)]),ye=100,Ue=1.18,Ge=.82,Ne=new Et(xe,_n(.035),ye),Ye=new Et(xe,Me(ne.white),ye),tt=new Et(new Ft(.88,.54).translate(0,.66,.047),new Mt({toneMapped:!1}),ye);for(let ge of[Ne,Ye,tt])ge.frustumCulled=!1,ee.add(ge);let fe=Te(Oe(Ue*10+.6,.12,Ue*10+.6,.06),Me("#FFFFFF"),.03);fe.position.y=-.07,ee.add(fe);let Re=(ge,ke)=>[(ke-4.5)*Ue,0,(ge-4.5)*Ue],we=new et(Fx),We=new et(wi),ze=new et(ne.yellow),lt=new et,je=Wx(10);ee.add(je.group);let _t=new Nt,pt=new Xn,St=new k,Y=new k,Dt=new k(0,0,1),ht=[.4*Ge+.4,.66*Ge,.05],yt=new Ie;yt.position.set(16.2,4.75,.2);let Be=us(Hx,512,256),Kt=Te(Oe(3,1.5,.14,.08),Me(ne.white),.03),O=new $e(new Ft(2.9,1.45),new Mt({map:Be,transparent:!0,toneMapped:!1}));O.position.z=.075,yt.add(Kt,O),t.add(yt);let K=-1,w=Vx();t.add(w);let y=fo(t,[16.2,4.2,1.2]),U=fo(t,[7,1.6,1]),C={a:[.5,.8,1.42],b:[.5,.3,1.5],c:[7.35,.72,1.3],d:[7.5,.3,1.45],e:[16,.95,.4]},I=[[0,C.a],[.8,C.a],[1.12,C.b],[1.8,C.b],[2.2,C.c],[2.86,C.c],[3.1,C.d],[3.78,C.d],[4.14,C.e],[5,C.e]],H=ge=>{for(let ke=1;ke<I.length;ke++)if(ge<=I[ke][0]){let[de,Ce]=I[ke-1],[Se,Ae]=I[ke],Q=$c(rn((ge-de)/(Se-de)));return[ft(Ce[0],Ae[0],Q),ft(Ce[1],Ae[1],Q),ft(Ce[2],Ae[2],Q),Ce===Ae?0:Math.sin(Math.PI*Q)]}return[...C.e,0]},$=1.3,B=new k(2,-.95+.14*$+.02,.5),X=new k(1.185+(.54-.12)*$,-.9,.25),te=new k(7+1.8,-1+1.78+(.54-.13)*$,.25),P=new k(16.2-.6,4.75+.75+.14*$,.25),Z=(ge,ke,de,Ce,Se)=>Se.lerpVectors(ge,ke,de).setY(ft(ge.y,ke.y,de)+Math.sin(Math.PI*de)*Ce),J=new k,j=new k,re=0,me={done1:!1,done100:!1,keys:[!1,!1,!1,!1]};i.install={group:e,update(ge,ke,de,Ce=0){let Se=de?Math.min(4.95,Math.max(.05,Ce*5)):rn(Ce)*5,Ae=Se>=re;re=Se;let Q=de?0:1,[Xe,ot,Bt,ve]=H(Se);t.scale.setScalar(Bt),t.position.set(-Xe*Bt,-ot*Bt,0),t.rotation.z=de?0:ve*.1*(Se<2.5?1:-1),n.visible=Se<2.35,D.visible=Se>1.6&&Se<4.35,be.visible=yt.visible=Se>3.55;let nt=De(.28,.9,Se),Je=De(1.25,1.8,Se);f.material.map=Se<1.12?h.down:h.write,d.userData.set(Se<1.12?nt:Je),_.position.y=1.95+Math.sin(ge*1.3)*.05*Q,_.scale.setScalar(1-De(.85,1.1,Se)*.999),m.scale.setScalar(.42*(1-De(.85,1.05,Se)*.999)),g.position.y=1.15-(Q?Math.abs(Math.sin(ge*4))*.12:0),g.scale.set(.75,.75*(1+(Q?Math.sin(ge*8)*.08:0)),.75),g.visible=Se<.92;let dt=Se>.2&&Se<.92,Yt=Se>1.22&&Se<1.82;if(b.visible=dt||Yt,b.visible){for(let A=0;A<M;A++){let V=T[A],le=(V.ph+ge*(dt?.55:.8))%1;if(dt){let se=V.r*(1-le);$n.position.set(-.15+Math.cos(V.a+ge)*se,ft(1,-.05,le),ft(-.45,-.55,le)+Math.sin(V.a+ge)*se*.5)}else $n.position.set(ft(.2,1.5,le),-.25+Math.sin(le*Math.PI)*.55+Math.sin(V.a)*.06,ft(-.5,.25,le));$n.rotation.set(ge*3+A,ge*2+A*.5,0),$n.scale.setScalar(Math.max(1e-4,Math.sin(le*Math.PI)*1.1)),$n.updateMatrix(),b.setMatrixAt(A,$n.matrix)}b.instanceMatrix.needsUpdate=!0}let ti=De(1.15,1.3,Se)*(1-De(1.8,1.95,Se));E.visible=ti>.001,E.scale.setScalar(Math.max(1e-4,jt(ti))),L.rotation.z=-(de?1:ge*9+Je*30),S.rotation.z=L.rotation.z/12;let Sn=0,zt=0,Nn=1;if(Se<.95)J.copy(B),J.y+=Q?Math.abs(Math.sin(ge*3.2))*.18:0,Nn=Q?1+Math.sin(ge*6.4)*.06:1,j.set(-.6,.6,0);else if(Se<1.2){let A=$c(De(.95,1.2,Se));Z(B,X,A,.9,J),Sn=Math.PI*A,j.set(0,0,1)}else if(Se<1.86)J.copy(X),Sn=Math.PI,zt=Yt?.45+(Q?Math.sin(ge*9)*.25:0):.15,j.set(0,-.6,1);else if(Se<2.2){let A=$c(De(1.86,2.2,Se));Z(X,te,A,2.2,J),Sn=ft(Math.PI,-Math.PI/2-Math.PI*2,A),j.set(1,0,1)}else if(Se<3.72){J.copy(te),Sn=-Math.PI/2;let A=me.keys.some(V=>V)&&Q?Math.max(0,Math.sin(ge*10))*.02:0;J.y+=A,zt=Se>2.86&&Se<3.66?.3+(Q?Math.sin(ge*7)*.2:0):0,j.set(-1,.2,1)}else if(Se<4.15){let A=$c(De(3.72,4.15,Se));Z(te,P,A,1.6,J),Sn=ft(-Math.PI/2,Math.PI*2,A),j.set(1,1,1)}else J.copy(P),J.y+=Q?Math.abs(Math.sin(ge*5))*.2:0,Nn=Q?1+Math.sin(ge*10)*.08:1,Sn=Q?Math.sin(ge*5)*.2:0,j.set(0,-1,1);w.position.copy(J),w.rotation.set(0,0,Sn),w.scale.set($/Nn,$*Nn,$),w.userData.bodyMat.emissiveIntensity=zt,w.userData.pupils.forEach(A=>A.position.set(j.x*.02,j.y*.02,.04));let ni=De(1.78,1.88,Se)*(1-De(2.05,2.2,Se));R.visible=ni>.001,R.scale.setScalar(.3*Math.max(1e-4,jt(ni))),R.position.set(J.x,J.y+.45,J.z+.1);let ln=Se-2,Ti=[De(.2,.3,ln),De(.22,.32,ln),De(.5,.58,ln),De(.7,.78,ln)],ns=[De(.38,.42,ln)*(1-De(.46,.5,ln)),De(.32,.36,ln)*(1-De(.5,.54,ln)),De(.6,.63,ln)*(1-De(.66,.7,ln)),De(.82,.85,ln)*(1-De(.88,.92,ln))],Xi=De(.95,1.05,ln);oe.forEach((A,V)=>{let le=Math.max(1e-4,jt(Ti[V])*(1-Xi));A.visible=le>.001,A.scale.setScalar(le),A.userData.cap.position.z=-.12*ns[V],A.userData.capMat.color.set(ns[V]>.5?ne.yellow:ne.white),A.rotation.z=Q?Math.sin(ge*2+V)*.04:0;let se=ns[V]>.5;se&&!me.keys[V]&&Ae&&!de&&Jt.pop(500+V*120),me.keys[V]=se});let is=ln>.4;ue.color.set(is?"#5CFF8A":"#5A5A66");let Un=h.off;ln>.4&&(Un=h.post),ln>.47&&(Un=h.bios),ln>.64&&(Un=h.boot),ln>.88&&(Un=h.reformat);let gt=Se-3,en=De(0,.62,gt);gt>.66&&(Un=h.home),q.material.map=Un,F.userData.set(Un===h.reformat?en:0);let on=gt>.66;if(on&&!me.done1&&Ae&&!de&&(U.burst(),Jt.tada()),me.done1=on,be.visible){let A=rn((Se-4.12)/.5),V=0;for(let se=0;se<10;se++){let Ve=rn((A-se*.022)/.802)*11-1,Qe=Math.floor(Ve),He=Ve-Qe,Ke=Math.min(10,Math.max(0,Qe+(He>=.6?1:0)));V+=Ke;for(let wt=0;wt<10;wt++){let Zt=se*10+wt,[wn,,st]=Re(se,wt),Ct=1;if(wt<Ke){let Xt=wt===Ke-1&&Qe<10?Qe===wt?He-.6:He+.4:1;Ct=1+Math.max(0,1-Xt*3)*.18*Q,lt.copy(We).lerp(ze,Math.max(0,1-Xt*4))}else wt===Qe&&He<.6?lt.copy(we).lerp(We,He/.6*(Q?.6+Math.sin(ge*20)*.2:.6)):lt.copy(we);tt.setColorAt(Zt,lt),$n.position.set(wn,0,st),$n.rotation.set(0,0,0),$n.scale.set(Ge,Ge*Ct,Ge),$n.updateMatrix(),Ye.setMatrixAt(Zt,$n.matrix),Ne.setMatrixAt(Zt,$n.matrix),tt.setMatrixAt(Zt,$n.matrix)}let[at,,mt]=Re(se,Math.max(-1,Math.min(10,Qe))),Lt=at+ht[0],Ze=ht[1],Rt=Math.PI,cn=1;if(Qe<0&&He<.6)Ze+=Q?Math.abs(Math.sin(ge*4+se))*.25:0,Rt=0;else if(Qe>=10)Ze+=Q?Math.abs(Math.sin(ge*6+se))*.35:0,Rt=Q?Math.sin(ge*6+se)*.3:0;else if(He>=.6){let wt=(He-.6)/.4;Lt+=Ue*wt,Ze+=Math.sin(Math.PI*wt)*.9,Rt=(Qe<0?0:Math.PI)+Math.PI*2*wt,cn=1+Math.sin(Math.PI*wt)*.15}St.set(Lt,Ze,mt+ht[2]),pt.setFromAxisAngle(Dt,Rt),Y.set(Ge/cn,Ge*cn,Ge),_t.compose(St,pt,Y),je.set(se,_t)}Ye.instanceMatrix.needsUpdate=Ne.instanceMatrix.needsUpdate=tt.instanceMatrix.needsUpdate=!0,tt.instanceColor.needsUpdate=!0,je.commit(),V!==K&&(K=V,Be.userData.paint(V)),yt.rotation.z=Q?Math.sin(ge*1.5)*.03:0;let le=V>=100;le&&!me.done100&&Ae&&!de&&(y.burst(),Jt.tada()),me.done100=le}y.update(ke),U.update(ke)}}}var Cn=new sn;function Yx(i,e=256){let t=document.createElement("canvas");t.width=t.height=e,i(t.getContext("2d"),e);let n=new qn(t);return n.colorSpace=an,n.anisotropy=4,n}function ad(i,e=.1){let t=new Mi;t.moveTo(i[0][0],i[0][1]);for(let[s,r]of i.slice(1))t.lineTo(s,r);let n=new Fi(t,{depth:e,bevelEnabled:!1});return n.center(),n}var $x=[[-.17,.5],[.17,.5],[.17,.02],[.4,.02],[0,-.48],[-.4,.02],[-.17,.02]],Zx=[[-.05,.55],[.25,.55],[.05,.12],[.28,.12],[-.12,-.55],[0,-.05],[-.25,-.05]];var Jx=Array.from({length:10},(i,e)=>{let t=Math.PI/2+e*Math.PI/5,n=e%2?.16:.38;return[Math.cos(t)*n,Math.sin(t)*n]}),Zc,ld,Jc={};function Kx(i){Zc||(Zc=new un(.27,.27,.08,40).rotateX(Math.PI/2)),ld||(ld=new fi(.27,40)),Jc[i]||(Jc[i]=Yx(n=>{n.fillStyle=i==="check"?ne.yellow:ne.red,n.beginPath(),n.arc(128,128,118,0,Math.PI*2),n.fill(),n.lineWidth=14,n.strokeStyle=ne.ink,n.stroke(),n.lineCap="round",n.lineJoin="round",n.lineWidth=30,n.beginPath(),i==="check"?(n.moveTo(70,134),n.lineTo(110,174),n.lineTo(188,86)):(n.moveTo(86,86),n.lineTo(170,170),n.moveTo(170,86),n.lineTo(86,170)),n.stroke()}));let e=new Ie;e.add(new $e(Zc,Me(i==="check"?ne.yellow:ne.red))),e.add(new $e(Zc,_n(.02)));let t=new $e(ld,new Mt({map:Jc[i],transparent:!0,toneMapped:!1}));return t.position.z=.041,e.add(t),e.scale.setScalar(1e-4),e}function op(i=ne.white){let e=new Ie;e.add(Te(new pi(.36,.085,14,48),Me(i),.022));let t=new $e(new fi(.36,40),new Mt({color:"#CFF6FF",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}));t.renderOrder=20,e.add(t);let n=Te(Oe(.17,.62,.17,.07),Me(ne.ink),.02);return n.position.set(.55,-.55,0),n.rotation.z=Math.PI/4,e.add(n),e}function cd(i=ne.white){let e=new Ie;return e.userData.arcs=[.24,.44,.64].map(t=>{let n=Te(new pi(t,.06,10,32,Math.PI/2),Me(i),.02);return n.rotation.z=Math.PI/4,e.add(n),n}),e.add(Te(new tn(.085,18,12),Me(i),.02)),e}function jx(i,e){let t=i.length,n=new Ie,s=new Zo(.1,.16,6,14),r=new tn(.095,18,12),o=new Et(s,Qn(ne.white),t),a=new Et(s,_n(.018),t),c=new Et(r,Qn(ne.white),t),l=new Et(r,_n(.018),t);for(let h=0;h<t;h++)o.setColorAt(h,new et(i[h])),c.setColorAt(h,new et(e[h]));for(let h of[o,a,c,l])h.frustumCulled=!1;return n.add(a,o,l,c),{g:n,update(h){for(let f=0;f<t;f++){let d=Math.max(0,Math.sin(h*4-f*.8))*.16;Cn.rotation.set(0,0,Math.sin(h*2+f)*.08),Cn.scale.setScalar(1),Cn.position.set(f*.26,d,0),Cn.updateMatrix(),o.setMatrixAt(f,Cn.matrix),a.setMatrixAt(f,Cn.matrix),Cn.position.set(f*.26,d+.29,0),Cn.updateMatrix(),c.setMatrixAt(f,Cn.matrix),l.setMatrixAt(f,Cn.matrix)}for(let f of[o,a,c,l])f.instanceMatrix.needsUpdate=!0}}}function Qx(){let i=new Ie,e=Oe(.74,.08,.74,.03);for(let a of[.52,-.52]){let c=Te(e,Me(ne.ink),.02);c.position.y=a,i.add(c)}let t=new $e(new un(.17,.03,.2,24),Me(ne.yellow));t.position.y=.12;let n=new $e(new vi(.24,.22,24),Me(ne.yellow));n.position.y=-.37,i.add(t,n);for(let[a,c]of[[.3,.3],[-.3,.3],[.3,-.3],[-.3,-.3]]){let l=new $e(new un(.03,.03,1,8),Me(ne.ink));l.position.set(a,0,c),i.add(l)}let s=Qn(ne.white,{transparent:!0,opacity:.5,depthWrite:!1}),r=new $e(new un(.28,.035,.48,28,1,!0),s);r.position.y=.24;let o=new $e(new un(.035,.28,.48,28,1,!0),s);return o.position.y=-.24,r.renderOrder=o.renderOrder=20,i.add(r,o),i}function ey(i,e){let t=new Ie,n=Te(new tn(.2,24,18),Me(i),.02);n.scale.set(1,1.15,1);let s=new $e(new vi(.05,.07,10),Me(i));s.position.y=-.25;let r=new $e(new un(.008,.008,e,6),Me(ne.ink));return r.position.y=-.28-e/2,t.add(n,s,r),t}function ty(i){let e=new Ie;return i.forEach((t,n)=>{let s=new Ie;s.add(Te(Oe(.86,.17,.6,.03),Me(t),.02));let r=new $e(Oe(.78,.1,.02,.008),Me(ne.white));r.position.z=.305,s.add(r),s.position.set(n%2?.06:-.04,n*.19,0),s.rotation.y=(n-1)*.12,e.add(s)}),e}function ny(){let i=new Ie;i.add(Te(Oe(.5,.2,.1,.04),Me(ne.ink),.02));let e=Te(Oe(.22,.15,.07,.015),Me("#CFCFCF"),.018);return e.position.x=.34,i.add(e),i}function iy(){let i=new Mi;i.moveTo(-.38,.4),i.lineTo(.38,.4),i.lineTo(.36,.02),i.quadraticCurveTo(.3,-.32,0,-.5),i.quadraticCurveTo(-.3,-.32,-.36,.02),i.lineTo(-.38,.4);let e=new Fi(i,{depth:.12,bevelEnabled:!1,curveSegments:10});e.center();let t=Te(e,Me(ne.white),.022),n=new $e(Oe(.16,.7,.03,.01),Me(pe.endless));return n.position.set(0,-.03,.07),t.add(n),t}function sy(){let i=new Ie;i.add(Te(new un(.32,.3,.2,28),Me(ne.yellow),.02));for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=Te(new vi(.09,.24,12),Me(ne.yellow),.018);n.position.set(Math.cos(t)*.27,.21,Math.sin(t)*.27),i.add(n);let s=new $e(new tn(.04,10,8),Me(ne.red));s.position.set(Math.cos(t)*.31,0,Math.sin(t)*.31),i.add(s)}return i}function ry(i,e){let t=new Ie,n=new un(.36,.36,.25,28),s=[];for(let o=0;o<5;o++){let a=Te(n,Me(o<e?i:ne.white),.022);a.position.y=-.62+o*.31,t.add(a),s.push(a)}let r=Te(new un(.15,.15,.14,20),Me(ne.ink),.02);return r.position.y=.87,t.add(r),t.userData.cells=s,t}function oy(){let i=new Ie;i.add(Te(Oe(2.4,.6,.06,.02),Me("#138A4A"),.02));for(let t=0;t<4;t++){let n=Te(Oe(.42,.3,.07,.02),Me(ne.ink),.015);n.position.set(-.84+t*.56,.06,.05),i.add(n)}let e=new $e(Oe(2.2,.1,.07,.01),Me("#F2B632"));return e.position.set(0,-.24,.01),i.add(e),i}function ay(){let i=new Ie,e=Te(Oe(.36,.5,.36,.06),Me(ne.pink));e.position.x=-.22;let t=Te(new un(.42,.15,.4,28).rotateZ(-Math.PI/2),Me(ne.pink),.022);return t.position.x=.16,i.add(e,t),i.userData.waves=[.62,.86].map(n=>{let s=Te(new pi(n,.055,10,28,Math.PI/2),Me(ne.white),.02);return s.rotation.z=-Math.PI/4,s.position.x=-.05,i.add(s),s}),i}function ly(){let i=new Ie;i.add(Te(Oe(1.25,.12,.62,.05),Me(ne.white)));let e=new Et(Oe(.11,.07,.11,.02),Me(ne.ink),27),t=0;for(let n=0;n<3;n++)for(let s=0;s<9;s++)Cn.position.set(-.52+s*.13,.08,-.17+n*.17),Cn.rotation.set(0,0,0),Cn.scale.setScalar(1),Cn.updateMatrix(),e.setMatrixAt(t++,Cn.matrix);return i.add(e),i}function cy(){let i=new Ie,e=new Ie;e.add(Te(new tn(.44,32,22),Me(pe.zorin),.025));let t=new pi(.447,.022,8,56),n=new $e(t,Me(ne.ink));n.rotation.x=Math.PI/2;let s=new $e(t,Me(ne.ink)),r=new $e(t,Me(ne.ink));r.rotation.y=Math.PI/2,e.add(n,s,r);for(let[o,a,c]of[[.4,.3,.16],[2.2,-.2,.2],[3.9,.5,.13],[5.1,-.35,.15]]){let l=new $e(new tn(c,14,10),Me(pe.mint));l.position.setFromSphericalCoords(.36,Math.PI/2-a,o),e.add(l)}return i.add(e),i.userData.spin=e,i}function hy(){let i=new Ie,e=[[0,0],[.3,0],[.3,.09],[.12,.13],[.07,.32],[.11,.4],[.31,.52],[.39,.98],[.35,1],[.3,.6],[0,.56]].map(([t,n])=>new Fe(t,n));i.add(Te(new ra(e,40),Me(ne.yellow),.025));for(let t of[1,-1]){let n=Te(new pi(.17,.045,10,24,Math.PI),Me(ne.yellow),.02);n.rotation.z=-t*Math.PI/2,n.position.set(t*.36,.72,0),i.add(n)}return i}function hd(i,e){let t=op();i.add(t);let n=e.map(u=>{let p=Kx(u.kind);return p.position.set(...u.at),i.add(p),p}),s=e.map(u=>new k(u.at[0],u.at[1],u.at[2]+.3)),r=s[0].clone().add(new k(.9,-.9,.4)),o=.9,a=1.3,c=e.length,l=o+(c-1)*a,h=l+3.6,f=new k,d=-1;return(u,p)=>{let _=p?l+.7:u%h;if(p||e.forEach((M,b)=>{let v=o+b*a+.12;d<v&&_>=v&&Jt.pop(640+b*110)}),d=_,_<o)f.copy(r).lerp(s[0],De(.05,o,_));else if(_<l){let M=Math.floor((_-o)/a);f.copy(s[M]).lerp(s[M+1],De(.45,1,(_-o-M*a)/a))}else f.copy(s[c-1]);t.position.copy(f),t.position.y+=Math.sin(u*3)*.03,t.rotation.z=Math.sin(u*1.7)*.18;let g=p?1e-4:De(0,.35,_)*(1-De(l+.9,l+1.4,_));t.scale.setScalar(Math.max(g,1e-4)),t.visible=g>.01;let m=1-De(h-.45,h,_);n.forEach((M,b)=>{let v=o+b*a+.12,T=rn((_-v)/.38),E=jt(T)*m;M.scale.setScalar(Math.max(E,1e-4)),M.rotation.y=(1-T)*2.5,M.visible=E>.01})}}function ap(){let i={};{let d=new Ie,u=new Ie;u.position.y=-.1,d.add(u);let p=100,_=Oe(.2,.2,.2,.04,2),g=new Et(_,Qn(ne.white),p),m=new Et(_,_n(.02),p);g.frustumCulled=m.frustumCulled=!1,u.add(m,g);let M=[1.5,.7,-.1,-.9],b=[1.55,1.25,.98,.74];M.forEach((z,q)=>{let F=Te(new pi(b[q],.07,12,64),Me([ne.yellow,ne.pink,ne.cyan,ne.white][q]),.02);F.rotation.x=Math.PI/2,F.position.y=z,u.add(F)});let v=new Array(p),T=[...Array(p).keys()].sort((z,q)=>z*37%101-q*37%101);T.forEach((z,q)=>{v[z]=q<3?4:q<8?3:q<20?2:q<45?1:0});let E=T.slice(0,3),x=[pe.mint,pe.zorin,pe.endless].map(z=>new et(z)),S=new et(ne.white),L=[...Array(p).keys()].map(z=>({x:(z%10-4.5)*.27,z:(Math.floor(z/10)-4.5)*.27,y:2.4+z*53%17/17*.8}));for(let z=0;z<p;z++)g.setColorAt(z,S);let R=6.5,D=z=>z>=M[0]?b[0]:z<=M[3]?b[3]:ft(b[3],b[0],(z-M[3])/(M[0]-M[3]));i.funnel={group:d,update(z,q,F){let N=F?4.2:z%R;for(let G=0;G<p;G++){let W=L[G],ue=v[G],ie=W.y-Math.max(0,N-.3)*1.45,ae=ue<4?M[ue]:-1.45,ce=D(Math.max(ie,ae))/b[0],Ee=W.x*ce,Le=W.z*ce,oe=Math.max(ie,ae),be=1;if(ue<4&&ie<ae){let ee=Math.min(1,(ae-ie)/.5);Ee*=1+ee*.9,Le*=1+ee*.9,be=1-ee}if(ue===4){let ee=E.indexOf(G),xe=De(-1.2,-1.45,ie);Ee=ft(Ee,(ee-1)*.55,xe),Le=ft(Le,.2,xe),be=1+xe*.6,g.setColorAt(G,ie<M[3]?x[ee]:S)}N>R-.5&&(be*=(R-N)/.5),Cn.position.set(Ee,oe,Le),Cn.rotation.set(0,(G*.7+N*.5)%6.28,0),Cn.scale.setScalar(Math.max(be,1e-4)),Cn.updateMatrix(),g.setMatrixAt(G,Cn.matrix),m.setMatrixAt(G,Cn.matrix)}g.instanceMatrix.needsUpdate=m.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0}}}let e=3.84,t=2.4,n=e/1280,s=(d,u)=>[(d/1280-.5)*e,(.5-u/800)*t],r=(d,u,p)=>Math.max(0,1-Math.abs(d-u)/p);function o(d,u,p,_,g,m,M,b,v,{opaque:T=!1,anchor:E="center"}={}){let x=new qn(u);x.colorSpace=an,x.anisotropy=8;let S=new Mt({map:x,transparent:!T,depthWrite:T,toneMapped:!1}),L=new $e(new Ft(g*n,m*n),S);L.renderOrder=M;let R=new Ie,[D,z]=s(p+g/2,_+m/2);if(E==="bottom")R.position.set(D,z-m*n/2,b),L.position.y=m*n/2;else if(E==="tip"){let[q,F]=s(p,_);R.position.set(q,F,b),L.position.set(g*n/2,-(m*n)/2,0)}else R.position.set(D,z,b);return R.add(L),d.add(R),{pivot:R,mesh:L,mat:S,base:R.position.clone(),z:b,depth:v}}function a(){let d=Te(Oe(e+.18,t+.18,.12,.08),Me(ne.ink),.022);return d.position.z=-.07,d}function c(d,u){if(u<=d[0][0])return[d[0][1],d[0][2]];for(let _=0;_<d.length-1;_++){let[g,m,M]=d[_],[b,v,T]=d[_+1];if(u<=b){let E=De(g,b,u);return[ft(m,v,E),ft(M,T,E)]}}let p=d[d.length-1];return[p[1],p[2]]}let l=(d,u)=>u?0:1-De(.18,.36,d)+De(.72,.9,d),h=(d,u)=>{d.pivot.position.z=d.z+u*d.depth};function f(d,u,p,_,g,m){let[M,b]=c(u,p),[v,T]=s(M+(m?0:Math.sin(_*1.7)*3),b+(m?0:Math.cos(_*1.3)*2));d.pivot.position.x=v,d.pivot.position.y=T;let E=1;for(let x of g)E-=.25*r(p,x,.012);d.pivot.scale.setScalar(E)}{let d=new Ie,u=new Ie;d.add(u);let p=G0(),_=new Ie;_.position.y=.08,_.add(a()),u.add(_);let g=o(_,p.wall,0,0,1280,800,1,0,0,{opaque:!0}),m=o(_,p.panel,0,756,1280,44,2,.01,.45),M=o(_,p.taskBtn,172,760,170,36,3,.015,.47),b=o(_,p.win,330,110,780,480,4,.02,.72),v=o(_,p.menu,0,276,560,480,5,.03,.95,{anchor:"bottom"}),T=o(_,p.menuHi,276,382,272,32,6,.035,0);v.pivot.attach(T.pivot);let E=o(_,p.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"}),x=cd();x.position.set(1.55,1.68,.45),x.scale.setScalar(.72);let S=jx([ne.yellow,ne.pink,pe.zorin,ne.white,ne.lilac],["#F1C7A1","#8D5A3B","#D9A27A","#5C3A24","#F3D5B5"]);S.g.position.set(.8,-1.62,.9),u.add(x,S.g);let[L,R]=s(90,690),[D,z]=s(990,150),q=hd(u,[{kind:"check",at:[L,R+.08,1]},{kind:"check",at:[D,z+.08,1]},{kind:"check",at:[1.32,-1.12,1.3]},{kind:"cross",at:[1.55,2.12,.9]}]),F=[[.28,1150,640],[.33,66,778],[.4,66,778],[.44,24,778],[.48,400,398],[.54,400,398],[.58,720,132],[.6,720,132],[.7,840,162],[.82,1e3,420]];i.mint={group:d,pick:[g.mesh],screen:_,hover:!1,update(N,G,W,ue=.5){_.scale.setScalar(ft(_.scale.x,this.hover?1.05:1,.2));let ie=l(ue,W),ae=De(.335,.41,ue),ce=De(.44,.48,ue)*(1-De(.55,.6,ue)),Ee=De(.475,.49,ue)*(1-De(.54,.56,ue)),Le=De(.6,.7,ue);[g,m,M,b,v,E].forEach(oe=>h(oe,ie)),b.pivot.position.x=b.base.x+Le*120*n,b.pivot.position.y=b.base.y-Le*30*n-(1-ae)*.4,b.pivot.scale.setScalar(Math.max(ft(.5,1,jt(ae)),1e-4)),b.mat.opacity=ae,b.pivot.visible=ae>.01,M.mat.opacity=ae,v.pivot.scale.set(1,Math.max(jt(ce),1e-4),1),v.mat.opacity=Math.min(1,ce*1.6),v.pivot.visible=ce>.01,T.mat.opacity=Ee,f(E,F,ue,N,[.335,.44,.6],W),x.userData.arcs.forEach((oe,be)=>{oe.visible=W||N*2%4>be}),S.update(W?0:N),q(N,W)}}}{let d=new Ie,u=new Ie;u.position.y=-.2,d.add(u);let p=V0(),_=new Ie;u.add(_);let g=new Ie;g.add(a()),_.add(g);let m=o(g,p.wall,0,0,1280,800,1,0,0,{opaque:!0}),M=o(g,p.panel,0,754,1280,46,2,.01,.45),b=o(g,p.taskBtn,176,759,170,36,3,.015,.47),v=o(g,p.win,440,96,760,470,4,.02,.72),T=o(g,p.menu,8,222,620,520,5,.03,.95,{anchor:"bottom"}),E=o(g,p.menuHi,26,344,340,40,6,.035,0);T.pivot.attach(E.pivot);let x=o(g,p.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"});[[-1.2,1.8,ne.yellow],[.1,1.98,ne.pink],[1.25,1.78,ne.white]].forEach(([F,N,G])=>{let W=ey(G,N-.28-1.3);W.position.set(F,N,0),_.add(W)});let S=Qx();S.position.set(-1.62,-1.62,.6),S.scale.setScalar(.55);let L=cd();L.position.set(1.62,-1.72,.45),L.scale.setScalar(.62),u.add(S,L);let[R,D]=s(160,600),z=hd(u,[{kind:"check",at:[.1,2.32,.9]},{kind:"check",at:[R,D,1]},{kind:"cross",at:[-1.62,-1.08,1]},{kind:"cross",at:[1.62,-1.16,.95]}]),q=[[.28,1150,640],[.36,26,777],[.4,26,777],[.46,200,364],[.54,200,364],[.62,760,300],[.82,1e3,420]];i.zorin={group:d,pick:[m.mesh],screen:g,hover:!1,update(F,N,G,W=.5){let ue=G?0:1;_.position.y=(Math.sin(F*1.3)*.08+.03)*ue,_.rotation.z=Math.sin(F*.9)*.025*ue,g.scale.setScalar(ft(g.scale.x,this.hover?1.05:1,.2));let ie=l(W,G),ae=De(.37,.43,W)*(1-De(.55,.6,W)),ce=De(.45,.47,W)*(1-De(.55,.57,W)),Ee=De(.555,.63,W);[m,M,b,v,T,x].forEach(oe=>h(oe,ie)),v.pivot.position.y=v.base.y-(1-Ee)*.4,v.pivot.scale.setScalar(Math.max(ft(.5,1,jt(Ee)),1e-4)),v.mat.opacity=Ee,v.pivot.visible=Ee>.01,b.mat.opacity=Ee,T.pivot.scale.set(1,Math.max(jt(ae),1e-4),1),T.mat.opacity=Math.min(1,ae*1.6),T.pivot.visible=ae>.01,E.mat.opacity=ce,f(x,q,W,F,[.37,.555],G);let Le=Math.floor(F/3);S.rotation.z=G?0:Math.PI*(Le+De(2.4,3,F-Le*3)),L.userData.arcs.forEach((oe,be)=>{oe.visible=G||F*2%4>be}),z(F,G)}}}{let d=new Ie,u=new Ie;d.add(u);let p=W0(),_=new Ie;_.position.y=.05,_.add(a()),u.add(_);let g=o(_,p.wall,0,0,1280,800,1,0,0,{opaque:!0}),m=o(_,p.search,340,50,600,56,3,.012,.5),M=o(_,p.iconHi,140,200,150,160,2,.008,.55),b=p.icons.map((ie,ae)=>o(_,ie,140+ae%6*170,200+Math.floor(ae/6)*200,150,160,3,.012,.5+ae%6*.06)),v=o(_,p.panel,0,752,1280,48,4,.01,.4),T=o(_,p.win,100,64,1080,640,6,.03,.85),E=o(_,p.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"}),x=cd(),S=Te(Oe(1,.1,.08,.04),Me(ne.red),.02);S.position.set(0,.32,.12),S.rotation.z=-Math.PI/4,x.add(S),x.position.set(1.7,1.62,.4),x.scale.setScalar(.62);let L=Te(ad($x,.14),Me(ne.white),.022);L.position.set(-1.75,1.7,.45),L.scale.setScalar(.58);let R=iy();R.position.set(-1.7,-1.68,.6),R.scale.setScalar(.6);let D=ty([ne.red,pe.zorin,ne.yellow]);D.position.set(1.45,-1.9,.45),D.scale.setScalar(.75);let z=ny();z.position.set(.35,-1.72,.7),u.add(x,L,R,D,z);let[q,F]=s(215,210),N=hd(u,[{kind:"check",at:[q,F,1]},{kind:"check",at:[1.7,2.12,.85]},{kind:"check",at:[1.45,-1.3,1]},{kind:"check",at:[-1.7,-1.18,1]},{kind:"cross",at:[-1.75,2.16,.9]}]),G=[[.28,1150,640],[.42,700,430],[.47,225,268],[.55,225,268],[.62,520,320],[.82,900,400]],[W,ue]=s(215,280);i.endless={group:d,pick:[g.mesh],screen:_,hover:!1,update(ie,ae,ce,Ee=.5){_.scale.setScalar(ft(_.scale.x,this.hover?1.05:1,.2));let Le=l(Ee,ce);[g,m,M,v,T,E,...b].forEach(Ue=>h(Ue,Le));let oe=De(.24,.32,Ee);m.pivot.position.y=m.base.y+(1-oe)*.4,m.mat.opacity=oe;let be=De(.46,.48,Ee)*(1-De(.55,.57,Ee));b.forEach((Ue,Ge)=>{let Ne=De(.26+Ge*.012,.31+Ge*.012,Ee),Ye=jt(Ne)*(Ge===0?1+be*.12:1);Ue.pivot.scale.setScalar(Math.max(Ye,1e-4)),Ue.mat.opacity=Math.min(1,Ne*2)}),M.mat.opacity=be,M.pivot.scale.copy(b[0].pivot.scale);let ee=De(.555,.64,Ee),xe=Wc(ee);T.pivot.position.x=ft(W,T.base.x,xe),T.pivot.position.y=ft(ue,T.base.y,xe),T.pivot.scale.setScalar(Math.max(ft(.12,1,xe),1e-4)),T.mat.opacity=Math.min(1,ee*2),T.pivot.visible=ee>.01,f(E,G,Ee,ie,[.555],ce);let ye=ce?0:1;z.rotation.y=ie*1.2*ye,L.position.y=1.7-Math.abs(Math.sin(ie*2.2))*.1*ye,D.rotation.y=Math.sin(ie*.8)*.15*ye,N(ie,ce)}}}{let d=new Ie,u=new Ie;u.position.y=-.05,d.add(u);let p=Te(Oe(4.4,.16,1.6,.06),Me(ne.white));p.position.y=-1.45,u.add(p);let _=[pe.mint,pe.zorin,pe.endless],g=["Linux Mint","Zorin OS Lite","Endless OS"],m=Oe(.8,1,.8,.05,2),M=_.map((E,x)=>{let S=(x-1)*1.38,L="#"+new et(E).lerp(new et(ne.white),.45).getHexString(),R=Array.from({length:5},(z,q)=>{let F=Te(m,Me(q%2?L:E),.025);return F.position.x=S,u.add(F),F}),D=Yn(g[x],E);return D.scale.setScalar(.52),D.position.set(S,-1.45,.86),u.add(D),{x:S,segs:R,cur:[0,0,0,0,0],tgt:[0,0,0,0,0],top:0}}),b=sy();u.add(b);let v=0,T=2;i.scores={group:d,setScores(E,x){let S=5*E.reduce((R,D)=>R+D,0)||1,L=M.map((R,D)=>(x.forEach((z,q)=>{R.tgt[q]=z[D]*E[q]/S*2.9}),x.reduce((z,q,F)=>z+q[D]*E[F],0)));T=L.indexOf(Math.max(...L))},onEnter(){M.forEach(E=>E.cur.fill(0))},update(E,x,S){let L=S?1:1-Math.exp(-x*5);M.forEach((R,D)=>{let z=-1.37,q=S?1:De(.1+D*.12,.9+D*.12,E);R.segs.forEach((F,N)=>{R.cur[N]=ft(R.cur[N],R.tgt[N]*q,L);let G=R.cur[N];F.visible=G>.004,F.scale.set(1,Math.max(G,1e-4),1),F.position.y=z+G/2,F.visible&&(z+=G+.025)}),R.top=z}),v=ft(v,M[T].x,L),b.position.set(v,M[T].top+.3+(S?0:Math.sin(E*2.4)*.06),0),b.rotation.y=S?0:E*.8,b.scale.setScalar(Math.max(S?1:jt(De(1,1.4,E)),1e-4))}}}{let d=new Ie,u=new Ie;u.position.y=-.1,d.add(u);let p=[pe.mint,pe.zorin,pe.endless],_=["Linux Mint","Zorin OS Lite","Endless OS"],g=[3,5,2],m=p.map((b,v)=>{let T=ry(b,g[v]);T.position.set((v-1)*1.3,.35,0);let E=Yn(_[v],b);E.scale.setScalar(.44),E.position.set((v-1)*1.3,1.55,.2);let x=Te(ad(Zx,.1),Me(ne.yellow),.02);return x.position.set((v-1)*1.3+.45,.75,.45),x.scale.setScalar(.55),u.add(T,E,x),{b:T,bolt:x,level:g[v]}}),M=oy();M.position.set(0,-1.12,.75),u.add(M),i.energy={group:d,update(b,v,T){m.forEach(({b:E,bolt:x,level:S},L)=>{E.userData.cells.forEach((R,D)=>{let z=T?1:jt(De(.1+D*.12+L*.08,.4+D*.12+L*.08,b));!T&&D===S-1&&(z*=1+Math.max(0,Math.sin(b*5))*.06),R.scale.setScalar(Math.max(z,1e-4))}),x.rotation.z=T?0:Math.sin(b*9+L*2)*.12,x.scale.setScalar(.55*(T?1:1+Math.max(0,Math.sin(b*7+L*1.7))*.18))}),M.rotation.y=T?0:Math.sin(b*.8)*.35,M.position.y=-1.12+(T?0:Math.sin(b*1.4)*.05)}}}{let d=new Ie,u=new Ie;u.position.y=.12,d.add(u);let p=[[op(ne.yellow),-1,.72],[ay(),1,.72],[ly(),-1,-.88],[cy(),1,-.82]];p[0][0].scale.setScalar(1.05),p[2][0].rotation.x=.85;let _=p.map(([g,m,M])=>{let b=Te(new un(.62,.66,.16,36),Me(ne.white),.025);return b.position.set(m,M-.68,.1),g.position.set(m,M,.3),u.add(b,g),b});i.access={group:d,update(g,m,M){p.forEach(([b,v,T],E)=>{let x=M?1:jt(De(.1+E*.15,.5+E*.15,g));b.position.y=T+(M?0:Math.sin(g*2-E*.9)*.08);let S=E===0?1.05:1;b.scale.setScalar(Math.max(S*x,1e-4)),_[E].scale.setScalar(Math.max(x,1e-4))}),M||(p[0][0].rotation.z=Math.sin(g*1.5)*.2,p[1][0].userData.waves.forEach((b,v)=>{b.visible=g*2.5%3>v+.5}),p[2][0].rotation.y=Math.sin(g*.9)*.25,p[3][0].userData.spin.rotation.y=g*.9)}}}{let d=new Ie,u=new Ie;u.position.y=.05,d.add(u);let p=[{col:pe.mint,name:"Linux Mint",x:-1.38,h:1,delay:.3},{col:pe.endless,name:"Endless OS",x:0,h:1.5,delay:.55},{col:pe.zorin,name:"Zorin OS Lite",x:1.38,h:.62,delay:.1}].map(M=>{let b=new Ie;b.add(Te(Oe(1.3,M.h,.95,.07),Me(M.col)));let v=Yn(M.name,M.col);return v.scale.setScalar(.6),v.position.z=.5,b.add(v),u.add(b),{...M,g:b,y:-1.6+M.h/2}}),_=hy();u.add(_);let g=[0,1,2,3].map(M=>{let b=Te(ad(Jx,.1),Me(M%2?ne.white:ne.yellow),.02);return b.scale.setScalar(.7),u.add(b),b}),m=-1;i.pick={group:d,update(M,b,v){!v&&m<1&&M>=1&&Jt.tada(),m=M,p.forEach(E=>{let x=v?1:jt(De(E.delay,E.delay+.5,M));E.g.position.set(E.x,E.y-(1-x)*1.6,0),E.g.scale.setScalar(Math.max(Math.min(1,x+.2),1e-4))});let T=v?1:jt(De(1,1.5,M));_.position.set(0,-.1+(1-T)*2.2+(v?0:Math.sin(M*2)*.04),0),_.rotation.y=v?0:M*.9,_.scale.setScalar(Math.max(T*.95,1e-4)),g.forEach((E,x)=>{let S=(v?0:M*.7)+x*Math.PI/2;E.position.set(Math.cos(S)*1.85,1.15+Math.sin(S*2)*.2,Math.sin(S)*.9+.2),E.rotation.set(0,v?0:M*2+x,0),E.scale.setScalar(Math.max(.7*(v?1:De(1.2,1.6,M)),1e-4))})}}}return Y0(i),j0(i),sp(i),i}var vn={level:0,forced:!1,gpu:"",subs:new Set,set(i){if(i=Math.max(0,Math.min(3,i|0)),i!==this.level){this.level=i,document.documentElement.classList.toggle("q-low",i>=3),document.documentElement.dataset.q=String(i);for(let e of this.subs)e(i)}},on(i){this.subs.add(i)}};document.documentElement.dataset.q="0";function lp(i){let e="";try{let n=i.getExtension("WEBGL_debug_renderer_info");e=String(i.getParameter(n?n.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}catch{}vn.gpu=e;let t=new URLSearchParams(location.search).get("q");if(t!==null&&/^[0-3]$/.test(t)){vn.forced=!0,vn.set(Number(t));return}/swiftshader|llvmpipe|softpipe|basic render|software/i.test(e)?vn.set(3):/intel/i.test(e)&&/direct3d|d3d/i.test(e)&&!/iris\(r\) xe|iris xe|\barc\b/i.test(e)?vn.set(1):(navigator.hardwareConcurrency||8)<=2?vn.set(2):window.matchMedia?.("(pointer: coarse)").matches&&Math.min(screen.width,screen.height)<900&&vn.set(1)}var xi={acc:0,n:0,t:0,before:0,done:!1};function cp(i){if(vn.forced||xi.done||document.hidden||(xi.t+=i,xi.t<3)||(xi.acc+=Math.min(i,.1),xi.n++,xi.acc<2))return;let e=xi.acc/xi.n;if(xi.acc=0,xi.n=0,xi.before&&e>xi.before*.9){vn.set(vn.level-1),xi.done=!0;return}xi.before=0,e>1/42&&vn.level<3&&(xi.before=e,vn.set(vn.level+1))}var ud=2.6,uy=i=>i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375,hp=new Map,up=(i,e=ne.yellow)=>{let t=hp.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],hp.set(e,t)}i.set(t[0],t[1],t[2])},dy=`varying vec2 vUv;
uniform vec2 uRes, uCenter;
uniform vec3 uColA, uColB;
uniform float uWipe, uSpin, uParty, uTime, uBeat, uChaos, uLin;
vec3 hsv(float h){ vec3 p = abs(fract(h + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), 0.55); }
vec3 toLinear(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
void main(){
  vec2 p = vUv * uRes, d = p - uCenter * uRes;
  float r = length(d), R = length(uRes), a = atan(d.y, d.x);
  float star = r * (1.0 + 0.28 * cos(5.0 * (a + uTime * 0.6)));
  float edge = uWipe * R * 1.3;
  vec3 col = mix(uColA, uColB, 1.0 - smoothstep(edge - 1.5, edge + 1.5, star));
  float ring = (1.0 - smoothstep(2.0, 7.0, abs(star - edge))) * step(0.002, uWipe) * step(uWipe, 0.998);
  col = mix(col, hsv(fract(uTime * 0.22 + r / R * 0.7)), max(uParty, uChaos) * 0.85);
  float swirl = sin(r * 0.012 - uTime * 1.6) * (0.35 + uChaos * 0.6);
  float rays = step(0.5, fract(a / 6.2831853 * 18.0 + uSpin + swirl));
  col = mix(col, mix(col, vec3(1.0), 0.17 + uBeat * 0.1), rays * smoothstep(70.0, 280.0, r));
  vec2 g = mod(p, 18.0) - 9.0;
  float dr = (3.3 + uBeat * 2.4) * smoothstep(0.22, 0.9, r / R);
  col = mix(col, col * 0.84, 1.0 - smoothstep(dr - 0.7, dr + 0.7, length(g)));
  vec3 o = mix(col, vec3(0.0), ring * 0.9);
  gl_FragColor = vec4(uLin > 0.5 ? toLinear(o) : o, 1.0);
}`,fy=`uniform sampler2D tDiffuse;
uniform vec2 uRes;
uniform float uTime, uAberr, uBarrel, uGlitch, uGrain, uScan, uKaleido, uWarp, uVhs;
uniform vec3 uHole;
uniform vec4 uRipples[6];
varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
void main(){
  float asp = uRes.x / uRes.y;
  vec2 uv = vUv;
  // wormhole back to the top: the picture spins into a tunnel
  if (uWarp > 0.001) {
    vec2 d = (uv - 0.5) * vec2(asp, 1.0);
    float r = length(d);
    d = rot(uWarp * 4.0 / (r + 0.2)) * d * mix(1.0, 0.15 + r * 0.9, uWarp);
    uv = 0.5 + d / vec2(asp, 1.0);
  }
  // kaleidoscope mode
  if (uKaleido > 0.001) {
    vec2 d = (uv - 0.5) * vec2(asp, 1.0);
    float r = length(d), a = atan(d.y, d.x) + uTime * 0.3, seg = 6.2831853 / 8.0;
    a = abs(mod(a, seg) - seg * 0.5);
    uv = mix(uv, 0.5 + vec2(cos(a), sin(a)) * r / vec2(asp, 1.0), uKaleido);
  }
  // black hole: everything swirls into the pointer
  float hr = 9.0;
  if (uHole.z > 0.001) {
    vec2 d = (uv - uHole.xy) * vec2(asp, 1.0);
    hr = length(d);
    float pull = uHole.z * exp(-hr * 4.0);
    d = rot(pull * 7.0) * d * (1.0 + pull * 1.4);
    uv = uHole.xy + d / vec2(asp, 1.0);
  }
  // rewind: the tape wobbles
  if (uVhs > 0.001) {
    float line = floor(uv.y * 160.0);
    uv.x += (sin(uv.y * 30.0 + uTime * 40.0) * 0.004 + (hash(vec2(line, floor(uTime * 30.0))) - 0.5) * 0.012) * uVhs;
    uv.y = fract(uv.y + uVhs * 0.02 * sin(uTime * 3.0));
  }
  vec2 c = uv - 0.5;
  uv = 0.5 + c * (1.0 + uBarrel * dot(c, c) * 1.8) / (1.0 + uBarrel * 0.45);
  for (int i = 0; i < 6; i++) {
    vec4 rp = uRipples[i];
    float age = uTime - rp.z;
    if (rp.w > 0.0 && age > 0.0 && age < 1.4) {
      vec2 d = (uv - rp.xy) * vec2(asp, 1.0);
      float dist = length(d);
      float w = exp(-pow((dist - age * 0.9) * 16.0, 2.0)) * (1.0 - age / 1.4) * rp.w;
      uv -= (d / max(dist, 1e-4)) * w * 0.04 / vec2(asp, 1.0);
    }
  }
  if (uGlitch > 0.0) {
    float tick = floor(uTime * 18.0), band = floor(uv.y * 24.0);
    if (hash(vec2(band, tick)) < uGlitch * 0.35) uv.x += (hash(vec2(band * 1.7, tick + 3.1)) - 0.5) * 0.14 * uGlitch;
  }
  vec2 dir = (uv - 0.5) * uAberr * 2.0;
  vec3 col = vec3(texture2D(tDiffuse, uv + dir).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - dir).b);
  col += (hash(vUv * uRes + fract(uTime * 7.0) * 113.0) - 0.5) * uGrain;
  col *= 1.0 - uScan * (0.5 + 0.5 * sin(vUv.y * uRes.y * 2.0));
  if (uVhs > 0.001) {
    float band = 1.0 - smoothstep(0.0, 0.035, abs(fract(vUv.y - uTime * 0.35) - 0.5));
    col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))), 0.35 * uVhs);
    col += band * uVhs * hash(vUv * uRes + uTime) * 0.9;
  }
  if (uHole.z > 0.001) col *= smoothstep(0.0, 0.07 * uHole.z + 0.001, hr);
  col = mix(col, vec3(1.0), smoothstep(0.7, 1.0, uWarp));
  gl_FragColor = vec4(max(col, 0.0), 1.0);
  #include <colorspace_fragment>
}`;function dp(i,e,t,n={}){let s=!!n.reduceMotion,r=n.onBg||(()=>{}),o=n.flash||null,a=n.burst||null,c=(()=>{if(/[?&]q=3\b/.test(location.search))return!0;try{let _e=document.createElement("canvas"),Pe=_e.getContext("webgl2")||_e.getContext("webgl");if(!Pe)return!1;let ct=Pe.getExtension("WEBGL_debug_renderer_info"),qe=String(Pe.getParameter(ct?ct.UNMASKED_RENDERER_WEBGL:Pe.RENDERER)||"");return Pe.getExtension("WEBGL_lose_context")?.loseContext(),/swiftshader|llvmpipe|softpipe|basic render|software/i.test(qe)}catch{return!1}})(),l=new kc({canvas:i,antialias:!c,alpha:!0,powerPreference:"high-performance"});lp(l.getContext());let h=[{pr:1.5,ms:4,portal:1024},{pr:1.25,ms:2,portal:1024},{pr:1,ms:0,portal:768},{pr:.75,ms:0,portal:512}];l.setClearColor(0,0),l.outputColorSpace=an;for(let _e of Object.values(e))_e._bg=new et(_e.bg||ne.yellow);let f=_e=>{_e.add(new ua(16777215,1.1));let Pe=new ha(16777215,1.9);Pe.position.set(4,6,5),_e.add(Pe)},d=new oi(30,1,.05,300),u=new sn,p={uRes:{value:new Fe(1,1)},uCenter:{value:new Fe(.5,.5)},uColA:{value:new k(1,.88,.3)},uColB:{value:new k(1,.88,.3)},uWipe:{value:0},uSpin:{value:0},uParty:{value:0},uTime:{value:0},uBeat:{value:0},uChaos:{value:0},uLin:{value:0}},_=new Vs,g=new $e(new Ft(2,2),new mi({uniforms:p,fragmentShader:dy,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}));g.frustumCulled=!1,_.add(g);let m=new hr(-1,1,1,-1,0,1),M={tDiffuse:{value:null},uRes:{value:new Fe(1,1)},uTime:{value:0},uAberr:{value:0},uBarrel:{value:0},uGlitch:{value:0},uGrain:{value:0},uScan:{value:0},uKaleido:{value:0},uWarp:{value:0},uVhs:{value:0},uHole:{value:new k(.5,.5,0)},uRipples:{value:Array.from({length:6},()=>new fn(0,0,-10,0))}},b=new Vs,v=new $e(new Ft(2,2),new mi({uniforms:M,fragmentShader:fy,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}));v.frustumCulled=!1,b.add(v);let T=new jn(1,1,{samples:h[vn.level].ms});M.tDiffuse.value=T.texture;let E=new jn(1,1,{samples:h[vn.level].ms}),x=!1,S=!0,L=new Set(["hello","smile"]),R=new Fe,D=_e=>_e<.5?4*_e*_e*_e:1-(-2*_e+2)**3/2;function z(_e){let ct=Oe(.28,.28,.28,.06,2),qe=new Et(ct,Qn(ne.white),96),rt=new Et(ct,_n(.025),96);qe.frustumCulled=rt.frustumCulled=!1,_e.add(rt,qe);let Qt=[ne.yellow,ne.pink,ne.cyan,ne.lilac,ne.white,pe.mint,pe.zorin,pe.endless,ne.red].map(In=>new et(In)),bt=Array.from({length:96},(In,Ai)=>(qe.setColorAt(Ai,Qt[Ai%Qt.length]),{p:new k,v:new k,r:new k,life:0,s:1})),An=0,ci=!0;return{burst(In){for(let Ai=0;Ai<26;Ai++){let _i=An;An=(An+1)%96;let hn=bt[_i],js=Math.random()*Math.PI*2,Ds=(Math.random()-.3)*1.4,vr=3+Math.random()*4.5;hn.p.copy(In),hn.v.set(Math.cos(js)*Math.cos(Ds)*vr,Math.sin(Ds)*vr+2.5,Math.sin(js)*Math.cos(Ds)*vr),hn.r.set(Math.random()*6,Math.random()*6,Math.random()*6),hn.life=1.3+Math.random()*.5,hn.s=.6+Math.random()*.9,qe.setColorAt(_i,Qt[Math.floor(Math.random()*Qt.length)])}qe.instanceColor.needsUpdate=!0,ci=!0},update(In){if(!ci)return;let Ai=!1;for(let _i=0;_i<96;_i++){let hn=bt[_i];hn.life>0?(Ai=!0,hn.life-=In,hn.v.y-=9.5*In,hn.v.multiplyScalar(1-In*.6),hn.p.addScaledVector(hn.v,In),hn.r.x+=In*6,hn.r.y+=In*4,u.position.copy(hn.p),u.rotation.set(hn.r.x,hn.r.y,hn.r.z),u.scale.setScalar(Math.max(hn.s*Math.min(1,hn.life/.4),1e-4))):(u.position.set(0,-50,0),u.scale.setScalar(1e-4)),u.updateMatrix(),qe.setMatrixAt(_i,u.matrix),rt.setMatrixAt(_i,u.matrix)}qe.instanceMatrix.needsUpdate=rt.instanceMatrix.needsUpdate=!0,ci=Ai}}}let q=new Vs;f(q);let F=new Ie;q.add(F);let N=new Ie;F.add(N);let G=Me(pe.paper);N.add(Te(Oe(3.4,2.2,.26,.12,4),G));let W=new $e(new Ft(3.1,1.92),new Mt({color:0}));W.position.z=.131,N.add(W);let ue={};for(let _e of z0){let Pe=new qn(Vu(_e));Pe.colorSpace=an,Pe.anisotropy=4,ue[_e]=Pe}let ie=new Ft(3,1.834),ae=new $e(ie,new Mt({map:ue.hello,toneMapped:!1})),ce=new $e(ie,new Mt({map:ue.hello,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));ae.position.z=.132,ce.position.z=.133,N.add(ae,ce);let Ee=Te(Oe(.42,.74,.22,.06),G);Ee.position.set(0,-1.42,-.02);let Le=Te(Oe(1.6,.14,.9,.06),G);Le.position.set(0,-1.85,0);let oe=Te(Oe(2.7,.14,.9,.06),G);oe.position.set(0,-1.85,1.25);let be=Te(Oe(.36,.14,.56,.07),G);be.position.set(1.85,-1.85,1.3),N.add(Ee,Le,oe,be);let ee=new Et(new ai(.15,.06,.15),Me(pe.grey),56);for(let _e=0;_e<56;_e++)u.position.set(-1.17+_e%14*.18,-1.76,.98+Math.floor(_e/14)*.18),u.updateMatrix(),ee.setMatrixAt(_e,u.matrix);N.add(ee);let xe=new $e(new fi(1,48),new Mt({color:0,transparent:!0,opacity:.16,depthWrite:!1}));xe.rotation.x=-Math.PI/2,xe.scale.set(3.1,1.6,1),xe.position.set(.15,-1.935,.7),F.add(xe);let ye={mint:Yn("Linux Mint",pe.mint),zorin:Yn("Zorin OS Lite",pe.zorin),endless:Yn("Endless OS",pe.endless)};{let _e=new Ie,Pe=new un(.42,.42,.07,48).rotateX(Math.PI/2);_e.add(new $e(Pe,Me(pe.paper))),_e.add(new $e(Pe,_n(.022)));let ct=new qn(Xu("?",pe.paper,pe.ink));ct.colorSpace=an;let qe=new $e(new fi(.42,48),new Mt({map:ct,transparent:!0,toneMapped:!1}));qe.position.z=.036,_e.add(qe),_e.userData.redraw=()=>{Xu("?",pe.paper,pe.ink,ct.image),ct.needsUpdate=!0},uo.push(_e),ye.q=_e}for(let _e of Object.values(ye))F.add(_e);let Ue={mint:{p:[-1.75,1.22,.5],r:.18},zorin:{p:[1.72,.95,.7],r:-.14},endless:{p:[-1.68,-.5,1],r:.1},q:{p:[1.78,-.42,1.1],r:-.2}},Ge=99,Ne=As([Oe(1,.66,.09,.04).translate(0,.66,0),Oe(.12,.24,.07,.02).translate(0,.2,-.01),Oe(.46,.05,.28,.02).translate(0,.025,0)]),Ye=new Et(Ne,Me(pe.paper),Ge),tt=new Et(Ne,_n(.03),Ge),fe=new Ft(.88,.54).translate(0,.66,.047),Re=new Et(fe,new Mt({toneMapped:!1}),Ge);for(let _e of[Ye,tt,Re])_e.frustumCulled=!1;for(let _e=0;_e<Ge;_e++)Re.setColorAt(_e,new et("#262626"));F.add(tt,Ye,Re);let we=[];for(let _e=-5;_e<=5;_e++)for(let Pe=-9;Pe<=2;Pe++){let ct=_e*1.35,qe=Pe*1.35+.4;Math.abs(ct)<2.4&&qe>-1.8||we.push({x:ct,z:qe,d:Math.hypot(ct,qe*.8)})}we.sort((_e,Pe)=>_e.d-Pe.d);let We=we.slice(0,Ge).map((_e,Pe)=>({..._e,ry:(Pe*37%11/11-.5)*.3})),ze=new et("#262626"),lt=new et(pe.endless),je=new et(ne.white),_t=new et,pt=0,St=[pe.endless,ne.yellow,ne.pink,ne.cyan,ne.white,ne.lime,ne.lilac].map(_e=>new et(_e)),Y=32,Dt=new Et(Ne,Me(pe.paper),Y),ht=new Et(Ne,_n(.03),Y),yt=new Et(fe,new Mt({toneMapped:!1}),Y);for(let _e of[Dt,ht,yt])_e.frustumCulled=!1;q.add(ht,Dt,yt);let Be=[pe.mint,pe.zorin,pe.endless,ne.pink,ne.yellow,ne.cyan,ne.lilac],Kt=Array.from({length:Y},(_e,Pe)=>(yt.setColorAt(Pe,new et(Be[Pe%Be.length])),{x:(Pe*.618%1-.5)*18,z:-3-Pe*.37%1*6,y:Pe*.73%1*13-6,sp:1.4+Pe*.29%1*1.8,r:Pe*1.7,s:.5+Pe*.41%1*.5,k:1})),O=$u(q,{colors:[ne.pink,ne.lilac,ne.sky,pe.mint,pe.zorin,pe.endless,ne.white],seed:7}),K=fo(F,[0,.2,.6]),w=z(q),y=new Vs;f(y);let U=new Ie;y.add(U);let C=ap();for(let _e of Object.values(C))_e.p=0,_e.t0=0,_e.group.visible=!1,U.add(_e.group);let I=$u(y,{colors:[ne.yellow,ne.white,ne.pink,ne.cyan,ne.lilac,pe.mint,pe.zorin,pe.endless],seed:3}),H=fo(U,[0,.6,.8]),$=z(y),B=150,X=Oe(.3,.3,.3,.05,2),te=new Et(X,Qn(ne.white),B),P=new Et(X,_n(.03),B);for(let _e of[te,P])_e.frustumCulled=!1;let Z=new Ie;Z.add(P,te),y.add(Z);let J=[ne.yellow,ne.pink,ne.cyan,ne.white,pe.mint,pe.zorin,pe.endless,ne.lilac],j=Array.from({length:B},(_e,Pe)=>{te.setColorAt(Pe,new et(J[Pe%J.length]));let ct=Pe*2.399,qe=2.4+Pe*7%13/13*3.2;return{x:Math.cos(ct)*qe,y:Math.sin(ct)*qe,u:Pe*53%B/B,s:.6+Pe*11%7/7*1.2,rot:Pe}}),re=-1;function me(_e){for(let Pe=0;Pe<B;Pe++){let ct=j[Pe];u.position.set(ct.x,ct.y,Ae*(.55+ct.u*(ud-.4))),u.rotation.set(ct.rot,ct.rot*.7,0),u.scale.setScalar(Math.max(ct.s*_e,1e-4)),u.updateMatrix(),te.setMatrixAt(Pe,u.matrix),P.setMatrixAt(Pe,u.matrix)}te.instanceMatrix.needsUpdate=P.instanceMatrix.needsUpdate=!0}let ge=new jn(h[vn.level].portal,Math.round(h[vn.level].portal*.611),{samples:Math.min(2,h[vn.level].ms)}),ke=new oi(30,3/1.834,.05,300),de=1,Ce=1,Se=!1,Ae=14,Q=[],Xe=[],ot=[],Bt={};t.forEach((_e,Pe)=>{let ct=e[_e.dataset.scene];ct&&ct.inside&&(Bt[ct.inside]=Pe)});function ve(){Xe=t.map(_e=>{let Pe=_e.getBoundingClientRect();return[Pe.top+window.scrollY,Pe.height]}),Q=Xe.map(([_e,Pe])=>_e+Pe/2),ot=Xe.map(([_e,Pe])=>Pe>Ce*1.6?[_e+Ce*.5,_e+Pe-Ce*.5]:[_e+Pe/2,_e+Pe/2])}let nt=document.getElementById("top"),Je=document.querySelector(".hero-copy"),dt=e.top?{may:e.top.may,mzoom:e.top.mzoom}:null,Yt=.66;function ti(){if(!dt||!nt||!Je)return;if(!Se){e.top.may=dt.may,e.top.mzoom=dt.mzoom;return}let _e=0;for(let ct of Je.children){let qe=ct.getBoundingClientRect();qe.height>0&&(_e=Math.max(_e,qe.bottom))}Yt=rn((_e-nt.getBoundingClientRect().top)/Ce);let Pe=Math.max(.14,1-Yt);e.top.may=Math.min(.92,Math.max(dt.may,Yt+Pe*.55)),e.top.mzoom=Math.min(2.8,Math.max(dt.mzoom,4.2/(.536*Ae*Pe*.9)))}function Sn(){de=window.innerWidth,Ce=window.innerHeight,Se=de<820||de/Ce<.9,l.setPixelRatio(Math.min(window.devicePixelRatio||1,h[vn.level].pr)),l.setSize(de,Ce,!1),l.getDrawingBufferSize(R),T.setSize(R.x,R.y),E.setSize(R.x,R.y),M.uRes.value.set(de,Ce),d.aspect=de/Ce;let _e=Math.tan(d.fov*Math.PI/360)*2,Pe=Se?.86:.37,ct=Se?.36:.62;Ae=Math.max(4.6/(Pe*_e*d.aspect),4.6/(ct*_e)),d.updateProjectionMatrix(),re=-1,ve(),ti()}let zt={ax:.7,ay:.5,az:-.4,el:.1,zoom:1,dive:0,crowd:0,lit:0,px:0,py:0},Nn=0,ni=0,ln=performance.now(),Ti=!1,ns=()=>{ln=performance.now()};for(let _e of["scroll","pointermove","pointerdown","keydown","wheel","touchstart","resize"])window.addEventListener(_e,ns,{passive:!0});!s&&window.matchMedia("(pointer: fine)").matches&&window.addEventListener("pointermove",_e=>{Nn=_e.clientX/de*2-1,ni=_e.clientY/Ce*2-1},{passive:!0});let Xi=new et,is=new et(e[t[0]?.dataset.scene]?.bg||ne.yellow),Un=new et;function gt(){let _e=window.scrollY+Ce*.5,Pe=0;for(;Pe<ot.length-1&&ot[Pe+1][0]<=_e;)Pe++;let ct=0;Pe<ot.length-1&&_e>ot[Pe][1]&&(ct=(_e-ot[Pe][1])/(ot[Pe+1][0]-ot[Pe][1]));let qe=e[t[Pe].dataset.scene],rt=e[t[Math.min(Pe+1,t.length-1)].dataset.scene],Qt=De(.2,.8,ct),bt=(An,ci)=>Se&&An["m"+ci]!==void 0?An["m"+ci]:An[ci];return Xi.copy(qe._bg).lerp(rt._bg,Qt),qe.inside&&rt.inside?Un.copy(qe._bg).lerp(rt._bg,Qt):Un.copy(qe.inside?qe._bg:rt.inside?rt._bg:Xi),{a:qe,b:rt,e:Qt,ax:ft(bt(qe,"ax"),bt(rt,"ax"),Qt),ay:ft(bt(qe,"ay"),bt(rt,"ay"),Qt),az:ft(qe.az,rt.az,Qt),el:ft(qe.el,rt.el,Qt),zoom:ft(bt(qe,"zoom"),bt(rt,"zoom"),Qt),dive:ft(qe.inside?1:0,rt.inside?1:0,Qt),crowd:ft(qe.crowd||0,rt.crowd||0,Qt),lit:ft(qe.lit||0,rt.lit||0,Qt),mix:De(.35,.65,ct),idx:Pe}}let en=(_e,Pe,ct,qe,rt)=>{_e.position.set(Pe.x+rt*Math.sin(ct)*Math.cos(qe),Pe.y+rt*Math.sin(qe),Pe.z+rt*Math.cos(ct)*Math.cos(qe)),_e.lookAt(Pe)},on=new k(0,-.35,.3),A=new k(0,0,0),V=new k,le=new k,se=new k,he=null,Ve="",Qe=-1,He="",Ke=!1,at=window.scrollY,mt=0,Lt=0,Ze=0,Rt=!1,cn=0,wt=s?99:0,Zt=0,wn=-1,st=!1,Ct=0,Xt=!1,ii=0,pn=1,Ls=0,qi=0,Ni=0,Gt=0,Pn=!1,Bn=0,dn=0,Tn=.5,Ui=.5,Fs=0,eh=0,Bi=-1,Ra=null,th=-99,Ks=new Hi,nh=new k,ih=new k,go=new da,Ca=new Fe,fd=new Ii,pd=new k,md=new k,mn=0,sh=performance.now();function Pa(_e=performance.now()){if(gd){sh=_e,xo=requestAnimationFrame(Pa);return}let Pe=_e-ln>2500&&(s||Ze<.01&&Ct<.01&&pn>=1&&Bi<0&&Fs<.002&&ii<=0&&mn-th>1.5&&Math.abs(zt.dive-Math.round(zt.dive))<.002);if(Pe&&(Ti=!Ti)){xo=requestAnimationFrame(Pa);return}let ct=(_e-sh)/1e3,qe=Math.min(ct,.05);sh=_e,Pe||cp(ct),mn+=qe;let rt=gt(),Qt=s?1:1-Math.exp(-qe*4.5);for(let Pt of["ax","ay","az","el","zoom","dive","crowd","lit"])zt[Pt]=ft(zt[Pt],rt[Pt],Qt);zt.px=ft(zt.px,Nn,1-Math.exp(-qe*3)),zt.py=ft(zt.py,ni,1-Math.exp(-qe*3));let bt=zt.dive,An=bt>=.5,ci=window.scrollY;mt=ft(mt,(ci-at)/Math.max(qe,.001),1-Math.exp(-qe*8)),at=ci,wt+=qe,Ze=ft(Ze,Rt?1:0,1-Math.exp(-qe*3)),Ct=ft(Ct,Xt?1:0,1-Math.exp(-qe*3)),s||(Lt+=qe*(.025+Ze*.6+Ct*1.2)+mt*6e-4*qe);let In=Jt.beat();if(Ni=s?0:Math.max(Ze,Ct)*Math.pow(1-(In>=0?In:mn*2%1),4),ii=Math.max(0,ii-qe),!s&&Ct>.5&&Math.random()<qe*1.2&&(ii=.25),!s&&(Zt-.5)*(bt-.5)<0&&Jt.whoosh(),Zt=bt,Ze>.5&&!s&&(cn+=qe,cn>.9&&(cn=0,(An?H:K).burst())),a){let Pt=s?0:Math.round((bt<.5?De(.26,.5,bt):1-De(.5,.62,bt))*200)/200;(Pt!==wn||Pt>0)&&(wn=Pt,a.style.opacity=Pt>0?"1":"0",a.style.transform=`translate(-50%,-50%) scale(${(Pt*1.35).toFixed(3)}) rotate(${(bt*540).toFixed(1)}deg)`)}is.lerp(Xi,Qt);let Ai="#"+is.getHexString();if(Ai!==Ve&&(Ve=Ai,r(Ai)),o){let Pt=Math.round((bt<.5?De(.36,.5,bt):1-De(.5,.66,bt))*100)/100;Pt!==Qe&&(Qe=Pt,o.style.opacity=String(Pt));let Ot="#"+Un.getHexString();Pt>0&&Ot!==He&&(He=Ot,o.style.backgroundColor=Ot)}let _i=rt.e<.5?rt.a:rt.b;if(_i.confetti&&he!==_i&&!s&&(_i.inside?H:K).burst(),he&&he!==_i&&!s&&Ct>.5&&(ii=.35),he=_i,!An){if(bt>.002)Ke||(Ke=!0,ae.material.map=ge.texture,ae.material.needsUpdate=!0),ce.material.opacity=0;else{Ke&&(Ke=!1,ae.material.needsUpdate=!0);let kt=(x?T:E).texture,On=S&&Ze>.5&&vn.level<2;ae.material.map=On&&L.has(rt.a.screen||"hello")?kt:ue[rt.a.screen||"hello"],ce.material.map=On&&L.has(rt.b.screen||"hello")?kt:ue[rt.b.screen||"hello"],ce.material.opacity=rt.a.screen===rt.b.screen?0:rt.mix}let Pt=De(.02,.42,bt),Ot=s?0:1-uy(rn((wt-.2)/1.1));Object.keys(ye).forEach((kt,On)=>{let Ri=s?1:jt(rn((wt-1.15-On*.16)/.35));ye[kt].scale.setScalar(Math.max(Ri,1e-4))}),qi+=s?0:qe*(.35+Ze*.5+Ct*1.6+Math.min(1,Math.abs(mt)/2500)*1.2),Object.keys(ye).forEach((kt,On)=>{let Ri=Ue[kt],_o=ye[kt],er=s?0:Math.sin(mn*1.3+kt.length)*.06,Us=qi+On*Math.PI/2,hh=s?Ri.p[0]:Math.cos(Us)*(Se?1.8:2.05),uh=s?Ri.p[1]:Math.sin(Us)*(Se?.8:1.4)+(Se?-.1:.15),vo=s?Ri.p[2]:.95+Math.sin(Us*2)*.3;_o.position.set(hh*(1+Pt*2.2),(uh+er)*(1+Pt*1.6),vo+Pt*2),_o.rotation.set(0,s?0:Math.sin(mn*.8+kt.length)*.12,Ri.r+Pt*Ri.r*4+(s?0:Math.sin(Us)*.15))}),pn<1&&(pn=Math.min(1,pn+qe/.9));let ps=D(pn);N.rotation.x=pn<1?-ps*Math.PI*2:0,N.rotation.z=s?0:Math.sin(mn*3)*.15*Ct,N.position.y=(s?0:Math.sin(mn*1.1)*.04*(1-Pt))+Ot*7+Math.sin(ps*Math.PI)*1.8,xe.scale.set(3.1*(1-Ot*.7),1.6*(1-Ot*.7),1);let yo=zt.crowd,Qs=yo>.01;Ye.visible=tt.visible=Re.visible=Qs,pt=zt.lit>.5?pt+qe:Math.max(0,pt-qe*3),Qs&&(We.forEach((kt,On)=>{let Ri=s?yo>.5?1:0:jt(De(kt.d*.045,kt.d*.045+.35,yo)),_o=s?0:.3+kt.d*.2,er=pt-_o,Us=zt.lit>.5&&er>0,hh=Us&&er<.3?1+Math.sin(er/.3*Math.PI)*.18:1,uh=s?0:Math.max(0,Math.sin(mn*5-kt.d*.7))*(Us?.3+Ct*.5:Ct*.4);u.position.set(kt.x,-1.93+uh,kt.z),u.rotation.set(0,kt.ry+(s?0:Ct*Math.sin(mn*4+kt.d)*.6),0),u.scale.setScalar(Math.max(Ri*hh,1e-4)),u.updateMatrix(),Ye.setMatrixAt(On,u.matrix),tt.setMatrixAt(On,u.matrix),Re.setMatrixAt(On,u.matrix);let vo=St.length;Re.setColorAt(On,Us?er<.15&&!s?je:er>.8&&!s?St[(Math.floor(mn*3-kt.d*.5)%vo+vo)%vo]:lt:ze)}),Ye.instanceMatrix.needsUpdate=tt.instanceMatrix.needsUpdate=Re.instanceMatrix.needsUpdate=!0,Re.instanceColor.needsUpdate=!0);let Ns=(rt.a===e.top?1-rt.e:0)+(rt.b===e.top?rt.e:0),Mp=kt=>{se.copy(kt).project(d);let On=(se.x+1)/2,Ri=(1-se.y)/2;return Se?Ri<Yt:On<.58},ch=s?0:rn(Ns+Ze+Ct)*(1-Pt);Dt.visible=ht.visible=yt.visible=ch>.01,ch>.01&&(Kt.forEach((kt,On)=>{kt.y-=qe*kt.sp*(1+Ct*1.5),kt.y<-6.5&&(kt.y+=13),kt.r+=qe*(1+Ct*2),u.position.set(kt.x,kt.y,kt.z),kt.k=ft(kt.k,Ns>.01&&Ze+Ct<.5&&Mp(u.position)?1-Ns:1,.12),u.rotation.set(kt.r,kt.r*.7,kt.r*.3),u.scale.setScalar(Math.max(kt.s*ch*kt.k,1e-4)),u.updateMatrix(),Dt.setMatrixAt(On,u.matrix),ht.setMatrixAt(On,u.matrix),yt.setMatrixAt(On,u.matrix)}),Dt.instanceMatrix.needsUpdate=ht.instanceMatrix.needsUpdate=yt.instanceMatrix.needsUpdate=!0),O.update(s?0:mn,(1-Pt)*(s?1:De(1,2.2,wt)),Ns<.01?null:kt=>{se.copy(kt).project(d);let On=(se.x+1)/2,Ri=(1-se.y)/2;return(Se?Ri<Yt:On<.58)?1-Ns:1}),K.update(qe)}w.update(qe),$.update(qe);let hn=rt.a.inside||rt.b.inside,js=rt.b.inside||rt.a.inside;for(let[Pt,Ot]of Object.entries(C)){let ps=0;hn&&hn===js?ps=hn===Pt?1:0:ps=(hn===Pt?1-De(.05,.5,rt.e):0)+(js===Pt?De(.5,.95,rt.e):0);let yo=Ot.p;if((hn||js)&&Pt!==hn&&Pt!==js){Ot.p=0,Ot.group.visible=!1;continue}if(Ot.p=s?ps:ft(Ot.p,ps,1-Math.exp(-qe*6)),yo<.02&&Ot.p>=.02&&(Ot.t0=mn,Ot.onEnter?.()),Ot.group.visible=Ot.p>.003&&bt>.002,Ot.group.visible){Ot.group.scale.setScalar(Math.max(jt(rn(Ot.p)),1e-4)),Ot.group.position.y=(1-Ot.p)*-.9,Ot.group.rotation.y=(1-Ot.p)*.8;let Qs=Bt[Pt],Ns=Qs===void 0||!Xe[Qs]?.5:rn((window.scrollY+Ce*.5-Xe[Qs][0])/Xe[Qs][1]);Ot.sp=Ot.sp===void 0?Ns:ft(Ot.sp,Ns,1-Math.exp(-qe*10)),Ot.update(mn-Ot.t0,qe,s,Ot.sp)}}if(bt>.002){let Pt=bt<.5?1:1-De(.72,.92,bt),Ot=Math.round(Pt*50)/50;Ot!==re&&(re=Ot,me(Ot)),Z.visible=Ot>.01,Z.rotation.z=s?0:mn*.25,I.update(s?0:mn,De(.5,.9,bt)),H.update(qe)}let Ds=bt<=.5?De(0,.3,bt):1-De(.62,1,bt),vr=ft(zt.az,0,Ds),xd=ft(zt.el,0,Ds),yd=ft(zt.ax,.5,Ds),_d=ft(zt.ay,.5,Ds),rh=Ae*zt.zoom,Mr=s?0:Math.sin(Math.PI*rn(bt));d.fov=30+46*Mr*Mr;let oh=s?0:Math.PI*2*De(.12,.88,bt);!s&&rt.a.inside&&rt.b.inside&&rt.a!==rt.b&&(oh+=Math.sin(Math.PI*rt.e)*.2*(rt.idx%2?-1:1)),s||(oh+=Ze*Math.sin(mn*3.1)*.14+Ct*(mn*.45+Math.sin(mn*2.3)*.2));let ah=s?0:Math.min(1,Math.abs(mt)/2500),lh=1+Ni*.09;if(F.scale.set((1-ah*.07)*lh,(1+ah*.14)*lh,(1-ah*.07)*lh),U.scale.copy(F.scale),F.rotation.y=zt.px*.14*(1-De(0,.25,bt)),F.rotation.x=zt.py*.05*(1-De(0,.25,bt)),U.rotation.y=zt.px*.12*De(.75,1,bt),U.rotation.x=zt.py*.05*De(.75,1,bt),U.rotation.z=s?0:Math.sin(mn*1.7)*.25*Ct,An)en(d,A,vr,xd,rh*ft(ud,1,Wc(De(.5,1,bt)))),ih.copy(A);else{F.updateMatrixWorld(),le.set(0,N.position.y,.14),F.localToWorld(le),V.copy(on).lerp(le,De(0,.3,bt));let Pt=De(.03,.5,bt);en(d,V,vr,xd,ft(rh,.25,Pt*Pt)),ih.copy(V)}d.rotateZ(oh),st=An,d.setViewOffset(de,Ce,(.5-yd)*de,(.5-_d)*Ce,de,Ce),p.uRes.value.set(de,Ce),p.uCenter.value.set(yd,1-_d),up(p.uColA.value,rt.a.bg),up(p.uColB.value,rt.b.bg),p.uWipe.value=rt.a===rt.b?0:rt.e,p.uSpin.value=Lt,p.uParty.value=Ze,p.uTime.value=s?0:mn,p.uBeat.value=Ni,p.uChaos.value=s?0:Ct;let _p=Math.min(1,Math.abs(mt)/2500);M.uTime.value=mn;let Ia=Math.max(Ze,Ct);if(M.uAberr.value=s?0:Mr*.016+Ia*(.0015+_p*.012)+Ni*.006+Ct*.008,M.uBarrel.value=s?0:Mr*.95+Ct*(.22+Math.sin(mn*2.1)*.12),M.uGlitch.value=s?0:Math.min(1,ii/.3)*.9+Mr*.25*Ia,M.uGrain.value=s?0:.035*Ia,M.uScan.value=s?0:(.08+Ct*.14)*Ia,Gt=ft(Gt,Pn?1:0,1-Math.exp(-qe*2.5)),Bn=ft(Bn,dn,1-Math.exp(-qe*10)),Fs=ft(Fs,eh,1-Math.exp(-qe*(eh?2.2:7))),M.uKaleido.value=s?0:Gt,M.uVhs.value=s?0:Bn,M.uHole.value.set(Tn,Ui,s?0:Fs),Bn>.05&&(M.uGlitch.value=Math.max(M.uGlitch.value,Bn*.7),M.uAberr.value+=Bn*.01),Bi>=0){Bi+=qe;let Pt=.8,Ot=.9;if(Bi>=Pt&&Ra){let ps=Ra;Ra=null,ps(),wt=0}M.uWarp.value=Bi<Pt?Math.pow(Bi/Pt,2):1-De(0,1,(Bi-Pt)/Ot),Bi>Pt+Ot&&(Bi=-1,M.uWarp.value=0)}l.autoClear=!1,!An&&bt>.002&&(en(ke,A,0,0,rh*ud),l.setRenderTarget(ge),l.setClearColor(Un,1),l.clear(),l.render(y,ke),l.setRenderTarget(null),l.setClearColor(0,0));let vp=S&&Ze>.5&&vn.level<2&&!An,vd=!s&&(Mr>.01||Ze>.01||Ct>.01||ii>0||Gt>.002||Bn>.002||Fs>.002||Bi>=0||mn-th<1.5);if(p.uLin.value=vd?1:0,vd){let Pt=x?E:T;M.tDiffuse.value=Pt.texture,l.setRenderTarget(Pt),l.clear(),l.render(_,m),l.clearDepth(),l.render(An?y:q,d),l.setRenderTarget(null),vp&&(x=!x),l.clear(),l.render(b,m)}else l.setRenderTarget(null),l.clear(),l.render(_,m),l.clearDepth(),l.render(An?y:q,d);xo=requestAnimationFrame(Pa)}let xo=0,gd=!1;return Sn(),window.addEventListener("resize",Sn),vn.on(()=>{let _e=h[vn.level];T.samples!==_e.ms&&(T.dispose(),T.samples=_e.ms,E.dispose(),E.samples=_e.ms);let Pe=Math.min(2,_e.ms);ge.samples!==Pe&&(ge.dispose(),ge.samples=Pe),ge.setSize(_e.portal,Math.round(_e.portal*.611)),Sn()}),(function(){let Pe=[];for(let rt of[q,y])rt.traverse(Qt=>{Qt.visible||(Qt.visible=!0,Pe.push(Qt))});let ct=l.getRenderTarget();for(let rt of[null,T]){l.setRenderTarget(rt);try{l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")?(l.compileAsync(q,d).catch(()=>{}),l.compileAsync(y,d).catch(()=>{})):(l.compile(q,d),l.compile(y,d))}catch{}}l.setRenderTarget(ct);for(let rt of Pe)rt.visible=!1;let qe=new Set;for(let rt of[q,y])rt.traverse(Qt=>{let bt=Qt.material?Array.isArray(Qt.material)?Qt.material:[Qt.material]:[];for(let An of bt)for(let ci of["map","gradientMap","alphaMap"]){let In=An[ci];if(In&&In.isTexture&&!qe.has(In)){qe.add(In);try{l.initTexture(In)}catch{}}}})})(),window.addEventListener("load",ve),new ResizeObserver(ve).observe(document.body),xo=requestAnimationFrame(Pa),{redrawText(){ti();for(let _e of uo)_e.userData.redraw?.();Vu("hello",ue.hello.image),ue.hello.needsUpdate=!0},setScores(_e,Pe){C.scores.setScores(_e,Pe)},burstAt(_e,Pe,ct=!1){Ca.set(_e/de*2-1,-(Pe/Ce)*2+1),go.setFromCamera(Ca,d),ct&&!s&&(M.uRipples.value[Ls].set(_e/de,1-Pe/Ce,mn,1),Ls=(Ls+1)%6,th=mn),!st&&pn>=1&&go.intersectObject(N,!0).length&&(pn=0),d.getWorldDirection(md),fd.setFromNormalAndCoplanarPoint(md.negate(),ih),go.ray.intersectPlane(fd,pd)&&(st?$:w).burst(pd)},setParty(_e){Rt=!!_e},setChaos(_e){Xt=!!_e},pickOs(_e,Pe){if(!st)return null;Ca.set(_e/de*2-1,-(Pe/Ce)*2+1),go.setFromCamera(Ca,d);for(let[ct,qe]of Object.entries(C))if(!(!qe.pick||qe.p<.5||!qe.group.visible)&&go.intersectObjects(qe.pick,!1).length)return ct;return null},hoverOs(_e){for(let[Pe,ct]of Object.entries(C))ct.pick&&(ct.hover=Pe===_e)},osScreenRect(_e){let Pe=C[_e];if(!Pe||!Pe.screen||!st||Pe.p<.5||!Pe.group.visible)return null;Ks.setFromObject(Pe.screen);let ct=1/0,qe=1/0,rt=-1/0,Qt=-1/0;for(let bt=0;bt<8;bt++){nh.set(bt&1?Ks.max.x:Ks.min.x,bt&2?Ks.max.y:Ks.min.y,bt&4?Ks.max.z:Ks.min.z).project(d);let An=(nh.x+1)/2*de,ci=(1-nh.y)/2*Ce;ct=Math.min(ct,An),rt=Math.max(rt,An),qe=Math.min(qe,ci),Qt=Math.max(Qt,ci)}return{left:ct,top:qe,width:rt-ct,height:Qt-qe}},measure:ve,setPaused(_e){gd=!!_e},setKaleido(_e){Pn=!!_e},setVhs(_e){dn=_e},setHole(_e,Pe,ct){Tn=_e/de,Ui=1-Pe/Ce,eh=ct},setDroste(_e){S=!!_e},replayStickers(){s||(wt=1.1)},warp(_e){if(Bi>=0||s){s&&_e();return}Bi=0,Ra=_e,Jt.whoosh(),ii=.4},stop(){cancelAnimationFrame(xo)}}}var Jn=i=>`<svg viewBox="0 0 48 48" aria-hidden="true">${i}</svg>`,Mn='stroke="#000" stroke-width="3" stroke-linejoin="round"',ts={folder:Jn(`<path d="M5 13a3 3 0 0 1 3-3h10l4 4h18a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="#FFC93C" ${Mn}/><path d="M5 19h38" stroke="#000" stroke-width="3"/>`),note:Jn(`<path d="M11 5h19l9 9v29H11z" fill="#fff" ${Mn}/><path d="M30 5v9h9M17 22h15M17 29h15M17 36h10" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>`),calc:Jn(`<rect x="10" y="5" width="28" height="38" rx="5" fill="#B7A3FF" ${Mn}/><rect x="15" y="10" width="18" height="8" rx="2" fill="#fff" stroke="#000" stroke-width="2.5"/><g fill="#000"><circle cx="17" cy="25" r="2.4"/><circle cx="24" cy="25" r="2.4"/><circle cx="31" cy="25" r="2.4"/><circle cx="17" cy="32" r="2.4"/><circle cx="24" cy="32" r="2.4"/><circle cx="31" cy="32" r="2.4"/><circle cx="17" cy="38.5" r="2.4"/><circle cx="24" cy="38.5" r="2.4"/><circle cx="31" cy="38.5" r="2.4"/></g>`),globe:Jn(`<circle cx="24" cy="24" r="18" fill="#7CC8FF" ${Mn}/><path d="M24 6c-6 5-6 31 0 36M24 6c6 5 6 31 0 36M7 18h34M7 30h34" stroke="#000" stroke-width="2.5" fill="none"/>`),term:Jn(`<rect x="5" y="8" width="38" height="32" rx="5" fill="#2B2B33" ${Mn}/><path d="M12 18l6 5-6 5M21 30h12" stroke="#C8EE5A" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),gear:Jn(`<circle cx="24" cy="24" r="16" fill="none" stroke="#000" stroke-width="10" stroke-dasharray="5.6 6.97"/><circle cx="24" cy="24" r="16" fill="none" stroke="#D9D9D9" stroke-width="5" stroke-dasharray="4.2 8.37" stroke-dashoffset="-0.7"/><circle cx="24" cy="24" r="12.5" fill="#D9D9D9" ${Mn}/><circle cx="24" cy="24" r="5" fill="#fff" ${Mn}/>`),brush:Jn(`<path d="M31 5l12 12-15 15-6-6z" fill="#FF9ECF" ${Mn}/><path d="M22 26c-6 0-10 4-10 9 0 3-2 5-6 6 10 2 18-2 19-9z" fill="#FF7A1A" ${Mn}/>`),snake:Jn('<path d="M10 37c0-6 6-8 12-8s12-2 12-8-6-8-12-8" fill="none" stroke="#000" stroke-width="10" stroke-linecap="round"/><path d="M10 37c0-6 6-8 12-8s12-2 12-8-6-8-12-8" fill="none" stroke="#2FBF71" stroke-width="5" stroke-linecap="round"/><circle cx="20" cy="12" r="2.6" fill="#000"/><path d="M27 13l5 1" stroke="#FF4D4D" stroke-width="2.5" stroke-linecap="round"/>'),book:Jn(`<path d="M7 9h13a4 4 0 0 1 4 4v28a3 3 0 0 0-3-3H7z" fill="#FF7A1A" ${Mn}/><path d="M41 9H28a4 4 0 0 0-4 4v28a3 3 0 0 1 3-3h14z" fill="#FFE14D" ${Mn}/>`),keys:Jn(`<rect x="4" y="13" width="40" height="23" rx="4" fill="#fff" ${Mn}/><g fill="#000"><rect x="9" y="18" width="5" height="4" rx="1"/><rect x="16" y="18" width="5" height="4" rx="1"/><rect x="23" y="18" width="5" height="4" rx="1"/><rect x="30" y="18" width="5" height="4" rx="1"/><rect x="12" y="24" width="5" height="4" rx="1"/><rect x="19" y="24" width="5" height="4" rx="1"/><rect x="26" y="24" width="5" height="4" rx="1"/><rect x="33" y="24" width="5" height="4" rx="1"/><rect x="14" y="30" width="20" height="3" rx="1"/></g>`),trash:Jn(`<path d="M12 14h24l-2 28H14z" fill="#D9D9D9" ${Mn}/><path d="M8 14h32M19 14V9h10v5M20 20v16M28 20v16" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>`),computer:Jn(`<rect x="5" y="8" width="38" height="25" rx="3" fill="#7CC8FF" ${Mn}/><path d="M18 40h12M24 33v7" stroke="#000" stroke-width="3" stroke-linecap="round"/>`),image:Jn(`<rect x="5" y="9" width="38" height="30" rx="3" fill="#7CC8FF" ${Mn}/><path d="M5 33l11-11 9 9 6-6 12 12H8a3 3 0 0 1-3-3z" fill="#2FBF71" ${Mn}/><circle cx="33" cy="17" r="4" fill="#FFE14D" stroke="#000" stroke-width="2.5"/>`),music:Jn(`<path d="M18 34V10l20-4v24" fill="none" stroke="#000" stroke-width="3.5" stroke-linejoin="round"/><circle cx="13" cy="35" r="6" fill="#FF9ECF" ${Mn}/><circle cx="33" cy="31" r="6" fill="#FF9ECF" ${Mn}/>`),usb:Jn(`<rect x="8" y="17" width="24" height="14" rx="4" fill="#FF7A1A" ${Mn}/><rect x="32" y="19.5" width="9" height="9" rx="1.5" fill="#D9D9D9" ${Mn}/><circle cx="15" cy="23" r="2" fill="#fff"/><circle cx="21" cy="23" r="2" fill="#fff"/>`),disc:Jn(`<rect x="8" y="5" width="32" height="38" rx="4" fill="#fff" ${Mn}/><circle cx="24" cy="21" r="9" fill="#FF7A1A" ${Mn}/><circle cx="24" cy="21" r="2.5" fill="#000"/><path d="M14 36h20" stroke="#000" stroke-width="3" stroke-linecap="round"/>`),exe:Jn(`<rect x="7" y="9" width="34" height="30" rx="4" fill="#3D7BFF" ${Mn}/><path d="M7 17h34" stroke="#000" stroke-width="3"/><path d="M16 26l5 5 10-10" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),store:Jn(`<path d="M8 18h32l-3 23H11z" fill="#C8EE5A" ${Mn}/><path d="M17 18c0-6 3-10 7-10s7 4 7 10" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M19 29l4 4 7-8" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`)},yi={grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><rect x="4" y="4" width="4" height="4" rx="1"/><rect x="10" y="4" width="4" height="4" rx="1"/><rect x="16" y="4" width="4" height="4" rx="1"/><rect x="4" y="10" width="4" height="4" rx="1"/><rect x="10" y="10" width="4" height="4" rx="1"/><rect x="16" y="10" width="4" height="4" rx="1"/><rect x="4" y="16" width="4" height="4" rx="1"/><rect x="10" y="16" width="4" height="4" rx="1"/><rect x="16" y="16" width="4" height="4" rx="1"/></g></svg>',wifiOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0" opacity=".45"/><path d="M4 4l16 16"/></g><circle cx="12" cy="19.2" r="1.6" fill="currentColor"/></svg>',battery:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="7" width="17" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="5" y="9.5" width="9" height="5" rx="1" fill="currentColor"/><path d="M21.5 10.5v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',speaker:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',min:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 17h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',max:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',fwd:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 5.5L16 12l-6.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',reload:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12a7 7 0 1 1-2.1-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M17.5 3.5v4h-4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',power:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v8M7 6.5a7.5 7.5 0 1 0 10 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>'},Vn=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Kc=i=>`data:image/svg+xml,${encodeURIComponent(i)}`,fp={"Sunset.svg":Kc('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3fd1"/><stop offset=".55" stop-color="#ff6f91"/><stop offset="1" stop-color="#ffd98a"/></linearGradient></defs><rect width="640" height="400" fill="url(#s)"/><circle cx="420" cy="250" r="80" fill="#fff3b0"/><path d="M0 290q120-80 240-10t220-30 180 20v130H0z" fill="#7b4fc9"/><path d="M0 330q160-60 320 0t320-10v80H0z" fill="#3d2183"/></svg>'),"Our school.svg":Kc('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#7CC8FF"/><circle cx="540" cy="80" r="44" fill="#FFE14D" stroke="#000" stroke-width="6"/><rect y="300" width="640" height="100" fill="#C8EE5A"/><path d="M150 170l170-90 170 90z" fill="#FF8F8F" stroke="#000" stroke-width="8" stroke-linejoin="round"/><rect x="170" y="170" width="300" height="140" fill="#fff" stroke="#000" stroke-width="8"/><rect x="295" y="230" width="50" height="80" fill="#FF7A1A" stroke="#000" stroke-width="6"/><rect x="200" y="200" width="60" height="50" fill="#7CC8FF" stroke="#000" stroke-width="6"/><rect x="380" y="200" width="60" height="50" fill="#7CC8FF" stroke="#000" stroke-width="6"/><rect x="314" y="40" width="8" height="50" fill="#000"/><path d="M322 40h50l-12 14 12 14h-50z" fill="#2FBF71" stroke="#000" stroke-width="5" stroke-linejoin="round"/></svg>'),"Solar panel.svg":Kc('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#FFE14D"/><circle cx="120" cy="100" r="54" fill="#fff" stroke="#000" stroke-width="7"/><path d="M200 330l60-170h300l-60 170z" fill="#3D7BFF" stroke="#000" stroke-width="8" stroke-linejoin="round"/><path d="M230 245h300M215 288h300M300 160l-40 170M380 160l-40 170M460 160l-40 170" stroke="#fff" stroke-width="5"/><rect x="370" y="330" width="16" height="50" fill="#000"/></svg>'),"Map.svg":Kc('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#5CC8F0"/><path d="M230 60q60-30 120 0t60 70 40 60-30 90-80 80-60-60-60-90-30-80z" fill="#C8EE5A" stroke="#000" stroke-width="7" stroke-linejoin="round"/><circle cx="330" cy="200" r="14" fill="#FF7A1A" stroke="#000" stroke-width="5"/><circle cx="300" cy="140" r="10" fill="#fff" stroke="#000" stroke-width="5"/><circle cx="360" cy="270" r="10" fill="#fff" stroke="#000" stroke-width="5"/></svg>')},pp=[["Computer","computer",["A computer is a machine that follows instructions, called programs, to work with information: words, numbers, pictures and sounds.","It has a processor that does the work, memory that holds what it is working on, and storage that keeps files when it is switched off.","You talk to it with a keyboard, a mouse or a touch screen, and it answers on the screen."]],["Operating system","gear",["The operating system is the main program of a computer. It starts first and lets all the other programs share the screen, the memory and the files.","Windows and macOS are operating systems. So are Linux Mint, Zorin OS and Endless OS, which are free to use and to share."]],["Linux","term",["Linux is the free core of many operating systems. Linus Torvalds started it in 1991 as a student project, and thousands of people have improved it since.","Linux runs phones, supercomputers, web servers and the three systems in our project."]],["Internet","globe",["The internet is a huge network that joins millions of smaller networks of computers all over the world.","It carries web pages, messages, video and files. Without a connection, a computer can still run the programs and read the files it already has."]],["USB flash drive","usb",["A USB flash drive, or USB stick, is a small device that stores files on memory chips.","It can carry a whole operating system: with one stick you can install a system on many computers, and carry updates to places without internet."]],["Solar power","image",["Solar panels turn sunlight into electricity. They have no moving parts and work best in sunny places.","With a battery, solar power can keep lights and computers running in villages where the electricity grid does not reach or often goes off."]],["Photosynthesis","note",["Photosynthesis is how plants make their food. Leaves take in sunlight, water and carbon dioxide from the air.","They turn them into sugar, which the plant uses to grow, and give out oxygen, which people and animals breathe."]],["Water cycle","globe",["The Sun warms water in seas, lakes and rivers, and some of it rises into the air as vapour. This is evaporation.","High up, the vapour cools and forms clouds. This is condensation. When the drops get heavy, they fall as rain or snow, and the water flows back to the sea."]],["Fractions","calc",["A fraction is a part of a whole. In 3/4, the bottom number says the whole is cut into 4 equal parts, and the top number says we take 3 of them.","Two fractions are equal when they show the same amount: 1/2 is the same as 2/4 and 4/8."]]],mp=["The sun is shining on our school.","A computer can work without the internet.","We share one USB stick with every class.","Plants need light, water and air to grow.","Practice a little every day and you will type fast."];function py(i){let e=(n,s)=>({name:n,type:"txt",body:s}),t=n=>({name:n,type:"img",src:fp[n]});return{home:{name:"Home",icon:"folder",items:[{name:"Documents",type:"dir",to:"documents"},{name:"Pictures",type:"dir",to:"pictures"},{name:"Music",type:"dir",to:"music"},{name:"Downloads",type:"dir",to:"downloads"}]},documents:{name:"Documents",icon:"folder",items:[e("Welcome.txt",`Welcome to ${i}!

This is a working copy of the desktop, made for our presentation. Open the menu, try the apps and drag the windows around.

Everything you make stays in this page and is gone when you close it.`),e("Lesson plan.txt",`Monday: switch on the PC, use the mouse
Tuesday: type your name
Wednesday: draw in Paint
Thursday: read the Encyclopedia
Friday: save your first file`),e("Shopping list.txt",`Chalk
Exercise books
A spare USB stick
Batteries for the clock`)]},pictures:{name:"Pictures",icon:"folder",items:Object.keys(fp).map(t)},music:{name:"Music",icon:"folder",items:[{name:"Morning song.ogg",type:"music"},{name:"Times tables.ogg",type:"music"}]},downloads:{name:"Downloads",icon:"folder",items:[],empty:"Nothing downloaded yet. This PC is offline, and everything still works."},usb:{name:"USB stick",icon:"usb",items:[{name:"Endless OS Full.img",type:"disc"},{name:"endless-installer.exe",type:"exe"},e("README.txt",`This stick installs Endless OS.

1. Plug it into the PC.
2. Hold F2 and press power to open the BIOS.
3. Press F8, pick the USB stick.
4. Wait: the stick copies Endless OS onto the PC.`)]},trash:{name:"Trash",icon:"trash",items:[],empty:"The trash is empty."}}}var my={mint:{user:"student",host:"mint",panel:"bottom",menu:"mint",pinned:["files","web","term"],desktop:[["computer","Computer","files","usb"],["folder","Home","files","home"],["trash","Trash","files","trash"]],names:{files:"Files",editor:"Text Editor",web:"Web Browser",term:"Terminal"}},zorin:{user:"student",host:"zorin",panel:"bottom",menu:"zorin",pinned:["web","files","editor"],desktop:[["folder","Home","files","home"],["usb","USB stick","files","usb"],["trash","Trash","files","trash"]],names:{files:"Files",editor:"Mousepad",web:"Web Browser",term:"Terminal"}},endless:{user:"student",host:"endless",panel:"bottom",menu:"home",home:["wiki","web","files","editor","photos","typing","paint","calc","snake","store","settings","term"],names:{files:"Files",editor:"Writer",web:"Browser",wiki:"Encyclopedia",store:"App Center",term:"Terminal"}}};function jc(i,{reduceMotion:e,getScale:t}){let n=my[i.id],s=O=>Jt.pop(O),r=(O,K,w,y={})=>{let U=document.createElement(O);return K&&(U.className=K),Object.assign(U,y),w&&w.appendChild(U),U},o=(O,K,w,y="")=>{let U=r("button",K,O,{type:"button",innerHTML:y});return w&&U.setAttribute("aria-label",w),U},a=py(i.name),c=new Set,l=()=>c.forEach(O=>O()),h={files:{icon:"folder",w:780,h:480,cat:"Accessories",build:Re,multi:!0},editor:{icon:"note",w:660,h:460,cat:"Office",build:we,multi:!0},calc:{name:"Calculator",icon:"calc",w:320,h:450,cat:"Accessories",build:We,fixed:!0},web:{icon:"globe",w:860,h:540,cat:"Internet",build:ze},paint:{name:"Paint",icon:"brush",w:800,h:560,cat:"Graphics",build:je},snake:{name:"Snake",icon:"snake",w:460,h:560,cat:"Games",build:_t,fixed:!0,keys:!0},term:{icon:"term",w:680,h:420,cat:"System",build:pt,keys:!0},wiki:{name:"Encyclopedia",icon:"book",w:860,h:540,cat:"Education",build:St},typing:{name:"Typing",icon:"keys",w:720,h:440,cat:"Education",build:Y},photos:{name:"Photos",icon:"image",w:820,h:540,cat:"Graphics",build:Dt},settings:{name:"Settings",icon:"gear",w:640,h:470,cat:"System",build:ht},store:{name:"App Center",icon:"store",w:780,h:520,cat:"System",build:yt}};for(let[O,K]of Object.entries(h))K.name=n.names[O]||K.name||O;let f=Object.keys(h).filter(O=>O!=="store"||i.id==="endless"),d=r("div",`osv-screen ds ds-${i.id}`),u=r("canvas","ds-wall",d,{width:1280,height:800});u.setAttribute("aria-hidden","true");let p=r("div","ds-desk",d),_=r("div","ds-wins",d),g=r("div","ds-panel",d),m=r("div","ds-toasts",d);m.setAttribute("aria-live","polite");let M={wall:0,dark:!1,big:!1,night:!1},b=r("div","ds-night",d);b.setAttribute("aria-hidden","true"),v();function v(){let O=u.getContext("2d"),K=1280,w=800,y=[["#FF9ECF","#FFE14D"],["#2B2B33","#4B4B5A"],["#9FF2C8","#3D7BFF"]][M.wall-1];if(y){let U=O.createLinearGradient(0,0,K,w);U.addColorStop(0,y[0]),U.addColorStop(1,y[1]),O.fillStyle=U,O.fillRect(0,0,K,w),O.fillStyle="rgba(255,255,255,.08)";for(let C=0;C<9;C++)O.beginPath(),O.arc(160+C*140,400+Math.sin(C)*200,60+C%3*40,0,Math.PI*2),O.fill();return}if(i.id==="mint"){let U=O.createLinearGradient(0,0,K,w);U.addColorStop(0,"#0c2925"),U.addColorStop(.55,"#1d5a44"),U.addColorStop(1,"#64b06f"),O.fillStyle=U,O.fillRect(0,0,K,w);for(let[C,I,H,$]of[[990,170,280,.18],[1160,560,210,.12],[320,660,320,.08],[720,380,150,.1]]){let B=O.createRadialGradient(C,I,0,C,I,H);B.addColorStop(0,`rgba(190,255,205,${$})`),B.addColorStop(1,"rgba(190,255,205,0)"),O.fillStyle=B,O.fillRect(C-H,I-H,H*2,H*2)}O.strokeStyle="rgba(255,255,255,.035)",O.lineWidth=2;for(let C=-800;C<K;C+=26)O.beginPath(),O.moveTo(C,w),O.lineTo(C+800,0),O.stroke()}else if(i.id==="zorin"){let U=O.createLinearGradient(0,0,K*.6,w);U.addColorStop(0,"#0a1a5c"),U.addColorStop(.5,"#1f56d8"),U.addColorStop(1,"#79b6ff"),O.fillStyle=U,O.fillRect(0,0,K,w);for(let C=0;C<7;C++){O.beginPath();for(let I=0;I<=K;I+=16){let H=250+C*70+Math.sin(I/210+C*.9)*60+Math.sin(I/90+C)*12;I===0?O.moveTo(I,H):O.lineTo(I,H)}O.lineTo(K,w),O.lineTo(0,w),O.closePath(),O.fillStyle=`rgba(255,255,255,${.035+C*.006})`,O.fill()}}else{let U=O.createLinearGradient(0,0,0,w);U.addColorStop(0,"#5a3fd1"),U.addColorStop(.45,"#ff6f91"),U.addColorStop(.75,"#ffb36b"),U.addColorStop(1,"#ffd98a"),O.fillStyle=U,O.fillRect(0,0,K,w),O.fillStyle="rgba(255,240,180,.9)",O.beginPath(),O.arc(880,470,110,0,Math.PI*2),O.fill(),[["#7b4fc9",470,120],["#5b33a8",540,90],["#3d2183",610,70],["#2a145e",690,50]].forEach(([C,I,H],$)=>{O.beginPath(),O.moveTo(0,w);for(let B=0;B<=K;B+=20)O.lineTo(B,I-Math.abs(Math.sin(B/(170+$*40)+$*1.3))*H-Math.sin(B/53+$)*8);O.lineTo(K,w),O.closePath(),O.fillStyle=C,O.fill()})}}function T(O,K="note"){let w=r("div","ds-toast",m,{innerHTML:`<span class="ds-ic">${ts[K]||""}</span><span>${Vn(O)}</span>`});s(720),e||w.animate([{transform:"translateX(120%)"},{transform:"none"}],{duration:320,easing:"cubic-bezier(.2,.9,.3,1.2)"}),setTimeout(()=>{if(e)return w.remove();w.animate([{opacity:1},{opacity:0,transform:"translateX(40%)"}],{duration:260,fill:"forwards"}).onfinish=()=>w.remove()},3200)}let E=O=>O.forEach((K,w)=>setTimeout(()=>Jt.pop(K),w*190)),x=[],S=10,L=0,D={w:1280,h:800-(i.id==="endless"?48:i.id==="zorin"?46:44)},z=()=>x.filter(O=>!O.min).sort((O,K)=>K.z-O.z)[0];function q(O){O&&(O.z=++S,O.win.style.zIndex=O.z,x.forEach(K=>{K.win.classList.toggle("active",K===O),K.task?.classList.toggle("active",K===O&&!K.min)}))}function F(O){Object.assign(O.win.style,{left:`${O.x}px`,top:`${O.y}px`,width:`${O.w}px`,height:`${O.h}px`})}function N(O,K,w){let y=h[O];if(!y)return null;if(!y.multi){let B=x.find(X=>X.id===O);if(B)return ue(B),B.api?.open?.(K),B}fe(!1);let U=L++%7,C={id:O,app:y,min:!1,max:i.id==="endless"&&!y.fixed,x:0,y:0,w:y.w,h:y.h,z:0};C.x=Math.round(Math.min(D.w-C.w-20,140+U*34+(O==="calc"?460:0))),C.y=Math.round(Math.max(12,Math.min(D.h-C.h-12,36+U*30)));let I=C.win=r("section","ds-win",_,{tabIndex:-1});I.setAttribute("role","dialog"),I.setAttribute("aria-label",y.name),y.keys&&(I.dataset.keys="1");let H=r("header","ds-bar",I,{innerHTML:`<span class="ds-ic">${ts[y.icon]}</span><span class="ds-bar-t">${Vn(y.name)}</span>`}),$=r("div","ds-bar-b",H);if(o($,"ds-wb","Minimise",yi.min).addEventListener("click",()=>W(C)),y.fixed||o($,"ds-wb","Maximise",yi.max).addEventListener("click",()=>ie(C)),o($,"ds-wb ds-wclose","Close",yi.close).addEventListener("click",()=>G(C)),C.title=H.querySelector(".ds-bar-t"),C.body=r("div","ds-body",I),y.fixed||r("div","ds-grip",I).addEventListener("pointerdown",X=>ae(X,C,"size")),H.addEventListener("pointerdown",B=>{B.target.closest("button")||ae(B,C,"move")}),H.addEventListener("dblclick",B=>{!B.target.closest("button")&&!y.fixed&&ie(C)}),I.addEventListener("pointerdown",()=>q(C),!0),I.classList.toggle("max",C.max),F(C),C.task=o(ee,"ds-task",null,`<span class="ds-ic">${ts[y.icon]}</span><span class="ds-task-t">${Vn(y.name)}</span>`),C.task.addEventListener("click",()=>{C.min?ue(C):z()===C?W(C):q(C)}),x.push(C),C.setTitle=B=>{C.title.textContent=B,C.task.querySelector(".ds-task-t").textContent=B,I.setAttribute("aria-label",B)},C.api=y.build(C.body,K,C)||{},q(C),s(560),!e){let B=C.max?{x:0,y:0,w:D.w,h:D.h}:C,[X,te]=w||[B.x+B.w/2,B.y+B.h+60];I.animate([{transform:`translate(${X-(B.x+B.w/2)}px,${te-(B.y+B.h/2)}px) scale(.08)`,opacity:0},{transform:"none",opacity:1}],{duration:420,easing:"cubic-bezier(.2,.9,.3,1.15)"})}return setTimeout(()=>C.api.focus?C.api.focus():I.focus({preventScroll:!0}),e?0:200),C}function G(O){O.api?.destroy?.();let K=x.indexOf(O);K>=0&&x.splice(K,1),O.task?.remove(),s(380);let w=()=>{O.win.remove(),q(z())};if(e)return w();O.win.animate([{transform:"none",opacity:1},{transform:"scale(.8)",opacity:0}],{duration:200,easing:"ease-in"}).onfinish=w}function W(O){if(O.min)return;O.min=!0,O.api?.pause?.(),O.task.classList.remove("active"),s(420);let K=()=>{O.win.hidden=!0,q(z())};if(e)return K();let w=O.task.getBoundingClientRect(),y=O.win.getBoundingClientRect(),U=t(),C=(w.left+w.width/2-(y.left+y.width/2))/U,I=(w.top-(y.top+y.height/2))/U;O.win.animate([{transform:"none",opacity:1},{transform:`translate(${C}px,${I}px) scale(.05)`,opacity:0}],{duration:300,easing:"cubic-bezier(.6,0,.8,.4)"}).onfinish=K}function ue(O){if(!O.min)return q(O);O.min=!1,O.win.hidden=!1,q(O),O.api?.resume?.(),s(600),e||O.win.animate([{transform:"translateY(300px) scale(.1)",opacity:0},{transform:"none",opacity:1}],{duration:320,easing:"cubic-bezier(.2,.9,.3,1.15)"})}function ie(O){O.max=!O.max,O.win.classList.toggle("max",O.max),O.api?.resize?.(),s(O.max?640:520)}function ae(O,K,w){if(O.button!==0||w==="move"&&K.max)return;O.preventDefault();let y=O.currentTarget;y.setPointerCapture(O.pointerId);let U=O.clientX,C=O.clientY,I={x:K.x,y:K.y,w:K.w,h:K.h},H=t(),$=X=>{let te=(X.clientX-U)/H,P=(X.clientY-C)/H;w==="move"?(K.x=Math.round(Math.max(-K.w+140,Math.min(D.w-140,I.x+te))),K.y=Math.round(Math.max(0,Math.min(D.h-40,I.y+P)))):(K.w=Math.round(Math.max(Math.min(K.app.w,360),Math.min(D.w-K.x,I.w+te))),K.h=Math.round(Math.max(Math.min(K.app.h,260),Math.min(D.h-K.y,I.h+P)))),F(K)},B=()=>{y.removeEventListener("pointermove",$),y.removeEventListener("pointerup",B),y.removeEventListener("pointercancel",B),w==="size"&&K.api?.resize?.()};y.addEventListener("pointermove",$),y.addEventListener("pointerup",B),y.addEventListener("pointercancel",B)}let ce=null,Ee=!1,Le=null,oe=null,be=null,ee=r("div","ds-tasks");if(i.id==="endless")Le=o(g,"ds-mbtn ds-home-btn","Show the home screen",'<span class="ds-e"></span>'),Le.addEventListener("click",()=>{x.filter(O=>!O.min).forEach(W),oe?.focus({preventScroll:!0})});else{Le=o(g,"ds-mbtn ds-pulse","Menu",yi.grid),Le.setAttribute("aria-expanded","false"),Le.addEventListener("click",K=>{K.stopPropagation(),Le.classList.remove("ds-pulse"),fe(!Ee)});let O=r("div","ds-pins",g);n.pinned.forEach(K=>{let w=o(O,"ds-pin",h[K].name,ts[h[K].icon]);w.title=h[K].name,w.addEventListener("click",()=>{let y=w.getBoundingClientRect(),U=t(),C=d.getBoundingClientRect();N(K,void 0,[(y.left+y.width/2-C.left)/U,(y.top-C.top)/U])})})}g.appendChild(ee);let xe=r("div","ds-tray",g),ye=o(xe,"ds-tray-b","Network: offline",yi.wifiOff);o(xe,"ds-tray-b","Volume",yi.speaker).addEventListener("click",()=>T("Sound comes from the page\u2019s speaker button, top right.","music")),o(xe,"ds-tray-b","Battery 80%",yi.battery).addEventListener("click",()=>T("Battery 80%. Plugged into solar power.","image"));let Ue=r("span","ds-clock",xe),Ge=()=>{let O=new Date;Ue.textContent=O.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};Ge();let Ne=setInterval(Ge,15e3);ye.addEventListener("click",O=>{if(O.stopPropagation(),be)return Ye();be=r("div","ds-pop",d,{innerHTML:"<b>No networks found</b><p>This PC is offline right now. Files, apps and the Encyclopedia keep working.</p>"}),s(660),e||be.animate([{transform:"translateY(16px)",opacity:0},{transform:"none",opacity:1}],{duration:220,easing:"ease-out"})});let Ye=()=>{be?.remove(),be=null};function tt(){ce=r("div",`ds-menu ds-menu-${i.id}`,d),ce.setAttribute("role","dialog"),ce.setAttribute("aria-label","Menu");let O=r("div","ds-msearch",ce,{innerHTML:yi.search}),K=r("input","",O,{type:"search",placeholder:"Search apps",autocomplete:"off",spellcheck:!1});K.setAttribute("aria-label","Search apps");let w=r("div","ds-mcols",ce),y=r("div","ds-mcats",w),U=r("div","ds-mlist",w),C=["All",...new Set(f.map(B=>h[B].cat))],I="All",H=()=>{let B=K.value.trim().toLowerCase();U.replaceChildren();let X=f.filter(te=>B?h[te].name.toLowerCase().includes(B)||h[te].cat.toLowerCase().includes(B):I==="All"||h[te].cat===I);X.forEach(te=>{o(U,"ds-mapp",null,`<span class="ds-ic">${ts[h[te].icon]}</span><span>${Vn(h[te].name)}</span>`).addEventListener("click",()=>N(te,void 0,[40,D.h]))}),X.length||r("p","ds-empty",U,{textContent:"No apps match."})};C.forEach(B=>{let X=o(y,"ds-mcat",null,Vn(B));X.addEventListener("click",()=>{I=B,K.value="",y.querySelectorAll(".ds-mcat").forEach(te=>te.classList.toggle("on",te===X)),H()}),B==="All"&&X.classList.add("on")});let $=r("div","ds-mfoot",ce,{innerHTML:`<span class="ds-user"><span class="ds-avatar">${n.user[0].toUpperCase()}</span>${n.user}</span>`});o($,"ds-tray-b","Shut down",yi.power).addEventListener("click",()=>T("Shut down? Not today: this is a demo.","computer")),K.addEventListener("input",H),K.addEventListener("keydown",B=>{B.key==="Enter"&&U.querySelector(".ds-mapp")?.click()}),H(),ce._input=K}function fe(O){!Le||i.id==="endless"||O!==Ee&&(O&&!ce&&tt(),Ee=O,Le.setAttribute("aria-expanded",String(O)),s(O?700:420),O?(ce.classList.add("open"),ce._input.value="",ce._input.dispatchEvent(new Event("input")),e||ce.animate([{transform:"translateY(40px) scaleY(.3)",opacity:0},{transform:"none",opacity:1}],{duration:280,easing:"cubic-bezier(.2,.9,.3,1.2)"}),setTimeout(()=>ce._input.focus({preventScroll:!0}),30)):ce?.classList.remove("open"))}if(d.addEventListener("pointerdown",O=>{Ee&&!O.target.closest(".ds-menu")&&!O.target.closest(".ds-mbtn")&&fe(!1),be&&!O.target.closest(".ds-pop")&&Ye()}),i.id==="endless"){let O=r("div","ds-homescr",p),K=r("label","ds-hsearch",O,{innerHTML:yi.search});oe=r("input","",K,{type:"search",placeholder:"Search your computer",autocomplete:"off",spellcheck:!1}),oe.setAttribute("aria-label","Search your computer");let w=r("div","ds-hgrid",O),y=n.home.map(U=>{let C=o(w,`ds-happ ds-t-${U}`,null,`<span class="ds-happ-ic">${ts[h[U].icon]}</span><span class="ds-happ-t">${Vn(h[U].name)}</span>`);return C.addEventListener("click",()=>{let I=C.getBoundingClientRect(),H=d.getBoundingClientRect(),$=t();N(U,void 0,[(I.left+I.width/2-H.left)/$,(I.top+I.height/2-H.top)/$])}),C.dataset.id=U,C});y[0].classList.add("ds-pulse-app"),oe.addEventListener("input",()=>{let U=oe.value.trim().toLowerCase();y.forEach(C=>{C.hidden=!!U&&!h[C.dataset.id].name.toLowerCase().includes(U)})}),oe.addEventListener("keydown",U=>{if(U.key!=="Enter")return;let C=oe.value.trim(),I=y.find(H=>!H.hidden);I&&C?I.click():C&&N("wiki",C)}),d._tiles=y}else n.desktop.forEach(([O,K,w,y],U)=>{let C=o(p,"ds-dicon",null,`<span class="ds-dicon-ic">${ts[O]}</span><span class="ds-dicon-t">${Vn(K)}</span>`);C.style.top=`${18+U*112}px`,C.addEventListener("click",()=>N(w,y,[70,60+U*112]))});function Re(O,K="home",w){O.classList.add("ap-files");let y=r("nav","fl-side",O),U=r("div","fl-main",O),C=r("div","fl-bar",U),I=o(C,"ap-ib","Back",yi.back),H=r("span","fl-path",C),$=r("span","fl-count",C),B=r("div","fl-grid",U),X=a[K]?K:"home",te=[];["home","documents","pictures","music","downloads","usb","trash"].forEach(re=>{let me=o(y,"fl-place",null,`<span class="ds-ic">${ts[re==="home"?"folder":a[re].icon]}</span>${Vn(a[re].name)}`);me.dataset.k=re,me.addEventListener("click",()=>Z(re))});let Z=(re,me=!0)=>{me&&re!==X&&te.push(X),X=re,j()};I.addEventListener("click",()=>{te.length&&Z(te.pop(),!1)});function J(re){if(re.type==="dir")return Z(re.to);if(re.type==="txt")return N("editor",{folder:X,name:re.name});if(re.type==="img")return N("photos",re.name);if(re.type==="music")return T(`Now playing: ${re.name.replace(".ogg","")}`,"music"),E(re.name.startsWith("Morning")?[523,659,784,659,698,880,784]:[392,440,494,523,494,440,392,523]);if(re.type==="exe")return T("This is a Windows program: it doesn\u2019t run here, and it doesn\u2019t need to.","exe");if(re.type==="disc")return T("A disk image. Written to a USB stick, it installs Endless OS.","disc")}function j(){let re=a[X];if(H.textContent=X==="home"?`/home/${n.user}`:re.name,$.textContent=`${re.items.length} item${re.items.length===1?"":"s"}`,I.disabled=!te.length,y.querySelectorAll(".fl-place").forEach(me=>me.classList.toggle("on",me.dataset.k===X)),B.replaceChildren(),w.setTitle(re.name),!re.items.length){r("p","ds-empty",B,{textContent:re.empty||"This folder is empty."});return}re.items.forEach(me=>{let ge=me.type==="dir"?"folder":me.type==="img"?"image":me.type==="music"?"music":me.type==="exe"?"exe":me.type==="disc"?"disc":"note",ke=o(B,"fl-item",null,me.type==="img"?`<img src="${me.src}" alt=""><span>${Vn(me.name)}</span>`:`<span class="fl-ic">${ts[ge]}</span><span>${Vn(me.name)}</span>`);ke.addEventListener("click",()=>{B.querySelectorAll(".fl-item").forEach(de=>de.classList.remove("sel")),ke.classList.add("sel")}),ke.addEventListener("dblclick",()=>J(me)),ke.addEventListener("keydown",de=>{de.key==="Enter"&&(de.preventDefault(),J(me))}),ke.title="Double-click to open"})}return c.add(j),j(),{destroy:()=>c.delete(j),open:re=>{re&&a[re]&&Z(re)}}}function we(O,K,w){O.classList.add("ap-editor");let y=r("div","ed-bar",O),U=o(y,"ap-btn",null,"New"),C=r("input","ed-name",y,{value:"Untitled.txt",spellcheck:!1});C.setAttribute("aria-label","File name");let I=o(y,"ap-btn ap-btn-main",null,"Save"),H=r("textarea","ed-text",O,{spellcheck:!1});H.setAttribute("aria-label","Text");let $=r("div","ed-status",O),B="documents",X=()=>{let Z=H.value.trim();$.textContent=`${Z?Z.split(/\s+/).length:0} words, ${H.value.length} characters`},te=Z=>{if(Z&&a[Z.folder]){let J=a[Z.folder].items.find(j=>j.name===Z.name);J&&(B=Z.folder,C.value=J.name,H.value=J.body)}w.setTitle(`${C.value} \u2013 ${h.editor.name}`),X()};H.addEventListener("input",X),U.addEventListener("click",()=>{C.value="Untitled.txt",H.value="",B="documents",X(),H.focus(),w.setTitle(`Untitled.txt \u2013 ${h.editor.name}`)});let P=()=>{let Z=C.value.trim()||"Untitled.txt";/\.\w+$/.test(Z)||(Z+=".txt"),C.value=Z;let J=a[B].items,j=J.find(re=>re.name===Z);j?j.body=H.value:J.push({name:Z,type:"txt",body:H.value}),l(),w.setTitle(`${Z} \u2013 ${h.editor.name}`),T(`Saved ${Z} in ${a[B].name}`,"note")};return I.addEventListener("click",P),H.addEventListener("keydown",Z=>{(Z.ctrlKey||Z.metaKey)&&Z.key.toLowerCase()==="s"&&(Z.preventDefault(),P())}),te(K),{focus:()=>H.focus({preventScroll:!0}),open:te}}function We(O,K,w){O.classList.add("ap-calc");let y=r("output","ca-disp",O,{textContent:"0"}),U=r("div","ca-hist",O),C=r("div","ca-pad",O),I="0",H=null,$=null,B=!0,X=j=>{if(!isFinite(j))return"Error";let re=String(Math.round(j*1e10)/1e10);return re.length>14?j.toExponential(6):re},te=(j,re,me)=>me==="+"?j+re:me==="\u2212"?j-re:me==="\xD7"?j*re:re===0?NaN:j/re,P=()=>{y.textContent=I,U.textContent=H!==null?`${X(H)} ${$}`:""},Z=j=>{/^\d$/.test(j)?(I=B||I==="0"?j:I.length<14?I+j:I,B=!1):j==="."?B?(I="0.",B=!1):I.includes(".")||(I+="."):j==="C"?(I="0",H=null,$=null,B=!0):j==="\xB1"?I=I.startsWith("-")?I.slice(1):I==="0"?"0":"-"+I:j==="%"?I=X(parseFloat(I)/100):j==="\u232B"?I=B?I:I.slice(0,-1)||"0":"+\u2212\xD7\xF7".includes(j)?(H!==null&&$&&!B&&(I=X(te(H,parseFloat(I),$))),H=parseFloat(I),$=j,B=!0):j==="="&&H!==null&&$&&(I=X(te(H,parseFloat(I),$)),H=null,$=null,B=!0),I==="Error"&&(H=null,$=null,B=!0),P(),s(400+j.charCodeAt(0)%12*30)};["C","\xB1","%","\xF7","7","8","9","\xD7","4","5","6","\u2212","1","2","3","+","0",".","\u232B","="].forEach(j=>{o(C,`ca-k${"+\u2212\xD7\xF7=".includes(j)?" ca-op":""}${j==="="?" ca-eq":""}`,null,j).addEventListener("click",()=>Z(j))});let J={"+":"+","-":"\u2212","*":"\xD7",x:"\xD7","/":"\xF7",Enter:"=","=":"=",Escape:"C",Delete:"C",Backspace:"\u232B",",":".",".":".","%":"%"};return w.win.addEventListener("keydown",j=>{let re=/^\d$/.test(j.key)?j.key:J[j.key];!re||re==="C"&&j.key==="Escape"&&I==="0"||(j.preventDefault(),j.stopPropagation(),Z(re))}),w.win.dataset.keys="1",{}}function ze(O,K,w){O.classList.add("ap-web");let y=r("div","wb-bar",O);o(y,"ap-ib","Back",yi.back).disabled=!0,o(y,"ap-ib","Forward",yi.fwd).disabled=!0;let U=o(y,"ap-ib","Reload",yi.reload),C=r("input","wb-addr",y,{type:"text",placeholder:"Search or type a web address",spellcheck:!1});C.setAttribute("aria-label","Address");let I=r("div","wb-page",O),H=null,$=X=>{H?.stop(),H=null,I.innerHTML=`<div class="wb-off"><svg viewBox="0 0 120 90" aria-hidden="true"><path d="M30 70a20 20 0 0 1 2-40 26 26 0 0 1 50-4 18 18 0 0 1 8 44z" fill="#fff" stroke="#000" stroke-width="5" stroke-linejoin="round"/><path d="M20 15l80 65" stroke="#FF4D4D" stroke-width="7" stroke-linecap="round"/></svg>
        <h3>${X?`Can\u2019t reach ${Vn(X)}`:"You\u2019re offline"}</h3><p>There\u2019s no internet here right now. That\u2019s normal where these PCs are going, and the computer keeps working.</p>
        <div class="wb-acts"><button type="button" class="ap-btn ap-btn-main" data-a="wiki">Open the Encyclopedia</button><button type="button" class="ap-btn" data-a="game">Play while you wait</button></div></div>`,I.querySelector("[data-a=wiki]").addEventListener("click",()=>N("wiki")),I.querySelector("[data-a=game]").addEventListener("click",B),w.setTitle(X?`${X} \u2013 ${h.web.name}`:h.web.name)},B=()=>{I.innerHTML='<div class="wb-game"><canvas width="760" height="260" aria-label="Jumping game: press Space, the up arrow or click to jump"></canvas><p>Space, \u2191 or click to jump over the unplugged cables</p></div>',H=lt(I.querySelector("canvas")),w.win.dataset.keys="1",w.win.focus({preventScroll:!0})};return C.addEventListener("keydown",X=>{if(X.key!=="Enter")return;let te=C.value.trim();te&&($(te.replace(/^https?:\/\//,"").split("/")[0]),C.blur())}),U.addEventListener("click",()=>$()),w.win.addEventListener("keydown",X=>{!H||X.target===C||(X.key===" "||X.key==="ArrowUp")&&(X.preventDefault(),X.stopPropagation(),H.jump())}),$(),{destroy:()=>H?.stop(),pause:()=>H?.pause(),resume:()=>H?.resume()}}function lt(O){let K=O.getContext("2d"),w=O.width,y=O.height,U=y-46,C=0,I=0,H=[],$=[],B=6,X=0,te=0,P=!1,Z=0,J=0,j=!1,re=60,me=()=>{C=0,I=0,H=[],B=6,X=0,P=!1,re=60},ge=()=>{if(P)return me();C===0&&(I=13,s(660))};O.addEventListener("pointerdown",Se=>{Se.preventDefault(),ge()});for(let Se=0;Se<4;Se++)$.push({x:Se*220+60,y:30+Se%2*40});let ke=()=>{if(P)return;I-=.8,C=Math.max(0,C+I),C===0&&(I=0),--re<=0&&(H.push({x:w+20,h:26+Math.random()*26,w:16+Math.random()*14}),re=50+Math.random()*60-B*2),H.forEach(ot=>{ot.x-=B}),H=H.filter(ot=>ot.x>-40),$.forEach(ot=>{ot.x-=B*.25,ot.x<-80&&(ot.x=w+40)}),X+=.2,B=Math.min(14,6+X/90);let Se=80,Ae=46,Q=22,Xe=U-C-Q;for(let ot of H)Se+Ae-6>ot.x&&Se+6<ot.x+ot.w&&Xe+Q>U-ot.h&&(P=!0,te=Math.max(te,Math.floor(X)),s(220))},de=()=>{K.fillStyle="#F4F7FF",K.fillRect(0,0,w,y),K.fillStyle="#fff",K.strokeStyle="#000",K.lineWidth=3,$.forEach(Q=>{K.beginPath(),K.arc(Q.x,Q.y+10,16,0,7),K.arc(Q.x+22,Q.y,20,0,7),K.arc(Q.x+46,Q.y+10,15,0,7),K.fill()}),K.fillStyle="#000",K.fillRect(0,U,w,3),H.forEach(Q=>{K.fillStyle="#5A5A66",K.fillRect(Q.x+Q.w/2-3,U-Q.h,6,Q.h),K.fillStyle="#D9D9D9",K.fillRect(Q.x,U-Q.h-12,Q.w,14),K.strokeRect(Q.x,U-Q.h-12,Q.w,14)});let Se=80,Ae=U-C-22;K.fillStyle="#FF7A1A",K.beginPath(),K.roundRect?K.roundRect(Se,Ae,34,22,6):K.rect(Se,Ae,34,22),K.fill(),K.stroke(),K.fillStyle="#D9D9D9",K.fillRect(Se+34,Ae+5,12,12),K.strokeRect(Se+34,Ae+5,12,12),K.fillStyle="#fff",[Se+9,Se+20].forEach(Q=>{K.beginPath(),K.arc(Q,Ae+9,4.5,0,7),K.fill()}),K.fillStyle="#000",[Se+10,Se+21].forEach(Q=>{K.beginPath(),K.arc(Q,Ae+9,2.2,0,7),K.fill()}),K.fillStyle="#000",K.font="700 20px Archivo, sans-serif",K.textAlign="right",K.fillText(`${Math.floor(X)}${te?`   best ${te}`:""}`,w-16,30),P&&(K.textAlign="center",K.font='28px "Archivo Black", sans-serif',K.fillText("Unplugged! Press Space to try again",w/2,y/2-10))},Ce=Se=>{Z=requestAnimationFrame(Ce),!j&&(Se-J>1e3/60-2||!J)&&(J=Se,ke(),de())};return Z=requestAnimationFrame(Ce),{jump:ge,stop:()=>cancelAnimationFrame(Z),pause:()=>{j=!0},resume:()=>{j=!1}}}function je(O,K,w){O.classList.add("ap-paint");let y=r("div","pt-tools",O),U=r("canvas","pt-canvas",O,{width:760,height:430});U.setAttribute("aria-label","Drawing canvas");let C=U.getContext("2d");C.fillStyle="#fff",C.fillRect(0,0,U.width,U.height);let I="#000000",H=8,$=!1;["#000000","#FF4D4D","#FF7A1A","#FFE14D","#2FBF71","#3D7BFF","#B7A3FF","#FF9ECF","#8B5A2B","#FFFFFF"].forEach((j,re)=>{let me=o(y,"pt-sw",`Colour ${j}`);me.style.background=j,re===0&&me.classList.add("on"),me.addEventListener("click",()=>{I=j,$=!1,y.querySelectorAll(".pt-sw,.pt-er").forEach(ge=>ge.classList.toggle("on",ge===me))})}),r("span","pt-sep",y),[[4,"Thin"],[8,"Medium"],[18,"Thick"]].forEach(([j,re],me)=>{let ge=o(y,"pt-size",`${re} brush`,`<i style="width:${j+2}px;height:${j+2}px"></i>`);me===1&&ge.classList.add("on"),ge.addEventListener("click",()=>{H=j,y.querySelectorAll(".pt-size").forEach(ke=>ke.classList.toggle("on",ke===ge))})}),r("span","pt-sep",y);let B=o(y,"ap-btn pt-er",null,"Eraser");B.addEventListener("click",()=>{$=!0,y.querySelectorAll(".pt-sw,.pt-er").forEach(j=>j.classList.toggle("on",j===B))}),o(y,"ap-btn",null,"Clear").addEventListener("click",()=>{C.fillStyle="#fff",C.fillRect(0,0,U.width,U.height),s(300)});let X=1;o(y,"ap-btn ap-btn-main",null,"Save").addEventListener("click",()=>{let j=`Drawing ${X++}.png`;a.pictures.items.push({name:j,type:"img",src:U.toDataURL("image/png")}),l(),T(`Saved ${j} in Pictures`,"image")});let te=null,P=j=>{let re=U.getBoundingClientRect();return[(j.clientX-re.left)*U.width/re.width,(j.clientY-re.top)*U.height/re.height]};U.addEventListener("pointerdown",j=>{j.preventDefault(),U.setPointerCapture(j.pointerId),te=P(j),J(te,te)}),U.addEventListener("pointermove",j=>{if(!te)return;let re=P(j);J(te,re),te=re});let Z=()=>{te=null};U.addEventListener("pointerup",Z),U.addEventListener("pointercancel",Z);function J(j,re){C.strokeStyle=$?"#fff":I,C.lineWidth=$?26:H,C.lineCap="round",C.lineJoin="round",C.beginPath(),C.moveTo(j[0],j[1]),C.lineTo(re[0],re[1]),C.stroke()}return{}}function _t(O,K,w){O.classList.add("ap-snake");let y=r("div","sn-head",O,{innerHTML:"<span>Score <b>0</b></span><span>Best <b>0</b></span>"}),U=r("canvas","sn-canvas",O,{width:400,height:400});U.setAttribute("aria-label","Snake game: use the arrow keys or the buttons");let C=r("div","sn-pad",O),I=U.getContext("2d"),H=20,$=20,B,X,te,P,Z,J=0,j,re=!1,me=0,ge=0,ke=0,de=!1,Ce=()=>{B=[[8,10],[7,10],[6,10]],X=[1,0],te=[1,0],Z=0,j=!1,Se(),Ae()},Se=()=>{do P=[Math.floor(Math.random()*H),Math.floor(Math.random()*H)];while(B.some(([ve,nt])=>ve===P[0]&&nt===P[1]))},Ae=()=>{let ve=y.querySelectorAll("b");ve[0].textContent=Z,ve[1].textContent=J},Q=ve=>{if(j){Ce(),de=!0;return}de=!0,(ve[0]!==-X[0]||ve[1]!==-X[1])&&(te=ve)};[["\u2191",[0,-1],"Up"],["\u2190",[-1,0],"Left"],["\u2193",[0,1],"Down"],["\u2192",[1,0],"Right"]].forEach(([ve,nt,Je])=>o(C,"sn-k",Je,ve).addEventListener("click",()=>Q(nt))),w.win.addEventListener("keydown",ve=>{let nt={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]}[ve.key];nt?(ve.preventDefault(),ve.stopPropagation(),Q(nt)):ve.key===" "&&(ve.preventDefault(),ve.stopPropagation(),j&&Ce(),de=!0)});let Xe=()=>{X=te;let ve=[B[0][0]+X[0],B[0][1]+X[1]];if(ve[0]<0||ve[1]<0||ve[0]>=H||ve[1]>=H||B.some(([nt,Je])=>nt===ve[0]&&Je===ve[1])){j=!0,J=Math.max(J,Z),Ae(),s(200);return}B.unshift(ve),ve[0]===P[0]&&ve[1]===P[1]?(Z++,Ae(),Se(),s(880)):B.pop()},ot=()=>{I.fillStyle="#C8EE5A",I.fillRect(0,0,400,400),I.fillStyle="rgba(0,0,0,.05)";for(let ve=0;ve<H;ve++)for(let nt=0;nt<H;nt++)(ve+nt)%2&&I.fillRect(ve*$,nt*$,$,$);I.fillStyle="#FF4D4D",I.strokeStyle="#000",I.lineWidth=3,I.beginPath(),I.arc(P[0]*$+10,P[1]*$+10,7,0,7),I.fill(),I.stroke(),B.forEach(([ve,nt],Je)=>{I.fillStyle=Je?"#2FBF71":"#1E8A50",I.fillRect(ve*$+1,nt*$+1,$-2,$-2),I.strokeRect(ve*$+1,nt*$+1,$-2,$-2)}),I.fillStyle="#000",I.textAlign="center",(j||!de)&&(I.fillStyle="rgba(255,255,255,.85)",I.fillRect(40,160,320,80),I.fillStyle="#000",I.font='24px "Archivo Black", sans-serif',I.fillText(j?"Game over":"Press an arrow key",200,196),I.font="700 16px Archivo, sans-serif",I.fillText(j?"Press an arrow or Space to play again":"or the buttons below",200,222))},Bt=ve=>{ke=requestAnimationFrame(Bt);let nt=ge?Math.min(.1,(ve-ge)/1e3):0;if(ge=ve,!re){if(de&&!j){me+=nt;let Je=Math.max(.065,.14-Z*.004);for(;me>Je&&(me-=Je,Xe(),!j););}ot()}};return Ce(),ke=requestAnimationFrame(Bt),{destroy:()=>cancelAnimationFrame(ke),pause:()=>{re=!0},resume:()=>{re=!1,ge=0}}}function pt(O,K,w){O.classList.add("ap-term");let y=r("div","tm-out",O),U=r("label","tm-line",O),C=`${n.user}@${n.host}:~$`;r("span","tm-prompt",U,{textContent:C});let I=r("input","tm-in",U,{type:"text",spellcheck:!1,autocomplete:"off"});I.setAttribute("aria-label","Command");let H=[],$=0,B=(P,Z="")=>{r("div",`tm-row ${Z}`,y,{textContent:P}),y.scrollTop=y.scrollHeight};B(`Welcome to ${i.name}. Type "help" to see what you can do.`,"tm-dim");let X=()=>a.documents.items.map(P=>P.name),te={help:()=>"Commands: help, ls, cat <file>, echo <text>, date, whoami, uname, neofetch, fortune, apt install <app>, sudo <command>, clear, exit",ls:()=>["Documents","Pictures","Music","Downloads",...X().map(P=>`Documents/${P}`)].join("   "),cat:P=>{let Z=a.documents.items.find(J=>J.name.toLowerCase()===P.join(" ").replace(/^documents\//i,"").toLowerCase());return Z?Z.body:`cat: ${P.join(" ")||"?"}: No such file (try: ls)`},echo:P=>P.join(" "),date:()=>new Date().toString().split(" (")[0],whoami:()=>n.user,uname:()=>"Linux",neofetch:()=>`${n.user}@${n.host}
-----------------
OS: ${i.name} (a copy inside a web page)
Kernel: Linux
Shell: bash
Network: offline (that's fine)
Memory: enough for school`,fortune:()=>["A computer that works offline is a computer that works.","One USB stick, a hundred PCs.","Today you will learn something new.","Save your work often."][Math.floor(Math.random()*4)],apt:P=>P[0]==="install"&&P[1]?`Reading package lists... Done
E: Unable to fetch ${P[1]}: no internet connection.
Tip: on these PCs, new apps arrive on a USB stick.`:"Usage: apt install <app>",sudo:P=>P.length?`[sudo] password for ${n.user}: 
Nice try. This demo doesn\u2019t have a password.`:"usage: sudo <command>",clear:()=>(y.replaceChildren(),null),exit:()=>(setTimeout(()=>G(w),150),"logout")};return I.addEventListener("keydown",P=>{if(P.key==="ArrowUp"){P.preventDefault(),$>0&&(I.value=H[--$]);return}if(P.key==="ArrowDown"){P.preventDefault(),$=Math.min(H.length,$+1),I.value=H[$]||"";return}if(P.key!=="Enter")return;let Z=I.value.trim();if(I.value="",B(`${C} ${Z}`,"tm-cmd"),!Z)return;H.push(Z),$=H.length;let[J,...j]=Z.split(/\s+/),re=te[J.toLowerCase()],me=re?re(j):`${J}: command not found (try: help)`;me!=null&&B(me),s(500)}),O.addEventListener("pointerup",()=>{window.getSelection()?.toString()||I.focus({preventScroll:!0})}),{focus:()=>I.focus({preventScroll:!0})}}function St(O,K,w){O.classList.add("ap-wiki");let y=r("div","wk-side",O),U=r("label","wk-search",y,{innerHTML:yi.search}),C=r("input","",U,{type:"search",placeholder:"Search the Encyclopedia",spellcheck:!1});C.setAttribute("aria-label","Search the Encyclopedia");let I=r("div","wk-list",y);r("p","wk-badge",y,{textContent:"Works without internet"});let H=r("article","wk-art",O),$=te=>{let[P,Z,J]=pp[te];H.innerHTML=`<div class="wk-hero"><span class="wk-ic">${ts[Z]}</span><h3>${Vn(P)}</h3></div>${J.map(j=>`<p>${Vn(j)}</p>`).join("")}`,H.scrollTop=0,I.querySelectorAll(".wk-item").forEach(j=>j.classList.toggle("on",+j.dataset.i===te)),w.setTitle(`${P} \u2013 ${h.wiki.name}`),s(560)},B=()=>{let te=C.value.trim().toLowerCase();I.replaceChildren();let P=pp.map((Z,J)=>[Z,J]).filter(([[Z,,J]])=>!te||Z.toLowerCase().includes(te)||J.join(" ").toLowerCase().includes(te));return P.forEach(([[Z],J])=>{let j=o(I,"wk-item",null,Vn(Z));j.dataset.i=J,j.addEventListener("click",()=>$(J))}),P.length||r("p","ds-empty",I,{textContent:"No articles match."}),P};C.addEventListener("input",B),C.addEventListener("keydown",te=>{te.key==="Enter"&&I.querySelector(".wk-item")?.click()});let X=te=>{if(typeof te=="string"){C.value=te;let P=B();P.length&&$(P[0][1])}};return B(),$(0),X(K),{open:X,focus:()=>C.focus({preventScroll:!0})}}function Y(O,K,w){O.classList.add("ap-typing"),r("p","ty-help",O,{textContent:"Type the sentence. Green letters are right, red ones need fixing."});let y=r("div","ty-target",O),U=r("input","ty-in",O,{type:"text",spellcheck:!1,autocomplete:"off"});U.setAttribute("aria-label","Type here");let C=r("div","ty-stats",O),I=o(O,"ap-btn ap-btn-main",null,"Next sentence"),H=0,$=0,B=()=>{U.value="",$=0,X(),U.focus({preventScroll:!0})},X=()=>{let te=mp[H%mp.length],P=U.value;y.innerHTML=[...te].map((me,ge)=>`<span class="${ge<P.length?P[ge]===me?"ok":"bad":ge===P.length?"cur":""}">${me===" "?"&nbsp;":Vn(me)}</span>`).join("");let Z=[...P].filter((me,ge)=>me===te[ge]).length,J=P.length?Math.round(Z/P.length*100):100,j=$?(performance.now()-$)/6e4:0,re=j>.02?Math.round(Z/5/j):0;C.textContent=P===te?`Done! ${re} words a minute, ${J}% right.`:`${J}% right${re?`, ${re} words a minute`:""}`,P===te&&(s(880),I.focus({preventScroll:!0}))};return U.addEventListener("input",()=>{$||($=performance.now()),X(),s(520)}),I.addEventListener("click",()=>{H++,B()}),X(),{focus:()=>U.focus({preventScroll:!0})}}function Dt(O,K,w){O.classList.add("ap-photos");let y=r("div","ph-view",O),U=r("div","ph-strip",O),C=0,I=()=>a.pictures.items,H=X=>{let te=I()[X];if(!te){y.innerHTML='<p class="ds-empty">No pictures yet.</p>';return}C=X,y.innerHTML=`<img src="${te.src}" alt="${Vn(te.name)}">`,U.querySelectorAll(".ph-th").forEach(P=>P.classList.toggle("on",+P.dataset.i===X)),w.setTitle(`${te.name} \u2013 Photos`)},$=()=>{U.replaceChildren(),I().forEach((X,te)=>{let P=o(U,"ph-th",X.name,`<img src="${X.src}" alt="">`);P.dataset.i=te,P.addEventListener("click",()=>H(te))}),H(Math.min(C,I().length-1))},B=X=>{let te=I().findIndex(P=>P.name===X);te>=0&&H(te)};return c.add($),$(),B(K),{open:B,destroy:()=>c.delete($)}}function ht(O){O.classList.add("ap-settings");let K=(C,I)=>{let H=r("div","st-row",O);return r("div","st-txt",H,{innerHTML:`<b>${Vn(C)}</b><span>${Vn(I)}</span>`}),H},w=r("div","st-walls",K("Background","Pick a picture for the desktop"));["Default","Candy","Night","Sea"].forEach((C,I)=>{let H=o(w,`st-wall st-wall-${i.id}`,`${C} background`);H.dataset.i=I,I===M.wall&&H.classList.add("on"),H.addEventListener("click",()=>{M.wall=I,v(),w.querySelectorAll(".st-wall").forEach($=>$.classList.toggle("on",$===H)),s(600)})});let y=(C,I,H,$)=>{let B=K(C,I),X=o(B,"st-switch",C);X.setAttribute("role","switch");let te=()=>{X.setAttribute("aria-checked",String(M[H])),$(M[H])};X.addEventListener("click",()=>{M[H]=!M[H],te(),s(M[H]?700:450)}),te()};return y("Dark windows","Easier on the eyes at night","dark",C=>d.classList.toggle("ds-dark",C)),y("Bigger text","Makes the words in apps larger","big",C=>d.classList.toggle("ds-big",C)),y("Night light","Warmer colours on the screen","night",C=>b.classList.toggle("on",C)),K("About this computer",`${i.name}, a working copy for our school presentation`).classList.add("st-about"),{}}function yt(O){O.classList.add("ap-store"),r("p","so-note",O,{textContent:"These apps are already on this computer and work without internet. New apps and updates can arrive on a USB stick."});let K=r("div","so-list",O);return n.home.filter(w=>w!=="store").forEach(w=>{let y=r("div","so-card",K,{innerHTML:`<span class="so-ic">${ts[h[w].icon]}</span><b>${Vn(h[w].name)}</b><span class="so-chip">Installed</span>`});o(y,"ap-btn",`Open ${h[w].name}`,"Open").addEventListener("click",()=>N(w))}),{}}function Be(O){if(O.key==="Escape")return be?(Ye(),!0):Ee?(fe(!1),Le?.focus({preventScroll:!0}),!0):i.id==="endless"&&document.activeElement===oe&&oe.value?(oe.value="",oe.dispatchEvent(new Event("input")),!0):!1;if(O.key==="Tab")return!1;let K=O.target;return!!(K&&K.closest?.(".ds")&&(K.matches("input, textarea, select, [contenteditable]")||K.closest("[data-keys]")))}let Kt=!1;return{scr:d,onKey:Be,intro(){if(fe(!1),Ye(),Kt||(Kt=!0,i.id==="endless"?setTimeout(()=>oe?.focus({preventScroll:!0}),700):setTimeout(()=>N("editor",{folder:"documents",name:"Welcome.txt"},[640,760]),e?0:700)),e)return;(i.id==="endless"?d._tiles:[...p.children])?.forEach((K,w)=>K.animate([{transform:"translateY(40px) scale(0)",opacity:0},{transform:"none",opacity:1}],{duration:460,delay:200+w*40,easing:"cubic-bezier(.2,.9,.3,1.35)",fill:"backwards"})),g.animate([{transform:"translateY(100%)"},{transform:"none"}],{duration:420,delay:120,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"backwards"})},destroy(){clearInterval(Ne),x.slice().forEach(G)}}}var fs=[{id:"mint",name:"Linux Mint",color:"#2FBF71",hi:"rgba(53,168,84,.5)"},{id:"zorin",name:"Zorin OS Lite",color:"#3D7BFF",hi:"rgba(47,109,246,.22)"},{id:"endless",name:"Endless OS",color:"#FF7A1A",hi:"rgba(255,255,255,.25)"}],dd=1316,gy=836,Qc={monitor:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/><path d="M14 7h3v3M17 7l-4 4"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>'};function gp(i,{reduceMotion:e}){let t=(T,E,x,S={})=>{let L=document.createElement(T);return E&&(L.className=E),Object.assign(L,S),x&&x.appendChild(L),L},n=1,s={mint:()=>jc(fs[0],{reduceMotion:e,getScale:()=>n}),zorin:()=>jc(fs[1],{reduceMotion:e,getScale:()=>n}),endless:()=>jc(fs[2],{reduceMotion:e,getScale:()=>n})},r={},o,a,c,l,h=-1,f=null,d=!1;function u(){if(o)return;o=t("div","osv",document.body),o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true");let T=t("div","osv-burst",o);t("div","osv-burst-in",T),o._burst=T;let E=t("div","osv-tabs",o);E.setAttribute("role","tablist"),l=fs.map((R,D)=>{let z=t("button","osv-tab",E,{type:"button",textContent:R.name});return z.setAttribute("role","tab"),z.style.background=R.color,z.addEventListener("click",()=>M(D,D>h?1:-1)),z});let x=t("button","osv-x",o,{type:"button",innerHTML:Qc.close});x.setAttribute("aria-label","Close"),x.addEventListener("click",v);let S=t("button","osv-nav osv-prev",o,{type:"button",innerHTML:Qc.prev});S.setAttribute("aria-label","Previous system"),S.addEventListener("click",()=>M((h+2)%3,-1));let L=t("button","osv-nav osv-next",o,{type:"button",innerHTML:Qc.next});L.setAttribute("aria-label","Next system"),L.addEventListener("click",()=>M((h+1)%3,1)),a=t("div","osv-fit",o),c=t("div","osv-device",a),o.addEventListener("pointerdown",R=>{(R.target===o||R.target===o._burst||R.target.parentNode===o._burst)&&v()}),window.addEventListener("resize",()=>{d&&g()}),window.addEventListener("keydown",R=>{if(d){if(r[fs[h]?.id]?.onKey?.(R)){R.key==="Escape"&&R.stopImmediatePropagation();return}if(R.key==="Escape")R.stopImmediatePropagation(),v();else if(R.key==="ArrowRight")R.preventDefault(),M((h+1)%3,1);else if(R.key==="ArrowLeft")R.preventDefault(),M((h+2)%3,-1);else if(R.key==="Tab"){let D=[...o.querySelectorAll('button, input, textarea, [tabindex="0"]')].filter(q=>q.offsetParent!==null&&!q.disabled),z=D.indexOf(document.activeElement);R.shiftKey&&z<=0?(R.preventDefault(),D[D.length-1].focus()):!R.shiftKey&&z===D.length-1&&(R.preventDefault(),D[0].focus())}}},!0)}let p=(T,E,x,S=0)=>`translate(${T}px,${E}px) translate(-50%,-50%) scale(${x}) rotate(${S}deg)`;function _(){let T=window.innerWidth,E=window.innerHeight,x=T<820,S=x?140:96,L=x?90:40;return{s:Math.min(T*(x?.96:.86)/dd,(E-S-L)/gy),cx:T/2,cy:S+(E-S-L)/2}}function g(){let T=_();n=T.s,a.style.transform=p(T.cx,T.cy,T.s)}function m(T){var x;let E=fs[T];r[x=E.id]||(r[x]=s[E.id]()),c.replaceChildren(r[E.id].scr),r[E.id].intro(),h=T,o.setAttribute("aria-label",E.name),l.forEach((S,L)=>S.setAttribute("aria-selected",String(L===T)))}function M(T,E){if(!(T===h||!d)){if(Jt.whoosh(),e)return m(T);c.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${E*90}deg)`}],{duration:220,easing:"ease-in"}).onfinish=()=>{m(T),c.animate([{transform:`rotateY(${-E*90}deg) scale(.9)`},{transform:"rotateY(0deg) scale(1)"}],{duration:420,easing:"cubic-bezier(.2,.9,.3,1.25)"})}}}function b(T,E,x){if(u(),d)return M(fs.findIndex(L=>L.id===T),1);d=!0,f=x||document.activeElement,document.getElementById("tbStop")?.click(),document.documentElement.classList.add("osv-lock"),o.classList.add("on"),m(fs.findIndex(L=>L.id===T)),g(),Jt.whoosh(),setTimeout(()=>{d&&i?.setPaused?.(!0)},e?0:1e3);let S=_();if(!e){let L=E||{left:S.cx-60,top:S.cy-38,width:120,height:76},R=Math.max(.02,L.width/dd);a.animate([{transform:p(L.left+L.width/2,L.top+L.height/2,R,-360),filter:"saturate(2.2)"},{transform:p(S.cx,S.cy,S.s*1.05,8),offset:.72,filter:"saturate(1.2)"},{transform:p(S.cx,S.cy,S.s),filter:"none"}],{duration:950,easing:"cubic-bezier(.2,.8,.2,1)"}),o._burst.animate([{transform:"translate(-50%,-50%) scale(0)",opacity:1},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.95,offset:.55},{transform:"translate(-50%,-50%) scale(1)",opacity:.22}],{duration:1150,easing:"ease-out"}),o.animate([{backgroundColor:"rgba(12,10,30,0)"},{backgroundColor:"rgba(12,10,30,.55)"}],{duration:420}),l.forEach((D,z)=>D.animate([{transform:"translateY(-90px) rotate(-12deg)",opacity:0},{transform:"none",opacity:1}],{duration:520,delay:420+z*90,easing:"cubic-bezier(.2,.9,.3,1.4)",fill:"backwards"}))}setTimeout(()=>l[h]?.focus({preventScroll:!0}),60)}function v(){if(!d)return;d=!1,i?.setPaused?.(!1),Jt.whoosh();let T=()=>{o.classList.remove("on"),document.documentElement.classList.remove("osv-lock"),f?.focus?.({preventScroll:!0})};if(e)return T();let E=_(),x=i?.osScreenRect?.(fs[h].id),S={duration:560,fill:"forwards"},L=[a.animate([{transform:p(E.cx,E.cy,E.s)},x?{transform:p(x.left+x.width/2,x.top+x.height/2,Math.max(.02,x.width/dd),360)}:{transform:p(E.cx,E.cy,E.s*.15,200),opacity:0}],{...S,easing:"cubic-bezier(.6,0,.75,.35)"}),o._burst.animate([{opacity:.22,transform:"translate(-50%,-50%) scale(1)"},{opacity:0,transform:"translate(-50%,-50%) scale(0)"}],{...S,easing:"ease-in"}),o.animate([{backgroundColor:"rgba(12,10,30,.55)"},{backgroundColor:"rgba(12,10,30,0)"}],S)],R=!1,D=()=>{R||(R=!0,T(),L.forEach(z=>z.cancel()))};L[0].onfinish=D,setTimeout(D,900)}return fs.forEach(T=>{let E=document.querySelector(`#${T.id} .card h2`);if(!E)return;let x=t("button","os-open",E,{type:"button",innerHTML:Qc.monitor});x.setAttribute("aria-label",`Show the ${T.name} interface`),x.addEventListener("click",()=>b(T.id,i?.osScreenRect?.(T.id)||x.getBoundingClientRect(),x));let S=E.querySelector(".chip");S&&(S.classList.add("clickable"),S.addEventListener("click",()=>b(T.id,i?.osScreenRect?.(T.id)||S.getBoundingClientRect(),x)))}),{open:b,close:v,get isOpen(){return d}}}var xy=".hero h1 .l, .hero .lead, .hero .actions .btn, .hero .byline, .card, .logo, .links a, #soundBtn, #motionBtn, #tourBtn, .marquee",yy="a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv";function xp(i,{reduceMotion:e,mode:t=()=>0}){if(e)return{get busy(){return!1}};let n=document.documentElement,s=innerWidth/2,r=innerHeight/2;window.addEventListener("pointermove",v=>{s=v.clientX,r=v.clientY},{passive:!0});let o=()=>{let v=innerWidth,T=innerHeight,E=[...document.querySelectorAll(xy)].filter(S=>{let L=S.getBoundingClientRect();return L.width>2&&L.height>2&&L.bottom>0&&L.top<T&&L.right>0&&L.left<v&&getComputedStyle(S).visibility!=="hidden"}),x=new Set(E);return E.filter(S=>{for(let L=S.parentElement;L;L=L.parentElement)if(x.has(L))return!1;return!0}).map(S=>{let L=S.getBoundingClientRect();return{el:S,hx:L.left+L.width/2,hy:L.top+L.height/2,x:L.left+L.width/2,y:L.top+L.height/2,w:L.width,h:L.height,vx:0,vy:0,a:0,va:0,s:1,m:Math.max(200,L.width*L.height),big:L.width*L.height>2e4}})},a=v=>{v.el.style.translate=`${(v.x-v.hx).toFixed(1)}px ${(v.y-v.hy).toFixed(1)}px`,v.el.style.rotate=`${v.a.toFixed(1)}deg`,v.el.style.scale=v.s===1?"":v.s.toFixed(3)},c=v=>{v.el.style.translate=v.el.style.rotate=v.el.style.scale="",v.el.classList.remove("flying")},l=()=>n.classList.toggle("flying",h.on),h={on:!1,armed:0,t:0,backT:0,x:0,y:0,bodies:[],back:!1};window.addEventListener("pointerdown",v=>{if(t()<1||v.pointerType!=="mouse"||v.button!==0||h.on||n.classList.contains("osv-lock")||v.target.closest?.(yy))return;let T=v.clientX,E=v.clientY;clearTimeout(h.armed),h.armed=setTimeout(()=>{h.on=!0,h.back=!1,h.t=0,h.x=T,h.y=E,h.bodies=o(),h.bodies.forEach(x=>{x.el.classList.add("flying"),x.d=Math.hypot(x.hx-T,x.hy-E),x.spin=Math.random()<.5?-1:1}),l(),i?.setHole?.(T,E,1),Jt.whoosh(),M()},420)}),window.addEventListener("pointermove",()=>{h.on&&!h.back&&(h.x=s,h.y=r,i?.setHole?.(s,r,1))},{passive:!0});let f=()=>{if(clearTimeout(h.armed),!(!h.on||h.back)){h.back=!0,h.backT=performance.now(),i?.setHole?.(h.x,h.y,0),i?.burstAt?.(h.x,h.y,!0),Jt.tada();for(let v of h.bodies)v.vx=(Math.random()-.5)*900,v.vy=(Math.random()-.5)*900,v.va=v.spin*900}};window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f),window.addEventListener("blur",f);function d(v){if(!h.back){h.t+=v;let x=Math.min(1,h.t/1.6);for(let S of h.bodies){let L=Math.max(0,1-S.d/(Math.hypot(innerWidth,innerHeight)*.9)),R=Math.min(1,x*(.35+L*1.2)),D=R*R*(3-2*R),z=D*S.spin*(2.5+L*4),q=S.hx-h.x,F=S.hy-h.y,N=Math.cos(z),G=Math.sin(z),W=1-D*.94;S.x=h.x+(q*N-F*G)*W,S.y=h.y+(q*G+F*N)*W,S.a=D*S.spin*540,S.s=Math.max(.04,1-D*.96),a(S)}return}let T=performance.now()-h.backT>2200,E=T;for(let x of h.bodies)x.vx+=((x.hx-x.x)*90-x.vx*9)*v,x.vy+=((x.hy-x.y)*90-x.vy*9)*v,x.va+=((0-x.a)*90-x.va*9)*v,x.x+=x.vx*v,x.y+=x.vy*v,x.a+=x.va*v,x.s+=(1-x.s)*Math.min(1,9*v),!T&&(Math.abs(x.x-x.hx)+Math.abs(x.y-x.hy)>.6||Math.abs(x.a)>.5||Math.abs(x.vx)+Math.abs(x.vy)>5||Math.abs(1-x.s)>.004)&&(E=!1),a(x);E&&(h.bodies.forEach(c),h.bodies=[],h.on=h.back=!1,l())}let u={on:!1,v:0};window.addEventListener("keydown",v=>{(v.key==="r"||v.key==="R")&&t()>=1&&!v.metaKey&&!v.ctrlKey&&!v.altKey&&!v.target.closest?.("input,textarea,select,[contenteditable]")&&!n.classList.contains("osv-lock")&&(u.on||(u.on=!0,u.v=0,i?.setVhs?.(1),Jt.whoosh(),n.style.scrollBehavior="auto",M()),v.preventDefault())}),window.addEventListener("keyup",v=>{(v.key==="r"||v.key==="R")&&u.on&&(u.on=!1,i?.setVhs?.(0),n.style.scrollBehavior="")});let p=()=>window.scrollY+innerHeight>=document.documentElement.scrollHeight-3,_=()=>i?.warp?.(()=>window.scrollTo({top:0,left:0,behavior:"instant"}));window.addEventListener("keydown",v=>{t()>=1&&(v.key==="PageDown"||v.key==="ArrowRight")&&p()&&!n.classList.contains("osv-lock")&&!v.target.closest?.("input,textarea,select,[contenteditable]")&&(v.preventDefault(),_())});let g=performance.now(),m=!1;function M(){m||(m=!0,g=performance.now(),requestAnimationFrame(b))}function b(v){let T=Math.min(.1,Math.max(.001,(v-g)/1e3));g=v;let E=Math.min(6,Math.ceil(T/.017)),x=T/E;for(let S=0;S<E;S++)h.on&&d(x);u.on&&(u.v=Math.min(2400,u.v+T*3600),window.scrollY>0&&window.scrollBy(0,-u.v*T)),h.on||u.on?requestAnimationFrame(b):m=!1}return{get busy(){return h.on}}}var mo=[{name:"Party\u2019s over",hint:""},{name:"Party mode",hint:"Hold the mouse for a black hole, R to rewind"},{name:"Chaos mode",hint:"Everything at once"},{name:"Kaleidoscope",hint:"Press P or the popper to stop"}];function yp(i,{reduceMotion:e}){let t=window.matchMedia("(pointer: fine)").matches,n=0,s=gp(i,{reduceMotion:e});xp(i,{reduceMotion:e,mode:()=>n});let r={ctx:null,on:!1,noise:null,out:null},o=()=>{if(!r.ctx){let N=r.ctx=new(window.AudioContext||window.webkitAudioContext);r.out=N.createGain(),r.out.gain.value=.8,r.out.connect(N.destination),r.noise=N.createBuffer(1,N.sampleRate,N.sampleRate);let G=r.noise.getChannelData(0);for(let W=0;W<G.length;W++)G[W]=Math.random()*2-1}return r.ctx},a=(N,G,W,ue,ie)=>{N.gain.setValueAtTime(1e-4,G),N.gain.exponentialRampToValueAtTime(ue,G+W),N.gain.exponentialRampToValueAtTime(1e-4,G+ie)},c=(N,G,W,ue,ie,ae)=>{let ce=o(),Ee=ce.createOscillator(),Le=ce.createGain();Ee.type=N,Ee.frequency.setValueAtTime(G,ue),W&&Ee.frequency.exponentialRampToValueAtTime(W,ue+ie*.6),a(Le,ue,.004,ae,ie),Ee.connect(Le).connect(r.out),Ee.start(ue),Ee.stop(ue+ie+.05)},l=(N,G,W,ue,ie,ae=1)=>{let ce=o(),Ee=ce.createBufferSource(),Le=ce.createBiquadFilter(),oe=ce.createGain();return Ee.buffer=r.noise,Le.type=ue,Le.frequency.value=ie,Le.Q.value=ae,a(oe,N,.003,W,G),Ee.connect(Le).connect(oe).connect(r.out),Ee.start(N,Math.random()*.5),Ee.stop(N+G+.05),Le};Jt.pop=(N=520)=>{r.on&&c("triangle",N*1.8,N,o().currentTime,.16,.22)},Jt.whoosh=()=>{if(!r.on)return;let N=o().currentTime,G=l(N,.7,.35,"bandpass",300,1.2);G.frequency.setValueAtTime(300,N),G.frequency.exponentialRampToValueAtTime(3200,N+.5)},Jt.tada=()=>{if(!r.on)return;let N=o().currentTime;[523.25,659.25,783.99,1046.5].forEach((G,W)=>c("square",G,0,N+W*.07,.5,.07))};let h=124,f=60/h/4,d=[0,3,5,7,10,12,15,17],u=[0,0,3,0,5,3,2,1,0,0,3,0,6,5,3,2],p={on:!1,next:0,step:0,start:0,timer:0},_=(N,G)=>{N%4===0&&c("sine",150,42,G,.28,.9),N%8===4&&(l(G,.16,.32,"bandpass",1800,.8),c("triangle",200,120,G,.1,.15)),N%2===1&&l(G,.05,N%4===3?.08:.045,"highpass",7e3),N%2===0&&c("sawtooth",55*2**(d[u[N/2%16]]/12),0,G,.17,n>=2?.12:.08),n>=2&&N%4===2&&c("square",440*2**(d[N*3%8]/12),0,G,.09,.04)},g=()=>{let N=o();for(;p.next<N.currentTime+.12;)_(p.step,p.next),p.next+=f,p.step=(p.step+1)%32},m=()=>{let N=r.on&&n>0;if(N&&!p.on){let G=o();p.on=!0,p.step=0,p.start=p.next=G.currentTime+.06,p.timer=setInterval(g,25)}!N&&p.on&&(p.on=!1,clearInterval(p.timer))};Jt.beat=()=>p.on?(r.ctx.currentTime-p.start)*h/60%1:-1;let M=document.getElementById("soundBtn");M?.addEventListener("click",()=>{r.on=!r.on,M.setAttribute("aria-pressed",String(r.on)),r.on&&(o().resume(),Jt.pop(720)),m()});let b=document.getElementById("partyBtn"),v=document.getElementById("modeToast"),T=0,E=N=>{n=(N+mo.length)%mo.length,document.body.classList.toggle("party",n>=1),document.body.classList.toggle("chaos",n>=2),document.body.classList.toggle("absurd",n===3),i?.setParty(n>=1),i?.setChaos?.(n>=2),i?.setKaleido?.(n===3),b?.setAttribute("aria-pressed",String(n>0)),b?.setAttribute("aria-label",n?`${mo[n].name}: press for the next mode`:"Party mode"),b&&(b.dataset.mode=String(n)),n&&Jt.tada(),m(),v&&(v.innerHTML=`<b>${mo[n].name}</b>${mo[n].hint?`<span>${mo[n].hint}</span>`:""}`,v.classList.add("show"),clearTimeout(T),T=setTimeout(()=>v.classList.remove("show"),1900))};b?.addEventListener("click",()=>E(n+1)),window.addEventListener("keydown",N=>{N.key!=="p"&&N.key!=="P"||N.metaKey||N.ctrlKey||N.altKey||N.target.closest?.("input,textarea,select,[contenteditable]")||document.documentElement.classList.contains("osv-lock")||E(n+1)});let x="a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv,#modeToast",S="mouse";window.addEventListener("pointerdown",N=>{S=N.pointerType||"mouse"},{passive:!0}),window.addEventListener("click",N=>{if(!i||s.isOpen||N.button!==0||N.target.closest?.(x))return;let G=i.pickOs?.(N.clientX,N.clientY);if(G){s.open(G,i.osScreenRect(G));return}e||S!=="mouse"&&n===0||(i.burstAt(N.clientX,N.clientY,n>0),Jt.pop(240+Math.random()*420))});let L=document.querySelector(".hero h1");if(L&&!e){let N=L.textContent.trim(),G=ue=>ue.replace(/[&<>]/g,ie=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[ie]),W=0;L.setAttribute("aria-label",N),L.innerHTML=N.split(/\s+/).map((ue,ie)=>`<span class="w" aria-hidden="true" style="--i:${ie}">${[...ue].map(ae=>`<span class="l" style="--j:${W++}">${G(ae)}</span>`).join("")}</span>`).join(" ")}let R=[...document.querySelectorAll(".card")],D=new IntersectionObserver(N=>{for(let G of N)G.isIntersecting&&(G.target.classList.add("in"),D.unobserve(G.target))},{threshold:.12});R.forEach(N=>D.observe(N)),t&&!e&&R.forEach(N=>{N.querySelector("input")||(N.addEventListener("pointermove",G=>{let W=N.getBoundingClientRect(),ue=(G.clientX-W.left)/W.width-.5,ie=(G.clientY-W.top)/W.height-.5;N.style.transform=`perspective(1100px) rotateX(${(-ie*5).toFixed(2)}deg) rotateY(${(ue*6).toFixed(2)}deg)`}),N.addEventListener("pointerleave",()=>{N.style.transform=""}))});let z=document.querySelector(".marquee");if(z&&!e){let N=z.cloneNode(!0);N.classList.add("rev"),N.setAttribute("aria-hidden","true"),z.after(N)}let q=0;t&&window.addEventListener("pointermove",N=>{let G=performance.now();if(!i||G-q<120)return;q=G;let W=s.isOpen||N.target.closest?.(x)?null:i.pickOs?.(N.clientX,N.clientY);document.body.classList.toggle("os-hover",!!W),i.hoverOs?.(W)},{passive:!0});let F=document.getElementById("progress");if(F){let N=F.querySelector(".pg-fill"),G=F.querySelector(".pg-stick"),W=!1,ue=()=>{W=!1;let ae=document.documentElement.scrollHeight-innerHeight,ce=ae>0?Math.min(1,Math.max(0,scrollY/ae)):0;N.style.transform=`scaleX(${ce.toFixed(4)})`,G.style.transform=`translateX(${(ce*(F.clientWidth-42)).toFixed(1)}px)`},ie=()=>{W||(W=!0,requestAnimationFrame(ue))};window.addEventListener("scroll",ie,{passive:!0}),window.addEventListener("resize",ie),ue()}}{let b=function(){c?.setScores(g,p.map(Ge=>Ge.s));let ee=5*g.reduce((Ge,Ne)=>Ge+Ne,0),xe=u.map((Ge,Ne)=>p.reduce((Ye,tt,fe)=>Ye+tt.s[Ne]*g[fe],0)),ye=Math.max(...xe),Ue=xe.filter(Ge=>Ge===ye).length;document.getElementById("maxNote").textContent=ee?`out of ${ee}`:"pick at least one",u.forEach((Ge,Ne)=>{let Ye=document.getElementById("t-"+Ge.key),tt=ee?Math.round(xe[Ne]/ee*100):0,fe=ee&&xe[Ne]===ye;Ye.innerHTML=`<b class="mob">${Ge.name}</b><strong>${xe[Ne]}</strong><span class="meter"><i style="width:${tt}%"></i></span>${fe?`<em class="lead">${Ue>1?"Tied top":"Top score"}</em>`:""}`}),p.forEach((Ge,Ne)=>{document.getElementById("w-"+Ge.id).value=String(g[Ne]),document.getElementById("o-"+Ge.id).textContent="\xD7"+g[Ne]})},G=function(ee,xe,ye=()=>D.on){W(F(ee),xe,ye)},W=function(ee,xe,ye=()=>D.on){if(s){q.style.scrollBehavior="auto",window.scrollTo(0,ee),q.style.scrollBehavior="",xe();return}let Ue=window.scrollY,Ge=ee-Ue,Ne=performance.now(),Ye=Math.min(1600,600+Math.abs(Ge)*.5);N++,D.scrolling=!0,q.style.scrollBehavior="auto";let tt=()=>{--N===0&&(D.scrolling=!1,q.style.scrollBehavior="")},fe=Re=>{if(!ye()){tt();return}let we=Math.min(1,(Re-Ne)/Ye),We=we<.5?4*we*we*we:1-(-2*we+2)**3/2;window.scrollTo(0,Ue+Ge*We),we<1?requestAnimationFrame(fe):(tt(),xe())};requestAnimationFrame(fe)},ue=function(ee){if(D.on){if(ee>=v.length){Ee();return}D.i=ee,E.textContent=`${ee+1} / ${v.length}`,x.textContent=v[ee].dataset.stop,S.style.width="0%",G(v[ee],()=>{let xe=s?0:Math.max(0,v[ee].offsetHeight-window.innerHeight*1.2),ye=z+xe/window.innerHeight*3200,Ue=window.scrollY;D.left=ye;let Ge=performance.now(),Ne=Ye=>{if(!D.on)return;D.paused||(D.left-=Ye-Ge),Ge=Ye;let tt=Math.min(1,1-D.left/ye);xe>0&&(q.style.scrollBehavior="auto",window.scrollTo(0,Ue+xe*(tt<.5?2*tt*tt:1-(-2*tt+2)**2/2))),S.style.width=`${tt*100}%`,D.left<=0?(xe>0&&(q.style.scrollBehavior=""),ue(ee+1)):D.raf=requestAnimationFrame(Ne)};D.raf=requestAnimationFrame(Ne)})}},ce=function(){D.on=!0,D.paused=!1,T.hidden=!1,L.textContent="Pause",ae.textContent="Stop the tour",ae.setAttribute("aria-pressed","true"),ue(0)},Ee=function(){D.on=!1,cancelAnimationFrame(D.raf),T.hidden=!0,ae.textContent="Play the tour",ae.setAttribute("aria-pressed","false")},i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=(ee,xe)=>{try{if(xe===void 0)return localStorage.getItem(ee);xe===null?localStorage.removeItem(ee):localStorage.setItem(ee,xe)}catch{}return null},t=new URLSearchParams(location.search).get("motion");(t==="on"||t==="off")&&e("motion",t==="on"?"on":null);let n=i&&e("motion")==="on",s=i&&!n;if(document.documentElement.classList.add("js"),document.documentElement.classList.toggle("motion-on",n),i){let ee=document.createElement("button");ee.className="btn icon-btn",ee.id="motionBtn",ee.type="button",ee.setAttribute("aria-label","Animations"),ee.setAttribute("aria-pressed",String(n)),ee.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/><path class="mo-off" d="M3 3l18 18"/></svg>',ee.addEventListener("click",()=>{e("motion",n?null:"on"),location.reload()}),document.getElementById("soundBtn")?.before(ee)}let r={world:{inside:"globe",ax:.66,ay:.5,max:.5,may:.66,az:0,el:0,zoom:.72,mzoom:.95,bg:"#16123A"},top:{ax:.77,ay:.54,max:.5,may:.8,az:-.5,el:.12,zoom:1.12,mzoom:1.4,screen:"hello",bg:"#FFE14D"},teardown:{inside:"teardown",ax:.5,ay:.52,max:.5,may:.5,az:.22,el:.08,zoom:.62,mzoom:.9,bg:"#9FF2C8"},challenge:{ax:.27,ay:.52,max:.5,may:.28,az:.42,el:.3,zoom:1.2,mzoom:1.3,screen:"grid100",crowd:1,bg:"#FF9ECF"},method:{inside:"funnel",ax:.72,ay:.5,max:.5,may:.28,az:-.2,el:.28,zoom:1.05,crowd:1,bg:"#B7A3FF"},mint:{inside:"mint",ax:.27,ay:.5,max:.5,may:.28,az:.32,el:.1,zoom:1,bg:"#FF8F8F"},zorin:{inside:"zorin",ax:.73,ay:.5,max:.5,may:.28,az:-.32,el:.1,zoom:1,bg:"#FFB07A"},endless:{inside:"endless",ax:.27,ay:.5,max:.5,may:.28,az:.32,el:.1,zoom:1,bg:"#7CC8FF"},scores:{inside:"scores",ax:.83,ay:.5,max:.5,may:.28,az:-.45,el:.22,zoom:1.38,mzoom:1.1,bg:"#C8EE5A"},energy:{inside:"energy",ax:.27,ay:.5,max:.5,may:.28,az:.45,el:.18,zoom:1.05,bg:"#6EE2D0"},access:{inside:"access",ax:.74,ay:.5,max:.5,may:.28,az:-.3,el:.12,zoom:1,bg:"#FF9ECF"},pick:{inside:"pick",ax:.72,ay:.5,max:.5,may:.28,az:-.15,el:.16,zoom:1,bg:"#B7A3FF",confetti:!0},install:{inside:"install",ax:.66,ay:.5,max:.5,may:.34,az:.1,el:.12,zoom:.95,mzoom:1.22,bg:"#5CE1E6"},plan:{ax:.27,ay:.5,max:.5,may:.28,az:.45,el:.3,zoom:1.2,mzoom:1.3,screen:"usb",crowd:1,lit:1,bg:"#FFE14D"},bonus:{inside:"mainframe",ax:.27,ay:.52,max:.5,may:.28,az:.35,el:.16,zoom:1.05,bg:"#A6C8FF"},end:{ax:.72,ay:.52,max:.5,may:.28,az:-.4,el:.22,zoom:1.15,mzoom:1.3,screen:"smile",crowd:1,lit:1,bg:"#FFE14D",confetti:!0}},o=[...document.querySelectorAll("[data-scene]")],a=document.getElementById("stage"),c=null;try{let ee=document.createElement("canvas");if(!(ee.getContext("webgl2")||ee.getContext("webgl")))throw new Error("no webgl");let xe=document.querySelector(".nav");c=dp(a,r,o,{reduceMotion:s,flash:document.getElementById("flash"),burst:document.getElementById("burst"),onBg:ye=>{if(document.body.style.backgroundColor=ye,!xe)return;xe.style.backgroundColor=ye;let Ue=parseInt(ye.slice(1),16),Ge=(.2126*(Ue>>16)+.7152*(Ue>>8&255)+.0722*(Ue&255))/255;xe.classList.toggle("on-dark",Ge<.35)}}),document.fonts?.ready.then(()=>c.redrawText())}catch(ee){console.error("stage failed",ee?.stack||ee),document.documentElement.classList.add("no-webgl")}yp(c,{reduceMotion:s});let l=document.getElementById("top");if(l&&"IntersectionObserver"in window){let ee=new IntersectionObserver(xe=>{xe.some(ye=>ye.isIntersecting)&&(l.classList.add("seen"),c?.replayStickers?.(),ee.disconnect())},{threshold:.45});ee.observe(l)}else l?.classList.add("seen");let h=document.querySelector("[data-count]");if(h&&!s){let ee=new IntersectionObserver(xe=>{if(!xe[0].isIntersecting)return;ee.disconnect();let ye=Number(h.dataset.count),Ue=performance.now(),Ge=Ne=>{let Ye=Math.min(1,(Ne-Ue)/1100);h.textContent=String(Math.round(ye*(1-(1-Ye)**3))),Ye<1&&requestAnimationFrame(Ge)};requestAnimationFrame(Ge)},{threshold:.6});ee.observe(h)}let f=[...document.querySelectorAll(".links a")],d=new IntersectionObserver(ee=>{for(let xe of ee){if(!xe.isIntersecting)continue;let ye=xe.target.closest("[data-nav]")?.dataset.nav;f.forEach(Ue=>Ue.toggleAttribute("aria-current",Ue.getAttribute("href")==="#"+ye))}},{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("[data-nav]").forEach(ee=>d.observe(ee));let u=[{key:"mint",name:"Linux Mint"},{key:"zorin",name:"Zorin OS Lite"},{key:"endless",name:"Endless OS"}],p=[{id:"easy",label:"Easy to learn",s:[4,4,5]},{id:"offline",label:"Works offline",s:[2,2,5]},{id:"energy",label:"Low energy",s:[3,5,2]},{id:"access",label:"Accessibility",s:[4,3,4]},{id:"future",label:"Future updates",s:[5,2,4]}],_={equal:[1,1,1,1,1],offline:[1,3,1,1,1],power:[1,1,3,1,1],long:[1,1,1,1,3]},g=[..._.equal],m=document.getElementById("scoreTable"),M=(ee,xe)=>Array.from({length:5},(ye,Ue)=>`<i class="sq${Ue<ee?" on":""}" data-os="${xe}"></i>`).join("");m.innerHTML=`<div class="srow shead"><span>Criterion</span><span>How much it matters</span>${u.map(ee=>`<span class="h-${ee.key}">${ee.name}</span>`).join("")}</div>`+p.map((ee,xe)=>`<div class="srow">
      <span class="crit">${ee.label}</span>
      <label class="weight"><span class="vh">How much ${ee.label.toLowerCase()} matters</span>
        <input type="range" min="0" max="3" step="1" value="1" id="w-${ee.id}" data-row="${xe}">
        <output id="o-${ee.id}">\xD71</output></label>
      ${ee.s.map((ye,Ue)=>`<span class="cell" aria-label="${u[Ue].name}: ${ye} out of 5"><b class="mob">${u[Ue].name}</b>${M(ye,u[Ue].key)}</span>`).join("")}
    </div>`).join("")+`<div class="srow stot"><span class="crit">Total</span><span class="weight" id="maxNote"></span>${u.map(ee=>`<span class="cell tot" id="t-${ee.key}"></span>`).join("")}</div>`,m.addEventListener("input",ee=>{let xe=ee.target.dataset.row;xe!==void 0&&(g[Number(xe)]=Number(ee.target.value),document.querySelectorAll(".presets button").forEach(ye=>ye.setAttribute("aria-pressed","false")),b())}),document.querySelectorAll(".presets button").forEach(ee=>{ee.addEventListener("click",()=>{_[ee.dataset.preset].forEach((xe,ye)=>{g[ye]=xe}),document.querySelectorAll(".presets button").forEach(xe=>xe.setAttribute("aria-pressed",String(xe===ee))),b()})}),b();let v=[...document.querySelectorAll("[data-stop]")],T=document.getElementById("tourbar"),E=document.getElementById("tbStep"),x=document.getElementById("tbName"),S=document.getElementById("tbFill"),L=document.getElementById("tbPause"),R=()=>document.querySelector(".nav").offsetHeight,D={on:!1,paused:!1,i:0,left:0,raf:0,scrolling:!1},z=6500,q=document.documentElement,F=ee=>{let xe=0;for(let ye=ee;ye;ye=ye.offsetParent)xe+=ye.offsetTop;return Math.round(xe-R())},N=0,ie=[...document.querySelectorAll("[data-tour-start]")],ae=document.getElementById("tourBtn");ie.forEach(ee=>ee.addEventListener("click",ce)),ae.addEventListener("click",()=>D.on?Ee():ce()),L.addEventListener("click",()=>{D.paused=!D.paused,L.textContent=D.paused?"Resume":"Pause"}),document.getElementById("tbStop").addEventListener("click",Ee);let Le=ee=>{D.on&&(ee.target.closest&&ee.target.closest(".tourbar, .nav")||Ee())};window.addEventListener("wheel",Le,{passive:!0}),window.addEventListener("touchstart",Le,{passive:!0}),window.addEventListener("keydown",ee=>{D.on&&(ee.key==="ArrowRight"||ee.key==="PageDown"?(ee.preventDefault(),cancelAnimationFrame(D.raf),D.scrolling||ue(D.i+1)):ee.key==="ArrowLeft"||ee.key==="PageUp"?(ee.preventDefault(),cancelAnimationFrame(D.raf),D.scrolling||ue(Math.max(0,D.i-1))):(ee.key==="Escape"||["ArrowDown","ArrowUp","Home","End"].includes(ee.key))&&Ee())});let oe=0,be=-1;window.addEventListener("wheel",()=>{oe++,be=-1},{passive:!0}),window.addEventListener("keydown",ee=>{if(D.on||ee.defaultPrevented||ee.metaKey||ee.ctrlKey||ee.altKey||ee.target.closest?.("input,textarea,select,[contenteditable]")||q.classList.contains("osv-lock"))return;if(ee.key==="f"||ee.key==="F"){document.fullscreenElement?document.exitFullscreen?.():q.requestFullscreen?.().catch(()=>{});return}let xe=ee.key==="PageDown"||ee.key==="ArrowRight",ye=ee.key==="PageUp"||ee.key==="ArrowLeft";if(!xe&&!ye)return;ee.preventDefault();let Ue=window.scrollY,Ge=window.innerHeight,Ne=[];v.forEach(fe=>{let Re=F(fe);if(Ne.push(Re),fe.offsetHeight>Ge*1.6)for(let we=Re+Ge*.6;we<Re+fe.offsetHeight-Ge*.9;we+=Ge*.6)Ne.push(Math.round(we))});let Ye;if(be>=0)Ye=Math.max(0,Math.min(Ne.length-1,be+(xe?1:-1)));else{let fe=-1;Ne.forEach((Re,we)=>{Re<=Ue+4&&(fe=we)}),Ye=xe?Math.min(Ne.length-1,fe+1):fe>=0&&Ue>Ne[fe]+4?fe:Math.max(0,fe-1)}let tt=++oe;be=Ye,W(Ne[Ye],()=>{tt===oe&&(be=-1)},()=>tt===oe)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
