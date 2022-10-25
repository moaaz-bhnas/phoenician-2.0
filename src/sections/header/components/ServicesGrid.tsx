import Link from "next/link";
import { memo } from "react";
import ServiceItem from "components/ServiceItem";
import services from "data/services.json";

type Props = {};

function ServicesGrid({}: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {services.map((service) => (
        <li key={service.handle}>
          <Link href={`/services/${service.handle}`}>
            <a className="hover-opacity space-y-1 text-sm">
              <ServiceItem service={service} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(ServicesGrid);
