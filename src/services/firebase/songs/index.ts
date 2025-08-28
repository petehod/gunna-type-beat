import { SongsDB } from "@/db/songs";

export const SongsService = {
  getSongs: async () => SongsDB.readAll({ docLimit: 100 }),
  getSongsByIds: async (ids: string[]) => {
    const results = await Promise.all(
      ids.map(async (id) => {
        const song = await SongsDB.read(id);
        if (!song.success) return null;
        return song.value;
      })
    );
    return results.filter(
      (song): song is NonNullable<typeof song> => song !== null
    );
  },
};
