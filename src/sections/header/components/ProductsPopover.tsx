import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment, memo } from "react";
import Container from "components/Container";
import classNames from "helper-functions/classNames";
import products from "data/products.json";
import Link from "next/link";
import ProductItem from "components/ProductItem";

type Props = {};

function ProductsPopover({}: Props) {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "flex h-12 items-center border-b-2 text-sm font-medium focus:border-blue-900 focus:text-blue-900 focus:outline-none",
              open
                ? "border-blue-900 text-blue-900 outline-none"
                : "border-transparent"
            )}
          >
            Products
            <ChevronDownIcon className="ml-1 w-4" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute inset-x-0 mt-0.5 bg-white">
              {({ close }) => (
                <>
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  />
                  <Container>
                    <div className="relative flex flex-col space-y-6">
                      <ul className="flex justify-between gap-4 lg:gap-8">
                        {products.map((product) => (
                          <li key={product.handle} className="flex-1">
                            <Link href={`/products/${product.handle}`}>
                              <a onClick={() => close()}>
                                <ProductItem product={product} />
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link href={"/products"}>
                        <a
                          className="btn self-end px-10"
                          onClick={() => close()}
                        >
                          Show all
                        </a>
                      </Link>
                    </div>
                  </Container>
                </>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default memo(ProductsPopover);
