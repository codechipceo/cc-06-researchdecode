import { Box, Container, Grid } from "@mui/material";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import StatusHandler from "../../Components/statusHandler";
import { useCourse } from "../../Hooks/use-course";

const CoursePage = () => {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse();
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderTwo title='COURSES' breadcrumbPath={breadcrumbPath} />
      <Container sx={{ marginTop: "40px" }}>
        <Box>
          <StatusHandler
            isLoading={isLoading}
            isError={isError}
            errorMessage='Error loading courses'
            isEmpty={courses.length === 0}
          />
          {!isLoading && !isError && courses.length > 0 && (
            <Grid container spacing={3}>
              {courses.map((course) => (
                <Grid item xs={12} md={3} key={course._id}>
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
