import { z } from "zod";
import { ChordProgressionSchema } from "./chordProgression.validator";

export const SongSchema = z.object({
  id: z.string(),
  tempo: z.string(),
  key: z.string(),
  name: z.string(),
  youtubeURL: z.string(),
  artistIds: z.array(z.string()),
  chords: z.string(), // Chords separated by comma e.g. A#-,C#-
  progressionIds: z.array(z.string()),
  albumId: z.string()
});

export type Song = z.infer<typeof SongSchema>;
