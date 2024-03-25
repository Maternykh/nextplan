"use client";
import React, { FC } from "react";
import HeaderConstruct from "@/components/Constructor/HeaderConstruct";
import NameConstruct from "@/components/Constructor/NameConstruct";
import MonthConstruct from "@/components/Constructor/MonthConstruct";
import CategoryConstruct from "@/components/Constructor/CategoryConstruct";
import NoteConstruct from "@/components/Constructor/NoteConstruct";
import EventsConstruct from "@/components/Constructor/EventsConstruct";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { RootState } from "@/Redux/store";
import { useUser } from "@clerk/nextjs/app-beta/client";
import { addDay } from "@/lib/actions";
import {
  clearValues,
  setDay,
  setOwner,
} from "@/Redux/slices/constructDaySlice";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const AddDayPage: FC = () => {
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
  } = useAppSelector((state: RootState) => state.addDay);
  const { dayid, patternid } = useAppSelector(
    (state: RootState) => state.copyDay
  );
  const { user } = useUser();
  const dispatch = useAppDispatch();
  if (user?.id) {
    dispatch(setOwner(user.id));
  }
  const router = useRouter();
  const onClickAddDay = () => {
    if (
      !!tascName &&
      !!dayName &&
      !!color &&
      !!note &&
      !!category &&
      !!events &&
      !!monthAndYears &&
      !!owner
    ) {
      addDay({
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
      router.push(`/day?monthAndYears=${monthAndYears}`);
    }
  };
  const onClickPastDay = async () => {
    const res = await fetch(`/api/day/${dayid}`);
    const data = await res.json();
    dispatch(setDay(data[0]));
  };
  const onClickPastPattern = async () => {
    const res = await fetch(`/api/pattern/${patternid}`);
    const data = await res.json();
    dispatch(setDay(data[0]));
  };
  return (
    <>
      <article className=" xl:flex my-2  ">
        <section className=" bg-white p-2 rounded-xl w-full xl:w-1/2 xl:mr-2 xl:mb-0 mb-2">
          {/*Цвета*/}
          <HeaderConstruct />
          {/*Название дня и число*/}
          <NameConstruct />
          {/*Месяц*/}
          <MonthConstruct />
          {/*Категории*/}
          <CategoryConstruct />
          {/*Заметка*/}
          <NoteConstruct />
        </section>
        <section className=" bg-white p-2 rounded-xl xl:w-1/2 w-full">
          <EventsConstruct />
          {/*События (to do list)*/}
        </section>
      </article>
      <section className=" xl:flex grid grid-cols-2 xl:gap-0 gap-2">
        <Button
          variant="destructive"
          onClick={() => dispatch(clearValues())}
          className="mr-2 xl:w-1/5 w-full"
        >
          Clear this day
        </Button>
        <Button
          onClick={() => onClickPastDay()}
          variant="outline"
          className=" xl:w-1/5 mr-2 w-full"
        >
          Paste the copied day
        </Button>
        <Button
          onClick={() => onClickPastPattern()}
          variant="outline"
          className=" xl:w-1/5 mr-2 w-full"
        >
          Paste the copied pattern
        </Button>
        <Button
          variant="outline"
          onClick={() => onClickAddDay()}
          className={` p-2 xl:w-2/5 w-full `}
        >
          Add Day
        </Button>
      </section>
    </>
  );
};

export default AddDayPage;
