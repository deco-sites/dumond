import type { Product } from "deco-sites/std/commerce/types.ts";
import { useEffect, useState } from "preact/compat";

import Text from "../ui/Text.tsx";

interface Props {
  product: Product;
}

function FreightSimulator({ product }: Props) {
  return (
    <div class="flex flex-col">
      <Text class="uppercase leading-[41px]" variant="primary">Frete:</Text>
      <input
        class="w-full h-[42px] placeholder-black text-[12px] font-terciary text-black pt-[13px] px-[20px] pb-[12px] border-black border-[2px] border-solid"
        type="tel"
        placeholder="Insira seu CEP e calcule o frete"
      />
    </div>
  );
}

export default FreightSimulator;
