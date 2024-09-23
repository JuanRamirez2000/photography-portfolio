"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MasonryPhotoAlbum,
  Photo,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Counter } from "yet-another-react-lightbox/plugins";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      className="relative"
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className="hover:scale-105 duration-150 ease-in rounded-sm"
      />
    </div>
  );
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number>(-1);

  return (
    <section className="w-[90%]">
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Counter]}
      />
      <MasonryPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        spacing={30}
        onClick={({ index: current }) => setIndex(current)}
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          if (containerWidth < 1200) return 4;
          if (containerWidth < 2000) return 5;
          return 6;
        }}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      />
    </section>
  );
}
