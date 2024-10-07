import { Box, Typography } from "@mui/material";

const CourseOverview = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant='h6' paragraph>
        Course Overview
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{ __html: course?.courseDescription }}
      ></Typography>
    </Box>
  );
};

export default CourseOverview;
