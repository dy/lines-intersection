'use strict'

const x = require('./')
const a = require('assert')

a.deepEqual(x(0,0, 1,1, 1,0, 0,1), [.5, .5])
a.deepEqual(x([0,0, 1,1], [1,0, 0,1]), [.5, .5])
a.deepEqual(x(0,0,0,0, 1,1,1,1), undefined)
