import { DAY, HOUR } from "@/constants/time.constants";
import { SongsService } from "@/services/firebase/songs";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetSongsByIds = (songIds: string[]) => {
  const {
    data: songs,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ["songs", { songIds }],
    queryFn: () => SongsService.getSongsByIds(songIds!),
    staleTime: HOUR,
    gcTime: DAY,
  });

  return { songs, isLoading, isError };
};
