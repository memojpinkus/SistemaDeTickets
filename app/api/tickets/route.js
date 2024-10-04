import connectMongo from "@/app/lib/dbConnect";
import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectMongo();
    const ticketData = await request.json(); 
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error(error); 
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}

export async function GET(){
  await connectMongo();
  const tickets = await Ticket.find()
  return NextResponse.json({tickets});
}

export async function DELETE(request){
  const id = request.nextUrl.searchParams.get('id');
  await connectMongo();
  await Ticket.findByIdAndDelete(id)
  return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
}