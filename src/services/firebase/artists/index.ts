import { ArtistDB } from "@/db/artists";

export const ArtistService = {
  getArtist: async (artistId: string) => ArtistDB.read(artistId),
  getArtists: async () => ArtistDB.readAll({ docLimit: 100 }),
  getArtistAlbums: async (ids: string[]) => {
    return await Promise.all(
      ids.flatMap(async (id) => {
        const artist = await ArtistService.getArtist(id);
        if (!artist.success) return [];
        return artist.value.name;
      })
    );
  },
};
