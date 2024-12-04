import React, { useState, useEffect, useRef } from "react";
import { useChat } from "../../Hooks/useChat"; // Assuming useChat is your custom hook
import io from "socket.io-client";
import ChatList from "./ChatList"; // Assuming ChatList is your child component
import ChatArea from "./ChatArea";
import { Log } from "@rsuite/icons";

const socket = io("http://localhost:5000");

const ChatContainer = () => {
  const {
    inbox,
    fetchInbox,
    fetchChatHistory,
    sendMessageAction,
    isLoading,
    isError,
  } = useChat();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const prevInboxRef = useRef(); // Ref to store the previous inbox value
  const hasFetched = useRef(false); // Ref to track if data has been fetched

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [user, setUser] = useState([]);
  const senderId = JSON.parse(localStorage.getItem("studentInfo"))?._id;
  const senderModel = JSON.parse(localStorage.getItem("studentInfo"))?.userType;
  // console.log(senderModel);

  // Get sender ID from localStorage
  const recipientId = selectedUser._id; // The selected user's ID
  const roomId = [senderId, recipientId].sort().join("-"); // Unique room ID for the two users

  useEffect(() => {
    const chatArea = document.getElementById("chat-area");
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages]);

  // Run fetchInbox only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      await fetchInbox(); // Wait for the fetch to complete
      // console.log(inbox);
    };
    fetchData();
  }, []); // Only call once on mount (no dependency on fetchInbox)
  // console.log(inbox);

  // Log inbox only once after the first fetch
  useEffect(() => {
    if (!hasFetched.current && inbox && inbox.length > 0) {
      // Log inbox once after the first fetch
      hasFetched.current = true; // Set the flag to true so it doesn't log again
    }
  }, [inbox]); // Log when inbox is set for the first time

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  console.log(selectedUser);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    if (roomId) {
      console.log("Joining Room: ", roomId);
      socket.emit("joinRoom", roomId); // Join room
    }

    const handleMessage = (message) => {
      console.log("Received message: ", message);
      setMessages((prevMessages) => [message, ...prevMessages]);
      // Append new message to the end
    };

    socket.on("message", handleMessage);

    return () => {
      console.log("Cleaning up listeners for room: ", roomId);
      socket.off("message", handleMessage);
    };
  }, [roomId]);

  const handleSendMessage = async () => {
    if (message && senderId && recipientId) {
      // Check if not currently sending

      const modelSender = senderModel == "USER" ? "Student" : "Profile";
      const messageData = {
        sender: senderId,
        senderModel: modelSender,
        recipient: recipientId,
        recipientModel: selectedUser.userType == "USER" ? "Student" : "Profile",
        content: message,
      };

      socket.emit("chat", messageData);
      setMessage(""); // Clear input field
      // Reset flag after sending
    }
  };

  useEffect(() => {
    if (inbox.data) {
      // Filter the users based on the search query
      const filtered = inbox.data.filter(
        (user) =>
          user.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUser(filtered);

      // Set the first user as the default selected user if available
      if (filtered.length > 0) {
        setSelectedUser(filtered[0]); // Select the first user by default
      }
    }
  }, [inbox.data, searchQuery]);

  useEffect(() => {
    const fetchChatHistoryForUser = async () => {
      if (selectedUser._id) {
        // console.log(selectedUser._id);

        // Prepare the payload for the backend
        const payload = {
          recipientId: selectedUser._id, // Use the selected user's ID
        };

        // Fetch chat history for the selected user
        const chatHistory = await fetchChatHistory(payload); // Pass the payload to the fetchChatHistory function
        setChatHistory(chatHistory.payload.data);
        // console.log(chatHistory.payload.data);
        // Log the fetched chat history
      }
    };

    fetchChatHistoryForUser();
  }, [selectedUser]); // Run this effect when selectedUser changes
  // console.log(chatHistory);

  return (
    <div className="chat-container">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {/* Ensure inbox is an array before passing it to ChatList */}
      <ChatList
        users={user} // Use filtered users instead of inbox.data
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
          messages={[...messages, ...chatHistory]}
        />
      )}
    </div>
  );
};

export default ChatContainer;
