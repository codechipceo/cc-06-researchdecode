import { Box, Container, Grid } from "@mui/material";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { HeaderTwo } from "../../Components/Headers/HeaderTwo";
import StatusHandler from "../../Components/statusHandler";
import { useCourse } from "../../Hooks/use-course";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useState, useEffect } from "react";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import RecommendedCourses from "../LandingPage/Section/RecommendedCourses";
import AllCourses from "./AllCourses";

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
      <HeaderTwo title="Course " breadcrumbPath={breadcrumbPath} />
      <SearchBar
        value={searchInput}
        handleChange={handleInputChange}
        handleSearch={handleSearch}
        placeholder="Search your favourite course"
      />
      <AllCourses />
      {/* Pagination Component */}
      {/* <PaginationComponent
        total={courseCount}
        limit={limit}
        activePage={activePage}
        setActivePage={setActivePage}
      /> */}
    </div>
  );
};

export default CoursePage;
