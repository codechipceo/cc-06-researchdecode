import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { createPaperRequest } from "../Features/Slices/requestResearchPaper";

const PaperCard = ({
  title,
  author,
  publishedDate,
  doi,
  language,
  abstract,
  paperDetail,
}) => {
  const dispatch = useDispatch();

  const requestPayload = {
    DOI_number: doi,
    requestBy: "6683d6b2a0a0590aeda8e44a",
    paperDetail,
  };
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {title}
        </Typography>
        <Grid container spacing={1} alignItems='center'>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.secondary'>
              Authors:{" "}
              {author
                .map((author, index) => `${author.given} ${author.family}`)
                .join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='body1' color='text.secondary'>
              DOI: {doi}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Language: {language}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body1' color='text.secondary' sx={{ mt: 1 }}>
          Abstract: {abstract}
        </Typography>
        <Typography variant='caption' color='text.secondary' sx={{ mt: 1 }}>
          Published Date: {publishedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='primary'
          onClick={() => {
            dispatch(createPaperRequest(requestPayload));
          }}
        >
          Make a Request
        </Button>
      </CardActions>
    </Card>
  );
};

export default PaperCard;
