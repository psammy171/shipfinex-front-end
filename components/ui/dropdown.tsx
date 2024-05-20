import cn from "@/lib/utils/cn";
import { SelectHTMLAttributes, forwardRef } from "react";

type Item = {
  id: string;
  label: string;
};

type Options = {
  options: Item[];
};

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> & Options;

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "bg-gray-200 min-w-64 py-2 px-3 h-10 border-none rounded focus:ring-2 focus:ring-primary-700 focus:outline-none transition-all",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option value={opt.id} key={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
