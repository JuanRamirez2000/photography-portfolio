"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="flex flex-row w-full h-16 sticky px-4 sm:px-12 items-center mb-6  sm:mt-6 sm:mb-12">
      <p className="text-md md:text-2xl font-semibold grow">
        Juan Ramirez - Photography
      </p>
      <button className="sm:hidden">
        <Bars3Icon className="size-8" onClick={handleToggle} />
      </button>
      <ul className="hidden relative sm:flex flex-row gap-4 text-lg ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/gallery"}>Gallery</Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
