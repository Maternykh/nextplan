import { purpTypeWithId } from "@/Types/DayType";
import { getPurp } from "@/lib/data";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "next/dist/build/templates/pages";
import React, { FC } from "react";
import { AlertDialogPurpos } from "@/components/Purp/AlertDialogPurpose";
import Link from "next/link";
import { RiPencilLine } from "react-icons/ri";
const PurposePage: FC<{
  params: InferGetServerSidePropsType<typeof getServerSideProps>;
}> = async ({ params }) => {
  const { id } = params;
  const purp: purpTypeWithId | undefined = await getPurp(id);
  if (!!purp) {
    return (
      <article className=" mt-2  flex">
        <section className=" xl:w-1/4 w-full bg-white rounded-xl p-2 mr-2">
          <h1 className=" font-bold text-xl ">{purp.title}</h1>
          <p>{purp.desc}</p>
          <p>{purp.value}</p>
          <div
            className={` mt-2 text-center text-white p-1 rounded-full ${
              purp.isCompleted ? " bg-green-500" : " bg-red-500"
            }`}
          >
            {purp.isCompleted ? "Completed" : "Incomplete"}
          </div>
        </section>
        <section className=" flex flex-col">
          <AlertDialogPurpos _id={purp._id} />
          <Link
            href={`/purps/edit/${purp._id}`}
            className=" bg-white p-2 text-xl rounded-xl text-orange-500 flex items-center justify-center"
          >
            <RiPencilLine />
          </Link>
        </section>
      </article>
    );
  }
};

export default PurposePage;
