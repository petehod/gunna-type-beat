import { getAlbum } from "@/actions/albums";
import SongsTable from "@/components/Dumb/Table/SongsTable";
import AlbumHero from "@/components/Screens/Albums/[id]/AlbumHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <Button asChild variant={"outline"}>
          <Link href={"/albums"}>Back to Albums</Link>
        </Button>
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
