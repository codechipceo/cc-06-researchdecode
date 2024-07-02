import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box, Link } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const RequestLink = ({ request, onSend }) => {
  return (
    <ListItem key={request.id} alignItems="flex-start" sx={{ bgcolor: 'background.paper', borderRadius: '8px', mb: 2, p: 2, border: '1px solid #ddd', width: '100%' }}>
      <ListItemText
        primary={
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {request.title}
          </Typography>
        }
        secondary={
          <Box component="div" sx={{ mt: 1 }}>
            <Typography variant="subtitle1" component="div">
              Author: {request.author}
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 0.5 }}>
              DOI: <Link href={`https://doi.org/${request.doi}`} target="_blank" rel="noopener">{request.doi}</Link>
            </Typography>
            <Typography variant="body2" component="div" sx={{ mt: 0.5 }}>
              PDF Link: <Link href={request.link} target="_blank" rel="noopener">View PDF</Link>
            </Typography>
          </Box>
        }
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="send" onClick={() => onSend(request.id)} sx={{ color: 'primary.main' }}>
          <SendIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default RequestLink;