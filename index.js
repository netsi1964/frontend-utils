function screen2svg (eleSvg, x, y) {
  const point = eleSvg.createSVGPoint()
  point.x = x
  point.y = y
  return point.matrixTransform(eleSvg.getScreenCTM().inverse())
}

const NETSI = {
  SVG: {
    screen2svg
  }
}

exports.NETSI = NETSI
