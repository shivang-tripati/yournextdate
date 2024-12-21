import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nearBy = searchParams.get('nearBy');

  if (!nearBy) {
    return NextResponse.json({ error: 'Nearby is required' }, { status: 400 });
  }

  try {
    const nearbyUsers = await prisma.user.findMany({
      where: {
        nearBy,
      },
    });

    return NextResponse.json(nearbyUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
