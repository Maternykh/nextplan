"use server";
import { Day } from "./models/day.model";
import { Pattern } from "./models/pattern.model";
import { Purp } from "./models/purp.model";
import { connectToDB } from "./utils";

export const getDays = async (
  userOwner: string | null,
  monthAndYears: string | string[] | undefined,
  search: string | string[] | undefined
) => {
  try {
    const monthNum = Number(monthAndYears);
    connectToDB();
    if (!!search) {
      const days = await Day.find({
        owner: userOwner,
        monthAndYears: monthNum,
        dayName: { $regex: search, $options: "i" },
      });
      return days;
    } else {
      const days = await Day.find({
        owner: userOwner,
        monthAndYears: monthNum,
      });
      return days;
    }
  } catch (err) {
    console.log(err);
  }
};
export const getCalendar = async (userOwner: string | null) => {
  try {
    connectToDB();
    const days = await Day.find({ owner: userOwner });
    return days;
  } catch (err) {
    console.log(err);
  }
};
export const getDay = async (id: string) => {
  try {
    connectToDB();
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const day = await Day.findOne({ _id: id });
      return day;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPattern = async (id: string) => {
  try {
    connectToDB();
    const pattern = await Pattern.findById(id);
    return pattern;
  } catch (err) {
    console.log(err);
  }
};

export const getPatterns = async (userOwner: string | null) => {
  try {
    connectToDB();
    const patterns = await Pattern.find({ owner: userOwner });
    return patterns;
  } catch (err) {
    console.log(err);
  }
};
export const getPurp = async (id: string) => {
  try {
    connectToDB();
    const purp = await Purp.findById(id);
    return purp;
  } catch (err) {
    console.log(err);
  }
};

export const getPurps = async (userOwner: string | null) => {
  try {
    connectToDB();
    const purps = await Purp.find({ owner: userOwner });
    return purps;
  } catch (err) {
    console.log(err);
  }
};
