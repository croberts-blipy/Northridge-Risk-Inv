import type { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

type CardComposition = FC<CardProps> & {
  Header: FC<CardProps>;
  Title: FC<CardProps>;
  Description: FC<CardProps>;
  Content: FC<CardProps>;
  Footer: FC<CardProps>;
};

const baseCard = "rounded-xl border border-surface-border bg-surface shadow-soft";

const CardRoot: FC<CardProps> = ({ className, ...props }) => (
  <div className={cn(baseCard, className)} {...props} />
);

const createCardSection = (defaultClass: string): FC<CardProps> =>
  function CardSection({ className, ...props }) {
    return <div className={cn(defaultClass, className)} {...props} />;
  };

const Card: CardComposition = Object.assign(CardRoot, {
  Header: createCardSection("border-b border-surface-border px-6 py-4"),
  Title: createCardSection("text-lg font-semibold text-surface-foreground"),
  Description: createCardSection("text-sm text-surface-foreground/70"),
  Content: createCardSection("px-6 py-4 text-surface-foreground"),
  Footer: createCardSection("border-t border-surface-border px-6 py-4"),
});

export { Card };
