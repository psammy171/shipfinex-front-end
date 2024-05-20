import Logo from "@/components/header/logo";
import Profile from "@/components/header/profile";

const Header = () => {
  return (
    <div className="w-full h-12 bg-primary-700 text-white flex items-center px-2 absolute top-0">
      <Logo className="w-7 h-7" />
      <span className="flex-grow"></span>
      <Profile />
    </div>
  );
};

export default Header;
