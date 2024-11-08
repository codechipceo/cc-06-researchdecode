import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const RequestLink = ({ request }) => {
  const { _id, requestBy, requestStatus, createdAt, paperDetail, DOI_number } =
    request;
  const { DOI, title } = paperDetail;
  const navigate = useNavigate();
  const handleSend = () => {
    navigate(`/pending-request/${_id}`);
  };

  return (
    <ListItem alignItems='flex-start' sx={{ borderBottom: "1px solid #ddd" }}>
      <ListItemText>
        <Box mb={4}>
          <Typography variant='h6' fontWeight={500}>
            {title[0]}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant='subtitle1' component='div'>
              Request By: {requestBy?.firstName + requestBy?.lastName}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Typography variant='body1' fontWeight={500}>
              DOI Number
            </Typography>
            <Typography variant='body2'>{DOI_number}</Typography>
          </Box>

          <Box>
            <Typography variant='body2' component='div'>
              Requested At: {new Date(createdAt).toLocaleString()}
            </Typography>
          </Box>
        </Box>
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