// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.sqrt;function e(r){return Math.abs(r)}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,v=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=v.call(t,m,"$1e"),t=v.call(t,b,"e"),t=v.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=v.call(t,g,"e+0$1"),t=v.call(t,y,"e-0$1"),r.alternate&&(t=v.call(t,d,"$1."),t=v.call(t,h,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):l.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,x=Array.isArray;function U(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,i,a,c,f,s,l,p,v,g,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,U(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!U(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,g=n.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+_(y):_(y)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function N(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[N(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var T=Object.prototype,O=T.toString,V=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,H=T.__lookupSetter__;var W=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||H.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};function C(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var L=2147483647,P=2146435072;var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var M=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[Y],a=Y,e=null!=(i=r)&&Z.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,tr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),t=e,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr=er,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null;var or,cr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),t=e,r=(ir&&t instanceof Uint8Array||"[object Uint8Array]"===q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=or,ur="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var lr,pr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(ur&&t instanceof Uint16Array||"[object Uint16Array]"===q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr,gr={uint16:lr,uint8:fr};(vr=new gr.uint16(1))[0]=4660;var yr=52===new gr.uint8(vr.buffer)[0],dr=!0===yr?1:0,hr=new nr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[dr]}var mr,Ar,_r=1048575,Er=!0===yr?0:1,xr=new nr(1),Ur=new K(xr.buffer);!0===yr?(mr=1,Ar=0):(mr=0,Ar=1);var Sr={HIGH:mr,LOW:Ar},Ir=new nr(1),kr=new K(Ir.buffer),Fr=Sr.HIGH,Nr=Sr.LOW;function jr(r,e){return kr[Fr]=r,kr[Nr]=e,Ir[0]}var Tr=Math.floor,Or=Number.POSITIVE_INFINITY,Vr=Number.NEGATIVE_INFINITY,$r=1023,Gr=1023,Hr=-1023,Wr=-1074;function Cr(r){return r!=r}function Lr(r){return r===Or||r===Vr}var Pr,Rr,Mr=2147483648;!0===yr?(Pr=1,Rr=0):(Pr=0,Rr=1);var Zr={HIGH:Pr,LOW:Rr},Xr=new nr(1),Yr=new K(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Br(r,e,t,n){return Xr[0]=r,e[n]=Yr[qr],e[n+t]=Yr[zr],e}function Dr(r){return Br(r,[0,0],1,0)}C(Dr,"assign",Br);var Jr=[0,0];var Kr=22250738585072014e-324,Qr=4503599627370496;function re(r,t,n,i){return Cr(r)||Lr(r)?(t[i]=r,t[i+n]=0,t):0!==r&&e(r)<Kr?(t[i]=r*Qr,t[i+n]=-52,t):(t[i]=r,t[i+n]=0,t)}C((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=2220446049250313e-31,te=2148532223,ne=[0,0],ie=[0,0];function ae(r,e){var t,n,i,a,o,c;return 0===e||0===r||Cr(r)||Lr(r)?r:(re(r,ne,1,0),r=ne[0],e+=ne[1],e+=function(r){var e=br(r);return(e=(e&P)>>>20)-$r|0}(r),e<Wr?(i=0,a=r,Dr.assign(i,Jr,1,0),o=Jr[0],o&=L,c=br(a),jr(o|=c&=Mr,Jr[1])):e>Gr?r<0?Vr:Or:(e<=Hr?(e+=52,n=ee):n=1,Dr.assign(r,ie,1,0),t=ie[0],t&=te,n*jr(t|=e+$r<<20,ie[1])))}function oe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ue=16777216,se=5.960464477539063e-8,le=oe(20),pe=oe(20),ve=oe(20),ge=oe(20);function ye(r,e,t,n,i,a,o,c,f){var u,s,l,p,v,g,y,d,h;for(p=a,h=n[t],d=t,v=0;d>0;v++)s=se*h|0,ge[v]=h-ue*s|0,h=n[d-1]+s,d-=1;if(h=ae(h,i),h-=8*Tr(.125*h),h-=y=0|h,l=0,i>0?(y+=v=ge[t-1]>>24-i,ge[t-1]-=v<<24-i,l=ge[t-1]>>23-i):0===i?l=ge[t-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,u=0,v=0;v<t;v++)d=ge[v],0===u?0!==d&&(u=1,ge[v]=16777216-d):ge[v]=16777215-d;if(i>0)switch(i){case 1:ge[t-1]&=8388607;break;case 2:ge[t-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ae(1,i)))}if(0===h){for(d=0,v=t-1;v>=a;v--)d|=ge[v];if(0===d){for(g=1;0===ge[a-g];g++);for(v=t+1;v<=t+g;v++){for(f[c+v]=ce[o+v],s=0,d=0;d<=c;d++)s+=r[d]*f[c+(v-d)];n[v]=s}return ye(r,e,t+=g,n,i,a,o,c,f)}}if(0===h)for(t-=1,i-=24;0===ge[t];)t-=1,i-=24;else(h=ae(h,-i))>=ue?(s=se*h|0,ge[t]=h-ue*s|0,i+=24,ge[t+=1]=s):ge[t]=0|h;for(s=ae(1,i),v=t;v>=0;v--)n[v]=s*ge[v],s*=se;for(v=t;v>=0;v--){for(s=0,g=0;g<=p&&g<=t-v;g++)s+=fe[g]*n[v+g];ve[t-v]=s}for(s=0,v=t;v>=0;v--)s+=ve[v];for(e[0]=0===l?s:-s,s=ve[0]-s,v=1;v<=t;v++)s+=ve[v];return e[1]=0===l?s:-s,7&y}function de(r,e,t,n){var i,a,o,c,f,u,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)le[f]=u<0?0:ce[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*le[o+(f-u)];pe[f]=i}return 4,ye(r,e,4,pe,c,4,a,o,le)}var he=Math.round,we=.6366197723675814,be=1.5707963267341256,me=6077100506506192e-26,Ae=6077100506303966e-26,_e=20222662487959506e-37,Ee=20222662487111665e-37,xe=84784276603689e-45,Ue=2047;function Se(r,e,t){var n,i,a,o,c;return a=r-(n=he(r*we))*be,o=n*me,c=e>>20|0,t[0]=a-o,c-(br(t[0])>>20&Ue)>16&&(o=n*_e-((i=a)-(a=i-(o=n*Ae))-o),t[0]=a-o,c-(br(t[0])>>20&Ue)>49&&(o=n*xe-((i=a)-(a=i-(o=n*Ee))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ie=0,ke=16777216,Fe=1.5707963267341256,Ne=6077100506506192e-26,je=2*Ne,Te=3*Ne,Oe=4*Ne,Ve=598523,$e=1072243195,Ge=1073928572,He=1074752122,We=1074977148,Ce=1075183036,Le=1075388923,Pe=1075594811,Re=1094263291,Me=[0,0,0],Ze=[0,0];function Xe(r,e){var t,n,i,a,o,c,f;if((i=br(r)&L|0)<=$e)return e[0]=r,e[1]=0,0;if(i<=He)return(i&_r)===Ve?Se(r,i,e):i<=Ge?r>0?(f=r-Fe,e[0]=f-Ne,e[1]=f-e[0]-Ne,1):(f=r+Fe,e[0]=f+Ne,e[1]=f-e[0]+Ne,-1):r>0?(f=r-2*Fe,e[0]=f-je,e[1]=f-e[0]-je,2):(f=r+2*Fe,e[0]=f+je,e[1]=f-e[0]+je,-2);if(i<=Pe)return i<=Ce?i===We?Se(r,i,e):r>0?(f=r-3*Fe,e[0]=f-Te,e[1]=f-e[0]-Te,3):(f=r+3*Fe,e[0]=f+Te,e[1]=f-e[0]+Te,-3):i===Le?Se(r,i,e):r>0?(f=r-4*Fe,e[0]=f-Oe,e[1]=f-e[0]-Oe,4):(f=r+4*Fe,e[0]=f+Oe,e[1]=f-e[0]+Oe,-4);if(i<Re)return Se(r,i,e);if(i>=P)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return xr[0]=r,Ur[Er]}(r),f=jr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Me[o]=0|f,f=(f-Me[o])*ke;for(Me[2]=f,a=3;Me[a-1]===Ie;)a-=1;return c=de(Me,Ze,n,a),r<0?(e[0]=-Ze[0],e[1]=-Ze[1],-c):(e[0]=Ze[0],e[1]=Ze[1],c)}var Ye=-.16666666666666632,qe=.00833333333332249,ze=-.0001984126982985795,Be=27557313707070068e-22,De=-2.5050760253406863e-8,Je=1.58969099521155e-10,Ke=.0416666666666666,Qe=-.001388888888887411,rt=2480158728947673e-20,et=-2.7557314351390663e-7,tt=2.087572321298175e-9,nt=-11359647557788195e-27;function it(r,e,t,n,i){var a,o,c,f,u;return o=qe+(u=r*r)*(ze+u*Be)+u*(f=u*u)*(De+u*Je),c=u*r,t[i]=0===e?r+c*(Ye+u*o):r-(u*(.5*e-c*o)-e-c*Ye),o=u*(Ke+u*(Qe+u*rt)),o+=f*f*(et+u*(tt+u*nt)),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var at=1072243195,ot=1044381696,ct=[0,0];function ft(r,e,t,n){var i,a,o;if(a=br(r),(a&=L)<=at)return a<ot&&0==(0|r)&&(e[n]=r,e[n+t]=0),it(r,0,e,t,n);if(a>=P)return e[n]=NaN,e[n+t]=NaN,e;switch(o=Xe(r,ct),it(ct[0],ct[1],e,t,n),3&o){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}C((function(r){return ft(r,[0,0],1,0)}),"assign",ft);var ut=[0,0];function st(t){var n,i,a,o,c,f,u,s;return s=e(t),0===t||s===Or?0:(s<=4?(c=function(r){var e,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(e=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(e=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),e/t)}(f=t*t),n=(u=s*(s+3.8317059702075125)*(s-981/256- -.0003252797924876844))*c):s<=8?(c=function(r){var e,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(e=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(e=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),e/t)}(f=t*t),n=(u=s*(s+7.015586669815619)*(s-7.015625- -38330184381246464e-21))*c):(i=function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(e=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),e/t)}(o=(f=8/s)*f),a=function(r){var e,t;return 0===r?.046875:((r<0?-r:r)<=1?(e=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(e=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),e/t)}(o),u=1/(1.772453850905516*r(s)),ft(s,ut,1,0),n=u*(i*(ut[0]-ut[1])+f*a*(ut[0]+ut[1]))),t<0&&(n*=-1),n)}export{st as default};
//# sourceMappingURL=mod.js.map
