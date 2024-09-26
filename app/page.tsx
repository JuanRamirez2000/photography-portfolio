import Link from "next/link";

export default async function Page() {
  return (
    <main className="w-screen grow flex flex-col lg:flex-row items-center justify-around p-6">
      <section className="flex flex-col gap-4 text-center">
        <p className="text-lg">Let me capture your moments</p>
        <Link href={""} className="btn btn-primary">
          Chat with me
        </Link>
      </section>
      <section className="w-1/2 h-full"></section>
    </main>
  );
}
