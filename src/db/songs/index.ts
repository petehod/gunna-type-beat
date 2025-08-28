import { CRUDService } from "../crud.db";
import { SongSchema } from "@/validators/song.validator";

export const SongsDB = {
  ...CRUDService({
    zodValidator: SongSchema,
    collectionName: "songs",
  }),
};
