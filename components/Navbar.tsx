import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar shadow-md rounded-lg w-screen px-6">
      <section className="navbar-start ">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className="size-7" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-44 p-2 shadow-lg gap-2"
          >
            <li>
              <Link className="btn" href={"/"}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <button tabIndex={1} className="btn">
                Gallery
              </button>
              <ul
                tabIndex={1}
                className="menu dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-44 p-2 shadow-lg gap-2"
              >
                <li>
                  <Link className="btn" href={"/gallery"}>
                    All pics
                  </Link>
                </li>
                <li>
                  <Link className="btn" href={"/gallery/portait"}>
                    Portaits
                  </Link>
                </li>
                <li>
                  <Link className="btn" href={"/gallery/landscape"}>
                    Landscapes
                  </Link>
                </li>
                <li>
                  <Link className="btn" href={"/gallery/graduation"}>
                    Graduation
                  </Link>
                </li>
                <li>
                  <Link className="btn" href={"/gallery/film"}>
                    Film
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="btn"
                href={"https://www.instagram.com/juan_r_photos/"}
                target="_blank"
              >
                Let&apos;s Chat
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-lg lg:text-xl" href={"/"}>
          Juan Photography
        </Link>
      </section>
      <section className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl gap-2">
          <li>
            <Link className="btn" href={"/"}>
              Home
            </Link>
          </li>
          <li className="dropdown">
            <button tabIndex={1} className="btn">
              Gallery
            </button>
            <ul
              tabIndex={1}
              className="menu dropdown-content bg-base-100 text-base-content rounded-box z-[1] mt-3 w-44 p-2 shadow-lg gap-2"
            >
              <li>
                <Link className="btn" href={"/gallery"}>
                  All pics
                </Link>
              </li>
              <li>
                <Link className="btn" href={"/gallery/portait"}>
                  Portaits
                </Link>
              </li>
              <li>
                <Link className="btn" href={"/gallery/landscape"}>
                  Landscapes
                </Link>
              </li>
              <li>
                <Link className="btn" href={"/gallery/graduation"}>
                  Graduation
                </Link>
              </li>
              <li>
                <Link className="btn" href={"/gallery/film"}>
                  Film
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="btn"
              href={"https://www.instagram.com/juan_r_photos/"}
              target="_blank"
            >
              Let&apos;s Chat
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}
