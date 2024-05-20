"use client";

import Button from "@/components/ui/button";
import Error from "@/components/ui/error";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Link from "@/components/ui/link";
import { axiosAuth } from "@/lib/api/axios";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";

const ForgotPasswordForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailErr, setEmailErr] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const email = emailRef.current!.value;
    if (email.length === 0) {
      emailRef.current!.focus();
      setEmailErr("Please enter email");
      return;
    }
    const isValidEmail = validator.isEmail(email);
    if (isValidEmail) {
      try {
        await axiosAuth.post("/forgot-password", {
          email,
        });
        toast.success("Email sent");
        //router.push("/auth/login");
      } catch (err) {
        toast.error("Something went wrong!");
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="pt-[10%]">
      <form
        className="max-w-sm border rounded-md shadow-md mx-auto"
        onSubmit={onSubmitHandler}
      >
        <p className="font-semibold text-primary-900 text-center text-2xl py-3 border-b">
          Forgot Password
        </p>
        <div className="p-4">
          <Label inputLabel="Email" className="mb-0" />
          <Input
            type={"email"}
            ref={emailRef}
            className="w-full"
            placeholder={"Enter email"}
            onFocus={() => setEmailErr("")}
          />
          {emailErr && <Error message={emailErr} />}
          <div className="mx-0 mt-5">
            <Button className="w-full m-0" loading={sending}>
              Send Password Reset Link
            </Button>
          </div>
          <p className="text-center mt-4">
            <Link href="/auth/login">back to login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
