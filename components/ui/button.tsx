import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:bg-primary/90 hover:shadow-[0_0_36px_rgba(99,102,241,0.55)] hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-background shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-secondary/90 hover:-translate-y-0.5",
        outline:
          "border border-white/15 bg-transparent text-foreground hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-0.5",
        ghost: "hover:bg-white/5 text-foreground",
        accent:
          "bg-accent text-background shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-accent/90 hover:-translate-y-0.5",
        glass:
          "glass text-foreground hover:border-primary/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.2)] hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-5 py-2 sm:px-6",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-11 rounded-xl px-6 text-sm sm:h-12 sm:px-8 sm:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
