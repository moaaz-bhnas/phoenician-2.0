import classNames from "helper-functions/classNames";
import Image from "next/future/image";
import Link from "next/link";
import { memo } from "react";

type Props = {};

const images = [
  { src: "/images/grid/grid-2.jpg", alt: "" },
  { src: "/images/grid/grid-1.jpeg", alt: "" },
  { src: "/images/grid/grid-3.jpg", alt: "" },
];

function Grid({}: Props) {
  return (
    <ul className="grid grid-cols-2 grid-rows-2 gap-2 lg:max-h-[calc(100vh-12rem)] lg:min-h-[32rem] lg:gap-3">
      {images.map((image, index) => (
        <li
          className={classNames(index === 1 ? "row-span-2" : "")}
          key={image.src}
        >
          <Link href="/services">
            <a className="hover-opacity">
              <Image
                className="h-full w-full rounded object-cover"
                src={image.src}
                alt={image.alt}
                width="0"
                height={0}
                sizes="50vw"
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(Grid);
