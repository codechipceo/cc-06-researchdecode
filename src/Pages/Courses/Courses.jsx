import { Box, Container, Grid } from "@mui/material";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import StatusHandler from "../../Components/statusHandler";
import { useCourse } from "../../Hooks/use-course";

const CoursePage = ({ userCoursesOnly = false }) => {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse(userCoursesOnly);

  const breadcrumbPath = userCoursesOnly
    ? [
        { label: "Home", path: "/" },
        { label: "Courses", path: "/courses" },
        { label: "My Courses", path: "/my-courses" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Courses", path: "/courses" },
      ];

  return (
    <div>
      <HeaderTwo breadcrumbPath={breadcrumbPath} />
      <Container sx={{ marginTop: "40px" }}>
        <Box>
          <StatusHandler
            isLoading={isLoading}
            isError={isError}
            errorMessage='Error loading courses'
            isEmpty={courses?.length === 0}
          />
          {!isLoading && !isError && courses?.length > 0 && (
            <Grid container spacing={3}>
              {courses.map((course) => (
                <Grid item xs={12} md={3} key={course._id}>
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          )}
          {!isLoading &&
            !isError &&
            courses?.length === 0 &&
            userCoursesOnly && (
              <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <h3>
                  No courses available. Please purchase courses to see them
                  here.
                </h3>
              </Box>
            )}
        </Box>
      </Container>
    </div>
  );
};

export default CoursePage;
