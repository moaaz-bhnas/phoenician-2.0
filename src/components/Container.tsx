import { memo, ReactNode } from "react";
import classNames from "../helper-functions/classNames";
import importantClassNames from "../helper-functions/importantClassNames";

type Props = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className = "" }: Props) {
  return (
    <div
      className={classNames(
        "mx-auto max-w-5xl px-4 py-4 sm:px-6 sm:py-10 lg:px-8 lg:py-12",
        importantClassNames(className)
      )}
    >
      <div className="mx-auto sm:max-w-2xl lg:max-w-none">{children}</div>
    </div>
  );
}

export default memo(Container);
