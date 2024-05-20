import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    roles: {
      id: string;
      role: string;
      userId: string;
    }[];
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}
