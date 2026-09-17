import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "secondary-inverted";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(22,63,133,0.35)] font-bold",
  secondary:
    "border border-ink/15 text-ink hover:border-blue-500/50 hover:text-blue-600",
  "secondary-inverted":
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/[0.06]",
};

type BaseProps = {
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
};

type ButtonAsLink = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className"
  >;
type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", showArrow = true, className, ...rest } = props;

  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200",
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {props.children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, children: _children, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={cn("group", classes)} {...linkRest}>
        {content}
      </Link>
    );
  }

  const { children: _children, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={cn("group", classes)} {...buttonRest}>
      {content}
    </button>
  );
}
