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
      throw new RangeError("The red component must be between 0 and 255.");
    }
    if (g < 0 || g > 255) {
      throw new RangeError("The green component must be between 0 and 255.");
    }
    if (b < 0 || b > 255) {
      throw new RangeError("The blue component must be between 0 and 255.");
    }
    const toHex = (n: number) => n.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  /**
   * Converts a hexadecimal string to RGB color values.
   *
   * @param hex - The hexadecimal string to convert.
   * @returns An object with the red, green, and blue components of the color.
   * @throws {SyntaxError} If the input string is not a valid hexadecimal color.
   */
  static hexToRgb(hex: string): { r: number; g: number; b: number } {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
      throw new SyntaxError("Invalid hexadecimal color.");
    }
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    };
  }

  /**
   * Converts RGB color values to the HSL format.
   *
   * @param r - The red component of the color, an integer between 0 and 255.
   * @param g - The green component of the color, an integer between 0 and 255.
   * @param b - The blue component of the color, an integer between 0 and 255.
   * @returns An object with the hue, saturation, and lightness of the color.
   * @throws {RangeError} If any of the color components is out of range.
   */
  static rgbToHsl(
    r: number,
    g: number,
    b: number,
  ): { h: number; s: number; l: number } {
    if (r < 0 || r > 255) {
      throw new RangeError("The red component must be between 0 and 255.");
    }
    if (g < 0 || g > 255) {
      throw new RangeError("The green component must be between 0 and 255.");
    }
    if (b < 0 || b > 255) {
      throw new RangeError("The blue component must be between 0 and 255.");
    }
    const red = r / 255;
    const green = g / 255;
    const blue = b / 255;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    let h = (max + min) / 2;
    let s = h;
    let l = h;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case red:
          h = (green - blue) / d + (green < blue ? 6 : 0);
          break;
        case green:
          h = (blue - red) / d + 2;
          break;
        case blue:
          h = (red - green) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  }

  /**
   * Converts HSL color values to the RGB format.
   *
   * @param h - The hue of the color, a number between 0 and 360.
   * @param s - The saturation of the color, a number between 0 and 100.
   * @param l - The lightness of the color, a number between 0 and 100.
   * @returns An object with the red, green, and blue components of the color.
   * @throws {RangeError} If any of the color components is out of range.
   */
  static hslToRgb(
    h: number,
    s: number,
    l: number,
  ): { r: number; g: number; b: number } {
    if (h < 0 || h > 360) {
      throw new RangeError("The hue must be between 0 and 360.");
    }
    if (s < 0 || s > 100) {
      throw new RangeError("The saturation must be between 0 and 100.");
    }
    if (l < 0 || l > 100) {
      throw new RangeError("The lightness must be between 0 and 100.");
    }
    const hue = h / 360;
    const saturation = s / 100;
    const lightness = l / 100;
    const hueToRgb = (t1: number, t2: number, hue: number) => {
      if (hue < 0) {
        hue += 1;
      }
      if (hue > 1) {
        hue -= 1;
      }
      if (6 * hue < 1) {
        return t1 + (t2 - t1) * 6 * hue;
      }
      if (2 * hue < 1) {
        return t2;
      }
      if (3 * hue < 2) {
        return t1 + (t2 - t1) * (2 / 3 - hue) * 6;
      }
      return t1;
    };
    const t2 =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const t1 = 2 * lightness - t2;
    const red = hueToRgb(t1, t2, hue + 1 / 3) * 255;
    const green = hueToRgb(t1, t2, hue) * 255;
    const blue = hueToRgb(t1, t2, hue - 1 / 3) * 255;
    return { r: Math.round(red), g: Math.round(green), b: Math.round(blue) };
  }
}
