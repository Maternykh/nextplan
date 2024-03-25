import { addEvents, deleteEvents } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { eventType } from "@/Types/DayType";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import React, { FC, useState } from "react";
import { MdCheck } from "react-icons/md";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EventsConstruct: FC = () => {
  const { events, color } = useAppSelector((state: RootState) => state.addDay);
  const dispatch = useAppDispatch();
  const [idVal, setIdVal] = useState<number>(0);
  const [timeActVal, setTimeActVal] = useState<string>("");
  const [actVal, setActVal] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const OnClickAdd = () => {
    if (!!timeActVal && !!actVal) {
      let id = Math.random() * 10;
      const newEvent: eventType = {
        id: id,
        act: actVal,
        timeAct: timeActVal,
        isCompleted: isCompleted,
      };
      dispatch(addEvents(newEvent));
    }
  };
  const OnClickEvent = ({ id, timeAct, act, isCompleted }: eventType) => {
    setIdVal(id);
    setActVal(act);
    setTimeActVal(timeAct);
    setIsCompleted(isCompleted);
  };
  return (
    <section className=" flex flex-col justify-between h-full">
      <section>
        <h1 className=" text-center font-bold">Add Events</h1>
        <section className=" w-full">
          {events.map((ev, index) => (
            <button
              onClick={() => OnClickEvent(ev)}
              className={`${
                "border-" + color + "-400"
              } w-full py-2 justify-between items-center my-2  flex border-2 rounded-xl`}
              key={index}
            >
              <div
                className={` ${
                  "border-" + color + "-400"
                } whitespace-nowrap px-2 flex items-center h-8 border-r-2`}
              >
                {ev.timeAct}
              </div>
              <div className=" mx-2">{ev.act}</div>
              <div
                className={`${
                  "border-" + color + "-400"
                } px-2 flex items-center h-8 border-l-2  `}
              >
                <div
                  className={`${
                    !ev.isCompleted ? " w-6 h-6 " : ` ${"bg-" + color + "-400"}`
                  } border-2 rounded-full ${"border-" + color + "-400"}`}
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
      <section
        className={` w-full ${
          "border-" + color + "-400"
        } border-2 p-2 rounded-xl `}
      >
        <div className=" flex justify-between">
          <Input
            value={timeActVal}
            onChange={(e) => setTimeActVal(e.target.value)}
            type="text"
            placeholder="Enter time"
            className=" mr-2 xl:w-80 w-32"
          />
          <Input
            value={actVal}
            onChange={(e) => setActVal(e.target.value)}
            type="text"
            placeholder="Enter value event"
            className=" mr-2 xl:w-72 w-36"
          />
          <button
            onClick={() => setIsCompleted(!isCompleted)}
            className={` ${isCompleted ? "bg-" + color + "-400" : ""} ${
              "border-" + color + "-400"
            } hover:cursor-pointer w-10 h-10 border-2 rounded-full flex justify-center items-center`}
          >
            {isCompleted && <MdCheck className={` text-white text-2xl `} />}
          </button>
        </div>
        <div className=" flex">
          <Button
            variant="destructive"
            onClick={() => dispatch(deleteEvents(idVal))}
            className="  mr-2 p-2  w-1/2 mt-2 "
          >
            Delete Event
          </Button>
          <Button
            variant="secondary"
            onClick={() => OnClickAdd()}
            className=" p-2  w-1/2  mt-2"
          >
            Add Event
          </Button>
        </div>
      </section>
    </section>
  );
};

export default EventsConstruct;
