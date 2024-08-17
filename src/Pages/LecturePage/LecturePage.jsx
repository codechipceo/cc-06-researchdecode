import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import  { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import {
  getVideosByCourseId,
  selectVideosByCourseId,
} from "../../Features/Slices/videoSlice";
const VideoContainer = styled(Box)({
  position: "relative",
  paddingTop: "56.25%", // 16:9 aspect ratio
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#000",
});

const VideoPlayer = styled(ReactPlayer)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const SidebarContainer = styled(Paper)({
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
});

const LecturePage = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const videoData = useSelector(selectVideosByCourseId);
  const [currentLecture, setCurrentLecture] = useState();

  const payload = { courseId: courseId };
  useEffect(() => {
    dispatch(getVideosByCourseId(payload));
  }, [dispatch]);

  useEffect(() => {
    if (videoData.length > 0) {
      setCurrentLecture(videoData[0]);
    }
  }, [videoData]);

  const breadcrumbPath = [{ label: "Home", path: "/" }];
  if (videoData.length === 0 || !currentLecture) return "Loading";
  return (
    <div>
      <HeaderTwo title='Lecture Videos' breadcrumbPath={breadcrumbPath} />
      {videoData.length > 0 ? (
        <Container maxWidth='lg' sx={{ marginTop: "40px" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <VideoContainer>
                <VideoPlayer
                  width={"100%"}
                  height={"100%"}
                  url={currentLecture?.videoUrl}
                  controls={true}
                />
              </VideoContainer>
              <Box mt={2}>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                  {currentLecture?.videoTitle}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarContainer>
                <Typography variant='h6' gutterBottom>
                  Lecture Playlist
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <List>
                  {videoData &&
                    videoData.map((lecture) => (
                      <ListItem
                        key={lecture.id}
                        onClick={() => setCurrentLecture(lecture)}
                        sx={{
                          backgroundColor:
                            lecture._id === currentLecture._id && "#f0f0f0",
                          "&:hover": {
                            backgroundColor: "#f0f0f0",
                          },
                          borderRadius: "4px",
                          marginBottom: "4px",
                        }}
                      >
                        <ListItemText primary={lecture.videoTitle} />
                      </ListItem>
                    ))}
                </List>
              </SidebarContainer>
            </Grid>
          </Grid>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default LecturePage;
