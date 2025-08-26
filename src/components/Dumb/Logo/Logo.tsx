import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  imageStyles?: string;
};
export default function Logo({ imageStyles, ...rest }: Props) {
  return (
    <Image
      src={"/assets/logo/logo.png"}
      alt="guitar loop god logo"
      height={1000}
      width={1000}
      className={cn("w-full h-[2rem]", imageStyles)}
      {...rest}
    />
  );
}
