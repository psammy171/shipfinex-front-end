import cn from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

type CustomProps = {
  variant?: "primary" | "secondary";
};

type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomProps;

const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `w-5 h-5 rounded-full border-[3px] ${
            variant === "primary" ? "border-primary-700" : "border-white"
          } border-t-transparent animate-spin bg-transparent`,
          className
        )}
        {...props}
      />
    );
  }
);

Loader.displayName = "Loader";

export default Loader;
