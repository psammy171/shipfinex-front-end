import Button from "@/components/ui/button";
import Dropdown from "@/components/ui/dropdown";
import Label from "@/components/ui/label";
import PopUp from "@/components/ui/popup";
import useAxios from "@/lib/api/use-axios";
import { useAppDispatcher } from "@/store";
import { addRole } from "@/store/users/user-actions";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  close: () => void;
  userId: string;
};

const RoleModal = ({ open, close, userId }: Props) => {
  const axios = useAxios();
  const dispatch = useAppDispatcher();
  const [role, setRole] = useState<"ADMIN" | "SUPER_ADMIN">();
  const options = [
    { id: "SELECT", label: "Select role" },
    { id: "ADMIN", label: "Admin" },
    { id: "SUPER_ADMIN", label: "Super Admin" },
  ];

  const onUpdateRole = () => {
    if (role === "ADMIN" || role === "SUPER_ADMIN") {
      dispatch(addRole(axios, userId, role!));
      close();
    } else {
      toast.error("Please select role");
    }
  };

  return (
    <PopUp open={open} close={close}>
      <div className="p-4">
        <Label inputLabel={"Select Role"} />
        <Dropdown
          options={options}
          defaultValue={"SELECT"}
          onChange={(e) => setRole(e.target.value as "ADMIN" | "SUPER_ADMIN")}
        />
        <div className="flex gap-4 mt-3">
          <Button variant="secondary" className="flex-1 mx-0" onClick={close}>
            Cancel
          </Button>
          <Button className="flex-1 mx-0" onClick={onUpdateRole}>
            Update Role
          </Button>
        </div>
      </div>
    </PopUp>
  );
};

export default RoleModal;
