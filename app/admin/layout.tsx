"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathName = usePathname();

  const Menu = [
    {
      id: "1",
      title: "Dashboard",
      path: "/admin",
    },
    {
      id: "2",
      title: "Users",
      path: "/admin/users",
    },
  ];

  return (
    <div>
      <Header />
      <div className="h-screen flex pt-12">
        <div className="w-64 h-full border-r p-1">
          {Menu.map((item) => (
            <div
              key={item.id}
              className={`${
                pathName === item.path
                  ? "bg-primary-100"
                  : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              } my-1 rounded-sm overflow-hidden flex transition-colors`}
            >
              <Link href={item.path} className="flex-grow">
                <p className="p-2">{item.title}</p>
              </Link>
              <span
                className={`w-[5px] rounded-l-md ${
                  pathName === item.path ? "bg-primary-700" : "bg-gray-500"
                }`}
              ></span>
            </div>
          ))}
        </div>
        <div className="w-full max-h-full overflow-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
