"use server";

import { SongsService } from "@/services/firebase/songs";

export const getSongs = async () => {
  return SongsService.getSongs();
};

export const getSongsByIds = async (ids: string[]) => {
  return SongsService.getSongsByIds(ids);
};
