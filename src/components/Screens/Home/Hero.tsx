import CText from "@/components/Dumb/Text/CText";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl min-h-[600px] flex items-center gap-12">
      <div className="flex flex-col basis-1/2">
        <CText weight="bold" classStyles="mb-4">
          GUNNA TYPE BEAT
        </CText>
        <CText as="h1" size="4xl" classStyles="text-5xl mb-6">
          Learn the Secrets Behind Your Favorite Artist&apos;s Hit Songs
        </CText>
        <CText as="p" size="lg">
          Stop guessing. Start stealing REAL data from REAL songs
        </CText>
      </div>
      <div className="basis-1/2 ">
        <Image
          src={"/assets/images/gunna.jpg"}
          alt="Gunna wearing a leather jacket"
          height={1000}
          width={1000}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
