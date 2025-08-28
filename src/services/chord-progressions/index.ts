import { getChromaticChords } from "./returnChromaticChords.js";
import { KeyNames, majorKeys, minorKeys } from "./notesInKeys.js";
import { getNumeralInfo } from "./numeralMappings.js";
import {
  ChordProgression,
  ProgressionInAllKeys,
} from "@/validators/chordProgression.validator.js";

/**
 *  Returns the chord progression in all keys based upon `numerals` and `is_major`
 */
export const generateProgressionsInAllKeys = (
  enteredChordProgression: ChordProgression
): ProgressionInAllKeys[] => {
  const splitNumerals = enteredChordProgression.numerals
    .replace(/\s+/g, "") // Remove any whitespace
    .split("-");

  const chordInfos = splitNumerals
    .map((numeral) => getNumeralInfo(enteredChordProgression.is_major, numeral))
    .filter((info): info is NonNullable<typeof info> => info != null);

  const keysToUse = enteredChordProgression.is_major ? majorKeys : minorKeys;

  return keysToUse.map((keyObject) => {
    const { key, notesInKey } = keyObject;
    const numerals = chordInfos.map((info) => {
      if (!info.is_diatonic) return getChromaticChords(info, key);

      const note = notesInKey[info.index - 1];
      return `${note}${info.chordSuffix}`;
    });
    return { key, numerals };
  });
};

export const getProgressionInSpecificKey = (
  enteredChordProgression: ChordProgression,
  key: KeyNames
) => {
  const progressionInAllKeys = generateProgressionsInAllKeys(
    enteredChordProgression
  );
  return progressionInAllKeys.find((progression) => progression.key === key);
};
