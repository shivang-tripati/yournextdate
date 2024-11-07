import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { userId: string } }) {
  const { userId } = params;

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
    });
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  const { userId, ideaPerson, bio, profilePictureUrl } = await request.json();

  try {
    const profile = await prisma.profile.upsert({
      where: { userId },
      update: { ideaPerson, bio, profilePictureUrl },
      create: { userId, ideaPerson, bio, profilePictureUrl },
    });
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, ideaPerson, bio, profilePictureUrl, images } = await req.json();

  const updatedProfile = await prisma.profile.update({
    where: { userId: id },
    data: { ideaPerson, bio, profilePictureUrl, images },
  });

  return NextResponse.json(updatedProfile, { status: 200 });
}

