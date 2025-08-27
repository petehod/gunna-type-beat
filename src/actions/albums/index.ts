"use server";

import { AlbumService } from "@/services/firebase/albums";

export const getAlbums = async (docLimit: number = 10) => {
  return AlbumService.getAlbums(docLimit);
};

export const getAlbum = async (id: string) => {
  return AlbumService.getAlbum(id);
};
