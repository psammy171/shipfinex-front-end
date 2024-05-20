"use client";

import Button from "@/components/ui/button";
import Error from "@/components/ui/error";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Link from "@/components/ui/link";
import { axiosAuth } from "@/lib/api/axios";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";

const SignUp = () => {
  const axios = axiosAuth;
  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [nameErr, setNameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [signingIn, setSigningIn] = useState<boolean>(false);

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (signingIn) return;
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    if (name.length === 0) {
      nameRef.current!.focus();
      setNameErr("Please enter name");
      return;
    }
    if (email.length === 0) {
      emailRef.current!.focus();
      setEmailErr("Please enter email");
      return;
    }
    if (password.length === 0) {
      passwordRef.current!.focus();
      setPasswordErr("Please enter password");
      return;
    }
    const isValidName = name.length >= 3;
    const isValidEmail = validator.isEmail(email);
    const isStrongPassword = validator.isStrongPassword(password);
    if (isValidName && isValidEmail && isStrongPassword) {
      setSigningIn(true);
      try {
        const res = await axios.post("/signup", {
          name,
          email,
          password,
        });
        toast.success("Successfully signed up!");
        router.push("/auth/login");
      } catch (err) {
        toast.error("Something went wrong! Please try again");
      } finally {
        setSigningIn(false);
      }
    } else {
      if (isValidName) {
        setNameErr("Name should be minimum 3 characters");
      }
      if (!isValidEmail) {
        setEmailErr("Please enter valid email");
      }
      if (!isStrongPassword) {
        setPasswordErr("Please enter valid password");
      }
    }
  };

  return (
    <div className="pt-[10%]">
      <form
        className="max-w-sm border rounded-md shadow-md mx-auto"
        onSubmit={signupHandler}
      >
        <p className="font-bold text-primary-900 text-center text-2xl py-3 border-b">
          Sign Up
        </p>
        <div className="p-4">
          <Label inputLabel="Name" className="mb-0" />
          <Input
            type={"text"}
            ref={nameRef}
            className="w-full"
            placeholder={"Enter name"}
            onFocus={() => setNameErr("")}
          />
          {nameErr && <Error message={nameErr} />}
          <Label inputLabel="Email" className="mb-0 mt-4" />
          <Input
            type={"email"}
            ref={emailRef}
            className="w-full"
            placeholder={"Enter email"}
            onFocus={() => setEmailErr("")}
          />
          {emailErr && <Error message={emailErr} />}
          <Label inputLabel="Password" className="mb-0 mt-4" />
          <Input
            type={"password"}
            ref={passwordRef}
            className="w-full"
            placeholder={"Enter password"}
            onFocus={() => setPasswordErr("")}
          />
          {passwordErr && <Error message={passwordErr} />}
          <div className="mx-0 mt-5">
            <Button className="w-full m-0" loading={signingIn}>
              Sign Up
            </Button>
          </div>
        </div>
        <p className="text-center mb-4 text-sm">
          Already registered?{"    "}
          <Link href="/auth/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
