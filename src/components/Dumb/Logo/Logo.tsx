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
      height={400}
      width={400}
      className={cn("w-[12rem] h-[2rem] object-cover", imageStyles)}
      {...rest}
    />
  );
}
