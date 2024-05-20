import Link from "next/link";
import LogoWhite from "./logo-white";

const Logo = () => {
  return (
    <Link href={"/"}>
      <LogoWhite className="w-6 h-6" />
    </Link>
  );
};

export default Logo;
