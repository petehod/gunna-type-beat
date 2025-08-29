import { Suspense } from "react";
import SongsTable from "./SongsTable";
import { useGetSongsByIds } from "@/hooks/useSongs";
import { Skeleton } from "@/components/ui/skeleton";

export default function SongsTableContainer({
  songIds,
}: {
  songIds: string[];
}) {
  const { songs } = useGetSongsByIds(songIds);
  return (
    <Suspense fallback={<Skeleton />}>
      <SongsTable songs={songs} />
    </Suspense>
  );
}
