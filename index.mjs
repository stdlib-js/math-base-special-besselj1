// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-pi@esm/index.mjs";var i=[0,0];function d(d){var a,c,m,o,f,l,p,j;return j=s(d),0===d||j===n?0:(j<=4?(f=function(t){var s,e;return 0===t?-.03405537391318949:((t<0?-t:t)<=1?(s=t*(6678104126.14924+t*(t*(980629.0409895825+t*(t*(10.650724020080236+-.010767857011487301*t)-4461.579298277507))-115486967.64841276))-142585098013.66644,e=4186860446082.0176+t*(42091902282.58013+t*(202283751.40097034+t*(591176.1449417479+t*(1074.227223951738+t*(1+0*t)))))):(s=(t=1/t)*(10.650724020080236+t*(t*(980629.0409895825+t*(t*(6678104126.14924+-142585098013.66644*t)-115486967.64841276))-4461.579298277507))-.010767857011487301,e=0+t*(1+t*(1074.227223951738+t*(591176.1449417479+t*(202283751.40097034+t*(42091902282.58013+4186860446082.0176*t)))))),s/e)}(l=d*d),a=(p=j*(j+3.8317059702075125)*(j-981/256- -.0003252797924876844))*f):j<=8?(f=function(t){var s,e;return 0===t?-.010158790774176108:((t<0?-t:t)<=1?(s=t*(1660853173129901.8+t*(t*(355806656709.1062+t*(t*(5079326.614801118+t*(4.6179191852758255*t-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,e=0x17f1d1995ae4fb00+t*(0x3cda8dbce6f4c4+t*(84899346165481.42+t*(276227772862.44086+t*(648725028.9959639+t*(1126712.5065029138+t*(1388.6978985861358+1*t))))))):(s=4.6179191852758255+(t=1/t)*(t*(5079326.614801118+t*(t*(355806656709.1062+t*(t*(1660853173129901.8+-0x3e45840c066730*t)-36658018905416.664))-1811393126.9860668))-7502.334222078161),e=1+t*(1388.6978985861358+t*(1126712.5065029138+t*(648725028.9959639+t*(276227772862.44086+t*(84899346165481.42+t*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*t))))))),s/e)}(l=d*d),a=(p=j*(j+7.015586669815619)*(j-7.015625- -38330184381246464e-21))*f):(c=function(t){var s,e;return 0===t?1:((t<0?-t:t)<=1?(s=t*(t*(t*(t*(t*(0*t-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,e=t*(t*(t*(t*(t*(1*t-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(s=0+(t=1/t)*(t*(t*(t*(t*(-4435757.816794128*t-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),e=1+t*(t*(t*(t*(t*(-4435757.816794128*t-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),s/e)}(o=(l=8/j)*l),m=function(t){var s,e;return 0===t?.046875:((t<0?-t:t)<=1?(s=33220.913409857225+t*(85145.1606753357+t*(66178.83658127084+t*(18494.262873223866+t*(1706.375429020768+t*(35.26513384663603+0*t))))),e=708712.8194102874+t*(1819458.0422439973+t*(1419460.669603721+t*(400294.43582266977+t*(37890.2297457722+t*(863.8367769604992+1*t)))))):(s=0+(t=1/t)*(35.26513384663603+t*(1706.375429020768+t*(18494.262873223866+t*(66178.83658127084+t*(85145.1606753357+33220.913409857225*t))))),e=1+t*(863.8367769604992+t*(37890.2297457722+t*(400294.43582266977+t*(1419460.669603721+t*(1819458.0422439973+708712.8194102874*t)))))),s/e)}(o),p=1/(t(j)*r),e(i,j),a=p*(c*(i[0]-i[1])+l*m*(i[0]+i[1]))),d<0&&(a*=-1),a)}export{d as default};
//# sourceMappingURL=index.mjs.map
