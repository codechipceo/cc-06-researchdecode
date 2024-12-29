import React, { useEffect, useState } from 'react';
import { Panel } from 'rsuite';
import Typography from '../../assets/scss/components/Typography';
import WebinarCard from '../../Components/WebinarCard/WebinarCard';
import { HeaderThree } from '../../Components/Headers/HeaderThree';
import '../../assets/scss/components/webinarCard.scss';
import { selectAllEnrolledWebinars,getAllEnrolledWebinar } from '../../Features/Slices/webinarEnrollSlice';
import { useDispatch, useSelector } from 'react-redux';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
import SearchBar from "../../Components/Searchbar/SearchBar";

const AllWebinars = () => {
  const limit = 5;
  const [searchInput, setSearchInput] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [activePage, setActivePage] = useState(1);

  const dispatch = useDispatch();

  
 
  const skip = (activePage - 1) * limit;

  const handleInputChange = (value) => {
    setSearchInput(value);
    if (value.trim() === "") {
      setSearchTerm("");
    }
  };

  const handleSearchTrigger = () => {
    setSearchTerm(searchInput.trim());
    setActivePage(1); 
  };

  useEffect(() => {
    dispatch(getAllEnrolledWebinar({ limit, skip, search: searchTerm }));
  }, [dispatch, activePage, searchTerm]);

  const allEnrolledWebinars = useSelector(selectAllEnrolledWebinars);


  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
      <HeaderThree title="My Webinars" breadcrumbPath={breadcrumbPath} />

      <SearchBar
        value={searchInput}
        handleChange={handleInputChange}
        handleSearch={handleSearchTrigger} 
        placeholder="Search your Webinar"
      />
      <Panel className="recommended-courses">
        <div className="recommended-header">
          <Typography size="2xl" variant="medium">
            Your Webinar
          </Typography>
        </div>
        <div className="courses-container">
          {allEnrolledWebinars && allEnrolledWebinars.length > 0 ? (
            allEnrolledWebinars.map((webinar) => (
              <div className="courses-item" key={webinar.id}>
                <WebinarCard webinar={webinar} />
              </div>
            ))
          ) : (
            <div>No webinars found.</div>
          )}
        </div>
        <PaginationComponent
          total={allEnrolledWebinars.length}
          limit={limit}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Panel>
    </>
  );
};

export default AllWebinars;
