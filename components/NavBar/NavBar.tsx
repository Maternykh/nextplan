"use client";
import React, { ReactElement, useState } from "react";
import { TbGridPattern } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosToday } from "react-icons/io";
const NavBar: React.FC = () => {
  interface linkType {
    icon: ReactElement;
    value: string;
    path: string;
  }

  const links: linkType[] = [
    {
      icon: <FaHome className=" flex justify-center items-center " />,
      value: "Home",
      path: "/",
    },
    {
      icon: <IoIosToday className=" flex justify-center items-center " />,
      value: "All Days",
      path: `/day?monthAndYears=1`,
    },
    {
      icon: <LuCalendarDays className=" flex justify-center items-center " />,
      value: "Calendar",
      path: "/calendar",
    },
    {
      icon: <TbGridPattern className=" flex justify-center items-center " />,
      value: "Patterns",
      path: "/pattern",
    },
    {
      icon: <HiViewGridAdd className=" flex justify-center items-center " />,
      value: "Add Day",
      path: "/day/add",
    },
    {
      icon: (
        <MdOutlineAddToPhotos className=" flex justify-center items-center " />
      ),
      value: "Add Purp",
      path: "/purps/add",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className=" hidden mx-2 xl:mb-0 mb-2 w-3/4 xl:flex  xl:justify-between items-center bg-white xl:px-8 xl:py-3 xl:rounded-full rounded-xl">
      {links.map((lin, index) => (
        <Link href={lin.path} key={index}>
          <div
            className={`${
              pathname === lin.path.split("?")[0]
                ? " text-orange-500"
                : "text-slate-800"
            } flex justify-center xl:justify-normal my-2 text-lg items-center`}
          >
            <div className=" flex justify-center items-center text-xl mr-1">
              {lin.icon}
            </div>
            <div className=" flex justify-center items-center">{lin.value}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
