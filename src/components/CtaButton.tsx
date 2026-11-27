import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CHECKOUT_URL } from "../constants";
import { trackPixelEvent } from "../lib/pixel";

type CtaButtonProps = {
  children: ReactNode;
  variant?: "primary" | "dark" | "light";
  size?: "md" | "lg";
  className?: string;
  pixelEvent?: "Lead" | "InitiateCheckout";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-orange-gradient text-white shadow-lg shadow-orange-500/30 hover:brightness-110 focus-visible:outline-orange-DEFAULT",
  dark: "bg-ink text-white hover:bg-black focus-visible:outline-white",
  light:
    "bg-white text-ink border-2 border-ink hover:bg-ink hover:text-white focus-visible:outline-ink",
};

const sizeStyles: Record<NonNullable<CtaButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function CtaButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  pixelEvent = "InitiateCheckout",
  ...rest
}: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackPixelEvent(pixelEvent)}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold tracking-tight transition-all duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
