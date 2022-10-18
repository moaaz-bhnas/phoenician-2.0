import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/future/image";
import Link from "next/link";
import { Dispatch, Fragment, memo, SetStateAction } from "react";
import ProductsGrid from "./ProductsGrid";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const links = [
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

function Sidebar({ open, setOpen }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col space-y-2 overflow-y-auto bg-white pb-12 shadow-xl">
              {/* Close button */}
              <button
                className="hover-opacity flex h-12 w-12 self-end"
                onClick={() => setOpen(false)}
              >
                <XMarkIcon className="m-auto h-6 w-6" />
              </button>

              <div className="px-4">
                {/* Products grid */}
                <ProductsGrid />

                <hr className="my-4" />

                {/* All products button */}
                <Link href="/products">
                  <a className="block rounded bg-blue-800 p-2 text-center text-white transition hover:bg-blue-600 focus:bg-blue-600">
                    All products
                  </a>
                </Link>

                <hr className="my-4" />

                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        <a className="-mx-2 flex rounded p-2 transition hover:bg-blue-200">
                          <Image
                            src={link.icon}
                            alt=""
                            width={24}
                            height={24}
                          />
                          <span className="ml-2 font-semibold">
                            {link.label}
                          </span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default memo(Sidebar);
