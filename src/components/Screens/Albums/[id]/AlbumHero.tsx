import CText from "@/components/Dumb/Text/CText";
import FirebaseImage from "@/components/Dumb/Image/FirebaseImage";

type Props = {
  src: string;
  title: string;
  artists: string[];
};
export default function AlbumHero({ src, title, artists }: Props) {
  return (
    <section className="mb-12">
      <FirebaseImage
        className="rounded my-4 w-full md:w-[20rem] object-contain"
        filePath={src}
        alt="alt"
      />
      <CText as="h1">{title}</CText>
      <CText as="p" size="xl">
        {artists.join(", ")}
      </CText>
    </section>
  );
}
