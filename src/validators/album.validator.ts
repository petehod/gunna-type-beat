import { z } from "zod";

export const AlbumSchema = z.object({
  id: z.string(),
  title: z.string(),
  artistIds: z.array(z.string()),
  artworkPath: z.string(),
  artworkURL: z.string().optional(),
  songIds: z.array(z.string())
});

export type Album = z.infer<typeof AlbumSchema>;
