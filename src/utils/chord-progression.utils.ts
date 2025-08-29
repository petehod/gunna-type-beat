export function formatChordProgression(numerals: string) {
  return numerals.split(",").join(" | ");
}

export const formatMajorMinor = (isMajor: boolean) =>
  isMajor ? "Major" : "Minor";
