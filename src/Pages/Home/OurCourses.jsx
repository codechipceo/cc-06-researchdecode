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
    <Container maxWidth={"auto"}>
      <Typography variant='h6' mt={5}>
        Need help with education?{" "}
      </Typography>
      <Typography variant='h4' fontWeight={"bold"}>
        We offer the best courses
      </Typography>
      <Grid2
        container
        columns={{ xs: 1, sm: 1, md: 4, lg: 4 }}
              columnSpacing={4}
              rowSpacing={4}
      >
       <Grid container direction="row" spacing={2} style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
      {courses.map((course) => (
        <Grid item key={course._id} style={{ flex: '0 0 auto' }}>
          <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
       
      </Grid2>
    </Container>
  );
};
