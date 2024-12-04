import { Log } from "@rsuite/icons";
import React from "react";
import { Avatar } from "rsuite";

const Message = ({ message, isOwn }) => {
  console.log(message);

  return (
    <div className={`message ${isOwn ? "message-own" : "message-received"}`}>
      {isOwn && (
        <Avatar
          src={message.sender.avatar}
          alt={message.sender.name}
          circle
          size="sm"
          className="message-avatar"
        />
      )}
      <div className="message-content">
        {/* {message.type === "text" && <p>{message.text}</p>} */}
        {<p>{message.text}</p>}
        {message.type === "photo" && <img src={message.url} alt="sent" />}
        {message.type === "voice" && <audio controls src={message.url} />}
        <span className="message-time">{message.time}</span>
      </div>
    </div>
  );
};

export default Message;
