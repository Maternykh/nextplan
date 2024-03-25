"use client";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import {
  clearValuesPattern,
  setDayPattern,
  setOwnerPattern,
} from "@/Redux/slices/constructPattern";
import { RootState } from "@/Redux/store";
import { putPattern } from "@/lib/actions";
import { useUser } from "@clerk/clerk-react";
import PatternHeader from "@/components/Pattern/PatternHeader";
import PatternName from "@/components/Pattern/PatternName";
import PatternMonth from "@/components/Pattern/PatternMonth";
import PatternCategory from "@/components/Pattern/PatternCategory";
import PatternNote from "@/components/Pattern/PatternNote";
import PatternEvents from "@/components/Pattern/PatternEvents";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";

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
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/pattern/${id}`);
      const data = await res.json();
      dispatch(setDayPattern(data[0]));
    };
    fetchData();
  }, []);
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
  const onClickUpdatePattern = () => {
    putPattern({
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
    router.push("/patterns");
  };
  return (
    <>
      <section className=" flex mt-2">
        <section className=" w-1/2 bg-white rounded-xl p-2 mr-2">
          <PatternHeader />
          <PatternName />
          <PatternMonth />
          <PatternCategory />
          <PatternNote />
        </section>
        <section className=" w-1/2 bg-white rounded-xl p-2 flex flex-col justify-end">
          <PatternEvents />
        </section>
      </section>
      <section className=" flex mt-2">
        <Button
          variant="destructive"
          onClick={() => dispatch(clearValuesPattern())}
          className="mr-2 w-1/5 "
        >
          Clear this Pattern
        </Button>
        <Button
          onClick={() => onClickPastDay()}
          variant="outline"
          className=" w-2/5 mr-2"
        >
          Paste the copied day
        </Button>
        <Button
          onClick={() => onClickPastPattern()}
          variant="outline"
          className=" w-2/5 mr-2"
        >
          Paste the copied pattern
        </Button>
        <Button
          variant="outline"
          onClick={() => onClickUpdatePattern()}
          className={` p-2 w-2/5 `}
        >
          Update Pattern
        </Button>
      </section>
    </>
  );
};

export default PatternForm;
