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
  // console.log(users);

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
              key={user._id} // Use _id as the unique key for each user
              className={`chat-list-item ${
                selectedUser._id === user._id ? "active" : ""
              }`}
              onClick={() => onUserSelect(user)}
            >
              <div className="avatar-container">
                <Avatar
                  src={
                    user.profileImage ||
                    "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                  } // Ensure fallback if no profileImage
                  alt={user.firstName || user.name} // Display first name or name
                  circle
                  size="lg"
                />
              </div>
              <div className="user-info">
                <h3>
                  {user.firstName
                    ? `${user.firstName} ${user.lastName}`
                    : user.name}
                </h3>
                <p>{user.userType || "TEACHER"}</p>{" "}
                {/* Display user type or fallback */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;
