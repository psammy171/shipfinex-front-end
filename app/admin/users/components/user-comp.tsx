import CloseIcon from "@/components/icons/close";
import Button from "@/components/ui/button";
import PopUp from "@/components/ui/popup";
import useAxios from "@/lib/api/use-axios";
import { useAppDispatcher } from "@/store";
import { removeRole } from "@/store/users/user-actions";
import { User } from "@/types/user";
import { useState } from "react";
import RoleModal from "./role-modal";

type Props = {
  user: User;
};

const UserComp = ({ user }: Props) => {
  const axios = useAxios();
  const dispatch = useAppDispatcher();
  const [open, setOpen] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [roleToDelete, setRoleToDelete] = useState<"Admin" | "Super admin">();
  const [roleToDeleteEnum, setRoleToDeleteEnum] = useState<
    "ADMIN" | "SUPER_ADMIN"
  >();

  const closePopup = () => {
    setConfirm(false);
    setMsg("");
  };

  const onConfirm = () => {
    dispatch(removeRole(axios, user.id, roleToDeleteEnum!));
    closePopup();
  };

  return (
    <>
      <div className="m-4 rounded border bg-gray-50 hover:shadow-md transition-shadow">
        <div className="flex gap-2 p-4 border-b">
          <span className="border rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold bg-white">
            {user.name[0]}
          </span>
          <div>
            <p>{user.name}</p>
            <p className="leading-3 text-[14px]">{user.email}</p>
          </div>
        </div>
        <div className="p-4 pt-2 relative">
          <p className="font-semibold text-lg mb-2">Roles</p>
          <span
            className="absolute top-2 right-4 bg-primary-700 px-3 py-1 rounded cursor-pointer text-white"
            onClick={() => setOpen(true)}
          >
            + Add Role
          </span>
          <div className="flex gap-4 text-white">
            {user.roles.find((role) => role.role === "ADMIN") && (
              <span className="bg-teal-700 px-3 py-1 rounded flex gap-2 items-center">
                <p>Admin</p>
                <CloseIcon
                  className="cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    setRoleToDelete("Admin");
                    setRoleToDeleteEnum("ADMIN");
                    setMsg(`* This will delete 'Super Admin' role also.`);
                    setConfirm(true);
                  }}
                />
              </span>
            )}
            {user.roles.find((role) => role.role === "SUPER_ADMIN") && (
              <span className="bg-blue-700 px-3 py-1 rounded flex gap-2 items-center">
                <p>Super Admin</p>
                <CloseIcon
                  className="cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    setRoleToDelete("Super admin");
                    setRoleToDeleteEnum("SUPER_ADMIN");
                    setConfirm(true);
                  }}
                />
              </span>
            )}
          </div>
        </div>
      </div>
      <RoleModal open={open} close={() => setOpen(false)} userId={user.id} />
      <PopUp open={confirm} close={closePopup}>
        <div className="p-4">
          <p className="text-xl font-semibold text-error">Delete Role ?</p>
          <p>{`Are you sure want to remove the role ${roleToDelete} ?`}</p>
          <p className="text-[15px] leading-3 text-right">{msg}</p>
          <div className="flex gap-4 mt-2">
            <Button
              variant="secondary"
              className="mx-0 flex-1"
              onClick={closePopup}
            >
              Cancel
            </Button>
            <Button className="mx-0 flex-1" variant="error" onClick={onConfirm}>
              Yes
            </Button>
          </div>
        </div>
      </PopUp>
    </>
  );
};

export default UserComp;
