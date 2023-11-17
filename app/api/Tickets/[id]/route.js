import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  console.log('GET ID RAN')
  try {
    const { id } = params

    const foundTicket = await Ticket.findOne({ _id: id });

    return NextResponse.json({ foundTicket }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
} 


export async function DELETE(req, { params }) {
  console.log('DELETE RAN');
  try {

    const { id } = params
    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: 'ticket Deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  console.log('PUT RAN');
  try {

    const { id } = params
    const body = await req.json()
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: 'ticket Updated', updateTicketData }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

