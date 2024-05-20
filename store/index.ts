import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userSlice from "./users/user-slice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export default store;

export const useAppDispatcher: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
