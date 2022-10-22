import Image from "next/future/image";
import { memo } from "react";
import Grid from "./components/Grid";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="space-y-3">
      <div className="text-center">
        <p className="text-xl font-bold tracking-tight text-blue-900 lg:text-3xl">
          Phoenician Marine Enginnering
        </p>
        <p className="lg:text-lg">
          World class solutions to your the most challenging problems.
        </p>
      </div>
      <Grid />
    </div>
  );
}

export default memo(Banner);
