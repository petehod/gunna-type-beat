import CText from "@/components/Dumb/Text/CText";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getAlbums } from "@/actions/albums";
import FirebaseImage from "@/components/Dumb/Image/FirebaseImage";

export default async function Albums() {
  const albumsRes = await getAlbums();
  if (!albumsRes.success) return <div>Error</div>;
  const albums = albumsRes.value;

  return (
    <div className="h-full items-center justify-center flex mx-auto max-w-6xl py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {albums.map((album) => (
          <Link
            href={`/albums/${album.id}`}
            key={album.id}
            className="hover:scale-102 hover:opacity-80 transition-all duration-300"
          >
            <Card className="w-auto flex items-center">
              <CardContent>
                <FirebaseImage
                  className="rounded"
                  filePath={album.artworkPath ?? ""}
                  alt="alt"
                />
                <CardTitle className="text-2xl text-center mt-4">
                  {album.title}
                </CardTitle>
                <CText classStyles="text-center">{album.artistIds}</CText>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
