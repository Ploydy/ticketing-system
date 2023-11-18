/* import Ticket from "@/app/(models)/Ticket"; */
import { NextResponse } from "next/server";
import Ticket from '../../(models)/Ticket';

export async function GET(){
  console.log('GET RAN');
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200});
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500});
  }
}

export async function POST(req) {
  console.log('POST RAN');
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket Created" }, {status: 201});
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, {status: 500});
  }
}

