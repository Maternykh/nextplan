import { ImageSwitcher } from "@/components/HomePage/ImageSwitcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
export default function Home() {
  const techs = [
    {
      icon: <SiNextdotjs />,
      title: "The React Framework for the Web",
    },
    {
      icon: <FaReact className=" text-sky-500" />,
      title: "React is a JavaScript library for building user interfaces",
    },
    {
      icon: <SiRedux className=" text-indigo-500" />,
      title: "Predictable state container for JavaScript apps",
    },
    {
      icon: <SiTailwindcss className=" text-sky-500" />,
      title: "Tailwind CSS is a utility-first CSS framework",
    },
    {
      icon: <DiMongodb className=" text-green-500" />,
      title: "MongoDB is a document-oriented database program",
    },
  ];
  return (
    <>
      <article className=" mt-2">
        <section className="bg-white rounded-xl py-10 px-2">
          <h1 className=" text-2xl font-bold text-center">
            Welcome to the planner website!
          </h1>
          <p className=" text-gray-400 text-center">
            here you can conveniently plan your days and organize your life
          </p>
        </section>
        <section className="bg-white rounded-xl my-2 p-2 xl:flex-row flex flex-col-reverse">
          <div className=" flex xl:justify-normal justify-center">
            <ImageSwitcher />
          </div>
          <section className=" w-full flex flex-col justify-between">
            <h1 className=" font-bold text-xl text-center w-full xl:my-0 my-2">
              Technology stack:
            </h1>
            <section className=" grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-2 mb-1">
              {techs.map((tech, i) => (
                <div
                  className=" p-5 border rounded-md flex flex-col items-center"
                  key={i}
                >
                  <h1 className="text-5xl mb-5">{tech.icon}</h1>
                  <p className=" text-sm text-center">{tech.title}</p>
                </div>
              ))}
            </section>
          </section>
        </section>
        <Link href={"/day?monthAndYears=1"}>
          <Button variant={"outline"} className=" w-full">
            Start
          </Button>
        </Link>
      </article>
    </>
  );
}
