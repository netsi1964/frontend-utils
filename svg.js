export function screen2svg (eleSvg, x, y) {
  const point = eleSvg.createSVGPoint()
  point.x = x
  point.y = y
  return point.matrixTransform(eleSvg.getScreenCTM().inverse())
}

export function distance (point1, point2) {
  return Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
  )
}

export default {
  screen2svg,
  distance
}
