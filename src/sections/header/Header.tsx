import Image from "next/future/image";
import Link from "next/link";
import { memo } from "react";
import Logo from "../../components/Logo";
import SidebarToggler from "./components/SidebarToggler";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <h1 className="sr-only">Phoenician</h1>

      <nav className="flex justify-between" aria-label="Main">
        {/* Sidebar toggler button */}
        <div className="lg:hidden">
          <SidebarToggler />
        </div>

        {/* Logo */}
        <Link href={"/"}>
          <a className="hover-opacity flex h-12 w-12">
            <Logo />
          </a>
        </Link>

        {/* Language */}
        <button type="button" className="hover-opacity px-2 font-semibold">
          العربية
        </button>
      </nav>
    </header>
  );
}

export default memo(Header);
