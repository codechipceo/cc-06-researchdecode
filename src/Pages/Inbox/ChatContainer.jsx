import React, { useState, useEffect, useRef } from "react";
import { useChat } from "../../Hooks/useChat"; // Assuming useChat is your custom hook
import ChatList from "./ChatList"; // Assuming ChatList is your child component
import ChatArea from "./ChatArea";
const ChatContainer = () => {
  const { inbox, fetchInbox, fetchChatHistory, isLoading, isError } = useChat();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const prevInboxRef = useRef(); // Ref to store the previous inbox value
  const hasFetched = useRef(false); // Ref to track if data has been fetched

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [user, setUser] = useState([]);

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

  // console.log(selectedUser);

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
        console.log(selectedUser._id);

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
  console.log(chatHistory);

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
          messages={[...chatHistory, ...messages]}
        />
      )}
    </div>
  );
};

export default ChatContainer;
