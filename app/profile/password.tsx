import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import useAxios from "@/lib/api/use-axios";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import validator from "validator";

const Password = () => {
  const axios = useAxios();
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: FormEvent) => {
    e.preventDefault();
    const oldPassword = oldPasswordRef.current!.value;
    if (oldPassword.length === 0) {
      alert("Enter old password");
      return;
    }
    const password = newPasswordRef.current!.value;
    const isStringPassword = validator.isStrongPassword(password);
    if (isStringPassword) {
      const confirmPassword = confirmPasswordRef.current!.value;
      if (password === confirmPassword) {
        const prom = axios.patch("/auth/update-password", {
          oldPassword,
          newPassword: password,
        });
        toast.promise(prom, {
          loading: "Changing password",
          success: "Password updated",
          error: "Something went wrong",
        });
      } else alert("Password do not match.");
    } else {
      alert("Please enter valid password");
    }
  };

  return (
    <div className="py-10">
      <p className="text-center">Change Password</p>
      <form
        className="flex flex-col max-w-[400px] mx-auto"
        onSubmit={onChangeHandler}
      >
        <Label inputLabel="Old Password" />
        <Input
          placeholder="Enter old password"
          type="password"
          ref={oldPasswordRef}
        />
        <Label inputLabel="New Password" />
        <Input
          placeholder="Enter new password"
          type="password"
          ref={newPasswordRef}
        />
        <Label inputLabel="Confirm Password" />
        <Input
          placeholder="Confirm password"
          type="password"
          ref={confirmPasswordRef}
        />
        <Button className="mx-0 mt-4">Change Password</Button>
      </form>
    </div>
  );
};

export default Password;
