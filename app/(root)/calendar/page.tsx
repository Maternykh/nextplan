import { dayTypeWithId } from "@/Types/DayType";
import { Button } from "@/components/ui/button";
import { getCalendar } from "@/lib/data";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const CalendarPage: FC = async () => {
  const { userId }: { userId: string | null } = auth();
  const days: dayTypeWithId[] | undefined = await getCalendar(userId);
  if (days?.length === 0) {
    return (
      <section className=" bg-white  mt-2 rounded-xl flex items-center flex-col">
        <div className="">
          <Image src={"/3.jpg"} alt="ada" width={600} height={600} />
        </div>
        <h1 className=" text-xl">You don't have days yet.</h1>
        <Link href={"/day?monthAndYears=1"} className=" my-5">
          <Button variant={"outline"} className=" xl:w-60 w-full">
            Comeback
          </Button>
        </Link>
      </section>
    );
  } else {
    return (
      <article className=" bg-white w-full rounded-xl p-2 mt-2 grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {days?.map((day) => (
          <Link
            href={`/day/${day._id}`}
            className={`${"bg-" + day.color + "-400"} mr-2 mb-2 p-1 rounded-xl`}
          >
            <h1 className=" bg-white p-1 rounded-full mb-1">{day.tascName}</h1>
            <div className=" bg-white p-1 rounded-full flex justify-between">
              <p>Tasks:</p>
              <p
                className={` w-6 h-6 ${
                  "bg-" + day.color + "-400"
                } rounded-full flex justify-center items-center`}
              >
                {day.events.length}
              </p>
            </div>
          </Link>
        ))}
      </article>
    );
  }
};

export default CalendarPage;
