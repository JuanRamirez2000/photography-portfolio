import ImageGallery from "@/components/ImageGallery";
import cloudinary from "cloudinary";
import { ResourceApiResponse } from "cloudinary";
import { type Photo } from "react-photo-album";

export default async function Page() {
  const { resources: images }: { resources: ResourceApiResponse["resources"] } =
    await cloudinary.v2.api.resources({
      resource_type: "image",
      prefix: "Juan/",
      type: "upload",
      max_results: 50,
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
    <main className="p-6 flex flex-col overflow-x-hidden">
      <ImageGallery photos={photos} />
    </main>
  );
}
