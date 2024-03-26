"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { IoIosToday } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { TbGridPattern } from "react-icons/tb";

const MobileHeader: FC = () => {
  interface linkType {
    icon: ReactElement;
    path: string;
  }
  const pathname = usePathname();
  const links: linkType[] = [
    {
      icon: <FaHome className=" flex justify-center items-center " />,
      path: "/",
    },
    {
      icon: <IoIosToday className=" flex justify-center items-center " />,
      path: `/day?monthAndYears=1`,
    },
    {
      icon: <LuCalendarDays className=" flex justify-center items-center " />,
      path: "/calendar",
    },
    {
      icon: <TbGridPattern className=" flex justify-center items-center " />,
      path: "/pattern",
    },
    {
      icon: <HiViewGridAdd className=" flex justify-center items-center " />,
      path: "/day/add",
    },
    {
      icon: (
        <MdOutlineAddToPhotos className=" flex justify-center items-center " />
      ),
      path: "/purps/add",
    },
  ];

  return (
    <nav className=" bg-white w-screen justify-between fixed xl:hidden bottom-0 flex p-1">
      {links.map((link) => (
        <Link
          href={link.path}
          className={` ${
            pathname === link.path.split("?")[0]
              ? " text-orange-500 border-orange-500"
              : " text-gray-400 border-transparent"
          } text-2xl border-2 rounded-xl p-2`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MobileHeader;
