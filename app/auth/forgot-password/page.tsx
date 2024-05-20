import { Metadata } from "next";
import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Login | Unacero Technology",
  description: "Front end template for projects",
};

const ForgotPassword = () => {
  return <ForgotPasswordForm />;
};

export default ForgotPassword;
