"use server";

import { AlbumService } from "@/services/firebase/albums";

export const getAlbums = async (docLimit: number = 10) => {
  return AlbumService.getAlbums(docLimit);
};
