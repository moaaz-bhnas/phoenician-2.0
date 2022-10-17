import Image from "next/future/image";
import Link from "next/link";
import { memo, useState } from "react";
import Logo from "../../components/Logo";
import Sidebar from "./components/Sidebar";
import SidebarToggler from "./components/SidebarToggler";

type Props = {};

function Header({}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <h1 className="sr-only">Phoenician</h1>

      <nav className="flex justify-between" aria-label="Main">
        {/* Sidebar toggler button */}
        <div className="lg:hidden">
          <SidebarToggler setOpen={setSidebarOpen} />
        </div>

        {/* Sidebar panel */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

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
