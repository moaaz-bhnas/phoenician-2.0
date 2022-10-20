import Link from "next/link";
import { memo, useState } from "react";
import Logo from "components/Logo";
import ProductsPopover from "sections/header/components/ProductsPopover";
import Sidebar from "sections/header/components/Sidebar";
import SidebarToggler from "sections/header/components/SidebarToggler";

type Props = {};

export interface NavigationLink {
  label: string;
  href: string;
  icon: string;
}

const navigationLinks = [
  {
    label: "Mission",
    href: "/mission",
    icon: "/images/nav-links/mission-colored-2.svg",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: "/images/nav-links/contact-colored-2.svg",
  },
];

function Header({}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="h-12">
      <h1 className="sr-only">Phoenician</h1>

      <nav className="flex justify-between border-b" aria-label="Main">
        {/* Sidebar toggler button */}
        <div className="-ml-3.5 lg:hidden">
          <SidebarToggler setOpen={setSidebarOpen} />
        </div>

        {/* Sidebar panel */}
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          navigationLinks={navigationLinks}
        />

        {/* Logo */}
        <Link href={"/"}>
          <a className="hover-opacity flex h-12 w-12 lg:-ml-2.5">
            <Logo />
          </a>
        </Link>

        <div className="ml-4 mr-auto hidden gap-4 lg:flex">
          <ProductsPopover />

          <span className="self-center text-gray-400">|</span>

          {/* Desktop navigation links */}
          <ul className="flex gap-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className="hover-opacity flex h-12 items-center text-sm font-medium">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language */}
        <button
          type="button"
          className="hover-opacity -mr-2 px-2 font-semibold"
        >
          العربية
        </button>
      </nav>
    </header>
  );
}

export default memo(Header);
