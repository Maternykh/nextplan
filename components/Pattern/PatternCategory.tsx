import { RootState } from "@/Redux/store";
import { categoryType } from "@/Types/DayType";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import React, { FC, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  addCategoryPattern,
  deleteCategoryPattern,
} from "@/Redux/slices/constructPattern";

const PatternCategory: FC = () => {
  const [categoryValue, setCategoryValue] = useState<string>("");
  const { category, color } = useAppSelector(
    (state: RootState) => state.addPattern
  );
  const dispatch = useAppDispatch();
  const onClickAddCategory = () => {
    if (!!categoryValue) {
      let id = Math.random() * 10;
      const newCateg: categoryType = {
        id: id,
        categ: categoryValue,
      };
      dispatch(addCategoryPattern(newCateg));
      setCategoryValue("");
    }
  };

  return (
    <>
      <div className=" flex flex-wrap">
        {category.map((categ: categoryType) => (
          <div
            className={` ${
              "border-" + color + "-400"
            } flex justify-between items-center min-w-40 xl:min-w-52 p-2 rounded-xl border-2 mr-2 mb-2 `}
            key={categ.id}
          >
            <p>{categ.categ}</p>
            <FaDeleteLeft
              onClick={() => dispatch(deleteCategoryPattern(categ.id))}
              className=" hover:cursor-pointer hover:text-red-600 text-black text-xl ml-2"
            />
          </div>
        ))}
      </div>
      <div className=" flex">
        <Input
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          type="text"
          placeholder="Enter categories value and click 'Add'"
          className=" w-2/3 mr-2"
        />
        <Button onClick={() => onClickAddCategory()} className=" w-1/3 ">
          Add
        </Button>
      </div>
    </>
  );
};

export default PatternCategory;
