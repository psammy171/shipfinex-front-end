import Logo from "@/components/header/logo";
import Profile from "@/components/header/profile";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-12 bg-primary-700 text-white flex items-center px-2 absolute top-0">
      <Link href={"/"}>
        <Logo className="w-7 h-7" />
      </Link>
      <span className="flex-grow"></span>
      <Profile />
    </div>
  );
};

export default Header;
