import { AlbumService } from "@/services/firebase/albums";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const useAlbum = (id: string) => {
  const {
    data: album,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: [id],
    queryFn: () => AlbumService.getAlbum(id),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
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
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });

  return { albums, isLoading, isError };
};
