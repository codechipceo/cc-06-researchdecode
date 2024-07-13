import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/system";
import CourseOverview from "../../Components/CourseCards/CourseOverview";
import CourseCurriculum from "../../Components/CourseCards/CourseCurriculum";
import CourseInstructor from "../../Components/CourseCards/CourseInstructor";
import CourseReviews from "../../Components/CourseCards/CourseReviews";
import CourseSidebar from "../../Components/CourseCards/CourseSidebar";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";

const Banner = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "20px",
});

const CourseDetail = ({ courses }) => {
  const { courseId } = useParams();

  const course = courses.find(course => course._id === courseId);
  console.log(course);

  if (!course) {
    return <Typography variant="h5">Course not found</Typography>;
  }

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderTwo title="COURSE" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        {/* <Banner src={course.courseBanner} alt={course.courseName} /> */}
        <Banner src={"https://eduvibe.react.devsvibe.com/images/course/course-details/course-01.jpg"} alt={course.courseName} />
        <Typography variant="h4" gutterBottom>
          {course.instructor}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {course.courseName}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="course details tabs"
            >
              <Tab label="Overview" />
              <Tab label="Curriculum" />
              <Tab label="Instructor" />
              <Tab label="Reviews" />
            </Tabs>
            {tabValue === 0 && <CourseOverview course={course} />}
            {tabValue === 1 && <CourseCurriculum course={course} />}
            {tabValue === 2 && <CourseInstructor course={course} />}
            {tabValue === 3 && <CourseReviews />}
          </Grid>
          <Grid item xs={12} md={4}>
            <CourseSidebar course={course} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDetail;