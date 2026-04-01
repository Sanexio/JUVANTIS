import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

// Button-Varianten:
// "primary" = Teal-Gradient (Hauptaktion, z.B. "Jetzt starten")
// "secondary" = Transparenter Rand (Nebenauswahl, z.B. "Mehr erfahren")
// "ghost" = Unsichtbar, nur Text (z.B. "Anmelden")

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-teal to-teal-bright text-text-primary font-semibold hover:opacity-90 glow-teal",
  secondary:
    "border border-border hover:border-border-hover text-text-primary hover:bg-teal/10",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
