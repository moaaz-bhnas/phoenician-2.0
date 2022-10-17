import { Bars3Icon } from "@heroicons/react/24/outline";
import { Dispatch, memo, SetStateAction } from "react";

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function SidebarToggler({ setOpen }: Props) {
  return (
    <button
      className="hover-opacity flex h-12 w-12"
      type="button"
      onClick={() => setOpen((prevOpen) => !prevOpen)}
    >
      <Bars3Icon className="m-auto h-5 w-5" />
    </button>
  );
}

export default memo(SidebarToggler);
