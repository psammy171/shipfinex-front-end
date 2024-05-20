"use client";

import Logo from "@/components/header/logo";
import Profile from "@/components/header/profile";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { status } = useSession();

  return (
    <div className="w-full h-12 bg-primary-700 text-white">
      <div className="max-w-[1300px] min-w-[300px] h-full mx-auto flex items-center px-2">
        <Logo className="h-7 w-7" />
        <span className="flex-grow"></span>
        {status === "authenticated" ? (
          <>
            <Profile />
          </>
        ) : (
          <>
            <Link
              href={"/auth/login"}
              className="text-white hover:scale-105 transition-all"
            >
              Login
            </Link>
            <div className="w-[2px] rounded-sm h-6 bg-gray-200 mx-2"></div>
            <Link
              href={"/auth/signup"}
              className="text-white hover:scale-105 transition-all"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
