import { Children } from "preact/compat";
import type { JSX } from "preact";
import Icon from "./Icon.tsx";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
};

function Slider({
  children,
  snap = "snap-center",
  class: _class = "gap-6 scrollbar-none",
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`relative grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li
          data-slider-item={index}
          class={snap}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default Slider;
