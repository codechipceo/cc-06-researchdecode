import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Grid, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import CourseOverview from "../../Components/CourseCards/CourseOverview";
import CourseCurriculum from "../../Components/CourseCards/CourseCurriculum";
import CourseInstructor from "../../Components/CourseCards/CourseInstructor";
import CourseReviews from "../../Components/CourseCards/CourseReviews";
import CourseSidebar from "../../Components/CourseCards/CourseSidebar";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourseById,
  selectCourseById,
} from "../../Features/Slices/courseSlice";
import {
  getVideosByCourseId,
  selectVideosByCourseId,
} from "../../Features/Slices/videoSlice";
const Banner = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "20px",
});

const CourseDetail = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const courseDetail = useSelector(selectCourseById);
  const videoByCourseId = useSelector(selectVideosByCourseId);

  useEffect(() => {
    const payload = { courseId: courseId };
    dispatch(getCourseById(payload));
    dispatch(getVideosByCourseId(payload));
  }, []);

  if (!courseId) {
    return <Typography variant='h5'>Course not found</Typography>;
  }

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  const { courseName, courseBanner, instructor } = courseDetail ?? {};

  console.log(courseDetail);
  if (!courseDetail?.courseName) return <>Loading</>;

  return (
    <div>
      <HeaderTwo title='COURSE' breadcrumbPath={breadcrumbPath} />
      <Banner src={courseBanner} alt={courseName} />
      <Container maxWidth='lg' sx={{ marginTop: "40px" }}>
        {/* <Banner src={courseBanner} alt={courseName} /> */}
        <Typography variant='h4' gutterBottom>
          {instructor?.name}
        </Typography>
        <Typography variant='h4' gutterBottom>
          {courseName}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label='course details tabs'
            >
              <Tab label='Overview' />
              <Tab label='Curriculum' />
              <Tab label='Instructor' />
              {/* <Tab label='Reviews' /> */}
            </Tabs>

            {tabValue === 0 && <CourseOverview course={courseDetail} />}
            {tabValue === 1 && <CourseCurriculum course={videoByCourseId} />}
            {tabValue === 2 && <CourseInstructor course={courseDetail} />}
            {/* {tabValue === 3 && <CourseReviews />} */}
          </Grid>
          <Grid item xs={12} md={4}>
            <CourseSidebar course={courseDetail} firstVideo={videoByCourseId[0]?._id} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDetail;
