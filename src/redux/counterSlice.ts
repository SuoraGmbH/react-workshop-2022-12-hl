import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
// counterSlice.caseReducers.increment();
// counterSlice.actions.increment;

export default counterSlice.reducer;
