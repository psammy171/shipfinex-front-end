"use client";

import { useState } from "react";
import Avatar from "./avatar";
import Password from "./password";
import UserInfo from "./user-info";

const Profile = () => {
  const tabs: { id: "user-info" | "avatar" | "password"; title: string }[] = [
    { id: "user-info", title: "Profile" },
    { id: "avatar", title: "Avatar" },
    { id: "password", title: "Password" },
  ];
  const [tab, setTab] = useState<"user-info" | "avatar" | "password">(
    "user-info"
  );

  const getTab = () => {
    switch (tab) {
      case "user-info":
        return <UserInfo />;
      case "avatar":
        return <Avatar />;
      case "password":
        return <Password />;
    }
  };

  return (
    <div className="mx-auto max-w-[800px] mt-[10%] border rounded overflow-hidden">
      <div className="border-b flex">
        {tabs.map((tabItem) => (
          <span
            key={tabItem.id}
            className={`py-2 px-5 border-r cursor-pointer transition-colors duration-300 ${
              tab === tabItem.id
                ? "bg-primary-700 text-white"
                : "hover:bg-primary-50"
            }`}
            onClick={() => setTab(tabItem.id)}
          >
            {tabItem.title}
          </span>
        ))}
      </div>
      <div className="p-2">{getTab()}</div>
    </div>
  );
};

export default Profile;
