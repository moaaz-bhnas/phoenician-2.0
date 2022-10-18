import Image from "next/future/image";
import Link from "next/link";
import { memo } from "react";

type Props = {};

const products = [
  {
    name: "Product 1",
    handle: "product-1",
    src: "/images/products/product-1.webp",
  },
  {
    name: "Product 2",
    handle: "product-2",
    src: "/images/products/product-2.webp",
  },
  {
    name: "Product 3",
    handle: "product-3",
    src: "/images/products/product-3.webp",
  },
  {
    name: "Product 4",
    handle: "product-4",
    src: "/images/products/product-4.webp",
  },
];

function ProductsGrid({}: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <li key={product.name}>
          <Link href={`/products/${product.handle}`}>
            <a className="space-y-1 text-sm">
              <div className="aspect-square">
                <Image
                  className="h-full w-full rounded-md object-cover"
                  src={product.src}
                  alt=""
                  width={0}
                  height={0}
                  sizes="160px"
                />
              </div>

              <p className="font-semibold">{product.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(ProductsGrid);
