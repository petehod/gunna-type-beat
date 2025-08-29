import { chromaticKeys } from "./notesInKeys";
import { NumeralInfo } from "./numeralMappings";

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
