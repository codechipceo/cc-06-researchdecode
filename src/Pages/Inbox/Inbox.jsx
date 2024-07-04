// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   Box,
//   TextField,
//   Button,
//   Container,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from '@mui/material';

// const Inbox = () => {
//   const { userId } = useParams();
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = () => {
//     const newMessage = { id: messages.length + 1, text: message, sender: 'You' };
//     setMessages([...messages, newMessage]);
//     setMessage('');
//     // Implement the logic to send the message to the server
//     console.log(`Send message to user with ID: ${userId}`);
//   };

//   return (
//     <Container maxWidth="md" sx={{ marginTop: "40px" }}>
//       <Paper sx={{ padding: "20px", minHeight: "300px" }} elevation={0}>
//         <Typography variant="h5" component="div" sx={{ marginBottom: "20px" }}>
//           Inbox for {userId}
//         </Typography>
//         <List>
//           {messages.map((msg) => (
//             <ListItem key={msg.id}>
//               <ListItemText primary={msg.text} secondary={msg.sender} />
//             </ListItem>
//           ))}
//         </List>
//         <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
//           <TextField
//             label="Message"
//             variant="outlined"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             fullWidth
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginLeft: '10px' }}
//             onClick={handleSendMessage}
//           >
//             Send
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Inbox;



import React, { useState } from 'react';
import { Grid } from '@mui/material';
import UserList from '../../Components/Messaging/UserList';
import Chat from '../../Components/Messaging/Chat';
import ResponsiveAppBar from '../../Components/Navbar/Navbar';

const Inbox = () => {
  const [users] = useState([
    { id: 'user1', name: 'User 1' },
    { id: 'user2', name: 'User 2' },
    { id: 'user3', name: 'User 3' },
  ]);

  return (
    <Grid container spacing={2}>
      <ResponsiveAppBar />
      <Grid item xs={12} md={4} lg={3}>
        <UserList users={users} />
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        <Chat users={users} />
      </Grid>
    </Grid>
  );
};

export default Inbox;