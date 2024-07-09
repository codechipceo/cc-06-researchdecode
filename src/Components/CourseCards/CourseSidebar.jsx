import React from 'react';
import { Card, CardContent, Typography, Box, Button, Grid } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarIcon from '@mui/icons-material/Star';

const CourseSidebar = ({ course }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Course Details
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <MonetizationOnIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Price: ${course.price}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <LanguageIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Language: {course.courseLanguage}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <PeopleIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Enrolled: {course.enrolledCount}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <MenuBookIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Lessons: {course.lessons}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <StarIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">Rating: {course.rating}</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" fullWidth>
          Enroll Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseSidebar;