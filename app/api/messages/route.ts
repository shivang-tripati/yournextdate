import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const senderId = searchParams.get("senderId");
  const receiverId = searchParams.get("receiverId");

  if (!senderId || !receiverId) {
    return NextResponse.json({ error: "SenderId and ReceiverId are required" }, { status: 400 });
  }

  try {
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }
        ]
      },
      orderBy: { createdAt: "asc" }
    });
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { senderId, receiverId, messageText } = await req.json();

  if (!senderId || !receiverId || !messageText) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const message = await prisma.message.create({
      data: { senderId, receiverId, messageText }
    });
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
