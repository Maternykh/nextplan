"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";
import { CiSearch } from "react-icons/ci";
const Search: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchParams = useSearchParams();
  const monthAndYears = searchParams.get("monthAndYears");
  const router = useRouter();
  const onClickSearch = () => {
    if (!!searchValue) {
      router.push(`/day?monthAndYears=${monthAndYears}&search=${searchValue}`);
    } else {
      router.push(`/day?monthAndYears=${monthAndYears}`);
    }
  };
  return (
    <div className=" relative w-full mr-2">
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search here..."
        type="text"
        className=" h-full w-full bg-gray-200 border-none rounded-full p-3 outline-none"
      />
      <button
        onClick={() => onClickSearch()}
        className=" text-gray-400 text-3xl absolute top-3 right-2"
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
