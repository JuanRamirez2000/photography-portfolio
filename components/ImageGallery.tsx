"use client";

import Image from "next/image";
import {
  MasonryPhotoAlbum,
  Photo,
  RenderImageContext,
  RenderImageProps,
} from "react-photo-album";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      className=""
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
      />
    </div>
  );
}

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  return (
    <MasonryPhotoAlbum
      photos={photos}
      render={{ image: renderNextImage }}
      defaultContainerWidth={1200}
      spacing={10}
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
  );
}
