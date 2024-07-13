import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const CourseInstructor = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Instructor
      </Typography>
      <Avatar alt={course.instructor.name} src={course.instructorImage} sx={{ width: 100, height: 100, mb: 2 }} />
      <Typography variant="h6">{course.instructor}</Typography>
      <Typography variant="body1">Full Stack Developer with 10 years of experience in web development.</Typography>
    </Box>
  );
};

export default CourseInstructor;