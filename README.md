<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# j1

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Bessel function of the first kind][bessel-first-kind] of order one.

<section class="intro">

The [Bessel function of the first kind][bessel-first-kind] of order one is defined as

<!-- <equation class="equation" label="eq:bessel_first_kind_order_one" align="center" raw="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" alt="Bessel function of the first kind of order one"> -->

<div class="equation" align="center" data-raw-text="J_1 (x) = \frac{1}{2 \pi} \int_{-\pi}^\pi e^{i(\tau - x \sin(\tau))} \,d\tau" data-equation="eq:bessel_first_kind_order_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/besselj1/docs/img/equation_bessel_first_kind_order_one.svg" alt="Bessel function of the first kind of order one">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-besselj1
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var j1 = require( '@stdlib/math-base-special-besselj1' );
```

#### j1( x )

Computes the [Bessel function of the first kind][bessel-first-kind] of order one at `x`.

```javascript
var v = j1( 0.0 );
// returns 0.0

v = j1( 1.0 );
// returns ~0.440

v = j1( Infinity );
// returns 0.0

v = j1( -Infinity );
// returns 0.0

v = j1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var j1 = require( '@stdlib/math-base-special-besselj1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    console.log( 'j1(%d) = %d', x, j1( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/besselj0`][@stdlib/math/base/special/besselj0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/bessely0`][@stdlib/math/base/special/bessely0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order zero.</span>
-   <span class="package-name">[`@stdlib/math/base/special/bessely1`][@stdlib/math/base/special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-besselj1.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-besselj1

[test-image]: https://github.com/stdlib-js/math-base-special-besselj1/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-besselj1/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-besselj1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-besselj1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-besselj1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-besselj1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-besselj1/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-besselj1/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-besselj1/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-besselj1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-besselj1/main/LICENSE

[bessel-first-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_first_kind:_J.CE.B1

<!-- <related-links> -->

[@stdlib/math/base/special/besselj0]: https://github.com/stdlib-js/math-base-special-besselj0

[@stdlib/math/base/special/bessely0]: https://github.com/stdlib-js/math-base-special-bessely0

[@stdlib/math/base/special/bessely1]: https://github.com/stdlib-js/math-base-special-bessely1

<!-- </related-links> -->

</section>

<!-- /.links -->
