import { BiSend, BiVideo } from "react-icons/bi";
import { Avatar, IconButton, Input } from "rsuite";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";

const ChatArea = ({
  user,
  messages = [],
  message,
  onMessageChange,
  onSendMessage,
}) => {
  const loggedinUser = useSelector(selectStudentInfo);

  return (
    <div className='chat-area'>
      {/* Header Section */}
      <div className='chat-header'>
        <div className='user-info'>
          <Avatar
            src={
              user.profileImage ||
              "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
            }
            alt={user?.name}
            circle
            size='md'
          />
          <div>
            <h2>{user?.name}</h2>
            <p>{user?.role}</p>
          </div>
        </div>
        <IconButton

          icon={<BiVideo size={20} />}
          circle
          appearance='subtle'
        />
      </div>

      {/* Messages Section */}
      <div className='messages-area'>
        {messages
          .slice()
          .reverse()
          .map((msg, index) => (
            <Message
              key={index}
              message={msg}
           isMine = {msg.sender === loggedinUser?._id}
            />
          ))}
      </div>

      {/* Input Section */}
      <div className='message-input'>
        {/* Message Input */}
        <Input
          value={message}
          onChange={onMessageChange}
          placeholder='Type a message...'
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSendMessage();
            }
          }}
        />

        {/* Send Button */}
        <button className='send-button' onClick={onSendMessage}>
          <BiSend size={20} />
        </button>
      </div>
    </div>
  );
};
export default ChatArea;
