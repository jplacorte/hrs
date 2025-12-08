import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "./lib/utils"; // Assuming a utility for class concatenation exists

const navbarVariants = cva(
  "flex items-center justify-between bg-gray-800 p-4 text-white",
  {
    variants: {
      variant: {
        default: "bg-gray-800 text-white",
        primary: "bg-blue-600 text-white",
        secondary: "bg-gray-100 text-gray-800",
      },
      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  children?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(navbarVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
