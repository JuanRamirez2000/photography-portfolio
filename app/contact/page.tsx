import Image from "next/image";
import Link from "next/link";

const ME_PFP = "";

export default function Contact() {
  return (
    <main className="flex flex-col-reverse sm:flex-row items-center justify-evenly grow">
      <section className="flex flex-col gap-2 bg-primary text-primary-content p-4 rounded-lg w-full  sm:w-1/2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Let&apos;s get in touch
        </h1>
        <div>
          <p className="text-lg">This is what I shoot</p>
          <ul className="list-disc list-inside">
            <li>Portraits</li>
            <li>Grad photos</li>
            <li>Boudoir</li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Stuff I am open to</p>
          <ul className="list-disc list-inside">
            <li>Automotive</li>
            <li>Products</li>
            <li>Weddings</li>
          </ul>
        </div>
        <div>
          <Link
            href={"https://www.instagram.com/juan_r_photos/"}
            className="btn from-pink-400 to-orange-400 bg-gradient-to-br text-slate-50 font-semibold rounded-lg"
          >
            Send me a message :)
          </Link>
        </div>
      </section>
      <section className="w-full sm:w-1/2 flex justify-center">
        <div className="min-w-64 h-64 md:w-full md:h-96 lg:h-[46rem] relative max-w-screen-md">
          <Image
            src={
              "https://res.cloudinary.com/dilgwefw6/image/upload/v1727467428/Juan/ev3qvz5rbgrc29t8xngz.jpg"
            }
            alt="A photo of me in a pumpkin field"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
