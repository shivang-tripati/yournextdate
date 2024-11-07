// /app/api/responses/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { userId, responses } = await req.json();

  const createResponses = responses.map((response: any) =>
    prisma.response.create({
      data: {
        userId,
        optionId: response.optionId,
      },
    })
  );

  await Promise.all(createResponses);

  return NextResponse.json({ message: 'Responses submitted successfully' }, { status: 201 });
}
