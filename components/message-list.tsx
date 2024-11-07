import React from "react";

const MessageList = ({
  userId,
  conversations,
  onSelectConversation,
}: {
  userId: string;
  conversations: any[]; // Replace with your type
  onSelectConversation: (userId: string) => void;
}) => {
  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.userId}
            onClick={() => onSelectConversation(conversation.userId)}
          >
            {conversation.userName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
