import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import {
  approvePaper,
  sendPaper,
} from "../../Features/Slices/requestResearchPaper";
import { selectStudentInfo } from "../../Features/Slices/studentSlice";
import { getConvo, selectChats } from "../../Features/Slices/chatSlice";
import PdfViewer from "../PDFviewer/PDFviewer";
import { MainModal } from "../MainModal/MainModal";

const Chat = ({ users, request }) => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const loggedinUser = useSelector(selectStudentInfo);

  const chats = useSelector(selectChats);

  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState("");
  useEffect(() => {
    const payload = {
      senderId: loggedinUser._id,
      recepientId: userId,
    };
    dispatch(getConvo(payload));
  }, [userId, dispatch]);

  const handleSendMessage = () => {
    const newMessage = {
      fulfilledBy: loggedinUser._id,
      requestId: "6686ef4db3f7b2f17f2e74f9" || request._id,
      requestBy: userId,
    };
    dispatch(sendPaper(newMessage));
    setMessage("");
    setAttachment(null);
  };

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleApprove = () => {
    const payload = {
      fulfilledBy: loggedinUser._id,
      requestId: "",
    };
    dispatch(approvePaper(payload));
  };

  const getUserName = (arr, id) => {
    const user = arr.find((user) => user._id === id);
    const userName = user ? user.firstName + user.lastName : "Anonymous";
    return userName;
  };
  return (
    <Paper
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
      elevation={0}
    >
      <Typography variant='h5' component='div' sx={{ marginBottom: "20px" }}>
        Chat with{getUserName(users, userId)}
      </Typography>
      <List sx={{ flex: 1, overflow: "auto", marginBottom: "20px" }}>
        {chats &&
          [...chats].reverse().map((msg) => {
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
                  {loggedinUser._id !== msg.sender && (
                    <Box>
                      <Button
                        onClick={() => {
                          setFile(msg.content);
                          setOpen(true);
                        }}
                      >
                        View File
                      </Button>
                      <Button onClick={() => handleApprove()}>Approve </Button>
                    </Box>
                  )}
                </ListItem>
              </Box>
            );
          })}
      </List>
      <MainModal open={open} setOpen={setOpen}>
        {file && <PdfViewer file={file} />}
      </MainModal>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          bottom: 0,
          backgroundColor: "#f1f0f0",
          padding: "10px",
          borderRadius: "10px",
          gap: "10px",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.2)", // Optional shadow for better visibility
        }}
      >
        <TextField
          label='Message'
          variant='outlined'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flex: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <input
                  accept='*'
                  style={{ display: "none" }}
                  id='attachment-input'
                  type='file'
                  onChange={handleFileChange}
                />
                <label htmlFor='attachment-input'>
                  <IconButton component='span'>
                    <AttachFileIcon />
                  </IconButton>
                </label>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
          sx={{ width: "100px" }}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;
