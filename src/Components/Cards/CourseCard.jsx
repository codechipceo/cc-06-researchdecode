import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Button, IconButton, Box, Link,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

export const CourseCard = ({ course }) => {
  if (!course) {
    return null; // Return null if course is undefined
  }

  return (
    <Box
      style={{
        transition: 'transform 0.3s ease',
        maxWidth: '345px',
        margin: '20px',
      }}
    >
      <Link to={`/course-details/${course._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card
          sx={{
            maxWidth: 345,
            position: 'relative',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <CardMedia
            component="img"
            alt={course.courseName}
            height="250"
            image={course.courseThumbnail}
            className="w-100"
          />
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <IconButton size="small">
              <FavoriteBorderIcon />
            </IconButton>
          </div>
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={course.instructorImage} alt="Instructor" style={{ width: '30px', borderRadius: '50%' }} />
                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '10px' }}>
                  {course.instructorName}
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary">
                {course.lessons} Lessons
              </Typography>
            </div>
            <Typography variant="h6" component="div" sx={{ marginTop: '10px' }}>
              {course.courseName}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div>
                <Typography variant="body1" color="text.primary">
                  ${course.price}
                </Typography>
                {course.oldPrice && (
                  <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                    ${course.oldPrice}
                  </Typography>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', color: '#FFD700' }}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '5px' }}>
                  ({course.rating})
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};