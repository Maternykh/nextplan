"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { Day } from "./models/day.model";
import { categoryType, dayType, eventType, purpType } from "@/Types/DayType";
import { Purp } from "./models/purp.model";
import { Pattern } from "./models/pattern.model";

export const addDay = async ({
  tascName,
  dayName,
  events,
  monthAndYears,
  category,
  color,
  note,
  pattern,
  owner,
}: dayType) => {
  try {
    connectToDB();
    const newPost = new Day({
      tascName,
      dayName,
      events,
      monthAndYears,
      category,
      color,
      note,
      pattern,
      owner,
    });
    console.log(events);
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/");
  } catch (err) {
    return { error: "Something went wrong!" };
  }
};
export const addPattern = async ({
  tascName,
  dayName,
  events,
  monthAndYears,
  category,
  color,
  note,
  pattern,
  owner,
}: dayType) => {
  try {
    connectToDB();
    const newPost = new Pattern({
      tascName,
      dayName,
      events,
      monthAndYears,
      category,
      color,
      note,
      pattern,
      owner,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const addPurp = async ({
  title,
  desc,
  value,
  isCompleted,
  owner,
}: purpType) => {
  try {
    connectToDB();
    const newPost = new Purp({
      title,
      desc,
      value,
      isCompleted,
      owner,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deleteDay = async (_id: string) => {
  try {
    connectToDB();
    await Day.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deletePurp = async (_id: string) => {
  try {
    connectToDB();
    await Purp.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const deletePattern = async (_id: string) => {
  try {
    connectToDB();
    await Pattern.findByIdAndDelete(_id);
    console.log("deleted from db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const putDay = async ({
  _id,
  tascName,
  dayName,
  events,
  monthAndYears,
  category,
  color,
  note,
  pattern,
}: {
  _id: string | string[];
  tascName: string;
  dayName: string;
  events: eventType[];
  monthAndYears: number;
  category: categoryType[];
  color: string;
  note: string;
  pattern: string;
}) => {
  try {
    connectToDB();
    if (_id) {
      await Day.findOneAndUpdate(
        { _id: _id },
        {
          tascName: tascName,
          dayName: dayName,
          events: events,
          monthAndYears: monthAndYears,
          category: category,
          color: color,
          note: note,
          pattern: pattern,
        }
      );
      revalidatePath("/");
      revalidatePath("/calendar");
      console.log("updating to db");
    }
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const putPattern = async ({
  _id,
  tascName,
  dayName,
  events,
  monthAndYears,
  category,
  color,
  note,
  pattern,
}: {
  _id: string | string[];
  tascName: string;
  dayName: string;
  events: eventType[];
  monthAndYears: number;
  category: categoryType[];
  color: string;
  note: string;
  pattern: string;
}) => {
  try {
    connectToDB();
    if (!!_id) {
      await Pattern.findOneAndUpdate(
        { _id: _id },
        {
          tascName: tascName,
          dayName: dayName,
          events: events,
          monthAndYears: monthAndYears,
          category: category,
          color: color,
          note: note,
          pattern: pattern,
        }
      );
      revalidatePath("/");
      revalidatePath("/patterns");
      console.log("updating to db");
    }
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const putPurp = async ({
  _id,
  title,
  desc,
  value,
  isCompleted,
}: {
  _id: string | string[];
  title: string;
  desc: string;
  value: string;
  isCompleted: boolean;
}) => {
  try {
    connectToDB();
    if (_id) {
      await Purp.findOneAndUpdate(
        { _id: _id },
        {
          title: title,
          desc: desc,
          value: value,
          isCompleted: isCompleted,
        }
      );
      revalidatePath("/");
      revalidatePath("/calendar");
      console.log("updating to db");
    }
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
