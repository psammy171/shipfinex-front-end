import { InputHTMLAttributes, forwardRef } from "react";

type CustomProps = {
  label?: string;
};

type SwitchBoxProps = InputHTMLAttributes<HTMLInputElement> & CustomProps;

const Switch = forwardRef<HTMLInputElement, SwitchBoxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className="inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" ref={ref} className="sr-only peer" {...props} />
        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-400 dark:peer-focus:ring-priamry-700 rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary-700"></div>
        <span className="ms-3">{label}</span>
      </label>
    );
  }
);

Switch.displayName = "Input";

export default Switch;
