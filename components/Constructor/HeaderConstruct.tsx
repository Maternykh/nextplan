import { setColor } from "@/Redux/slices/constructDaySlice";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { colorsMap } from "@/constants";
import React, { FC, useEffect, useRef, useState } from "react";

const HeaderConstruct: FC = () => {
  const [popCol, setPopCol] = useState<boolean>(false);
  const { color } = useAppSelector((state: RootState) => state.addDay);
  const onClickColor = (selectedcolor: string) => {
    dispatch(setColor(selectedcolor));
    setPopCol(false);
  };
  const dispatch = useAppDispatch();
  const colorRef = useRef<HTMLElement>(null);
  const handleclick = (event: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(event.target as Node)) {
      setPopCol(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleclick);
  }, []);
  return (
    <section className=" relative">
      <div className=" flex flex-wrap justify-between items-center mb-2">
        <h1 className=" font-bold text-xl">Constructor days</h1>
        <section className=" flex">
          <section className=" flex overflow-hidden items-center mr-2">
            <div className=" rounded-l-xl border-2 border-orange-400 bg-orange-400 py-2 xl:px-8 px-6"></div>
            <div className=" border-2 border-red-400 bg-red-400 py-2 xl:px-8 px-6"></div>
            <div className=" border-2 border-green-400 bg-green-400 py-2 px-6 xl:px-8 "></div>
            <div className=" border-2 border-blue-400 bg-blue-400 py-2 xl:px-8 px-6"></div>
            <div className=" border-2 border-yellow-400 bg-yellow-400 py-2 px-6 xl:px-8 "></div>
            <div className=" rounded-r-xl border-2 border-indigo-400 px-6 bg-indigo-400 py-2 xl:px-8 "></div>
          </section>
          <button
            onClick={() => setPopCol(!popCol)}
            className={` ${
              "border-" + color + "-400"
            } hover:cursor-pointer flex justify-center items-center w-6 h-6 border-2  p-1 rounded-full `}
          >
            <div
              className={`${"bg-" + color + "-400"} p-2 rounded-full `}
            ></div>
          </button>
        </section>
      </div>
      {popCol && (
        <section
          ref={colorRef}
          className={` ${
            "border-" + color + "-400"
          } border-2 grid grid-cols-3 gap-1 p-1 absolute bg-white right-0 xl:top-8 top-14 rounded-xl z-20`}
        >
          {colorsMap.map((colormap, index) => (
            <button
              onClick={() => onClickColor(colormap.namecol)}
              key={index}
              className={` p-5 rounded-xl ${colormap.backgroundcol}`}
            ></button>
          ))}
        </section>
      )}
    </section>
  );
};

export default HeaderConstruct;
