import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Avatar, Input, InputGroup } from "rsuite";
const ChatList = ({
  activeUserId,
  users,
  onSearch,
  searchQuery,
}) => {
  const navigate = useNavigate()
  return (
    <div className='chat-sidebar'>
      <div className='sidebar-header'>
        <h1>All Chats</h1>
      </div>

      <div className='search-container'>
        <InputGroup>
          <InputGroup.Addon>
            <BiSearch size={20} />
          </InputGroup.Addon>
          <Input
            placeholder='Search'
            value={searchQuery}
            onChange={() => onSearch()}
          />
        </InputGroup>
      </div>

      <div className='chat-list'>
        {users?.length === 0 ? (
          <div className='no-users-message'>
            You have not started chatting with anyone yet.
          </div>
        ) : (
          users?.map((user) => {
            const { name, role, model, userId } = user;
            return (
              <div
                key={userId}
                className={`chat-list-item ${
                  activeUserId === userId ? "active" : ""
                }`}
                onClick={() => navigate(`/inbox/${userId}`)}
              >
                <div className='avatar-container'>
                  <Avatar
                    src={
                      user.profileImage ||
                      "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                    }
                    alt={name}
                    circle
                    size='lg'
                  />
                </div>
                <div className='user-info'>
                  <h3>{name}</h3>
                  <p>{role}</p>{" "}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChatList;
