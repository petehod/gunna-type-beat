"use client";
import { useEffect, useState } from "react";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { StorageService } from "@/services/firebase/storage.service";
import { cn } from "@/lib/utils";

export type FirebaseImageProps = Partial<ImageProps> & {
  filePath: string;
  alt: string;
};

//TODO: standardize image sizing and loading component
const FirebaseImage: React.FC<FirebaseImageProps> = ({
  filePath,
  alt,
  className,
  ...rest
}) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runEffect = async () => {
      try {
        const url = await StorageService.getFileURL(filePath);
        setImageURL(url ?? null);
      } catch (err) {
        setError("Failed to load image");
      }
    };

    runEffect();
  }, [filePath]);

  if (error) return <p>{error}</p>;

  return imageURL ? (
    <Image
      alt={alt}
      height={300}
      width={300}
      src={imageURL}
      className={cn("object-fill", className)}
      {...rest}
    />
  ) : (
    <Skeleton className="h-[300px] w-full" />
  );
};

export default FirebaseImage;
