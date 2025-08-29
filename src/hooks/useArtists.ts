import { ArtistService } from "@/services/firebase/artists";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

export const useAlbumArtists = (artistIds?: string[]) => {
  const {
    data: artists,
    isLoading,
    isError,
  } = useSuspenseQuery({
    queryKey: [artistIds],
    queryFn: () => ArtistService.getArtistAlbums(artistIds!),
  });

  return { artists, isLoading, isError };
};
