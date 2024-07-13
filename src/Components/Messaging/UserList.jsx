import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <Paper
      sx={{ padding: "20px", height: "100vh", overflow: "auto" }}
      elevation={3}
    >
      <Typography variant='h6' component='div' sx={{ marginBottom: "20px" }}>
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user._id} component={Link} to={`/inbox/${user._id}`}>
            <Avatar
              alt={user?.firstName}
              src={`https://via.placeholder.com/40?text=${user._id}`}
            />
            <ListItemText
              primary={user?.firstName +user?.lastName}
              sx={{ marginLeft: "10px" }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;
