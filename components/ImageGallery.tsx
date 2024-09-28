"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ColumnsPhotoAlbum,
  MasonryPhotoAlbum,
  RowsPhotoAlbum,
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
    <>
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Counter]}
      />
      <ColumnsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        spacing={15}
        onClick={({ index: current }) => setIndex(current)}
        columns={(containerWidth) => {
          if (containerWidth < 1200) return 2;
          if (containerWidth < 1800) return 3;
          if (containerWidth < 2000) return 4;
          if (containerWidth < 2400) return 5;
          return 8;
        }}
      />
    </>
  );
}
