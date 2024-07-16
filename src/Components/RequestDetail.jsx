import React from "react";
import { Card, CardContent, Typography, Grid, Avatar, CardActions, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';

const RequestDetail = ({ requestDetail }) => {
  const dispatch = useDispatch();
  if (!requestDetail) return null;

  const {
    _id,
    requestBy,
    paperDetail,
    requestStatus,
    DOI_number,
  } = requestDetail;

  const { title, DOI, publisher, author } = paperDetail || {};

  // Define button handlers (these should be implemented based on your requirements)
  const handleApprove = () => {
    // dispatch(approveRequest(_id)); // Example action
  };

  const handleReject = () => {
    // dispatch(rejectRequest(_id)); // Example action
  };

  const handleOpen = () => {
    // dispatch(openRequest(_id)); // Example action
  };

  const handleUpload = () => {
    // dispatch(uploadRequest(_id)); // Example action
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="text.secondary">
              {`${requestBy.firstName} ${requestBy.lastName}`}s
            </Typography>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h6" component="div" sx={{ mt: 2 }}>
          {title}
        </Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              Authors: {author.map(a => `${a.given} ${a.family}`).join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              DOI: {DOI || DOI_number}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Publisher: {publisher}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Request Status: {requestStatus}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          Request ID: {_id}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'flex-end', // Align buttons to the right
          p: 1,
          display: 'flex',
          gap: 1, // Adjust gap between buttons
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleApprove}
        >
          Approve
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleReject}
        >
          Reject
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          Open
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequestDetail;