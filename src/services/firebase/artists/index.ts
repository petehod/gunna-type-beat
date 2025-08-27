import { ArtistDB } from "@/db/artists";

export const ArtistService = {
  getArtist: async (artistId: string) => ArtistDB.read(artistId),
  getArtists: async () => ArtistDB.readAll(),
};
