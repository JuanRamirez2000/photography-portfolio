import { Bars3Icon } from "@heroicons/react/24/outline";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <section className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className="size-7" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Links</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Juan Photography</a>
      </section>
      <section className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Links</a>
          </li>
        </ul>
      </section>
      <section className="navbar-end">
        <ThemeSwitcher />
      </section>
    </nav>
  );
}
