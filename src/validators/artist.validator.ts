import { z } from "zod";

export const ArtistSchema = z.object({
  id: z.string(),
  name: z.string(),
  imagePath: z.string(), // Points to location in Cloud Storage
  imageURL: z.string().optional(),
  albumIds: z.array(z.string()),
  songIds: z.array(z.string())
});

export type Artist = z.infer<typeof ArtistSchema>;
