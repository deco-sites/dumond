import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import ProductColorSelector from "$store/islands/ProductColorSelector.tsx";
import ProductFreightSimulator from "$store/islands/ProductFreightSimulator.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { useId } from "preact/hooks";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type {
  ImageObject,
  ProductDetailsPage,
} from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

interface Dots {
  imagesProduct?: ImageObject[];
}

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2 md:absolute md:left-[56px] md:top-1/2 md:translate-y-[-50%]">
        <Button
          class="h-12 w-12 bg-arrow-left bg-no-repeat focus:outline-none"
          variant="arrow"
          data-slide="prev"
          aria-label="Previous item"
        />
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2 md:absolute md:right-0 md:top-1/2 md:translate-y-[-50%]">
        <Button
          class="h-12 w-12 bg-arrow-right bg-no-repeat focus:outline-none"
          variant="arrow"
          data-slide="next"
          aria-label="Next item"
        />
      </div>
    </>
  );
}

function Dots({ imagesProduct }: Dots) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }`,
        }}
      >
      </style>
      <ol class="flex items-center justify-center col-span-full z-10 row-start-4 lg:flex-col lg:z-0 lg:justify-start lg:mt-[30px] md:max-h-[373px] mr-[24px]">
        {imagesProduct?.map((_: ImageObject, index: number) => (
          <li class="h-full lg:h-auto">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full w-[56px] rounded focus:outline-none group"
            >
              <Image
                src={_.url!}
                alt={_.alternateName}
                width={56}
                height={56}
                // Preload LCP image for better web vitals
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    isVariantOf,
    gtin,
  } = product;
  const { name } = isVariantOf || product;
  const sliderId = useId();
  const thumbsSliderId = useId();
  const { price, listPrice, seller, installments, discount } = useOffer(offers);
  const [front, back] = images ?? [];

  return (
    <>
      <div class="px-[60px]">
        <Breadcrumb
          itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
        />
      </div>
      <Container class="py-0">
        {/* Code and name */}
        <div class="md:hidden max-w-300px mx-auto">
          <h1>
            <Text
              class="uppercase tracking-4px font-terciary font-heading-1"
              variant="heading-terciary-1"
            >
              {name}
            </Text>
          </h1>
          <Text
            class="pl-[5%] text-[12px] tracking-[1px] text-black"
            variant="terciary"
          >
            REF: {gtin}
          </Text>
        </div>
        <div class="flex flex-col gap-4 px-[20px] sm:flex-row sm:gap-10">
          {/* Image Gallery */}
          <div
            id={sliderId}
            class="md:hidden grid relative grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
          >
            <Slider class="col-span-full row-span-full scrollbar-none gap-6">
              {images?.map((img, index) => (
                <Image
                  style={{ aspectRatio: "432 / 432" }}
                  class="min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={img.url!}
                  alt={img.alternateName}
                  width={432}
                  height={432}
                  // Preload LCP image for better web vitals
                  preload={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </Slider>

            <Controls />

            <SliderControllerJS rootId={sliderId} />

            <Button
              variant="iconButton"
              class="absolute top-[16px] right-[16px] border-none"
            >
              <Icon id="WishList" width={24} height={24} />
            </Button>
          </div>

          {/* Image Gallery */}
          <div
            id={thumbsSliderId}
            class="hidden md:flex md:w-[70%] md:overflow-hidden md:max-h-[552px] flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2 md:relative"
          >
            <Dots imagesProduct={images} />

            <Slider class="col-span-full row-span-full scrollbar-none gap-6 max-w-full">
              {images?.map((img, index) => (
                <Image
                  style={{ aspectRatio: "442 / 442" }}
                  class="w-[100vw] max-w-[442px]"
                  src={img.url!}
                  alt={img.alternateName}
                  width={442}
                  height={442}
                  // Preload LCP image for better web vitals
                  preload={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </Slider>
            <Controls />
            <SliderControllerJS
              rootId={thumbsSliderId}
            />

            <div class="absolute top-[16px] right-[16px] flex flex-col">
              <Button
                variant="iconButton"
                class="absolute top-[16px] right-[16px] border-none"
              >
                <Icon id="WishList" width={24} height={24} />
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div class="flex-auto pl-[5%] sm:px-0">
            <div class="hidden md:flex flex-col md:max-w-[486px]">
              <h1>
                <Text
                  class="uppercase tracking-4px font-terciary font-heading-1"
                  variant="heading-terciary-1"
                >
                  {name}
                </Text>
              </h1>
              <Text
                class="pl-[5%] md:pl-0 text-[12px] tracking-[1px] text-black"
                variant="terciary"
              >
                REF: {gtin}
              </Text>
            </div>
            <Text
              class="md:hidden text-[12px] tracking-[1px] text-black"
              variant="terciary"
            >
              REF: {gtin}
            </Text>
            {/* Prices */}
            <div class="relative pb-[16px] mt-4">
              <div class="flex flex-col gap-[5px] relative">
                <Text
                  tone="default"
                  variant="primary"
                >
                  De:{" "}
                  <Text
                    variant="bold"
                    tone="broke-caption"
                    class="line-through"
                  >
                    {formatPrice(listPrice, offers!.priceCurrency!)}
                  </Text>
                </Text>
                {discount
                  ? (
                    <Text
                      variant="primary"
                      class="absolute p-[5px] text-[12.8px] text-[#b9b9b9] right-0 top-0 border-[1px] border-dotted border-broke bg-[#f1f1f1]"
                    >
                      Economia de{" "}
                      <span class="text-broke-caption">
                        {formatPrice(discount, offers!.priceCurrency!)}
                      </span>
                    </Text>
                  )
                  : null}
                <Text
                  variant="primary"
                  class="text-[30px] leading-[30px] tracking-[3.2px] font-bold"
                  tone="default"
                >
                  {formatPrice(price, offers!.priceCurrency!)}
                </Text>
              </div>
              {installments?.billingDuration && installments?.billingIncrement
                ? (
                  <Text
                    class="uppercase text-[10px] tracking-[3.2px]"
                    tone="default"
                    variant="terciary"
                  >
                    ou {installments?.billingDuration}x de R${" "}
                    <strong>
                      {installments?.billingIncrement?.toString().replace(
                        ".",
                        ",",
                      )}
                    </strong>
                  </Text>
                )
                : null}
              <div class="w-[45px] bg-black h-[1px] absolute bottom-0 block">
              </div>
            </div>
            {/* Sku Selector */}
            <div class="mt-4 sm:mt-6">
              <ProductColorSelector product={product} />
            </div>
            <div class="mt-4 sm:mt-6">
              <ProductSelector product={product} />
            </div>
            {/* Add to Cart and Favorites button */}
            <div class="mt-4 sm:mt-10 flex flex-col gap-2">
              {seller && (
                <>
                  <AddToCartButton
                    skuId={productID}
                    sellerId={seller}
                  />
                  <Text
                    class="w-full text-center font-bold font-[14.4px] leading-[14.4px] h-[34px] mb-[3%]"
                    variant="primary"
                  >
                    5% extra em compras à vista com cartão de crédito
                  </Text>
                </>
              )}
            </div>

            <Button
              variant="secondary"
              class="relative mb-[30px] ml-[15px] mt-[15px] uppercase flex justify-center items-center h-[41px] rounded-none border-[1px] border-solid border-black w-[248px]"
            >
              <img
                src="/icon-quero-de-presente.png"
                alt="Ícone quero de presente"
                class="absolute left-[-17px] top-1/2 translate-y-[-50%]"
                width={33}
                height={33}
              />
              <Text class="font-normal text-[18px]" variant="primary">
                Quero de presente
              </Text>
            </Button>
            <ProductFreightSimulator product={product} />
            {/* Description card */}
            <div class="md:hidden mt-4 sm:mt-6">
              <Text variant="caption">
                {description && (
                  <div class="flex flex-col">
                    <Text
                      variant="heading-terciary-1"
                      class="cursor-pointer text-center w-full font-primary font-bold mb-[30px]"
                    >
                      Descrição
                    </Text>
                    <Text
                      class="ml-2 mt-2"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </div>
                )}
              </Text>
            </div>
          </div>
        </div>
      </Container>
      <div class="hidden md:block border-b-[1px] border-broke">
        <div class="mx-auto mt-[50px] w-[90%] max-w-[1400px]">
          {description && (
            <div class="flex flex-row">
              <Text
                variant="heading-terciary-1"
                class="cursor-pointer w-[16.66667%] font-primary font-bold mb-[30px]"
              >
                Descrição
              </Text>
              <Text
                class="ml-2 mt-2 w-full pl-[25px] border-l-[5px] border-solid border-black"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
