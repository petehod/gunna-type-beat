import Image, { ImageProps } from "next/image";
export default function Logo({ ...rest }: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      src={"/assets/logo/logo.png"}
      alt="guitar loop god logo"
      height={1000}
      width={1000}
      className="w-full h-[2rem]"
      {...rest}
    />
  );
}
