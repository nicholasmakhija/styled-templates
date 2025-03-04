export const asRem = (
  targetPxValue: number,
  baseFontSize = 16
): string => `${targetPxValue / baseFontSize}rem`;