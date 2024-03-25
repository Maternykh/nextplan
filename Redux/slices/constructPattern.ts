import { categoryType, dayType, eventType } from "@/Types/DayType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: dayType = {
  tascName: "",
  dayName: "",
  monthAndYears: 1,
  color: "orange",
  category: [],
  events: [],
  note: "",
  pattern: "",
  owner: "",
};

export const constructPatternSlice = createSlice({
  name: "addPattern",
  initialState,
  reducers: {
    setDayPattern: (state, action: PayloadAction<dayType>) => {
      state.tascName = action.payload.tascName;
      state.dayName = action.payload.dayName;
      state.monthAndYears = action.payload.monthAndYears;
      state.color = action.payload.color;
      state.category = action.payload.category;
      state.events = action.payload.events;
      state.note = action.payload.note;
      state.pattern = action.payload.pattern;
    },
    setTascNamePattern: (state, actions: PayloadAction<string>) => {
      state.tascName = actions.payload;
    },
    setDayNamePattern: (state, actions: PayloadAction<string>) => {
      state.dayName = actions.payload;
    },
    setMonthAndYearsPattern: (state, actions: PayloadAction<number>) => {
      state.monthAndYears = actions.payload;
    },
    setColorPattern: (state, actions: PayloadAction<string>) => {
      state.color = actions.payload;
    },
    addCategoryPattern: (state, actions: PayloadAction<categoryType>) => {
      state.category.push(actions.payload);
    },
    deleteCategoryPattern: (state, actions: PayloadAction<number>) => {
      state.category = state.category.filter(
        (obj) => obj.id !== actions.payload
      );
    },
    addEventsPattern: (state, actions: PayloadAction<eventType>) => {
      state.events.push(actions.payload);
    },
    deleteEventsPattern: (state, actions: PayloadAction<number>) => {
      state.events = state.events.filter((obj) => obj.id !== actions.payload);
    },
    setNotePattern: (state, actions: PayloadAction<string>) => {
      state.note = actions.payload;
    },
    setPatternPattern: (state, actions: PayloadAction<string>) => {
      state.note = actions.payload;
    },
    setOwnerPattern: (state, actions: PayloadAction<string>) => {
      state.owner = actions.payload;
    },
    clearValuesPattern: (state) => {
      state.tascName = "";
      state.dayName = "";
      state.monthAndYears = 1;
      state.color = "orange";
      state.category = [];
      state.events = [];
      state.note = "";
      state.pattern = "";
    },
  },
});

export const {
  setTascNamePattern,
  setDayNamePattern,
  setMonthAndYearsPattern,
  setColorPattern,
  addCategoryPattern,
  deleteCategoryPattern,
  addEventsPattern,
  deleteEventsPattern,
  setNotePattern,
  setPatternPattern,
  setOwnerPattern,
  clearValuesPattern,
  setDayPattern,
} = constructPatternSlice.actions;
export default constructPatternSlice.reducer;
