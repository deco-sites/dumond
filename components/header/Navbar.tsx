import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";
import Searchbar from "$store/components/search/Searchbar.tsx";

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
        {/* <HeaderButton variant="search" /> */}
        <Searchbar />
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="flex-none w-44">
          <a href="/" aria-label="Store logo" class="block px-4 py-3 w-[160px]">
            <Icon id="Logo" width={126} height={16} />
          </a>
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-end gap-2">
          <HeaderButton variant="search" />
          <HeaderSearchMenu searchbar={searchbar} />
          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" width={20} height={20} strokeWidth={0.4} />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
