import { Box, Container, Grid } from "@mui/material";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import StatusHandler from "../../Components/statusHandler";
import { useCourse } from "../../Hooks/use-course";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useState, useEffect } from "react";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";

const CoursePage = () => {
  const limit = 9;
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [searchTerm, setSearchTerm] = useState(""); // State for search term triggered by the button
  const [activePage, setActivePage] = useState(1);
  const { courseData, courseCount, isCourseLoading, isCourseError } = useCourse(
    limit,
    (activePage - 1) * limit,
    searchTerm
  );

  const handleSearch = (val) => {
    setSearchTerm(val);
  };


  const handleInputChange = (value) => {
    setSearchInput(value);
    if (value.trim() === "") {
      setSearchTerm("");
    }
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderTwo title="COURSES" breadcrumbPath={breadcrumbPath} />
      <SearchBar
        value={searchInput}
        handleChange={handleInputChange}
        handleSearch={handleSearch}
        placeholder="Search Collaboration"
      />
      <Container sx={{ marginTop: "40px" }}>
        <Box>
          <StatusHandler
            isLoading={isCourseLoading}
            isError={isCourseError}
            errorMessage="Error loading courses"
          />
          {!isCourseLoading && !isCourseError && (
            <Grid container spacing={3}>
              {courseData.length > 0 ? (
                courseData.map((course) => (
                  <Grid item xs={12} md={3} key={course._id}>
                    <CourseCard course={course} />
                  </Grid>
                ))
              ) : (
                <p>No courses found</p>
              )}
            </Grid>
          )}
        </Box>
      </Container>

      {/* Pagination Component */}
      <PaginationComponent
        total={courseCount}
        limit={limit}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default CoursePage;
