import { User } from "@/types/user";
import { Axios } from "axios";
import toast from "react-hot-toast";
import { userActions } from "./user-slice";

export const getUsers = (axios: Axios) => {
  return async (dispatch: any) => {
    try {
      const res = await axios.get("/users");
      const data: User[] = res.data;
      dispatch(userActions.init(data));
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
};

export const addRole = (
  axios: Axios,
  userId: string,
  role: "ADMIN" | "SUPER_ADMIN"
) => {
  return async (dispatch: any) => {
    try {
      const promise = axios.post("/users/roles/add", {
        id: userId,
        role: role,
      });
      toast.promise(promise, {
        loading: "Updating roles!",
        success: "Roles updated",
        error: "Something went wrong! Try again",
      });
      const res = await promise;
      dispatch(
        userActions.addRole({
          userId,
          roles: res.data,
        })
      );
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
};

export const removeRole = (
  axios: Axios,
  userId: string,
  role: "ADMIN" | "SUPER_ADMIN"
) => {
  return async (dispatch: any) => {
    try {
      const promise = axios.post("/users/roles/remove", {
        id: userId,
        role: role,
      });
      toast.promise(promise, {
        loading: "Updating roles!",
        success: "Roles updated",
        error: "Something went wrong! Try again",
      });
      await promise;
      const roleIds = ["1"];
      if (role === "ADMIN") roleIds.push("2");
      dispatch(userActions.removeRole({ userId, roleIds }));
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
};
