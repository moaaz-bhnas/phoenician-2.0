import Image from "next/future/image";
import { memo } from "react";
import classNames from "../helper-functions/classNames";

type Props = {
  className?: string;
};

function Logo({ className = "" }: Props) {
  return (
    <Image
      className={classNames("m-auto h-5 w-5 lg:h-6 lg:w-6", className)}
      src={"/images/logo.svg"}
      alt=""
      width={0}
      height={0}
    />
  );
}

export default memo(Logo);
