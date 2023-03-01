import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
import timeEntriesSlice from "./timeEntriesSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      example: () => ({}),
      example2: () => ({}),
      count: counterSlice,
      timeEntries: timeEntriesSlice,
    },
  });
};

type Store = ReturnType<typeof createStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

// Export typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useCountSelector = () => {
//   return useAppSelector()
// }
