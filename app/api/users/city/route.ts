import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City is required' }, { status: 400 });
  }

  try {
    const cityUsers = await prisma.user.findMany({
      where: {
        city,
      },
    });

    return NextResponse.json(cityUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
