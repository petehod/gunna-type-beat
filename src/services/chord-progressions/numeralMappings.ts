/**
 * Interface that contains all data needed about a Numeral to calculate the chord progression
 */
export interface NumeralInfo {
  index: number;
  numeral: string;
  is_diatonic: boolean;
  chordSuffix: string;
}

export const majorNumeralMap: Record<string, NumeralInfo> = {
  I: { index: 1, numeral: "I", is_diatonic: true, chordSuffix: "" },
  ii: { index: 2, numeral: "ii", is_diatonic: true, chordSuffix: "-" },
  II: { index: 2, numeral: "II", is_diatonic: false, chordSuffix: "" },
  iii: { index: 3, numeral: "iii", is_diatonic: true, chordSuffix: "-" },
  III: { index: 4, numeral: "III", is_diatonic: false, chordSuffix: "" },
  "iii°": { index: 4, numeral: "iii°", is_diatonic: false, chordSuffix: "°" },
  IV: { index: 4, numeral: "IV", is_diatonic: true, chordSuffix: "" },
  iv: { index: 5, numeral: "iv", is_diatonic: false, chordSuffix: "-" },
  "iv°": { index: 6, numeral: "iv°", is_diatonic: false, chordSuffix: "°" },
  V: { index: 5, numeral: "V", is_diatonic: true, chordSuffix: "" },
  v: { index: 7, numeral: "v", is_diatonic: false, chordSuffix: "-" },
  vi: { index: 6, numeral: "vi", is_diatonic: true, chordSuffix: "-" },
  bVII: { index: 10, numeral: "bVII", is_diatonic: false, chordSuffix: "" },
  "vii°": { index: 7, numeral: "vii°", is_diatonic: true, chordSuffix: "°" },
  vii: { index: 10, numeral: "vii", is_diatonic: false, chordSuffix: "-" }
};

export const minorNumeralMap: Record<string, NumeralInfo> = {
  i: { index: 1, numeral: "i", is_diatonic: true, chordSuffix: "-" },
  "ii°": { index: 2, numeral: "ii°", is_diatonic: true, chordSuffix: "°" },
  bII: { index: 1, numeral: "bII", is_diatonic: false, chordSuffix: "" },
  bIII: { index: 3, numeral: "bIII", is_diatonic: true, chordSuffix: "" },
  III: { index: 3, numeral: "III", is_diatonic: false, chordSuffix: "" },
  iv: { index: 4, numeral: "iv", is_diatonic: true, chordSuffix: "-" },
  IV: { index: 5, numeral: "IV", is_diatonic: false, chordSuffix: "" },
  v: { index: 5, numeral: "v", is_diatonic: true, chordSuffix: "-" },
  V: { index: 7, numeral: "V", is_diatonic: false, chordSuffix: "" },
  "v°": { index: 7, numeral: "v°", is_diatonic: false, chordSuffix: "°" },
  bVI: { index: 6, numeral: "bVI", is_diatonic: true, chordSuffix: "" },
  "vi°": { index: 9, numeral: "vi°", is_diatonic: false, chordSuffix: "°" },
  bVII: { index: 7, numeral: "bVII", is_diatonic: true, chordSuffix: "" },
  bvii: { index: 10, numeral: "bvii", is_diatonic: false, chordSuffix: "-" },
  "vii°": { index: 11, numeral: "vii°", is_diatonic: false, chordSuffix: "°" },
  VII: { index: 11, numeral: "VII", is_diatonic: false, chordSuffix: "" }
};

export function getNumeralInfo(
  isMajor: boolean,
  numeral: string
): NumeralInfo | undefined {
  return isMajor ? majorNumeralMap[numeral] : minorNumeralMap[numeral];
}
