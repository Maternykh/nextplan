import { setMonthAndYears } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { monthsAndYears } from "@/constants";
import React, { FC, useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const MonthConstruct: FC = () => {
  const dispatch = useAppDispatch();
  const [monthIndex, setMonthIndex] = useState<number>(0);
  const monthAndYears = useAppSelector(
    (state: RootState) => state.addDay.monthAndYears
  );
  useEffect(() => {
    dispatch(setMonthAndYears(monthIndex + 1));
  }, [monthIndex]);
  const onClickPrev = () => {
    if (monthIndex > 0) {
      setMonthIndex(monthIndex - 1);
    }
  };
  const onClickNext = () => {
    if (monthIndex !== monthsAndYears.length - 1) {
      setMonthIndex(monthIndex + 1);
    }
  };

  return (
    <section className=" mb-2 w-full">
      <div
        className={` w-full justify-between  flex items-center p-1 border-2 border-gray-200 bg-white rounded-xl `}
      >
        <button
          onClick={() => onClickPrev()}
          className=" mr-2 flex justify-center items-center p-2 border-2 border-gray-200 rounded-xl"
        >
          <MdOutlineKeyboardArrowLeft className=" text-xl " />
        </button>
        <p className=" ">{monthsAndYears[monthAndYears - 1]}</p>
        <button
          onClick={() => onClickNext()}
          className=" ml-2 flex justify-center items-ce p-2 border-2 border-gray-200 rounded-xl"
        >
          <MdOutlineKeyboardArrowRight className=" text-xl " />
        </button>
      </div>
    </section>
  );
};

export default MonthConstruct;
