import { purpType } from "@/Types/DayType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: purpType = {
  title: "",
  desc: "",
  value: "",
  isCompleted: false,
  owner: "",
};

export const constructPurpSlice = createSlice({
  name: "addPurp",
  initialState,
  reducers: {
    setPurp: (state, actions: PayloadAction<purpType>) => {
      state.title = actions.payload.title;
      state.desc = actions.payload.desc;
      state.value = actions.payload.value;
      state.isCompleted = actions.payload.isCompleted;
      state.owner = actions.payload.owner;
    },
    setTitlePurp: (state, actions: PayloadAction<string>) => {
      state.title = actions.payload;
    },
    setDescPurp: (state, actions: PayloadAction<string>) => {
      state.desc = actions.payload;
    },
    setValuePurp: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
    setIsCompletedPurp: (state, actions: PayloadAction<boolean>) => {
      state.isCompleted = actions.payload;
    },
    setOwnerPurp: (state, actions: PayloadAction<string>) => {
      state.owner = actions.payload;
    },
  },
});

export const {
  setTitlePurp,
  setDescPurp,
  setValuePurp,
  setIsCompletedPurp,
  setOwnerPurp,
  setPurp,
} = constructPurpSlice.actions;
export default constructPurpSlice.reducer;
