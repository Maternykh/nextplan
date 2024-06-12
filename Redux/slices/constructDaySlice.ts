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

export const constructDaySlice = createSlice({
  name: "addDay",
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<dayType>) => {
      state.tascName = action.payload.tascName;
      state.dayName = action.payload.dayName;
      state.monthAndYears = action.payload.monthAndYears;
      state.color = action.payload.color;
      state.category = action.payload.category;
      state.events = action.payload.events;
      state.note = action.payload.note;
      state.pattern = action.payload.pattern;
    },
    setTascName: (state, actions: PayloadAction<string>) => {
      state.tascName = actions.payload;
    },
    setDayName: (state, actions: PayloadAction<string>) => {
      state.dayName = actions.payload;
    },
    setMonthAndYears: (state, actions: PayloadAction<number>) => {
      state.monthAndYears = actions.payload;
    },
    setColor: (state, actions: PayloadAction<string>) => {
      state.color = actions.payload;
    },
    addCategory: (state, actions: PayloadAction<categoryType>) => {
      state.category.push(actions.payload);
    },
    deleteCategory: (state, actions: PayloadAction<number>) => {
      state.category = state.category.filter(
        (obj) => obj.id !== actions.payload
      );
    },
    addEvents: (
      state,
      actions: PayloadAction<{ event: eventType; index: string }>
    ) => {
      if (actions.payload.index === "") {
        state.events.push(actions.payload.event);
      } else {
        state.events.splice(
          Number(actions.payload.index),
          0,
          actions.payload.event
        );
      }
    },
    deleteEvents: (state, actions: PayloadAction<number>) => {
      state.events = state.events.filter((obj) => obj.id !== actions.payload);
    },
    clearEvents: (state) => {
      state.events = [];
    },
    upheavalEvents: (state) => {
      state.events.map((el) => {
        el.isCompleted = !el.isCompleted;
      });
    },
    setNote: (state, actions: PayloadAction<string>) => {
      state.note = actions.payload;
    },
    setPattern: (state, actions: PayloadAction<string>) => {
      state.note = actions.payload;
    },
    setOwner: (state, actions: PayloadAction<string>) => {
      state.owner = actions.payload;
    },
    clearValues: (state) => {
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
  upheavalEvents,
  clearEvents,
  setTascName,
  setDayName,
  setMonthAndYears,
  setColor,
  addCategory,
  deleteCategory,
  addEvents,
  deleteEvents,
  setNote,
  setPattern,
  setOwner,
  clearValues,
  setDay,
} = constructDaySlice.actions;
export default constructDaySlice.reducer;
