import { getProgressionsByIds } from "@/actions/chord-progressions";
import useSWR from "swr";

export const useChordProgressionByIds = (ids: string[]) => {
  const { data } = useSWR(ids, getProgressionsByIds);

  return data;
};
