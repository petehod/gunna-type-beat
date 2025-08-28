import { getAlbum } from "@/actions/albums";
import BackButton from "@/components/Dumb/Button/BackButton";
import SongsTable from "@/components/Dumb/Table/SongsTable";
import AlbumHero from "@/components/Screens/Albums/[id]/AlbumHero";

export const revalidate = 300;
export const dynamic = "force-dynamic";

export default async function IndividualAlbum({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const albumRes = await getAlbum(id);
  if (!albumRes.success) return <div>Error</div>;
  const album = albumRes.value;

  const artists = ["Gunna", "Roddy Rhicch"];
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

      <SongsTable />
    </div>
  );
}
