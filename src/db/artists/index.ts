import { CRUDService } from "../crud.db";
import { ArtistSchema } from "@/validators/artist.validator";

export const ArtistDB = {
  ...CRUDService({
    zodValidator: ArtistSchema,
    collectionName: "artists",
  }),
};
