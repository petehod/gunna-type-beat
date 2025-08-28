import { ChordProgressionDB } from "@/db/chord-progression";
import { createError, createSuccess } from "@/utils/result.utils";

export const ChordProgressionService = {
  getProgressionsByIds: async (ids: string[]) => {
    const progressions = await Promise.all(
      ids.map(async (id) => {
        const progression = await ChordProgressionDB.read(id);
        if (!progression.success) return null;
        return progression.value;
      })
    );

    const filteredProgressions = progressions.filter(
      (progression) => progression != null
    );
    if (!filteredProgressions.length) {
      return createError("No progressions found");
    }

    return createSuccess(filteredProgressions);
  },
};
