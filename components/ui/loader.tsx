import cn from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

type CustomProps = {
  variant?: "primary" | "secondary";
  size?: "regular" | "large" | "xl";
};

type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomProps;

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, size = "regular", variant = "primary", ...props }, ref) => {
    const getSize = () => {
      switch (size) {
        case "large":
          return "w-8 h-8";
        case "xl":
          return "w-12 h-12";
        default:
          return "w-5 h-5";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          `rounded-full border-[3px] ${
            variant === "primary" ? "border-primary-700" : "border-white"
          } border-t-transparent animate-spin bg-transparent`,
          className,
          getSize()
        )}
        {...props}
      />
    );
  }
);

Loader.displayName = "Loader";

export default Loader;
