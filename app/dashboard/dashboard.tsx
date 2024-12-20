"use client";
import React from "react";
import Messages from "@/components/messages";
import Discover from "@/components/discover";
import Likes from "@/components/ui/likes";
// Component for displaying selected conversation

const DashboardPage = ({
  activeSection,
  userId,
}: {
  activeSection: string;
  userId: string;
}) => {
  return (
    <div>
      {activeSection === "#discover" && <Discover userId={userId} />}
      {activeSection === "#likes" && <Likes />}
      {activeSection === "#messages" && (
        <div className="messages-section flex">
          <div className="chat-box w-3/4 p-4">
            <Messages />
          </div>
        </div>
      )}
    </div>
  );
};

export { DashboardPage };
