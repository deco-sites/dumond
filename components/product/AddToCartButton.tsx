import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
}

function AddToCartButton({ skuId, sellerId }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button
      {...props}
      class="w-full h-[50px] border-none uppercase bg-action text-white rounded-none font-terciary p-[16px] tracking-[1px] text-[18px] font-normal hover:bg-action hover:text-white hover:border-none hover:opacity-[0.6]"
    >
      Comprar
    </Button>
  );
}

export default AddToCartButton;
