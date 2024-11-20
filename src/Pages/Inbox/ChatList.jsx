import React from "react";
import { Input, InputGroup, Avatar } from "rsuite";
import { BiSearch } from "react-icons/bi";

const ChatList = ({
  users,
  selectedUser,
  onUserSelect,
  onSearch,
  searchQuery,
}) => {
  return (
    <div className="chat-sidebar">
      <div className="sidebar-header">
        <h1>All Chats</h1>
      </div>

      <div className="search-container">
        <InputGroup>
          <InputGroup.Addon>
            <BiSearch size={20} />
          </InputGroup.Addon>
          <Input placeholder="Search" value={searchQuery} onChange={onSearch} />
        </InputGroup>
      </div>

      <div className="chat-list">
        {users.length === 0 ? (
          <div className="no-users-message">
            You have not started chatting with anyone yet.
          </div>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className={`chat-list-item ${
                selectedUser.id === user.id ? "active" : ""
              }`}
              onClick={() => onUserSelect(user)}
            >
              <div className="avatar-container">
                <Avatar src={user.avatar} alt={user.name} circle size="lg" />
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>{user.role}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;
