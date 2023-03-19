import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Searchbar from "$store/components/search/Searchbar.tsx";
import Text from "../ui/Text.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="flex flex-col">
        <div
          class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-5 mt-[5px] gap-2`}
        >
          <HeaderButton variant="menu" />

          <a
            href="/"
            class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
            aria-label="Store logo"
          >
            <img class={`w-28 h-6 ml-2.5`} src="/logo-dumond.png" />
          </a>

          <div class="flex gap-2">
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <div
                class={`w-6 h-6 bg-no-repeat`}
                style="background-image: url(/icon-sprites.png); background-position: -206px -50px;"
              >
              </div>
            </Button>

            <Button
              as="a"
              variant="icon"
              href="/wishlist"
              aria-label="Log in"
            >
              <Icon id="WishList" width={26} height={28} />
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div class="md:hidden">
          <Searchbar placeholder={searchbar.placeholder} />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-col items-end px-10 max-w-[1620px] mt-[18px] my-0 mx-auto">
        <div class="flex flex-row items-center mb-[6px]">
          <Text class="font-terciary uppercase text-[11px] tracking-[4px] font-bold mr-[20px]">
            Blog
          </Text>
          <img
            class="mr-[5px]"
            width={12}
            height={16}
            src="/icon-marker-header.png"
          />
          <Text class="font-terciary uppercase text-[10px] tracking-[4px] font-bold mr-5">
            Nossas Lojas
          </Text>
          <div class="w-[20px] h-[2px] bg-black mr-2.5"></div>{" "}
          <Text class="font-secondary uppercase text-[10px] tracking-[4px] font-bold">
            Seja um franqueado
          </Text>
        </div>
        <div class="hidden md:flex flex-row justify-between items-center w-full">
          <div class="flex-none w-[232px]">
            <a href="/" aria-label="Store logo" class="block p-0 w-[232px]">
              <img class={`w-[232px] h-[46px]`} src="/logo-dumond.png" />
            </a>
          </div>
          <div class="flex-auto flex ml-[5px] mt-[15px]">
            {items.map((item) => <NavItem item={item} />)}
          </div>
          <div class="flex flex-auto mt-[18px]">
            <Searchbar placeholder={searchbar.placeholder} />
            <div class="flex-none flex items-center justify-end gap-2">
              <Button
                class="relative bg-transparent px-1.5"
                href="/login"
                aria-label="Log in"
              >
                <img
                  class={`absolute right-full`}
                  width={20}
                  height={20}
                  src="/icon-user-desktop.png"
                />

                <Text
                  variant="menu-items"
                  class="font-secondary uppercase tracking-[3px] text-xs"
                >
                  entrar
                </Text>

                <div
                  class={`w-[17px] h-[10px] bg-no-repeat`}
                  style="background-image: url(/icon-sprites.png); background-position: -15px -75px;"
                >
                </div>
              </Button>

              <Button
                as="a"
                variant="icon"
                href="/wishlist"
                aria-label="Log in"
              >
                <Icon id="WishList" width={26} height={28} />
              </Button>
              <HeaderButton variant="cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
