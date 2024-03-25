import { setDayName, setTascName } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import React, { FC } from "react";
import { Input } from "../ui/input";

const NameConstruct: FC = () => {
  const { tascName, dayName } = useAppSelector(
    (state: RootState) => state.addDay
  );
  const dispatch = useAppDispatch();
  return (
    <section className=" flex mb-2 ">
      <Input
        value={tascName}
        onChange={(e) => dispatch(setTascName(e.target.value))}
        type="text"
        placeholder="3 Sunday"
        className=" w-1/2 mr-2"
      />
      <Input
        value={dayName}
        onChange={(e) => dispatch(setDayName(e.target.value))}
        type="text"
        placeholder="Enter name day"
        className="  w-1/2"
      />
    </section>
  );
};

export default NameConstruct;
