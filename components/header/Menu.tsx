import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      dangerouslySetInnerHTML={{ __html: item.label }}
      class="flex-grow flex items-center justify-start font-secondary uppercase text-white tracking-[3px]"
      variant={level === 0 ? "menu-items-mobile" : "caption"}
    />
  );

  return (
    <li class="border-none ml-[10px]">
      <div
        class={`flex justify-between items-center w-full py-[12.5px] ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button variant="icon">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="Plus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="Minus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul class={`flex-col ${open.value === true ? "flex" : "hidden"}`}>
          <li>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="underline" variant="caption">
                Ver todos
              </Text>
            </a>
          </li>
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="flex flex-col divide-y divide-default">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>

      <div class="w-full h-[1px] mt-[45px] mb-[25px] block border-b border-separador-mobile">
      </div>

      <ul class="flex flex-col py-2 bg-badge">
        <li>
          <a
            class="flex items-center gap-4 px-2.5 py-[12.5px]"
            href="https://www.deco.cx"
          >
            <img
              width={12}
              height={16}
              src="/icon-marker-mobile.png"
            />
            <Text class="text-white font-secondary text-xs font-bold uppercase tracking-[3px]">
              Nossas lojas
            </Text>
          </a>
        </li>
        <li>
          <a
            class="flex items-center gap-4 px-2.5 py-[12.5px]"
            href="https://www.deco.cx"
          >
            <div class="w-[14px] h-[2px] bg-white"></div>
            <Text class="text-white font-secondary text-xs font-bold uppercase tracking-[3px]">
              Seja um franqueado
            </Text>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
