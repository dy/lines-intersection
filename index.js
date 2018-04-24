'use strict'

module.exports = function intersect (x1, y1, x2, y2, x3, y3, x4, y4) {
  if (arguments.length === 4) {
    x4 = y2[0]
    y4 = y2[1]
    x3 = x2[0]
    y3 = x2[1]
    x2 = y1[0]
    y2 = y1[1]
    x1 = x1[0]
    y1 = x1[1]
  }
  else if (arguments.length === 2) {
    y4 = y1[3]
    x4 = y1[2]
    y3 = y1[1]
    x3 = y1[0]
    y2 = x1[3]
    x2 = x1[2]
    y1 = x1[1]
    x1 = x1[0]
  }

  var xy12 = (x1*y2 - y1*x2)
  var xy34 = (x3*y4 - y3*x4)
  var x12 = (x1 - x2)
  var y12 = (y1 - y2)
  var x34 = (x3 - x4)
  var y34 = (y3 - y4)
  var xy1234 = (x12*y34 - y12*x34)

  if (xy1234 === 0) return null

  var x = (xy12*x34 - x12*xy34) / xy1234
  var y = (xy12*y34 - y12*xy34) / xy1234


  return [x, y]
}
