import React, { FC } from "react";
import HeadDay from "./HeadDay";
import DayPack from "./DayPack";

const AllDay: FC<{
  monthAndYears: string | string[] | undefined;
  search: string | string[] | undefined;
}> = ({ monthAndYears, search }) => {
  return (
    <main className=" bg-white xl:w-2/3 w-full xl:mr-2 p-2 rounded-xl mb-2 xl:mb-0">
      <HeadDay />
      <DayPack monthAndYears={monthAndYears} search={search} />
    </main>
  );
};

export default AllDay;
