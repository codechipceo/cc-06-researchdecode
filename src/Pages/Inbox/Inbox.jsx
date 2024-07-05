
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