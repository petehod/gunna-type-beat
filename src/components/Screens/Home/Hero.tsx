import CText from "@/components/Dumb/Text/CText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto max-w-6xl min-h-[600px] flex flex-col lg:flex-row items-center gap-12">
      <div className="flex flex-col basis-1/2">
        <CText as="h1" size="4xl" classStyles="text-5xl mb-6">
          Learn the Secrets Behind Your Favorite Artist&apos;s{" "}
          <span className="underline">Hit</span> Songs
        </CText>
        <CText as="p" size="lg">
          Stop guessing. Start stealing REAL data from REAL songs
        </CText>
        <Button className="mt-8" variant={"default"} asChild>
          <Link href={"/albums"}>Go to Albums</Link>
        </Button>
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
