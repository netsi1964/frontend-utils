/**
 * A class for SVG related calculations.
 */
export default class Svg {
  /**
   * Converts screen coordinates to SVG coordinates.
   * @param {SVGElement} eleSvg - The SVG element.
   * @param {number} x - The x-coordinate on the screen.
   * @param {number} y - The y-coordinate on the screen.
   * @returns {SVGPoint} The corresponding point in SVG coordinates.
   */
  static screen2svg(eleSvg, x, y) {
    const point = eleSvg.createSVGPoint();
    point.x = x;
    point.y = y;
    return point.matrixTransform(eleSvg.getScreenCTM().inverse());
  }

  /**
   * Calculates the Euclidean distance between two points.
   * @param {SVGPoint} point1 - The first point.
   * @param {SVGPoint} point2 - The second point.
   * @returns {number} The distance between the two points.
   */
  static distance(point1, point2) {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  }
}
