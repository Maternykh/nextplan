"use server";
import { Purp } from "@/lib/models/purp.model";
import { connectToDB } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();
    const purp = await Purp.find({ _id: params.id });
    return NextResponse.json(purp);
  } catch (err) {
    console.log(err);
  }
}
