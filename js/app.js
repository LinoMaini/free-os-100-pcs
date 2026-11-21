(()=>{var _u=0,Ec=1,xu=2;var sa=1,vu=2,ar=3,ji=0,dn=1,Xn=2,xs=0,or=1,wc=2,Tc=3,Ac=4,yu=5;var vs=100,Mu=101,Su=102,bu=103,Eu=104,wu=200,Tu=201,Au=202,Ru=203,Rc=204,Cc=205,Cu=206,Iu=207,Pu=208,Lu=209,Du=210,Nu=211,Fu=212,Uu=213,Ou=214,Ya=0,Za=1,$a=2,Zs=3,Ja=4,Ka=5,Qa=6,ja=7,Ic=0,Bu=1,zu=2,ui=0,Pc=1,Lc=2,Dc=3,Nc=4,Fc=5,Uc=6,Oc=7;var Bc=300,ys=301,lr=302,Po=303,Lo=304,eo=1e3,oi=1001,to=1002,en=1003,ku=1004;var ra=1005;var wn=1006,Do=1007;var Ai=1008;var Cn=1009,zc=1010,kc=1011,cr=1012,No=1013,ii=1014,qn=1015,si=1016,Fo=1017,Uo=1018,Ms=1020,Hc=35902,Gc=35899,Vc=1021,Wc=1022,ri=1023,bi=1026,Ri=1027,hr=1028,Oo=1029,es=1030,Bo=1031;var zo=1033,aa=33776,oa=33777,la=33778,ca=33779,ko=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ha=37490,$o=37491,Jo=37808,Ko=37809,Qo=37810,jo=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,ua=36285,ml=36286;var Pr=2300,no=2301,Xa=2302,dc=2303,fc=2400,pc=2401,mc=2402;var Hu=3200;var gl=0,Gu=1,Ci="",qt="srgb",Lr="srgb-linear",Dr="linear",Nt="srgb";var qa=7680;var Vu=519,Wu=512,Xu=513,qu=514,Xc=515,Yu=516,Zu=517,qc=518,Yc=519,$u=35044;var Zc="300 es",Hn=2e3,$s=2001;function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Nr("canvas");return i.style.display="block",i}var Bh={},Js=null;function $c(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function Ku(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=Ku(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Ku(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Rr(...i){let e=i.join(" ");e in Bh||(Bh[e]=!0,it(...i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju={[Ya]:Ya,[$a]:Qa,[Ja]:Ja,[Zs]:Ka,[Za]:Za,[Qa]:$a,[ja]:ja,[Ka]:Zs},li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hl=Math.PI/180,io=180/Math.PI;function ur(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function cf(i,e){return(i%e+e)%e}function Gl(i,e,t){return(1-t)*i+t*e}function ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hf(i,e){if(e.constructor===Float32Array)return i;let t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function uf(i,e){if(e.constructor===Float32Array)return i;let t=Jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var nh=class nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;var we=nh,ci=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*x;g<0&&(u=-u,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),b=Math.sin(v);p=Math.sin(p*v)/b,o=Math.sin(o*v)/b,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var z=ih,Vl=new z,zh=new ci,sh=class sh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],b=s[4],y=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*x+o*v+l*A,r[3]=a*g+o*b+l*w,r[6]=a*p+o*y+l*_,r[1]=c*x+h*v+f*A,r[4]=c*g+h*b+f*w,r[7]=c*p+h*y+f*_,r[2]=u*x+d*v+m*A,r[5]=u*g+d*b+m*w,r[8]=u*p+d*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var dt=sh,Wl=new dt,kh=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Nt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:kh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var wt=df();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ds===void 0&&(Ds=Nr("canvas")),Ds.width=e.width,Ds.height=e.height;let s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var pf=0,ql=new z,Tn=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=wn,a=Ai,o=ri,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ur(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Bc;Tn.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(d+1)/2,A=(p+1)/2,w=(h+u)/4,_=(f+x)/4,S=(m+g)/4;return b>y&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=_/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=S/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var Bt=rh,ro=class extends li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fr=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends Tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Io=class Io{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Io().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,m=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,m=c*h,x=c*f;t[0]=u+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,m=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,m=o*h,x=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),zi.crossVectors(n,Dn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),zi.crossVectors(n,Dn)),zi.normalize(),Sa.crossVectors(Dn,zi),s[0]=zi.x,s[4]=Sa.x,s[8]=Dn.x,s[1]=zi.y,s[5]=Sa.y,s[9]=Dn.y,s[2]=zi.z,s[6]=Sa.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],b=n[7],y=n[11],A=n[15],w=s[0],_=s[4],S=s[8],L=s[12],T=s[1],P=s[5],U=s[9],N=s[13],R=s[2],I=s[6],F=s[10],B=s[14],X=s[3],H=s[7],W=s[11],K=s[15];return r[0]=a*w+o*T+l*R+c*X,r[4]=a*_+o*P+l*I+c*H,r[8]=a*S+o*U+l*F+c*W,r[12]=a*L+o*N+l*B+c*K,r[1]=h*w+f*T+u*R+d*X,r[5]=h*_+f*P+u*I+d*H,r[9]=h*S+f*U+u*F+d*W,r[13]=h*L+f*N+u*B+d*K,r[2]=m*w+x*T+g*R+p*X,r[6]=m*_+x*P+g*I+p*H,r[10]=m*S+x*U+g*F+p*W,r[14]=m*L+x*N+g*B+p*K,r[3]=v*w+b*T+y*R+A*X,r[7]=v*_+b*P+y*I+A*H,r[11]=v*S+b*U+y*F+A*W,r[15]=v*L+b*N+y*B+A*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=l*d-c*u,b=o*d-c*f,y=o*u-l*f,A=a*d-c*h,w=a*u-l*h,_=a*f-o*h;return t*(x*v-g*b+p*y)-n*(m*v-g*A+p*w)+s*(m*b-x*A+p*_)-r*(m*y-x*w+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-n*a,b=t*l-s*a,y=t*c-r*a,A=n*l-s*o,w=n*c-r*o,_=s*c-r*l,S=h*x-f*m,L=h*g-u*m,T=h*p-d*m,P=f*g-u*x,U=f*p-d*x,N=u*p-d*g,R=v*N-b*U+y*P+A*T-w*L+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=(o*N-l*U+c*P)*I,e[1]=(s*U-n*N-r*P)*I,e[2]=(x*_-g*w+p*A)*I,e[3]=(u*w-f*_-d*A)*I,e[4]=(l*T-a*N-c*L)*I,e[5]=(t*N-s*T+r*L)*I,e[6]=(g*y-m*_-p*b)*I,e[7]=(h*_-u*y+d*b)*I,e[8]=(a*U-o*T+c*S)*I,e[9]=(n*T-t*U-r*S)*I,e[10]=(m*w-x*y+p*v)*I,e[11]=(f*y-h*w-d*v)*I,e[12]=(o*L-a*P-l*S)*I,e[13]=(t*P-n*L+s*S)*I,e[14]=(x*b-m*A-g*v)*I,e[15]=(h*A-f*b+u*v)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,x=a*h,g=a*f,p=o*f,v=l*c,b=l*h,y=l*f,A=n.x,w=n.y,_=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+y)*A,s[2]=(m-b)*A,s[3]=0,s[4]=(d-y)*w,s[5]=(1-(u+p))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(m+b)*_,s[9]=(g-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ns.set(s[0],s[1],s[2]).length(),o=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);let c=1/a,h=1/o,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Hn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$s)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Hn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Hn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===$s)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Io.prototype.isMatrix4=!0;var Ft=Io,Ns=new z,jn=new Ft,mf=new z(0,0,0),gf=new z(1,1,1),zi=new z,Sa=new z,Dn=new z,Gh=new Ft,Vh=new ci,Xi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_f=0,Wh=new z,Fs=new ci,_i=new Ft,ba=new z,Mr=new z,xf=new z,vf=new ci,Xh=new z(1,0,0),qh=new z(0,1,0),Yh=new z(0,0,1),Zh={type:"added"},yf={type:"removed"},Us={type:"childadded",child:null},Yl={type:"childremoved",child:null},Jt=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Xi,n=new ci,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new dt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Xh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Wh.copy(e).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Mr,ba,this.up):_i.lookAt(ba,Mr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(_i),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),Us.child=e,this.dispatchEvent(Us),Us.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=cf(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zl(a,r,e+1/3),this.g=Zl(a,r,e),this.b=Zl(a,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return wt.workingToColorSpace(gn.copy(this),e),Math.round(St(gn.r*255,0,255))*65536+Math.round(St(gn.g*255,0,255))*256+Math.round(St(gn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=qt){wt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ea);let n=Gl(ki.h,Ea.h,t),s=Gl(ki.s,Ea.s,t),r=Gl(ki.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new qe;qe.NAMES=td;var qi=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ei=new z,xi=new z,$l=new z,vi=new z,Os=new z,Bs=new z,$h=new z,Jl=new z,Kl=new z,Ql=new z,jl=new Bt,ec=new Bt,tc=new Bt,Wi=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),xi.subVectors(n,t),$l.subVectors(e,t);let a=ei.dot(ei),o=ei.dot(xi),l=ei.dot($l),c=xi.dot(xi),h=xi.dot($l),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return jl.setScalar(0),ec.setScalar(0),tc.setScalar(0),jl.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(jl,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(tc,r.z),a}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),xi.subVectors(e,t),ei.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ei.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),Bs.subVectors(r,n),Jl.subVectors(e,n);let l=Os.dot(Jl),c=Bs.dot(Jl);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,s);let h=Os.dot(Kl),f=Bs.dot(Kl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Os,a);Ql.subVectors(e,r);let d=Os.dot(Ql),m=Bs.dot(Ql);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Bs,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return $h.subVectors(r,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector($h,o);let p=1/(g+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Ta.subVectors(this.max,Sr),zs.subVectors(e.a,Sr),ks.subVectors(e.b,Sr),Hs.subVectors(e.c,Sr),Hi.subVectors(ks,zs),Gi.subVectors(Hs,ks),cs.subVectors(zs,Hs);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-cs.z,cs.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,cs.z,0,-cs.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-cs.y,cs.x,0];return!nc(t,zs,ks,Hs,Ta)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,zs,ks,Hs,Ta))?!1:(Aa.crossVectors(Hi,Gi),t=[Aa.x,Aa.y,Aa.z],nc(t,zs,ks,Hs,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new z,new z,new z,new z,new z,new z,new z,new z],ti=new z,wa=new Gn,zs=new z,ks=new z,Hs=new z,Hi=new z,Gi=new z,cs=new z,Sr=new z,Ta=new z,Aa=new z,hs=new z;function nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){hs.fromArray(i,r);let o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jt=new z,Ra=new we,Sf=0,Un=class extends li{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Jc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):uf(e,this.array)}};var Ur=class extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}},bf=new Gn,br=new z,ic=new z,Yi=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(ic)),this.expandByPoint(br.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ef=0,kn=new Ft,sc=new Jt,Gs=new z,Nn=new Gn,Er=new Gn,cn=new z,un=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?Or:Ur)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Nn.min,Er.min),Nn.expandByPoint(cn),cn.addVectors(Nn.max,Er.max),Nn.expandByPoint(cn)):(Nn.expandByPoint(Er.min),Nn.expandByPoint(Er.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)cn.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),cn.add(Gs)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new z,l[L]=new z;let h=new z,f=new z,u=new z,d=new we,m=new we,x=new we,g=new z,p=new z;function v(L,T,P){c[L]=c[T]=c[P]=1,h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,P),f.sub(h),u.sub(h),m.sub(d),x.sub(d);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(U),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(U),o[L].add(g),o[T].add(g),o[P].add(g),l[L].add(p),l[T].add(p),l[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,T=b.length;L<T;++L){let P=b[L],U=P.start,N=P.count;for(let R=U,I=U+N;R<I;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new z,A=new z,w=new z,_=new z;function S(L){w.fromBufferAttribute(s,L),_.copy(w);let T=o[L];y.copy(T),y.sub(w.multiplyScalar(w.dot(T))).normalize(),A.crossVectors(_,T);let U=A.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,U)}for(let L=0,T=n.count;L<T;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new Un(u,h,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rc=new z,wf=new z,Tf=new dt,Fn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rc.subVectors(n,t).cross(wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tf.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Af=0,Zi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=or,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Mi=new z,ac=new z,Ca=new z,Ia=new z,Br=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ia.dot(this.direction),l=-Ia.dot(Ca),c=Ia.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ac).addScaledVector(Ca,u),d}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,b=n.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(h),_,S,L,T,P,U,N,R,I,F,B,X;if(y>=A&&y>=w?(L=l,U=f,I=m,X=p,l>=0?(_=c,S=h,T=u,P=d,N=x,R=g,F=v,B=b):(_=h,S=c,T=d,P=u,N=g,R=x,F=b,B=v)):A>=w?(L=c,U=u,I=x,X=v,c>=0?(_=h,S=l,T=d,P=f,N=g,R=m,F=b,B=p):(_=l,S=h,T=f,P=d,N=m,R=g,F=p,B=b)):(L=h,U=d,I=g,X=b,h>=0?(_=l,S=c,T=f,P=u,N=m,R=x,F=p,B=v):(_=c,S=l,T=u,P=f,N=x,R=m,F=v,B=p)),L===0)return null;let H=_/L,W=S/L,K=1/L,le=T-H*U,me=P-W*U,D=N-H*I,ee=R-W*I,ue=F-H*X,xe=B-W*X,he=ue*ee-xe*D,Se=le*xe-me*ue,et=D*me-ee*le;if(s){if(he<0||Se<0||et<0)return null}else if((he<0||Se<0||et<0)&&(he>0||Se>0||et>0))return null;let Pe=he+Se+et;if(Pe===0)return null;let Ve=K*(he*U+Se*I+et*X);return(Pe>0?Ve<0:Ve>0)?null:this.at(Ve/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new Ft,us=new Br,Pa=new Yi,Kh=new z,La=new z,Da=new z,Na=new z,oc=new z,Fa=new z,Qh=new z,Ua=new z,lt=class extends Jt{constructor(e=new un,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(oc.fromBufferAttribute(f,e),a?Fa.addScaledVector(oc,h):Fa.addScaledVector(oc.sub(t),h))}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Pa.containsPoint(us.origin)===!1&&(us.intersectSphere(Pa,Kh)===null||us.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),us.copy(e.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=b;y<A;y+=3){let w=o.getX(y),_=o.getX(y+1),S=o.getX(y+2);s=Oa(this,p,e,n,c,h,f,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Oa(this,a,e,n,c,h,f,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,A=b;y<A;y+=3){let w=y,_=y+1,S=y+2;s=Oa(this,p,e,n,c,h,f,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,b=g+1,y=g+2;s=Oa(this,a,e,n,c,h,f,v,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Rf(i,e,t,n,s,r,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ji,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let h=Rf(i,e,t,n,La,Da,Na,Qh);if(h){let f=new z;Wi.getBarycoord(Qh,La,Da,Na,f),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,f,new we)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,f,new we)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};Wi.getNormal(La,Da,Na,u.normal),h.face=u,h.barycoord=f}return h}var ps=class extends Tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=en,h=en,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends Un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new Ft,jh=new Ft,Ba=[],eu=new Gn,Cf=new Ft,wr=new lt,Tr=new Yi,Ot=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),eu.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Tr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),e.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),jh.multiplyMatrices(n,Vs),wr.matrixWorld=jh,wr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let l=Ba[a];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ps(new Float32Array(s*this.count),s,this.count,hr,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new Yi,If=new we(.5,.5),za=new z,$i=class{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],b=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,p-m,A-v).normalize(),s[1].setComponents(c+a,d+h,p+m,A+v).normalize(),s[2].setComponents(c+o,d+f,p+x,A+b).normalize(),s[3].setComponents(c-o,d-f,p-x,A-b).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,p-g,A-y).normalize();else if(s[4].setComponents(c-l,d-u,p-g,A-y).normalize(),t===Hn)s[5].setComponents(c+l,d+u,p+g,A+y).normalize();else if(t===$s)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=If.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tu=new Ft,oo=class i{constructor(){this.coordinateSystem=Hn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new $i),n[s].setFromProjectionMatrix(tu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new $i),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var zr=class extends Tn{constructor(e=[],t=ys,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends Tn{constructor(e,t,n=ii,s,r,a,o=en,l=en,c,h=bi,f=1){if(h!==bi&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},kr=class extends Ei{constructor(e,t=ii,n=ys,s,r,a=en,o=en,l,c=bi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hr=class extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},hi=class i extends un{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function m(x,g,p,v,b,y,A,w,_,S,L){let T=y/_,P=A/S,U=y/2,N=A/2,R=w/2,I=_+1,F=S+1,B=0,X=0,H=new z;for(let W=0;W<F;W++){let K=W*P-N;for(let le=0;le<I;le++){let me=le*T-U;H[x]=me*v,H[g]=K*b,H[p]=R,c.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[p]=w>0?1:-1,h.push(H.x,H.y,H.z),f.push(le/_),f.push(1-W/S),B+=1}}for(let W=0;W<S;W++)for(let K=0;K<_;K++){let le=u+K+I*W,me=u+K+I*(W+1),D=u+(K+1)+I*(W+1),ee=u+(K+1)+I*W;l.push(le,me,ee),l.push(me,D,ee),X+=6}o.addGroup(d,X,L),d+=X,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Gr=class i extends un{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,m=n*2+r,x=s+1,g=new z,p=new z;for(let v=0;v<=m;v++){let b=0,y=0,A=0,w=0;if(v<=n){let L=v/n,T=L*Math.PI/2;y=-h-e*Math.cos(T),A=e*Math.sin(T),w=-e*Math.cos(T),b=L*f}else if(v<=n+r){let L=(v-n)/r;y=-h+L*t,A=e,w=0,b=f+L*u}else{let L=(v-n-r)/n,T=L*Math.PI/2;y=h+e*Math.sin(T),A=e*Math.cos(T),w=e*Math.sin(T),b=f+u+L*f}let _=Math.max(0,Math.min(1,b/d)),S=0;v===0?S=.5/s:v===m&&(S=-.5/s);for(let L=0;L<=s;L++){let T=L/s,P=T*Math.PI*2,U=Math.sin(P),N=Math.cos(P);p.x=-A*N,p.y=y,p.z=A*U,o.push(p.x,p.y,p.z),g.set(-A*N,w,A*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(T+S,_)}if(v>0){let L=(v-1)*x;for(let T=0;T<s;T++){let P=L+T,U=L+T+1,N=v*x+T,R=v*x+T+1;a.push(P,U,N),a.push(U,R,N)}}}this.setIndex(a),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},wi=class i extends un{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new z,h=new we;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},hn=class i extends un{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(d,2));function v(){let y=new z,A=new z,w=0,_=(t-e)/n;for(let S=0;S<=r;S++){let L=[],T=S/r,P=T*(t-e)+e;for(let U=0;U<=s;U++){let N=U/s,R=N*l+o,I=Math.sin(R),F=Math.cos(R);A.x=P*I,A.y=-T*n+g,A.z=P*F,f.push(A.x,A.y,A.z),y.set(I,_,F).normalize(),u.push(y.x,y.y,y.z),d.push(N,1-T),L.push(m++)}x.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let T=x[L][S],P=x[L+1][S],U=x[L+1][S+1],N=x[L][S+1];(e>0||L!==0)&&(h.push(T,P,N),w+=3),(t>0||L!==r-1)&&(h.push(P,U,N),w+=3)}c.addGroup(p,w,0),p+=w}function b(y){let A=m,w=new we,_=new z,S=0,L=y===!0?e:t,T=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,g*T,0),u.push(0,T,0),d.push(.5,.5),m++;let P=m;for(let U=0;U<=s;U++){let R=U/s*l+o,I=Math.cos(R),F=Math.sin(R);_.x=L*F,_.y=g*T,_.z=L*I,f.push(_.x,_.y,_.z),u.push(0,T,0),w.x=I*.5+.5,w.y=F*.5*T+.5,d.push(w.x,w.y),m++}for(let U=0;U<s;U++){let N=A+U,R=P+U;y===!0?h.push(R,R+1,N):h.push(R+1,R,N),S+=3}c.addGroup(p,S,y===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ti=class i extends hn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Ft;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(St(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(St(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},tr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends tr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var nu=new z,iu=new z,lc=new Kc,cc=new Kc,hc=new Kc,co=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(iu.subVectors(s[0],s[1]).add(s[0]),c=iu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),lc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,g),cc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,g),hc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),cc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),hc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function su(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pf(i,e){let t=1-i;return t*t*e}function Lf(i,e){return 2*(1-i)*i*e}function Df(i,e){return i*i*e}function Cr(i,e,t,n){return Pf(i,e)+Lf(i,t)+Df(i,n)}function Nf(i,e){let t=1-i;return t*t*t*e}function Ff(i,e){let t=1-i;return 3*t*t*i*e}function Uf(i,e){return 3*(1-i)*i*i*e}function Of(i,e){return i*i*i*e}function Ir(i,e,t,n,s){return Nf(i,e)+Ff(i,t)+Uf(i,n)+Of(i,s)}var Vr=class extends On{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends On{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y),Ir(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wr=class extends On{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends On{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends On{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends On{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,s.x,r.x,a.x),Cr(e,s.y,r.y,a.y),Cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(su(o,l.x,c.x,h.x,f.x),su(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},gc=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:co,CubicBezierCurve:Vr,CubicBezierCurve3:ho,EllipseCurve:tr,LineCurve:Wr,LineCurve3:uo,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:fo,SplineCurve:qr}),po=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new gc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Yr=class extends po{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wr(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xr(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Vr(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new tr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ms=class extends Yr{constructor(e){super(e),this.uuid=ur(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Yr().fromJSON(s))}return this}};function Bf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=nd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Zr(r,a,t,o,l,c,0),a}function nd(i,e,t,n,s){let r;if(s===ep(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ru(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ru(a/n|0,i[a],i[a+1],r);return r&&nr(r,r.next)&&(Jr(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Zr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Zf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?kf(i,n,s,r):zf(i)){e.push(l.i,i.i,c.i),Jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Hf(gs(i),e),Zr(i,e,t,n,s,r,2)):a===2&&Gf(i,e,t,n,s,r):Zr(gs(i),e,t,n,s,r,1);break}}}function zf(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ar(s,o,r,l,a,c,m.x,m.y)&&Wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function kf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),m=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),p=_c(d,m,e,t,n),v=_c(x,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Ar(o,h,l,f,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ar(o,h,l,f,c,u,y.x,y.y)&&Wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Ar(o,h,l,f,c,u,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Ar(o,h,l,f,c,u,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Hf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!nr(n,s)&&sd(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Jr(t),Jr(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function Gf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kf(a,o)){let l=rd(a,o);a=gs(a,a.next),l=gs(l,l.next),Zr(a,e,t,n,s,r,0),Zr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=nd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jf(c))}s.sort(Wf);for(let r=0;r<s.length;r++)t=Xf(s[r],t);return t}function Wf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Xf(i,e){let t=qf(i,e);if(!t)return e;let n=rd(t,i);return gs(n,n.next),gs(t,t.next)}function qf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(nr(i,t))return t;do{if(nr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&id(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Yf(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Yf(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Zf(i,e,t,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$f(s)}function $f(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _c(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function id(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ar(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&id(i,e,t,n,s,r,a,o)}function Kf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qf(i,e)&&($r(i,e)&&$r(e,i)&&jf(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||nr(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nr(i,e){return i.x===e.x&&i.y===e.y}function sd(i,e,t,n){let s=Ha(Wt(i,e,t)),r=Ha(Wt(i,e,n)),a=Ha(Wt(t,n,i)),o=Ha(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&ka(i,t,e)||r===0&&ka(i,n,e)||a===0&&ka(t,i,n)||o===0&&ka(t,e,n))}function ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function Qf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function jf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rd(i,e){let t=xc(i.i,i.x,i.y),n=xc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ru(i,e,t,n){let s=xc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ep(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vc=class{static triangulate(e,t,n=2){return Bf(e,t,n)}},fs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];au(e),ou(n,e);let a=e.length;t.forEach(au);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ou(n,t[l]);let o=vc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ir=class i extends un{constructor(e=new ms([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Rt(s,3)),this.setAttribute("uv",new Rt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:tp,b,y=!1,A,w,_,S;if(p){b=p.getSpacedPoints(h),y=!0,u=!1;let re=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,re),w=new z,_=new z,S=new z}u||(g=0,d=0,m=0,x=0);let L=o.extractPoints(c),T=L.shape,P=L.holes;if(!fs.isClockWise(T)){T=T.reverse();for(let re=0,V=P.length;re<V;re++){let J=P[re];fs.isClockWise(J)&&(P[re]=J.reverse())}}function N(re){let J=10000000000000001e-36,ce=re[0];for(let q=1;q<=re.length;q++){let Le=q%re.length,De=re[Le],$e=De.x-ce.x,Ge=De.y-ce.y,ct=$e*$e+Ge*Ge,G=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(ce.x),Math.abs(ce.y)),Ht=J*G*G;if(ct<=Ht){re.splice(Le,1),q--;continue}ce=De}}N(T),P.forEach(N);let R=P.length,I=T;for(let re=0;re<R;re++){let V=P[re];T=T.concat(V)}function F(re,V,J){return V||ot("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(V,J)}let B=T.length;function X(re,V,J){let ce,q,Le,De=re.x-V.x,$e=re.y-V.y,Ge=J.x-re.x,ct=J.y-re.y,G=De*De+$e*$e,Ht=De*ct-$e*Ge;if(Math.abs(Ht)>Number.EPSILON){let pt=Math.sqrt(G),Tt=Math.sqrt(Ge*Ge+ct*ct),be=V.x-$e/pt,Dt=V.y+De/pt,Xe=J.x-ct/Tt,st=J.y+Ge/Tt,C=((Xe-be)*ct-(st-Dt)*Ge)/(De*ct-$e*Ge);ce=be+De*C-re.x,q=Dt+$e*C-re.y;let M=ce*ce+q*q;if(M<=2)return new we(ce,q);Le=Math.sqrt(M/2)}else{let pt=!1;De>Number.EPSILON?Ge>Number.EPSILON&&(pt=!0):De<-Number.EPSILON?Ge<-Number.EPSILON&&(pt=!0):Math.sign($e)===Math.sign(ct)&&(pt=!0),pt?(ce=-$e,q=De,Le=Math.sqrt(G)):(ce=De,q=$e,Le=Math.sqrt(G/2))}return new we(ce/Le,q/Le)}let H=[];for(let re=0,V=I.length,J=V-1,ce=re+1;re<V;re++,J++,ce++)J===V&&(J=0),ce===V&&(ce=0),H[re]=X(I[re],I[J],I[ce]);let W=[],K,le=H.concat();for(let re=0,V=R;re<V;re++){let J=P[re];K=[];for(let ce=0,q=J.length,Le=q-1,De=ce+1;ce<q;ce++,Le++,De++)Le===q&&(Le=0),De===q&&(De=0),K[ce]=X(J[ce],J[Le],J[De]);W.push(K),le=le.concat(K)}let me;if(g===0)me=fs.triangulateShape(I,P);else{let re=[],V=[];for(let J=0;J<g;J++){let ce=J/g,q=d*Math.cos(ce*Math.PI/2),Le=m*Math.sin(ce*Math.PI/2)+x;for(let De=0,$e=I.length;De<$e;De++){let Ge=F(I[De],H[De],Le);Se(Ge.x,Ge.y,-q),ce===0&&re.push(Ge)}for(let De=0,$e=R;De<$e;De++){let Ge=P[De];K=W[De];let ct=[];for(let G=0,Ht=Ge.length;G<Ht;G++){let pt=F(Ge[G],K[G],Le);Se(pt.x,pt.y,-q),ce===0&&ct.push(pt)}ce===0&&V.push(ct)}}me=fs.triangulateShape(re,V)}let D=me.length,ee=m+x;for(let re=0;re<B;re++){let V=u?F(T[re],le[re],ee):T[re];y?(_.copy(A.normals[0]).multiplyScalar(V.x),w.copy(A.binormals[0]).multiplyScalar(V.y),S.copy(b[0]).add(_).add(w),Se(S.x,S.y,S.z)):Se(V.x,V.y,0)}for(let re=1;re<=h;re++)for(let V=0;V<B;V++){let J=u?F(T[V],le[V],ee):T[V];y?(_.copy(A.normals[re]).multiplyScalar(J.x),w.copy(A.binormals[re]).multiplyScalar(J.y),S.copy(b[re]).add(_).add(w),Se(S.x,S.y,S.z)):Se(J.x,J.y,f/h*re)}for(let re=g-1;re>=0;re--){let V=re/g,J=d*Math.cos(V*Math.PI/2),ce=m*Math.sin(V*Math.PI/2)+x;for(let q=0,Le=I.length;q<Le;q++){let De=F(I[q],H[q],ce);Se(De.x,De.y,f+J)}for(let q=0,Le=P.length;q<Le;q++){let De=P[q];K=W[q];for(let $e=0,Ge=De.length;$e<Ge;$e++){let ct=F(De[$e],K[$e],ce);y?Se(ct.x,ct.y+b[h-1].y,b[h-1].x+J):Se(ct.x,ct.y,f+J)}}}ue(),xe();function ue(){let re=s.length/3;if(u){let V=0,J=B*V;for(let ce=0;ce<D;ce++){let q=me[ce];et(q[2]+J,q[1]+J,q[0]+J)}V=h+g*2,J=B*V;for(let ce=0;ce<D;ce++){let q=me[ce];et(q[0]+J,q[1]+J,q[2]+J)}}else{for(let V=0;V<D;V++){let J=me[V];et(J[2],J[1],J[0])}for(let V=0;V<D;V++){let J=me[V];et(J[0]+B*h,J[1]+B*h,J[2]+B*h)}}n.addGroup(re,s.length/3-re,0)}function xe(){let re=s.length/3,V=0;he(I,V),V+=I.length;for(let J=0,ce=P.length;J<ce;J++){let q=P[J];he(q,V),V+=q.length}n.addGroup(re,s.length/3-re,1)}function he(re,V){let J=re.length;for(;--J>=0;){let ce=J,q=J-1;q<0&&(q=re.length-1);for(let Le=0,De=h+g*2;Le<De;Le++){let $e=B*Le,Ge=B*(Le+1),ct=V+ce+$e,G=V+q+$e,Ht=V+q+Ge,pt=V+ce+Ge;Pe(ct,G,Ht,pt)}}}function Se(re,V,J){l.push(re),l.push(V),l.push(J)}function et(re,V,J){Ve(re),Ve(V),Ve(J);let ce=s.length/3,q=v.generateTopUV(n,s,ce-3,ce-2,ce-1);tt(q[0]),tt(q[1]),tt(q[2])}function Pe(re,V,J,ce){Ve(re),Ve(V),Ve(ce),Ve(V),Ve(J),Ve(ce);let q=s.length/3,Le=v.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);tt(Le[0]),tt(Le[1]),tt(Le[3]),tt(Le[1]),tt(Le[2]),tt(Le[3])}function Ve(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function tt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return np(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gc[s.type]().fromJSON(s)),new i(n,e.options)}},tp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new we(r,a),new we(o,l),new we(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new we(a,1-l),new we(c,1-f),new we(u,1-m),new we(x,1-p)]:[new we(o,1-l),new we(h,1-f),new we(d,1-m),new we(g,1-p)]}};function np(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Kr=class i extends un{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new z,u=new we,d=new z,m=new z,x=new z,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let v=0;v<=t;v++){let b=n+v*h*s,y=Math.sin(b),A=Math.cos(b);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*y,f.y=e[w].y,f.z=e[w].x*A,a.push(f.x,f.y,f.z),u.x=v/t,u.y=w/(e.length-1),o.push(u.x,u.y);let _=l[3*w+0]*y,S=l[3*w+1],L=l[3*w+0]*A;c.push(_,S,L)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){let y=b+v*e.length,A=y,w=y+e.length,_=y+e.length+1,S=y+1;r.push(A,w,S),r.push(_,S,w)}this.setIndex(r),this.setAttribute("position",new Rt(a,3)),this.setAttribute("uv",new Rt(o,2)),this.setAttribute("normal",new Rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var vn=class i extends un{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let b=0;b<c;b++){let y=b*f-r;m.push(y,-v,0),x.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let b=v+c*p,y=v+c*(p+1),A=v+1+c*(p+1),w=v+1+c*p;d.push(b,y,w),d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Vn=class i extends un{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new z,u=new z,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],b=p/n,y=a+b*o,A=e*Math.cos(y),w=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let L=S/t,T=s+L*r;f.x=-w*Math.cos(T),f.y=A,f.z=w*Math.sin(T),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(L+_,1-b),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let b=h[p][v+1],y=h[p][v],A=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&d.push(b,y,w),(p!==n-1||l<Math.PI)&&d.push(y,A,w)}this.setIndex(d),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wn=class i extends un{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new z,d=new z,m=new z;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=s;p++){let v=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let p=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,b=(s+1)*(x-1)+g,y=(s+1)*x+g;l.push(p,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lu(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let s in n)e[s]=n[s]}return e}function lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var ad={clone:Ss,merge:yn},sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sr=class extends Zi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var go=class extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pc:r=e,o=2*t-n;break;case mc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:a=e,l=2*n-t;break;case mc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,b=(-1-d)*g+(1.5+d)*x+.5*m,y=d*g-d*x;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+v*a[c+A]+b*a[l+A]+y*a[f+A];return r}},vo=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},yo=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends Ji{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let u=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=d*u+m*2,v=f[p],b=f[p+1],y=e*u+m*2,A=h[y],w=h[y+1],_=op(n,t,v,A,s);r[m]=od(_,x,b,w,g)}return r}};function od(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ap(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function op(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=od(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ap(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ga(e.settings)&&(n.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break;case dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ga(this.settings)&&(cu(this.settings.inTangents,e),cu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ga(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&lf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[u+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=no;var Ki=class extends Bn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Pr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var Eo=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Pr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="vector";var To=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new To,Ao=class{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var uc=new Ft,uu=new z,du=new z,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===$s||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Va=new z,Wa=new ci,ai=new z,ea=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Va,Wa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Va,Wa,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new z,fu=new we,pu=new we,_n=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var _s=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yc=class extends Ro{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},na=class extends jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xs=-90,qs=1,rr=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new _n(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new _n(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new _n(Xs,qs,e,t);o.layers=this.layers,this.add(o);let l=new _n(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new _n(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Co=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var jc="\\[\\]\\.:\\/",lp=new RegExp("["+jc+"]","g"),eh="[^"+jc+"]",cp="[^"+jc.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",eh),up=/(WCOD+)?/.source.replace("WCOD",cp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),fp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),pp=new RegExp("^"+hp+up+dp+fp+"$"),mp=["material","materials","bones","map"],Mc=class{constructor(e,t,n){let s=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(e){let t=pp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Mc;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var mu=new Ft,ia=class{constructor(e,t,n=0,s=1/0){this.ray=new Br(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,n=[]){return Sc(e,this,n,t),n.sort(gu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sc(e[s],this,n,t);return n.sort(gu),n}};function gu(i,e){return i.distance-e.distance}function Sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],e,t,!0)}}var ah=class ah{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ah.prototype.isMatrix2=!0;var bc=ah;function th(i,e,t,n){let s=gp(n);switch(t){case Vc:return i*e;case hr:return i*e/s.components*s.byteLength;case Oo:return i*e/s.components*s.byteLength;case es:return i*e*2/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:case Vo:return Math.max(i,16)*Math.max(e,8)/4;case ko:case Go:return Math.max(i,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case ha:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gp(i){switch(i){case Cn:case zc:return{byteLength:1,components:1};case cr:case kc:case si:return{byteLength:2,components:1};case Fo:case Uo:return{byteLength:2,components:4};case ii:case No:case qn:return{byteLength:4,components:1};case Hc:case Gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Id(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ep(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
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
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,Sm=`uniform sampler2D dfgLUT;
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
}`,bm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
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
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w0=`uniform sampler2D t2D;
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform float backgroundBlurriness;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,P0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,k0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,J0=`#define TOON
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
}`,K0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,j0=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Ip,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Vp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Jp,displacementmap_vertex:Kp,emissivemap_fragment:Qp,emissivemap_pars_fragment:jp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:am,fog_vertex:om,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:xm,lights_phong_fragment:vm,lights_phong_pars_fragment:ym,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:bm,lights_fragment_maps:Em,lights_fragment_end:wm,lightprobes_pars_fragment:Tm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Im,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Dm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Om,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:km,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Vm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Km,opaque_fragment:Qm,packing:jm,premultiplied_alpha_fragment:e0,project_vertex:t0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:o0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:_0,transmission_fragment:x0,transmission_pars_fragment:v0,uv_pars_fragment:y0,uv_pars_vertex:M0,uv_vertex:S0,worldpos_vertex:b0,background_vert:E0,background_frag:w0,backgroundCube_vert:T0,backgroundCube_frag:A0,cube_vert:R0,cube_frag:C0,depth_vert:I0,depth_frag:P0,distance_vert:L0,distance_frag:D0,equirect_vert:N0,equirect_frag:F0,linedashed_vert:U0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:k0,meshlambert_frag:H0,meshmatcap_vert:G0,meshmatcap_frag:V0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:$0,meshtoon_vert:J0,meshtoon_frag:K0,points_vert:Q0,points_frag:j0,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},Ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},fi={basic:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:yn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:yn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:yn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:yn([Ue.points,Ue.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:yn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:yn([Ue.common,Ue.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:yn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:yn([Ue.sprite,Ue.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:yn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:yn([Ue.lights,Ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};fi.physical={uniforms:yn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};var _l={r:0,b:0,g:0},sg=new Ft,Pd=new dt;Pd.set(-1,0,0,0,1,0,0,0,1);function rg(i,e,t,n,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function m(v){let b=!1,y=d(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,b){let y=d(b);y&&y.isCubeTexture?(c===void 0&&(c=new lt(new hi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ss(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=wt.getTransfer(y.colorSpace)!==Nt,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new vn(2,2),new An({name:"BackgroundMaterial",uniforms:Ss(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=wt.getTransfer(y.colorSpace)!==Nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,b){v.getRGB(_l,Qc(i)),t.buffers.color.setClear(_l.r,_l.g,_l.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function ag(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,U,N,R,I){let F=!1,B=f(P,R,N,U);r!==B&&(r=B,c(r.object)),F=d(P,R,N,I),F&&m(P,R,N,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(P,U,N,R),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,U,N,R){let I=R.wireframe===!0,F=n[U.id];F===void 0&&(F={},n[U.id]=F);let B=P.isInstancedMesh===!0?P.id:0,X=F[B];X===void 0&&(X={},F[B]=X);let H=X[N.id];H===void 0&&(H={},X[N.id]=H);let W=H[I];return W===void 0&&(W=u(l()),H[I]=W),W}function u(P){let U=[],N=[],R=[];for(let I=0;I<t;I++)U[I]=0,N[I]=0,R[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,U,N,R){let I=r.attributes,F=U.attributes,B=0,X=N.getAttributes();for(let H in X)if(X[H].location>=0){let K=I[H],le=F[H];if(le===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function m(P,U,N,R){let I={},F=U.attributes,B=0,X=N.getAttributes();for(let H in X)if(X[H].location>=0){let K=F[H];K===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let le={};le.attribute=K,K&&K.data&&(le.data=K.data),I[H]=le,B++}r.attributes=I,r.attributesNum=B,r.index=R}function x(){let P=r.newAttributes;for(let U=0,N=P.length;U<N;U++)P[U]=0}function g(P){p(P,0)}function p(P,U){let N=r.newAttributes,R=r.enabledAttributes,I=r.attributeDivisors;N[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),I[P]!==U&&(i.vertexAttribDivisor(P,U),I[P]=U)}function v(){let P=r.newAttributes,U=r.enabledAttributes;for(let N=0,R=U.length;N<R;N++)U[N]!==P[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function b(P,U,N,R,I,F,B){B===!0?i.vertexAttribIPointer(P,U,N,I,F):i.vertexAttribPointer(P,U,N,R,I,F)}function y(P,U,N,R){x();let I=R.attributes,F=N.getAttributes(),B=U.defaultAttributeValues;for(let X in F){let H=F[X];if(H.location>=0){let W=I[X];if(W===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let K=W.normalized,le=W.itemSize,me=e.get(W);if(me===void 0)continue;let D=me.buffer,ee=me.type,ue=me.bytesPerElement,xe=ee===i.INT||ee===i.UNSIGNED_INT||W.gpuType===No;if(W.isInterleavedBufferAttribute){let he=W.data,Se=he.isInterleavedBuffer===!0?he.stride:he.itemSize,et=W.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Pe=0;Pe<H.locationSize;Pe++)p(H.location+Pe,he.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)g(H.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,D);for(let Pe=0;Pe<H.locationSize;Pe++)b(H.location+Pe,le/H.locationSize,ee,K,Se*ue,(et+le/H.locationSize*Pe)*ue,xe)}else{if(W.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)p(H.location+he,W.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<H.locationSize;he++)g(H.location+he);i.bindBuffer(i.ARRAY_BUFFER,D);for(let he=0;he<H.locationSize;he++)b(H.location+he,le/H.locationSize,ee,K,le*ue,le/H.locationSize*he*ue,xe)}}else if(B!==void 0){let K=B[X];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(H.location,K);break;case 3:i.vertexAttrib3fv(H.location,K);break;case 4:i.vertexAttrib4fv(H.location,K);break;default:i.vertexAttrib1fv(H.location,K)}}}}v()}function A(){L();for(let P in n){let U=n[P];for(let N in U){let R=U[N];for(let I in R){let F=R[I];for(let B in F)h(F[B].object),delete F[B];delete R[I]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let U=n[P.id];for(let N in U){let R=U[N];for(let I in R){let F=R[I];for(let B in F)h(F[B].object),delete F[B];delete R[I]}}delete n[P.id]}function _(P){for(let U in n){let N=n[U];for(let R in N){let I=N[R];if(I[P.id]===void 0)continue;let F=I[P.id];for(let B in F)h(F[B].object),delete F[B];delete I[P.id]}}}function S(P){for(let U in n){let N=n[U],R=P.isInstancedMesh===!0?P.id:0,I=N[R];if(I!==void 0){for(let F in I){let B=I[F];for(let X in B)h(B[X].object),delete B[X];delete I[F]}delete N[R],Object.keys(N).length===0&&delete n[U]}}}function L(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function og(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==ri&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Cn&&_!==qn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:w}}function cg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Fn,o=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,b=v*4,y=p.clippingState||null;l.value=y,y=h(m,u,b,d);for(let A=0;A!==b;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=d;b!==x;++b,y+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var pa=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:xs});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=wn),new rr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},cd=256,hg=3,ug=20,Ld=256,Dd=16,dg=3,fg=new z,pg=new qe,vl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rr(1,10,null),this._boxMesh=new lt(new hi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=fg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(pg));let g=new rr(n,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cd,ed(e))}_fromTexture(e,t){e.mapping===ys||e.mapping===lr?this._setSize(e.image.length===0?cd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=hd(e,!1,!1),n=Math.log2(e)-hg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ys||e.mapping===lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ud()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mg(),this._integrationMaterial=gg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Dd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-dg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_g());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function hd(i,e,t){return new pa(i,{minFilter:Ai,generateMipmaps:e,type:si,colorSpace:Lr,depthBuffer:t})}function ma(i,e,t){return new An({name:i,uniforms:e,vertexShader:vt.cube_vert,fragmentShader:t,side:dn,blending:xs,depthTest:!1,depthWrite:!1})}function mg(){return ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ld}u

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
	`)}function gg(){return ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Dd}},`

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
	`)}function _g(){return ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ug}
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
	`)}function ud(){return ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function dd(){return ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Po||d===Lo)if(e.has(u)){let m=e.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new pa(m.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Po||d===Lo,x=d===ys||d===lr;if(m||x){let g=t.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new vl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new vl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Po?u.mapping=ys:d===Lo&&(u.mapping=lr),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function vg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rr("WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let g in x)e.update(x[g],i.ARRAY_BUFFER)}function f(m){let x=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,b=g.count>=65535?Or:Ur,y=new b(Math.ceil(v/3)*6,1),A=y.array;if(x!==null){let _=x.array;p=x.version;for(let S=0,L=0;S<v;S+=3){let T=_[S+0],P=_[S+1],U=_[S+2];A[L++]=T,A[L++]=P,A[L++]=P,A[L++]=U,A[L++]=U,A[L++]=T}}else{p=g.version;for(let _=0,S=0;_<v;_+=3){let L=_+0,T=_+1,P=_+2;A[S++]=L,A[S++]=T,A[S++]=T,A[S++]=P,A[S++]=P,A[S++]=L}}y.version=p;let w=r.get(m);w&&e.remove(w),r.set(m,y)}function u(m){let x=r.get(m);if(x){let g=m.index;g!==null&&x.version<g.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Mg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bg(i,e,t){let n=new WeakMap,s=new Bt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;d===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*A*4*f),_=new Fr(w,y,A,f);_.type=qn,_.needsUpdate=!0;let S=b*4;for(let T=0;T<f;T++){let P=g[T],U=p[T],N=v[T],R=y*A*4*T;for(let I=0;I<P.count;I++){let F=I*S;d===!0&&(s.fromBufferAttribute(P,I),w[R+F+0]=s.x,w[R+F+1]=s.y,w[R+F+2]=s.z,w[R+F+3]=0),m===!0&&(s.fromBufferAttribute(U,I),w[R+F+4]=s.x,w[R+F+5]=s.y,w[R+F+6]=s.z,w[R+F+7]=0),x===!0&&(s.fromBufferAttribute(N,I),w[R+F+8]=s.x,w[R+F+9]=s.y,w[R+F+10]=s.z,w[R+F+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new we(y,A)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Eg(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var wg={[Pc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[Nc]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[Fc]:"CUSTOM_TONE_MAPPING"};function Tg(i,e,t,n,s,r){let a=new xn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new un;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let f=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new lt(h,f),d=new _s(-1,1,1,-1,0,1),m=null,x=null,g=!1,p,v=null,b=[],y=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<b.length;_++){let S=b[_];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){b=A,y=b.length>0&&b[0].isRenderPass===!0;let w=a.width,_=a.height;b.length>0&&o===null&&(o=new xn(w,_,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new xn(w,_,{type:si,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ei(w,_),r===!0&&(c.format=Ri,c.type=Ms)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<b.length;L++){let T=b[L];T.setSize&&T.setSize(w,_),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(A,w){if(g||A.toneMapping===ui&&b.length===0)return!1;if(v=w,w!==null){let _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return y===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=ui,!0},this.hasRenderPass=function(){return y},this.end=function(A,w){A.toneMapping=p,g=!0;let _=a,S=o;for(let L=0;L<b.length;L++){let T=b[L];T.enabled!==!1&&(T.render(A,S,_,w),T.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(m!==A.outputColorSpace||x!==A.toneMapping){m=A.outputColorSpace,x=A.toneMapping,f.defines={},wt.getTransfer(m)===Nt&&(f.defines.SRGB_TRANSFER="");let L=wg[x];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(u,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Nd=new Tn,Fd=new Ei(1,1),Ud=new kr(1),Od=new Fr,Bd=new ao,zd=new zr,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),an(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),an(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),an(t,n)}}function Ng(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function Sl(i){return i.version===0&&(i.compareFunction=Yc,i.needsUpdate=!0),i}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sl(Fd):r=Nd,t.setTexture2D(e||r,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bd,s)}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sl(Ud):r=zd,t.setTextureCube(e||r,s)}function Xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Od,s)}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Ig;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Ug;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(i,e){i.uniform1fv(this.addr,e)}function Zg(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function $g(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function Jg(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Kg(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qg(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jg(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e_(i,e){i.uniform1iv(this.addr,e)}function t_(i,e){i.uniform2iv(this.addr,e)}function n_(i,e){i.uniform3iv(this.addr,e)}function i_(i,e){i.uniform4iv(this.addr,e)}function s_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function a_(i,e){i.uniform3uiv(this.addr,e)}function o_(i,e){i.uniform4uiv(this.addr,e)}function l_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sl(Fd):a=Nd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function c_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bd,r[a])}function h_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Sl(Ud):a=zd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function u_(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Od,r[a])}function d_(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return $g;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qg(t.type)}},hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function f_(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){xd(t,c===void 0?new ch(o,i,e):new hh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new uh(o),xd(t,f)),t=f}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);f_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p_=37297,m_=0;function g_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var yd=new dt;function __(i){wt._getMatrix(yd,wt.workingColorSpace,i);let e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g_(i.getShaderSource(e),o)}else return r}function x_(i,e){let t=__(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var v_={[Pc]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[Nc]:"ACESFilmic",[Uc]:"AgX",[Oc]:"Neutral",[Fc]:"Custom"};function y_(i,e){let t=v_[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xl=new z;function M_(){wt.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function b_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fa(i){return i!==""}function Sd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(w_,T_)}function T_(i,e){let t=vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dh(t)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(A_,R_)}function R_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var C_={[sa]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function I_(i){return C_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P_={[lr]:"ENVMAP_MODE_REFRACTION"};function L_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D_={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function N_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D_[i.combine]||"ENVMAP_BLENDING_NONE"}function F_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=I_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L_(t),f=N_(t),u=S_(t),d=b_(r),m=s.createProgram(),x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(fa).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(fa).join(`
`),g.length>0&&(g+=`
`)):(x=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),g=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?vt.tonemapping_pars_fragment:"",t.toneMapping!==ui?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,x_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=dh(a),a=Sd(a,t),a=bd(a,t),o=dh(o),o=Sd(o,t),o=bd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+x+a,b=p+g+o,y=vd(s,s.VERTEX_SHADER,v),A=vd(s,s.FRAGMENT_SHADER,b);s.attachShader(m,y),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(T){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(A)||"",R=P.trim(),I=U.trim(),F=N.trim(),B=!0,X=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,A);else{let H=Md(s,y,"vertex"),W=Md(s,A,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+H+`
`+W)}else R!==""?it("WebGLProgram: Program Info Log:",R):(I===""||F==="")&&(X=!1);X&&(T.diagnostics={runnable:B,programLog:R,vertexShader:{log:I,prefix:x},fragmentShader:{log:F,prefix:g}})}s.deleteShader(y),s.deleteShader(A),_=new dr(s,m),S=E_(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(m,p_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}var U_=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ph(e),t.set(e,n)),n}},ph=class{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}};function O_(i){return i===es||i===ha||i===ua}function B_(i,e,t,n,s,r){let a=new Qs,o=new fh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,L,T,P,U){let N=T.fog,R=P.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||I,F),X=u[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&it("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=W!==void 0?W.length:0,le=0;R.morphAttributes.position!==void 0&&(le=1),R.morphAttributes.normal!==void 0&&(le=2),R.morphAttributes.color!==void 0&&(le=3);let me,D,ee,ue;if(X){let Fe=fi[X];me=Fe.vertexShader,D=Fe.fragmentShader}else{me=_.vertexShader,D=_.fragmentShader;let Fe=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,Fe,at),ee=Fe.id,ue=at.id}let xe=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Se=P.isInstancedMesh===!0,et=P.isBatchedMesh===!0,Pe=!!_.map,Ve=!!_.matcap,tt=!!B,re=tt&&B.isPMREMTexture===!0,V=!!_.aoMap,J=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,q=!!_.normalMap,Le=!!_.displacementMap,De=!!_.emissiveMap,$e=!!_.metalnessMap,Ge=!!_.roughnessMap,ct=_.anisotropy>0,G=_.clearcoat>0,Ht=_.diffuseRoughness>0,pt=_.dispersion>0,Tt=_.retroreflectivity>0,be=_.iridescence>0,Dt=_.sheen>0,Xe=_.transmission>0,st=ct&&!!_.anisotropyMap,C=G&&!!_.clearcoatMap,M=G&&!!_.clearcoatNormalMap,Y=G&&!!_.clearcoatRoughnessMap,ye=Ht&&!!_.diffuseRoughnessMap,oe=be&&!!_.iridescenceMap,Te=be&&!!_.iridescenceThicknessMap,Ce=Dt&&!!_.sheenColorMap,ie=Dt&&!!_.sheenRoughnessMap,ae=!!_.specularMap,Re=!!_.specularColorMap,O=!!_.specularIntensityMap,se=Xe&&!!_.transmissionMap,ne=Xe&&!!_.thicknessMap,ve=!!_.gradientMap,fe=!!_.alphaMap,Ee=_.alphaTest>0,We=!!_.alphaHash,rt=!!_.extensions,Me=ui;_.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Me=i.toneMapping);let Ze=re?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,ut={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:me,fragmentShader:D,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:et,batchingColor:et&&P._colorsTexture!==null,instancing:Se,instancingColor:Se&&P.instanceColor!==null,instancingMorph:Se&&P.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:Ve,envMap:tt,envMapMode:tt&&B.mapping,envMapPMREM:re,envMapMaxLod:re?Ze.length-1:null,envMapSize:re?Ze[0].width:null,aoMap:V,lightMap:J,bumpMap:ce,normalMap:q,displacementMap:Le,emissiveMap:De,normalMapObjectSpace:q&&_.normalMapType===Gu,normalMapTangentSpace:q&&_.normalMapType===gl,packedNormalMap:q&&_.normalMapType===gl&&O_(_.normalMap.format),metalnessMap:$e,roughnessMap:Ge,anisotropy:ct,anisotropyMap:st,clearcoat:G,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:Y,diffuseRoughness:Ht,diffuseRoughnessMap:ye,dispersion:pt,retroreflection:Tt,iridescence:be,iridescenceMap:oe,iridescenceThicknessMap:Te,sheen:Dt,sheenColorMap:Ce,sheenRoughnessMap:ie,specularMap:ae,specularColorMap:Re,specularIntensityMap:O,transmission:Xe,transmissionMap:se,thicknessMap:ne,gradientMap:ve,opaque:_.transparent===!1&&_.blending===or&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ee,alphaHash:We,combine:_.combine,mapUv:Pe&&d(_.map.channel),aoMapUv:V&&d(_.aoMap.channel),lightMapUv:J&&d(_.lightMap.channel),bumpMapUv:ce&&d(_.bumpMap.channel),normalMapUv:q&&d(_.normalMap.channel),displacementMapUv:Le&&d(_.displacementMap.channel),emissiveMapUv:De&&d(_.emissiveMap.channel),metalnessMapUv:$e&&d(_.metalnessMap.channel),roughnessMapUv:Ge&&d(_.roughnessMap.channel),anisotropyMapUv:st&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:oe&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ie&&d(_.sheenRoughnessMap.channel),specularMapUv:ae&&d(_.specularMap.channel),specularColorMapUv:Re&&d(_.specularColorMap.channel),specularIntensityMapUv:O&&d(_.specularIntensityMap.channel),transmissionMapUv:se&&d(_.transmissionMap.channel),thicknessMapUv:ne&&d(_.thicknessMap.channel),alphaMapUv:fe&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(q||ct),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(Pe||fe),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&q===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:le,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&wt.getTransfer(_.map.colorSpace)===Nt,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&wt.getTransfer(_.emissiveMap.colorSpace)===Nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(S,_),p(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let S=u[_.type],L;if(S){let T=fi[S];L=ad.clone(T.uniforms)}else L=_.uniforms;return L}function b(_,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new F_(i,S,_,s),c.push(L),h.set(S,L)),L}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:w}}function z_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Td(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,x,g,p){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:p},i[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=m,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,d,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let b=o(u,d,m,x,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function c(u,d,m,x,g,p){let v=o(u,d,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,d){t.length>1&&t.sort(u||k_),n.length>1&&n.sort(d||Td),s.length>1&&s.sort(d||Td)}function f(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function H_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ad,i.set(n,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function G_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new qe};break;case"SpotLight":t={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function V_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var W_=0;function X_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q_(i){let e=new G_,t=V_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Ft,a=new Ft;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,b=0,y=0,A=0,w=0,_=0,S=0,L=0,T=0;c.sort(X_);for(let U=0,N=c.length;U<N;U++){let R=c[U],I=R.color,F=R.intensity,B=R.distance,X=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===es?X=R.shadow.map.texture:X=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=I.r*F,f+=I.g*F,u+=I.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],F);T++}else if(R.isSunLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,K=t.get(R);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=X;let le=W.getViewportCount();for(let me=0;me<le;me++)n.sunShadowMatrix[x+me]=W.getMatrix(me),n.sunShadowCascade[x+me]=W._cascadeData[me];x+=le,m++}n.sun[d]=H,d++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,K=t.get(R);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=R.shadow.matrix,A++}n.directional[g]=H,g++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[v]=H;let W=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,W.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[v]=W.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=X,_++}v++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=H,b++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let W=R.shadow,K=t.get(R);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=H,p++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[y]=H,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==m||P.numDirectionalShadows!==A||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=T,P.sunLength=d,P.directionalLength=g,P.pointLength=p,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=m,P.numDirectionalShadows=A,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=T,n.version=W_++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),u++}else if(y.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Rd(i){let e=new q_(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rd(i),e.set(s,[o])):r>=a.length?(o=new Rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`,J_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],K_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Cd=new Ft,da=new z,lh=new z;function Q_(i,e,t){let n=new $i,s=new we,r=new we,a=new Bt,o=new go,l=new _o,c={},h=t.maxTextureSize,f={[ji]:dn,[dn]:ji,[Xn]:Xn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Z_,fragmentShader:$_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new un;m.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let p=this.type;this.render=function(w,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===vu&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sa);let L=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(xs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=p!==this.type;N&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(I=>I.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,I=w.length;R<I;R++){let F=w[R],B=F.shadow;if(B===void 0){it("WebGLShadowMap:",F,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=H,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ar){if(F.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new xn(s.x,s.y,{format:es,type:si,minFilter:wn,magFilter:wn,generateMipmaps:!1}),B.map.texture.name=F.name+".shadowMap",B.map.depthTexture=new Ei(s.x,s.y,qn),B.map.depthTexture.name=F.name+".shadowMapDepth",B.map.depthTexture.format=bi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en}else F.isPointLight?(B.map=new pa(s.x),B.map.depthTexture=new kr(s.x,ii)):(B.map=new xn(s.x,s.y),B.map.depthTexture=new Ei(s.x,s.y,ii)),B.map.depthTexture.name=F.name+".shadowMap",B.map.depthTexture.format=bi,this.type===sa?(B.map.depthTexture.compareFunction=H?qc:Xc,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();F.isPointLight!==!0&&B.updateMatrices(F,S);let K=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let le=0;le<W;le++){let me=B.getCamera(le);if(F.isPointLight){let D=B.camera,ee=B.matrix,ue=F.distance||D.far;ue!==D.far&&(D.far=ue,D.updateProjectionMatrix()),da.setFromMatrixPosition(F.matrixWorld),D.position.copy(da),lh.copy(D.position),lh.add(J_[le]),D.up.copy(K_[le]),D.lookAt(lh),D.updateMatrixWorld(),ee.makeTranslation(-da.x,-da.y,-da.z),Cd.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Cd,D.coordinateSystem,D.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,le),i.clear();else{le===0&&(i.setRenderTarget(B.map),i.clear());let D=B.getViewport(le);a.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),U.viewport(a)}n=B.getFrustum(le),y(_,S,me,F,K,this.type)}B.isPointLightShadow!==!0&&this.type===ar&&v(B,S),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(L,T,P)};function v(w,_){let S=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new xn(s.x,s.y,{format:es,type:si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,S,d,x,null)}function b(w,_,S,L){let T=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=T.uuid,N=_.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let I=R[N];I===void 0&&(I=T.clone(),R[N]=I,_.addEventListener("dispose",A)),T=I}if(T.visible=_.visible,T.wireframe=_.wireframe,L===ar?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:f[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=i.properties.get(T);U.light=S}return T}function y(w,_,S,L,T,P){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===ar)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let R=e.update(w),I=w.material;if(Array.isArray(I)){let F=R.groups;for(let B=0,X=F.length;B<X;B++){let H=F[B],W=I[H.materialIndex];if(W&&W.visible){let K=b(w,W,L,P);w.onBeforeShadow(i,w,_,S,R,K,H),i.renderBufferDirect(S,null,R,K,w,H),w.onAfterShadow(i,w,_,S,R,K,H)}}}else if(I.visible){let F=b(w,I,L,P);w.onBeforeShadow(i,w,_,S,R,F,null),i.renderBufferDirect(S,null,R,F,w,null),w.onAfterShadow(i,w,_,S,R,F,null)}}let N=w.children;for(let R=0,I=N.length;R<I;R++)y(N[R],_,S,L,T,P)}function A(w){w.target.removeEventListener("dispose",A);for(let S in c){let L=c[S],T=w.target.uuid;T in L&&(L[T].dispose(),delete L[T])}}}function j_(i,e){function t(){let O=!1,se=new Bt,ne=null,ve=new Bt(0,0,0,0);return{setMask:function(fe){ne!==fe&&!O&&(i.colorMask(fe,fe,fe,fe),ne=fe)},setLocked:function(fe){O=fe},setClear:function(fe,Ee,We,rt,Me){Me===!0&&(fe*=rt,Ee*=rt,We*=rt),se.set(fe,Ee,We,rt),ve.equals(se)===!1&&(i.clearColor(fe,Ee,We,rt),ve.copy(se))},reset:function(){O=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let O=!1,se=!1,ne=null,ve=null,fe=null;return{setReversed:function(Ee){if(se!==Ee){let We=e.get("EXT_clip_control");Ee?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),se=Ee;let rt=fe;fe=null,this.setClear(rt)}},getReversed:function(){return se},setTest:function(Ee){Ee?he(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Ee){ne!==Ee&&!O&&(i.depthMask(Ee),ne=Ee)},setFunc:function(Ee){if(se&&(Ee=ju[Ee]),ve!==Ee){switch(Ee){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Ja:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){fe!==Ee&&(fe=Ee,se&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){O=!1,ne=null,ve=null,fe=null,se=!1}}}function s(){let O=!1,se=null,ne=null,ve=null,fe=null,Ee=null,We=null,rt=null,Me=null;return{setTest:function(Ze){O||(Ze?he(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!O&&(i.stencilMask(Ze),se=Ze)},setFunc:function(Ze,ut,Fe){(ne!==Ze||ve!==ut||fe!==Fe)&&(i.stencilFunc(Ze,ut,Fe),ne=Ze,ve=ut,fe=Fe)},setOp:function(Ze,ut,Fe){(Ee!==Ze||We!==ut||rt!==Fe)&&(i.stencilOp(Ze,ut,Fe),Ee=Ze,We=ut,rt=Fe)},setLocked:function(Ze){O=Ze},setClear:function(Ze){Me!==Ze&&(i.clearStencil(Ze),Me=Ze)},reset:function(){O=!1,se=null,ne=null,ve=null,fe=null,Ee=null,We=null,rt=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,b=null,y=null,A=null,w=null,_=null,S=new qe(0,0,0),L=0,T=!1,P=null,U=null,N=null,R=null,I=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=X>=2);let W=null,K={},le=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),D=new Bt().fromArray(le),ee=new Bt().fromArray(me);function ue(O,se,ne,ve){let fe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(O,Ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ne;We++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(se+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Ee}let xe={};xe[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Zs),ce(!1),q(Ec),he(i.CULL_FACE),V(xs);function he(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Se(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function et(O,se){return u[O]!==se?(i.bindFramebuffer(O,se),u[O]=se,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Pe(O,se){let ne=m,ve=!1;if(O){ne=d.get(se),ne===void 0&&(ne=[],d.set(se,ne));let fe=O.textures;if(ne.length!==fe.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,We=fe.length;Ee<We;Ee++)ne[Ee]=i.COLOR_ATTACHMENT0+Ee;ne.length=fe.length,ve=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ne)}function Ve(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let tt={[vs]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};tt[bu]=i.MIN,tt[Eu]=i.MAX;let re={[wu]:i.ZERO,[Tu]:i.ONE,[Au]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function V(O,se,ne,ve,fe,Ee,We,rt,Me,Ze){if(O===xs){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(he(i.BLEND),g=!0),O!==yu){if(O!==p||Ze!==T){if((v!==vs||A!==vs)&&(i.blendEquation(i.FUNC_ADD),v=vs,A=vs),Ze)switch(O){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",O);break}else switch(O){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",O);break}b=null,y=null,w=null,_=null,S.set(0,0,0),L=0,p=O,T=Ze}return}fe=fe||se,Ee=Ee||ne,We=We||ve,(se!==v||fe!==A)&&(i.blendEquationSeparate(tt[se],tt[fe]),v=se,A=fe),(ne!==b||ve!==y||Ee!==w||We!==_)&&(i.blendFuncSeparate(re[ne],re[ve],re[Ee],re[We]),b=ne,y=ve,w=Ee,_=We),(rt.equals(S)===!1||Me!==L)&&(i.blendColor(rt.r,rt.g,rt.b,Me),S.copy(rt),L=Me),p=O,T=!1}function J(O,se){O.side===Xn?Se(i.CULL_FACE):he(i.CULL_FACE);let ne=O.side===dn;se&&(ne=!ne),ce(ne),O.blending===or&&O.transparent===!1?V(xs):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ve=O.stencilWrite;o.setTest(ve),ve&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function q(O){O!==_u?(he(i.CULL_FACE),O!==U&&(O===Ec?i.cullFace(i.BACK):O===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),U=O}function Le(O){O!==N&&(B&&i.lineWidth(O),N=O)}function De(O,se,ne){O?(he(i.POLYGON_OFFSET_FILL),(R!==se||I!==ne)&&(R=se,I=ne,a.getReversed()&&(se=-se,ne=-ne),i.polygonOffset(se,ne))):Se(i.POLYGON_OFFSET_FILL)}function $e(O){O?he(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Ge(O){O===void 0&&(O=i.TEXTURE0+F-1),W!==O&&(i.activeTexture(O),W=O)}function ct(O,se,ne){ne===void 0&&(W===null?ne=i.TEXTURE0+F-1:ne=W);let ve=K[ne];ve===void 0&&(ve={type:void 0,texture:void 0},K[ne]=ve),(ve.type!==O||ve.texture!==se)&&(W!==ne&&(i.activeTexture(ne),W=ne),i.bindTexture(O,se||xe[O]),ve.type=O,ve.texture=se)}function G(){let O=K[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function pt(){try{i.compressedTexImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function be(){try{i.texSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function st(){try{i.texStorage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function C(){try{i.texStorage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function M(){try{i.texImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Y(){try{i.texImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function ye(O){return f[O]!==void 0?f[O]:i.getParameter(O)}function oe(O,se){f[O]!==se&&(i.pixelStorei(O,se),f[O]=se)}function Te(O){D.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),D.copy(O))}function Ce(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function ie(O,se){let ne=c.get(se);ne===void 0&&(ne=new WeakMap,c.set(se,ne));let ve=ne.get(O);ve===void 0&&(ve=i.getUniformBlockIndex(se,O.name),i.uniformBlockBinding(se,ve,ve),ne.set(O,ve))}function ae(O,se,ne){let fe=c.get(se).get(O);l[fe]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,fe,ne),l[fe]=ne)}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},W=null,K={},u={},l={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,b=null,y=null,A=null,w=null,_=null,S=new qe(0,0,0),L=0,T=!1,P=null,U=null,N=null,R=null,I=null,D.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Se,bindFramebuffer:et,drawBuffers:Pe,useProgram:Ve,setBlending:V,setMaterial:J,setFlipSided:ce,setCullFace:q,setLineWidth:Le,setPolygonOffset:De,setScissorTest:$e,activeTexture:Ge,bindTexture:ct,unbindTexture:G,compressedTexImage2D:Ht,compressedTexImage3D:pt,texImage2D:M,texImage3D:Y,pixelStorei:oe,getParameter:ye,updateUBOMapping:ie,uniformBlockBinding:ae,texStorage2D:st,texStorage3D:C,texSubImage2D:Tt,texSubImage3D:be,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Xe,scissor:Te,viewport:Ce,reset:Re}}function ex(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,M){return g?new OffscreenCanvas(C,M):Nr("canvas")}function v(C,M,Y){let ye=1,oe=st(C);if((oe.width>Y||oe.height>Y)&&(ye=Y/Math.max(oe.width,oe.height)),ye<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Te=Math.floor(ye*oe.width),Ce=Math.floor(ye*oe.height);u===void 0&&(u=p(Te,Ce));let ie=M?p(Te,Ce):u;return ie.width=Te,ie.height=Ce,ie.getContext("2d").drawImage(C,0,0,Te,Ce),it("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Te+"x"+Ce+")."),ie}else return"data"in C&&it("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function b(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,M,Y,ye,oe,Te=!1){if(C!==null){if(i[C]!==void 0)return i[C];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ce;ye&&(Ce=e.get("EXT_texture_norm16"),Ce||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=M;if(M===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&Ce&&(ie=Ce.R16_EXT),Y===i.SHORT&&Ce&&(ie=Ce.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&Ce&&(ie=Ce.RG16_EXT),Y===i.SHORT&&Ce&&(ie=Ce.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),M===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),M===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),M===i.RGB&&(Y===i.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGB16_EXT),Y===i.SHORT&&Ce&&(ie=Ce.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),M===i.RGBA){let ae=Te?Dr:wt.getTransfer(oe);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=ae===Nt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Ce&&(ie=Ce.RGBA16_EXT),Y===i.SHORT&&Ce&&(ie=Ce.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(C,M){let Y;return C?M===null||M===ii||M===Ms?Y=i.DEPTH24_STENCIL8:M===qn?Y=i.DEPTH32F_STENCIL8:M===cr&&(Y=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ii||M===Ms?Y=i.DEPTH_COMPONENT24:M===qn?Y=i.DEPTH_COMPONENT32F:M===cr&&(Y=i.DEPTH_COMPONENT16),Y}function S(C,M){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function L(C){let M=new WeakRef(C);n.get(C).__ref=M,m.add(M),x.register(C,M,M)}function T(C){let M=n.get(C).__ref;M!==void 0&&(m.delete(M),x.unregister(M))}function P(C){N(C.target)}function U(C){R(C.target)}function N(C){C.removeEventListener("dispose",P),T(C),F(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function R(C){C.removeEventListener("dispose",U),T(C),X(C)}function I(){for(let C of m){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?R(M):N(M))}m.clear(),f.clear()}function F(C){let M=n.get(C);if(M.__webglInit===void 0)return;let Y=C.source,ye=d.get(Y);if(ye){let oe=ye[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(C),Object.keys(ye).length===0&&d.delete(Y)}n.remove(C)}function B(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let Y=C.source,ye=d.get(Y);delete ye[M.__cacheKey],a.memory.textures--}function X(C){let M=n.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Y=C.depthTexture;if(Y&&Y.renderTarget===C&&N(Y),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(M.__webglFramebuffer[oe]))for(let Te=0;Te<M.__webglFramebuffer[oe].length;Te++)i.deleteFramebuffer(M.__webglFramebuffer[oe][Te]);else i.deleteFramebuffer(M.__webglFramebuffer[oe]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[oe])}else{if(Array.isArray(M.__webglFramebuffer))for(let oe=0;oe<M.__webglFramebuffer.length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[oe]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let oe=0;oe<M.__webglColorRenderbuffer.length;oe++)M.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[oe]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ye=C.textures;for(let oe=0,Te=ye.length;oe<Te;oe++){let Ce=n.get(ye[oe]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(ye[oe])}n.remove(C)}let H=0;function W(){H=0}function K(){return H}function le(C){H=C}function me(){let C=H;return C>=s.maxTextures&&it("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function D(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ee(C,M){let Y=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let ye=C.image;if(ye===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,C,M);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function ue(C,M){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){J(Y,C,M);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function xe(C,M){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){J(Y,C,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function he(C,M){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){ce(Y,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}let Se={[eo]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},et={[en]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Pe={[Wu]:i.NEVER,[Yc]:i.ALWAYS,[Xu]:i.LESS,[Xc]:i.LEQUAL,[qu]:i.EQUAL,[qc]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function Ve(C,M){if(M.type===qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===Do||M.magFilter===ra||M.magFilter===Ai||M.minFilter===wn||M.minFilter===Do||M.minFilter===ra||M.minFilter===Ai)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Se[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Se[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Se[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,et[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,et[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==ra&&M.minFilter!==Ai||M.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",P),L(M));let ye=M.source,oe=d.get(ye);oe===void 0&&(oe={},d.set(ye,oe));let Te=D(M);if(Te!==C.__cacheKey){oe[Te]===void 0&&(oe[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[Te].usedTimes++;let Ce=oe[C.__cacheKey];Ce!==void 0&&(oe[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(M)),C.__cacheKey=Te,C.__webglTexture=oe[Te].texture}return Y}function re(C,M,Y){return Math.floor(Math.floor(C/Y)/M)}function V(C,M,Y,ye){let Te=C.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Y,ye,M.data);else{Te.sort((O,se)=>O.start-se.start);let Ce=0;for(let O=1;O<Te.length;O++){let se=Te[Ce],ne=Te[O],ve=se.start+se.count,fe=re(ne.start,M.width,4),Ee=re(se.start,M.width,4);ne.start<=ve+1&&fe===Ee&&re(ne.start+ne.count-1,M.width,4)===fe?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++Ce,Te[Ce]=ne)}Te.length=Ce+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let O=0,se=Te.length;O<se;O++){let ne=Te[O],ve=Math.floor(ne.start/4),fe=Math.ceil(ne.count/4),Ee=ve%M.width,We=Math.floor(ve/M.width),rt=fe,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Ee,We,rt,Me,Y,ye,M.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function J(C,M,Y){let ye=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ye=i.TEXTURE_3D);let oe=tt(C,M),Te=M.source;t.bindTexture(ye,C.__webglTexture,i.TEXTURE0+Y);let Ce=n.get(Te);if(Te.version!==Ce.__version||oe===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Me=wt.getPrimaries(wt.workingColorSpace),Ze=M.colorSpace===Ci?null:wt.getPrimaries(M.colorSpace),ut=M.colorSpace===Ci||Me===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ae=v(M.image,!1,s.maxTextureSize);ae=Xe(M,ae);let Re=r.convert(M.format,M.colorSpace),O=r.convert(M.type),se=w(M.internalFormat,Re,O,M.normalized,M.colorSpace,M.isVideoTexture);Ve(ye,M);let ne,ve=M.mipmaps,fe=M.isVideoTexture!==!0,Ee=Ce.__version===void 0||oe===!0,We=Te.dataReady,rt=S(M,ae);if(M.isDepthTexture)se=_(M.format===Ri,M.type),Ee&&(fe?t.texStorage2D(i.TEXTURE_2D,1,se,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,se,ae.width,ae.height,0,Re,O,null));else if(M.isDataTexture)if(ve.length>0){fe&&Ee&&t.texStorage2D(i.TEXTURE_2D,rt,se,ve[0].width,ve[0].height);for(let Me=0,Ze=ve.length;Me<Ze;Me++)ne=ve[Me],fe?We&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Re,O,ne.data):t.texImage2D(i.TEXTURE_2D,Me,se,ne.width,ne.height,0,Re,O,ne.data);M.generateMipmaps=!1}else fe?(Ee&&t.texStorage2D(i.TEXTURE_2D,rt,se,ae.width,ae.height),We&&V(M,ae,Re,O)):t.texImage2D(i.TEXTURE_2D,0,se,ae.width,ae.height,0,Re,O,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,se,ve[0].width,ve[0].height,ae.depth);for(let Me=0,Ze=ve.length;Me<Ze;Me++)if(ne=ve[Me],M.format!==ri)if(Re!==null)if(fe){if(We)if(M.layerUpdates.size>0){let ut=th(ne.width,ne.height,M.format,M.type);for(let Fe of M.layerUpdates){let at=ne.data.subarray(Fe*ut/ne.data.BYTES_PER_ELEMENT,(Fe+1)*ut/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Fe,ne.width,ne.height,1,Re,at)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,ae.depth,Re,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,se,ne.width,ne.height,ae.depth,0,ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,ne.width,ne.height,ae.depth,Re,O,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,se,ne.width,ne.height,ae.depth,0,Re,O,ne.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{fe&&Ee&&t.texStorage2D(i.TEXTURE_2D,rt,se,ve[0].width,ve[0].height);for(let Me=0,Ze=ve.length;Me<Ze;Me++)ne=ve[Me],M.format!==ri?Re!==null?fe?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Re,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,se,ne.width,ne.height,0,ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?We&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ne.width,ne.height,Re,O,ne.data):t.texImage2D(i.TEXTURE_2D,Me,se,ne.width,ne.height,0,Re,O,ne.data)}else if(M.isDataArrayTexture)if(fe){if(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,rt,se,ae.width,ae.height,ae.depth),We)if(M.layerUpdates.size>0){let Me=th(ae.width,ae.height,M.format,M.type);for(let Ze of M.layerUpdates){let ut=ae.data.subarray(Ze*Me/ae.data.BYTES_PER_ELEMENT,(Ze+1)*Me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ze,ae.width,ae.height,1,Re,O,ut)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Re,O,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ae.width,ae.height,ae.depth,0,Re,O,ae.data);else if(M.isData3DTexture)fe?(Ee&&t.texStorage3D(i.TEXTURE_3D,rt,se,ae.width,ae.height,ae.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Re,O,ae.data)):t.texImage3D(i.TEXTURE_3D,0,se,ae.width,ae.height,ae.depth,0,Re,O,ae.data);else if(M.isFramebufferTexture){if(Ee)if(fe)t.texStorage2D(i.TEXTURE_2D,rt,se,ae.width,ae.height);else{let Me=ae.width,Ze=ae.height;for(let ut=0;ut<rt;ut++)t.texImage2D(i.TEXTURE_2D,ut,se,Me,Ze,0,Re,O,null),Me>>=1,Ze>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ae.parentNode!==Me){Me.appendChild(ae),f.add(M),Me.onpaint=Ze=>{let ut=Ze.changedElements;for(let Fe of f)ut.includes(Fe.image)&&(Fe.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let ut=i.RGBA,Fe=i.RGBA,at=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,Fe,at,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(fe&&Ee){let Me=st(ve[0]);t.texStorage2D(i.TEXTURE_2D,rt,se,Me.width,Me.height)}for(let Me=0,Ze=ve.length;Me<Ze;Me++)ne=ve[Me],fe?We&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Re,O,ne):t.texImage2D(i.TEXTURE_2D,Me,se,Re,O,ne);M.generateMipmaps=!1}else if(fe){if(Ee){let Me=st(ae);t.texStorage2D(i.TEXTURE_2D,rt,se,Me.width,Me.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,O,ae)}else t.texImage2D(i.TEXTURE_2D,0,se,Re,O,ae);b(M)&&M.mipmapsAutoUpdate===!0&&y(ye),Ce.__version=Te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,Y){if(M.image.length!==6)return;let ye=tt(C,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+Y);let Te=n.get(oe);if(oe.version!==Te.__version||ye===!0){t.activeTexture(i.TEXTURE0+Y);let Ce=wt.getPrimaries(wt.workingColorSpace),ie=M.colorSpace===Ci?null:wt.getPrimaries(M.colorSpace),ae=M.colorSpace===Ci||Ce===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Re=M.isCompressedTexture||M.image[0].isCompressedTexture,O=M.image[0]&&M.image[0].isDataTexture,se=[];for(let Fe=0;Fe<6;Fe++)!Re&&!O?se[Fe]=v(M.image[Fe],!0,s.maxCubemapSize):se[Fe]=O?M.image[Fe].image:M.image[Fe],se[Fe]=Xe(M,se[Fe]);let ne=se[0],ve=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),Ee=w(M.internalFormat,ve,fe,M.normalized,M.colorSpace),We=M.isVideoTexture!==!0,rt=Te.__version===void 0||ye===!0,Me=oe.dataReady,Ze=S(M,ne);Ve(i.TEXTURE_CUBE_MAP,M);let ut;if(M.isDepthTexture){if(Ee=_(M.format===Ri,M.type),rt)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ee,ne.width,ne.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,ne.width,ne.height,0,ve,fe,null)}else if(Re){We&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Ee,ne.width,ne.height);for(let Fe=0;Fe<6;Fe++){ut=se[Fe].mipmaps;for(let at=0;at<ut.length;at++){let Zt=ut[at];M.format!==ri?ve!==null?We?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at,0,0,Zt.width,Zt.height,ve,Zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at,Ee,Zt.width,Zt.height,0,Zt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at,0,0,Zt.width,Zt.height,ve,fe,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at,Ee,Zt.width,Zt.height,0,ve,fe,Zt.data)}}}else{if(ut=M.mipmaps,We&&rt){ut.length>0&&Ze++;let Fe=st(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,Ee,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(O){We?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,se[Fe].width,se[Fe].height,ve,fe,se[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,se[Fe].width,se[Fe].height,0,ve,fe,se[Fe].data);for(let at=0;at<ut.length;at++){let $n=ut[at].image[Fe].image;We?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at+1,0,0,$n.width,$n.height,ve,fe,$n.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at+1,Ee,$n.width,$n.height,0,ve,fe,$n.data)}}else{We?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ve,fe,se[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ee,ve,fe,se[Fe]);for(let at=0;at<ut.length;at++){let Zt=ut[at];We?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at+1,0,0,ve,fe,Zt.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,at+1,Ee,ve,fe,Zt.image[Fe])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),Te.__version=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function q(C,M,Y,ye,oe,Te){let Ce=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),ae=w(Y.internalFormat,Ce,ie,Y.normalized,Y.colorSpace),Re=n.get(M),O=n.get(Y);if(O.__renderTarget=M,!Re.__hasExternalTextures){let se=Math.max(1,M.width>>Te),ne=Math.max(1,M.height>>Te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Te,ae,se,ne,M.depth,0,Ce,ie,null):t.texImage2D(oe,Te,ae,se,ne,0,Ce,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,oe,O.__webglTexture,0,Tt(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,oe,O.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(C,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let ye=M.depthTexture,oe=ye&&ye.isDepthTexture?ye.type:null,Te=_(M.stencilBuffer,oe),Ce=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(M),Te,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(M),Te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Te,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,C)}else{let ye=M.textures;for(let oe=0;oe<ye.length;oe++){let Te=ye[oe],Ce=r.convert(Te.format,Te.colorSpace),ie=r.convert(Te.type),ae=w(Te.internalFormat,Ce,ie,Te.normalized,Te.colorSpace);be(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(M),ae,M.width,M.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(M),ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(C,M,Y){let ye=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(M.depthTexture);oe.__renderTarget=M;let Te=ye?M.depthTexture.image[0]:M.depthTexture.image;(!oe.__webglTexture||Te.width!==M.width||Te.height!==M.height)&&(Te.width=M.width,Te.height=M.height,M.depthTexture.needsUpdate=!0),ye?he(M.depthTexture,0):ee(M.depthTexture,0);let Ce=oe.__webglTexture,ie=Tt(M),ae=ye?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Re=M.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===bi)be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,ae,Ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Re,ae,Ce,0);else if(M.depthTexture.format===Ri)be(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,ae,Ce,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Re,ae,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(C){let M=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let ye=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ye){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ye.removeEventListener("dispose",oe)};ye.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=ye}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let ye=0;ye<6;ye++)De(M.__webglFramebuffer[ye],C,ye);else C.texture.mipmaps.length>0?De(M.__webglFramebuffer[0],C,0):De(M.__webglFramebuffer,C,0);else if(Y){M.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ye]),M.__webglDepthbuffer[ye]===void 0)M.__webglDepthbuffer[ye]=i.createRenderbuffer(),Le(M.__webglDepthbuffer[ye],C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer[ye];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Te)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Le(M.__webglDepthbuffer,C,!1);else{let oe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(C,M,Y){let ye=n.get(C);M!==void 0&&q(ye.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&$e(C)}function ct(C){let M=C.texture,Y=n.get(C),ye=n.get(M);C.addEventListener("dispose",U),L(C);let oe=C.textures,Te=C.isWebGLCubeRenderTarget===!0,Ce=oe.length>1;if(Ce||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=M.version,a.memory.textures++),Te){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let ae=0;ae<M.mipmaps.length;ae++)Y.__webglFramebuffer[ie][ae]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ie=0,ae=oe.length;ie<ae;ie++){let Re=n.get(oe[ie]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&be(C)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<oe.length;ie++){let ae=oe[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let Re=r.convert(ae.format,ae.colorSpace),O=r.convert(ae.type),se=w(ae.internalFormat,Re,O,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),ne=Tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)q(Y.__webglFramebuffer[ie][ae],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else q(Y.__webglFramebuffer[ie],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);b(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let ie=0,ae=oe.length;ie<ae;ie++){let Re=oe[ie],O=n.get(Re),se=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,O.__webglTexture),Ve(se,Re),q(Y.__webglFramebuffer,C,Re,i.COLOR_ATTACHMENT0+ie,se,0),b(Re)&&y(se)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,ye.__webglTexture),Ve(ie,M),M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)q(Y.__webglFramebuffer[ae],C,M,i.COLOR_ATTACHMENT0,ie,ae);else q(Y.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ie,0);b(M)?y(ie):M.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&$e(C)}function G(C){let M=C.textures;for(let Y=0,ye=M.length;Y<ye;Y++){let oe=M[Y];if(b(oe)&&oe.mipmapsAutoUpdate===!0){let Te=A(C),Ce=n.get(oe).__webglTexture;t.bindTexture(Te,Ce),y(Te),t.unbindTexture()}}}let Ht=[];function pt(C){if(C.samples>0){if(be(C)===!1){let M=C.textures,Y=C.width,ye=C.height,oe=i.COLOR_BUFFER_BIT,Te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(C),ie=M.length>1;if(ie)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);let O=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,Y,ye,0,0,Y,ye,oe,i.NEAREST),l===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+Re),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ht.push(Te),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);let O=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Tt(C){return Math.min(s.maxSamples,C.samples)}function be(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Xe(C,M){let Y=C.colorSpace,ye=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==Lr&&Y!==Ci&&(wt.getTransfer(Y)===Nt?(ye!==ri||oe!==Cn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",Y)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=me,this.resetTextureUnits=W,this.getTextureUnits=K,this.setTextureUnits=le,this.setTexture2D=ee,this.setTexture2DArray=ue,this.setTexture3D=xe,this.setTextureCube=he,this.rebindTextures=Ge,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=q,this.useMultisampledRTT=be,this.dispose=I}function tx(i,e){function t(n,s=Ci){let r,a=wt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===kc)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Vc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===ri)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===hr)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===es)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(a===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Ho||n===Go||n===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ha||n===$o)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return a===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===$o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jo||n===Ko||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return a===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hl||n===ul||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hl)return a===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===pl||n===ua||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends li{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new mh,p={},v=t.getContextAttributes(),b=null,y=null,A=[],w=[],_=new we,S=null,L=null,T=new _n;T.viewport=new Bt;let P=new _n;P.viewport=new Bt;let U=[T,P],N=new Co,R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let ee=A[D];return ee===void 0&&(ee=new js,A[D]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(D){let ee=A[D];return ee===void 0&&(ee=new js,A[D]=ee),ee.getGripSpace()},this.getHand=function(D){let ee=A[D];return ee===void 0&&(ee=new js,A[D]=ee),ee.getHandSpace()};function F(D){let ee=w.indexOf(D.inputSource);if(ee===-1)return;let ue=A[ee];ue!==void 0&&(ue.update(D.inputSource,D.frame,c||a),ue.dispatchEvent({type:D.type,data:D.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let D=0;D<A.length;D++){let ee=w[D];ee!==null&&(w[D]=null,A[D].disconnect(ee))}R=null,I=null,g.reset();for(let D in p)delete p[D];if(e.setRenderTarget(b),d=null,u=null,f=null,s=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){let D=L.camera;D.fov=L.fov,D.zoom=L.zoom,D.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,xe=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Ri:bi,xe=v.stencil?Ms:ii);let Se={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Se),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new xn(u.textureWidth,u.textureHeight,{format:ri,type:Cn,depthTexture:new Ei(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new xn(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(D){for(let ee=0;ee<D.removed.length;ee++){let ue=D.removed[ee],xe=w.indexOf(ue);xe>=0&&(w[xe]=null,A[xe].disconnect(ue))}for(let ee=0;ee<D.added.length;ee++){let ue=D.added[ee],xe=w.indexOf(ue);if(xe===-1){for(let Se=0;Se<A.length;Se++)if(Se>=w.length){w.push(ue),xe=Se;break}else if(w[Se]===null){w[Se]=ue,xe=Se;break}if(xe===-1)break}let he=A[xe];he&&he.connect(ue)}}function H(D,ee){ee===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ee.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let ee=D.near,ue=D.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),N.near=P.near=T.near=ee,N.far=P.far=T.far=ue,(R!==N.near||I!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,I=N.far),N.layers.mask=D.layers.mask|6,T.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let xe=D.parent,he=N.cameras;H(N,xe);for(let Se=0;Se<he.length;Se++)H(he[Se],xe);N.projectionMatrix.copy(T.projectionMatrix),N.projectionMatrixInverse.copy(T.projectionMatrixInverse),L===null&&D.isPerspectiveCamera&&(L={camera:D,fov:D.fov,zoom:D.zoom}),W(D,N,xe)};function W(D,ee,ue){ue===null?D.matrix.copy(ee.matrixWorld):(D.matrix.copy(ue.matrixWorld),D.matrix.invert(),D.matrix.multiply(ee.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(ee.projectionMatrix),D.projectionMatrixInverse.copy(ee.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=io*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(D){return p[D]};let K=null;function le(D,ee){if(h=ee.getViewerPose(c||a),m=ee,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let xe=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,xe=!0);for(let Pe=0;Pe<ue.length;Pe++){let Ve=ue[Pe],tt=null;if(d!==null)tt=d.getViewport(Ve);else{let V=f.getViewSubImage(u,Ve);tt=V.viewport,Pe===0&&(e.setRenderTargetTextures(y,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(y))}let re=U[Pe];re===void 0&&(re=new _n,re.layers.enable(Pe),re.viewport=new Bt,U[Pe]=re),re.matrix.fromArray(Ve.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ve.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(tt.x,tt.y,tt.width,tt.height),Pe===0&&(N.matrix.copy(re.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),xe===!0&&N.cameras.push(re)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Pe=f.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(Pe,s.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Pe=0;Pe<ue.length;Pe++){let Ve=ue[Pe].camera;if(Ve){let tt=p[Ve];tt||(tt=new Hr,p[Ve]=tt);let re=f.getCameraImage(Ve);tt.sourceTexture=re}}}}for(let ue=0;ue<A.length;ue++){let xe=w[ue],he=A[ue];xe!==null&&he!==void 0&&he.update(xe,ee,c||a)}K&&K(D,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let me=new Id;me.setAnimationLoop(le),this.setAnimationLoop=function(D){K=D},this.dispose=function(){}}},sx=new Ft,kd=new dt;kd.set(-1,0,0,0,1,0,0,0,1);function rx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===dn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===dn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),b=v.envMap,y=v.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(kd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ax(i,e,t,n){let s={},r={};function a(v,b){let y=b.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,b){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let A=b.program;n.updateUBOMapping(v,A);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let b=i.createBuffer(),y=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(v){let b=s[v.id],y=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let L=0,T=S.length;L<T;L++)h(S[L],w,L,A);else h(S,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,y,A){if(u(v,b,y,A)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let T=_[L],P=x(T,!0);f(T,v.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function f(v,b,y){typeof v=="number"||typeof v=="boolean"?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function u(v,b,y,A){let w=v.value,_=b+"_"+y;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let S=A[_],L=!1;for(let T=0;T<w.length;T++)d(w[T],S,T)===!0&&(L=!0);return L}return d(w,A,_)}function d(v,b,y){if(b[y]===void 0)return typeof v=="number"||typeof v=="boolean"?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let A=b[y];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(v){let b=v.uniforms,y=0,A=16;for(let _=0,S=b.length;_<S;_++){let L=Array.isArray(b[_])?b[_]:[b[_]];for(let T=0,P=L.length;T<P;T++){let U=L[T],N=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(b[_])||Array.isArray(U.value),I=y;for(let B=0,X=N.length;B<X;B++){let H=N[B],W=x(H,R),K=y%A,le=K%W.boundary,me=K+le;y+=le,me!==0&&A-me<W.storage&&(y+=A-me),B===0&&(I=y),y+=W.storage}let F=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new F((y-I)/Float32Array.BYTES_PER_ELEMENT),U.__offset=I}}let w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function x(v,b){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):it("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let b=v.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function lx(){return di===null&&(di=new ps(ox,16,16,es,si),di.name="DFG_LUT",di.minFilter=wn,di.magFilter=wn,di.wrapS=oi,di.wrapT=oi,di.generateMipmaps=!1,di.needsUpdate=!0),di}var yl=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Cn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([zo,Bo,Oo]),p=new Set([Cn,ii,cr,Ms,Fo,Uo]),v=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,U=null,N=null,R=null,I=null;this._outputColorSpace=qt;let F=0,B=0,X=null,H=-1,W=null,K=new Bt,le=new Bt,me=null,D=new qe(0),ee=0,ue=t.width,xe=t.height,he=1,Se=null,et=null,Pe=new Bt(0,0,ue,xe),Ve=new Bt(0,0,ue,xe),tt=!1,re=new $i,V=new oo,J=!1,ce=!1,q=new Ft,Le=new z,De=new Bt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function ct(){return X===null?he:1}let G=n;function Ht(E,k){return t.getContext(E,k)}let pt,Tt,be,Dt,Xe,st,C,M,Y,ye,oe,Te,Ce,ie,ae,Re,O,se,ne,ve,fe,Ee,We;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),G===null){let k="webgl2";if(G=Ht(k,E),G===null)throw Ht(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(E){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ot("WebGLRenderer: "+E.message),E}function rt(){pt=new vg(G),pt.init(),fe=new tx(G,pt),Tt=new lg(G,pt,e,fe),be=new j_(G,pt),Tt.reversedDepthBuffer&&u&&be.buffers.depth.setReversed(!0),N=G.createFramebuffer(),R=G.createFramebuffer(),I=G.createFramebuffer(),Dt=new Sg(G),Xe=new z_,st=new ex(G,pt,be,Xe,Tt,fe,Dt),C=new xg(T),M=new Ep(G),Ee=new ag(G,M),Y=new yg(G,M,Dt,Ee),ye=new Eg(G,Y,M,Ee,Dt),se=new bg(G,Tt,st),ae=new cg(Xe),oe=new B_(T,C,pt,Tt,Ee,ae),Te=new rx(T,Xe),Ce=new H_,ie=new Y_(pt),O=new rg(T,C,be,ye,m,l),Re=new Q_(T,ye,Tt),We=new ax(G,Dt,Tt,be),ne=new og(G,pt,Dt),ve=new Mg(G,pt,Dt),Dt.programs=oe.programs,T.capabilities=Tt,T.extensions=pt,T.properties=Xe,T.renderLists=Ce,T.shadowMap=Re,T.state=be,T.info=Dt}x!==Cn&&(L=new Tg(x,t.width,t.height,o,s,r));let Me=new gh(T,G);this.xr=Me,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=pt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=pt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(E){E!==void 0&&(he=E,this.setSize(ue,xe,!1))},this.getSize=function(E){return E.set(ue,xe)},this.setSize=function(E,k,j=!0){if(Me.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=E,xe=k,t.width=Math.floor(E*he),t.height=Math.floor(k*he),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(ue*he,xe*he).floor()},this.setDrawingBufferSize=function(E,k,j){ue=E,xe=k,he=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(x===Cn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Pe)},this.setViewport=function(E,k,j,Z){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,k,j,Z),be.viewport(K.copy(Pe).multiplyScalar(ct()).round())},this.getScissor=function(E){return E.copy(Ve)},this.setScissor=function(E,k,j,Z){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,k,j,Z),be.scissor(le.copy(Ve).multiplyScalar(ct()).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){be.setScissorTest(tt=E)},this.setOpaqueSort=function(E){Se=E},this.setTransparentSort=function(E){et=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,j=!0){let Z=0;if(E){let $=!1;if(X!==null){let _e=X.texture.format;$=g.has(_e)}if($){let _e=X.texture.type,ze=p.has(_e),Ae=O.getClearColor(),Ne=O.getClearAlpha(),He=Ae.r,ht=Ae.g,gt=Ae.b;ze?(v[0]=He,v[1]=ht,v[2]=gt,v[3]=Ne,G.clearBufferuiv(G.COLOR,0,v)):(b[0]=He,b[1]=ht,b[2]=gt,b[3]=Ne,G.clearBufferiv(G.COLOR,0,b))}else Z|=G.COLOR_BUFFER_BIT}k&&(Z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&G.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),O.dispose(),Ce.dispose(),ie.dispose(),st.dispose(),Xe.dispose(),C.dispose(),ye.dispose(),Y.dispose(),Ee.dispose(),We.dispose(),oe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",va),Me.removeEventListener("sessionend",Rs),mi.stop()};function Ze(E){E.preventDefault(),$c("WebGLRenderer: Context Lost."),P=!0}function ut(){$c("WebGLRenderer: Context Restored."),P=!1;let E=Dt.autoReset,k=Re.enabled,j=Re.autoUpdate,Z=Re.needsUpdate,$=Re.type;rt(),Dt.autoReset=E,Re.enabled=k,Re.autoUpdate=j,Re.needsUpdate=Z,Re.type=$}function Fe(E){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){let k=E.target;k.removeEventListener("dispose",at),Zt(k)}function Zt(E){$n(E),Xe.remove(E)}function $n(E){let k=Xe.get(E).programs;k!==void 0&&(k.forEach(function(j){oe.releaseProgram(j)}),E.isShaderMaterial&&oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,Z,$,_e){k===null&&(k=$e);let ze=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ae=Fi(E,k,j,Z,$);be.setMaterial(Z,ze);let Ne=j.index,He=1;if(Z.wireframe===!0){if(Ne=Y.getWireframeAttribute(j),Ne===void 0)return;He=2}let ht=j.drawRange,gt=j.attributes.position,Oe=ht.start*He,xt=(ht.start+ht.count)*He;_e!==null&&(Oe=Math.max(Oe,_e.start*He),xt=Math.min(xt,(_e.start+_e.count)*He)),Ne!==null?(Oe=Math.max(Oe,0),xt=Math.min(xt,Ne.count)):gt!=null&&(Oe=Math.max(Oe,0),xt=Math.min(xt,gt.count));let Gt=xt-Oe;if(Gt<0||Gt===1/0)return;Ee.setup($,Z,Ae,j,Ne);let It,Pt=ne;if(Ne!==null&&(It=M.get(Ne),Pt=ve,Pt.setIndex(It)),$.isMesh)Z.wireframe===!0?(be.setLineWidth(Z.wireframeLinewidth*ct()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if($.isLine){let nn=Z.linewidth;nn===void 0&&(nn=1),be.setLineWidth(nn*ct()),$.isLineSegments?Pt.setMode(G.LINES):$.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else $.isPoints?Pt.setMode(G.POINTS):$.isSprite&&Pt.setMode(G.TRIANGLES);if($.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Pt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let nn=$._multiDrawStarts,ke=$._multiDrawCounts,ln=$._multiDrawCount,nt=Ne?M.get(Ne).bytesPerElement:1,Kn=Xe.get(Z).currentProgram.getUniforms();for(let Qt=0;Qt<ln;Qt++)Kn.setValue(G,"_gl_DrawID",Qt),Pt.render(nn[Qt]/nt,ke[Qt])}else if($.isInstancedMesh)Pt.renderInstances(Oe,Gt,$.count);else if(j.isInstancedBufferGeometry){let nn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ke=Math.min(j.instanceCount,nn);Pt.renderInstances(Oe,Gt,ke)}else Pt.render(Oe,Gt)};function ws(E,k,j,Z){U!==null&&E.isNodeMaterial&&U.setObject(Z,E),J===!0&&ae.setState(E,j,!1),E.transparent===!0&&E.side===Xn&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,Ni(E,k,Z),E.side=ji,E.needsUpdate=!0,Ni(E,k,Z),E.side=Xn):Ni(E,k,Z)}this.compile=function(E,k,j=null){j===null&&(j=E),U!==null&&U.renderStart(E,k,j),w=ie.get(j),w.init(k),S.push(w),j.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),E!==j&&E.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),ce=this.localClippingEnabled,J=ae.init(this.clippingPlanes,ce),J===!0&&ae.setGlobalState(this.clippingPlanes,k),U!==null&&Re.render(w.state.shadowsArray,j,k);let Z=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let _e=$.material;if(_e)if(Array.isArray(_e))for(let ze=0;ze<_e.length;ze++){let Ae=_e[ze];ws(Ae,j,k,$),Z.add(Ae)}else ws(_e,j,k,$),Z.add(_e)}),w=S.pop(),U!==null&&U.renderEnd(),Z},this.compileAsync=function(E,k,j=null){let Z=this.compile(E,k,j);return new Promise($=>{function _e(){if(Z.forEach(function(ze){let Ne=Xe.get(ze).currentProgram;(Ne===void 0||Ne.isReady())&&Z.delete(ze)}),Z.size===0){$(E);return}setTimeout(_e,10)}pt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ts=null;function As(E){Ts&&Ts(E)}function va(){mi.stop()}function Rs(){mi.start()}let mi=new Id;mi.setAnimationLoop(As),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(E){Ts=E,Me.setAnimationLoop(E),E===null?mi.stop():mi.start()},Me.addEventListener("sessionstart",va),Me.addEventListener("sessionend",Rs),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(E,k);let j=Me.enabled===!0&&Me.isPresenting===!0,Z=L!==null&&(X===null||j)&&L.begin(T,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,k,X),w=ie.get(E,S.length),w.init(k),w.state.textureUnits=st.getTextureUnits(),S.push(w),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?V.setFromArrayCamera(k):re.setFromProjectionMatrix(q,Hn,k.reversedDepth),ce=this.localClippingEnabled,J=ae.init(this.clippingPlanes,ce),A=Ce.get(E,_.length),A.init(),_.push(A),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let ze=T.xr.getDepthSensingMesh();ze!==null&&ns(ze,k,-1/0,T.sortObjects)}ns(E,k,0,T.sortObjects),A.finish(),U!==null&&U.updateLights(w.state.lightsArray),T.sortObjects===!0&&A.sort(Se,et),Ge=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Ge&&O.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),J===!0&&ae.beginShadows();let $=w.state.shadowsArray;if(Re.render($,E,k),J===!0&&ae.endShadows(),(Z&&L.hasRenderPass())===!1){let ze=A.opaque,Ae=A.transmissive;if(w.setupLights(),k.isArrayCamera){let Ne=k.cameras;if(Ae.length>0)for(let He=0,ht=Ne.length;He<ht;He++){let gt=Ne[He];Is(ze,Ae,E,gt)}Ge&&O.render(E);for(let He=0,ht=Ne.length;He<ht;He++){let gt=Ne[He];Cs(A,E,gt,gt.viewport)}}else Ae.length>0&&Is(ze,Ae,E,k),Ge&&O.render(E),Cs(A,E,k)}X!==null&&B===0&&(st.updateMultisampleRenderTarget(X),st.updateRenderTargetMipmap(X)),Z&&L.end(T),E.isScene===!0&&E.onAfterRender(T,E,k),Ee.resetDefaultState(),H=-1,W=null,S.pop(),S.length>0?(w=S[S.length-1],st.setTextureUnits(w.state.textureUnits),J===!0&&ae.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,U!==null&&U.renderEnd()};function ns(E,k,j,Z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let ze=k.isArrayCamera?V:re;if(!E.frustumCulled||E.intersectsFrustum(ze)){Z&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);let Ae=ye.update(E),Ne=E.material;Ne.visible&&A.push(E,Ae,Ne,j,De.z,null,k)}}else if(E.isMesh||E.isLine||E.isPoints){let ze=k.isArrayCamera?V:re;if(!E.frustumCulled||E.intersectsFrustum(ze)){let Ae=ye.update(E),Ne=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),De.copy(Ae.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(q)),Array.isArray(Ne)){let He=Ae.groups;for(let ht=0,gt=He.length;ht<gt;ht++){let Oe=He[ht],xt=Ne[Oe.materialIndex];xt&&xt.visible&&A.push(E,Ae,xt,j,De.z,Oe,k)}}else Ne.visible&&A.push(E,Ae,Ne,j,De.z,null,k)}}}let _e=E.children;for(let ze=0,Ae=_e.length;ze<Ae;ze++)ns(_e[ze],k,j,Z)}function Cs(E,k,j,Z){let{opaque:$,transmissive:_e,transparent:ze}=E;w.setupLightsView(j),J===!0&&ae.setGlobalState(T.clippingPlanes,j),Z&&be.viewport(K.copy(Z)),$.length>0&&Jn($,k,j),_e.length>0&&Jn(_e,k,j),ze.length>0&&Jn(ze,k,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Is(E,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let Oe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new xn(1,1,{generateMipmaps:!0,type:Oe?si:Cn,minFilter:Ai,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let _e=w.state.transmissionRenderTarget[Z.id],ze=Z.viewport||K;_e.setSize(ze.z*T.transmissionResolutionScale,ze.w*T.transmissionResolutionScale);let Ae=T.getRenderTarget(),Ne=T.getActiveCubeFace(),He=T.getActiveMipmapLevel();T.setRenderTarget(_e),T.getClearColor(D),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),Ge&&O.render(j);let ht=T.toneMapping;T.toneMapping=ui;let gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),J===!0&&ae.setGlobalState(T.clippingPlanes,Z),Jn(E,j,Z),st.updateMultisampleRenderTarget(_e),st.updateRenderTargetMipmap(_e),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let xt=0,Gt=k.length;xt<Gt;xt++){let It=k[xt],{object:Pt,geometry:nn,material:ke,group:ln}=It;if(ke.side===Xn&&Pt.layers.test(Z.layers)){let nt=ke.side;ke.side=dn,ke.needsUpdate=!0,is(Pt,j,Z,nn,ke,ln),ke.side=nt,ke.needsUpdate=!0,Oe=!0}}Oe===!0&&(st.updateMultisampleRenderTarget(_e),st.updateRenderTargetMipmap(_e))}T.setRenderTarget(Ae,Ne,He),T.setClearColor(D,ee),gt!==void 0&&(Z.viewport=gt),T.toneMapping=ht}function Jn(E,k,j){let Z=k.isScene===!0?k.overrideMaterial:null;for(let $=0,_e=E.length;$<_e;$++){let ze=E[$],{object:Ae,geometry:Ne,group:He}=ze,ht=ze.material;ht.allowOverride===!0&&Z!==null&&(ht=Z),Ae.layers.test(j.layers)&&is(Ae,k,j,Ne,ht,He)}}function is(E,k,j,Z,$,_e){U!==null&&$.isNodeMaterial&&U.setObject(E,$),E.onBeforeRender(T,k,j,Z,$,_e),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(T,k,j,Z,E,_e),$.transparent===!0&&$.side===Xn&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,T.renderBufferDirect(j,k,Z,$,E,_e),$.side=ji,$.needsUpdate=!0,T.renderBufferDirect(j,k,Z,$,E,_e),$.side=Xn):T.renderBufferDirect(j,k,Z,$,E,_e),E.onAfterRender(T,k,j,Z,$,_e)}function pr(E){let k=0;for(let j of E)j.texture!==null&&k++;return k}function Ni(E,k,j){k.isScene!==!0&&(k=$e);let Z=Xe.get(E),$=w.state.lights,_e=w.state.shadowsArray,ze=$.state.version,Ae=oe.getParameters(E,$.state,_e,k,j,w.state.lightProbeGridArray),Ne=oe.getProgramCacheKey(Ae),He=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;let ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=C.get(E.envMap||Z.environment,ht),Z.envMapRotation=Z.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",at),He=new Map,Z.programs=He,Z.programVariants=new Map);let gt=He.get(Ne);if(gt!==void 0){if(Z.currentProgram===gt&&Z.lightsStateVersion===ze)return mr(E,Ae),gt}else Ae.uniforms=oe.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,j,Ae),E.onBeforeCompile(Ae,T),gt=oe.acquireProgram(Ae,Ne),He.set(Ne,gt),Z.uniforms=Ae.uniforms;let Oe=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=ae.uniform),mr(E,Ae),Z.needsLights=zn(E),Z.lightsStateVersion=ze,Z.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.sunLights.value=$.state.sun,Oe.sunLightShadows.value=$.state.sunShadow,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.sunShadowMatrix.value=$.state.sunShadowMatrix,Oe.sunShadowCascade.value=$.state.sunShadowCascade,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=pr(w.state.lightProbeGridArray),Z.currentProgram=gt,Z.uniformsList=null,gt}function ya(E,k,j,Z,$){let _e=Xe.get(E),ze=_e.currentProgram.id+","+Z+","+$,Ae=_e.programVariants.get(ze);return Ae===void 0?(Ae=Ni(E,k,j),_e.programVariants.set(ze,Ae)):(_e.currentProgram=Ae,_e.uniformsList=null,_e.outputColorSpace=Z,_e.toneMapping=$),Ae}function ss(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=dr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function mr(E,k){let j=Xe.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Fi(E,k,j,Z,$){k.isScene!==!0&&(k=$e),st.resetTextureUnits();let _e=k.fog,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,Ae=X===null?T.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:wt.workingColorSpace,Ne=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,He=C.get(Z.envMap||ze,Ne),ht=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,gt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color,It=ui;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(It=T.toneMapping);let Pt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nn=Pt!==void 0?Pt.length:0,ke=Xe.get(Z),ln=w.state.lights;if(J===!0&&(ce===!0||E!==W)){let pe=E===W&&Z.id===H;ae.setState(Z,E,pe)}let nt=!1,Kn=!1;Z.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==ln.state.version||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==He||Z.fog===!0&&ke.fog!==_e||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==ht||ke.vertexTangents!==gt||ke.morphTargets!==Oe||ke.morphNormals!==xt||ke.morphColors!==Gt||ke.morphTargetsCount!==nn||ke.numLightProbeGrids!==pr(w.state.lightProbeGridArray)?nt=!0:(ke.outputColorSpace!==Ae||ke.toneMapping!==It)&&(Kn=!0):(nt=!0,ke.__version=Z.version);let Qt=ke.currentProgram;(nt===!0||Kn===!0)&&(Qt=Kn===!0?ya(Z,k,$,Ae,It):Ni(Z,k,$),U&&Z.isNodeMaterial&&U.onUpdateProgram(Z,Qt,ke));let gi=!1,Qn=!1,Ui=!1,te=Qt.getUniforms(),de=ke.uniforms;if(be.useProgram(Qt.program)&&(gi=!0,Qn=!0,Ui=!0),Z.id!==H&&(H=Z.id,Qn=!0),gi||W!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),te.setValue(G,"projectionMatrix",E.projectionMatrix),te.setValue(G,"viewMatrix",E.matrixWorldInverse);let Je=te.map.cameraPosition;Je!==void 0&&Je.setValue(G,Le.setFromMatrixPosition(E.matrixWorld)),Tt.logarithmicDepthBuffer&&te.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&te.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Qn=!0,Ui=!0)}if(ke.needsLights&&(ln.state.sunShadowMap.length>0&&te.setValue(G,"sunShadowMap",ln.state.sunShadowMap,st),ln.state.directionalShadowMap.length>0&&te.setValue(G,"directionalShadowMap",ln.state.directionalShadowMap,st),ln.state.spotShadowMap.length>0&&te.setValue(G,"spotShadowMap",ln.state.spotShadowMap,st),ln.state.pointShadowMap.length>0&&te.setValue(G,"pointShadowMap",ln.state.pointShadowMap,st)),$.isSkinnedMesh){te.setOptional(G,$,"bindMatrix"),te.setOptional(G,$,"bindMatrixInverse");let pe=$.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),te.setValue(G,"boneTexture",pe.boneTexture,st))}$.isBatchedMesh&&(te.setOptional(G,$,"batchingTexture"),te.setValue(G,"batchingTexture",$._matricesTexture,st),te.setOptional(G,$,"batchingIdTexture"),te.setValue(G,"batchingIdTexture",$._indirectTexture,st),te.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&te.setValue(G,"batchingColorTexture",$._colorsTexture,st));let Ie=j.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&se.update($,j,Qt),(Qn||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,te.setValue(G,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(de.envMapIntensity.value=k.environmentIntensity),de.dfgLUT!==void 0&&(de.dfgLUT.value=lx()),Qn){if(te.setValue(G,"toneMappingExposure",T.toneMappingExposure),ke.needsLights&&Ma(de,Ui),_e&&Z.fog===!0&&Te.refreshFogUniforms(de,_e),Te.refreshMaterialUniforms(de,Z,he,xe,w.state.transmissionRenderTarget[E.id]),ke.needsLights&&ke.numLightProbeGrids>0){let pe=y,Je=0;for(let Be of w.state.lightProbeGridArray)Be.texture!==null&&(pe.textures[Je]=Be.texture,pe.min[Je]=Be.boundingBox.min,pe.max[Je]=Be.boundingBox.max,pe.resolution[Je]=Be.resolution,Je++);for(let Be in pe)pe[Be].length=Je;de.probesSH.value=pe.textures,de.probesMin.value=pe.min,de.probesMax.value=pe.max,de.probesResolution.value=pe.resolution}dr.upload(G,ss(ke),de,st)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(dr.upload(G,ss(ke),de,st),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&te.setValue(G,"center",$.center),te.setValue(G,"modelViewMatrix",$.modelViewMatrix),te.setValue(G,"normalMatrix",$.normalMatrix),te.setValue(G,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let pe=Z.uniformsGroups;for(let Je=0,Be=pe.length;Je<Be;Je++){let Ut=pe[Je];We.update(Ut,Qt),We.bind(Ut,Qt)}}return Qt}function Ma(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function zn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,k,j){let Z=Xe.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=k,Xe.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let j=Xe.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,j=0){X=E,F=k,B=j;let Z=null,$=!1,_e=!1;if(E){let Ae=Xe.get(E);if(Ae.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(G.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(E.viewport),le.copy(E.scissor),me=E.scissorTest,be.viewport(K),be.scissor(le),be.setScissorTest(me),H=-1;return}else if(Ae.__webglFramebuffer===void 0)st.setupRenderTarget(E);else if(Ae.__hasExternalTextures)st.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ht=E.depthTexture;if(Ae.__boundDepthTexture!==ht){if(ht!==null&&Xe.has(ht)&&(E.width!==ht.image.width||E.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(E)}}let Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);let He=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[k])?Z=He[k][j]:Z=He[k],$=!0):E.samples>0&&st.useMultisampledRTT(E)===!1?Z=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?Z=He[j]:Z=He,K.copy(E.viewport),le.copy(E.scissor),me=E.scissorTest}else K.copy(Pe).multiplyScalar(he).floor(),le.copy(Ve).multiplyScalar(he).floor(),me=tt;if(j!==0&&(Z=N),be.bindFramebuffer(G.FRAMEBUFFER,Z)&&be.drawBuffers(E,Z),be.viewport(K),be.scissor(le),be.setScissorTest(me),$){let Ae=Xe.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,j)}else if(_e){let Ae=k;for(let Ne=0;Ne<E.textures.length;Ne++){let He=Xe.get(E.textures[Ne]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ne,He.__webglTexture,j,Ae)}}else if(E!==null&&j!==0){let Ae=Xe.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ae.__webglTexture,j)}H=-1};function gr(E){let k=Xe.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=Tt.textureFormatReadable(E.format),k.__typeReadable=Tt.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,j,Z,$,_e,ze,Ae=0){if(!(E&&E.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ne=Ne[ze],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){be.bindFramebuffer(G.FRAMEBUFFER,Ne);try{let He=E.textures[Ae],ht=He.format,gt=He.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae);let Oe=gr(He);if(Oe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Z&&j>=0&&j<=E.height-$&&G.readPixels(k,j,Z,$,fe.convert(ht),fe.convert(gt),_e)}finally{let He=X!==null?Xe.get(X).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,k,j,Z,$,_e,ze,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ze!==void 0&&(Ne=Ne[ze],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(k>=0&&k<=E.width-Z&&j>=0&&j<=E.height-$){be.bindFramebuffer(G.FRAMEBUFFER,Ne);let He=E.textures[Ae],ht=He.format,gt=He.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae);let Oe=gr(He);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,xt),G.bufferData(G.PIXEL_PACK_BUFFER,_e.byteLength,G.STREAM_READ),G.readPixels(k,j,Z,$,fe.convert(ht),fe.convert(gt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Gt=X!==null?Xe.get(X).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,Gt);let It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qu(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,xt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,_e),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(xt),G.deleteSync(It),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,j=0){let Z=Math.pow(2,-j),$=Math.floor(E.image.width*Z),_e=Math.floor(E.image.height*Z),ze=k!==null?k.x:0,Ae=k!==null?k.y:0;st.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,ze,Ae,$,_e),be.unbindTexture()},this.copyTextureToTexture=function(E,k,j=null,Z=null,$=0,_e=0){let ze,Ae,Ne,He,ht,gt,Oe,xt,Gt,It=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(j!==null)ze=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Ne=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,ht=j.min.y,gt=j.isBox3?j.min.z:0;else{let te=Math.pow(2,-$);ze=Math.floor(It.width*te),Ae=Math.floor(It.height*te),E.isDataArrayTexture?Ne=It.depth:E.isData3DTexture?Ne=Math.floor(It.depth*te):Ne=1,He=0,ht=0,gt=0}Z!==null?(Oe=Z.x,xt=Z.y,Gt=Z.z):(Oe=0,xt=0,Gt=0);let Pt=fe.convert(k.format),nn=fe.convert(k.type),ke;k.isData3DTexture?(st.setTexture3D(k,0),ke=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(st.setTexture2DArray(k,0),ke=G.TEXTURE_2D_ARRAY):(st.setTexture2D(k,0),ke=G.TEXTURE_2D),be.activeTexture(G.TEXTURE0),be.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),be.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),be.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let ln=be.getParameter(G.UNPACK_ROW_LENGTH),nt=be.getParameter(G.UNPACK_IMAGE_HEIGHT),Kn=be.getParameter(G.UNPACK_SKIP_PIXELS),Qt=be.getParameter(G.UNPACK_SKIP_ROWS),gi=be.getParameter(G.UNPACK_SKIP_IMAGES);be.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),be.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),be.pixelStorei(G.UNPACK_SKIP_PIXELS,He),be.pixelStorei(G.UNPACK_SKIP_ROWS,ht),be.pixelStorei(G.UNPACK_SKIP_IMAGES,gt);let Qn=E.isDataArrayTexture||E.isData3DTexture,Ui=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let te=Xe.get(E),de=Xe.get(k),Ie=Xe.get(te.__renderTarget),pe=Xe.get(de.__renderTarget);be.bindFramebuffer(G.READ_FRAMEBUFFER,Ie.__webglFramebuffer),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Je=0;Je<Ne;Je++)Qn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,$,gt+Je),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xe.get(k).__webglTexture,_e,Gt+Je)),G.blitFramebuffer(He,ht,He+ze,ht+Ae,Oe,xt,Oe+ze,xt+Ae,G.DEPTH_BUFFER_BIT,G.NEAREST);be.bindFramebuffer(G.READ_FRAMEBUFFER,null),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||Xe.has(E)){let te=Xe.get(E),de=Xe.get(k);be.bindFramebuffer(G.READ_FRAMEBUFFER,R),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,I);for(let Ie=0;Ie<Ne;Ie++)Qn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.__webglTexture,$,gt+Ie):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,te.__webglTexture,$),Ui?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,de.__webglTexture,_e,Gt+Ie):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,de.__webglTexture,_e),$!==0?G.blitFramebuffer(He,ht,He+ze,ht+Ae,Oe,xt,Oe+ze,xt+Ae,G.COLOR_BUFFER_BIT,G.NEAREST):Ui?G.copyTexSubImage3D(ke,_e,Oe,xt,Gt+Ie,He,ht,ze,Ae):G.copyTexSubImage2D(ke,_e,Oe,xt,He,ht,ze,Ae);be.bindFramebuffer(G.READ_FRAMEBUFFER,null),be.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ui?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(ke,_e,Oe,xt,Gt,ze,Ae,Ne,Pt,nn,It.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,_e,Oe,xt,Gt,ze,Ae,Ne,Pt,It.data):G.texSubImage3D(ke,_e,Oe,xt,Gt,ze,Ae,Ne,Pt,nn,It):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,_e,Oe,xt,ze,Ae,Pt,nn,It.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,_e,Oe,xt,It.width,It.height,Pt,It.data):G.texSubImage2D(G.TEXTURE_2D,_e,Oe,xt,ze,Ae,Pt,nn,It);be.pixelStorei(G.UNPACK_ROW_LENGTH,ln),be.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt),be.pixelStorei(G.UNPACK_SKIP_PIXELS,Kn),be.pixelStorei(G.UNPACK_SKIP_ROWS,Qt),be.pixelStorei(G.UNPACK_SKIP_IMAGES,gi),_e===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&G.generateMipmap(ke),be.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&st.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?st.setTextureCube(E,0):E.isData3DTexture?st.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?st.setTexture2DArray(E,0):st.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){F=0,B=0,X=null,be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};function Gd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new un;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Hd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let m=Hd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Hd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Un(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let x=h.getComponent(u,m);o.setComponent(u+f,m,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var Q={ink:"#000000",paper:"#FFFFFF",yellow:"#FFE14D",mint:"#2FBF71",zorin:"#3D7BFF",endless:"#FF7A1A",grey:"#D9D9D3",light:"#ECECE6"},Mt=1024,mt=626,bl='"Archivo Black", "Arial Black", Impact, sans-serif';function Xd(i,e,t,n,s,r){if(i.beginPath(),i.roundRect){i.roundRect(e,t,n,s,r);return}i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function bt(i,e,t,n,s,r,a,o=8){Xd(i,e,t,n,s,r),i.fillStyle=a,i.fill(),o&&(i.lineWidth=o,i.strokeStyle=Q.ink,i.stroke())}function on(i,e,t,n,s,r=8){i.beginPath(),i.arc(e,t,n,0,Math.PI*2),i.fillStyle=s,i.fill(),r&&(i.lineWidth=r,i.strokeStyle=Q.ink,i.stroke())}function Ii(i,e,t=10,n=Q.ink){i.beginPath(),i.moveTo(e[0],e[1]);for(let s=2;s<e.length;s+=2)i.lineTo(e[s],e[s+1]);i.lineWidth=t,i.lineCap="round",i.lineJoin="round",i.strokeStyle=n,i.stroke()}function Vd(i,e,t,n,s,r,a){bt(i,e+12,t+12,n,s,18,Q.ink,0),bt(i,e,t,n,s,18,Q.paper),Xd(i,e+4,t+4,n-8,52,14),i.fillStyle=Q.light,i.fill(),i.fillStyle=Q.ink,i.fillRect(e+4,t+56,n-8,6),[r,Q.grey,Q.grey].forEach((l,c)=>on(i,e+n-34-c*34,t+30,11,l,4)),[.62,.8,.5].forEach((l,c)=>bt(i,e+32,t+92+c*34,n*l-40,16,8,Q.grey,0)),bt(i,e+32,t+200,n*.42,s-232,12,a,5)}function Wd(i,e,t,n,s,r){let a=70+s*44;bt(i,e+10,t+10,n,a,16,Q.ink,0),bt(i,e,t,n,a,16,Q.paper),bt(i,e+18,t+18,n-36,34,17,Q.light,4);for(let o=0;o<s;o++){let l=t+72+o*44;bt(i,e+22,l,26,26,6,r[o%r.length],4),bt(i,e+64,l+7,[150,110,170,130,140][o%5],12,6,Q.grey,0)}}var qd={hello(i){i.fillStyle=Q.endless,i.fillRect(0,0,Mt,mt),on(i,Mt/2+16,mt/2+16,200,Q.ink,0),on(i,Mt/2,mt/2,200,Q.paper,10),i.fillStyle=Q.ink,i.font=`300px ${bl}`,i.textAlign="center",i.textBaseline="middle",i.fillText("?",Mt/2+6,mt/2+18)},grid100(i){i.fillStyle=Q.yellow,i.fillRect(0,0,Mt,mt);let e=40,t=12,n=10,s=n*e+(n-1)*t,r=(Mt-s)/2,a=(mt-s)/2;for(let o=0;o<100;o++){let l=r+o%n*(e+t),c=a+Math.floor(o/n)*(e+t);bt(i,l,c,e,e,8,Q.paper,5)}},funnel(i){i.fillStyle=Q.ink,i.fillRect(0,0,Mt,mt),i.beginPath(),i.moveTo(262,110),i.lineTo(762,110),i.lineTo(580,330),i.lineTo(580,450),i.lineTo(444,450),i.lineTo(444,330),i.closePath(),i.fillStyle=Q.paper,i.fill(),i.lineWidth=10,i.strokeStyle=Q.yellow,i.stroke(),[Q.mint,Q.zorin,Q.endless].forEach((e,t)=>on(i,412+t*100,530,30,e,7)),i.strokeStyle=Q.ink},mint(i){i.fillStyle=Q.mint,i.fillRect(0,0,Mt,mt),bt(i,36,34,64,64,14,Q.paper,6),bt(i,36,130,64,64,14,Q.yellow,6),Vd(i,420,60,560,410,Q.mint,"#CDEFD9"),Wd(i,30,238,330,5,[Q.ink,Q.grey,Q.mint,Q.light,Q.ink]),i.fillStyle=Q.ink,i.fillRect(0,mt-62,Mt,62),bt(i,22,mt-50,38,38,8,Q.yellow,0),[84,132,180].forEach(e=>bt(i,e,mt-46,34,30,6,Q.paper,0)),bt(i,Mt-120,mt-42,96,22,11,Q.paper,0)},zorin(i){i.fillStyle=Q.zorin,i.fillRect(0,0,Mt,mt),bt(i,36,34,64,64,14,Q.paper,6),bt(i,36,130,64,64,14,Q.yellow,6),Vd(i,150,70,480,380,Q.zorin,"#D5E3FF"),bt(i,702,82,290,250,22,Q.ink,0),bt(i,690,70,290,250,22,Q.paper);let e=835,t=250,n=92;i.lineCap="round",i.beginPath(),i.arc(e,t,n,Math.PI,0),i.lineWidth=22,i.strokeStyle=Q.light,i.stroke(),i.beginPath(),i.arc(e,t,n,Math.PI,Math.PI*1.25),i.strokeStyle=Q.zorin,i.stroke(),Ii(i,[e,t,e+Math.cos(Math.PI*1.2)*74,t+Math.sin(Math.PI*1.2)*74],12),on(i,e,t,14,Q.ink,0),Wd(i,30,300,300,3,[Q.zorin,Q.ink,Q.grey]),i.fillStyle=Q.paper,i.fillRect(0,mt-62,Mt,62),i.fillStyle=Q.ink,i.fillRect(0,mt-66,Mt,6),bt(i,22,mt-50,38,38,8,Q.zorin,5),[84,132].forEach(s=>bt(i,s,mt-46,34,30,6,"#777770",0)),bt(i,Mt-120,mt-42,96,22,11,"#777770",0)},endless(i){i.fillStyle=Q.endless,i.fillRect(0,0,Mt,mt),bt(i,300,40,424,64,32,Q.paper,7),on(i,340,72,13,Q.paper,6),Ii(i,[350,82,362,94],7),bt(i,380,64,200,14,7,Q.grey,0);let e=[Q.paper,Q.ink,Q.yellow];for(let t=0;t<18;t++){let n=182+t%6*112,s=140+Math.floor(t/6)*128,r=e[(t+Math.floor(t/6))%3];bt(i,n,s,84,84,22,r,7);let a=r===Q.paper?Q.endless:r===Q.ink?Q.yellow:Q.ink;t%3===0?on(i,n+42,s+42,17,a,0):t%3===1?bt(i,n+26,s+26,32,32,7,a,0):(bt(i,n+22,s+28,40,10,5,a,0),bt(i,n+22,s+46,28,10,5,a,0))}i.fillStyle=Q.ink,i.fillRect(0,mt-56,Mt,56);for(let t=0;t<5;t++)on(i,Mt/2-100+t*50,mt-28,11,Q.paper,0);on(i,930,72,44,Q.ink,0),i.lineCap="round",[12,24,36].forEach(t=>{i.beginPath(),i.arc(930,92,t,Math.PI*1.25,Math.PI*1.75),i.lineWidth=6,i.strokeStyle=Q.paper,i.stroke()}),Ii(i,[904,44,956,100],8,Q.yellow)},chart(i){i.fillStyle=Q.paper,i.fillRect(0,0,Mt,mt);let e=mt-90;[[18,Q.mint],[16,Q.zorin],[20,Q.endless]].forEach(([n,s],r)=>{let a=n/25*420,o=222+r*210;bt(i,o+14,e-a+14,150,a,10,Q.ink,0),bt(i,o,e-a,150,a,10,s)}),Ii(i,[120,e+4,Mt-120,e+4],12)},access(i){i.fillStyle=Q.zorin,i.fillRect(0,0,Mt,mt),on(i,Mt/2+16,mt/2+16,220,Q.ink,0),on(i,Mt/2,mt/2,220,Q.paper,10);let e=Mt/2,t=mt/2;on(i,e,t-118,34,Q.ink,0),Ii(i,[e-130,t-54,e+130,t-54],30),Ii(i,[e,t-54,e,t+40],30),Ii(i,[e,t+40,e-66,t+150],30),Ii(i,[e,t+40,e+66,t+150],30)},check(i){i.fillStyle=Q.endless,i.fillRect(0,0,Mt,mt),on(i,Mt/2+16,mt/2+16,210,Q.ink,0),on(i,Mt/2,mt/2,210,Q.paper,10),Ii(i,[Mt/2-104,mt/2+6,Mt/2-30,mt/2+82,Mt/2+112,mt/2-76],46)},usb(i){i.fillStyle=Q.yellow,i.fillRect(0,0,Mt,mt),i.save(),i.translate(Mt/2,mt/2),i.rotate(-.35),bt(i,-242,-77,360,190,30,Q.ink,0),bt(i,-260,-95,360,190,30,Q.ink,0),bt(i,-200,-50,200,100,14,Q.endless,7),bt(i,100,-66,170,132,12,Q.paper,9),bt(i,150,-34,34,26,4,Q.ink,0),bt(i,150,10,34,26,4,Q.ink,0),i.restore()},smile(i){i.fillStyle=Q.mint,i.fillRect(0,0,Mt,mt),on(i,Mt/2+16,mt/2+16,220,Q.ink,0),on(i,Mt/2,mt/2,220,Q.yellow,10),on(i,Mt/2-76,mt/2-50,26,Q.ink,0),on(i,Mt/2+76,mt/2-50,26,Q.ink,0),i.beginPath(),i.arc(Mt/2,mt/2+10,120,.15*Math.PI,.85*Math.PI),i.lineWidth=26,i.lineCap="round",i.strokeStyle=Q.ink,i.stroke()}},Yd=Object.keys(qd);function xh(i,e){let t=e||document.createElement("canvas");t.width=Mt,t.height=mt;let n=t.getContext("2d");return n.clearRect(0,0,Mt,mt),n.lineJoin="round",qd[i](n),t}function vh(i,e,t,n){let s=n||document.createElement("canvas");s.width=640,s.height=208;let r=s.getContext("2d");r.clearRect(0,0,s.width,s.height),bt(r,9,9,s.width-18,s.height-18,22,e,18);let a=96;for(r.font=`${a}px ${bl}`;r.measureText(i).width>s.width-110&&a>40;)a-=4,r.font=`${a}px ${bl}`;return r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.fillText(i,s.width/2,s.height/2+a*.06),s}function yh(i,e,t,n){let s=n||document.createElement("canvas");s.width=256,s.height=256;let r=s.getContext("2d");return r.clearRect(0,0,256,256),on(r,128,128,116,e,14),r.fillStyle=t,r.font=`160px ${bl}`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,140),s}var ga=new z;function Yn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ga.copy(e),ga[n]=0,ga.normalize();let c=.5*a/(a+o),h=1-ga.angleTo(i)/l;return Math.sign(ga[t])===1?h*c:o/(a+o)+c+c*(1-h)}var El=class i extends hi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,h=new z(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,x=new z,g=.5/a;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/m)){case 0:x.set(1,0,0),d[v+0]=Yn(x,c,"z","y",r,n),d[v+1]=1-Yn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-Yn(x,c,"z","y",r,n),d[v+1]=1-Yn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[v+0]=1-Yn(x,c,"x","z",r,e),d[v+1]=Yn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-Yn(x,c,"x","z",r,e),d[v+1]=1-Yn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[v+0]=1-Yn(x,c,"x","y",r,e),d[v+1]=1-Yn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[v+0]=Yn(x,c,"x","y",r,e),d[v+1]=1-Yn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var _t=(i,e,t)=>i+(e-i)*t,pi=i=>Math.min(1,Math.max(0,i)),Ye=(i,e,t)=>{let n=pi((t-i)/(e-i));return n*n*(3-2*n)},wl=i=>1-(1-i)**3,Mn=i=>{let e=i-1;return 1+2.7*e*e*e+1.7*e*e},tn={pop(){},whoosh(){},tada(){},beat(){return-1}},ge={yellow:"#FFE14D",pink:"#FF9ECF",lilac:"#B7A3FF",sky:"#7CC8FF",peach:"#FFB07A",lime:"#C8EE5A",aqua:"#6EE2D0",coral:"#FF8F8F",red:"#FF4D4D",cyan:"#5CE1E6",white:"#FFFFFF",ink:"#000000",grey:"#D9D9D9"},Mh=new Map;function In(i=.035){if(Mh.has(i))return Mh.get(i);let e=new An({uniforms:{uT:{value:i}},vertexShader:`uniform float uT;
      void main(){
        vec4 p = vec4(position + normal * uT, 1.0);
        #ifdef USE_INSTANCING
        p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
      }`,fragmentShader:"void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }",side:dn});return Mh.set(i,e),e}var _a=new ps(new Uint8Array([110,190,255]),3,1,hr);_a.minFilter=_a.magFilter=en;_a.needsUpdate=!0;var Sh=new Map,Qe=i=>(Sh.has(i)||Sh.set(i,new sr({color:i,gradientMap:_a})),Sh.get(i)),Pi=(i,e={})=>new sr({color:i,gradientMap:_a,...e}),yt=(i,e,t=.035)=>{let n=new Ke;return n.add(new lt(i,e)),n.add(new lt(i,In(t))),n},Ct=(i,e,t,n=.06,s=3)=>new El(i,e,t,s,Math.min(n,Math.min(i,e,t)/2-.002)),Tl=[];function ts(i,e,t=Q.ink){let n=new Ke,s=1.9,r=.62,a=Ct(s,r,.07,.04,2);n.add(new lt(a,Qe(e))),n.add(new lt(a,In(.022)));let o=new ni(vh(i,e,t));o.colorSpace=qt,o.anisotropy=4;let l=new lt(new vn(s,r),new sn({map:o,transparent:!0,toneMapped:!1}));return l.position.z=.036,n.add(l),n.userData.redraw=()=>{vh(i,e,t,o.image),o.needsUpdate=!0},Tl.push(n),n}var Zn=new Jt;function bh(i,e=[0,.2,.6]){let n=new Ot(new vn(.15,.09),new sn({side:Xn,toneMapped:!1}),120),s=[Q.mint,Q.zorin,Q.endless,ge.white,ge.ink,ge.yellow,ge.pink].map(c=>new qe(c)),r=[],a=[],o=[];for(let c=0;c<120;c++)n.setColorAt(c,s[c%s.length]),r.push(new z),a.push(new z),o.push(new z);n.visible=!1,n.frustumCulled=!1,i.add(n);let l=99;return{burst(){l=0,n.visible=!0;for(let c=0;c<120;c++)r[c].set(e[0]+(Math.random()-.5)*1.2,e[1],e[2]),a[c].set((Math.random()-.5)*6,2.5+Math.random()*4,.4+Math.random()*2.4),o[c].set(Math.random()*6,Math.random()*6,Math.random()*6)},update(c){if(n.visible){l+=c;for(let h=0;h<120;h++)a[h].y-=7*c,r[h].addScaledVector(a[h],c),o[h].x+=c*5,o[h].y+=c*4,Zn.position.copy(r[h]),Zn.rotation.set(o[h].x,o[h].y,o[h].z),Zn.scale.setScalar(l>2.4?Math.max(1e-4,1-(l-2.4)/.4):1),Zn.updateMatrix(),n.setMatrixAt(h,Zn.matrix);n.instanceMatrix.needsUpdate=!0,l>2.8&&(n.visible=!1)}}}}function Eh(i,{count:e=32,colors:t,seed:n=1,spread:s=[8,5,4],back:r=-2.5}={}){let a=n,o=()=>(a=a*16807%2147483647,a/2147483647),l=[Ct(.34,.34,.34,.07),new Vn(.2,20,14),new Wn(.18,.075,10,26),new Ti(.21,.38,20)],c=Math.ceil(e/l.length),h=l.map(f=>{let u=new Ot(f,Pi(ge.white),c),d=new Ot(f,In(.025),c);u.frustumCulled=d.frustumCulled=!1,i.add(d,u);let m=[];for(let x=0;x<c;x++){let g,p;do g=(o()-.5)*2*s[0],p=(o()-.5)*2*s[1];while(Math.abs(g)<2.8&&Math.abs(p)<2.3);m.push({x:g,y:p,z:r-o()*s[2],ph:o()*6.28,sp:.4+o()*.8,sc:.7+o()*.8}),u.setColorAt(x,new qe(t[Math.floor(o()*t.length)]))}return{m:u,o:d,items:m}});return{update(f,u=1,d=null){for(let{m,o:x,items:g}of h)g.forEach((p,v)=>{Zn.position.set(p.x+Math.sin(f*.3*p.sp+p.ph)*.3,p.y+Math.sin(f*.6*p.sp+p.ph)*.35,p.z),Zn.rotation.set(f*.5*p.sp+p.ph,f*.7*p.sp,p.ph),p.k=_t(p.k??1,d?d(Zn.position):1,.12),Zn.scale.setScalar(Math.max(p.sc*u*p.k,1e-4)),Zn.updateMatrix(),m.setMatrixAt(v,Zn.matrix),x.setMatrixAt(v,Zn.matrix)}),m.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,m.visible=x.visible=u>.01}}}var cx='"Helvetica Neue", Helvetica, Arial, "DejaVu Sans", sans-serif',fn=(i,e)=>{let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]};function ft(i,e,t,n,s,r){let a=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+a,t),i.arcTo(e+n,t,e+n,t+s,a),i.arcTo(e+n,t+s,e,t+s,a),i.arcTo(e,t+s,e,t,a),i.arcTo(e,t,e+n,t,a),i.closePath()}function kt(i,e,t,n,s,r,a=400,o="left"){i.font=`${a} ${s}px ${cx}`,i.fillStyle=r,i.textAlign=o,i.textBaseline="middle",i.fillText(e,t,n)}function Th(i,e,t,n,s=15){i.save(),i.shadowColor="rgba(0,0,0,.75)",i.shadowBlur=5,i.shadowOffsetY=1,kt(i,e,t,n,s,"#fff",600,"center"),i.restore()}function wh(i,e){let t=parseInt(i.slice(1),16),n=s=>Math.round(e<0?s*(1+e):s+(255-s)*e);return`rgb(${n(t>>16&255)},${n(t>>8&255)},${n(t&255)})`}function Yt(i,e,t){i.strokeStyle=e,i.lineWidth=t,i.lineCap="round",i.lineJoin="round",i.stroke()}var je={folder(i,e,t,n,s="#7EBA4A"){let r=n,a=n*.78,o=e-r/2,l=t-a/2;i.fillStyle=wh(s,-.22),ft(i,o,l,r*.46,a*.3,n*.07),i.fill(),ft(i,o,l+a*.1,r,a*.9,n*.08),i.fill(),i.fillStyle=s,ft(i,o,l+a*.24,r,a*.76,n*.08),i.fill(),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(o+n*.06,l+a*.3,r-n*.12,n*.04)},globe(i,e,t,n,s="#2E86FF"){let r=n*.46,a=i.createLinearGradient(e,t-r,e,t+r);a.addColorStop(0,wh(s,.25)),a.addColorStop(1,wh(s,-.25)),i.fillStyle=a,i.beginPath(),i.arc(e,t,r,0,Math.PI*2),i.fill(),i.beginPath(),i.ellipse(e,t,r*.45,r,0,0,Math.PI*2),i.moveTo(e-r,t),i.lineTo(e+r,t),i.moveTo(e-r*.86,t-r*.5),i.lineTo(e+r*.86,t-r*.5),i.moveTo(e-r*.86,t+r*.5),i.lineTo(e+r*.86,t+r*.5),Yt(i,"rgba(255,255,255,.85)",Math.max(1.2,n*.045))},terminal(i,e,t,n){let s=n*.92,r=n*.78;i.fillStyle="#2b2b2b",ft(i,e-s/2,t-r/2,s,r,n*.1),i.fill(),i.fillStyle="#4a4a4a",ft(i,e-s/2,t-r/2,s,r*.2,n*.1),i.fill(),kt(i,">_",e-s*.32,t+r*.1,n*.34,"#7CFC8A",700)},gear(i,e,t,n,s="#8a96a3"){let r=n*.3;i.fillStyle=s;for(let a=0;a<8;a++)i.save(),i.translate(e,t),i.rotate(a*Math.PI/4),i.fillRect(-n*.07,-r-n*.13,n*.14,n*.2),i.restore();i.beginPath(),i.arc(e,t,r,0,Math.PI*2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e,t,r*.42,0,Math.PI*2),i.fill()},doc(i,e,t,n,s="#3D7BFF"){let r=n*.7,a=n*.9,o=e-r/2,l=t-a/2,c=n*.2;i.fillStyle="#fff",i.beginPath(),i.moveTo(o,l),i.lineTo(o+r-c,l),i.lineTo(o+r,l+c),i.lineTo(o+r,l+a),i.lineTo(o,l+a),i.closePath(),i.fill(),Yt(i,"rgba(0,0,0,.25)",1.5),i.fillStyle=s;for(let h=0;h<4;h++)i.fillRect(o+r*.15,l+a*(.32+h*.15),r*(h===3?.45:.7),Math.max(2,n*.045))},picture(i,e,t,n){let s=n*.9,r=n*.72,a=e-s/2,o=t-r/2;i.fillStyle="#6EC6FF",ft(i,a,o,s,r,n*.08),i.fill(),i.fillStyle="#FFE14D",i.beginPath(),i.arc(a+s*.72,o+r*.3,n*.1,0,Math.PI*2),i.fill(),i.fillStyle="#3BAA5C",i.beginPath(),i.moveTo(a,o+r),i.lineTo(a+s*.35,o+r*.4),i.lineTo(a+s*.6,o+r*.75),i.lineTo(a+s*.75,o+r*.55),i.lineTo(a+s,o+r),i.closePath(),i.fill()},music(i,e,t,n,s="#FF7A1A"){i.fillStyle=s,ft(i,e-n*.45,t-n*.45,n*.9,n*.9,n*.2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.ellipse(e-n*.12,t+n*.18,n*.11,n*.08,-.4,0,Math.PI*2),i.fill(),i.fillRect(e-n*.03,t-n*.25,n*.06,n*.44),i.fillRect(e-n*.03,t-n*.25,n*.2,n*.07)},film(i,e,t,n,s="#8E5CF7"){i.fillStyle=s,ft(i,e-n*.45,t-n*.45,n*.9,n*.9,n*.2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.moveTo(e-n*.12,t-n*.2),i.lineTo(e+n*.22,t),i.lineTo(e-n*.12,t+n*.2),i.closePath(),i.fill()},trash(i,e,t,n){i.fillStyle="#c9ced6",i.beginPath(),i.moveTo(e-n*.3,t-n*.22),i.lineTo(e+n*.3,t-n*.22),i.lineTo(e+n*.24,t+n*.42),i.lineTo(e-n*.24,t+n*.42),i.closePath(),i.fill(),i.fillStyle="#9aa3ad",ft(i,e-n*.36,t-n*.34,n*.72,n*.1,n*.03),i.fill(),i.fillRect(e-n*.08,t-n*.42,n*.16,n*.08),i.fillStyle="rgba(0,0,0,.18)";for(let s of[-.12,0,.12])i.fillRect(e+s*n-n*.02,t-n*.12,n*.04,n*.44)},monitor(i,e,t,n){i.fillStyle="#2b3440",ft(i,e-n*.46,t-n*.38,n*.92,n*.6,n*.06),i.fill();let s=i.createLinearGradient(e,t-n*.34,e,t+n*.18);s.addColorStop(0,"#5CC8FF"),s.addColorStop(1,"#2E6BFF"),i.fillStyle=s,i.fillRect(e-n*.41,t-n*.33,n*.82,n*.5),i.fillStyle="#2b3440",i.fillRect(e-n*.06,t+n*.22,n*.12,n*.12),ft(i,e-n*.22,t+n*.32,n*.44,n*.07,n*.03),i.fill()},bag(i,e,t,n,s="#FF7A1A"){i.fillStyle=s,ft(i,e-n*.36,t-n*.18,n*.72,n*.6,n*.08),i.fill(),i.beginPath(),i.arc(e,t-n*.18,n*.17,Math.PI,0),Yt(i,s,n*.07),i.fillStyle="#fff",i.beginPath(),i.arc(e,t+n*.1,n*.09,0,Math.PI*2),i.fill()},book(i,e,t,n){i.fillStyle="#fff",i.beginPath(),i.moveTo(e,t-n*.22),i.quadraticCurveTo(e-n*.2,t-n*.32,e-n*.4,t-n*.26),i.lineTo(e-n*.4,t+n*.3),i.quadraticCurveTo(e-n*.2,t+n*.24,e,t+n*.34),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e,t-n*.22),i.quadraticCurveTo(e+n*.2,t-n*.32,e+n*.4,t-n*.26),i.lineTo(e+n*.4,t+n*.3),i.quadraticCurveTo(e+n*.2,t+n*.24,e,t+n*.34),i.closePath(),i.fill(),i.fillStyle="rgba(0,0,0,.2)";for(let s=0;s<3;s++)i.fillRect(e-n*.32,t-n*.1+s*n*.12,n*.24,n*.03),i.fillRect(e+n*.08,t-n*.1+s*n*.12,n*.24,n*.03)},keyboard(i,e,t,n){i.fillStyle="#fff",ft(i,e-n*.42,t-n*.22,n*.84,n*.44,n*.06),i.fill(),i.fillStyle="#5b6470";for(let s=0;s<3;s++)for(let r=0;r<6;r++)i.fillRect(e-n*.36+r*n*.12,t-n*.16+s*n*.12,n*.09,n*.08)},pin(i,e,t,n){i.fillStyle="#FF4D4D",i.beginPath(),i.arc(e,t-n*.1,n*.24,Math.PI*.9,Math.PI*2.1),i.lineTo(e,t+n*.38),i.closePath(),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e,t-n*.1,n*.09,0,Math.PI*2),i.fill()},weather(i,e,t,n){i.fillStyle="#FFE14D",i.beginPath(),i.arc(e+n*.12,t-n*.1,n*.2,0,Math.PI*2),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(e-n*.12,t+n*.12,n*.16,0,Math.PI*2),i.arc(e+n*.06,t+n*.06,n*.19,0,Math.PI*2),i.arc(e+n*.24,t+n*.16,n*.13,0,Math.PI*2),i.fill(),i.fillRect(e-n*.12,t+n*.14,n*.36,n*.14)},gamepad(i,e,t,n){i.fillStyle="#fff",ft(i,e-n*.4,t-n*.18,n*.8,n*.38,n*.18),i.fill(),i.fillStyle="#5b6470",i.fillRect(e-n*.28,t-n*.03,n*.16,n*.05),i.fillRect(e-n*.225,t-n*.085,n*.05,n*.16),i.fillStyle="#FF4D4D",i.beginPath(),i.arc(e+n*.18,t-n*.04,n*.045,0,Math.PI*2),i.fill(),i.fillStyle="#3D7BFF",i.beginPath(),i.arc(e+n*.27,t+n*.04,n*.045,0,Math.PI*2),i.fill()},cap(i,e,t,n){i.fillStyle="#fff",i.beginPath(),i.moveTo(e-n*.42,t-n*.06),i.lineTo(e,t-n*.26),i.lineTo(e+n*.42,t-n*.06),i.lineTo(e,t+n*.14),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e-n*.24,t+n*.02),i.lineTo(e-n*.24,t+n*.22),i.quadraticCurveTo(e,t+n*.36,e+n*.24,t+n*.22),i.lineTo(e+n*.24,t+n*.02),i.lineTo(e,t+n*.14),i.closePath(),i.fill()},calc(i,e,t,n){i.fillStyle="#5b6470",ft(i,e-n*.32,t-n*.42,n*.64,n*.84,n*.08),i.fill(),i.fillStyle="#C8EE5A",i.fillRect(e-n*.24,t-n*.34,n*.48,n*.18),i.fillStyle="#fff";for(let s=0;s<3;s++)for(let r=0;r<3;r++)i.fillRect(e-n*.24+r*n*.17,t-n*.08+s*n*.15,n*.12,n*.1)},wifi(i,e,t,n,s="#ddd"){for(let r of[.18,.32,.46])i.beginPath(),i.arc(e,t+n*.3,r*n,Math.PI*1.25,Math.PI*1.75),Yt(i,s,n*.09);i.fillStyle=s,i.beginPath(),i.arc(e,t+n*.3,n*.06,0,Math.PI*2),i.fill()},speaker(i,e,t,n,s="#ddd"){i.fillStyle=s,i.beginPath(),i.moveTo(e-n*.36,t-n*.12),i.lineTo(e-n*.18,t-n*.12),i.lineTo(e+n*.04,t-n*.32),i.lineTo(e+n*.04,t+n*.32),i.lineTo(e-n*.18,t+n*.12),i.lineTo(e-n*.36,t+n*.12),i.closePath(),i.fill(),i.beginPath(),i.arc(e+n*.06,t,n*.2,-.9,.9),Yt(i,s,n*.08),i.beginPath(),i.arc(e+n*.06,t,n*.36,-.9,.9),Yt(i,s,n*.08)},battery(i,e,t,n,s="#ddd"){i.strokeStyle=s,i.lineWidth=n*.08,ft(i,e-n*.4,t-n*.2,n*.72,n*.4,n*.06),i.stroke(),i.fillStyle=s,i.fillRect(e+n*.34,t-n*.08,n*.08,n*.16),i.fillRect(e-n*.32,t-n*.12,n*.42,n*.24)},search(i,e,t,n,s="#999"){i.beginPath(),i.arc(e-n*.08,t-n*.08,n*.28,0,Math.PI*2),Yt(i,s,n*.12),i.beginPath(),i.moveTo(e+n*.13,t+n*.13),i.lineTo(e+n*.38,t+n*.38),Yt(i,s,n*.14)},power(i,e,t,n,s="#ccc"){i.beginPath(),i.arc(e,t+n*.04,n*.3,-Math.PI*.32,Math.PI*1.32),Yt(i,s,n*.1),i.beginPath(),i.moveTo(e,t-n*.36),i.lineTo(e,t-n*.02),Yt(i,s,n*.1)},lock(i,e,t,n,s="#ccc"){i.fillStyle=s,ft(i,e-n*.28,t-n*.04,n*.56,n*.42,n*.06),i.fill(),i.beginPath(),i.arc(e,t-n*.06,n*.18,Math.PI,0),Yt(i,s,n*.09)},grid(i,e,t,n,s="#fff"){i.fillStyle=s;for(let r=0;r<3;r++)for(let a=0;a<3;a++)i.beginPath(),i.arc(e-n*.3+a*n*.3,t-n*.3+r*n*.3,n*.09,0,Math.PI*2),i.fill()},home(i,e,t,n,s="#666"){i.fillStyle=s,i.beginPath(),i.moveTo(e,t-n*.4),i.lineTo(e+n*.42,t-n*.02),i.lineTo(e+n*.3,t-n*.02),i.lineTo(e+n*.3,t+n*.38),i.lineTo(e-n*.3,t+n*.38),i.lineTo(e-n*.3,t-n*.02),i.lineTo(e-n*.42,t-n*.02),i.closePath(),i.fill()},arrow(i,e,t,n,s="#666",r=-1){i.beginPath(),i.moveTo(e-r*n*.12,t-n*.22),i.lineTo(e+r*n*.12,t),i.lineTo(e-r*n*.12,t+n*.22),Yt(i,s,n*.12)},ring(i,e,t,n,s="#fff"){i.beginPath(),i.arc(e,t,n*.32,0,Math.PI*2),Yt(i,s,n*.12),i.fillStyle=s,i.beginPath(),i.arc(e,t,n*.1,0,Math.PI*2),i.fill()}};function Ah(i,e,t,n,s){i.beginPath(),i.moveTo(e-76,t),i.lineTo(e-64,t),Yt(i,n,2),i.strokeStyle=n,i.lineWidth=2,i.strokeRect(e-46,t-6,12,12),s&&(i.fillStyle=s,i.beginPath(),i.arc(e-14,t,11,0,Math.PI*2),i.fill()),i.beginPath(),i.moveTo(e-19,t-5),i.lineTo(e-9,t+5),i.moveTo(e-9,t-5),i.lineTo(e-19,t+5),Yt(i,s?"#fff":n,2)}function Rh(){let[i,e]=fn(40,56);e.beginPath();let t=[[3,3],[3,44],[13,34],[20,50],[27,47],[20,31],[34,31]];e.moveTo(t[0][0],t[0][1]);for(let[n,s]of t.slice(1))e.lineTo(n,s);return e.closePath(),e.fillStyle="#fff",e.fill(),Yt(e,"#000",2.5),i}function Ch(i,e,t,n=6){let[s,r]=fn(i,e);return ft(r,1,1,i-2,e-2,n),r.fillStyle=t,r.fill(),s}var xa="#35A854",bs="#7EBA4A";function Al(){let i={},[e,t]=fn(1280,800),n=t.createLinearGradient(0,0,1280,800);n.addColorStop(0,"#0c2925"),n.addColorStop(.55,"#1d5a44"),n.addColorStop(1,"#64b06f"),t.fillStyle=n,t.fillRect(0,0,1280,800);for(let[s,r,a,o]of[[990,170,280,.18],[1160,560,210,.12],[320,660,320,.08],[720,380,150,.1]]){let l=t.createRadialGradient(s,r,0,s,r,a);l.addColorStop(0,`rgba(190,255,205,${o})`),l.addColorStop(1,"rgba(190,255,205,0)"),t.fillStyle=l,t.fillRect(s-a,r-a,a*2,a*2)}t.strokeStyle="rgba(255,255,255,.035)",t.lineWidth=2;for(let s=-800;s<1280;s+=26)t.beginPath(),t.moveTo(s,800),t.lineTo(s+800,0),t.stroke();return[["monitor","Computer"],["folder","Home"],["trash","Trash"]].forEach(([s,r],a)=>{let o=64+a*118;je[s](t,70,o,62,s==="folder"?bs:void 0),Th(t,r,70,o+48)}),i.wall=e,[e,t]=fn(1280,44),t.fillStyle="#2d2d2d",t.fillRect(0,0,1280,44),t.fillStyle="#454545",t.fillRect(0,0,1280,1),t.fillStyle=xa,ft(t,8,6,32,32,6),t.fill(),je.grid(t,24,22,17,"#fff"),je.folder(t,66,22,26,bs),je.globe(t,102,22,26),je.terminal(t,138,22,26),t.fillStyle="#4a4a4a",t.fillRect(158,10,1,24),je.wifi(t,1106,20,22,"#ddd"),je.speaker(t,1140,22,20,"#ddd"),je.battery(t,1176,22,24,"#ddd"),kt(t,"10:24",1240,22,15,"#eee",500,"center"),i.panel=e,[e,t]=fn(170,36),ft(t,0,0,170,36,4),t.fillStyle="#4a4a4a",t.fill(),t.fillStyle=xa,t.fillRect(8,33,154,3),je.folder(t,24,17,20,bs),kt(t,"Home",44,18,14,"#eee",500),i.taskBtn=e,[e,t]=fn(560,480),ft(t,0,0,560,480,8),t.fillStyle="#353535",t.fill(),t.save(),ft(t,0,0,560,480,8),t.clip(),t.fillStyle="#2a2a2a",t.fillRect(0,0,64,480),je.globe(t,32,40,30),je.folder(t,32,94,30,bs),je.terminal(t,32,148,30),je.gear(t,32,202,30,"#9aa6b2"),je.lock(t,32,362,24),je.arrow(t,32,410,24,"#ccc",1),je.power(t,32,452,24),t.restore(),ft(t,80,16,464,36,6),t.fillStyle="#262626",t.fill(),je.search(t,102,34,18,"#9a9a9a"),["All Applications","Accessories","Administration","Education","Graphics","Internet","Office","Sound & Video","System Tools","Preferences"].forEach((s,r)=>{let a=84+r*38;r===0&&(ft(t,76,a-16,178,32,5),t.fillStyle="#4a4a4a",t.fill()),t.fillStyle=["#9aa6b2","#FFB74D","#EF5350","#AB47BC","#29B6F6","#42A5F5","#66BB6A","#FF7043","#78909C","#BDBDBD"][r],t.beginPath(),t.arc(94,a,7,0,Math.PI*2),t.fill(),kt(t,s,110,a,14,"#e6e6e6")}),t.fillStyle="#444",t.fillRect(262,72,1,390),[["calc","Calculator"],["folder","Files"],["doc","Text Editor"],["picture","Image Viewer"],["music","Music"],["film","Videos"],["globe","Web Browser"],["bag","Software Manager"],["terminal","Terminal"],["gear","System Settings"]].forEach(([s,r],a)=>{let o=84+a*38;je[s](t,290,o,24,s==="folder"?bs:s==="bag"?xa:void 0),kt(t,r,312,o,14,"#f0f0f0")}),i.menu=e,i.menuHi=Ch(272,32,"rgba(53,168,84,.55)",5),[e,t]=fn(780,480),ft(t,0,0,780,480,8),t.fillStyle="#fafafa",t.fill(),t.save(),ft(t,0,0,780,480,8),t.clip(),t.fillStyle="#e2e2e2",t.fillRect(0,0,780,44),kt(t,"Home",390,22,15,"#333",700,"center"),Ah(t,770,22,"#555"),t.fillStyle="#efefef",t.fillRect(0,44,780,44),je.arrow(t,24,66,22,"#777",-1),je.arrow(t,52,66,22,"#bbb",1),ft(t,84,54,110,24,12),t.fillStyle=xa,t.fill(),kt(t,"Home",139,66,13,"#fff",600,"center"),je.search(t,752,66,18,"#777"),t.fillStyle="#f3f3f3",t.fillRect(0,88,180,392),t.fillStyle="#dcdcdc",t.fillRect(180,88,1,392),kt(t,"My Computer",16,108,12,"#888",700),["Home","Desktop","Documents","Music","Pictures","Videos","Downloads","Trash"].forEach((s,r)=>{let a=136+r*34;r===0&&(t.fillStyle=xa,t.fillRect(0,a-15,180,30)),r===0?je.home(t,26,a,18,"#fff"):r===7?je.trash(t,26,a,20):je.folder(t,26,a,18,bs),kt(t,s,46,a,14,r===0?"#fff":"#333",r===0?600:400)}),["Desktop","Documents","Downloads","Music","Pictures","Public","Templates","Videos"].forEach((s,r)=>{let a=262+r%4*130,o=166+Math.floor(r/4)*140;je.folder(t,a,o,74,bs),kt(t,s,a,o+56,13,"#333",400,"center")}),t.fillStyle="#efefef",t.fillRect(181,452,600,28),kt(t,"8 items",480,466,12,"#777",400,"center"),t.restore(),ft(t,1,1,778,478,8),Yt(t,"rgba(0,0,0,.28)",2),i.win=e,i.cursor=Rh(),i}var Li="#2F6DF6",Es="#4C8DFF";function Rl(){let i={},[e,t]=fn(1280,800),n=t.createLinearGradient(0,0,1280*.6,800);n.addColorStop(0,"#0a1a5c"),n.addColorStop(.5,"#1f56d8"),n.addColorStop(1,"#79b6ff"),t.fillStyle=n,t.fillRect(0,0,1280,800);for(let s=0;s<7;s++){t.beginPath();for(let r=0;r<=1280;r+=16){let a=250+s*70+Math.sin(r/210+s*.9)*60+Math.sin(r/90+s)*12;r===0?t.moveTo(r,a):t.lineTo(r,a)}t.lineTo(1280,800),t.lineTo(0,800),t.closePath(),t.fillStyle=`rgba(255,255,255,${.035+s*.006})`,t.fill()}return[["folder","Home"],["trash","Trash"]].forEach(([s,r],a)=>{let o=64+a*118;je[s](t,70,o,62,s==="folder"?Es:void 0),Th(t,r,70,o+48)}),i.wall=e,[e,t]=fn(1280,46),t.fillStyle="#16181d",t.fillRect(0,0,1280,46),t.fillStyle=Li,ft(t,10,7,32,32,8),t.fill(),je.grid(t,26,23,17,"#fff"),je.folder(t,70,23,26,Es),je.globe(t,106,23,26),je.bag(t,142,24,26,Li),je.wifi(t,1108,21,22,"#cfd6e4"),je.speaker(t,1142,23,20,"#cfd6e4"),je.battery(t,1178,23,24,"#cfd6e4"),kt(t,"10:24",1240,23,15,"#eef2fa",500,"center"),i.panel=e,[e,t]=fn(170,36),ft(t,0,0,170,36,6),t.fillStyle="#2a2e37",t.fill(),t.fillStyle=Li,t.fillRect(10,32,150,4),je.folder(t,24,17,20,Es),kt(t,"Home",44,18,14,"#eef2fa",500),i.taskBtn=e,[e,t]=fn(620,520),ft(t,0,0,620,520,14),t.fillStyle="#fdfdfd",t.fill(),ft(t,18,18,584,42,21),t.fillStyle="#eef1f6",t.fill(),je.search(t,44,39,18,"#8a93a3"),kt(t,"Search\u2026",64,39,15,"#8a93a3"),[["globe","Web Browser"],["folder","Files"],["doc","Writer"],["bag","Software"],["gear","Settings"],["terminal","Terminal"],["calc","Calculator"],["picture","Photos"]].forEach(([s,r],a)=>{let o=96+a*46;je[s](t,46,o,28,s==="folder"?Es:s==="bag"?Li:void 0),kt(t,r,74,o,15,"#1d2330")}),t.fillStyle="#e4e8ef",t.fillRect(372,80,1,370),["Home","Documents","Downloads","Pictures","Music","Videos"].forEach((s,r)=>{let a=100+r*44;r===0?je.home(t,400,a,20,Li):je.folder(t,400,a,20,Es),kt(t,s,422,a,15,"#1d2330")}),t.fillStyle="#e4e8ef",t.fillRect(18,462,584,1),t.fillStyle="#c9d6f5",t.beginPath(),t.arc(46,492,16,0,Math.PI*2),t.fill(),t.fillStyle=Li,t.beginPath(),t.arc(46,487,6,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(46,503,10,Math.PI,0),t.fill(),je.lock(t,540,492,22,"#6b7487"),je.power(t,580,492,22,"#6b7487"),ft(t,1,1,618,518,14),Yt(t,"rgba(0,0,0,.18)",2),i.menu=e,i.menuHi=Ch(340,40,"rgba(47,109,246,.22)",8),[e,t]=fn(760,470),ft(t,0,0,760,470,10),t.fillStyle="#ffffff",t.fill(),t.save(),ft(t,0,0,760,470,10),t.clip(),t.fillStyle="#f2f4f8",t.fillRect(0,0,760,92),kt(t,"Home",380,22,15,"#1d2330",700,"center"),Ah(t,750,22,"#5b6475",Li),je.arrow(t,26,66,22,"#5b6475",-1),je.arrow(t,54,66,22,"#b9c0cc",1),ft(t,86,52,560,28,14),t.fillStyle="#ffffff",t.fill(),Yt(t,"#d9dee8",1.5),je.home(t,106,66,16,Li),kt(t,"Home",122,66,13,"#1d2330",600),t.fillStyle="#e4e8ef",t.fillRect(0,92,760,1),t.fillStyle="#f7f8fb",t.fillRect(0,93,176,377),kt(t,"Places",16,114,12,"#8a93a3",700),["Home","Desktop","Documents","Downloads","Music","Pictures","Videos","Trash"].forEach((s,r)=>{let a=142+r*34;r===0&&(ft(t,6,a-15,164,30,8),t.fillStyle="rgba(47,109,246,.14)",t.fill()),r===0?je.home(t,28,a,18,Li):r===7?je.trash(t,28,a,20):je.folder(t,28,a,18,Es),kt(t,s,48,a,14,"#1d2330",r===0?600:400)}),["Desktop","Documents","Downloads","Music","Pictures","Public","Templates","Videos"].forEach((s,r)=>{let a=256+r%4*128,o=170+Math.floor(r/4)*140;je.folder(t,a,o,72,Es),kt(t,s,a,o+56,13,"#1d2330",400,"center")}),t.restore(),ft(t,1,1,758,468,10),Yt(t,"rgba(0,0,0,.2)",2),i.win=e,i.cursor=Rh(),i}var hx=[["book","Encyclopedia",["#FF8A3D","#E8452C"]],["globe","Browser",["#4FA3FF","#2462E8"]],["folder","Files",["#FFC94D","#F29A1F"]],["doc","Writer",["#5BC0EB","#2C7BE5"]],["picture","Photos",["#7CE38B","#2FA65A"]],["film","Videos",["#B98CFF","#7340E0"]],["keyboard","Typing",["#FF9ECF","#E05297"]],["pin","Maps",["#8CE0C9","#2FA38A"]],["weather","Weather",["#7CC8FF","#3D8BFF"]],["gamepad","Games",["#FF8F8F","#E04B4B"]],["cap","Learn",["#FFD36E","#E0A21F"]],["bag","App Center",["#C8EE5A","#7DB51E"]]];function Cl(){let i={},[e,t]=fn(1280,800),n=t.createLinearGradient(0,0,0,800);n.addColorStop(0,"#5a3fd1"),n.addColorStop(.45,"#ff6f91"),n.addColorStop(.75,"#ffb36b"),n.addColorStop(1,"#ffd98a"),t.fillStyle=n,t.fillRect(0,0,1280,800),t.fillStyle="rgba(255,240,180,.9)",t.beginPath(),t.arc(880,470,110,0,Math.PI*2),t.fill(),[["#7b4fc9",470,120],["#5b33a8",540,90],["#3d2183",610,70],["#2a145e",690,50]].forEach(([r,a,o],l)=>{t.beginPath(),t.moveTo(0,800);for(let c=0;c<=1280;c+=20)t.lineTo(c,a-Math.abs(Math.sin(c/(170+l*40)+l*1.3))*o-Math.sin(c/53+l)*8);t.lineTo(1280,800),t.closePath(),t.fillStyle=r,t.fill()}),i.wall=e,[e,t]=fn(600,56),ft(t,2,2,596,52,26),t.fillStyle="rgba(255,255,255,.94)",t.fill(),je.search(t,36,28,22,"#7a7f8c"),kt(t,"Search",62,28,18,"#8a8f9c"),i.search=e,i.icons=hx.map(([r,a,o])=>{let[l,c]=fn(150,160),h=c.createLinearGradient(23,6,127,110);return h.addColorStop(0,o[0]),h.addColorStop(1,o[1]),c.save(),c.shadowColor="rgba(0,0,0,.35)",c.shadowBlur=10,c.shadowOffsetY=4,ft(c,23,6,104,104,26),c.fillStyle=h,c.fill(),c.restore(),je[r](c,75,58,62,r==="folder"?"#fff3c4":r==="bag"?"#ffffff":void 0),Th(c,a,75,136,16),l}),i.iconHi=Ch(150,160,"rgba(255,255,255,.28)",22),[e,t]=fn(1280,48),t.fillStyle="rgba(20,20,26,.92)",t.fillRect(0,0,1280,48),je.ring(t,30,24,30,"#fff"),je.globe(t,78,24,28),je.folder(t,116,24,28,"#FFC94D"),je.wifi(t,1108,22,22,"#e6e6ee"),je.speaker(t,1142,24,20,"#e6e6ee"),je.battery(t,1178,24,24,"#e6e6ee"),kt(t,"10:24",1240,24,15,"#f2f2f7",500,"center"),i.panel=e,[e,t]=fn(1080,640),ft(t,0,0,1080,640,12),t.fillStyle="#ffffff",t.fill(),t.save(),ft(t,0,0,1080,640,12),t.clip(),t.fillStyle="#f4f4f6",t.fillRect(0,0,1080,54),je.arrow(t,30,27,24,"#5b6070",-1),kt(t,"Encyclopedia",540,27,17,"#22252e",700,"center"),Ah(t,1068,27,"#5b6070"),ft(t,60,84,420,30,6),t.fillStyle="#22252e",t.fill();let s=t.createLinearGradient(60,136,680,436);s.addColorStop(0,"#0b1240"),s.addColorStop(1,"#2a1d6b"),t.fillStyle=s,ft(t,60,136,620,300,10),t.fill(),t.fillStyle="#FFD36E",t.beginPath(),t.arc(120,286,70,0,Math.PI*2),t.fill(),[[230,10,"#c9c9c9"],[300,14,"#f0b56e"],[380,16,"#5aa9ff"],[460,12,"#ff7b5c"],[560,30,"#e8c29a"],[640,24,"#f2dca0"]].forEach(([r,a,o])=>{t.beginPath(),t.arc(120,286,r-120,-.35,.35),Yt(t,"rgba(255,255,255,.18)",1.5),t.fillStyle=o,t.beginPath(),t.arc(r,286+Math.sin(r)*30,a,0,Math.PI*2),t.fill()});for(let r=0;r<7;r++)t.fillStyle="#d5d8e0",t.fillRect(60,466+r*22,r===6?380:620,9);t.fillStyle="#f4f4f6",t.fillRect(720,84,320,520);for(let r=0;r<4;r++){let a=100+r*124;t.fillStyle=["#FFB36B","#7CC8FF","#C8EE5A","#FF9ECF"][r],ft(t,736,a,96,96,8),t.fill(),t.fillStyle="#c9ccd6",t.fillRect(848,a+18,170,10),t.fillRect(848,a+42,140,8),t.fillRect(848,a+62,110,8)}return t.restore(),ft(t,1,1,1078,638,12),Yt(t,"rgba(0,0,0,.22)",2),i.win=e,i.cursor=Rh(),i}var Kt=new Jt;function dx(i,e=256){let t=document.createElement("canvas");t.width=t.height=e,i(t.getContext("2d"),e);let n=new ni(t);return n.colorSpace=qt,n.anisotropy=4,n}function Ih(i,e=.1){let t=new ms;t.moveTo(i[0][0],i[0][1]);for(let[s,r]of i.slice(1))t.lineTo(s,r);let n=new ir(t,{depth:e,bevelEnabled:!1});return n.center(),n}var fx=[[-.17,.5],[.17,.5],[.17,.02],[.4,.02],[0,-.48],[-.4,.02],[-.17,.02]],px=[[-.05,.55],[.25,.55],[.05,.12],[.28,.12],[-.12,-.55],[0,-.05],[-.25,-.05]];var mx=Array.from({length:10},(i,e)=>{let t=Math.PI/2+e*Math.PI/5,n=e%2?.16:.38;return[Math.cos(t)*n,Math.sin(t)*n]}),Il,Ph,Pl={};function gx(i){Il||(Il=new hn(.27,.27,.08,40).rotateX(Math.PI/2)),Ph||(Ph=new wi(.27,40)),Pl[i]||(Pl[i]=dx(n=>{n.fillStyle=i==="check"?ge.yellow:ge.red,n.beginPath(),n.arc(128,128,118,0,Math.PI*2),n.fill(),n.lineWidth=14,n.strokeStyle=ge.ink,n.stroke(),n.lineCap="round",n.lineJoin="round",n.lineWidth=30,n.beginPath(),i==="check"?(n.moveTo(70,134),n.lineTo(110,174),n.lineTo(188,86)):(n.moveTo(86,86),n.lineTo(170,170),n.moveTo(170,86),n.lineTo(86,170)),n.stroke()}));let e=new Ke;e.add(new lt(Il,Qe(i==="check"?ge.yellow:ge.red))),e.add(new lt(Il,In(.02)));let t=new lt(Ph,new sn({map:Pl[i],transparent:!0,toneMapped:!1}));return t.position.z=.041,e.add(t),e.scale.setScalar(1e-4),e}function $d(i=ge.white){let e=new Ke;e.add(yt(new Wn(.36,.085,14,48),Qe(i),.022));let t=new lt(new wi(.36,40),new sn({color:"#CFF6FF",transparent:!0,opacity:.4,depthWrite:!1,toneMapped:!1}));t.renderOrder=20,e.add(t);let n=yt(Ct(.17,.62,.17,.07),Qe(ge.ink),.02);return n.position.set(.55,-.55,0),n.rotation.z=Math.PI/4,e.add(n),e}function Lh(i=ge.white){let e=new Ke;return e.userData.arcs=[.24,.44,.64].map(t=>{let n=yt(new Wn(t,.06,10,32,Math.PI/2),Qe(i),.02);return n.rotation.z=Math.PI/4,e.add(n),n}),e.add(yt(new Vn(.085,18,12),Qe(i),.02)),e}function _x(i,e){let t=i.length,n=new Ke,s=new Gr(.1,.16,6,14),r=new Vn(.095,18,12),a=new Ot(s,Pi(ge.white),t),o=new Ot(s,In(.018),t),l=new Ot(r,Pi(ge.white),t),c=new Ot(r,In(.018),t);for(let h=0;h<t;h++)a.setColorAt(h,new qe(i[h])),l.setColorAt(h,new qe(e[h]));for(let h of[a,o,l,c])h.frustumCulled=!1;return n.add(o,a,c,l),{g:n,update(h){for(let f=0;f<t;f++){let u=Math.max(0,Math.sin(h*4-f*.8))*.16;Kt.rotation.set(0,0,Math.sin(h*2+f)*.08),Kt.scale.setScalar(1),Kt.position.set(f*.26,u,0),Kt.updateMatrix(),a.setMatrixAt(f,Kt.matrix),o.setMatrixAt(f,Kt.matrix),Kt.position.set(f*.26,u+.29,0),Kt.updateMatrix(),l.setMatrixAt(f,Kt.matrix),c.setMatrixAt(f,Kt.matrix)}for(let f of[a,o,l,c])f.instanceMatrix.needsUpdate=!0}}}function xx(){let i=new Ke,e=Ct(.74,.08,.74,.03);for(let o of[.52,-.52]){let l=yt(e,Qe(ge.ink),.02);l.position.y=o,i.add(l)}let t=new lt(new hn(.17,.03,.2,24),Qe(ge.yellow));t.position.y=.12;let n=new lt(new Ti(.24,.22,24),Qe(ge.yellow));n.position.y=-.37,i.add(t,n);for(let[o,l]of[[.3,.3],[-.3,.3],[.3,-.3],[-.3,-.3]]){let c=new lt(new hn(.03,.03,1,8),Qe(ge.ink));c.position.set(o,0,l),i.add(c)}let s=Pi(ge.white,{transparent:!0,opacity:.5,depthWrite:!1}),r=new lt(new hn(.28,.035,.48,28,1,!0),s);r.position.y=.24;let a=new lt(new hn(.035,.28,.48,28,1,!0),s);return a.position.y=-.24,r.renderOrder=a.renderOrder=20,i.add(r,a),i}function vx(i,e){let t=new Ke,n=yt(new Vn(.2,24,18),Qe(i),.02);n.scale.set(1,1.15,1);let s=new lt(new Ti(.05,.07,10),Qe(i));s.position.y=-.25;let r=new lt(new hn(.008,.008,e,6),Qe(ge.ink));return r.position.y=-.28-e/2,t.add(n,s,r),t}function yx(i){let e=new Ke;return i.forEach((t,n)=>{let s=new Ke;s.add(yt(Ct(.86,.17,.6,.03),Qe(t),.02));let r=new lt(Ct(.78,.1,.02,.008),Qe(ge.white));r.position.z=.305,s.add(r),s.position.set(n%2?.06:-.04,n*.19,0),s.rotation.y=(n-1)*.12,e.add(s)}),e}function Mx(){let i=new Ke;i.add(yt(Ct(.5,.2,.1,.04),Qe(ge.ink),.02));let e=yt(Ct(.22,.15,.07,.015),Qe("#CFCFCF"),.018);return e.position.x=.34,i.add(e),i}function Sx(){let i=new ms;i.moveTo(-.38,.4),i.lineTo(.38,.4),i.lineTo(.36,.02),i.quadraticCurveTo(.3,-.32,0,-.5),i.quadraticCurveTo(-.3,-.32,-.36,.02),i.lineTo(-.38,.4);let e=new ir(i,{depth:.12,bevelEnabled:!1,curveSegments:10});e.center();let t=yt(e,Qe(ge.white),.022),n=new lt(Ct(.16,.7,.03,.01),Qe(Q.endless));return n.position.set(0,-.03,.07),t.add(n),t}function bx(){let i=new Ke;i.add(yt(new hn(.32,.3,.2,28),Qe(ge.yellow),.02));for(let e=0;e<5;e++){let t=e/5*Math.PI*2,n=yt(new Ti(.09,.24,12),Qe(ge.yellow),.018);n.position.set(Math.cos(t)*.27,.21,Math.sin(t)*.27),i.add(n);let s=new lt(new Vn(.04,10,8),Qe(ge.red));s.position.set(Math.cos(t)*.31,0,Math.sin(t)*.31),i.add(s)}return i}function Ex(i,e){let t=new Ke,n=new hn(.36,.36,.25,28),s=[];for(let a=0;a<5;a++){let o=yt(n,Qe(a<e?i:ge.white),.022);o.position.y=-.62+a*.31,t.add(o),s.push(o)}let r=yt(new hn(.15,.15,.14,20),Qe(ge.ink),.02);return r.position.y=.87,t.add(r),t.userData.cells=s,t}function wx(){let i=new Ke;i.add(yt(Ct(2.4,.6,.06,.02),Qe("#138A4A"),.02));for(let t=0;t<4;t++){let n=yt(Ct(.42,.3,.07,.02),Qe(ge.ink),.015);n.position.set(-.84+t*.56,.06,.05),i.add(n)}let e=new lt(Ct(2.2,.1,.07,.01),Qe("#F2B632"));return e.position.set(0,-.24,.01),i.add(e),i}function Tx(){let i=new Ke,e=yt(Ct(.36,.5,.36,.06),Qe(ge.pink));e.position.x=-.22;let t=yt(new hn(.42,.15,.4,28).rotateZ(-Math.PI/2),Qe(ge.pink),.022);return t.position.x=.16,i.add(e,t),i.userData.waves=[.62,.86].map(n=>{let s=yt(new Wn(n,.055,10,28,Math.PI/2),Qe(ge.white),.02);return s.rotation.z=-Math.PI/4,s.position.x=-.05,i.add(s),s}),i}function Ax(){let i=new Ke;i.add(yt(Ct(1.25,.12,.62,.05),Qe(ge.white)));let e=new Ot(Ct(.11,.07,.11,.02),Qe(ge.ink),27),t=0;for(let n=0;n<3;n++)for(let s=0;s<9;s++)Kt.position.set(-.52+s*.13,.08,-.17+n*.17),Kt.rotation.set(0,0,0),Kt.scale.setScalar(1),Kt.updateMatrix(),e.setMatrixAt(t++,Kt.matrix);return i.add(e),i}function Rx(){let i=new Ke,e=new Ke;e.add(yt(new Vn(.44,32,22),Qe(Q.zorin),.025));let t=new Wn(.447,.022,8,56),n=new lt(t,Qe(ge.ink));n.rotation.x=Math.PI/2;let s=new lt(t,Qe(ge.ink)),r=new lt(t,Qe(ge.ink));r.rotation.y=Math.PI/2,e.add(n,s,r);for(let[a,o,l]of[[.4,.3,.16],[2.2,-.2,.2],[3.9,.5,.13],[5.1,-.35,.15]]){let c=new lt(new Vn(l,14,10),Qe(Q.mint));c.position.setFromSphericalCoords(.36,Math.PI/2-o,a),e.add(c)}return i.add(e),i.userData.spin=e,i}function Cx(){let i=new Ke,e=[[0,0],[.3,0],[.3,.09],[.12,.13],[.07,.32],[.11,.4],[.31,.52],[.39,.98],[.35,1],[.3,.6],[0,.56]].map(([t,n])=>new we(t,n));i.add(yt(new Kr(e,40),Qe(ge.yellow),.025));for(let t of[1,-1]){let n=yt(new Wn(.17,.045,10,24,Math.PI),Qe(ge.yellow),.02);n.rotation.z=-t*Math.PI/2,n.position.set(t*.36,.72,0),i.add(n)}return i}function Dh(i,e){let t=$d();i.add(t);let n=e.map(d=>{let m=gx(d.kind);return m.position.set(...d.at),i.add(m),m}),s=e.map(d=>new z(d.at[0],d.at[1],d.at[2]+.3)),r=s[0].clone().add(new z(.9,-.9,.4)),a=.9,o=1.3,l=e.length,c=a+(l-1)*o,h=c+3.6,f=new z,u=-1;return(d,m)=>{let x=m?c+.7:d%h;if(m||e.forEach((v,b)=>{let y=a+b*o+.12;u<y&&x>=y&&tn.pop(640+b*110)}),u=x,x<a)f.copy(r).lerp(s[0],Ye(.05,a,x));else if(x<c){let v=Math.floor((x-a)/o);f.copy(s[v]).lerp(s[v+1],Ye(.45,1,(x-a-v*o)/o))}else f.copy(s[l-1]);t.position.copy(f),t.position.y+=Math.sin(d*3)*.03,t.rotation.z=Math.sin(d*1.7)*.18;let g=m?1e-4:Ye(0,.35,x)*(1-Ye(c+.9,c+1.4,x));t.scale.setScalar(Math.max(g,1e-4)),t.visible=g>.01;let p=1-Ye(h-.45,h,x);n.forEach((v,b)=>{let y=a+b*o+.12,A=pi((x-y)/.38),w=Mn(A)*p;v.scale.setScalar(Math.max(w,1e-4)),v.rotation.y=(1-A)*2.5,v.visible=w>.01})}}function Jd(){let i={};{let u=new Ke,d=new Ke;d.position.y=-.1,u.add(d);let m=100,x=Ct(.2,.2,.2,.04,2),g=new Ot(x,Pi(ge.white),m),p=new Ot(x,In(.02),m);g.frustumCulled=p.frustumCulled=!1,d.add(p,g);let v=[1.5,.7,-.1,-.9],b=[1.55,1.25,.98,.74];v.forEach((U,N)=>{let R=yt(new Wn(b[N],.07,12,64),Qe([ge.yellow,ge.pink,ge.cyan,ge.white][N]),.02);R.rotation.x=Math.PI/2,R.position.y=U,d.add(R)});let y=new Array(m),A=[...Array(m).keys()].sort((U,N)=>U*37%101-N*37%101);A.forEach((U,N)=>{y[U]=N<3?4:N<8?3:N<20?2:N<45?1:0});let w=A.slice(0,3),_=[Q.mint,Q.zorin,Q.endless].map(U=>new qe(U)),S=new qe(ge.white),L=[...Array(m).keys()].map(U=>({x:(U%10-4.5)*.27,z:(Math.floor(U/10)-4.5)*.27,y:2.4+U*53%17/17*.8}));for(let U=0;U<m;U++)g.setColorAt(U,S);let T=6.5,P=U=>U>=v[0]?b[0]:U<=v[3]?b[3]:_t(b[3],b[0],(U-v[3])/(v[0]-v[3]));i.funnel={group:u,update(U,N,R){let I=R?4.2:U%T;for(let F=0;F<m;F++){let B=L[F],X=y[F],H=B.y-Math.max(0,I-.3)*1.45,W=X<4?v[X]:-1.45,K=P(Math.max(H,W))/b[0],le=B.x*K,me=B.z*K,D=Math.max(H,W),ee=1;if(X<4&&H<W){let ue=Math.min(1,(W-H)/.5);le*=1+ue*.9,me*=1+ue*.9,ee=1-ue}if(X===4){let ue=w.indexOf(F),xe=Ye(-1.2,-1.45,H);le=_t(le,(ue-1)*.55,xe),me=_t(me,.2,xe),ee=1+xe*.6,g.setColorAt(F,H<v[3]?_[ue]:S)}I>T-.5&&(ee*=(T-I)/.5),Kt.position.set(le,D,me),Kt.rotation.set(0,(F*.7+I*.5)%6.28,0),Kt.scale.setScalar(Math.max(ee,1e-4)),Kt.updateMatrix(),g.setMatrixAt(F,Kt.matrix),p.setMatrixAt(F,Kt.matrix)}g.instanceMatrix.needsUpdate=p.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0}}}let e=3.84,t=2.4,n=e/1280,s=(u,d)=>[(u/1280-.5)*e,(.5-d/800)*t],r=(u,d,m)=>Math.max(0,1-Math.abs(u-d)/m);function a(u,d,m,x,g,p,v,b,y,{opaque:A=!1,anchor:w="center"}={}){let _=new ni(d);_.colorSpace=qt,_.anisotropy=8;let S=new sn({map:_,transparent:!A,depthWrite:A,toneMapped:!1}),L=new lt(new vn(g*n,p*n),S);L.renderOrder=v;let T=new Ke,[P,U]=s(m+g/2,x+p/2);if(w==="bottom")T.position.set(P,U-p*n/2,b),L.position.y=p*n/2;else if(w==="tip"){let[N,R]=s(m,x);T.position.set(N,R,b),L.position.set(g*n/2,-(p*n)/2,0)}else T.position.set(P,U,b);return T.add(L),u.add(T),{pivot:T,mesh:L,mat:S,base:T.position.clone(),z:b,depth:y}}function o(){let u=yt(Ct(e+.18,t+.18,.12,.08),Qe(ge.ink),.022);return u.position.z=-.07,u}function l(u,d){if(d<=u[0][0])return[u[0][1],u[0][2]];for(let x=0;x<u.length-1;x++){let[g,p,v]=u[x],[b,y,A]=u[x+1];if(d<=b){let w=Ye(g,b,d);return[_t(p,y,w),_t(v,A,w)]}}let m=u[u.length-1];return[m[1],m[2]]}let c=(u,d)=>d?0:1-Ye(.18,.36,u)+Ye(.72,.9,u),h=(u,d)=>{u.pivot.position.z=u.z+d*u.depth};function f(u,d,m,x,g,p){let[v,b]=l(d,m),[y,A]=s(v+(p?0:Math.sin(x*1.7)*3),b+(p?0:Math.cos(x*1.3)*2));u.pivot.position.x=y,u.pivot.position.y=A;let w=1;for(let _ of g)w-=.25*r(m,_,.012);u.pivot.scale.setScalar(w)}{let u=new Ke,d=new Ke;u.add(d);let m=Al(),x=new Ke;x.position.y=.08,x.add(o()),d.add(x);let g=a(x,m.wall,0,0,1280,800,1,0,0,{opaque:!0}),p=a(x,m.panel,0,756,1280,44,2,.01,.45),v=a(x,m.taskBtn,172,760,170,36,3,.015,.47),b=a(x,m.win,330,110,780,480,4,.02,.72),y=a(x,m.menu,0,276,560,480,5,.03,.95,{anchor:"bottom"}),A=a(x,m.menuHi,276,382,272,32,6,.035,0);y.pivot.attach(A.pivot);let w=a(x,m.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"}),_=Lh();_.position.set(1.55,1.68,.45),_.scale.setScalar(.72);let S=_x([ge.yellow,ge.pink,Q.zorin,ge.white,ge.lilac],["#F1C7A1","#8D5A3B","#D9A27A","#5C3A24","#F3D5B5"]);S.g.position.set(.8,-1.62,.9),d.add(_,S.g);let[L,T]=s(90,690),[P,U]=s(990,150),N=Dh(d,[{kind:"check",at:[L,T+.08,1]},{kind:"check",at:[P,U+.08,1]},{kind:"check",at:[1.32,-1.12,1.3]},{kind:"cross",at:[1.55,2.12,.9]}]),R=[[.28,1150,640],[.33,66,778],[.4,66,778],[.44,24,778],[.48,400,398],[.54,400,398],[.58,720,132],[.6,720,132],[.7,840,162],[.82,1e3,420]];i.mint={group:u,pick:[g.mesh],screen:x,hover:!1,update(I,F,B,X=.5){x.scale.setScalar(_t(x.scale.x,this.hover?1.05:1,.2));let H=c(X,B),W=Ye(.335,.41,X),K=Ye(.44,.48,X)*(1-Ye(.55,.6,X)),le=Ye(.475,.49,X)*(1-Ye(.54,.56,X)),me=Ye(.6,.7,X);[g,p,v,b,y,w].forEach(D=>h(D,H)),b.pivot.position.x=b.base.x+me*120*n,b.pivot.position.y=b.base.y-me*30*n-(1-W)*.4,b.pivot.scale.setScalar(Math.max(_t(.5,1,Mn(W)),1e-4)),b.mat.opacity=W,b.pivot.visible=W>.01,v.mat.opacity=W,y.pivot.scale.set(1,Math.max(Mn(K),1e-4),1),y.mat.opacity=Math.min(1,K*1.6),y.pivot.visible=K>.01,A.mat.opacity=le,f(w,R,X,I,[.335,.44,.6],B),_.userData.arcs.forEach((D,ee)=>{D.visible=B||I*2%4>ee}),S.update(B?0:I),N(I,B)}}}{let u=new Ke,d=new Ke;d.position.y=-.2,u.add(d);let m=Rl(),x=new Ke;d.add(x);let g=new Ke;g.add(o()),x.add(g);let p=a(g,m.wall,0,0,1280,800,1,0,0,{opaque:!0}),v=a(g,m.panel,0,754,1280,46,2,.01,.45),b=a(g,m.taskBtn,176,759,170,36,3,.015,.47),y=a(g,m.win,440,96,760,470,4,.02,.72),A=a(g,m.menu,8,222,620,520,5,.03,.95,{anchor:"bottom"}),w=a(g,m.menuHi,26,344,340,40,6,.035,0);A.pivot.attach(w.pivot);let _=a(g,m.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"});[[-1.2,1.8,ge.yellow],[.1,1.98,ge.pink],[1.25,1.78,ge.white]].forEach(([R,I,F])=>{let B=vx(F,I-.28-1.3);B.position.set(R,I,0),x.add(B)});let S=xx();S.position.set(-1.62,-1.62,.6),S.scale.setScalar(.55);let L=Lh();L.position.set(1.62,-1.72,.45),L.scale.setScalar(.62),d.add(S,L);let[T,P]=s(160,600),U=Dh(d,[{kind:"check",at:[.1,2.32,.9]},{kind:"check",at:[T,P,1]},{kind:"cross",at:[-1.62,-1.08,1]},{kind:"cross",at:[1.62,-1.16,.95]}]),N=[[.28,1150,640],[.36,26,777],[.4,26,777],[.46,200,364],[.54,200,364],[.62,760,300],[.82,1e3,420]];i.zorin={group:u,pick:[p.mesh],screen:g,hover:!1,update(R,I,F,B=.5){let X=F?0:1;x.position.y=(Math.sin(R*1.3)*.08+.03)*X,x.rotation.z=Math.sin(R*.9)*.025*X,g.scale.setScalar(_t(g.scale.x,this.hover?1.05:1,.2));let H=c(B,F),W=Ye(.37,.43,B)*(1-Ye(.55,.6,B)),K=Ye(.45,.47,B)*(1-Ye(.55,.57,B)),le=Ye(.555,.63,B);[p,v,b,y,A,_].forEach(D=>h(D,H)),y.pivot.position.y=y.base.y-(1-le)*.4,y.pivot.scale.setScalar(Math.max(_t(.5,1,Mn(le)),1e-4)),y.mat.opacity=le,y.pivot.visible=le>.01,b.mat.opacity=le,A.pivot.scale.set(1,Math.max(Mn(W),1e-4),1),A.mat.opacity=Math.min(1,W*1.6),A.pivot.visible=W>.01,w.mat.opacity=K,f(_,N,B,R,[.37,.555],F);let me=Math.floor(R/3);S.rotation.z=F?0:Math.PI*(me+Ye(2.4,3,R-me*3)),L.userData.arcs.forEach((D,ee)=>{D.visible=F||R*2%4>ee}),U(R,F)}}}{let u=new Ke,d=new Ke;u.add(d);let m=Cl(),x=new Ke;x.position.y=.05,x.add(o()),d.add(x);let g=a(x,m.wall,0,0,1280,800,1,0,0,{opaque:!0}),p=a(x,m.search,340,50,600,56,3,.012,.5),v=a(x,m.iconHi,140,200,150,160,2,.008,.55),b=m.icons.map((H,W)=>a(x,H,140+W%6*170,200+Math.floor(W/6)*200,150,160,3,.012,.5+W%6*.06)),y=a(x,m.panel,0,752,1280,48,4,.01,.4),A=a(x,m.win,100,64,1080,640,6,.03,.85),w=a(x,m.cursor,1100,600,40,56,9,.06,1.25,{anchor:"tip"}),_=Lh(),S=yt(Ct(1,.1,.08,.04),Qe(ge.red),.02);S.position.set(0,.32,.12),S.rotation.z=-Math.PI/4,_.add(S),_.position.set(1.7,1.62,.4),_.scale.setScalar(.62);let L=yt(Ih(fx,.14),Qe(ge.white),.022);L.position.set(-1.75,1.7,.45),L.scale.setScalar(.58);let T=Sx();T.position.set(-1.7,-1.68,.6),T.scale.setScalar(.6);let P=yx([ge.red,Q.zorin,ge.yellow]);P.position.set(1.45,-1.9,.45),P.scale.setScalar(.75);let U=Mx();U.position.set(.35,-1.72,.7),d.add(_,L,T,P,U);let[N,R]=s(215,210),I=Dh(d,[{kind:"check",at:[N,R,1]},{kind:"check",at:[1.7,2.12,.85]},{kind:"check",at:[1.45,-1.3,1]},{kind:"check",at:[-1.7,-1.18,1]},{kind:"cross",at:[-1.75,2.16,.9]}]),F=[[.28,1150,640],[.42,700,430],[.47,225,268],[.55,225,268],[.62,520,320],[.82,900,400]],[B,X]=s(215,280);i.endless={group:u,pick:[g.mesh],screen:x,hover:!1,update(H,W,K,le=.5){x.scale.setScalar(_t(x.scale.x,this.hover?1.05:1,.2));let me=c(le,K);[g,p,v,y,A,w,...b].forEach(Se=>h(Se,me));let D=Ye(.24,.32,le);p.pivot.position.y=p.base.y+(1-D)*.4,p.mat.opacity=D;let ee=Ye(.46,.48,le)*(1-Ye(.55,.57,le));b.forEach((Se,et)=>{let Pe=Ye(.26+et*.012,.31+et*.012,le),Ve=Mn(Pe)*(et===0?1+ee*.12:1);Se.pivot.scale.setScalar(Math.max(Ve,1e-4)),Se.mat.opacity=Math.min(1,Pe*2)}),v.mat.opacity=ee,v.pivot.scale.copy(b[0].pivot.scale);let ue=Ye(.555,.64,le),xe=wl(ue);A.pivot.position.x=_t(B,A.base.x,xe),A.pivot.position.y=_t(X,A.base.y,xe),A.pivot.scale.setScalar(Math.max(_t(.12,1,xe),1e-4)),A.mat.opacity=Math.min(1,ue*2),A.pivot.visible=ue>.01,f(w,F,le,H,[.555],K);let he=K?0:1;U.rotation.y=H*1.2*he,L.position.y=1.7-Math.abs(Math.sin(H*2.2))*.1*he,P.rotation.y=Math.sin(H*.8)*.15*he,I(H,K)}}}{let u=new Ke,d=new Ke;d.position.y=-.05,u.add(d);let m=yt(Ct(4.4,.16,1.6,.06),Qe(ge.white));m.position.y=-1.45,d.add(m);let x=[Q.mint,Q.zorin,Q.endless],g=["Linux Mint","Zorin OS Lite","Endless OS"],p=Ct(.8,1,.8,.05,2),v=x.map((w,_)=>{let S=(_-1)*1.38,L="#"+new qe(w).lerp(new qe(ge.white),.45).getHexString(),T=Array.from({length:5},(U,N)=>{let R=yt(p,Qe(N%2?L:w),.025);return R.position.x=S,d.add(R),R}),P=ts(g[_],w);return P.scale.setScalar(.52),P.position.set(S,-1.45,.86),d.add(P),{x:S,segs:T,cur:[0,0,0,0,0],tgt:[0,0,0,0,0],top:0}}),b=bx();d.add(b);let y=0,A=2;i.scores={group:u,setScores(w,_){let S=5*w.reduce((T,P)=>T+P,0)||1,L=v.map((T,P)=>(_.forEach((U,N)=>{T.tgt[N]=U[P]*w[N]/S*2.9}),_.reduce((U,N,R)=>U+N[P]*w[R],0)));A=L.indexOf(Math.max(...L))},onEnter(){v.forEach(w=>w.cur.fill(0))},update(w,_,S){let L=S?1:1-Math.exp(-_*5);v.forEach((T,P)=>{let U=-1.37,N=S?1:Ye(.1+P*.12,.9+P*.12,w);T.segs.forEach((R,I)=>{T.cur[I]=_t(T.cur[I],T.tgt[I]*N,L);let F=T.cur[I];R.visible=F>.004,R.scale.set(1,Math.max(F,1e-4),1),R.position.y=U+F/2,R.visible&&(U+=F+.025)}),T.top=U}),y=_t(y,v[A].x,L),b.position.set(y,v[A].top+.3+(S?0:Math.sin(w*2.4)*.06),0),b.rotation.y=S?0:w*.8,b.scale.setScalar(Math.max(S?1:Mn(Ye(1,1.4,w)),1e-4))}}}{let u=new Ke,d=new Ke;d.position.y=-.1,u.add(d);let m=[Q.mint,Q.zorin,Q.endless],x=["Linux Mint","Zorin OS Lite","Endless OS"],g=[3,5,2],p=m.map((b,y)=>{let A=Ex(b,g[y]);A.position.set((y-1)*1.3,.35,0);let w=ts(x[y],b);w.scale.setScalar(.44),w.position.set((y-1)*1.3,1.55,.2);let _=yt(Ih(px,.1),Qe(ge.yellow),.02);return _.position.set((y-1)*1.3+.45,.75,.45),_.scale.setScalar(.55),d.add(A,w,_),{b:A,bolt:_,level:g[y]}}),v=wx();v.position.set(0,-1.12,.75),d.add(v),i.energy={group:u,update(b,y,A){p.forEach(({b:w,bolt:_,level:S},L)=>{w.userData.cells.forEach((T,P)=>{let U=A?1:Mn(Ye(.1+P*.12+L*.08,.4+P*.12+L*.08,b));!A&&P===S-1&&(U*=1+Math.max(0,Math.sin(b*5))*.06),T.scale.setScalar(Math.max(U,1e-4))}),_.rotation.z=A?0:Math.sin(b*9+L*2)*.12,_.scale.setScalar(.55*(A?1:1+Math.max(0,Math.sin(b*7+L*1.7))*.18))}),v.rotation.y=A?0:Math.sin(b*.8)*.35,v.position.y=-1.12+(A?0:Math.sin(b*1.4)*.05)}}}{let u=new Ke,d=new Ke;d.position.y=.12,u.add(d);let m=[[$d(ge.yellow),-1,.72],[Tx(),1,.72],[Ax(),-1,-.88],[Rx(),1,-.82]];m[0][0].scale.setScalar(1.05),m[2][0].rotation.x=.85;let x=m.map(([g,p,v])=>{let b=yt(new hn(.62,.66,.16,36),Qe(ge.white),.025);return b.position.set(p,v-.68,.1),g.position.set(p,v,.3),d.add(b,g),b});i.access={group:u,update(g,p,v){m.forEach(([b,y,A],w)=>{let _=v?1:Mn(Ye(.1+w*.15,.5+w*.15,g));b.position.y=A+(v?0:Math.sin(g*2-w*.9)*.08);let S=w===0?1.05:1;b.scale.setScalar(Math.max(S*_,1e-4)),x[w].scale.setScalar(Math.max(_,1e-4))}),v||(m[0][0].rotation.z=Math.sin(g*1.5)*.2,m[1][0].userData.waves.forEach((b,y)=>{b.visible=g*2.5%3>y+.5}),m[2][0].rotation.y=Math.sin(g*.9)*.25,m[3][0].userData.spin.rotation.y=g*.9)}}}{let u=new Ke,d=new Ke;d.position.y=.05,u.add(d);let m=[{col:Q.mint,name:"Linux Mint",x:-1.38,h:1,delay:.3},{col:Q.endless,name:"Endless OS",x:0,h:1.5,delay:.55},{col:Q.zorin,name:"Zorin OS Lite",x:1.38,h:.62,delay:.1}].map(v=>{let b=new Ke;b.add(yt(Ct(1.3,v.h,.95,.07),Qe(v.col)));let y=ts(v.name,v.col);return y.scale.setScalar(.6),y.position.z=.5,b.add(y),d.add(b),{...v,g:b,y:-1.6+v.h/2}}),x=Cx();d.add(x);let g=[0,1,2,3].map(v=>{let b=yt(Ih(mx,.1),Qe(v%2?ge.white:ge.yellow),.02);return b.scale.setScalar(.7),d.add(b),b}),p=-1;i.pick={group:u,update(v,b,y){!y&&p<1&&v>=1&&tn.tada(),p=v,m.forEach(w=>{let _=y?1:Mn(Ye(w.delay,w.delay+.5,v));w.g.position.set(w.x,w.y-(1-_)*1.6,0),w.g.scale.setScalar(Math.max(Math.min(1,_+.2),1e-4))});let A=y?1:Mn(Ye(1,1.5,v));x.position.set(0,-.1+(1-A)*2.2+(y?0:Math.sin(v*2)*.04),0),x.rotation.y=y?0:v*.9,x.scale.setScalar(Math.max(A*.95,1e-4)),g.forEach((w,_)=>{let S=(y?0:v*.7)+_*Math.PI/2;w.position.set(Math.cos(S)*1.85,1.15+Math.sin(S*2)*.2,Math.sin(S)*.9+.2),w.rotation.set(0,y?0:v*2+_,0),w.scale.setScalar(Math.max(.7*(y?1:Ye(1.2,1.6,v)),1e-4))})}}}return i}var Xt={level:0,forced:!1,gpu:"",subs:new Set,set(i){if(i=Math.max(0,Math.min(3,i|0)),i!==this.level){this.level=i,document.documentElement.classList.toggle("q-low",i>=3),document.documentElement.dataset.q=String(i);for(let e of this.subs)e(i)}},on(i){this.subs.add(i)}};document.documentElement.dataset.q="0";function Kd(i){let e="";try{let n=i.getExtension("WEBGL_debug_renderer_info");e=String(i.getParameter(n?n.UNMASKED_RENDERER_WEBGL:i.RENDERER)||"")}catch{}Xt.gpu=e;let t=new URLSearchParams(location.search).get("q");if(t!==null&&/^[0-3]$/.test(t)){Xt.forced=!0,Xt.set(Number(t));return}/swiftshader|llvmpipe|softpipe|basic render|software/i.test(e)?Xt.set(3):/intel/i.test(e)&&/direct3d|d3d/i.test(e)&&!/iris\(r\) xe|iris xe|\barc\b/i.test(e)?Xt.set(1):(navigator.hardwareConcurrency||8)<=2&&Xt.set(2)}var Rn={acc:0,n:0,t:0,before:0,done:!1};function Qd(i){if(Xt.forced||Rn.done||document.hidden||(Rn.t+=i,Rn.t<3)||(Rn.acc+=Math.min(i,.1),Rn.n++,Rn.acc<2))return;let e=Rn.acc/Rn.n;if(Rn.acc=0,Rn.n=0,Rn.before&&e>Rn.before*.9){Xt.set(Xt.level-1),Rn.done=!0;return}Rn.before=0,e>1/42&&Xt.level<3&&(Rn.before=e,Xt.set(Xt.level+1))}var Nh=2.6,Ix=i=>i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375,jd=new Map,ef=(i,e=ge.yellow)=>{let t=jd.get(e);if(!t){let n=parseInt(e.slice(1),16);t=[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255],jd.set(e,t)}i.set(t[0],t[1],t[2])},Px=`varying vec2 vUv;
uniform vec2 uRes, uCenter;
uniform vec3 uColA, uColB;
uniform float uWipe, uSpin, uParty, uTime, uBeat, uChaos;
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
  gl_FragColor = vec4(toLinear(mix(col, vec3(0.0), ring * 0.9)), 1.0);
}`,Lx=`uniform sampler2D tDiffuse;
uniform vec2 uRes;
uniform float uTime, uAberr, uBarrel, uGlitch, uGrain, uScan;
uniform vec4 uRipples[6];
varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 uv = vUv, c = uv - 0.5;
  uv = 0.5 + c * (1.0 + uBarrel * dot(c, c) * 1.8) / (1.0 + uBarrel * 0.45);
  float asp = uRes.x / uRes.y;
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
  gl_FragColor = vec4(max(col, 0.0), 1.0);
  #include <colorspace_fragment>
}`;function tf(i,e,t,n={}){let s=!!n.reduceMotion,r=n.onBg||(()=>{}),a=n.flash||null,o=n.burst||null,l=new yl({canvas:i,antialias:!1,alpha:!0,powerPreference:"high-performance"});Kd(l.getContext());let c=[{pr:1.5,ms:4,portal:1024},{pr:1,ms:4,portal:1024},{pr:1,ms:2,portal:768},{pr:.75,ms:0,portal:512}];l.setClearColor(0,0),l.outputColorSpace=qt;for(let te of Object.values(e))te._bg=new qe(te.bg||ge.yellow);let h=te=>{te.add(new na(16777215,1.1));let de=new ta(16777215,1.9);de.position.set(4,6,5),te.add(de)},f=new _n(30,1,.05,300),u=new Jt,d={uRes:{value:new we(1,1)},uCenter:{value:new we(.5,.5)},uColA:{value:new z(1,.88,.3)},uColB:{value:new z(1,.88,.3)},uWipe:{value:0},uSpin:{value:0},uParty:{value:0},uTime:{value:0},uBeat:{value:0},uChaos:{value:0}},m=new qi,x=new lt(new vn(2,2),new An({uniforms:d,fragmentShader:Px,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}));x.frustumCulled=!1,m.add(x);let g=new _s(-1,1,1,-1,0,1),p={tDiffuse:{value:null},uRes:{value:new we(1,1)},uTime:{value:0},uAberr:{value:0},uBarrel:{value:0},uGlitch:{value:0},uGrain:{value:0},uScan:{value:0},uRipples:{value:Array.from({length:6},()=>new Bt(0,0,-10,0))}},v=new qi,b=new lt(new vn(2,2),new An({uniforms:p,fragmentShader:Lx,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}));b.frustumCulled=!1,v.add(b);let y=new xn(1,1,{samples:c[Xt.level].ms});p.tDiffuse.value=y.texture;let A=new we,w=te=>te<.5?4*te*te*te:1-(-2*te+2)**3/2;function _(te){let Ie=Ct(.28,.28,.28,.06,2),pe=new Ot(Ie,Pi(ge.white),96),Je=new Ot(Ie,In(.025),96);pe.frustumCulled=Je.frustumCulled=!1,te.add(Je,pe);let Be=[ge.yellow,ge.pink,ge.cyan,ge.lilac,ge.white,Q.mint,Q.zorin,Q.endless,ge.red].map($t=>new qe($t)),Ut=Array.from({length:96},($t,En)=>(pe.setColorAt(En,Be[En%Be.length]),{p:new z,v:new z,r:new z,life:0,s:1})),Sn=0,bn=!0;return{burst($t){for(let En=0;En<26;En++){let Pn=Sn;Sn=(Sn+1)%96;let Vt=Ut[Pn],rs=Math.random()*Math.PI*2,Ps=(Math.random()-.3)*1.4,Ls=3+Math.random()*4.5;Vt.p.copy($t),Vt.v.set(Math.cos(rs)*Math.cos(Ps)*Ls,Math.sin(Ps)*Ls+2.5,Math.sin(rs)*Math.cos(Ps)*Ls),Vt.r.set(Math.random()*6,Math.random()*6,Math.random()*6),Vt.life=1.3+Math.random()*.5,Vt.s=.6+Math.random()*.9,pe.setColorAt(Pn,Be[Math.floor(Math.random()*Be.length)])}pe.instanceColor.needsUpdate=!0,bn=!0},update($t){if(!bn)return;let En=!1;for(let Pn=0;Pn<96;Pn++){let Vt=Ut[Pn];Vt.life>0?(En=!0,Vt.life-=$t,Vt.v.y-=9.5*$t,Vt.v.multiplyScalar(1-$t*.6),Vt.p.addScaledVector(Vt.v,$t),Vt.r.x+=$t*6,Vt.r.y+=$t*4,u.position.copy(Vt.p),u.rotation.set(Vt.r.x,Vt.r.y,Vt.r.z),u.scale.setScalar(Math.max(Vt.s*Math.min(1,Vt.life/.4),1e-4))):(u.position.set(0,-50,0),u.scale.setScalar(1e-4)),u.updateMatrix(),pe.setMatrixAt(Pn,u.matrix),Je.setMatrixAt(Pn,u.matrix)}pe.instanceMatrix.needsUpdate=Je.instanceMatrix.needsUpdate=!0,bn=En}}}let S=new qi;h(S);let L=new Ke;S.add(L);let T=new Ke;L.add(T);let P=Qe(Q.paper);T.add(yt(Ct(3.4,2.2,.26,.12,4),P));let U=new lt(new vn(3.1,1.92),new sn({color:0}));U.position.z=.131,T.add(U);let N={};for(let te of Yd){let de=new ni(xh(te));de.colorSpace=qt,de.anisotropy=4,N[te]=de}let R=new vn(3,1.834),I=new lt(R,new sn({map:N.hello,toneMapped:!1})),F=new lt(R,new sn({map:N.hello,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));I.position.z=.132,F.position.z=.133,T.add(I,F);let B=yt(Ct(.42,.74,.22,.06),P);B.position.set(0,-1.42,-.02);let X=yt(Ct(1.6,.14,.9,.06),P);X.position.set(0,-1.85,0);let H=yt(Ct(2.7,.14,.9,.06),P);H.position.set(0,-1.85,1.25);let W=yt(Ct(.36,.14,.56,.07),P);W.position.set(1.85,-1.85,1.3),T.add(B,X,H,W);let K=new Ot(new hi(.15,.06,.15),Qe(Q.grey),56);for(let te=0;te<56;te++)u.position.set(-1.17+te%14*.18,-1.76,.98+Math.floor(te/14)*.18),u.updateMatrix(),K.setMatrixAt(te,u.matrix);T.add(K);let le=new lt(new wi(1,48),new sn({color:0,transparent:!0,opacity:.16,depthWrite:!1}));le.rotation.x=-Math.PI/2,le.scale.set(3.1,1.6,1),le.position.set(.15,-1.935,.7),L.add(le);let me={mint:ts("Linux Mint",Q.mint),zorin:ts("Zorin OS Lite",Q.zorin),endless:ts("Endless OS",Q.endless)};{let te=new Ke,de=new hn(.42,.42,.07,48).rotateX(Math.PI/2);te.add(new lt(de,Qe(Q.paper))),te.add(new lt(de,In(.022)));let Ie=new ni(yh("?",Q.paper,Q.ink));Ie.colorSpace=qt;let pe=new lt(new wi(.42,48),new sn({map:Ie,transparent:!0,toneMapped:!1}));pe.position.z=.036,te.add(pe),te.userData.redraw=()=>{yh("?",Q.paper,Q.ink,Ie.image),Ie.needsUpdate=!0},Tl.push(te),me.q=te}for(let te of Object.values(me))L.add(te);let D={mint:{p:[-1.75,1.22,.5],r:.18},zorin:{p:[1.72,.95,.7],r:-.14},endless:{p:[-1.68,-.5,1],r:.1},q:{p:[1.78,-.42,1.1],r:-.2}},ee=99,ue=Gd([Ct(1,.66,.09,.04).translate(0,.66,0),Ct(.12,.24,.07,.02).translate(0,.2,-.01),Ct(.46,.05,.28,.02).translate(0,.025,0)]),xe=new Ot(ue,Qe(Q.paper),ee),he=new Ot(ue,In(.03),ee),Se=new vn(.88,.54).translate(0,.66,.047),et=new Ot(Se,new sn({toneMapped:!1}),ee);for(let te of[xe,he,et])te.frustumCulled=!1;for(let te=0;te<ee;te++)et.setColorAt(te,new qe("#262626"));L.add(he,xe,et);let Pe=[];for(let te=-5;te<=5;te++)for(let de=-9;de<=2;de++){let Ie=te*1.35,pe=de*1.35+.4;Math.abs(Ie)<2.4&&pe>-1.8||Pe.push({x:Ie,z:pe,d:Math.hypot(Ie,pe*.8)})}Pe.sort((te,de)=>te.d-de.d);let Ve=Pe.slice(0,ee).map((te,de)=>({...te,ry:(de*37%11/11-.5)*.3})),tt=new qe("#262626"),re=new qe(Q.endless),V=new qe(ge.white),J=new qe,ce=0,q=[Q.endless,ge.yellow,ge.pink,ge.cyan,ge.white,ge.lime,ge.lilac].map(te=>new qe(te)),Le=32,De=new Ot(ue,Qe(Q.paper),Le),$e=new Ot(ue,In(.03),Le),Ge=new Ot(Se,new sn({toneMapped:!1}),Le);for(let te of[De,$e,Ge])te.frustumCulled=!1;S.add($e,De,Ge);let ct=[Q.mint,Q.zorin,Q.endless,ge.pink,ge.yellow,ge.cyan,ge.lilac],G=Array.from({length:Le},(te,de)=>(Ge.setColorAt(de,new qe(ct[de%ct.length])),{x:(de*.618%1-.5)*18,z:-3-de*.37%1*6,y:de*.73%1*13-6,sp:1.4+de*.29%1*1.8,r:de*1.7,s:.5+de*.41%1*.5,k:1})),Ht=Eh(S,{colors:[ge.pink,ge.lilac,ge.sky,Q.mint,Q.zorin,Q.endless,ge.white],seed:7}),pt=bh(L,[0,.2,.6]),Tt=_(S),be=new qi;h(be);let Dt=new Ke;be.add(Dt);let Xe=Jd();for(let te of Object.values(Xe))te.p=0,te.t0=0,te.group.visible=!1,Dt.add(te.group);let st=Eh(be,{colors:[ge.yellow,ge.white,ge.pink,ge.cyan,ge.lilac,Q.mint,Q.zorin,Q.endless],seed:3}),C=bh(Dt,[0,.6,.8]),M=_(be),Y=150,ye=Ct(.3,.3,.3,.05,2),oe=new Ot(ye,Pi(ge.white),Y),Te=new Ot(ye,In(.03),Y);for(let te of[oe,Te])te.frustumCulled=!1;let Ce=new Ke;Ce.add(Te,oe),be.add(Ce);let ie=[ge.yellow,ge.pink,ge.cyan,ge.white,Q.mint,Q.zorin,Q.endless,ge.lilac],ae=Array.from({length:Y},(te,de)=>{oe.setColorAt(de,new qe(ie[de%ie.length]));let Ie=de*2.399,pe=2.4+de*7%13/13*3.2;return{x:Math.cos(Ie)*pe,y:Math.sin(Ie)*pe,u:de*53%Y/Y,s:.6+de*11%7/7*1.2,rot:de}}),Re=-1;function O(te){for(let de=0;de<Y;de++){let Ie=ae[de];u.position.set(Ie.x,Ie.y,We*(.55+Ie.u*(Nh-.4))),u.rotation.set(Ie.rot,Ie.rot*.7,0),u.scale.setScalar(Math.max(Ie.s*te,1e-4)),u.updateMatrix(),oe.setMatrixAt(de,u.matrix),Te.setMatrixAt(de,u.matrix)}oe.instanceMatrix.needsUpdate=Te.instanceMatrix.needsUpdate=!0}let se=new xn(c[Xt.level].portal,Math.round(c[Xt.level].portal*.611),{samples:Math.min(2,c[Xt.level].ms)}),ne=new _n(30,3/1.834,.05,300),ve=1,fe=1,Ee=!1,We=14,rt=[],Me=[],Ze={};t.forEach((te,de)=>{let Ie=e[te.dataset.scene];Ie&&Ie.inside&&(Ze[Ie.inside]=de)});function ut(){Me=t.map(te=>{let de=te.getBoundingClientRect();return[de.top+window.scrollY,de.height]}),rt=Me.map(([te,de])=>te+de/2)}function Fe(){ve=window.innerWidth,fe=window.innerHeight,Ee=ve<820||ve/fe<.9,l.setPixelRatio(Math.min(window.devicePixelRatio||1,c[Xt.level].pr)),l.setSize(ve,fe,!1),l.getDrawingBufferSize(A),y.setSize(A.x,A.y),p.uRes.value.set(ve,fe),f.aspect=ve/fe;let te=Math.tan(f.fov*Math.PI/360)*2,de=Ee?.86:.37,Ie=Ee?.36:.62;We=Math.max(4.6/(de*te*f.aspect),4.6/(Ie*te)),f.updateProjectionMatrix(),Re=-1,ut()}let at={ax:.7,ay:.5,az:-.4,el:.1,zoom:1,dive:0,crowd:0,lit:0,px:0,py:0},Zt=0,$n=0;!s&&window.matchMedia("(pointer: fine)").matches&&window.addEventListener("pointermove",te=>{Zt=te.clientX/ve*2-1,$n=te.clientY/fe*2-1},{passive:!0});let ws=new qe,Ts=new qe(ge.yellow),As=new qe;function va(){let te=window.scrollY+fe*.5,de=0;for(;de<rt.length-1&&rt[de+1]<=te;)de++;let Ie=0;de<rt.length-1&&te>rt[de]&&(Ie=(te-rt[de])/(rt[de+1]-rt[de]));let pe=e[t[de].dataset.scene],Je=e[t[Math.min(de+1,t.length-1)].dataset.scene],Be=Ye(.2,.8,Ie),Ut=(Sn,bn)=>Ee&&Sn["m"+bn]!==void 0?Sn["m"+bn]:Sn[bn];return ws.copy(pe._bg).lerp(Je._bg,Be),pe.inside&&Je.inside?As.copy(pe._bg).lerp(Je._bg,Be):As.copy(pe.inside?pe._bg:Je.inside?Je._bg:ws),{a:pe,b:Je,e:Be,ax:_t(Ut(pe,"ax"),Ut(Je,"ax"),Be),ay:_t(Ut(pe,"ay"),Ut(Je,"ay"),Be),az:_t(pe.az,Je.az,Be),el:_t(pe.el,Je.el,Be),zoom:_t(Ut(pe,"zoom"),Ut(Je,"zoom"),Be),dive:_t(pe.inside?1:0,Je.inside?1:0,Be),crowd:_t(pe.crowd||0,Je.crowd||0,Be),lit:_t(pe.lit||0,Je.lit||0,Be),mix:Ye(.35,.65,Ie),idx:de}}let Rs=(te,de,Ie,pe,Je)=>{te.position.set(de.x+Je*Math.sin(Ie)*Math.cos(pe),de.y+Je*Math.sin(pe),de.z+Je*Math.cos(Ie)*Math.cos(pe)),te.lookAt(de)},mi=new z(0,-.35,.3),ns=new z(0,0,0),Cs=new z,Is=new z,Jn=new z,is=null,pr="",Ni=-1,ya="",ss=!1,mr=window.scrollY,Fi=0,Ma=0,zn=0,gr=!1,E=0,k=s?99:0,j=0,Z=-1,$=!1,_e=0,ze=!1,Ae=0,Ne=1,He=0,ht=0,gt=0,Oe=new Gn,xt=new z,Gt=new z,It=new ia,Pt=new we,nn=new Fn,ke=new z,ln=new z,nt=0,Kn=performance.now();function Qt(te=performance.now()){if(Qn){Kn=te,gi=requestAnimationFrame(Qt);return}let de=(te-Kn)/1e3,Ie=Math.min(de,.05);Kn=te,Qd(de),nt+=Ie;let pe=va(),Je=s?1:1-Math.exp(-Ie*4.5);for(let Lt of["ax","ay","az","el","zoom","dive","crowd","lit"])at[Lt]=_t(at[Lt],pe[Lt],Je);at.px=_t(at.px,Zt,1-Math.exp(-Ie*3)),at.py=_t(at.py,$n,1-Math.exp(-Ie*3));let Be=at.dive,Ut=Be>=.5,Sn=window.scrollY;Fi=_t(Fi,(Sn-mr)/Math.max(Ie,.001),1-Math.exp(-Ie*8)),mr=Sn,k+=Ie,zn=_t(zn,gr?1:0,1-Math.exp(-Ie*3)),_e=_t(_e,ze?1:0,1-Math.exp(-Ie*3)),s||(Ma+=Ie*(.025+zn*.6+_e*1.2)+Fi*6e-4*Ie);let bn=tn.beat();if(gt=s?0:Math.max(zn,_e)*Math.pow(1-(bn>=0?bn:nt*2%1),4),Ae=Math.max(0,Ae-Ie),!s&&_e>.5&&Math.random()<Ie*1.2&&(Ae=.25),!s&&(j-.5)*(Be-.5)<0&&tn.whoosh(),j=Be,zn>.5&&!s&&(E+=Ie,E>.9&&(E=0,(Ut?C:pt).burst())),o){let Lt=s?0:Math.round((Be<.5?Ye(.26,.5,Be):1-Ye(.5,.62,Be))*200)/200;(Lt!==Z||Lt>0)&&(Z=Lt,o.style.opacity=Lt>0?"1":"0",o.style.transform=`translate(-50%,-50%) scale(${(Lt*1.35).toFixed(3)}) rotate(${(Be*540).toFixed(1)}deg)`)}Ts.lerp(ws,Je);let $t="#"+Ts.getHexString();if($t!==pr&&(pr=$t,r($t)),a){let Lt=Math.round((Be<.5?Ye(.36,.5,Be):1-Ye(.5,.66,Be))*100)/100;Lt!==Ni&&(Ni=Lt,a.style.opacity=String(Lt));let At="#"+As.getHexString();Lt>0&&At!==ya&&(ya=At,a.style.backgroundColor=At)}let En=pe.e<.5?pe.a:pe.b;if(En.confetti&&is!==En&&!s&&(En.inside?C:pt).burst(),is&&is!==En&&!s&&(Ae=.35),is=En,!Ut){Be>.002?(ss||(ss=!0,I.material.map=se.texture,I.material.needsUpdate=!0),F.material.opacity=0):(ss&&(ss=!1,I.material.needsUpdate=!0),I.material.map=N[pe.a.screen||"hello"],F.material.map=N[pe.b.screen||"hello"],F.material.opacity=pe.a.screen===pe.b.screen?0:pe.mix);let Lt=Ye(.02,.42,Be),At=s?0:1-Ix(pi((k-.2)/1.1));Object.keys(me).forEach((Et,pn)=>{let Ln=s?1:Mn(pi((k-1.15-pn*.16)/.35));me[Et].scale.setScalar(Math.max(Ln,1e-4))}),ht+=s?0:Ie*(.35+zn*.5+_e*1.6+Math.min(1,Math.abs(Fi)/2500)*1.2),Object.keys(me).forEach((Et,pn)=>{let Ln=D[Et],vr=me[Et],ls=s?0:Math.sin(nt*1.3+Et.length)*.06,Bi=ht+pn*Math.PI/2,zl=s?Ln.p[0]:Math.cos(Bi)*2.05,kl=s?Ln.p[1]:Math.sin(Bi)*1.4+.15,yr=s?Ln.p[2]:.95+Math.sin(Bi*2)*.3;vr.position.set(zl*(1+Lt*2.2),(kl+ls)*(1+Lt*1.6),yr+Lt*2),vr.rotation.set(0,s?0:Math.sin(nt*.8+Et.length)*.12,Ln.r+Lt*Ln.r*4+(s?0:Math.sin(Bi)*.15))}),Ne<1&&(Ne=Math.min(1,Ne+Ie/.9));let as=w(Ne);T.rotation.x=Ne<1?-as*Math.PI*2:0,T.rotation.z=s?0:Math.sin(nt*3)*.15*_e,T.position.y=(s?0:Math.sin(nt*1.1)*.04*(1-Lt))+At*7+Math.sin(as*Math.PI)*1.8,le.scale.set(3.1*(1-At*.7),1.6*(1-At*.7),1);let xr=at.crowd,os=xr>.01;xe.visible=he.visible=et.visible=os,ce=at.lit>.5?ce+Ie:Math.max(0,ce-Ie*3),os&&(Ve.forEach((Et,pn)=>{let Ln=s?xr>.5?1:0:Mn(Ye(Et.d*.045,Et.d*.045+.35,xr)),vr=s?0:.3+Et.d*.2,ls=ce-vr,Bi=at.lit>.5&&ls>0,zl=Bi&&ls<.3?1+Math.sin(ls/.3*Math.PI)*.18:1,kl=s?0:Math.max(0,Math.sin(nt*5-Et.d*.7))*(Bi?.3+_e*.5:_e*.4);u.position.set(Et.x,-1.93+kl,Et.z),u.rotation.set(0,Et.ry+(s?0:_e*Math.sin(nt*4+Et.d)*.6),0),u.scale.setScalar(Math.max(Ln*zl,1e-4)),u.updateMatrix(),xe.setMatrixAt(pn,u.matrix),he.setMatrixAt(pn,u.matrix),et.setMatrixAt(pn,u.matrix);let yr=q.length;et.setColorAt(pn,Bi?ls<.15&&!s?V:ls>.8&&!s?q[(Math.floor(nt*3-Et.d*.5)%yr+yr)%yr]:re:tt)}),xe.instanceMatrix.needsUpdate=he.instanceMatrix.needsUpdate=et.instanceMatrix.needsUpdate=!0,et.instanceColor.needsUpdate=!0);let Oi=(pe.a===e.top?1-pe.e:0)+(pe.b===e.top?pe.e:0),af=Et=>{Jn.copy(Et).project(f);let pn=(Jn.x+1)/2,Ln=(1-Jn.y)/2;return Ee?Ln<.66:pn<.58},Bl=s?0:pi(Oi+zn+_e)*(1-Lt);De.visible=$e.visible=Ge.visible=Bl>.01,Bl>.01&&(G.forEach((Et,pn)=>{Et.y-=Ie*Et.sp*(1+_e*1.5),Et.y<-6.5&&(Et.y+=13),Et.r+=Ie*(1+_e*2),u.position.set(Et.x,Et.y,Et.z),Et.k=_t(Et.k,Oi>.01&&zn+_e<.5&&af(u.position)?1-Oi:1,.12),u.rotation.set(Et.r,Et.r*.7,Et.r*.3),u.scale.setScalar(Math.max(Et.s*Bl*Et.k,1e-4)),u.updateMatrix(),De.setMatrixAt(pn,u.matrix),$e.setMatrixAt(pn,u.matrix),Ge.setMatrixAt(pn,u.matrix)}),De.instanceMatrix.needsUpdate=$e.instanceMatrix.needsUpdate=Ge.instanceMatrix.needsUpdate=!0),Ht.update(s?0:nt,(1-Lt)*(s?1:Ye(1,2.2,k)),Oi<.01?null:Et=>{Jn.copy(Et).project(f);let pn=(Jn.x+1)/2,Ln=(1-Jn.y)/2;return(Ee?Ln<.66:pn<.58)?1-Oi:1}),pt.update(Ie)}Tt.update(Ie),M.update(Ie);let Pn=pe.a.inside||pe.b.inside,Vt=pe.b.inside||pe.a.inside;for(let[Lt,At]of Object.entries(Xe)){let as=0;Pn&&Pn===Vt?as=Pn===Lt?1:0:as=(Pn===Lt?1-Ye(.05,.5,pe.e):0)+(Vt===Lt?Ye(.5,.95,pe.e):0);let xr=At.p;if(At.p=s?as:_t(At.p,as,1-Math.exp(-Ie*6)),xr<.02&&At.p>=.02&&(At.t0=nt,At.onEnter?.()),At.group.visible=At.p>.003&&Be>.002,At.group.visible){At.group.scale.setScalar(Math.max(Mn(pi(At.p)),1e-4)),At.group.position.y=(1-At.p)*-.9,At.group.rotation.y=(1-At.p)*.8;let os=Ze[Lt],Oi=os===void 0||!Me[os]?.5:pi((window.scrollY+fe*.5-Me[os][0])/Me[os][1]);At.sp=At.sp===void 0?Oi:_t(At.sp,Oi,1-Math.exp(-Ie*10)),At.update(nt-At.t0,Ie,s,At.sp)}}if(Be>.002){let Lt=Be<.5?1:1-Ye(.72,.92,Be),At=Math.round(Lt*50)/50;At!==Re&&(Re=At,O(At)),Ce.visible=At>.01,Ce.rotation.z=s?0:nt*.25,st.update(s?0:nt,Ye(.5,.9,Be)),C.update(Ie)}let rs=Be<=.5?Ye(0,.3,Be):1-Ye(.62,1,Be),Ps=_t(at.az,0,rs),Ls=_t(at.el,0,rs),Uh=_t(at.ax,.5,rs),Oh=_t(at.ay,.5,rs),Nl=We*at.zoom,_r=s?0:Math.sin(Math.PI*pi(Be));f.fov=30+46*_r*_r;let Fl=s?0:Math.PI*2*Ye(.12,.88,Be);!s&&pe.a.inside&&pe.b.inside&&pe.a!==pe.b&&(Fl+=Math.sin(Math.PI*pe.e)*.2*(pe.idx%2?-1:1)),s||(Fl+=zn*Math.sin(nt*3.1)*.14+_e*(nt*.45+Math.sin(nt*2.3)*.2));let Ul=s?0:Math.min(1,Math.abs(Fi)/2500),Ol=1+gt*.09;if(L.scale.set((1-Ul*.07)*Ol,(1+Ul*.14)*Ol,(1-Ul*.07)*Ol),Dt.scale.copy(L.scale),L.rotation.y=at.px*.14*(1-Ye(0,.25,Be)),L.rotation.x=at.py*.05*(1-Ye(0,.25,Be)),Dt.rotation.y=at.px*.12*Ye(.75,1,Be),Dt.rotation.x=at.py*.05*Ye(.75,1,Be),Dt.rotation.z=s?0:Math.sin(nt*1.7)*.25*_e,Ut)Rs(f,ns,Ps,Ls,Nl*_t(Nh,1,wl(Ye(.5,1,Be)))),Gt.copy(ns);else{L.updateMatrixWorld(),Is.set(0,T.position.y,.14),L.localToWorld(Is),Cs.copy(mi).lerp(Is,Ye(0,.3,Be));let Lt=Ye(.03,.5,Be);Rs(f,Cs,Ps,Ls,_t(Nl,.25,Lt*Lt)),Gt.copy(Cs)}f.rotateZ(Fl),$=Ut,f.setViewOffset(ve,fe,(.5-Uh)*ve,(.5-Oh)*fe,ve,fe),d.uRes.value.set(ve,fe),d.uCenter.value.set(Uh,1-Oh),ef(d.uColA.value,pe.a.bg),ef(d.uColB.value,pe.b.bg),d.uWipe.value=pe.a===pe.b?0:pe.e,d.uSpin.value=Ma,d.uParty.value=zn,d.uTime.value=s?0:nt,d.uBeat.value=gt,d.uChaos.value=s?0:_e;let rf=Math.min(1,Math.abs(Fi)/2500);p.uTime.value=nt,p.uAberr.value=s?0:.0015+rf*.012+_r*.022+gt*.006+_e*.008,p.uBarrel.value=s?0:_r*.95+_e*(.22+Math.sin(nt*2.1)*.12),p.uGlitch.value=s?0:Math.min(1,Ae/.3)*.9+_r*.25,p.uGrain.value=s?0:.035,p.uScan.value=s?0:.08+_e*.14,l.autoClear=!1,!Ut&&Be>.002&&(Rs(ne,ns,0,0,Nl*Nh),l.setRenderTarget(se),l.setClearColor(As,1),l.clear(),l.render(be,ne),l.setRenderTarget(null),l.setClearColor(0,0)),l.setRenderTarget(y),l.clear(),l.render(m,g),l.clearDepth(),l.render(Ut?be:S,f),l.setRenderTarget(null),l.clear(),l.render(v,g),gi=requestAnimationFrame(Qt)}let gi=0,Qn=!1;return Fe(),window.addEventListener("resize",Fe),Xt.on(()=>{let te=c[Xt.level];y.samples!==te.ms&&(y.dispose(),y.samples=te.ms);let de=Math.min(2,te.ms);se.samples!==de&&(se.dispose(),se.samples=de),se.setSize(te.portal,Math.round(te.portal*.611)),Fe()}),(function(){let de=[];for(let Je of[S,be])Je.traverse(Be=>{Be.visible||(Be.visible=!0,de.push(Be))});let Ie=l.getRenderTarget();l.setRenderTarget(y);try{l.compileAsync&&l.extensions.has("KHR_parallel_shader_compile")?(l.compileAsync(S,f).catch(()=>{}),l.compileAsync(be,f).catch(()=>{})):(l.compile(S,f),l.compile(be,f))}catch{}l.setRenderTarget(Ie);for(let Je of de)Je.visible=!1;let pe=new Set;for(let Je of[S,be])Je.traverse(Be=>{let Ut=Be.material?Array.isArray(Be.material)?Be.material:[Be.material]:[];for(let Sn of Ut)for(let bn of["map","gradientMap","alphaMap"]){let $t=Sn[bn];if($t&&$t.isTexture&&!pe.has($t)){pe.add($t);try{l.initTexture($t)}catch{}}}})})(),window.addEventListener("load",ut),new ResizeObserver(ut).observe(document.body),gi=requestAnimationFrame(Qt),{redrawText(){for(let te of Tl)te.userData.redraw?.();xh("hello",N.hello.image),N.hello.needsUpdate=!0},setScores(te,de){Xe.scores.setScores(te,de)},burstAt(te,de){Pt.set(te/ve*2-1,-(de/fe)*2+1),It.setFromCamera(Pt,f),p.uRipples.value[He].set(te/ve,1-de/fe,nt,1),He=(He+1)%6,!$&&Ne>=1&&It.intersectObject(T,!0).length&&(Ne=0),f.getWorldDirection(ln),nn.setFromNormalAndCoplanarPoint(ln.negate(),Gt),It.ray.intersectPlane(nn,ke)&&($?M:Tt).burst(ke)},setParty(te){gr=!!te},setChaos(te){ze=!!te},pickOs(te,de){if(!$)return null;Pt.set(te/ve*2-1,-(de/fe)*2+1),It.setFromCamera(Pt,f);for(let[Ie,pe]of Object.entries(Xe))if(!(!pe.pick||pe.p<.5||!pe.group.visible)&&It.intersectObjects(pe.pick,!1).length)return Ie;return null},hoverOs(te){for(let[de,Ie]of Object.entries(Xe))Ie.pick&&(Ie.hover=de===te)},osScreenRect(te){let de=Xe[te];if(!de||!de.screen||!$||de.p<.5||!de.group.visible)return null;Oe.setFromObject(de.screen);let Ie=1/0,pe=1/0,Je=-1/0,Be=-1/0;for(let Ut=0;Ut<8;Ut++){xt.set(Ut&1?Oe.max.x:Oe.min.x,Ut&2?Oe.max.y:Oe.min.y,Ut&4?Oe.max.z:Oe.min.z).project(f);let Sn=(xt.x+1)/2*ve,bn=(1-xt.y)/2*fe;Ie=Math.min(Ie,Sn),Je=Math.max(Je,Sn),pe=Math.min(pe,bn),Be=Math.max(Be,bn)}return{left:Ie,top:pe,width:Je-Ie,height:Be-pe}},measure:ut,setPaused(te){Qn=!!te},stop(){cancelAnimationFrame(gi)}}}var Di=[{id:"mint",name:"Linux Mint",color:"#2FBF71",hi:"rgba(53,168,84,.5)"},{id:"zorin",name:"Zorin OS Lite",color:"#3D7BFF",hi:"rgba(47,109,246,.22)"},{id:"endless",name:"Endless OS",color:"#FF7A1A",hi:"rgba(255,255,255,.25)"}],Fh=1316,Dx=836,Ll={monitor:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M9 20h6M12 16v4"/><path d="M14 7h3v3M17 7l-4 4"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>'};function nf(i,{reduceMotion:e}){let t=(N,R,I,F={})=>{let B=document.createElement(N);return R&&(B.className=R),Object.assign(B,F),I&&I.appendChild(B),B},n=(N,R,I,F,B)=>(N.style.left=`${R}px`,N.style.top=`${I}px`,F!==void 0&&(N.style.width=`${F}px`),B!==void 0&&(N.style.height=`${B}px`),N),s=(N,R,I,F,B,X,H="")=>{let W=t("button",`osv-hs ${H}`,N,{type:"button"});return W.setAttribute("aria-label",X),n(W,R,I,F,B)},r=(N,R,I,F)=>(R.classList.add("osv-layer"),N.appendChild(n(R,I,F)),R),a=N=>tn.pop(N),o=1;function l(N,R,I,F,B,X,H,W,K){let le=t("div","osv-win",N);n(le,I,F,B,X),le.appendChild(R);let me={open:!1,x:I,y:F,task:W},D=(Pe,Ve)=>{if(!me.open&&(me.open=!0,le.classList.add("open"),W?.classList.add("on"),a(560),!e)){let tt=Pe-(me.x+B/2),re=Ve-(me.y+X/2);le.animate([{transform:`translate(${tt}px,${re}px) scale(.06)`,opacity:0},{transform:"none",opacity:1}],{duration:460,easing:"cubic-bezier(.2,.9,.3,1.18)"})}},ee=(Pe,Ve)=>{if(!me.open)return;me.open=!1,a(380);let tt=()=>{le.classList.remove("open"),Pe===void 0&&W?.classList.remove("on")};if(e)return tt();let re=(Pe??me.x+B/2)-(me.x+B/2),V=(Ve??me.y+X/2)-(me.y+X/2);le.animate([{transform:"none",opacity:1},{transform:`translate(${re}px,${V}px) scale(${Pe===void 0?.7:.05})`,opacity:0}],{duration:300,easing:"cubic-bezier(.6,0,.8,.4)"}).onfinish=tt},[ue,xe,he]=H;s(le,ue-14,xe-14,28,28,"Close window").addEventListener("click",()=>ee()),he!==void 0&&s(le,he-12,xe-12,24,24,"Minimise window").addEventListener("click",()=>ee(W?parseFloat(W.style.left)+85:I,W?parseFloat(W.style.top)+18:790));let Se=s(le,0,0,B-110,44,"Move window","osv-drag");return Se.addEventListener("pointerdown",Pe=>{Pe.preventDefault(),Se.setPointerCapture(Pe.pointerId);let Ve=Pe.clientX,tt=Pe.clientY,re=me.x,V=me.y,J=q=>{me.x=Math.max(-B+120,Math.min(1160,re+(q.clientX-Ve)/o)),me.y=Math.max(0,Math.min(700,V+(q.clientY-tt)/o)),n(le,me.x,me.y)},ce=()=>{Se.removeEventListener("pointermove",J),Se.removeEventListener("pointerup",ce)};Se.addEventListener("pointermove",J),Se.addEventListener("pointerup",ce)}),{win:le,state:me,show:D,hide:ee,reset:()=>{me.open=!1,me.x=I,me.y=F,n(le,I,F),le.classList.remove("open"),W?.classList.remove("on"),K&&setTimeout(()=>D(K[0],K[1]),650)}}}function c(N,R,I,F,B,X){let H=t("div","osv-menu",N);n(H,I,F,B,X),H.appendChild(R);let W=!1,K=le=>{le!==W&&(W=le,a(le?700:420),le?(H.classList.add("open"),e||H.animate([{transform:"translateY(40px) scaleY(.2)",opacity:0},{transform:"none",opacity:1}],{duration:320,easing:"cubic-bezier(.2,.9,.3,1.25)"})):e?H.classList.remove("open"):H.animate([{transform:"none",opacity:1},{transform:"translateY(30px) scaleY(.3)",opacity:0}],{duration:200,easing:"ease-in"}).onfinish=()=>{W||H.classList.remove("open")})};return{menu:H,set:K,toggle:()=>K(!W),get open(){return W}}}function h(N,R,I){let F=t("div","osv-screen");F.style.setProperty("--hi",N.hi),r(F,R.wall,0,0);let B=r(F,R.taskBtn,I.task[0],I.task[1]);B.classList.add("osv-task");let X=l(F,R.win,...I.win,I.close,B,I.autoOpen);I.desktop?.forEach(([D,ee,ue,xe,he])=>s(F,D,ee,84,96,ue,"osv-icon").addEventListener("click",()=>he?X.show(D+42,ee+48):a(500))),r(F,R.panel,0,I.panelY).classList.add("osv-panel"),F.appendChild(B);let H=c(F,R.menu,...I.menu);s(H.menu,...I.filesRow,"Files","osv-row").addEventListener("click",()=>{H.set(!1),X.show(I.filesFrom[0],I.filesFrom[1])}),I.extraRows?.forEach(D=>s(H.menu,...D,"Open","osv-row").addEventListener("click",()=>{H.set(!1),X.show(I.filesFrom[0],I.filesFrom[1])}));let K=s(F,...I.menuBtn,"Menu","osv-top osv-menubtn osv-pulse");return K.addEventListener("click",D=>{D.stopPropagation(),K.classList.remove("osv-pulse"),H.toggle()}),s(F,...I.launcher,"Files","osv-top").addEventListener("click",()=>X.state.open?X.hide():X.show(I.launcher[0]+16,I.launcher[1]+18)),s(F,I.task[0],I.task[1],170,36,"Files window","osv-top").addEventListener("click",()=>X.state.open?X.hide(I.task[0]+85,I.task[1]+18):X.show(I.task[0]+85,I.task[1]+18)),F.addEventListener("pointerdown",D=>{H.open&&!D.target.closest(".osv-menu")&&!D.target.closest(".osv-menubtn")&&H.set(!1)}),{scr:F,intro(){H.set(!1),K.classList.add("osv-pulse"),X.reset()}}}function f(N,R){let I=t("div","osv-screen");I.style.setProperty("--hi",N.hi),r(I,R.wall,0,0);let F=t("button","osv-search",I,{type:"button"});F.setAttribute("aria-label","Search"),n(F,340,50,600,56).appendChild(R.search),t("span","osv-caret",F),F.addEventListener("click",()=>{F.classList.toggle("typing"),a(620)});let B=R.icons.map((H,W)=>{let K=t("button","osv-app",I,{type:"button"});return K.setAttribute("aria-label",["Encyclopedia","Browser","Files","Writer","Photos","Videos","Typing","Maps","Weather","Games","Learn","App Center"][W]),n(K,140+W%6*170,200+Math.floor(W/6)*200).appendChild(H),K});r(I,R.panel,0,752);let X=l(I,R.win,100,64,1080,640,[1054,27],null,null);return s(X.win,12,9,38,38,"Back").addEventListener("click",()=>X.hide(215,280)),B.forEach((H,W)=>H.addEventListener("click",()=>{if(W===0)return X.show(215,280);a(480+W*30),e||H.animate([{transform:"scale(1)"},{transform:"scale(1.25,.8)"},{transform:"scale(.9,1.15)"},{transform:"scale(1)"}],{duration:420,easing:"ease-out"})})),B[0].classList.add("osv-pulse-app"),{scr:I,intro(){X.reset(),F.classList.remove("typing"),!e&&(B.forEach((H,W)=>H.animate([{transform:"translateY(40px) scale(0)",opacity:0},{transform:"none",opacity:1}],{duration:480,delay:250+W*45,easing:"cubic-bezier(.2,.9,.3,1.35)",fill:"backwards"})),F.animate([{transform:"translateY(-60px)",opacity:0},{transform:"none",opacity:1}],{duration:450,delay:150,easing:"cubic-bezier(.2,.9,.3,1.25)",fill:"backwards"}))}}}let u={mint:()=>h(Di[0],Al(),{panelY:756,task:[172,760],win:[330,110,780,480],close:[756,22,706],autoOpen:[66,778],menu:[0,276,560,480],filesRow:[276,106,272,32],filesFrom:[400,398],extraRows:[[276,68,272,32],[276,144,272,32],[276,182,272,32]],menuBtn:[6,760,36,36],launcher:[50,758,32,40],desktop:[[28,22,"Computer",null,!1],[28,140,"Home",null,!0],[28,258,"Trash",null,!1]]}),zorin:()=>h(Di[1],Rl(),{panelY:754,task:[176,759],win:[440,96,760,470],close:[736,22,680],autoOpen:[70,777],menu:[8,222,620,520],filesRow:[18,122,340,40],filesFrom:[200,364],extraRows:[[380,80,222,40],[380,124,222,40]],menuBtn:[8,759,36,36],launcher:[54,756,32,42],desktop:[[28,22,"Home",null,!0],[28,140,"Trash",null,!1]]}),endless:()=>f(Di[2],Cl())},d={},m,x,g,p,v=-1,b=null,y=!1;function A(){if(m)return;m=t("div","osv",document.body),m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true");let N=t("div","osv-burst",m);t("div","osv-burst-in",N),m._burst=N;let R=t("div","osv-tabs",m);R.setAttribute("role","tablist"),p=Di.map((X,H)=>{let W=t("button","osv-tab",R,{type:"button",textContent:X.name});return W.setAttribute("role","tab"),W.style.background=X.color,W.addEventListener("click",()=>T(H,H>v?1:-1)),W});let I=t("button","osv-x",m,{type:"button",innerHTML:Ll.close});I.setAttribute("aria-label","Close"),I.addEventListener("click",U);let F=t("button","osv-nav osv-prev",m,{type:"button",innerHTML:Ll.prev});F.setAttribute("aria-label","Previous system"),F.addEventListener("click",()=>T((v+2)%3,-1));let B=t("button","osv-nav osv-next",m,{type:"button",innerHTML:Ll.next});B.setAttribute("aria-label","Next system"),B.addEventListener("click",()=>T((v+1)%3,1)),x=t("div","osv-fit",m),g=t("div","osv-device",x),m.addEventListener("pointerdown",X=>{(X.target===m||X.target===m._burst||X.target.parentNode===m._burst)&&U()}),window.addEventListener("resize",()=>{y&&S()}),window.addEventListener("keydown",X=>{if(y){if(X.key==="Escape")X.stopImmediatePropagation(),U();else if(X.key==="ArrowRight")X.preventDefault(),T((v+1)%3,1);else if(X.key==="ArrowLeft")X.preventDefault(),T((v+2)%3,-1);else if(X.key==="Tab"){let H=[...m.querySelectorAll("button")].filter(K=>K.offsetParent!==null),W=H.indexOf(document.activeElement);X.shiftKey&&W<=0?(X.preventDefault(),H[H.length-1].focus()):!X.shiftKey&&W===H.length-1&&(X.preventDefault(),H[0].focus())}}},!0)}let w=(N,R,I,F=0)=>`translate(${N}px,${R}px) translate(-50%,-50%) scale(${I}) rotate(${F}deg)`;function _(){let N=window.innerWidth,R=window.innerHeight,I=N<820,F=I?140:96,B=I?90:40;return{s:Math.min(N*(I?.96:.86)/Fh,(R-F-B)/Dx),cx:N/2,cy:F+(R-F-B)/2}}function S(){let N=_();o=N.s,x.style.transform=w(N.cx,N.cy,N.s)}function L(N){var I;let R=Di[N];d[I=R.id]||(d[I]=u[R.id]()),g.replaceChildren(d[R.id].scr),d[R.id].intro(),v=N,m.setAttribute("aria-label",R.name),p.forEach((F,B)=>F.setAttribute("aria-selected",String(B===N)))}function T(N,R){if(!(N===v||!y)){if(tn.whoosh(),e)return L(N);g.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${R*90}deg)`}],{duration:220,easing:"ease-in"}).onfinish=()=>{L(N),g.animate([{transform:`rotateY(${-R*90}deg) scale(.9)`},{transform:"rotateY(0deg) scale(1)"}],{duration:420,easing:"cubic-bezier(.2,.9,.3,1.25)"})}}}function P(N,R,I){if(A(),y)return T(Di.findIndex(B=>B.id===N),1);y=!0,b=I||document.activeElement,document.getElementById("tbStop")?.click(),document.documentElement.classList.add("osv-lock"),m.classList.add("on"),L(Di.findIndex(B=>B.id===N)),S(),tn.whoosh(),setTimeout(()=>{y&&i?.setPaused?.(!0)},e?0:1e3);let F=_();if(!e){let B=R||{left:F.cx-60,top:F.cy-38,width:120,height:76},X=Math.max(.02,B.width/Fh);x.animate([{transform:w(B.left+B.width/2,B.top+B.height/2,X,-360),filter:"saturate(2.2)"},{transform:w(F.cx,F.cy,F.s*1.05,8),offset:.72,filter:"saturate(1.2)"},{transform:w(F.cx,F.cy,F.s),filter:"none"}],{duration:950,easing:"cubic-bezier(.2,.8,.2,1)"}),m._burst.animate([{transform:"translate(-50%,-50%) scale(0)",opacity:1},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.95,offset:.55},{transform:"translate(-50%,-50%) scale(1)",opacity:.22}],{duration:1150,easing:"ease-out"}),m.animate([{backgroundColor:"rgba(12,10,30,0)"},{backgroundColor:"rgba(12,10,30,.55)"}],{duration:420}),p.forEach((H,W)=>H.animate([{transform:"translateY(-90px) rotate(-12deg)",opacity:0},{transform:"none",opacity:1}],{duration:520,delay:420+W*90,easing:"cubic-bezier(.2,.9,.3,1.4)",fill:"backwards"}))}setTimeout(()=>p[v]?.focus({preventScroll:!0}),60)}function U(){if(!y)return;y=!1,i?.setPaused?.(!1),tn.whoosh();let N=()=>{m.classList.remove("on"),document.documentElement.classList.remove("osv-lock"),b?.focus?.({preventScroll:!0})};if(e)return N();let R=_(),I=i?.osScreenRect?.(Di[v].id),F={duration:560,fill:"forwards"},B=[x.animate([{transform:w(R.cx,R.cy,R.s)},I?{transform:w(I.left+I.width/2,I.top+I.height/2,Math.max(.02,I.width/Fh),360)}:{transform:w(R.cx,R.cy,R.s*.15,200),opacity:0}],{...F,easing:"cubic-bezier(.6,0,.75,.35)"}),m._burst.animate([{opacity:.22,transform:"translate(-50%,-50%) scale(1)"},{opacity:0,transform:"translate(-50%,-50%) scale(0)"}],{...F,easing:"ease-in"}),m.animate([{backgroundColor:"rgba(12,10,30,.55)"},{backgroundColor:"rgba(12,10,30,0)"}],F)],X=!1,H=()=>{X||(X=!0,N(),B.forEach(W=>W.cancel()))};B[0].onfinish=H,setTimeout(H,900)}return Di.forEach(N=>{let R=document.querySelector(`#${N.id} .card h2`);if(!R)return;let I=t("button","os-open",R,{type:"button",innerHTML:Ll.monitor});I.setAttribute("aria-label",`Show the ${N.name} interface`),I.addEventListener("click",()=>P(N.id,i?.osScreenRect?.(N.id)||I.getBoundingClientRect(),I));let F=R.querySelector(".chip");F&&(F.classList.add("clickable"),F.addEventListener("click",()=>P(N.id,i?.osScreenRect?.(N.id)||F.getBoundingClientRect(),I)))}),{open:P,close:U,get isOpen(){return y}}}var Dl=["#FF9ECF","#7CC8FF","#C8EE5A","#B7A3FF","#FF8F8F","#FFFFFF","#2FBF71","#3D7BFF","#FF7A1A"];function sf(i,{reduceMotion:e}){let t=window.matchMedia("(pointer: fine)").matches,n=0,s=nf(i,{reduceMotion:e}),r={ctx:null,on:!1,noise:null,out:null},a=()=>{if(!r.ctx){let V=r.ctx=new(window.AudioContext||window.webkitAudioContext);r.out=V.createGain(),r.out.gain.value=.8,r.out.connect(V.destination),r.noise=V.createBuffer(1,V.sampleRate,V.sampleRate);let J=r.noise.getChannelData(0);for(let ce=0;ce<J.length;ce++)J[ce]=Math.random()*2-1}return r.ctx},o=(V,J,ce,q,Le)=>{V.gain.setValueAtTime(1e-4,J),V.gain.exponentialRampToValueAtTime(q,J+ce),V.gain.exponentialRampToValueAtTime(1e-4,J+Le)},l=(V,J,ce,q,Le,De)=>{let $e=a(),Ge=$e.createOscillator(),ct=$e.createGain();Ge.type=V,Ge.frequency.setValueAtTime(J,q),ce&&Ge.frequency.exponentialRampToValueAtTime(ce,q+Le*.6),o(ct,q,.004,De,Le),Ge.connect(ct).connect(r.out),Ge.start(q),Ge.stop(q+Le+.05)},c=(V,J,ce,q,Le,De=1)=>{let $e=a(),Ge=$e.createBufferSource(),ct=$e.createBiquadFilter(),G=$e.createGain();return Ge.buffer=r.noise,ct.type=q,ct.frequency.value=Le,ct.Q.value=De,o(G,V,.003,ce,J),Ge.connect(ct).connect(G).connect(r.out),Ge.start(V,Math.random()*.5),Ge.stop(V+J+.05),ct};tn.pop=(V=520)=>{r.on&&l("triangle",V*1.8,V,a().currentTime,.16,.22)},tn.whoosh=()=>{if(!r.on)return;let V=a().currentTime,J=c(V,.7,.35,"bandpass",300,1.2);J.frequency.setValueAtTime(300,V),J.frequency.exponentialRampToValueAtTime(3200,V+.5)},tn.tada=()=>{if(!r.on)return;let V=a().currentTime;[523.25,659.25,783.99,1046.5].forEach((J,ce)=>l("square",J,0,V+ce*.07,.5,.07))};let h=()=>{let V=a().currentTime,J=c(V,.18,.3,"bandpass",900,4);J.frequency.setValueAtTime(400,V),J.frequency.linearRampToValueAtTime(2400,V+.06),J.frequency.linearRampToValueAtTime(500,V+.16)},f=124,u=60/f/4,d=[0,3,5,7,10,12,15,17],m=[0,0,3,0,5,3,2,1,0,0,3,0,6,5,3,2],x={on:!1,next:0,step:0,start:0,timer:0},g=(V,J)=>{V%4===0&&l("sine",150,42,J,.28,.9),V%8===4&&(c(J,.16,.32,"bandpass",1800,.8),l("triangle",200,120,J,.1,.15)),V%2===1&&c(J,.05,V%4===3?.08:.045,"highpass",7e3),V%2===0&&l("sawtooth",55*2**(d[m[V/2%16]]/12),0,J,.17,n===2?.12:.08),n===2&&V%4===2&&l("square",440*2**(d[V*3%8]/12),0,J,.09,.04)},p=()=>{let V=a();for(;x.next<V.currentTime+.12;)g(x.step,x.next),x.next+=u,x.step=(x.step+1)%32},v=()=>{let V=r.on&&n>0;if(V&&!x.on){let J=a();x.on=!0,x.step=0,x.start=x.next=J.currentTime+.06,x.timer=setInterval(p,25)}!V&&x.on&&(x.on=!1,clearInterval(x.timer))};tn.beat=()=>x.on?(r.ctx.currentTime-x.start)*f/60%1:-1;let b=document.getElementById("soundBtn");b?.addEventListener("click",()=>{r.on=!r.on,b.setAttribute("aria-pressed",String(r.on)),r.on&&(a().resume(),tn.pop(720)),v()}),window.addEventListener("keydown",V=>{V.key!=="p"&&V.key!=="P"||V.metaKey||V.ctrlKey||V.altKey||V.target.closest?.("input,textarea,select")||(n=(n+1)%3,document.body.classList.toggle("party",n>=1),document.body.classList.toggle("chaos",n===2),i?.setParty(n>=1),i?.setChaos?.(n===2),n&&tn.tada(),v())}),window.addEventListener("pointerdown",V=>{if(!i||V.button!==0||s.isOpen||V.target.closest?.("a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv"))return;let J=i.pickOs?.(V.clientX,V.clientY);if(J){s.open(J,i.osScreenRect(J));return}e||(i.burstAt(V.clientX,V.clientY),tn.pop(240+Math.random()*420))});let y=document.querySelector(".hero h1"),A=[];if(y&&!e){let V=y.textContent.trim(),J=q=>q.replace(/[&<>]/g,Le=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[Le]);y.setAttribute("aria-label",V),y.innerHTML=V.split(/\s+/).map((q,Le)=>`<span class="w" aria-hidden="true" style="--i:${Le}">${[...q].map(De=>`<span class="l">${J(De)}</span>`).join("")}</span>`).join(" "),A=[...y.querySelectorAll(".l")].map((q,Le)=>({el:q,i:Le,bx:0,by:0,x:0,y:0,r:0,s:1,vx:0,vy:0,vr:0,vs:0,col:""}));let ce=()=>{for(let q of A){let Le=q.el.style.transform;q.el.style.transform="none";let De=q.el.getBoundingClientRect();q.bx=De.left+De.width/2+window.scrollX,q.by=De.top+De.height/2+window.scrollY,q.el.style.transform=Le}};setTimeout(ce,1700),window.addEventListener("resize",ce),document.fonts?.ready.then(()=>setTimeout(ce,120)),y.addEventListener("pointerdown",()=>{for(let q of A)q.vx+=(Math.random()-.5)*1400,q.vy+=-300-Math.random()*900,q.vr+=(Math.random()-.5)*1500;tn.pop(300)})}let w=[...document.querySelectorAll(".card")],_=new IntersectionObserver(V=>{for(let J of V)J.isIntersecting&&(J.target.classList.add("in"),_.unobserve(J.target))},{threshold:.12});w.forEach(V=>_.observe(V)),t&&!e&&w.forEach(V=>{V.querySelector("input")||(V.addEventListener("pointermove",J=>{let ce=V.getBoundingClientRect(),q=(J.clientX-ce.left)/ce.width-.5,Le=(J.clientY-ce.top)/ce.height-.5;V.style.transform=`perspective(1100px) rotateX(${(-Le*5).toFixed(2)}deg) rotateY(${(q*6).toFixed(2)}deg)`}),V.addEventListener("pointerleave",()=>{V.style.transform=""}))});let S=document.querySelector(".marquee"),L=S?[S]:[];if(S&&!e){let V=S.cloneNode(!0);V.classList.add("rev"),S.after(V),L.push(V)}let T=null,P=[],U=-99,N=-99,R=!1;if(t&&!e){let V=document.createElement("canvas");V.id="trail",V.setAttribute("aria-hidden","true"),document.body.appendChild(V),T=V.getContext("2d");let J=()=>{let ce=Math.min(window.devicePixelRatio||1,2);V.width=window.innerWidth*ce,V.height=window.innerHeight*ce,T.setTransform(ce,0,0,ce,0,0)};J(),window.addEventListener("resize",J)}let I=(V,J)=>{V.moveTo(0,-J);for(let ce=1;ce<10;ce++){let q=-Math.PI/2+ce*Math.PI/5,Le=ce%2?J*.45:J;V.lineTo(Math.cos(q)*Le,Math.sin(q)*Le)}V.closePath()},F=document.getElementById("blob"),B=t&&!e&&F,X=-100,H=-100,W=-9999,K=-9999,le=1,me=!1,D=0;window.addEventListener("pointermove",V=>{W=V.clientX,K=V.clientY;let J=performance.now();if(i&&J-D>90){D=J;let ce=s.isOpen||V.target.closest?.("a,button,input,label,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv")?null:i.pickOs?.(W,K);document.body.classList.toggle("os-hover",!!ce),i.hoverOs?.(ce)}if(me=!!V.target.closest?.("a,button,input,label,.tag,.chip"),T&&Xt.level<3&&Math.hypot(W-U,K-N)>7){U=W,N=K;for(let ce=0;ce<(n===2?3:1);ce++)P.push({x:W,y:K,vx:(Math.random()-.5)*140,vy:(Math.random()-.5)*140-50,r:Math.random()*6,vr:(Math.random()-.5)*8,s:6+Math.random()*9,life:.75,kind:Math.floor(Math.random()*3),c:Dl[Math.floor(Math.random()*Dl.length)]});P.length>260&&P.splice(0,P.length-260)}},{passive:!0});let ee=[...document.querySelectorAll("[data-scene]")],ue=window.scrollY,xe=0,he=performance.now(),Se=0,et=0,Pe="",Ve=0,tt=0,re=V=>{let J=Math.min(.05,Math.max(.001,(V-he)/1e3));he=V;let ce=V/1e3;if(xe+=((window.scrollY-ue)/J-xe)*.15,ue=window.scrollY,!e){if(V-tt>100){tt=V;let De=1+Math.min(5,Math.abs(xe)/400)+(n===2?2:0);L.forEach(($e,Ge)=>$e.getAnimations?.({subtree:!0}).forEach(ct=>{ct.playbackRate=De*(Ge?1.3:1)}))}let q=Xt.level>=2?0:Math.max(-9,Math.min(9,xe*.0028))+(n===2?Math.sin(ce*7)*2.5:0);et+=((q-Se)*90-et*11)*J,Se+=et*J;let Le=Math.abs(Se)<.02?"":`skewY(${Se.toFixed(2)}deg)`;if(Le!==Pe){Pe=Le;for(let De of ee)De.style.transform=Le}r.on&&Math.abs(xe)>2600&&V-Ve>300&&(Ve=V,h())}if(A.length&&window.scrollY<window.innerHeight*1.3)for(let q of A){let Le=q.bx-window.scrollX-W,De=q.by-window.scrollY-K,$e=Math.hypot(Le,De)||1,Ge=Math.max(0,1-$e/170),ct=Le/$e*Ge*42,G=De/$e*Ge*42+Math.sin(ce*3+q.i*.55)*(n===2?12:4),Ht=Ge*Math.sign(Le)*28+Math.sin(ce*2+q.i)*(n===2?12:2),pt=1+Ge*.4;q.vx+=((ct-q.x)*160-q.vx*13)*J,q.x+=q.vx*J,q.vy+=((G-q.y)*160-q.vy*13)*J,q.y+=q.vy*J,q.vr+=((Ht-q.r)*160-q.vr*13)*J,q.r+=q.vr*J,q.vs+=((pt-q.s)*160-q.vs*13)*J,q.s+=q.vs*J,q.el.style.transform=`translate(${q.x.toFixed(1)}px,${q.y.toFixed(1)}px) rotate(${q.r.toFixed(1)}deg) scale(${q.s.toFixed(3)})`;let Tt=Ge>.25||n===2?Dl[(q.i+(n===2?Math.floor(ce*7):0))%Dl.length]:"";Tt!==q.col&&(q.col=Tt,q.el.style.color=Tt,q.el.classList.toggle("lit",!!Tt))}if(T&&(P.length||R)){T.clearRect(0,0,window.innerWidth,window.innerHeight);for(let q of P){q.life-=J,q.vy+=260*J,q.x+=q.vx*J,q.y+=q.vy*J,q.r+=q.vr*J;let Le=q.s*(.4+.6*Math.max(0,q.life/.75));T.save(),T.translate(q.x,q.y),T.rotate(q.r),T.beginPath(),q.kind===0?T.arc(0,0,Le,0,Math.PI*2):q.kind===1?T.rect(-Le,-Le,Le*2,Le*2):I(T,Le*1.3),T.fillStyle=q.c,T.lineWidth=2,T.strokeStyle="#000",T.fill(),T.stroke(),T.restore()}P=P.filter(q=>q.life>0),R=P.length>0}B&&(X+=(W-X)*.22,H+=(K-H)*.22,le+=((me?2.2:1)-le)*.2,F.style.transform=`translate(${X.toFixed(1)}px,${H.toFixed(1)}px) translate(-50%,-50%) scale(${le.toFixed(3)})`),requestAnimationFrame(re)};requestAnimationFrame(re)}{let v=function(){l?.setScores(x,d.map(he=>he.s));let D=5*x.reduce((he,Se)=>he+Se,0),ee=u.map((he,Se)=>d.reduce((et,Pe,Ve)=>et+Pe.s[Se]*x[Ve],0)),ue=Math.max(...ee),xe=ee.filter(he=>he===ue).length;document.getElementById("maxNote").textContent=D?`out of ${D}`:"pick at least one",u.forEach((he,Se)=>{let et=document.getElementById("t-"+he.key),Pe=D?Math.round(ee[Se]/D*100):0,Ve=D&&ee[Se]===ue;et.innerHTML=`<b class="mob">${he.name}</b><strong>${ee[Se]}</strong><span class="meter"><i style="width:${Pe}%"></i></span>${Ve?`<em class="lead">${xe>1?"Tied top":"Top score"}</em>`:""}`}),d.forEach((he,Se)=>{document.getElementById("w-"+he.id).value=String(x[Se]),document.getElementById("o-"+he.id).textContent="\xD7"+x[Se]})},I=function(D,ee,ue=()=>T.on){let xe=N(D);if(s){U.style.scrollBehavior="auto",window.scrollTo(0,xe),U.style.scrollBehavior="",ee();return}let he=window.scrollY,Se=xe-he,et=performance.now(),Pe=Math.min(1600,600+Math.abs(Se)*.5);R++,T.scrolling=!0,U.style.scrollBehavior="auto";let Ve=()=>{--R===0&&(T.scrolling=!1,U.style.scrollBehavior="")},tt=re=>{if(!ue()){Ve();return}let V=Math.min(1,(re-et)/Pe),J=V<.5?4*V*V*V:1-(-2*V+2)**3/2;window.scrollTo(0,he+Se*J),V<1?requestAnimationFrame(tt):(Ve(),ee())};requestAnimationFrame(tt)},F=function(D){if(T.on){if(D>=b.length){W();return}T.i=D,A.textContent=`${D+1} / ${b.length}`,w.textContent=b[D].dataset.stop,_.style.width="0%",I(b[D],()=>{T.left=P;let ee=performance.now(),ue=xe=>{T.on&&(T.paused||(T.left-=xe-ee),ee=xe,_.style.width=`${Math.min(100,(1-T.left/P)*100)}%`,T.left<=0?F(D+1):T.raf=requestAnimationFrame(ue))};T.raf=requestAnimationFrame(ue)})}},H=function(){T.on=!0,T.paused=!1,y.hidden=!1,S.textContent="Pause",X.textContent="Stop the tour",X.setAttribute("aria-pressed","true"),F(0)},W=function(){T.on=!1,cancelAnimationFrame(T.raf),y.hidden=!0,X.textContent="Play the tour",X.setAttribute("aria-pressed","false")},i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=(D,ee)=>{try{if(ee===void 0)return localStorage.getItem(D);ee===null?localStorage.removeItem(D):localStorage.setItem(D,ee)}catch{}return null},t=new URLSearchParams(location.search).get("motion");(t==="on"||t==="off")&&e("motion",t==="on"?"on":null);let n=i&&e("motion")==="on",s=i&&!n;if(document.documentElement.classList.add("js"),document.documentElement.classList.toggle("motion-on",n),i){let D=document.createElement("button");D.className="btn icon-btn",D.id="motionBtn",D.type="button",D.setAttribute("aria-label","Animations"),D.setAttribute("aria-pressed",String(n)),D.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/><path class="mo-off" d="M3 3l18 18"/></svg>',D.addEventListener("click",()=>{e("motion",n?null:"on"),location.reload()}),document.getElementById("soundBtn")?.before(D)}let r={top:{ax:.77,ay:.54,max:.5,may:.8,az:-.5,el:.12,zoom:1.12,mzoom:1.4,screen:"hello",bg:"#FFE14D"},challenge:{ax:.27,ay:.52,max:.5,may:.28,az:.42,el:.3,zoom:1.2,mzoom:1.3,screen:"grid100",crowd:1,bg:"#FF9ECF"},method:{inside:"funnel",ax:.72,ay:.5,max:.5,may:.28,az:-.2,el:.28,zoom:1.05,crowd:1,bg:"#B7A3FF"},mint:{inside:"mint",ax:.27,ay:.5,max:.5,may:.28,az:.32,el:.1,zoom:1,bg:"#FF8F8F"},zorin:{inside:"zorin",ax:.73,ay:.5,max:.5,may:.28,az:-.32,el:.1,zoom:1,bg:"#FFB07A"},endless:{inside:"endless",ax:.27,ay:.5,max:.5,may:.28,az:.32,el:.1,zoom:1,bg:"#7CC8FF"},scores:{inside:"scores",ax:.83,ay:.5,max:.5,may:.28,az:-.45,el:.22,zoom:1.38,mzoom:1.1,bg:"#C8EE5A"},energy:{inside:"energy",ax:.27,ay:.5,max:.5,may:.28,az:.45,el:.18,zoom:1.05,bg:"#6EE2D0"},access:{inside:"access",ax:.74,ay:.5,max:.5,may:.28,az:-.3,el:.12,zoom:1,bg:"#FF9ECF"},pick:{inside:"pick",ax:.72,ay:.5,max:.5,may:.28,az:-.15,el:.16,zoom:1,bg:"#B7A3FF",confetti:!0},plan:{ax:.27,ay:.5,max:.5,may:.28,az:.45,el:.3,zoom:1.2,mzoom:1.3,screen:"usb",crowd:1,lit:1,bg:"#FFE14D"},end:{ax:.72,ay:.52,max:.5,may:.28,az:-.4,el:.22,zoom:1.15,mzoom:1.3,screen:"smile",crowd:1,lit:1,bg:"#FFE14D",confetti:!0}},a=[...document.querySelectorAll("[data-scene]")],o=document.getElementById("stage"),l=null;try{let D=document.createElement("canvas");if(!(D.getContext("webgl2")||D.getContext("webgl")))throw new Error("no webgl");let ee=document.querySelector(".nav");l=tf(o,r,a,{reduceMotion:s,flash:document.getElementById("flash"),burst:document.getElementById("burst"),onBg:ue=>{document.body.style.backgroundColor=ue,ee&&(ee.style.backgroundColor=ue)}}),document.fonts?.ready.then(()=>l.redrawText())}catch{document.documentElement.classList.add("no-webgl")}sf(l,{reduceMotion:s});let c=document.querySelector("[data-count]");if(c&&!s){let D=new IntersectionObserver(ee=>{if(!ee[0].isIntersecting)return;D.disconnect();let ue=Number(c.dataset.count),xe=performance.now(),he=Se=>{let et=Math.min(1,(Se-xe)/1100);c.textContent=String(Math.round(ue*(1-(1-et)**3))),et<1&&requestAnimationFrame(he)};requestAnimationFrame(he)},{threshold:.6});D.observe(c)}let h=[...document.querySelectorAll(".links a")],f=new IntersectionObserver(D=>{for(let ee of D){if(!ee.isIntersecting)continue;let ue=ee.target.closest("[data-nav]")?.dataset.nav;h.forEach(xe=>xe.toggleAttribute("aria-current",xe.getAttribute("href")==="#"+ue))}},{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("[data-nav]").forEach(D=>f.observe(D));let u=[{key:"mint",name:"Linux Mint"},{key:"zorin",name:"Zorin OS Lite"},{key:"endless",name:"Endless OS"}],d=[{id:"easy",label:"Easy to learn",s:[4,4,5]},{id:"offline",label:"Works offline",s:[2,2,5]},{id:"energy",label:"Low energy",s:[3,5,2]},{id:"access",label:"Accessibility",s:[4,3,4]},{id:"future",label:"Future updates",s:[5,2,4]}],m={equal:[1,1,1,1,1],offline:[1,3,1,1,1],power:[1,1,3,1,1],long:[1,1,1,1,3]},x=[...m.equal],g=document.getElementById("scoreTable"),p=(D,ee)=>Array.from({length:5},(ue,xe)=>`<i class="sq${xe<D?" on":""}" data-os="${ee}"></i>`).join("");g.innerHTML=`<div class="srow shead"><span>Criterion</span><span>How much it matters</span>${u.map(D=>`<span class="h-${D.key}">${D.name}</span>`).join("")}</div>`+d.map((D,ee)=>`<div class="srow">
      <span class="crit">${D.label}</span>
      <label class="weight"><span class="vh">How much ${D.label.toLowerCase()} matters</span>
        <input type="range" min="0" max="3" step="1" value="1" id="w-${D.id}" data-row="${ee}">
        <output id="o-${D.id}">\xD71</output></label>
      ${D.s.map((ue,xe)=>`<span class="cell" aria-label="${u[xe].name}: ${ue} out of 5"><b class="mob">${u[xe].name}</b>${p(ue,u[xe].key)}</span>`).join("")}
    </div>`).join("")+`<div class="srow stot"><span class="crit">Total</span><span class="weight" id="maxNote"></span>${u.map(D=>`<span class="cell tot" id="t-${D.key}"></span>`).join("")}</div>`,g.addEventListener("input",D=>{let ee=D.target.dataset.row;ee!==void 0&&(x[Number(ee)]=Number(D.target.value),document.querySelectorAll(".presets button").forEach(ue=>ue.setAttribute("aria-pressed","false")),v())}),document.querySelectorAll(".presets button").forEach(D=>{D.addEventListener("click",()=>{m[D.dataset.preset].forEach((ee,ue)=>{x[ue]=ee}),document.querySelectorAll(".presets button").forEach(ee=>ee.setAttribute("aria-pressed",String(ee===D))),v()})}),v();let b=[...document.querySelectorAll("[data-stop]")],y=document.getElementById("tourbar"),A=document.getElementById("tbStep"),w=document.getElementById("tbName"),_=document.getElementById("tbFill"),S=document.getElementById("tbPause"),L=()=>document.querySelector(".nav").offsetHeight,T={on:!1,paused:!1,i:0,left:0,raf:0,scrolling:!1},P=6500,U=document.documentElement,N=D=>Math.round(D.getBoundingClientRect().top+window.scrollY-L()),R=0,B=[...document.querySelectorAll("[data-tour-start]")],X=document.getElementById("tourBtn");B.forEach(D=>D.addEventListener("click",H)),X.addEventListener("click",()=>T.on?W():H()),S.addEventListener("click",()=>{T.paused=!T.paused,S.textContent=T.paused?"Resume":"Pause"}),document.getElementById("tbStop").addEventListener("click",W);let K=D=>{T.on&&(D.target.closest&&D.target.closest(".tourbar, .nav")||W())};window.addEventListener("wheel",K,{passive:!0}),window.addEventListener("touchstart",K,{passive:!0}),window.addEventListener("keydown",D=>{T.on&&(D.key==="ArrowRight"||D.key==="PageDown"?(D.preventDefault(),cancelAnimationFrame(T.raf),T.scrolling||F(T.i+1)):D.key==="ArrowLeft"||D.key==="PageUp"?(D.preventDefault(),cancelAnimationFrame(T.raf),T.scrolling||F(Math.max(0,T.i-1))):(D.key==="Escape"||["ArrowDown","ArrowUp","Home","End"].includes(D.key))&&W())});let le=0,me=-1;window.addEventListener("wheel",()=>{le++,me=-1},{passive:!0}),window.addEventListener("keydown",D=>{if(T.on||D.defaultPrevented||D.metaKey||D.ctrlKey||D.altKey||D.target.closest?.("input,textarea,select,[contenteditable]")||U.classList.contains("osv-lock"))return;if(D.key==="f"||D.key==="F"){document.fullscreenElement?document.exitFullscreen?.():U.requestFullscreen?.().catch(()=>{});return}let ee=D.key==="PageDown"||D.key==="ArrowRight",ue=D.key==="PageUp"||D.key==="ArrowLeft";if(!ee&&!ue)return;D.preventDefault();let xe=window.scrollY,he=b.map(N),Se;if(me>=0)Se=Math.max(0,Math.min(b.length-1,me+(ee?1:-1)));else{let Pe=-1;he.forEach((Ve,tt)=>{Ve<=xe+4&&(Pe=tt)}),Se=ee?Math.min(b.length-1,Pe+1):Pe>=0&&xe>he[Pe]+4?Pe:Math.max(0,Pe-1)}let et=++le;me=Se,I(b[Se],()=>{et===le&&(me=-1)},()=>et===le)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
