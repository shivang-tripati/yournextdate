"use client";

import { useState, useEffect } from "react";
import Chat from "./ui/chat";
import axios from "axios";
import useAuthStore from "@/hooks/user-auth-store";
import Image from "next/image";

interface User {
  id: string;
  name: string;
  city: string;
  nearBy: string;
}

const Messages: React.FC = () => {
  const [activeUser, setActiveUser] = useState<string | null>(null);
  const [contacts, setContacts] = useState<User[]>([]);
  const { user } = useAuthStore();
  const userId = user?.id; // Replace with the authenticated user's ID

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await axios.get(`/api/users/nearby?city=${user?.city}`);
      setContacts(data);
    };

    fetchContacts();
  }, [user?.city]);

  return (
    <div className="flex h-screen">
      <div className="md:w-1/3 p-4 border-r bg-gray-200">
        <h2 className="text-xl font-semibold mb-4">NearBy Users</h2>
        <div className="space-y-4 justify-between">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveUser(contact.id)}
              className="flex items-center w-full p-2 bg-white rounded-lg shadow hover:bg-gray-100"
            >
              <Image
                src="https://th.bing.com/th/id/OIP.JBpgUJhTt8cI2V05-Uf53AHaG1?w=198&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-medium">{contact.name}</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 flex flex-col">
        {activeUser ? (
          <Chat userId={userId} otherUserId={activeUser} />
        ) : (
          <div className="flex items-center justify-center flex-1 text-gray-500">
            Select a conversation
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
