import React, { FC } from "react";
import { FcPlanner } from "react-icons/fc";
import NavBar from "../NavBar/NavBar";
import Account from "../Account/Account";
const Header: FC = () => {
  return (
    <header className=" xl:flex justify-between">
      <h1 className=" xl:mb-0 mb-2 xl:w-min w-full text-xl font-bold bg-white flex items-center justify-center xl:px-7 xl:py-3 py-1  rounded-full">
        <FcPlanner className=" text-4xl mr-3 flex items-center justify-center" />
        fitplan
      </h1>
      <NavBar />
      <Account />
    </header>
  );
};

export default Header;
