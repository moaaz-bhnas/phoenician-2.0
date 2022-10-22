import Link from "next/link";
import { memo } from "react";
import ProductItem from "components/ProductItem";
import products from "data/products.json";

type Props = {};

function ProductsGrid({}: Props) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <li key={product.handle}>
          <Link href={`/products/${product.handle}`}>
            <a className="hover-opacity space-y-1 text-sm">
              <ProductItem product={product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(ProductsGrid);
