"use client";
import { setCopyDay } from "@/Redux/slices/copyDaySlice";
import { useAppDispatch } from "@/Types/Redux";
import React, { FC } from "react";
import { IoCopy } from "react-icons/io5";
const CopyButton: FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setCopyDay(id))}
      className=" bg-white border-2 border-green-500 rounded-xl p-2 mr-2"
    >
      <IoCopy className=" text-green-500 text-xl" />
    </button>
  );
};

export default CopyButton;
