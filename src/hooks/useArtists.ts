import { ArtistService } from "@/services/firebase/artists";
import { useQuery } from "@tanstack/react-query";

export const useAlbumArtists = (artistIds?: string[]) => {
  const {
    data: artists,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [artistIds],
    queryFn: () => ArtistService.getArtistAlbums(artistIds!),
    enabled: !!artistIds,
  });

  return { artists, isLoading, isError };
};
