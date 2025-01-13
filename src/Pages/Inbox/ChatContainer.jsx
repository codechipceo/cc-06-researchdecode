import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useChat } from "../../Hooks/useChat"; // Assuming useChat is your custom hook
import ChatArea from "./ChatArea";
import ChatList from "./ChatList"; // Assuming ChatList is your child component
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { generateRoomId } from "../../Utils/utils";
import { useSockets } from "../../Hooks/useSockets";

// const socket = io("http://localhost:5000");



const ChatContainer = () => {
  /*
  ################################################################
          CONSTANTS
  ################################################################
  */
  const { supervisorId: activeUserId } = useParams();
  const loggedinUser = useSelector(selectStudentInfo);
  const roomId = generateRoomId(activeUserId, loggedinUser?._id);
  const senderId = loggedinUser?._id;
  const {socket } = useSockets()

  const { inbox, fetchInbox, fetchChatHistory, isLoading, isError } = useChat();


  /*
  ################################################################
          STATES
  ################################################################
  */
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  /*
  ################################################################
         HANDLER FUNCTIONS
  ################################################################
  */
  const handleMessage = (message) => {
    setMessages((prevMessages) => [message, ...prevMessages]);
  };

  const handleSendMessage = async () => {
    if (message && senderId && activeUserId) {
      const messageData = {
        sender: senderId,
        senderModel: "Student",
        recipient: activeUserId,
        recipientModel: selectedUser.userType == "USER" ? "Student" : "Profile",
        content: message,
        roomId,
      };

      socket.emit("chat", messageData);
      setMessage("");
    }
  };

  /*
  ################################################################
          USE EFFECTS
  ################################################################
  */

  useEffect(() => {
    const chatArea = document.getElementById("chat-area");
    if (chatArea) {
      chatArea.scrollTop = chatArea.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    fetchInbox();
  }, []);

  useEffect(() => {
    setMessages("");
    fetchChatHistory({ recepientId: activeUserId }).then((res) =>
      setChatHistory(res?.payload?.data)
    );
    const isUser = inbox?.filter((user) => user.userId === activeUserId);
    if (isUser.length > 0) {
      setSelectedUser(isUser[0]);
    }
  }, [activeUserId, inbox]);

  useEffect(() => {
    if (roomId) {
      socket.emit("joinRoom", roomId);
    }

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, [roomId]);

  return (
    <div className='chat-container'>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}

      <ChatList activeUserId={activeUserId} users={inbox} />

      {selectedUser ? (
        <ChatArea
          user={selectedUser}
          message={message}
          onMessageChange={setMessage}
          onSendMessage={handleSendMessage}
          messages={[...messages, ...chatHistory]}
        />
      ) : (
        "ClickUser profile to start conversation"
      )}
    </div>
  );
};

export default ChatContainer;
