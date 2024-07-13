import React, { useState } from "react";
import { Grid } from "@mui/material";
import UserList from "../../Components/Messaging/UserList";
import Chat from "../../Components/Messaging/Chat";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { useStudents } from "../../Hooks/useStudents";
import { useLocation } from "react-router-dom";

const Inbox = () => {
  const { data } = useStudents();
  const { state } = useLocation();
  const request = state?.request ?? {};
  return (
    <Grid container spacing={2}>
      <ResponsiveAppBar />
      <Grid item xs={12} md={4} lg={3}>
        {data && <UserList users={data} />}
      </Grid>
      <Grid item xs={12} md={8} mx={"auto"} >
        {data && <Chat users={data} request={request} />}
      </Grid>
    </Grid>
  );
};

export default Inbox;
