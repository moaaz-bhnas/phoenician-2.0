import Image from "next/future/image";
import { memo } from "react";
import classNames from "../helper-functions/classNames";

type Props = {
  className?: string;
};

function Logo({ className = "" }: Props) {
  return (
    <Image
      className={classNames("w-5 h-5 m-auto", className)}
      src={"/images/logo.svg"}
      alt=""
      width={0}
      height={0}
    />
  );
}

export default memo(Logo);
