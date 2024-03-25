import { configureStore } from "@reduxjs/toolkit";
import constructDaySlice from "./slices/constructDaySlice";
import copyDaySlice from "./slices/copyDaySlice";
import constructPurpSlice from "./slices/constructPurpSlice";
import constructPatternSlice from "./slices/constructPattern";

export const store = configureStore({
  reducer: {
    addDay: constructDaySlice,
    copyDay: copyDaySlice,
    addPurp: constructPurpSlice,
    addPattern: constructPatternSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
