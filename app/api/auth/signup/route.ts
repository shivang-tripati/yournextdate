import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';



export async function POST(req: Request) {
  const { email, name, country, city, nearBy, gender, dateOfBirth, ideaPerson, password } = await req.json();

  if (!email || !name || !country || !city || !gender || !dateOfBirth || !ideaPerson || !password) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const dob = dateOfBirth.split('-');
    const date = new Date(dob[0], dob[1] - 1, dob[2]);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        country,
        city,
        nearBy,
        gender,
        dateOfBirth: date.toISOString(),
        passwordHash: hashedPassword,
      },
    });

    // Exclude the password hash from the returned user object
    const { passwordHash, ...userData } = user;
    
    return NextResponse.json(userData, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
