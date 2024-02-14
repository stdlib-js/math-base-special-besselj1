// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=Math.sqrt;function e(r){return Math.abs(r)}var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,d=String.prototype.toUpperCase,y=String.prototype.replace,g=/e\+(\d)$/,h=/e-(\d)$/,v=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,m=/\.0*e/,A=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=y.call(t,A,"$1e"),t=y.call(t,m,"e"),t=y.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,g,"e+0$1"),t=y.call(t,h,"e-0$1"),r.alternate&&(t=y.call(t,v,"$1."),t=y.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===d.call(r.specifier)?d.call(t):p.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var I=String.fromCharCode,U=isNaN,N=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,c,f,l,p;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(s(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,U(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(a)?String(n.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),c+=n.arg||"",f+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(j(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function O(r){var e,t;if(!V(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var G=Object.prototype,$=G.toString,H=G.__defineGetter__,W=G.__defineSetter__,C=G.__lookupGetter__,L=G.__lookupSetter__,P=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=G,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&H&&H.call(r,e,t.get),o&&W&&W.call(r,e,t.set),r};function R(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M,Z=2147483647,Y=2146435072,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),q=Object.prototype.toString,z=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",J=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return q.call(r);t=r[D],a=D,e=null!=(i=r)&&z.call(i,a);try{r[D]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[D]=t:delete r[D],n}:function(r){return q.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,tr=M,nr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),t=e,r=(nr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,fr="function"==typeof Uint8Array,ur="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),t=e,r=(fr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,dr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,gr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(dr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,vr={uint16:lr,uint8:pr};(hr=new vr.uint16(1))[0]=4660;var wr=52===new vr.uint8(hr.buffer)[0],br=!0===wr?1:0,mr=new cr(1),Ar=new tr(mr.buffer);function _r(r){return mr[0]=r,Ar[br]}var Er,xr,Ir=!0===wr?0:1,Ur=new cr(1),Nr=new tr(Ur.buffer);!0===wr?(Er=1,xr=0):(Er=0,xr=1);var Sr={HIGH:Er,LOW:xr},kr=new cr(1),Fr=new tr(kr.buffer),jr=Sr.HIGH,Tr=Sr.LOW;function Vr(r,e){return Fr[jr]=r,Fr[Tr]=e,kr[0]}var Or,Gr,$r=Math.floor,Hr=Number.POSITIVE_INFINITY,Wr=Number,Cr=Wr.NEGATIVE_INFINITY,Lr=Wr.NEGATIVE_INFINITY;function Pr(r){return r===Hr||r===Lr}!0===wr?(Or=1,Gr=0):(Or=0,Gr=1);var Rr={HIGH:Or,LOW:Gr},Mr=new cr(1),Zr=new tr(Mr.buffer),Yr=Rr.HIGH,Xr=Rr.LOW;function qr(r,e,t,n){return Mr[0]=r,e[n]=Zr[Yr],e[n+t]=Zr[Xr],e}function zr(r){return qr(r,[0,0],1,0)}R(zr,"assign",qr);var Br=[0,0];function Dr(r,t,n,i){return function(r){return r!=r}(r)||Pr(r)?(t[i]=r,t[i+n]=0,t):0!==r&&e(r)<22250738585072014e-324?(t[i]=4503599627370496*r,t[i+n]=-52,t):(t[i]=r,t[i+n]=0,t)}R((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(r,e){var t,n,i;return 0===e||0===r||(i=r)!=i||Pr(r)?r:(Dr(r,Jr,1,0),e+=Jr[1],e+=function(r){var e=_r(r);return(e=(e&Y)>>>20)-1023|0}(r=Jr[0]),e<-1074?function(r,e){var t,n;return zr.assign(r,Br,1,0),t=Br[0],t&=Z,n=_r(e),Vr(t|=n&=2147483648,Br[1])}(0,r):e>1023?r<0?Cr:Hr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,zr.assign(r,Kr,1,0),t=Kr[0],t&=2148532223,n*Vr(t|=e+1023<<20,Kr[1])))}function re(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ne=16777216,ie=5.960464477539063e-8,ae=re(20),oe=re(20),ce=re(20),fe=re(20);function ue(r,e,t,n,i,a,o,c,f){var u,s,l,p,d,y,g,h,v;for(p=a,v=n[t],h=t,d=0;h>0;d++)s=ie*v|0,fe[d]=v-ne*s|0,v=n[h-1]+s,h-=1;if(v=Qr(v,i),v-=8*$r(.125*v),v-=g=0|v,l=0,i>0?(g+=d=fe[t-1]>>24-i,fe[t-1]-=d<<24-i,l=fe[t-1]>>23-i):0===i?l=fe[t-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,u=0,d=0;d<t;d++)h=fe[d],0===u?0!==h&&(u=1,fe[d]=16777216-h):fe[d]=16777215-h;if(i>0)switch(i){case 1:fe[t-1]&=8388607;break;case 2:fe[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=Qr(1,i)))}if(0===v){for(h=0,d=t-1;d>=a;d--)h|=fe[d];if(0===h){for(y=1;0===fe[a-y];y++);for(d=t+1;d<=t+y;d++){for(f[c+d]=ee[o+d],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(d-h)];n[d]=s}return ue(r,e,t+=y,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===fe[t];)t-=1,i-=24;else(v=Qr(v,-i))>=ne?(s=ie*v|0,fe[t]=v-ne*s|0,i+=24,fe[t+=1]=s):fe[t]=0|v;for(s=Qr(1,i),d=t;d>=0;d--)n[d]=s*fe[d],s*=ie;for(d=t;d>=0;d--){for(s=0,y=0;y<=p&&y<=t-d;y++)s+=te[y]*n[d+y];ce[t-d]=s}for(s=0,d=t;d>=0;d--)s+=ce[d];for(e[0]=0===l?s:-s,s=ce[0]-s,d=1;d<=t;d++)s+=ce[d];return e[1]=0===l?s:-s,7&g}function se(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ae[f]=u<0?0:ee[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ae[o+(f-u)];oe[f]=i}return ue(r,e,4,oe,c,4,a,o,ae)}var le=Math.round;function pe(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=le(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-(_r(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-(_r(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var de=1.5707963267341256,ye=6077100506506192e-26,ge=2*ye,he=3*ye,ve=4*ye,we=[0,0,0],be=[0,0];function me(r,e){var t,n,i,a,o,c,f;if((i=_r(r)&Z|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?pe(r,i,e):i<=1073928572?r>0?(f=r-de,e[0]=f-ye,e[1]=f-e[0]-ye,1):(f=r+de,e[0]=f+ye,e[1]=f-e[0]+ye,-1):r>0?(f=r-2*de,e[0]=f-ge,e[1]=f-e[0]-ge,2):(f=r+2*de,e[0]=f+ge,e[1]=f-e[0]+ge,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?pe(r,i,e):r>0?(f=r-3*de,e[0]=f-he,e[1]=f-e[0]-he,3):(f=r+3*de,e[0]=f+he,e[1]=f-e[0]+he,-3):1075388923===i?pe(r,i,e):r>0?(f=r-4*de,e[0]=f-ve,e[1]=f-e[0]-ve,4):(f=r+4*de,e[0]=f+ve,e[1]=f-e[0]+ve,-4);if(i<1094263291)return pe(r,i,e);if(i>=Y)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Ur[0]=r,Nr[Ir]}(r),f=Vr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)we[o]=0|f,f=16777216*(f-we[o]);for(we[2]=f,a=3;0===we[a-1];)a-=1;return c=se(we,be,n,a),r<0?(e[0]=-be[0],e[1]=-be[1],-c):(e[0]=be[0],e[1]=be[1],c)}var Ae=-.16666666666666632;function _e(r,e,t,n,i){var a,o,c,f,u;return o=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(f=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),c=u*r,t[i]=0===e?r+c*(Ae+u*o):r-(u*(.5*e-c*o)-e-c*Ae),o=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),o+=f*f*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var Ee=[0,0];function xe(r,e,t,n){var i,a;if(i=_r(r),(i&=Z)<=1072243195)return i<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),_e(r,0,e,t,n);if(i>=Y)return e[n]=NaN,e[n+t]=NaN,e;switch(a=me(r,Ee),_e(Ee[0],Ee[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}R((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var Ie=[0,0];return function(t){var n,i,a,o,c,f,u,s;return s=e(t),0===t||s===Hr?0:(s<=4?(c=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(f=t*t),n=(u=s*(s+3.8317059702075125)*(s-981/256- -.0003252797924876844))*c):s<=8?(c=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(f=t*t),n=(u=s*(s+7.015586669815619)*(s-7.015625- -38330184381246464e-21))*c):(i=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(f=8/s)*f),a=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(1.772453850905516*r(s)),xe(s,Ie,1,0),n=u*(i*(Ie[0]-Ie[1])+f*a*(Ie[0]+Ie[1]))),t<0&&(n*=-1),n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).j1=e();
//# sourceMappingURL=browser.js.map
