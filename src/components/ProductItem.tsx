import Image from "next/future/image";
import { memo } from "react";
import { Product } from "interfaces/product";

type Props = {
  product: Product;
};

function ProductItem({ product }: Props) {
  return (
    <figure className="space-y-0.5 lg:space-y-2">
      <div className="aspect-square">
        <Image
          className="h-full w-full rounded-md object-cover"
          src={product.image}
          alt=""
          width={0}
          height={0}
          sizes="160px"
        />
      </div>

      <figcaption className="font-semibold">{product.name}</figcaption>
    </figure>
  );
}

export default memo(ProductItem);
