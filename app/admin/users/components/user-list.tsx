"use client";

import SearchIcon from "@/components/icons/search";
import Input from "@/components/ui/input";
import useAxios from "@/lib/api/use-axios";
import { useAppDispatcher, useAppSelector } from "@/store";
import { getUsers } from "@/store/users/user-actions";
import { useEffect, useState } from "react";
import UserComp from "./user-comp";

const UserList = () => {
  const axios = useAxios();
  const dispatch = useAppDispatcher();
  const [search, setSearch] = useState<string>("");
  const loading = useAppSelector((state) => state.users.loading);
  const userList = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers(axios));
  }, [axios, dispatch]);

  return (
    <div className="p-4">
      <p className="px-4 text-2xl font-semibold">All Users list</p>
      <div className="relative mt-2">
        <Input
          className="mx-4 w-28 pl-9 rounded-[20px] focus:w-64 focus:rounded-md peer"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="absolute w-5 h-5 top-3 left-7 text-gray-500 peer-focus:text-gray-800 transition-colors duration-300" />
      </div>
      {userList
        .filter((user) =>
          user.name
            .toLowerCase()
            .replaceAll(" ", "")
            .includes(search.toLowerCase().replaceAll(" ", ""))
        )
        .map((user) => (
          <UserComp key={user.id} user={user} />
        ))}
    </div>
  );
};

export default UserList;
