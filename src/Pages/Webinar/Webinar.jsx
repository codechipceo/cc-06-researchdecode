import { Box, Container, Grid } from "@mui/material";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import { useWebinar } from "../../Hooks/use-Webinar";
import SearchBar from "../../Components/Searchbar/SearchBar";
import { useState } from "react";
import PaginationComponent from "../../Components/Pagination/PaginationComponent";
import AllWebinars from "./AllWebinars";
import '../../assets/scss/components/webinar.scss';

const WebinarPage = () => {
  const limit = 5;
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [searchTerm, setSearchTerm] = useState(""); // State for search term triggered by the button
  const [activePage, setActivePage] = useState(1);

  const { webinars, isLoading, isError } = useWebinar(
    limit,
    (activePage - 1) * limit,
    searchTerm
  );

  const handleInputChange = (value) => {
    setSearchInput(value);
    if (value.trim() === "") {
      setSearchTerm("");
    }
  };

  const handleSearchTrigger = () => {
    setSearchTerm(searchInput.trim()); 
  };

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <div>
      <HeaderThree title="Webinars" breadcrumbPath={breadcrumbPath} />
      <SearchBar
        value={searchInput}
        handleChange={handleInputChange}
        handleSearch={handleSearchTrigger} // Use the trigger function
        placeholder="Search your Webinar"
      />
      <AllWebinars />
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
