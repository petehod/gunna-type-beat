import { z } from "zod";
import { UserSchema } from "../validators/user.validator";
import { ArtistSchema } from "../validators/artist.validator";
import { ChordProgressionSchema } from "../validators/chordProgression.validator";
import { SongSchema } from "../validators/song.validator";
import { AlbumSchema } from "../validators/album.validator";

export const FirebaseCollectionsSchema = z.enum([
  "users",
  "artists",
  "songs",
  "albums",
  "chordProgressions"
]);

export type FirebaseCollections = z.infer<typeof FirebaseCollectionsSchema>;

export const ValidFirebaseDocSchema = z.union([
  UserSchema,
  ArtistSchema,
  SongSchema,
  AlbumSchema,
  ChordProgressionSchema
]);

export type ValidFirebaseDoc = z.infer<typeof ValidFirebaseDocSchema>;
