// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   TextField,
//   Button,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   IconButton,
//   InputAdornment,
// } from '@mui/material';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
// import SendIcon from '@mui/icons-material/Send';

// const Chat = () => {
//   const { userId } = useParams();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [attachment, setAttachment] = useState(null);

//   const handleSendMessage = () => {
//     const newMessage = {
//       id: messages.length + 1,
//       text: message,
//       sender: 'You',
//       attachment: attachment ? URL.createObjectURL(attachment) : null,
//     };
//     setMessages([...messages, newMessage]);
//     setMessage('');
//     setAttachment(null);
//     // Implement the logic to send the message to the server
//     console.log(`Send message to user with ID: ${userId}`);
//   };

//   const handleFileChange = (event) => {
//     setAttachment(event.target.files[0]);
//   };

//   return (
//     <Paper sx={{ display: 'flex', flexDirection: 'column', height: '100vh', position: 'relative' }} elevation={0}>
//       <Typography variant="h5" component="div" sx={{ padding: '10px', borderBottom: '1px solid #e0e0e0' }}>
//         Chat with {userId}
//       </Typography>
//       <List sx={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
//         {messages.map((msg) => (
//           <ListItem key={msg.id} sx={{ display: 'flex', justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start' }}>
//             <Box
//               sx={{
//                 backgroundColor: msg.sender === 'You' ? '#DCF8C6' : '#FFF',
//                 borderRadius: '10px',
//                 padding: '10px',
//                 maxWidth: '70%',
//                 wordBreak: 'break-word',
//                 boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
//                 marginBottom: '10px',
//               }}
//             >
//               <ListItemText primary={msg.text} secondary={msg.sender} />
//               {msg.attachment && (
//                 <Box sx={{ marginTop: '10px' }}>
//                   <a href={msg.attachment} target="_blank" rel="noopener noreferrer">
//                     View Attachment
//                   </a>
//                 </Box>
//               )}
//             </Box>
//           </ListItem>
//         ))}
//       </List>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           padding: '10px',
//           borderTop: '1px solid #e0e0e0',
//           backgroundColor: '#FFF',
//           position: 'sticky',
//           bottom: 0,
//         }}
//       >
//         <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', marginRight: '10px' }}>
//           <TextField
//             label="Message"
//             variant="outlined"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             fullWidth
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <input
//                     accept="*"
//                     style={{ display: 'none' }}
//                     id="attachment-input"
//                     type="file"
//                     onChange={handleFileChange}
//                   />
//                   <label htmlFor="attachment-input">
//                     <IconButton component="span">
//                       <AttachFileIcon />
//                     </IconButton>
//                   </label>
//                 </InputAdornment>
//               ),
//             }}
//             sx={{ flex: 1 }}
//           />
//         </Box>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSendMessage}
//           endIcon={<SendIcon />}
//           sx={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}
//         >
//           Send
//         </Button>
//       </Box>
//     </Paper>
//   );
// };

// export default Chat;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const Chat = ({ users }) => {
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const [messages, setMessages] = useState({});  // Store messages per user

  useEffect(() => {
    // Initialize message state for the new user
    if (!messages[userId]) {
      setMessages({
        ...messages,
        [userId]: [],
      });
    }
  }, [userId, messages]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: (messages[userId]?.length || 0) + 1,
      text: message,
      sender: 'You',
      attachment: attachment ? URL.createObjectURL(attachment) : null,
    };

    setMessages({
      ...messages,
      [userId]: [...(messages[userId] || []), newMessage],
    });

    setMessage('');
    setAttachment(null);
    // Implement the logic to send the message to the server
    console.log(`Send message to user with ID: ${userId}`);
  };

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  return (
    <Paper sx={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100vh' }} elevation={0}>
      <Typography variant="h5" component="div" sx={{ marginBottom: '20px' }}>
        Chat with {users.find((user) => user.id === userId)?.name || userId}
      </Typography>
      <List sx={{ flex: 1, overflow: 'auto', marginBottom: '20px' }}>
        {(messages[userId] || []).map((msg) => (
          <ListItem
            key={msg.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.sender === 'You' ? 'flex-end' : 'flex-start',
            }}
          >
            <ListItemText
              primary={msg.text}
              secondary={msg.sender}
              sx={{
                bgcolor: msg.sender === 'You' ? '#dcf8c6' : '#ffffff',
                borderRadius: '10px',
                padding: '10px',
                maxWidth: '75%',
              }}
            />
            {msg.attachment && (
              <Box sx={{ marginTop: '10px' }}>
                <a href={msg.attachment} target="_blank" rel="noopener noreferrer">
                  View Attachment
                </a>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          backgroundColor: '#f1f0f0',
          padding: '10px',
          borderRadius: '10px',
          gap: '10px',
          boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',  // Optional shadow for better visibility
        }}
      >
        <TextField
          label="Message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flex: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <input
                  accept="*"
                  style={{ display: 'none' }}
                  id="attachment-input"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="attachment-input">
                  <IconButton component="span">
                    <AttachFileIcon />
                  </IconButton>
                </label>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          endIcon={<SendIcon />}
          sx={{ width: '100px' }}
        >
          Send
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;