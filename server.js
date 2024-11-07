import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import { PrismaClient } from '@prisma/client';
import { Server } from 'socket.io';

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('send_message', async (message) => {
      try {
        await prisma.message.create({
          data: message,
        });
        io.emit('receive_message', message);
      } catch (error) {
        console.error('Error saving message to database:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
