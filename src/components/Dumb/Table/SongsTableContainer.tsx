import { getSongsByIds } from "@/actions/songs";
import SongsTable from "./SongsTable";

export default async function SongsTableContainer({
  songIds,
}: {
  songIds: string[];
}) {
  const songs = await getSongsByIds(songIds);
  return <SongsTable songs={songs} />;
}
