// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Math.sqrt;function n(r){return Math.abs(r)}var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,f=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&u&&u.call(r,n,t.set),r};function y(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p,v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",w=v&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,f;if(null==r)return s.call(r);t=r[d],f=d,n=null!=(o=r)&&b.call(o,f);try{r[d]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[d]=t:delete r[d],e}:function(r){return s.call(r)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,U=p,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I,O=h,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,x=I,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:T,uint8:x};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new O(1),Y=new U(k.buffer);function q(r){return k[0]=r,Y[W]}var C,z,B=!0===V?0:1,D=new O(1),J=new U(D.buffer);!0===V?(C=1,z=0):(C=0,z=1);var K={HIGH:C,LOW:z},Q=new O(1),R=new U(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return R[X]=r,R[Z]=n,Q[0]}var rr,nr,tr=Math.floor,er=Number.POSITIVE_INFINITY,or=Number.NEGATIVE_INFINITY;function fr(r){return r!=r}function ir(r){return r===er||r===or}!0===V?(rr=1,nr=0):(rr=0,nr=1);var ur={HIGH:rr,LOW:nr},ar=new O(1),cr=new U(ar.buffer),lr=ur.HIGH,yr=ur.LOW;function pr(r,n,t,e){return ar[0]=r,n[e]=cr[lr],n[e+t]=cr[yr],n}function vr(r){return pr(r,[0,0],1,0)}y(vr,"assign",pr);var sr=[0,0];function br(r,t,e,o){return fr(r)||ir(r)?(t[o]=r,t[o+e]=0,t):0!==r&&n(r)<22250738585072014e-324?(t[o]=4503599627370496*r,t[o+e]=-52,t):(t[o]=r,t[o+e]=0,t)}y((function(r){return br(r,[0,0],1,0)}),"assign",br);var dr=[0,0],wr=[0,0];function Ar(r,n){var t,e,o,f,i,u;return 0===n||0===r||fr(r)||ir(r)?r:(br(r,dr,1,0),n+=dr[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-1023|0}(r=dr[0]),n<-1074?(o=0,f=r,vr.assign(o,sr,1,0),i=sr[0],i&=2147483647,u=q(f),$(i|=u&=2147483648,sr[1])):n>1023?r<0?or:er:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vr.assign(r,wr,1,0),t=wr[0],t&=2148532223,e*$(t|=n+1023<<20,wr[1])))}function _r(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ur=16777216,gr=5.960464477539063e-8,jr=_r(20),Nr=_r(20),Ir=_r(20),Or=_r(20);function Sr(r,n,t,e,o,f,i,u,a){var c,l,y,p,v,s,b,d,w;for(p=f,w=e[t],d=t,v=0;d>0;v++)l=gr*w|0,Or[v]=w-Ur*l|0,w=e[d-1]+l,d-=1;if(w=Ar(w,o),w-=8*tr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Or[t-1]>>24-o,Or[t-1]-=v<<24-o,y=Or[t-1]>>23-o):0===o?y=Or[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Or[v],0===c?0!==d&&(c=1,Or[v]=16777216-d):Or[v]=16777215-d;if(o>0)switch(o){case 1:Or[t-1]&=8388607;break;case 2:Or[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Ar(1,o)))}if(0===w){for(d=0,v=t-1;v>=f;v--)d|=Or[v];if(0===d){for(s=1;0===Or[f-s];s++);for(v=t+1;v<=t+s;v++){for(a[u+v]=mr[i+v],l=0,d=0;d<=u;d++)l+=r[d]*a[u+(v-d)];e[v]=l}return Sr(r,n,t+=s,e,o,f,i,u,a)}}if(0===w)for(t-=1,o-=24;0===Or[t];)t-=1,o-=24;else(w=Ar(w,-o))>=Ur?(l=gr*w|0,Or[t]=w-Ur*l|0,o+=24,Or[t+=1]=l):Or[t]=0|w;for(l=Ar(1,o),v=t;v>=0;v--)e[v]=l*Or[v],l*=gr;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=hr[s]*e[v+s];Ir[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Ir[v];for(n[0]=0===y?l:-l,l=Ir[0]-l,v=1;v<=t;v++)l+=Ir[v];return n[1]=0===y?l:-l,7&b}function Er(r,n,t,e){var o,f,i,u,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),u=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)jr[a]=c<0?0:mr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*jr[i+(a-c)];Nr[a]=o}return Sr(r,n,4,Nr,u,4,f,i,jr)}var Fr=Math.round;function Tr(r,n,t){var e,o,f,i,u;return f=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),i=6077100506506192e-26*e,u=n>>20|0,t[0]=f-i,u-(q(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=f)-(f=o-(i=6077100506303966e-26*e))-i),t[0]=f-i,u-(q(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=f)-(f=o-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var xr=1.5707963267341256,Hr=6077100506506192e-26,Gr=2*Hr,Pr=3*Hr,Lr=4*Hr,Mr=[0,0,0],Vr=[0,0];function Wr(r,n){var t,e,o,f,i,u,a;if((o=2147483647&q(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Tr(r,o,n):o<=1073928572?r>0?(a=r-xr,n[0]=a-Hr,n[1]=a-n[0]-Hr,1):(a=r+xr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-1):r>0?(a=r-2*xr,n[0]=a-Gr,n[1]=a-n[0]-Gr,2):(a=r+2*xr,n[0]=a+Gr,n[1]=a-n[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Tr(r,o,n):r>0?(a=r-3*xr,n[0]=a-Pr,n[1]=a-n[0]-Pr,3):(a=r+3*xr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-3):1075388923===o?Tr(r,o,n):r>0?(a=r-4*xr,n[0]=a-Lr,n[1]=a-n[0]-Lr,4):(a=r+4*xr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-4);if(o<1094263291)return Tr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return D[0]=r,J[B]}(r),a=$(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,f=3;0===Mr[f-1];)f-=1;return u=Er(Mr,Vr,e,f),r<0?(n[0]=-Vr[0],n[1]=-Vr[1],-u):(n[0]=Vr[0],n[1]=Vr[1],u)}var kr=-.16666666666666632;function Yr(r,n,t,e,o){var f,i,u,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),u=c*r,t[o]=0===n?r+u*(kr+c*i):r-(c*(.5*n-u*i)-n-u*kr),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(f=.5*c),t[o+e]=a+(1-a-f+(c*i-r*n)),t}var qr=[0,0];function Cr(r,n,t,e){var o,f;if(o=q(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Yr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(f=Wr(r,qr),Yr(qr[0],qr[1],n,t,e),3&f){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}y((function(r){return Cr(r,[0,0],1,0)}),"assign",Cr);var zr=[0,0];return function(t){var e,o,f,i,u,a,c,l;return l=n(t),0===t||l===er?0:(l<=4?(u=function(r){var n,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(n=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(n=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),n/t)}(a=t*t),e=(c=l*(l+3.8317059702075125)*(l-981/256- -.0003252797924876844))*u):l<=8?(u=function(r){var n,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(n=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(n=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),n/t)}(a=t*t),e=(c=l*(l+7.015586669815619)*(l-7.015625- -38330184381246464e-21))*u):(o=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)}(i=(a=8/l)*a),f=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)}(i),c=1/(1.772453850905516*r(l)),Cr(l,zr,1,0),e=c*(o*(zr[0]-zr[1])+a*f*(zr[0]+zr[1]))),t<0&&(e*=-1),e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).j1=n();
//# sourceMappingURL=browser.js.map
