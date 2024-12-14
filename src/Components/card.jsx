import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { createPaperRequest } from "../Features/Slices/requestResearchPaper";
import { selectStudentInfo } from "../Features/Slices/studentSlice";
import CustomButton from "./CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
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
  isLoggedin,
  userInfo,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const requestPayload = {
    DOI_number: doi,
    requestBy: userInfo?._id,
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
        <CustomButton
          variant='primary'
          fontWeight={"semibold"}
          className={"left"}
          // style={{ marginLeft: "auto" }}
          onClick={() => {
            if (isLoggedin === false) {
              navigate("/signup");
            } else {
              dispatch(createPaperRequest(requestPayload))
                .unwrap()
                .then((res) => {
                  setPaper(null);
                  setDoiNumber("");
                });
            }
          }}
        >
          Request Paper
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default PaperCard;
