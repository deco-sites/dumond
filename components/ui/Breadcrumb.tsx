import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
      <a href={item}>
        <Text
          variant="breadcrumb"
          class="md:text-[11px] uppercase font-secondary font-bold"
        >
          {name}
        </Text>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <ul class="flex flex-row gap-2 items-center w-full items-center px-[15px] pb-[20px]">
      <Item name="Home" item="/" />
      {itemListElement.map((item) => (
        <>
          <li>
            <Text class="md:text-[16px]" variant="breadcrumb">{">"}</Text>
          </li>
          <Item {...item} />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
