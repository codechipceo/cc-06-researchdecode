import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import UserList from "../../Components/Messaging/UserList";
import Chat from "../../Components/Messaging/Chat";
import ResponsiveAppBar from "../../Components/Navbar/Navbar";
import { useStudents } from "../../Hooks/useStudents";
import { useLocation, useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Inbox = () => {
  const { supervisorId } = useParams();
  return (
    <Grid2  >
      <ResponsiveAppBar />
      {/* <Grid item xs={12} md={4} lg={3}>
        {data && <UserList users={data} />}
      </Grid> */}
      <Container>

      <Grid item xs={12} md={8} mx={"auto"}>
        {<Chat id={supervisorId} />}
      </Grid>
      </Container>
    </Grid2>
  );
};

export default Inbox;
