import { Bars3Icon } from "@heroicons/react/24/outline";
import { memo } from "react";

type Props = {};

function SidebarToggler({}: Props) {
  return (
    <button className="w-12 h-12 flex" type="button">
      <Bars3Icon className="w-5 m-auto" />
    </button>
  );
}

export default memo(SidebarToggler);
