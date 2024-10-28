/**
 * Converts colors between different formats.
 */
export class ColorConverter {
    /**
   * Converts RGB color values to a hexadecimal string.
   *
   * @param r - The red component of the color, an integer between 0 and 255.
   * @param g - The green component of the color, an integer between 0 and 255.
   * @param b - The blue component of the color, an integer between 0 and 255.
   * @returns The hexadecimal string representation of the color.
   * @throws {RangeError} If any of the color components is out of range.
   */
  static rgbToHex(r: number, g: number, b: number): string {
    if (r < 0 || r > 255) {
      throw new RangeError('The red component must be between 0 and 255.');
    }
    if (g < 0 || g > 255) {
      throw new RangeError('The green component must be between 0 and 255.');
    }
    if (b < 0 || b > 255) {
      throw new RangeError('The blue component must be between 0 and 255.');
    }
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
}