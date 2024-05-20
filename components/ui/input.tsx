import cn from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "bg-gray-200 py-2 px-3 h-10 border-none rounded focus:ring-2 focus:ring-primary-700 focus:outline-none transition-all",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
