// backend/api/chat.js (or similar file)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface MessageParams {
    senderId: string;
    receiverId: string;
    messageText: string;
  }

export const saveMessage = async ({ senderId, receiverId, messageText }: MessageParams) => {
  await prisma.message.create({
    data: {
      senderId,
      receiverId,
      messageText,
    },
  });
};

// Call saveMessage inside your Socket.IO event handlers if you need to persist messages
