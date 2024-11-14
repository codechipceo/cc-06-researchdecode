import { Box } from "@mui/material";
import Typography from "../../assets/scss/components/Typography";
const CourseOverview = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
     
      <Typography
       
      ><p  dangerouslySetInnerHTML={{ __html: course?.courseDescription }}></p></Typography>
    </Box>
  );
};

export default CourseOverview;