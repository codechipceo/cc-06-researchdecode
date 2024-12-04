import React, { useState } from "react";
import { Input, Avatar, IconButton } from "rsuite";
import {
  BiVideo,
  BiSend,
  BiImage,
  BiMicrophone,
  BiSmile,
} from "react-icons/bi";
import Message from "./Message";
import { Log } from "@rsuite/icons";
import EmojiPicker from "emoji-picker-react";

const ChatArea = ({
  user,
  messages = [],
  message,
  onMessageChange,
  onSendMessage,
}) => {
  // console.log(user._id);

  const [isRecording, setIsRecording] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Function to handle sending voice messages
  const handleSendVoiceMessage = () => {
    console.log("Voice message sent");
    setIsRecording(false);
    // Add voice message sending logic here
  };

  // Function to handle sending photos
  const handleSendPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Photo sent:", file);
      // Add photo sending logic here
    }
  };

  // // Function to handle emoji selection
  const onEmojiClick = (event, emojiObject) => {
    onMessageChange(message + emojiObject.emoji); // Append emoji to the message
    setShowEmojiPicker(false); // Close emoji picker
  };

  const handleVideoCall = () => {
    console.log("Video call started");
  };

  // console.log(user);

  return (
    <div className="chat-area">
      {/* Header Section */}
      <div className="chat-header">
        <div className="user-info">
          <Avatar
            src={
              user.profileImage ||
              "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
            }
            alt={user.name}
            circle
            size="md"
          />
          {user.online && <span className="online-indicator"></span>}
          <div>
            <h2>{user.firstName || user.name}</h2>
            <p>{user.role}</p>
          </div>
        </div>
        <IconButton
          onClick={handleVideoCall}
          icon={<BiVideo size={20} />}
          circle
          appearance="subtle"
        />
      </div>

      {/* Messages Section */}
      <div className="messages-area">
        {messages
          .slice()
          .reverse()
          .map((msg, index) => (
            <Message
              key={index}
              message={msg}
              notOwn={msg.sender != user._id}
            />
          ))}
      </div>

      {/* Input Section */}
      <div className="message-input">
        <div className="input-actions">
          {/* Emoji Picker */}
          <IconButton
            icon={<BiSmile size={20} />}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}

          {/* Photo Input */}
          <IconButton
            icon={<BiImage size={20} />}
            onClick={() => document.getElementById("photoInput").click()}
          />
          <input
            type="file"
            id="photoInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleSendPhoto}
          />

          {/* Voice Message */}
          <IconButton
            icon={<BiMicrophone size={20} />}
            onClick={() => {
              if (!isRecording) {
                console.log("Recording started");
                setIsRecording(true);
              } else {
                console.log("Recording stopped");
                handleSendVoiceMessage();
              }
            }}
          />
        </div>

        {/* Message Input */}
        <Input
          value={message}
          onChange={onMessageChange}
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSendMessage(); // Send message on Enter key
            }
          }}
        />

        {/* Send Button */}
        <button className="send-button" onClick={onSendMessage}>
          <BiSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
