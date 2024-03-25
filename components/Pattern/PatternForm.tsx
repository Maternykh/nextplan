"use client";
import React, { FC } from "react";
import { Button } from "../ui/button";
import PatternHeader from "./PatternHeader";
import PatternName from "./PatternName";
import PatternMonth from "./PatternMonth";
import PatternCategory from "./PatternCategory";
import PatternNote from "./PatternNote";
import PatternEvents from "./PatternEvents";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import {
  clearValuesPattern,
  setDayPattern,
  setOwnerPattern,
} from "@/Redux/slices/constructPattern";
import { RootState } from "@/Redux/store";
import { addPattern } from "@/lib/actions";
import { useUser } from "@clerk/clerk-react";

const PatternForm: FC = () => {
  const {
    tascName,
    dayName,
    color,
    note,
    category,
    events,
    monthAndYears,
    pattern,
    owner,
  } = useAppSelector((state: RootState) => state.addPattern);
  const { user } = useUser();
  const dispatch = useAppDispatch();
  if (user?.id) {
    dispatch(setOwnerPattern(user.id));
  }
  const { dayid, patternid } = useAppSelector(
    (state: RootState) => state.copyDay
  );
  const onClickPastDay = async () => {
    const res = await fetch(`/api/day/${dayid}`);
    const data = await res.json();
    dispatch(setDayPattern(data[0]));
  };
  const onClickPastPattern = async () => {
    const res = await fetch(`/api/pattern/${patternid}`);
    const data = await res.json();
    dispatch(setDayPattern(data[0]));
  };
  const onClickAddPattern = () => {
    addPattern({
      tascName,
      dayName,
      color,
      note,
      category,
      events,
      monthAndYears,
      pattern,
      owner,
    });
  };
  return (
    <section className=" xl:w-1/2 w-full bg-white rounded-xl p-2">
      <PatternHeader />
      <PatternName />
      <PatternMonth />
      <PatternCategory />
      <PatternNote />
      <PatternEvents />
      <section className=" xl:flex grid grid-cols-2 xl:gap-0 gap-2 mt-2">
        <Button
          variant="destructive"
          onClick={() => dispatch(clearValuesPattern())}
          className="mr-2 xl:w-1/5 w-full "
        >
          Clear this Pattern
        </Button>
        <Button
          onClick={() => onClickPastDay()}
          variant="outline"
          className=" xl:w-2/5 w-full mr-2"
        >
          Paste the copied day
        </Button>
        <Button
          onClick={() => onClickPastPattern()}
          variant="outline"
          className=" xl:w-2/5 w-full mr-2"
        >
          Paste the copied pattern
        </Button>
        <Button
          variant="outline"
          onClick={() => onClickAddPattern()}
          className={` p-2 xl:w-1/5 w-full `}
        >
          Add Pattern
        </Button>
      </section>
    </section>
  );
};

export default PatternForm;
