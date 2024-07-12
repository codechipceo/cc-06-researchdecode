import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const CourseReviews = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>
      <List>
        {[1, 2, 3].map((review) => (
          <ListItem key={review}>
            <ListItemText primary={`Review ${review}`} secondary="This is an example review." />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseReviews;