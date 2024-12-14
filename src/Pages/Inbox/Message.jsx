const Message = ({ message, isMine }) => {
  return (
    <div
      className={`message ${
        isMine === true ? "message-own" : "message-received"
      }`}
    >
      <div className='message-content'>{<p>{message?.content}</p>}</div>
    </div>
  );
};

export default Message;
