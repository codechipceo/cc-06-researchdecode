import { Box, Container, Grid } from "@mui/material";
import { TeacherCard } from "../../Components/Cards/TeacherCard";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import StatusHandler from "../../Components/statusHandler";
import { useConsultancyCard } from "../../Hooks/useConsultancyCard";

const Experts = () => {
  const {
    consultancyCardData: teachers,
    isLoading,
    isError,
  } = useConsultancyCard();

  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderTwo title='EXPERTS' breadcrumbPath={breadcrumbPath} />
      <Container maxWidth='lg' sx={{ marginTop: "40px" }}>
        <Box sx={{ flexGrow: 1, margin: "20px" }}>
          <StatusHandler
            isLoading={isLoading}
            isError={isError}
            errorMessage='Error loading Experts'
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
};
export default Experts;
