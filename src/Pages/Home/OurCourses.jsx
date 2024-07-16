import { Container, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { useCourse } from "../../Hooks/use-course";
export const OurCourses = () => {
  const {
    courseData: courses,
    isCourseLoading: isLoading,
    isCourseError: isError,
  } = useCourse();
  return (
    <Container>
      <Typography variant='h6' mt={5}>
        Need help with education?{" "}
      </Typography>
      <Typography variant='h4' fontWeight={"bold"}>
        We offer the best courses
      </Typography>
      <Grid2 container my={5}>
        {courses.map((course) => (
          <Grid item key={course._id} xs={12} md={3} mx={"auto"} style={{cursor:'pointer'}}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid2>
    </Container>
  );
};
