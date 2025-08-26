import CText from "@/components/Dumb/Text/CText";

import Image from "next/image";

type Props = {
  src: string;
  title: string;
  artists: string[];
};
export default function AlbumHero({ src, title, artists }: Props) {
  return (
    <section className="mb-12">
      <Image
        src={src}
        alt={`Album artwork for ${title}`}
        height={1000}
        width={1000}
        className="h-[20rem] w-full lg:w-[20rem] object-contain rounded"
      />
      <CText as="h1">{title}</CText>
      <CText as="p" size="xl">
        {artists.join(", ")}
      </CText>
    </section>
  );
}
