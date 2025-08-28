"use server";
import { ChordProgressionService } from "@/services/firebase/chord-progressions";

export const getProgressionsByIds = async (ids: string[]) => {
  return await ChordProgressionService.getProgressionsByIds(ids);
};
