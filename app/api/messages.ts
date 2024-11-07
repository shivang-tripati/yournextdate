// pages/api/messages.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { senderId, receiverId, messageText } = req.body;
    try {
      const message = await prisma.message.create({
        data: { senderId, receiverId, messageText },
      });
      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'GET') {
    const { senderId, receiverId } = req.query;
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            { senderId: senderId as string, receiverId: receiverId as string },
            { senderId: receiverId as string, receiverId: senderId as string }
          ]
        }
      });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
