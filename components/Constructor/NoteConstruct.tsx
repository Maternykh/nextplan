import { setNote } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import React, { FC } from "react";
import { Textarea } from "../ui/textarea";

const NoteConstruct: FC = () => {
  const note = useAppSelector((state: RootState) => state.addDay.note);
  const dispatch = useAppDispatch();
  return (
    <Textarea
      value={note}
      onChange={(e) => dispatch(setNote(e.target.value))}
      placeholder="Add a note to your day"
      className=" w-full h-80 mt-2 p-2 "
    ></Textarea>
  );
};

export default NoteConstruct;
