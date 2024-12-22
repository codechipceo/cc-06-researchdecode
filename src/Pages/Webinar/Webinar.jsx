import { Box, Container, Grid } from "@mui/material";
import { CourseCard } from "../../Components/Cards/CourseCard";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import StatusHandler from "../../Components/statusHandler";
import { useWebinar } from "../../Hooks/use-Webinar";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useState, useEffect } from "react";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import RecommendedCourses from "../LandingPage/Section/RecommendedCourses";
import AllWebinars from "./AllWebinars";
import '../../assets/scss/components/webinar.scss'
const WebinarPage = () => {
  const limit = 8;
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [searchTerm, setSearchTerm] = useState(""); // State for search term triggered by the button
  const [activePage, setActivePage] = useState(1);
  const { webinars, isLoading, isError } = useWebinar(
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
      <HeaderThree title="Webinars " breadcrumbPath={breadcrumbPath} />
      {/* <h1 className="webinar-title">Find your Webinar</h1> */}
      <SearchBar
        value={searchInput}
        handleChange={handleInputChange}
        handleSearch={handleSearch}
        placeholder="Search your Webinar"
      />
      <AllWebinars />
      {/* Pagination Component */}
      <PaginationComponent
        total={webinars.length}
        limit={limit}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};
export default WebinarPage;