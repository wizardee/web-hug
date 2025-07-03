export type RGB = {
    [key in RGBType]: number;
};
export type RGBType = 'r' | 'g' | 'b';
export declare function hexToRGB(hex: string): RGB;
export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function linearInterpolationColor(startRGB: RGB, endRGB: RGB, factor: number): string;
export declare function interpolateColors(startHex: string, endHex: string, steps: number): string[];
