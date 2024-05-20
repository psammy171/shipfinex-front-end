"use client";

import store from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import SessionLoader from "./session-loader";

const Session = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <SessionLoader>{children}</SessionLoader>
      </SessionProvider>
    </Provider>
  );
};

export default Session;
