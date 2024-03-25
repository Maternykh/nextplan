"use server";
import { Day } from "@/lib/models/day.model";
import { connectToDB } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();
    const day = await Day.find({ _id: params.id });
    return NextResponse.json(day);
  } catch (err) {
    console.log(err);
  }
}
