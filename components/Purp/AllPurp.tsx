import React, { FC } from "react";
import PurpPack from "./PurpPack";

const AllPurp: FC = () => {
  return (
    <article className=" xl:w-1/3 w-full ">
      <h1 className=" bg-white rounded-xl p-2 font-bold text-xl">
        All purposes
      </h1>
      <PurpPack />
    </article>
  );
};

export default AllPurp;
