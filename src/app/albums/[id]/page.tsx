"use client";
import BackButton from "@/components/Dumb/Button/BackButton";
import SongsTableContainer from "@/components/Dumb/Table/SongsTableContainer";
import AlbumHero from "@/components/Screens/Albums/[id]/AlbumHero";
import { Skeleton } from "@/components/ui/skeleton";
import { useAlbum } from "@/hooks/useAlbums";
import { useAlbumArtists } from "@/hooks/useArtists";
import { Suspense, use } from "react";

// export const revalidate = 3600;
// export const dynamic = "force-dynamic";

export default function IndividualAlbum({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In a client component, you should receive `params` as a prop (as in this file), not via a hook or await.
  const { id } = use(params);
  const { album, isLoading: isAlbumLoading } = useAlbum(id);

  const { artists, isLoading: isAlbumArtistsLoading } = useAlbumArtists(
    album?.success ? album.value.artistIds : undefined
  );

  return (
    <div className="mx-auto max-w-6xl min-h-screen">
      <div>
        <BackButton />
      </div>

      <Suspense fallback={<Skeleton className="w-full md:w-[20rem] my-4" />}>
        {album.success && (
          <>
            <AlbumHero
              artists={artists}
              src={album.value.artworkPath ?? ""}
              title={album.value.title}
            />
            <SongsTableContainer songIds={album.value.songIds} />
          </>
        )}
      </Suspense>
    </div>
  );
}
