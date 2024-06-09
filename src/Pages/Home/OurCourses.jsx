import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CourseCard } from "../../Components/Cards/CourseCard";

export const OurCourses = () => {
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
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
        <Grid2 item xs={1} lg={1}>
          <CourseCard />
        </Grid2>
      </Grid2>
    </Container>
  );
};
