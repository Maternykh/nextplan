"use server";
import { Pattern } from "@/lib/models/pattern.model";
import { connectToDB } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectToDB();
    const pattern = await Pattern.find({ _id: params.id });
    return NextResponse.json(pattern);
  } catch (err) {
    console.log(err);
  }
}
