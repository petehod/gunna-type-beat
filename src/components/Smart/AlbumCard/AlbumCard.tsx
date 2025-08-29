import { Album } from "@/validators/album.validator";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import FirebaseImage from "@/components/Dumb/Image/FirebaseImage";
import CText from "@/components/Dumb/Text/CText";
import { useAlbumArtists } from "@/hooks/useArtists";
import { Skeleton } from "@/components/ui/skeleton";

export default function AlbumCard({ album }: { album: Album }) {
  const { artists, isLoading } = useAlbumArtists(album.artistIds);
  return (
    <Link
      href={`/albums/${album.id}`}
      key={album.id}
      className="hover:scale-102 hover:opacity-80 transition-all duration-300"
    >
      <Card className="w-auto flex items-center">
        <CardContent className="w-full flex flex-col  items-center">
          <FirebaseImage
            className="rounded h-[200px] w-[full] object-cover"
            filePath={album.artworkPath}
            alt="alt"
          />
          <CardTitle className="text-2xl text-center mt-4 truncate w-full">
            {album.title}
          </CardTitle>
          {isLoading ? (
            <Skeleton />
          ) : (
            <CText classStyles="text-center">{artists?.join(", ")}</CText>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
