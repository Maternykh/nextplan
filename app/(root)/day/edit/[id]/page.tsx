"use client";
import { clearValues, setDay } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import CategoryConstruct from "@/components/Constructor/CategoryConstruct";
import EventsConstruct from "@/components/Constructor/EventsConstruct";
import HeaderConstruct from "@/components/Constructor/HeaderConstruct";
import MonthConstruct from "@/components/Constructor/MonthConstruct";
import NameConstruct from "@/components/Constructor/NameConstruct";
import NoteConstruct from "@/components/Constructor/NoteConstruct";
import { Button } from "@/components/ui/button";
import { putDay } from "@/lib/actions";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const EditDayPage: FC = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const {
    tascName,
    dayName,
    color,
    note,
    category,
    events,
    monthAndYears,
    pattern,
  } = useAppSelector((state: RootState) => state.addDay);
  const { dayid, patternid } = useAppSelector(
    (state: RootState) => state.copyDay
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/day/${id}`);
      const data = await res.json();
      dispatch(setDay(data[0]));
    };
    fetchData();
  }, []);
  const router = useRouter();
  const onClickUpdateDay = () => {
    putDay({
      _id: id,
      tascName,
      dayName,
      color,
      note,
      category,
      events,
      monthAndYears,
      pattern,
    });
    router.push(`/day?monthAndYears=${monthAndYears}`);
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
      <article className=" xl:flex my-2 ">
        <section className=" bg-white p-2 rounded-xl xl:w-1/2 w-full mr-2 mb-2 xl:mb-0">
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
      <section className="xl:flex grid grid-cols-2 xl:gap-0 gap-2 ">
        <Button
          variant="destructive"
          onClick={() => dispatch(clearValues())}
          className="mr-2 xl:w-1/5 w-full "
        >
          Clear this day
        </Button>
        <Button
          onClick={() => onClickPastDay()}
          variant="outline"
          className=" xl:w-1/5 w-full mr-2"
        >
          Paste the copied day
        </Button>
        <Button
          onClick={() => onClickPastPattern()}
          variant="outline"
          className="xl:w-1/5 w-full mr-2"
        >
          Paste the copied pattern
        </Button>
        <Button
          variant="outline"
          onClick={() => onClickUpdateDay()}
          className={` p-2 xl:w-2/5 w-full`}
        >
          Update Day
        </Button>
      </section>
    </>
  );
};

export default EditDayPage;
