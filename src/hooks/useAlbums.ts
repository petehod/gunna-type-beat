import { HOUR, DAY } from "@/constants/time.constants";
import { AlbumService } from "@/services/firebase/albums";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useAlbum = (id: string) => {
  const {
    data: album,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ["id", { id }],
    queryFn: () => AlbumService.getAlbum(id),
    staleTime: HOUR,
    gcTime: DAY,
  });

  return { album, isLoading, isError };
};

export const useAlbums = () => {
  const {
    data: albums,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: ["albums"],
    queryFn: () => AlbumService.getAlbums(),
    staleTime: HOUR,
    gcTime: DAY,
  });

  return { albums, isLoading, isError };
};
