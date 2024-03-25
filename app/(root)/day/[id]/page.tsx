import { dayTypeWithId } from "@/Types/DayType";
import { HoverPlanChecker } from "@/components/Days/HoverPlanChecker";
import { getDay } from "@/lib/data";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import React, { FC } from "react";
import { MdCheck } from "react-icons/md";
import { monthsAndYears } from "@/constants";
import Fulldaymenage from "@/components/Days/Fulldaymenage";
const SingleDayPage: FC<{
  params: InferGetServerSidePropsType<typeof getServerSideProps>;
}> = async ({ params }) => {
  const { id } = params;
  const day: dayTypeWithId | undefined = await getDay(id);
  if (!!day) {
    return (
      <>
        <article className=" xl:flex mt-2">
          <section className=" xl:mb-0 mb-2 bg-white rounded-xl w-full xl:w-1/2 xl:mr-2 p-2 flex flex-col justify-between">
            <div>
              <header className=" flex justify-between items-center mb-2">
                <h1 className=" text-xl font-bold">{day.dayName}</h1>
                <div className=" flex">
                  <p className=" mr-2">{day.tascName}</p>
                  <div
                    className={` ${
                      "border-" + day.color + "-400"
                    } hover:cursor-pointer flex justify-center items-center w-6 h-6 border-2  p-1 rounded-full `}
                  >
                    <div
                      className={` ${
                        "bg-" + day.color + "-400"
                      } rounded-full p-2`}
                    ></div>
                  </div>
                </div>
              </header>
              <section
                className={` ${
                  "bg-" + day.color + "-400"
                } flex justify-center mb-2 p-2 rounded-xl w-1/2 xl:w-1/4 text-white font-bold`}
              >
                <p>{monthsAndYears[day.monthAndYears - 1]}</p>
              </section>
              <section className=" mb-2">
                <div className=" mt-2 flex flex-wrap gap-2 ">
                  {day.category.map((categ) => (
                    <p
                      className={` ${
                        "border-" + day.color + "-400"
                      } p-2 rounded-xl border-2 min-w-40`}
                      key={categ.id}
                    >
                      {categ.categ}
                    </p>
                  ))}
                </div>
              </section>
              <section>
                <div className=" flex items-center mb-2">
                  <h1 className=" font-bold">Note for this day</h1>
                </div>
                <p
                  className={` ${
                    "border-" + day.color + "-400"
                  } border-2 rounded-xl p-2 `}
                >
                  {day.note}
                </p>
              </section>
            </div>
            <section className=" flex flex-wrap text-gray-400 justify-end mt-2">
              {day.category.map((categ) => (
                <p className=" mr-2" key={categ.id}>
                  #{categ.categ}
                </p>
              ))}
              <HoverPlanChecker />
            </section>
          </section>
          <section className=" bg-white rounded-xl xl:w-1/2 w-full p-2">
            <h1 className=" font-bold text-lg">Events:</h1>
            <section className=" w-full">
              {day.events.map((ev, index) => (
                <button
                  className={`${
                    "border-" + day.color + "-400"
                  } w-full py-2 justify-between items-center my-2  flex border-2 rounded-xl`}
                  key={index}
                >
                  <div
                    className={` ${
                      "border-" + day.color + "-400"
                    } whitespace-nowrap px-2 flex items-center h-8 border-r-2`}
                  >
                    {ev.timeAct}
                  </div>
                  <div className=" mx-2">{ev.act}</div>
                  <div
                    className={`${
                      "border-" + day.color + "-400"
                    } px-2 flex items-center h-8 border-l-2  `}
                  >
                    <div
                      className={`${
                        !ev.isCompleted
                          ? " w-6 h-6 "
                          : ` ${"bg-" + day.color + "-400"}`
                      } border-2 rounded-full ${
                        "border-" + day.color + "-400"
                      }`}
                    >
                      {ev.isCompleted && (
                        <MdCheck className=" text-xl  text-white" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </section>
          </section>
        </article>
        <Fulldaymenage day={day} />
      </>
    );
  }
};

export default SingleDayPage;
