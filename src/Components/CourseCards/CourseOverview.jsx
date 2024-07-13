import React from 'react';
import { Box, Typography } from '@mui/material';

const CourseOverview = ( {course} ) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" paragraph>
        {course.courseDescription}
      </Typography>
    </Box>
  );
};

export default CourseOverview;