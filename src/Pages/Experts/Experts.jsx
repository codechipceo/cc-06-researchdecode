import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import { useTeacher } from "../../Hooks/use-teacher";
import { TeacherCard } from "../../Components/Cards/TeacherCard";

export default function Experts() {
const{
  teacherData:teachers,
  isTeacherLoading:isLoading,
  isTeacherError:isError
}=useTeacher()


  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderTwo title="EXPERTS" breadcrumbPath={breadcrumbPath} />
      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        <Box sx={{ flexGrow: 1, margin: "20px" }}>
          {isLoading ? (
            <Typography variant="h6" align="center">
              Loading...
            </Typography>
          ) : isError ? (
            <Typography variant="h6" align="center" color="error">
              Error loading Experts
            </Typography>
          ) : teachers.length === 0 ? (
            <Typography variant="h6" align="center">
              No Experts available
            </Typography>
          ) : (
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
