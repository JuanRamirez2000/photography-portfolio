import cloudinary from "cloudinary";
import { ResourceApiResponse } from "cloudinary";
import CldImageWrapper from "@/components/CldImageWrapper";
import ImageModal from "@/components/ImageModal";
import { MasonryPhotoAlbum } from "react-photo-album";

export default async function Page() {
  const { resources: images }: { resources: ResourceApiResponse["resources"] } =
    await cloudinary.v2.api.resources({
      resource_type: "image",
      prefix: "Juan/",
      type: "upload",
      max_results: 50,
    });

  return (
    <section className="w-full h-fit columns-2 md:columns-3 2xl:columns-4 p-12">
      {images.map((image) => {
        return (
          <div className="relative" key={image.public_id}>
            <CldImageWrapper
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              sizes="100vw"
              className="object-cover shadow-xl rounded-sm "
            />
            <ImageModal image={image} />
          </div>
        );
      })}
    </section>
  );
}
