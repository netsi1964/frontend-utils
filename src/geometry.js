/**
 * A class for basic geometric calculations.
 */
export default class Geometry {
  static PI = Math.PI ?? 3.141592653589793;

  /**
   * Calculates the area of a circle given its radius.
   * @param {number} radius - The radius of the circle.
   * @returns {number} The area of the circle.
   */
  static circleArea(radius) {
    if (radius < 0) {
      throw new Error("Radius cannot be negative");
    }
    return this.PI * radius * radius;
  }

  /**
   * Calculates the circumference of a circle given its radius.
   * @param {number} radius - The radius of the circle.
   * @returns {number} The circumference of the circle.
   */
  static circleCircumference(radius) {
    if (radius < 0) {
      throw new Error("Radius cannot be negative");
    }
    return 2 * this.PI * radius;
  }

  /**
   * Calculates the area of a rectangle given its length and width.
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   * @returns {number} The area of the rectangle.
   */
  static rectangleArea(length, width) {
    if (length < 0 || width < 0) {
      throw new Error("Length and width cannot be negative");
    }
    return length * width;
  }

  /**
   * Calculates the volume of a cube given its side length.
   * @param {number} side - The side length of the cube.
   * @returns {number} The volume of the cube.
   */
  static cubeVolume(side) {
    if (side < 0) {
      throw new Error("Side cannot be negative");
    }
    return side * side * side;
  }

  /**
   * Converts degrees to radians.
   * @param {number} degree - The angle in degrees.
   * @returns {number} The angle in radians.
   */
  static degreeToRad(degree) {
    return degree * (this.PI / 180);
  }

  /**
   * Converts radians to degrees.
   * @param {number} rad - The angle in radians.
   * @returns {number} The angle in degrees.
   */
  static radToDegree(rad) {
    return rad * (180 / this.PI);
  }

  /**
   * Calculates the Euclidean distance between two points.
   * @param {SVGPoint} point1 - The first point.
   * @param {SVGPoint} point2 - The second point.
   * @returns {number} The distance between the two points.
   */
  static getDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Calculates the angle (in degrees) between two points with respect to the x-axis.
   * @param {SVGPoint} point1 - The first point.
   * @param {SVGPoint} point2 - The second point.
   * @returns {number} The angle between the two points.
   */
  static getAngle(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return this.radToDegree(Math.atan2(dy, dx));
  }

  /**
   * Provides a one-line explanation for a method.
   * @param {string} methodName - The name of the method.
   * @returns {string} A one-line explanation for the method.
   */
  static help(methodName) {
    const helpMessages = {
      circleArea: "Calculates the area of a circle given its radius.",
      circleCircumference:
        "Calculates the circumference of a circle given its radius.",
      rectangleArea:
        "Calculates the area of a rectangle given its length and width.",
      cubeVolume: "Calculates the volume of a cube given its side length.",
      degreeToRad: "Converts degrees to radians.",
      radToDegree: "Converts radians to degrees.",
      getDistance: "Calculates the Euclidean distance between two points.",
      getAngle:
        "Calculates the angle (in degrees) between two points with respect to the x-axis.",
    };

    return helpMessages[methodName] || "No help available for this method.";
  }
}
