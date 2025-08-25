import { cn } from "@/lib/utils";
import {
  CTextAs,
  CTextColors,
  CTextSize,
  CFontWeights,
  CFontFamily,
} from "@/types/text.types";
import {
  getDefaultTextStyles,
  getFontFamily,
  getFontWeights,
  getTextColor,
  getTextSize,
} from "@/utils/text.utils";

import { ReactNode } from "react";

export type CTextProps = {
  as?: CTextAs;
  classStyles?: string;
  color?: CTextColors;
  size?: CTextSize;
  weight?: CFontWeights;
  fontFamily?: CFontFamily;
  children: ReactNode;
};

export default function CText({
  children,
  as: As = "p",
  classStyles,
  color = "dark",
  fontFamily,
  size,
  weight,
}: CTextProps) {
  const defaultStyles = getDefaultTextStyles(As);

  const textColor = getTextColor(color);

  const textSize = getTextSize(size);

  const fontWeight = getFontWeights(weight);

  const fontFamilyStyle = getFontFamily(fontFamily);

  const classStyle = cn(
    fontFamilyStyle,
    defaultStyles,
    textColor,
    fontWeight,
    textSize,
    classStyles
  );

  return <As className={classStyle}>{children}</As>;
}
