# Convert-kit

## ColorConverter

ColorConverter is a TypeScript library for converting colors between different formats, including RGB, Hexadecimal, and HSL.

### Installation

You can install the package using npm:

```sh
npm install @hridel/convert-kit
```

### Usage

#### Importing the Library

```typescript
import { ColorConverter } from '@hridel/convert-kit';
```

#### Converting RGB to Hex

```typescript
const hexColor = ColorConverter.rgbToHex(255, 0, 0);
console.log(hexColor); // Output: #ff0000
```

#### Converting Hex to RGB

```typescript
const rgbColor = ColorConverter.hexToRgb('#ff0000');
console.log(rgbColor); // Output: { r: 255, g: 0, b: 0 }
```

#### Converting RGB to HSL

```typescript
const hslColor = ColorConverter.rgbToHsl(255, 0, 0);
console.log(hslColor); // Output: { h: 0, s: 100, l: 50 }
```

#### Converting HSL to RGB

```typescript
const rgbColor = ColorConverter.hslToRgb(0, 100, 50);
console.log(rgbColor); // Output: { r: 255, g: 0, b: 0 }
```

### API

#### `ColorConverter.rgbToHex(r: number, g: number, b: number): string`

Converts RGB color values to a hexadecimal string.

- **r**: The red component of the color, an integer between 0 and 255.
- **g**: The green component of the color, an integer between 0 and 255.
- **b**: The blue component of the color, an integer between 0 and 255.

#### `ColorConverter.hexToRgb(hex: string): { r: number; g: number; b: number }`

Converts a hexadecimal string to RGB color values.

- **hex**: The hexadecimal string to convert.

#### `ColorConverter.rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number }`

Converts RGB color values to the HSL format.

- **r**: The red component of the color, an integer between 0 and 255.
- **g**: The green component of the color, an integer between 0 and 255.
- **b**: The blue component of the color, an integer between 0 and 255.

#### `ColorConverter.hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number }`

Converts HSL color values to the RGB format.

- **h**: The hue of the color, a number between 0 and 360.
- **s**: The saturation of the color, a number between 0 and 100.
- **l**: The lightness of the color, a number between 0 and 100.

### License

This project is licensed under the Apache License 2.0.