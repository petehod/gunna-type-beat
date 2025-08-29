import { DAY } from "@/constants/time.constants";
import { ChordProgressionService } from "@/services/firebase/chord-progressions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useChordProgressionByIds = (ids: string[]) => {
  const {
    data: chordProgressions,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ["ids", { ids }],
    queryFn: () => ChordProgressionService.getProgressionsByIds(ids),
    staleTime: DAY,
    gcTime: DAY,
  });

  return { chordProgressions, isLoading, isError };
};
