/**
 * Font utility classes for Rubik font
 * 
 * This file provides utility classes for using different font weights
 * throughout the application. Import these classes and apply them to
 * your components for consistent typography.
 */

export const fontWeight = {
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
  extrabold: "font-extrabold", // 800
  black: "font-black", // 900
};

export const fontSize = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

/**
 * Combines font weight and size classes
 * @param weight - Font weight from fontWeight object
 * @param size - Font size from fontSize object
 * @returns Combined class string
 */
export const combineFont = (weight: string, size: string): string => {
  return `${weight} ${size}`;
}; 