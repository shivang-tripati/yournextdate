// hooks/useSocket.js
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io(); // Assuming the server runs on the same host/port

export const useSocket = (userId) => {
  useEffect(() => {
    socket.emit('join', userId);

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const sendMessage = (receiverId, messageText) => {
    socket.emit('send_message', { senderId: userId, receiverId, messageText });
  };

  const onReceiveMessage = (callback) => {
    socket.on('receive_message', callback);
  };

  return { sendMessage, onReceiveMessage };
};
