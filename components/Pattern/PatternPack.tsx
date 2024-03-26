import { categoryType, dayTypeWithId } from "@/Types/DayType";
import { monthsAndYears } from "@/constants";
import { getPatterns } from "@/lib/data";
import Link from "next/link";
import React, { FC } from "react";

const PatternPack: FC = async () => {
  const patterns: dayTypeWithId[] | undefined = await getPatterns();
  if (patterns?.length === 0) {
    return <section>null</section>;
  } else {
    return (
      <section className=" bg-white rounded-xl p-2 xl:w-1/2 w-full mr-2 mb-2 xl:mb-2">
        <section className="  grid gap-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {patterns?.map((pattern: dayTypeWithId) => (
            <Link
              href={`/pattern/${pattern._id}`}
              key={pattern._id}
              className={` ${
                "bg-" + pattern.color + "-400"
              } flex flex-col justify-between rounded-3xl py-3 px-4`}
            >
              <header>
                <h1 className=" font-bold">{pattern.tascName}</h1>
                <p className=" mb-2">{pattern.dayName}</p>
                <div className=" flex flex-wrap">
                  {pattern.category.map((categ: categoryType) => (
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
                      "bg-" + pattern.color + "-400"
                    } rounded-full w-6 h-6 flex justify-center items-center`}
                  >
                    {pattern.events.length}
                  </div>
                </div>
                <p className=" flex justify-end">
                  {monthsAndYears[pattern.monthAndYears - 1]}
                </p>
              </footer>
            </Link>
          ))}
        </section>
      </section>
    );
  }
};

export default PatternPack;
