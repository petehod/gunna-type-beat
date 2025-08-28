import { getAlbums } from "@/actions/albums";
import AlbumCard from "@/components/Smart/AlbumCard/AlbumCard";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

export default async function Albums() {
  const albumsRes = await getAlbums();
  if (!albumsRes.success) return <div>Error</div>;
  const albums = albumsRes.value;

  return (
    <div className="h-full items-center justify-center flex mx-auto max-w-6xl py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
