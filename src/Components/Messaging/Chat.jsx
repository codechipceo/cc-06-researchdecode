import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConvo, selectChats } from "../../Features/Slices/chatSlice";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { useSockets } from "../../Hooks/useSockets";
import Peer from "peerjs";
import { useRef } from "react";
import { useNavigate}  from 'react-router-dom'

const Chat = ({ id }) => {
  const { socket } = useSockets();
  const dispatch = useDispatch();
  const loggedinUser = useSelector(selectStudentInfo);
  const chats = useSelector(selectChats);
  const [message, setMessage] = useState("");
  const [liveChats, setLiveChats] = useState([]);
  const navigate  = useNavigate()
  const roomId = `${loggedinUser._id}-${id}`;

  // peer js states
  const [myId, setMyId] = useState("");
  const [callId, setCallId] = useState(""); // State for storing the ID to call
  const [currentCall, setCurrentCall] = useState(null); // State to manage the current call

  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();

  // ####################################
  //          PEER JS
  // ####################################
  const callModal = () => {
}


  // ####################################
  //          USE EFFECT HOOKS
  // ####################################
  useEffect(() => {
    socket.emit("joinRoom", roomId);
    return () => {
      socket.emit("leaveroom", roomId);
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const modifiedChats = [...chats];

    setLiveChats(modifiedChats?.reverse());
  }, [chats]);

  useEffect(() => {
    socket.on("message", (params) => {
      const newMessages = [...liveChats, params];
      setLiveChats(newMessages);
    });
  }, [liveChats, socket]);

  useEffect(() => {
    dispatch(getConvo({ senderId: loggedinUser._id, recepientId: id }));
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    const payload = {
      roomId: roomId,
      content: message,
      sender: loggedinUser._id,
      senderModel: "Student",
      recipient: id,
      recipientModel: "Profile",
    };
    socket.emit("chat", payload);
    setMessage("");
  };

  return (
    <Paper
      sx={{
        padding: "",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
      elevation={0}
    >
      <Typography
        variant='h5'
        component='div'
        sx={{ marginBottom: "20px" }}
      ></Typography>
      <List sx={{ flex: 1, overflow: "auto", marginBottom: "20px" }}>
        {chats &&
          [...liveChats].map((msg) => {
            return (
              <Box key={msg._id}>
                <ListItem
                  key={msg._id}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      msg.sender === loggedinUser._id
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <ListItemText
                    primary={msg.content}
                    secondary={msg.sender === loggedinUser._id ? "You" : "User"}
                    sx={{
                      bgcolor:
                        msg.sender === loggedinUser._id ? "#dcf8c6" : "#9fc5e8",
                      borderRadius: "10px",
                      padding: "10px",
                      maxWidth: "75%",
                    }}
                  ></ListItemText>
                </ListItem>
              </Box>
            );
          })}
      </List>
      <div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          {currentCall && (
            <>
              <video
                ref={myVideo}
                autoPlay
                playsInline
                muted
                style={{ width: "300px", marginRight: "20px" }}
              />
              <video
                ref={userVideo}
                autoPlay
                playsInline
                style={{ width: "300px" }}
              />
            </>
          )}
        </div>
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          // backgroundColor: "#f1f0f0",
          padding: "10px",
          borderRadius: "10px",
          gap: "10px",
          // boxShadow: "0 -2px 5px rgba(0,0,0,0.2)", // Optional shadow for better visibility
        }}
      >
        <TextField
          label='Message'
          variant='outlined'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button onClick={()=> navigate(`/videocall/${id}`)}>Call</Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
          sx={{
            width: "100px",
          }}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;
