import Link from "next/link";
import React, { FC } from "react";
import { RiEditFill } from "react-icons/ri";
import { AlertDialogDemo } from "./AlertDialogDemo";
import { dayTypeWithId } from "@/Types/DayType";
import { CopyButtonDay } from "./CopyButtonDay";

const Fulldaymenage: FC<{ day: dayTypeWithId }> = ({ day }) => {
  return (
    <section className=" mt-2 flex justify-end">
      <CopyButtonDay id={day._id} />
      <Link
        href={`/day/edit/${day._id}`}
        className=" border-orange-500 bg-white rounded-xl border-2 p-2 mr-2"
      >
        <RiEditFill className=" text-orange-500 text-xl" />
      </Link>
      <AlertDialogDemo _id={day._id} monthAndYears={day.monthAndYears} />
    </section>
  );
};

export default Fulldaymenage;
