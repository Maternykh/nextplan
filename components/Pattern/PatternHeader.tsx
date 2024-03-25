import { setColorPattern } from "@/Redux/slices/constructPattern";
import { RootState } from "@/Redux/store";
import { useAppDispatch, useAppSelector } from "@/Types/Redux";
import { colorsMap } from "@/constants";
import React, { FC, useEffect, useRef, useState } from "react";

const PatternHeader: FC = () => {
  const [popCol, setPopCol] = useState<boolean>(false);
  const { color } = useAppSelector((state: RootState) => state.addPattern);
  const onClickColor = (selectedcolor: string) => {
    dispatch(setColorPattern(selectedcolor));

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
      <div className=" flex justify-between items-center mb-2">
        <h1 className=" font-bold text-xl">Constructor patterns</h1>
        <section className=" flex">
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
          } border-2 grid grid-cols-3 gap-1 p-1 absolute bg-white right-0 top-8 rounded-xl z-20`}
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

export default PatternHeader;
