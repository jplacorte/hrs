import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "."; // Assuming a utility for class concatenation exists

const hamburgerVariants = cva(
  "flex h-6 w-6 cursor-pointer flex-col justify-around bg-transparent",
  {
    variants: {
      toggled: {
        true: "p-0", // No padding when toggled
        false: "p-0", // No padding when not toggled
      },
    },
    defaultVariants: {
      toggled: false,
    },
  }
);

const hamburgerLineVariants = cva(
  "h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out",
  {
    variants: {
      toggled: {
        true: [],
        false: [],
      },
      line: {
        top: [],
        middle: [],
        bottom: [],
      },
    },
    compoundVariants: [
      {
        toggled: true,
        line: "top",
        className: "translate-y-2 rotate-45",
      },
      {
        toggled: true,
        line: "middle",
        className: "opacity-0",
      },
      {
        toggled: true,
        line: "bottom",
        className: "-translate-y-2 -rotate-45",
      },
    ],
    defaultVariants: {
      toggled: false,
    },
  }
);

export interface HamburgerProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof hamburgerVariants> {
  toggled: boolean;
  onToggle: () => void;
}

const Hamburger = React.forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ className, toggled, onToggle, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(hamburgerVariants({ toggled, className }))}
        onClick={onToggle}
        aria-expanded={toggled}
        {...props}
      >
        <span className={cn(hamburgerLineVariants({ toggled, line: "top" }))} />
        <span
          className={cn(hamburgerLineVariants({ toggled, line: "middle" }))}
        />
        <span
          className={cn(hamburgerLineVariants({ toggled, line: "bottom" }))}
        />
      </button>
    );
  }
);
Hamburger.displayName = "Hamburger";

export { Hamburger, hamburgerVariants };
