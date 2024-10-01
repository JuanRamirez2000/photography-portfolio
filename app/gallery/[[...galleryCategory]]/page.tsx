import ImageGallery from "@/components/ImageGallery";
import cloudinary from "cloudinary";
import { ResourceApiResponse } from "cloudinary";
import { type Photo } from "react-photo-album";

export default async function Page({
  params,
}: {
  params: { galleryCategory: string };
}) {
  const { resources: images }: { resources: ResourceApiResponse["resources"] } =
    !params.galleryCategory
      ? await cloudinary.v2.api.resources({
          resource_type: "image",
          prefix: "Juan/",
          type: "upload",
          max_results: 50,
        })
      : await cloudinary.v2.api.resources_by_tag(params.galleryCategory, {
          resource_type: "image",
        });

  const photos = images.map((image): Photo => {
    return {
      src: image.url,
      width: image.width,
      height: image.height,
      key: image.public_id,
    };
  });

  return (
    <main className="w-full max-w-full h-fit grow p-2 sm:p-8">
      <ImageGallery photos={photos} />
    </main>
  );
}
