import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  CardActions,
  Button,
  Input,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { selectStudentInfo } from "../Features/Slices/studentSlice";
import { MainModal } from "./MainModal/MainModal";
import PDFviewer from "./PDFviewer/PDFviewer";
import {
  approvePaper,
  rejectPaperRequest,
  sendPaper,
} from "../Features/Slices/requestResearchPaper";
import { useNavigate } from "react-router-dom";

const RequestDetail = ({ requestDetail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedinUser = useSelector(selectStudentInfo);
  const [file, setFile] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [open, setOpen] = useState(false);
  const formData = new FormData();

  if (!requestDetail) return null;

  const {
    _id,
    requestBy,
    paperDetail,
    requestStatus,
    DOI_number,
    fileUrl,
    fulfilledBy,
  } = requestDetail;
console.log(requestDetail)
  const { title, DOI, publisher, author } = paperDetail || {};

  // Handler Functions
  const handleApprove = () => {
    dispatch(approvePaper({ requestId: _id, fulfilledBy }));
  };

  const handleReject = () => {
    dispatch(rejectPaperRequest({ requestId: _id }));
  };

  const handleUpload = () => {
    formData.append("file", uploadFile);
    formData.append("requestId", _id);
    dispatch(sendPaper(formData));
  };

  const handleDownload = async () => {
    if (fileUrl) {
      try {
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "paper.pdf"; // Specify the filename here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Download failed", error);
      }
    }
  };

  const disableButtons = () => {
    return fileUrl === "" || requestStatus === "approved";
  };


  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Grid container alignItems='center' spacing={1}>
          <Grid item>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='text.secondary'>
              {`${requestBy?.firstName} ${requestBy?.lastName}`}
            </Typography>
          </Grid>
        </Grid>
        <Typography gutterBottom variant='h6' component='div' sx={{ mt: 2 }}>
          {title}
        </Typography>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.secondary'>
              Authors: {author.map((a) => `${a.given} ${a.family}`).join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.secondary'>
              DOI: {DOI || DOI_number}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Publisher: {publisher}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body1' color='text.secondary' sx={{ mt: 1 }}>
          Request Status: {requestStatus}
        </Typography>
        <Typography variant='caption' color='text.secondary' sx={{ mt: 1 }}>
          Request ID: {_id}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end", // Align buttons to the right
          p: 1,
          display: "flex",
          gap: 1, // Adjust gap between buttons
        }}
      >
        {loggedinUser._id === requestBy._id ? (
          <>
            <Button
              size='small'
              variant='contained'
              color='primary'
              disabled={fileUrl === ""}
              onClick={() => {
                setFile(requestDetail?.fileUrl);
                setOpen(true);
              }}
            >
              View File
            </Button>
            <Button
              size='small'
              variant='contained'
              disabled={disableButtons()}
              color='primary'
              onClick={handleApprove}
            >
              Approve
            </Button>
            {requestStatus === "approved" && (
              <Button
                size='small'
                variant='contained'
                disabled={fileUrl === ""}
                color='primary'
                onClick={handleDownload}
              >
                Download
              </Button>
            )}
            <Button
              size='small'
              variant='contained'
              disabled={disableButtons()}
              color='primary'
              onClick={handleReject}
            >
              Reject
            </Button>
          </>
        ) : (
          <>
            <Input
              type='file'
              onChange={(e) => setUploadFile(e.target.files[0])}
            />
            <Button
              size='small'
              variant='contained'
              color='primary'
              disabled={uploadFile === null}
              onClick={() => handleUpload()}
            >
              Upload
            </Button>
          </>
        )}
      </CardActions>
      <MainModal open={open} setOpen={setOpen}>
        {file && <PDFviewer file={file} />}
      </MainModal>
    </Card>
  );
};

export default RequestDetail;
