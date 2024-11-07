// /app/api/likes/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import useAuthStore from '@/hooks/user-auth-store';
// Fetch likes
// Fetch likes

export async function GET(req: Request) {
    const userId = req.headers.get('user-id');
    console.log({ userId });
  
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
  
    try {
      const likesSent = await prisma.like.findMany({
        where: { senderId: userId },
        include: { receiver: true },
      });
  
      const likesReceived = await prisma.like.findMany({
        where: { receiverId: userId },
        include: { sender: true },
      });

      console.log({ likesSent, likesReceived });
  
      return NextResponse.json({ likesSent, likesReceived });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
    }
  }
  
  // Send a like
  export async function POST(req: Request) {
    const { senderId, receiverId } = await req.json();
  
    if (!senderId || !receiverId) {
      return NextResponse.json({ error: 'Sender and receiver IDs are required' }, { status: 400 });
    }
  
    try {
      const like = await prisma.like.create({
        data: { senderId, receiverId },
      });
  
      return NextResponse.json(like, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to send like' }, { status: 500 });
    }
  }
  