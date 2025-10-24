import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary:
    "bg-surface text-surface-foreground hover:bg-surface-muted/80 border border-surface-border",
  ghost: "hover:bg-surface-muted/60",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", loading = false, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="h-3 w-3 animate-spin rounded-full border-2 border-background-foreground border-r-transparent" />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  )
);

Button.displayName = "Button";
