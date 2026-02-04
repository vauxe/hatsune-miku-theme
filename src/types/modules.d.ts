/**
 * Type declarations for external modules without TypeScript definitions
 */

declare module 'colorjs.io' {
  export default class Color {
    constructor(colorString: string);
    constructor(colorSpace: string, coords: number[]);
    to(colorSpace: string): Color;
    coords: number[];
    contrast(background: Color, algorithm: string): number;
    deltaE(other: Color, algorithm: string): number;
    toString(options?: { format?: string }): string;
  }
}

declare module 'culori' {
  export function filterDeficiencyProt(severity: number): (color: string) => object;
  export function filterDeficiencyDeuter(severity: number): (color: string) => object;
  export function filterDeficiencyTrit(severity: number): (color: string) => object;
  export function formatHex(color: object): string | undefined;
  export function okhsl(color: string): { h: number; s: number; l: number };
}
