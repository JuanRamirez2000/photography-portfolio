import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faMountainSun,
  faGraduationCap,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
const COVER_IMAGE =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1727578833/Juan/nv5d9d4xv8g64j2h60ww.jpg";

const PORTAIT_IMAGE =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1713513529/Juan/lo53y87ao8dib0tlgkhx.jpg";

const LANDSCAPE_IMAGE =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1727578257/Juan/nkho4wnwktjp5u2pskm2.jpg";

const GRAD_IMAGE =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1727466868/Juan/qn23kuzo0fmpox21qbqn.jpg";

const FILM_IMAGE =
  "https://res.cloudinary.com/dilgwefw6/image/upload/v1727578257/Juan/pv2axu61rd8re5gwokkf.jpg";

export default async function Page() {
  return (
    <main className="relative w-full min-h-screen h-full flex flex-col items-center px-5 lg:px-10 lg:h-fit">
      <section className="w-full py-16 max-w-screen-xl h-fit">
        <div className="relative w-full h-72  lg:h-[48rem] shadow-2xl">
          <Image
            src={COVER_IMAGE}
            fill={true}
            alt=""
            className="object-cover object-top rounded-lg"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-around w-4/5 max-w-screen-3xl lg:flex-row h-96">
        <h1 className="text-5xl font-bold tracking-tight">What I shoot</h1>
        <ul className="text-xl flex flex-col gap-2">
          <li>
            <Link
              href="/gallery/portait"
              className="py-2 px-4 w-48 rounded-lg bg-cyan-300 inline-flex flex-row justify-between items-center hover:scale-110 duration-150"
            >
              Portraits
              <FontAwesomeIcon icon={faImagePortrait} className="size-8" />
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/landscape"
              className="py-2 px-4 w-48 rounded-lg bg-emerald-300 inline-flex flex-row justify-between items-center hover:scale-110 duration-150"
            >
              Landscapes
              <FontAwesomeIcon icon={faMountainSun} className="size-8" />
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/graduation"
              className="py-2 px-4 w-48 rounded-lg bg-yellow-300 inline-flex flex-row justify-between items-center hover:scale-110 duration-150"
            >
              Graduation
              <FontAwesomeIcon icon={faGraduationCap} className="size-8" />
            </Link>
          </li>
          <li>
            <Link
              href="/gallery/film"
              className="py-2 px-4 w-48 rounded-lg bg-orange-300 inline-flex flex-row justify-between items-center hover:scale-110 duration-150"
            >
              Film
              <FontAwesomeIcon icon={faFilm} className="size-8" />
            </Link>
          </li>
        </ul>
      </section>

      <section className="w-full h-full max-w-screen-3xl">
        <ul className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center size-full">
          <li className="relative w-full lg:w-3/4 h-64 lg:h-[36rem] cursor-pointer shadow-2xl shadow-cyan-300">
            <Link href="/gallery/portait">
              <Image
                src={PORTAIT_IMAGE}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-cyan-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-cyan-50">Portrait</p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-64 lg:h-[36rem] cursor-pointer shadow-2xl shadow-emerald-300">
            <Link href="/gallery/landscape">
              <Image
                src={LANDSCAPE_IMAGE}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-emerald-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-emerald-50">
                  Landscape
                </p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-64 lg:h-[36rem] cursor-pointer shadow-2xl shadow-yellow-300">
            <Link href="/gallery/graduation">
              <Image
                src={GRAD_IMAGE}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-yellow-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-yellow-50">
                  Graduation
                </p>
              </div>
            </Link>
          </li>
          <li className="relative w-full lg:w-3/4 h-64 lg:h-[36rem] cursor-pointer shadow-2xl shadow-orange-300">
            <Link href="/gallery/film">
              <Image
                src={FILM_IMAGE}
                fill={true}
                alt=""
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center duration-300 lg:opacity-0 lg:hover:opacity-100 rounded-lg bg-gradient-to-t from-orange-300/[99%] pb-20">
                <p className="text-3xl font-semibold text-orange-50">Film</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
