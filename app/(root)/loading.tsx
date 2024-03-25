import React, { FC } from "react";
import { TbLoader3 } from "react-icons/tb";
const Loading: FC = () => {
  return (
    <article className=" bg-white p-2 rounded-xl mt-2 flex justify-center items-center h-96">
      <TbLoader3 className=" animate-spin text-5xl text-orange-500" />
    </article>
  );
};

export default Loading;
