import Link from "next/link";
import React, { FC } from "react";
import { RiEditFill } from "react-icons/ri";
import { dayTypeWithId } from "@/Types/DayType";
import { AlertDialogPattern } from "./AlertDialogPattern";
import { CopyButtonPattern } from "../Days/CopyButtonPattern";

const FullPatternmenage: FC<{ pattern: dayTypeWithId }> = ({ pattern }) => {
  return (
    <section className=" mt-2 flex justify-end">
      <CopyButtonPattern id={pattern._id} />
      <Link
        href={`/pattern/edit/${pattern._id}`}
        className=" border-orange-500 bg-white rounded-xl border-2 p-2 mr-2"
      >
        <RiEditFill className=" text-orange-500 text-xl" />
      </Link>
      <AlertDialogPattern _id={pattern._id} />
    </section>
  );
};

export default FullPatternmenage;
