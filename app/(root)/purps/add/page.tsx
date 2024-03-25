"use client";
import {
  setDescPurp,
  setIsCompletedPurp,
  setTitlePurp,
  setValuePurp,
} from "@/Redux/slices/constructPurpSlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { AccordionPurp } from "@/components/Purp/AccordionPurp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addPurp } from "@/lib/actions";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
const AddPurpPage: FC = () => {
  const { title, desc, value, isCompleted } = useAppSelector(
    (state: RootState) => state.addPurp
  );
  const dispatch = useAppDispatch();
  const { user } = useUser();
  const router = useRouter();
  const onClickAddPurp = () => {
    if (!!title && !!desc && !!value) {
      addPurp({ title, desc, value, isCompleted, owner: user?.id });
      router.push("/day?monthAndYears=1");
    }
  };
  return (
    <article className="mt-2">
      <section className="xl:flex">
        <section className=" bg-white rounded-xl xl:w-1/4 w-full p-2 mr-2 mb-2 xl:mb-0">
          <Input
            placeholder="Name purpose"
            className=" mb-2"
            value={title}
            onChange={(e) => dispatch(setTitlePurp(e.target.value))}
          />
          <Input
            placeholder="Description purpose"
            className=" mb-2"
            value={desc}
            onChange={(e) => dispatch(setDescPurp(e.target.value))}
          />
          <Textarea
            placeholder="Value purpose"
            className=" mb-2"
            value={value}
            onChange={(e) => dispatch(setValuePurp(e.target.value))}
          />
          <button
            onClick={() => dispatch(setIsCompletedPurp(!isCompleted))}
            className={` border-2 rounded-xl p-2 w-full text-sm ${
              isCompleted ? " border-green-500" : "border-red-500"
            }`}
          >
            {isCompleted ? "Completed" : "Incomplite"}
          </button>
        </section>
        <section className=" xl:w-3/4 w-full">
          <h1 className=" bg-white p-2 rounded-xl font-bold text-xl w-full mb-2">
            Purpose constructor
          </h1>
          <section className=" bg-white rounded-xl p-2 ">
            <AccordionPurp />
          </section>
        </section>
      </section>
      <Button
        onClick={() => onClickAddPurp()}
        variant={"outline"}
        className=" w-full mt-2"
      >
        Add Purpose
      </Button>
    </article>
  );
};

export default AddPurpPage;
