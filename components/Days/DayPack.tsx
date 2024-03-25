import { categoryType, dayTypeWithId } from "@/Types/DayType";
import { monthsAndYears } from "@/constants";
import { getDays } from "@/lib/data";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
const DayPack: FC<{
  monthAndYears: string | string[] | undefined;
  search: string | string[] | undefined;
}> = async ({ monthAndYears, search }) => {
  const { userId }: { userId: string | null } = auth();

  const days: dayTypeWithId[] | undefined = await getDays(
    userId,
    monthAndYears,
    search
  );
  if (days?.length === 0) {
    return (
      <section className=" flex justify-center items-center flex-col mt-8 xl:mb-0 mb-2">
        <div className=" flex justify-center">
          <Image src={"/2.jpg"} alt="" width={400} height={400} />
        </div>
        <h1 className=" text-center text-xl mt-[-50px]">
          You don't have days in this month yet!
        </h1>
        <p className="  text-gray-500 mb-32">
          go to the Add days page to add a day
        </p>
        <Link
          href={"/day/add"}
          className=" text-center bg-orange-500 p-2 rounded-xl w-full text-white font-bold"
        >
          Add Day
        </Link>
      </section>
    );
  }
  if (!!days) {
    return (
      <section className=" grid gap-2 xl:grid-cols-4 md:grid-cols-3 grid-cols-1">
        {days.map((day: dayTypeWithId) => (
          <Link
            href={`/day/${day._id}`}
            key={day._id}
            className={` ${
              "bg-" + day.color + "-400"
            } flex flex-col justify-between rounded-3xl py-3 px-4`}
          >
            <header>
              <h1 className=" font-bold">{day.tascName}</h1>
              <p className=" mb-2">{day.dayName}</p>
              <div className=" flex flex-wrap">
                {day.category.map((categ: categoryType) => (
                  <p
                    key={categ.id}
                    className=" bg-white p-1 rounded-xl mr-1 mb-1"
                  >
                    {categ.categ}
                  </p>
                ))}
              </div>
            </header>
            <footer>
              <div className=" flex bg-white p-1 justify-between items-center rounded-full mb-1">
                <p>Tasks:</p>
                <div
                  className={`  ${
                    "bg-" + day.color + "-400"
                  } rounded-full w-6 h-6 flex justify-center items-center`}
                >
                  {day.events.length}
                </div>
              </div>
              <p className=" flex justify-end">
                {monthsAndYears[day.monthAndYears - 1]}
              </p>
            </footer>
          </Link>
        ))}
      </section>
    );
  }
};

export default DayPack;
