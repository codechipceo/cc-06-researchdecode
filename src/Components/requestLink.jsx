import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const RequestLink = ({ request }) => {
  const navigate = useNavigate();
  console.log(request);
  const handleSend = () => {
    navigate(`/pending-request/${request._id}`);
  };

  return (
    <ListItem alignItems='flex-start' sx={{ borderBottom: "1px solid #ddd" }}>
      <ListItemText>
        <Typography variant='h6' component='div'>
          Request ID: {request._id}
        </Typography>
        <Typography variant='subtitle1' component='div'>
          Request By: {request.requestBy}
        </Typography>
        {/* <Typography variant='subtitle1' component='div'>
          Author: {author[0]}
        </Typography> */}
        <Typography variant='body2' component='div'>
          Status: {request.requestStatus}
        </Typography>
        <Typography variant='body2' component='div'>
          Created At: {new Date(request.createdAt).toLocaleString()}
        </Typography>
        <Typography variant='body2' component='div'>
          Updated At: {new Date(request.updatedAt).toLocaleString()}
        </Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='send' onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default RequestLink;
