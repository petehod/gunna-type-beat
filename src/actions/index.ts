"use server";

import { ArtistService } from "@/services/firebase/artists";

export const getArtist = async (artistId: string) =>
  ArtistService.getArtist(artistId);

export const getArtists = async () => ArtistService.getArtists();
