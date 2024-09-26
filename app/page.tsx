import Link from "next/link";

export default async function Page() {
  return (
    <main className="w-screen grow flex flex-col-reverse sm:flex-row items-center justify-around">
      <section className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold tracking-tighter">
          Juan&apos;s Photography
        </h1>

        <p className="text-lg">Let me capture your moments</p>
        <Link href={""} className="btn btn-primary">
          Book Now
        </Link>
      </section>
      <section className="w-1/2 h-full"></section>
    </main>
  );
}
