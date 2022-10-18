import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import classNames from "../../../helper-functions/classNames";

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
        </>
      )}
    </Popover>
  );
}

export default memo(ProductsPopover);
