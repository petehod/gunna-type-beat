import { CRUDService } from "../crud.db";
import { AlbumSchema } from "@/validators/album.validator";

export const AlbumDB = {
  ...CRUDService({ collectionName: "albums", zodValidator: AlbumSchema }),
};
