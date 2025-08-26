import { z } from "zod";
import { v4 } from "uuid";
/**
 * This is all the data i need to store for a chord progression
 * `generateProgressionsInAllKeys` gets called on the frontend
 */
export const ChordProgressionSchema = z.object({
  id: z.string(),
  numerals: z.string(), // numerals should be formatted with a - between numerals e.g. I-IV-V
  is_major: z.boolean()
});

export type ChordProgression = z.infer<typeof ChordProgressionSchema>;

export const ProgressionInAllKeysSchema = z.object({
  key: z.string(),
  numerals: z.array(z.string())
});

export type ProgressionInAllKeys = z.infer<typeof ProgressionInAllKeysSchema>;
