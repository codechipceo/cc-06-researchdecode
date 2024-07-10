import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Grid, Typography, List, ListItem, ListItemText, Box, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import ReactPlayer from 'react-player';
import { HeaderTwo } from '../../Components/Headers/HeaderTwo';

const VideoContainer = styled(Box)({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#000',
});

const VideoPlayer = styled(ReactPlayer)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const SidebarContainer = styled(Paper)({
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
});

const lectures = [
  { id: '1', title: 'Introduction', url: 'https://www.youtube.com/watch?v=gieEQFIfgYc&ab_channel=DaveGray' },
  { id: '2', title: 'Module 1', url: 'https://www.youtube.com/watch?v=gieEQFIfgYc&ab_channel=DaveGray' },
  { id: '3', title: 'Module 2', url: 'https://www.youtube.com/watch?v=gieEQFIfgYc&ab_channel=DaveGray' },
];

const assignments = [
  { id: '1', title: 'Assignment 1: Basics', description: 'Complete the exercises in the provided worksheet.' },
  { id: '2', title: 'Assignment 2: Intermediate', description: 'Submit a project proposal.' },
  { id: '3', title: 'Assignment 3: Advanced', description: 'Develop a small application based on the course content.' },
];

const LecturePage = () => {
  const { courseId, lectureId } = useParams();
  const currentLecture = lectures.find((lecture) => lecture.id === lectureId) || lectures[0];
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  
  return (
    <div>
      <HeaderTwo title='Lecture Videos' breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <VideoContainer>
              <VideoPlayer url={currentLecture.url} controls />
            </VideoContainer>
            <Box mt={2}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{currentLecture.title}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarContainer>
              <Typography variant="h6" gutterBottom>
                Lecture Playlist
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {lectures.map((lecture) => (
                  <ListItem
                    button
                    key={lecture.id}
                    component={Link}
                    to={`/course/${courseId}/lectures/${lecture.id}`}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                      },
                      borderRadius: '4px',
                      marginBottom: '4px',
                    }}
                  >
                    <ListItemText primary={lecture.title} />
                  </ListItem>
                ))}
              </List>
            </SidebarContainer>
            <SidebarContainer>
              <Typography variant="h6" gutterBottom>
                Assignments
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {assignments.map((assignment) => (
                  <ListItem key={assignment.id} sx={{ marginBottom: '4px' }}>
                    <ListItemText
                      primary={assignment.title}
                      secondary={assignment.description}
                    />
                  </ListItem>
                ))}
              </List>
            </SidebarContainer>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LecturePage;