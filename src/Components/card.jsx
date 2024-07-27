import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { createPaperRequest } from "../Features/Slices/requestResearchPaper";
import { selectStudentInfo } from "../Features/Slices/studentSlice";

const PaperCard = ({
  title,
  author,
  publishedDate,
  doi,
  language,
  abstract,
  paperDetail,
  setPaper,
  setDoiNumber,
}) => {
  const dispatch = useDispatch();
  const loggedinUser = useSelector(selectStudentInfo);

  const requestPayload = {
    DOI_number: doi,
    requestBy: loggedinUser._id,
    paperDetail,
  };
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Title</Typography>
        <Typography gutterBottom variant='h6' component='div'>
          {title}
        </Typography>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1'>Authors</Typography>
            <Typography variant='body1' color='text.secondary'>
              {author
                .map((author, index) => `${author.given} ${author.family}`)
                .join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1'>DOI:</Typography>

            <Typography variant='body1' color='text.secondary'>
              {doi}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Language: {language}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body1' fontWeight={600}>
          Abstract
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ mt: 1 }}
          maxHeight={"300px"}
          overflow={"scroll"}
        >
          {/* Abstract: {abstract} */}
          <div dangerouslySetInnerHTML={{ __html: abstract }} />
        </Typography>
        <Typography variant='caption' color='text.secondary' sx={{ mt: 1 }}>
          Published Date: {publishedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          style={{ marginLeft: "auto" }}
          variant='contained'
          color='primary'
          onClick={() => {
            dispatch(createPaperRequest(requestPayload))
              .unwrap()
              .then((res) => {
                console.log(res);
                setPaper(null);
                setDoiNumber("");
              });
          }}
        >
          Request Paper
        </Button>
      </CardActions>
    </Card>
  );
};

export default PaperCard;
