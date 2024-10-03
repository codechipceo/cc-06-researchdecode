import React from "react";
import { Box, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CourseOverview = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant='h6' paragraph>
        Course Overview
      </Typography>
      <ReactQuill
        value={course.courseDescription} // Pass the course description as value
        readOnly={true} // Make it read-only so it's non-editable
        theme='bubble'
      />
    </Box>
  );
};

export default CourseOverview;
