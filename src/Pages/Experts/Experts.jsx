import { Grid, Box, Container } from "@mui/material";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { useTeacher } from "../../Hooks/use-teacher";
import { TeacherCard } from "../../Components/Cards/TeacherCard";
import StatusHandler from "../../Components/statusHandler";

const  Experts=()=> {
  const {
    teacherData: teachers,
    isTeacherLoading: isLoading,
    isTeacherError: isError,
  } = useTeacher();

  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderTwo title="EXPERTS" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        <Box sx={{ flexGrow: 1, margin: "20px" }}>
          <StatusHandler
            isLoading={isLoading}
            isError={isError}
            errorMessage="Error loading Experts"
            isEmpty={teachers.length === 0}
          />
          {!isLoading && !isError && teachers.length > 0 && (
            <Grid container spacing={4}>
              {teachers.map((teacher) => (
                <Grid item xs={12} sm={6} md={4} key={teacher._id}>
                  <TeacherCard data={teacher} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </div>
  );
}
export default Experts