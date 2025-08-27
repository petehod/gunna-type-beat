import { chromaticKeys } from "./notesInKeys.js";
import { NumeralInfo } from "./numeralMappings.js";

export function getChromaticChords(
  number: NumeralInfo,
  keyName: string
): string {
  const keyObject = chromaticKeys.find((k) => k.key === keyName);

  if (!keyObject) return "";

  const chordsInKey = keyObject.notesInKey;

  const progression = chordsInKey[number.index];

  return `${progression}${number.chordSuffix}`;
}
