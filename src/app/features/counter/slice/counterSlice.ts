import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    deacrement: (state) => {
      state.value -= 1;
    },
  },
});

export const selectCounter = (state: RootState) => state.counter.value;

export const { increament, deacrement } = counterSlice.actions;

export default counterSlice.reducer;
