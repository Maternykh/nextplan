"use client";
import {
  setDescPurp,
  setIsCompletedPurp,
  setPurp,
  setTitlePurp,
  setValuePurp,
} from "@/Redux/slices/constructPurpSlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { AccordionPurp } from "@/components/Purp/AccordionPurp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { putPurp } from "@/lib/actions";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const EditPurp: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = params;
  const { title, desc, value, isCompleted } = useAppSelector(
    (state: RootState) => state.addPurp
  );
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/purp/${id}`);
      const data = await res.json();
      dispatch(setPurp(data[0]));
    };
    fetchData();
  }, []);
  const onClickUpdatePurp = () => {
    putPurp({
      _id: id,
      title,
      desc,
      value,
      isCompleted,
    });
    router.push("/day?monthAndYears=1");
  };
  return (
    <article className="mt-2">
      <section className="xl:flex">
        <section className=" bg-white rounded-xl xl:w-1/4 w-full p-2 xl:mr-2">
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
          <h1 className=" hidden xl:block bg-white p-2 rounded-xl font-bold text-xl w-full mb-2">
            Purpose constructor
          </h1>
          {/* <section className=" bg-white rounded-xl p-2 ">
            <AccordionPurp />
          </section> */}
        </section>
      </section>
      <Button
        onClick={() => onClickUpdatePurp()}
        variant={"outline"}
        className=" w-full mt-2"
      >
        Update Purpose
      </Button>
    </article>
  );
};

export default EditPurp;
