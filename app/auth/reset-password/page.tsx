"use client";

import Button from "@/components/ui/button";
import Error from "@/components/ui/error";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { axiosAuth } from "@/lib/api/axios";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState<string>("");
  const [updating, setUpdating] = useState<boolean>(false);

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (updating) return;
    const password = passwordRef.current!.value;
    const confirmPassword = confirmPasswordRef.current!.value;
    if (!email || email?.length === 0 || !token || token?.length === 0) {
      toast.error("Invalid link");
      return;
    }
    if (password.length === 0) {
      passwordRef.current!.focus();
      setPasswordErr("Please enter password");
      return;
    }
    const isStrongPassword = validator.isStrongPassword(password);
    if (isStrongPassword && password === confirmPassword) {
      setUpdating(true);
      try {
        await axiosAuth.post("/reset-password", {
          email,
          token,
          newPassword: password,
        });
        router.push("/auth/login");
      } catch (err) {
        toast.error("Something went wrong!");
      } finally {
        setUpdating(false);
      }
    } else {
      if (!isStrongPassword) {
        setPasswordErr("Please enter valid password");
      }
      if (password !== confirmPassword) {
        setConfirmPasswordErr("Password should match");
      }
    }
  };

  return (
    <div className="pt-[10%]">
      <form
        className="max-w-sm border rounded-md shadow-md mx-auto"
        onSubmit={loginHandler}
      >
        <p className="font-semibold text-primary-900 text-center text-2xl py-3 border-b">
          Reset Password
        </p>
        <div className="p-4">
          <Label inputLabel="New Password" className="mb-0" />
          <Input
            type={"password"}
            ref={passwordRef}
            className="w-full"
            placeholder={"Enter new password"}
            onFocus={() => setPasswordErr("")}
          />
          {passwordErr && <Error message={passwordErr} />}
          <Label inputLabel="Confirm Password" className="mb-0 mt-4" />
          <Input
            type={"password"}
            ref={confirmPasswordRef}
            className="w-full"
            placeholder={"Re-enter password"}
            onFocus={() => setConfirmPasswordErr("")}
          />
          {confirmPasswordErr && <Error message={confirmPasswordErr} />}
          <div className="mx-0 mt-5">
            <Button className="w-full m-0" loading={updating}>
              Reset Password
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
