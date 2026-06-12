/**
 * Type declarations for external modules without TypeScript definitions
 */

declare module 'colorjs.io' {
  export default class Color {
    constructor(colorString: string);
    constructor(colorSpace: string, coords: number[]);
    to(colorSpace: string): Color;
    coords: number[];
    // Convention: the INSTANCE is the background, the argument is the text.
    contrast(text: Color, algorithm: string): number;
    deltaE(other: Color, algorithm: string): number;
    toString(options?: { format?: string }): string;
  }
}
