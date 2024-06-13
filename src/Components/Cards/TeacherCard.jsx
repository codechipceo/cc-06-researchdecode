import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

export const TeacherCard = ({ data }) => {
  const navigate = useNavigate();
  const {
    _id,
    profileImage,
    experience,
    name,
    qualification,
  } = data;

  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 300,
        boxShadow: 3,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
      onClick={() => navigate(`/teacher/${_id}`)}
    >
      <CardMedia
        component='img'
        alt={name}
        height='200'
        image={
          profileImage
            ? profileImage
            : 'https://eduvibe.react.devsvibe.com/images/course/course-01/course-01.jpg'
        }
      />
      <CardContent>
        <Box display='flex' alignItems='center' mb={2}>
          <Avatar
            alt={name}
            src={profileImage}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Box>
            <Typography variant='h5' component='div'>
              {name}
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              display='flex'
              alignItems='center'
            >
              <StarIcon sx={{ color: '#FFD700', mr: 0.5 }} />
              {experience} years experience
            </Typography>
          </Box>
        </Box>
        <Typography variant='body2' color='text.secondary' mb={1}>
          Qualification: {qualification}
        </Typography>
      </CardContent>
      
    </Card>
  );
};

TeacherCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
    experience: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    qualification: PropTypes.string.isRequired,
  }).isRequired,
};