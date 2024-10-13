// app/api/userExists/route.js
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/(models)/User"; // Asegúrate de que esta importación sea correcta
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error during user lookup:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}