import { Bars3Icon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-screen flex items-center p-6">
      <nav className="navbar bg-primary text-primary-content rounded-2xl pr-6 ">
        <section className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <Bars3Icon className="size-7" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-primary text-primary-content rounded-box z-[1] mt-3 w-44 p-2 shadow gap-2"
            >
              <li>
                <Link className="btn" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="btn" href={"/gallery"}>
                  Gallery
                </Link>
              </li>
              <li>
                <a className="btn">Links</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" href={"/"}>
            Juan Photography
          </Link>
        </section>
        <section className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl gap-2">
            <li>
              <Link className="btn" href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="btn" href={"/gallery"}>
                Gallery
              </Link>
            </li>
            <li>
              <a className="btn">Links</a>
            </li>
          </ul>
        </section>
        <section className="navbar-end">
          <ThemeSwitcher />
        </section>
      </nav>
    </div>
  );
}
