import { getAlbum } from "@/actions/albums";
import { getAlbumArtists } from "@/actions/artists";
import BackButton from "@/components/Dumb/Button/BackButton";
import SongsTableContainer from "@/components/Dumb/Table/SongsTableContainer";
import AlbumHero from "@/components/Screens/Albums/[id]/AlbumHero";

// export const revalidate = 3600;
// export const dynamic = "force-dynamic";

export default async function IndividualAlbum({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const albumRes = await getAlbum(id);
  if (!albumRes.success) return <div>Error</div>;
  const album = albumRes.value;

  const artists = await getAlbumArtists(album.artistIds);
  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <BackButton />
      </div>
      <AlbumHero
        artists={artists}
        src={album.artworkPath ?? ""}
        title={album.title}
      />

      <SongsTableContainer songIds={album.songIds} />
    </div>
  );
}
