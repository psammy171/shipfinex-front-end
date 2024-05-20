import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AdminIcon from "../icons/admin";
import Button from "../ui/button";

const Profile = () => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const closePopup = () => {
      setOpen(false);
    };
    if (open) window.addEventListener("click", closePopup);
    else window.removeEventListener("click", closePopup);
  }, [open]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <span
        className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer text-primary-700 hover:text-primary-900 font-semibold hover:bg-gray-300 transition-all "
        onClick={() => setOpen((pre) => !pre)}
      >
        {session?.user.name[0].toUpperCase()}
      </span>
      <div
        className={`absolute right-0 mt-4 min-w-64 shadow-md border rounded-md transition-all z-20 bg-white ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link href={"/profile"}>
          <div
            className={`flex items-center border-b p-3 gap-2 ${
              pathName.startsWith("/profile")
                ? "bg-primary-100"
                : "hover:bg-gray-100"
            }`}
          >
            <span className="w-9 h-9 rounded-full font-semibold text-white flex items-center justify-center bg-primary-700">
              {session?.user.name[0].toUpperCase()}
            </span>
            <div className="pt-1 text-gray-900">
              <p className="leading-3 font-semibold">{session?.user.name}</p>
              <p className="text-sm">{session?.user.email}</p>
            </div>
          </div>
        </Link>
        {session?.user.roles.find((role) => role.role === "ADMIN") && (
          <Link href={"/admin"}>
            <div
              className={`border-b flex items-center gap-2 text-primary-700 px-3 py-2 ${
                pathName.startsWith("/admin")
                  ? "bg-primary-100"
                  : "hover:bg-gray-100"
              } transition-all`}
            >
              <AdminIcon className="w-4 h-4" />
              <p className="text-[15px] font-semibold">Admin Dashboard</p>
            </div>
          </Link>
        )}
        <div className="m-1 p-2">
          <Button
            className="w-full m-0"
            onClick={() =>
              signOut({
                callbackUrl: "/auth/login",
                redirect: true,
              })
            }
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
