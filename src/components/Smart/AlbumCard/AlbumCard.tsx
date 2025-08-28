import { getAlbumArtists } from "@/actions/artists";
import { Album } from "@/validators/album.validator";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import FirebaseImage from "@/components/Dumb/Image/FirebaseImage";
import CText from "@/components/Dumb/Text/CText";

export default async function AlbumCard({ album }: { album: Album }) {
  const artists = await getAlbumArtists(album.artistIds);
  return (
    <Link
      href={`/albums/${album.id}`}
      key={album.id}
      className="hover:scale-102 hover:opacity-80 transition-all duration-300"
    >
      <Card className="w-auto flex items-center">
        <CardContent>
          <FirebaseImage
            className="rounded"
            filePath={album.artworkPath}
            alt="alt"
          />
          <CardTitle className="text-2xl text-center mt-4">
            {album.title}
          </CardTitle>
          <CText classStyles="text-center">{artists.join(", ")}</CText>
        </CardContent>
      </Card>
    </Link>
  );
}
