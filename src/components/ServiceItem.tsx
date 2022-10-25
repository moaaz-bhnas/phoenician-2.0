import Image from "next/future/image";
import { memo } from "react";
import { Service } from "interfaces/service";
import withNonBreakingSpaces from "helper-functions/withNonBreakingSpaces";

type Props = {
  service: Service;
};

function ServiceItem({ service }: Props) {
  return (
    <figure className="space-y-1 lg:space-y-2">
      <div className="aspect-[10/8]">
        <Image
          className="h-full w-full rounded-md object-cover"
          src={service.images[0]}
          alt=""
          width={0}
          height={0}
          sizes="(min-width: 650px) 400px,
          160px"
        />
      </div>

      <figcaption className="text-sm font-semibold lg:text-base">
        {withNonBreakingSpaces(service.name)}
      </figcaption>
    </figure>
  );
}

export default memo(ServiceItem);
