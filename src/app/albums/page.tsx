import CText from "@/components/Dumb/Text/CText";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { testAlbums } from "./helpers";

export default function Albums() {
  return (
    <div className="h-full items-center justify-center flex mx-auto max-w-6xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {testAlbums.map((album) => (
          <Link href={`/albums/${album.id}`} key={album.id}>
            <Card className="w-auto flex items-center">
              <CardContent>
                <Image
                  src={album.photo}
                  alt="alt"
                  height={1000}
                  width={1000}
                  className="max-w-[15rem] rounded mb-4"
                />
                <CardTitle className="text-2xl text-center">
                  {album.name}
                </CardTitle>
                <CText classStyles="text-center">{album.artist}</CText>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
