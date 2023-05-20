/**
 * A class for basic geometric calculations.
 */
export default class Geometry {
    static PI = 3.141592653589793;
  
    
    static circleArea(radius) {
      if (radius < 0) {
        throw new Error("Radius cannot be negative");
      }
      return this.PI * radius * radius;
    }
  
    static circleCircumference(radius) {
      if (radius < 0) {
        throw new Error("Radius cannot be negative");
      }
      return 2 * this.PI * radius;
    }
  
    static rectangleArea(length, width) {
      if (length < 0 || width < 0) {
        throw new Error("Length and width cannot be negative");
      }
      return length * width;
    }
  
    static cubeVolume(side) {
      if (side < 0) {
        throw new Error("Side cannot be negative");
      }
      return side * side * side;
    }
  
    static degreeToRad(degree) {
      return degree * (this.PI / 180);
    }
  
    static radToDegree(rad) {
      return rad * (180 / this.PI);
    }
  
    static getDistance(point1, point2) {
      const dx = point2.x - point1.x;
      const dy = point2.y - point1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  
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
        circleArea: 'Calculates the area of a circle given its radius.',
        circleCircumference: 'Calculates the circumference of a circle given its radius.',
        rectangleArea: 'Calculates the area of a rectangle given its length and width.',
        cubeVolume: 'Calculates the volume of a cube given its side length.',
        degreeToRad: 'Converts degrees to radians.',
        radToDegree: 'Converts radians to degrees.',
        getDistance: 'Calculates the Euclidean distance between two points.',
        getAngle: 'Calculates the angle (in degrees) between two points with respect to the x-axis.'
      };
  
      return helpMessages[methodName] || 'No help available for this method.';
    }
  }