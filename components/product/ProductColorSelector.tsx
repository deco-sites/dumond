import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useEffect, useState } from "preact/compat";

import Text from "../ui/Text.tsx";

interface Props {
  product: Product;
}

type SimilarSkuImage = {
  imageTag: string;
  imageUrl: string;
  imageText: string;
};

type SimilarSku = {
  images: SimilarSkuImage[];
};

type Similars = {
  linkText: string;
  items: SimilarSku[];
};

function ColorSelector({ product }: Props) {
  const [similars, setSimilars] = useState<Similars[]>([]);

  async function fetchData() {
    const response = await fetch(
      `/api/catalog_system/pub/products/crossselling/similars/${product.isVariantOf?.productGroupID}`,
      {
        mode: "no-cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      },
    );

    return await response.json();
  }

  useEffect(() => {
    fetchData().then((data) => setSimilars(data));
  }, []);

  return (
    <div class="flex flex-col">
      <Text class="uppercase font-[14px]" variant="primary">Cores:</Text>

      <div class="flex flex-row gap-[11px]">
        {similars.map((similar) => (
          <div class="block relative">
            <div class="bg-overlay absolute top-0 left-0 w-full h-full pointer-events-none">
            </div>
            <a class="block" href={`/${similar.linkText}/p`}>
              <Image
                src={similar.items[0].images[0].imageUrl}
                width={70}
                height={70}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
