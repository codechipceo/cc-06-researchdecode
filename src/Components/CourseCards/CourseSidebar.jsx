import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarIcon from "@mui/icons-material/Star";

const CourseSidebar = ({ course, isEnrolled = true }) => {
  const navigate = useNavigate();

  const handleBuyCourse = () => {
    navigate(`/payment/${course._id}`);
  };

  const {
    courseName,
    courseDescription,
    courseExtras,
    price,
    courseThumbnail,
    courseLanguage,
  } = course;
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Course Details
        </Typography>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <MonetizationOnIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Price: ${price}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <LanguageIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Language: {courseLanguage}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <PeopleIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Enrolled:</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <MenuBookIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Lessons: </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems='center' sx={{ mb: 2 }}>
          <Grid item>
            <StarIcon />
          </Grid>
          <Grid item>
            <Typography variant='body1'>Rating: </Typography>
          </Grid>
        </Grid>
        {isEnrolled ? (
          <Button
            variant='contained'
            color='primary'
            fullWidth
            component={Link}
            to={`/course/${course._id}/lectures/1`}
          >
            Start Lecture
          </Button>
        ) : (
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleBuyCourse}
          >
            Buy Course
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseSidebar;
