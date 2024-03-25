import { colorType } from "@/Types/DayType";

export const colorsMap: colorType[] = [
  {
    namecol: "orange",
    bordercol: " border-orange-400",
    backgroundcol: " bg-orange-400",
  },

  {
    namecol: "blue",
    bordercol: " border-blue-400",
    backgroundcol: " bg-blue-400",
  },
  {
    namecol: "indigo",
    bordercol: " border-indigo-400",
    backgroundcol: " bg-indigo-400",
  },
  {
    namecol: "red",
    bordercol: " border-red-400",
    backgroundcol: " bg-red-400",
  },
  {
    namecol: "yellow",
    bordercol: " border-yellow-400",
    backgroundcol: " bg-yellow-400",
  },
  {
    namecol: "green",
    bordercol: " border-green-400",
    backgroundcol: " bg-green-400 ",
  },
];
export const casecolor = (color: string) => {
  switch (color) {
    case "orange":
      return "bg-orange-400";
    case "blue":
      return "bg-blue-400";
    case "gray":
      return "bg-gray-400";
    case "indigo":
      return "bg-indigo-400";
    case "indigo":
      return "bg-indigo-400";
    case "red":
      return "bg-red-400";
    case "green":
      return "bg-green-400";
  }
};
export const monthsAndYears: string[] = [
  "January-2024",
  "February-2024",
  "March-2024",
  "April-2024",
  "May-2024",
  "June-2024",
  "July-2024",
  "August-2024",
  "September-2024",
  "October-2024",
  "November-2024",
  "December-2024",
];
