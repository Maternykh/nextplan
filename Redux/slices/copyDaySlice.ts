import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { dayid: string; patternid: string } = {
  dayid: "",
  patternid: "",
};

export const copyDaySlice = createSlice({
  name: "copyDay",
  initialState,
  reducers: {
    setCopyDay: (state, actions: PayloadAction<string>) => {
      state.dayid = actions.payload;
    },
    setCopyPattern: (state, actions: PayloadAction<string>) => {
      state.patternid = actions.payload;
    },
  },
});

export const { setCopyDay, setCopyPattern } = copyDaySlice.actions;
export default copyDaySlice.reducer;
