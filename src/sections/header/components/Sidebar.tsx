import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/future/image";
import Link from "next/link";
import { Dispatch, Fragment, memo, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const products = [
  { name: "Product 1", handle: "product-1", src: "/images/product-1.webp" },
  { name: "Product 2", handle: "product-2", src: "/images/product-2.webp" },
  { name: "Product 3", handle: "product-3", src: "/images/product-3.webp" },
  { name: "Product 4", handle: "product-4", src: "/images/product-4.webp" },
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
              <button className="hover-opacity flex h-12 w-12 self-end">
                <XMarkIcon className="m-auto h-6 w-6" />
              </button>

              <div className="px-4">
                {/* Products grid */}
                <ul className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <li key={product.name}>
                      <Link href={`/products/${product.handle}`}>
                        <a className="space-y-1 text-sm">
                          <div className="aspect-square">
                            <Image
                              className="h-full w-full rounded-md object-cover"
                              src={product.src}
                              alt=""
                              width={0}
                              height={0}
                              sizes="160px"
                            />
                          </div>

                          <p className="font-semibold">{product.name}</p>
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
