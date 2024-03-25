"use client";
import { monthsAndYears } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const HeadDay: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const monthAndYears = searchParams.get("monthAndYears");
  const search = searchParams.get("search");
  const onClickPrev = (index: number) => {
    if (index > 1) {
      if (!!search) {
        router.push(`/day?monthAndYears=${index - 1}&search=${search}`);
      } else {
        router.push(`/day?monthAndYears=${index - 1}`);
      }
    }
  };
  const onClickNext = (index: number) => {
    if (index !== monthsAndYears.length) {
      if (!!search) {
        router.push(`/day?monthAndYears=${index + 1}&search=${search}`);
      } else {
        router.push(`/day?monthAndYears=${index + 1}`);
      }
    }
  };
  return (
    <div className=" xl:flex justify-between items-center mb-2">
      <h1 className=" font-bold text-xl xl:mb-0 mb-2">Upcoming Schedule</h1>
      {monthsAndYears.map((month, i) => {
        if (String(i + 1) === monthAndYears)
          return (
            <div key={i} className=" flex justify-between items-center">
              <button
                onClick={() => onClickPrev(i + 1)}
                className=" bg-gray-200 rounded-full p-1 text-xl mr-2 "
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
              <div className=" bg-gray-200 rounded-full py-1 px-3 w-full xl:w-40 text-center">
                {month}
              </div>
              <button
                onClick={() => onClickNext(i + 1)}
                className=" bg-gray-200 rounded-full p-1 text-xl ml-2"
              >
                <MdOutlineKeyboardArrowRight />
              </button>
            </div>
          );
      })}
    </div>
  );
};

export default HeadDay;
