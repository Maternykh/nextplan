import React, { FC } from "react";
import Search from "./Search";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MdOutlineWbSunny } from "react-icons/md";

const Account: FC = () => {
  return (
    <section className=" h-full flex bg-white p-2 rounded-full relative">
      <Search />
      <button className=" bg-gray-200 rounded-full px-3  h-[50px] flex justify-center items-center mr-2">
        <MdOutlineWbSunny className=" text-2xl flex justify-center items-center" />
      </button>
      <UserButton afterSignOutUrl="/sign-in" />
    </section>
  );
};

export default Account;
