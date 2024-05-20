import cn from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

const CheckBox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "bg-gray-200 p-2 border-none rounded-sm focus:ring-2 text-primary-700 cursor-pointer focus:ring-primary-700 focus:outline-none transition-all",
        className
      )}
      {...props}
    />
  );
});

CheckBox.displayName = "CheckBox";

export default CheckBox;
