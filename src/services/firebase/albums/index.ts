import { AlbumDB } from "@/db/albums";

export const AlbumService = {
  getAlbums: async (docLimit: number = 10) => {
    return await AlbumDB.readAll({ docLimit });
  },
};
