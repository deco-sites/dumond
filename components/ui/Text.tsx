import { JSX } from "preact";
import { forwardRef } from "preact/compat";

type Props = JSX.IntrinsicElements["span"] & {
  tone?:
    | "default"
    | "default-inverse"
    | "subdued"
    | "subdued-inverse"
    | "price"
    | "section-title"
    | "positive"
    | "critical"
    | "broke-caption";
  variant?:
    | "primary"
    | "secondary"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-terciary-1"
    | "terciary"
    | "menu"
    | "menu-items"
    | "menu-items-mobile"
    | "button"
    | "body"
    | "caption"
    | "breadcrumb"
    | "bold"
    | "alerts"
    | "list-price";
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "body", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`font-${variant} text-${variant} text-${tone} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
