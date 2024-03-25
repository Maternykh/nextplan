"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, ReactElement } from "react";
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
  const pathname = usePathname();
  return (
    <nav className=" bg-white w-screen fixed xl:hidden bottom-0 flex justify-between p-3">
      {links.map((link) => (
        <Link
          href={link.path}
          className={` ${
            pathname === link.path ? " text-orange-500" : "text-black"
          } text-3xl`}
        >
          {link.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MobileHeader;
