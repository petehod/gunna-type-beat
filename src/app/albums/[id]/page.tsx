import SongsTable from "@/components/Dumb/Table/SongsTable";
import CText from "@/components/Dumb/Text/CText";
import AlbumHero from "@/components/Screens/Albums/[id]/AlbumHero";
import { Button } from "@/components/ui/button";
import { Album } from "@/validators/album.validator";
import Image from "next/image";
import Link from "next/link";

export default function IndividualAlbum() {
  const album: Album = {
    artistIds: ["1234"],
    artworkPath: "",
    id: "1",
    songIds: [""],
    title: "Won of Wun",
    artworkURL: "/assets/images/gunna.jpg",
  };

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
        src={album.artworkURL ?? ""}
        title={album.title}
      />

      <SongsTable />
    </div>
  );
}
