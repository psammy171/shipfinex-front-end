import cn from "@/lib/utils/cn";
import NextLink from "next/link";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const Link = ({ href, className, children }: Props) => {
  return (
    <NextLink
      href={href}
      className={cn(
        "text-blue-700 hover:text-blue-800 hover:underline",
        className
      )}
    >
      {children}
    </NextLink>
  );
};

export default Link;
