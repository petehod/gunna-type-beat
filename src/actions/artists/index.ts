"use server";

import { ArtistService } from "@/services/firebase/artists";

export const getArtists = async () => {
  return ArtistService.getArtists();
};
export const getArtist = async (id: string) => {
  return ArtistService.getArtist(id);
};

export const getAlbumArtists = async (ids: string[]) => {
  return ArtistService.getArtistAlbums(ids);
};
