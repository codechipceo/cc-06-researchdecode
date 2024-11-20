import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import ChatArea from "./ChatArea";
import "./Chat.scss";

const users = [
  {
    id: 1,
    name: "ByeWind",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    online: true,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UX/UI Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    id: 3,
    name: "Alex Morgan",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    online: true,
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
  {
    id: 5,
    name: "James Lee",
    role: "Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    online: true,
  },
  {
    id: 6,
    name: "Alex Morgan",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    online: true,
  },
  {
    id: 7,
    name: "Emma Wilson",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
  {
    id: 8,
    name: "James Lee",
    role: "Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    online: true,
  },
];

const ChatContainer = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chatArea = document.getElementById("chat-area");
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setMessages([]);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: selectedUser.name, text: message },
      ]);

      setMessage("");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-container">
      <ChatList
        users={filteredUsers}
        selectedUser={selectedUser}
        onUserSelect={handleUserSelect}
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      {selectedUser && (
        <ChatArea
          user={selectedUser}
          message={message}
          onMessageChange={setMessage}
          onSendMessage={handleSendMessage}
          messages={messages}
        />
      )}
    </div>
  );
};

export default ChatContainer;
