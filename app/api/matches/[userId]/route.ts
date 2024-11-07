// /app/api/matches/[userId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const userId = params.userId;

  const userResponses = await prisma.response.findMany({
    where: { userId },
  });

  const potentialMatches = await prisma.user.findMany({
    where: {
      id: { not: userId },
    },
    include: { responses: { include: { option: true } } },
  });

  const matches = potentialMatches.map((match) => {
    let score = 0;

    match.responses.forEach((response) => {
      const userResponse = userResponses.find(
        (ur) => ur.optionId === response.optionId
      );

      if (userResponse) {
        score += 1;
      }
    });

    return {
      user: match,
      score: (score / userResponses.length) * 100,
    };
  });

  matches.sort((a, b) => b.score - a.score);

  return NextResponse.json(matches, { status: 200 });
}
