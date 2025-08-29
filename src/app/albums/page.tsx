"use client";

import AlbumCard from "@/components/Smart/AlbumCard/AlbumCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useAlbums } from "@/hooks/useAlbums";
import { Suspense } from "react";

export default function Albums() {
  const { albums } = useAlbums();

  return (
    <div className="h-full items-center justify-center flex mx-auto max-w-6xl py-12">
      <Suspense fallback={<Skeleton className="min-h-screen w-full" />}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {albums?.success &&
            albums.value.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
        </div>
      </Suspense>
    </div>
  );
}
