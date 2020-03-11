//
// Resistor Color Duo
//

const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

const MAX_COLORS = 2;

export const decodedValue = (colors) => {
  const colorCode = colors
    .slice(0, MAX_COLORS)
    .reduce((total, color) => (total * 10) + (COLORS[color]), 0);

  return colorCode;
};
