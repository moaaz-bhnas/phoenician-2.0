import Image from "next/future/image";
import { memo } from "react";
import SidebarToggler from "./components/SidebarToggler";

type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-red-400">
      <h1 className="sr-only">Phoenician</h1>

      {/* Sidebar toggler button */}
      <div className="lg:hidden">
        <SidebarToggler />
      </div>

      {/* Logo */}
      <Image
        className="w-5 h-5"
        src={"/images/logo.svg"}
        alt=""
        width={0}
        height={0}
      />
    </header>
  );
}

export default memo(Header);
