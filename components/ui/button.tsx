import cn from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Loader from "./loader";

type CustomProps = {
  variant?: "primary" | "secondary" | "ghost" | "error";
  loading?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, loading = false, variant = "primary", ...props },
    ref
  ) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "primary":
          return "py-2 bg-primary-700 hover:bg-primary-800 text-white border-2 border-primary-700 hover:border-primary-800";
        case "secondary":
          return "border-2 py-[6px] border-primary-700 hover:border-primary-800 text-primary-700 hover:text-primary-800 bg-transparent border-primary-700 hover:border-primary-800";
        case "ghost":
          return "py-2 text-primary-700 hover:text-primary-800 bg-transparent hover:bg-primary-50";
        case "error":
          return "py-2 bg-error/90 hover:bg-error text-white border-2 border-error/90 hover:border-error";
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "transition-all flex justify-center items-center m-1 h-10 px-3 py-[6px] rounded",
          getVariantStyles(),
          className
        )}
        {...props}
      >
        {loading ? (
          <Loader variant={variant === "primary" ? "secondary" : "primary"} />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Input";

export default Button;
