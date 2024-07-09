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
  const { DOI_number, paperDetail, requestBy } = request;
  const { title, author } = paperDetail;
  const handleSend = () => {
    navigate(`/inbox/${request.requestBy}`);
  };

  return (
    <ListItem alignItems='flex-start' sx={{ borderBottom: "1px solid #ddd" }}>
      <ListItemText>
        <Typography variant='h6' component='div'>
          {title[0]}
        </Typography>
        {/* <Typography variant='subtitle1' component='div'>
          Author: {author[0]}
        </Typography> */}
        <Typography variant='body2' component='div'>
          DOI:{" "}
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            {DOI_number}
          </a>
        </Typography>
        {/* <Typography variant='body2' component='div'>
          PDF Link:{" "}
          <a href={} target='_blank' rel='noopener noreferrer'>
            View PDF
          </a>
        </Typography> */}
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
