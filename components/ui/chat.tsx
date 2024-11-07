"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const socket = io();

interface Message {
  senderId: string;
  receiverId: string;
  messageText: string;
  createdAt: string;
}

interface ChatProps {
  userId: string | undefined;
  otherUserId: string;
}

const Chat: React.FC<ChatProps> = ({ userId, otherUserId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (userId && otherUserId) {
        const { data } = await axios.get(
          `/api/messages?senderId=${userId}&receiverId=${otherUserId}`
        );
        setMessages(data);
      }
    };

    fetchMessages();
  }, [userId, otherUserId]);

  useEffect(() => {
    const handleMessage = (message: Message) => {
      if (message.senderId === userId || message.receiverId === userId) {
        setMessages((prevMessages) => {
          // Avoid adding duplicate messages
          if (
            !prevMessages.some((msg) => msg.createdAt === message.createdAt)
          ) {
            return [...prevMessages, message];
          }
          return prevMessages;
        });
      }
    };

    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!userId || !messageText.trim()) return;

    const message = {
      senderId: userId,
      receiverId: otherUserId,
      messageText,
      createdAt: new Date().toISOString(),
    };

    try {
      socket.emit("send_message", message);
      setMessages((prevMessages) => [...prevMessages, message]); // Add message locally
      setMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.senderId === userId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg shadow ${
                msg.senderId === userId
                  ? "bg-pink-400 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <p>{msg.messageText}</p>
              <span className="text-xs text-gray-500">
                {new Date(msg.createdAt).toLocaleTimeString("en-US")}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t flex items-center relative">
        <button
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="mr-2 p-2 bg-gray-200 rounded-full"
        >
          😊
        </button>
        {showEmojiPicker && (
          <div className="absolute bottom-16 left-4 z-10">
            <Picker
              data={data}
              onEmojiSelect={(e: any) => setMessageText(messageText + e.native)}
              onClickOutside={() => setShowEmojiPicker(false)}
            />
          </div>
        )}
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
