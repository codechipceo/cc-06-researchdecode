import React from "react";
import { Box, Typography } from "@mui/material";

const CourseOverview = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant='h6' paragraph>
        {course.courseDescription}
      </Typography>

      <Typography variant='h6' fontWeight={"bold"}>
        Extras
      </Typography>
      {course.courseExtras.map((extra, i) => {
        return <Typography key={i}>{extra}</Typography>;
      })}
    </Box>
  );
};

export default CourseOverview;
