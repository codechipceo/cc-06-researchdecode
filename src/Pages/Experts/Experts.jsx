import { Box, Container, Grid } from "@mui/material";
import { TeacherCard } from "../../Components/Cards/TeacherCard";
import StatusHandler from "../../Components/statusHandler";
import { useConsultancyCard } from "../../Hooks/useConsultancyCard";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import SearchBar from "../../Components/Searchbar/SearchBar";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import { useState } from "react";

const Experts = () => {
  const { searchQuery, setSearchQuery } = useState("");

  const {
    consultancyCardData: teachers,
    isLoading,
    isError,
    handleSearch: fetchTeachers,
  } = useConsultancyCard();

  const handleChange = (value) => {
    setSearchQuery(value);
  };

  const handleSearch = () => {
    fetchTeachers({ search: searchQuery });
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];
  return (
    <div>
      <HeaderThree title="Experts" breadcrumbPath={breadcrumbPath} />

      <SearchBar
        value={searchQuery}
        handleChange={handleChange}
        handleSearch={handleSearch}
        className="input"
        placeholder="Search for experts"
      />

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

      <PaginationComponent
        total={1}
        // limit={limit}
        // activePage={activePage}
        // setActivePage={setActivePage}
      />
    </div>
  );
};
export default Experts;
