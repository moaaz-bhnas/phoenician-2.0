import { Bars3Icon } from "@heroicons/react/24/outline";
import { memo } from "react";

type Props = {};

function SidebarToggler({}: Props) {
  return (
    <button className="hover-opacity flex h-12 w-12" type="button">
      <Bars3Icon className="m-auto h-5 w-5" />
    </button>
  );
}

export default memo(SidebarToggler);
