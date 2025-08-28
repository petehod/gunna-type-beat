import { CRUDService } from "../crud.db";
import { ChordProgressionSchema } from "@/validators/chordProgression.validator";

export const ChordProgressionDB = {
  ...CRUDService({
    zodValidator: ChordProgressionSchema,
    collectionName: "chordProgressions",
  }),
};
