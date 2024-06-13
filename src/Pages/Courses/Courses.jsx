import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { useCourse } from "../../Hooks/use-course";
import StatusHandler from "../../Components/statusHandler";

const CoursePage = () => {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse();
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderTwo title="COURSES" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        <Box sx={{ flexGrow: 1, margin: "20px" }}>
          <StatusHandler 
            isLoading={isLoading}
            isError={isError}
            errorMessage="Error loading courses"
            isEmpty={courses.length === 0}
          />
          {!isLoading && !isError && courses.length > 0 && (
            <Grid container spacing={4}>
              {courses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course._id} display={"flex"}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default CoursePage;