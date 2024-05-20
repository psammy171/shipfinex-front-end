import { Role } from "@/types/role";
import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceType = {
  loading: boolean;
  users: User[];
};

const initialState: SliceType = {
  loading: true,
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<User[]>) => {
      (state.loading = false), (state.users = action.payload);
    },

    addRole: (
      state,
      action: PayloadAction<{ userId: string; roles: Role[] }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          user.roles = [...user.roles, ...action.payload.roles];
        }
        return user;
      });
    },

    removeRole: (
      state,
      action: PayloadAction<{ userId: string; roleIds: string[] }>
    ) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          user.roles = user.roles.filter(
            (role) => !action.payload.roleIds.includes(role.id)
          );
        }
        return user;
      });
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
