import { purpTypeWithId } from "@/Types/DayType";
import { getPurps } from "@/lib/data";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const PurpPack: FC = async () => {
  const { userId }: { userId: string | null } = auth();
  const purps: purpTypeWithId[] | undefined = await getPurps(userId);
  if (purps?.length === 0) {
    return (
      <section className=" bg-white rounded-xl mt-2 p-2">
        <Image src={"/3.jpg"} alt="" width={500} height={500} />
      </section>
    );
  } else {
    return (
      <section className=" grid xl:grid-cols-3 grid-cols-2 gap-2 mt-2">
        {purps?.map((purp) => (
          <Link
            href={`/purps/${purp._id}`}
            key={purp._id}
            className=" bg-white rounded-xl p-2 flex flex-col justify-between"
          >
            <h1 className=" font-bold">{purp.title}</h1>
            <p>{purp.desc}</p>
            <section
              className={` ${
                purp.isCompleted ? " bg-green-500" : " bg-red-500"
              } p-1 rounded-full w-full text-center text-white`}
            >
              {purp.isCompleted ? "Completed" : "Incomplete"}
            </section>
          </Link>
        ))}
      </section>
    );
  }
};

export default PurpPack;
