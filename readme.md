# lines-intersection [![experimental](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://travis-ci.org/dy/lines-intersection.png)](https://travis-ci.org/dy/lines-intersection)

Calculate intersection of two lines.

[![npm install lines-intersection](https://nodei.co/npm/lines-intersection.png?mini=true)](https://npmjs.org/package/lines-intersection/)

```js
const x = require('lines-intersection')

x(0,0, 1,1, 1,0, 0,1) // [.5, .5]
x([0,0, 1,1], [1,0, 0,1]) // [.5, .5]
x([0,0], [1,1], [1,0], [0,1]) // [.5, .5]
```

## Related

* [segseg](https://www.npmjs.com/package/segseg) − find intersection of two segments.
* [lines-intersect](https://www.npmjs.com/package/lines-intersect) − check if lines intersect.
* [simple-intersect](https://www.npmjs.com/package/simple-intersect) − collection of various intersection checkers.

## Analogs

* [linestring-intersect](https://www.npmjs.com/package/linestring-intersect)
* [line-intersect-2d](https://www.npmjs.com/package/line-intersect-2d)
* [line-segments-intersection](https://www.npmjs.com/package/line-segments-intersection)
* [line-segment-intersection](https://www.npmjs.com/package/line-segment-intersection)
* [@turf/line-intersect](https://www.npmjs.com/package/@turf/line-intersect)
* [line-intersection](https://www.npmjs.com/package/line-intersection)
* [line-intersect](https://www.npmjs.com/package/line-intersect)
* [intersection](https://www.npmjs.com/package/intersection)

## License

(c) 2018 Dmitry Yv. MIT License
