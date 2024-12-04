import { Log } from "@rsuite/icons";
import React from "react";
import { Avatar } from "rsuite";
// import { format } from "date-fns";

const Message = ({ message, notOwn }) => {
  // console.log(message, notOwn);

  return (
    <div className={`message ${notOwn ? "message-received" : "message-own"}`}>
      {/* {!notOwn && (
        <Avatar
          src={message.sender.profileImage}
          alt={message.sender.name}
          circle
          size="sm"
          className="message-avatar"
        />
      )} */}
      <div className="message-content">
        {/* {message.type === "text" && <p>{message.text}</p>} */}
        {<p>{message.content}</p>}
        {/* {message.type === "photo" && <img src={message.url} alt="sent" />} */}
        {/* {message.type === "voice" && <audio controls src={message.url} />} */}
        {/* <span className="message-time">{message.createdAt}</span> */}
      </div>
    </div>
  );
};

export default Message;
