import CldImageWrapper from "@/components/CldImageWrapper";
import { ResourceApiResponse } from "cloudinary";
import cloudinary from "cloudinary";
import Image from "next/image";
import Link from "next/link";

const TRISH_PUBLIC_ID =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1714609847/Juan/pdj7avxpyxdhihrunaix.jpg";
const TOM_PUBLIC_ID =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1714609619/Juan/vwyfvtisatknwrn2dxaj.jpg";
const HEIDI_PUBLIC_ID =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1713513529/Juan/rzjkuwyt1cdin1cm7lm1.jpg";
const EM_YEU_PUBLIC_ID =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1714609748/Juan/feogbtaausrsb8kd1xed.jpg";

export default async function Page() {
  return (
    <main className="w-screen grow flex flex-col items-center justify-center">
      <section className="size-full flex flex-col sm:flex-row items-center gap-8">
        <div className="relative w-1/4 aspect-[3/4]">
          <Image src={EM_YEU_PUBLIC_ID} alt="Tina" fill />
        </div>
        <div className="relative w-1/4 aspect-[3/4]">
          <Image src={TRISH_PUBLIC_ID} alt="Trisher" fill />
        </div>
        <div className="relative w-1/4 aspect-[3/4]">
          <Image src={TOM_PUBLIC_ID} alt="Tom" fill />
        </div>
        <div className="relative w-1/4 aspect-[3/4]">
          <Image src={HEIDI_PUBLIC_ID} alt="Heidi" fill />
        </div>
      </section>
    </main>
  );
}
