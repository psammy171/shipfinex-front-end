import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import useAxios from "@/lib/api/use-axios";
import { useSession } from "next-auth/react";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

const UserInfo = () => {
  const axios = useAxios();
  const { data: session, update } = useSession();
  const nameRef = useRef<HTMLInputElement>(null);

  const onUpdateHandler = async (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current!.value;
    if (name.length < 3) {
      alert("Name should be more than 3 characters");
    }
    const prom = axios.patch("/auth/update-user-info", { name });
    toast.promise(prom, {
      loading: "Updating...",
      success: "Profile updated",
      error: "Something went wrong",
    });
    const res = await prom;
    update({
      ...session,
      user: {
        ...session?.user,
        name: res.data.name,
      },
    });
    console.log("res : ", res.data);
  };

  return (
    <div className="py-10">
      <p className="text-center text-xl font-semibold">Profile</p>
      <form className="max-w-[400px] mx-auto flex flex-col">
        <Label inputLabel="Name" className="mt-3" />
        <Input
          defaultValue={session?.user.name}
          ref={nameRef}
          placeholder="Enter name"
        />
        <Label inputLabel="Email" className="mt-3" />
        <Input value={session?.user.email} disabled />
        <Button className="mx-0 mt-4" onClick={onUpdateHandler}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserInfo;
