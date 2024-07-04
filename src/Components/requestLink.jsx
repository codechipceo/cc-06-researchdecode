import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

const RequestLink = ({ request }) => {
  const navigate = useNavigate();

  const handleSend = () => {
    navigate(`/inbox/${request.userId}`);
  };

  return (
    <ListItem key={request.id} alignItems="flex-start" sx={{ borderBottom: '1px solid #ddd' }}>
      <ListItemText>
        <Typography variant="h6" component="div">
          {request.title}
        </Typography>
        <Typography variant="subtitle1" component="div">
          Author: {request.author}
        </Typography>
        <Typography variant="body2" component="div">
          DOI: <a href={`https://doi.org/${request.doi}`} target="_blank" rel="noopener noreferrer">{request.doi}</a>
        </Typography>
        <Typography variant="body2" component="div">
          PDF Link: <a href={request.link} target="_blank" rel="noopener noreferrer">View PDF</a>
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="send" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default RequestLink;