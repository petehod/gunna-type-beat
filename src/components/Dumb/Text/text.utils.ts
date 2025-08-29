import {
  CTextAs,
  CTextColors,
  CTextSize,
  CFontWeights,
  CFontFamily,
} from "./text.types";

export function getDefaultTextStyles(as: CTextAs) {
  let styles;
  switch (as) {
    case "h1":
      styles = "text-4xl font-bold mb-2";
      break;
    case "h2":
      styles = "text-3xl font-semibold";
      break;
    case "h3":
      styles = "text-2xl font-medium";
      break;
    case "h4":
      styles = "text-xl font-medium";
      break;
    case "h5":
      styles = "text-lg font-medium";
      break;
    case "h6":
      styles = "text-md font-medium";
      break;
    case "p":
      styles = "font-regular ";
      break;
  }

  return styles;
}

export function getTextColor(color: CTextColors) {
  let textColor;
  switch (color) {
    case "danger":
      textColor = "text-red-500";
      break;
    case "dark":
      textColor = "text-dark";
      break;
    case "dark2":
      textColor = "text-dark2";
      break;
    case "white":
      textColor = "text-white";
      break;
    case "primary":
      textColor = "text-primary";
      break;
    case "secondary":
      textColor = "text-secondary";
      break;
    case "light":
      textColor = "text-light";
      break;
    case "medium":
      textColor = "text-medium";
      break;
  }
  return textColor;
}

export function getTextSize(size?: CTextSize) {
  if (!size) return;

  return `text-${size}`;
}

export function getFontWeights(weight?: CFontWeights) {
  if (!weight) return;
  if (weight === "black") return "font-[1000]";
  return `font-${weight}`;
}

export function getFontFamily(family?: CFontFamily) {
  let fontFamily;
  switch (family) {
    case "Helvetica":
      fontFamily = "font-helvetica";
      break;
    case "Asap Condensed":
      fontFamily = "font-asap";
      break;
    default:
      fontFamily = "font-helvetica";
      break;
  }
  return fontFamily;
}
