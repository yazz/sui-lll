const UNITS = 4;

export const C = {
  LIGHT: "light",
  DARK: "dark",
};

function spacing(units) {
  return units * UNITS;
}

const sharedStyles = {
  spacing,
};

export default sharedStyles;
