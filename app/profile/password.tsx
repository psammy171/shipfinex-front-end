import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";

const Password = () => {
  return (
    <div className="py-10">
      <p className="text-center">Change Password</p>
      <form className="flex flex-col max-w-[400px] mx-auto">
        <Label inputLabel="New Password" />
        <Input placeholder="Enter new password" type="password" />
        <Label inputLabel="Confirm Password" />
        <Input placeholder="Confirm password" type="password" />
        <Button className="mx-0 mt-4">Change Password</Button>
      </form>
    </div>
  );
};

export default Password;
