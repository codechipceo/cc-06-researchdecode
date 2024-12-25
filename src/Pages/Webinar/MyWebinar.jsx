import React ,{useEffect, useState} from 'react';
import { Panel } from 'rsuite';
import Typography from '../../assets/scss/components/Typography';
import WebinarCard from '../../Components/WebinarCard/WebinarCard';
import { HeaderThree } from '../../Components/Headers/HeaderThree';
import '../../assets/scss/components/webinarCard.scss'
import { selectAllEnrolledWebinars,getAllEnrolledWebinar } from '../../Features/Slices/webinarEnrollSlice';
import { useDispatch, useSelector } from 'react-redux';
import PaginationComponent from '../../Components/Pagination/PaginationComponent';
const AllWebinars = () => {

  const limit = 8;
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllEnrolledWebinar())
},[])

 const allEnrolledWebinars= useSelector(selectAllEnrolledWebinars);

 console.log("data ",allEnrolledWebinars);
 
 const breadcrumbPath = [{ label: "Home", path: "/" }];

 return (
  <>
  <HeaderThree title="My Webinars " breadcrumbPath={breadcrumbPath} />
      <Panel className="recommended-courses">
          <div className="recommended-header">
              <Typography size="2xl" variant="medium">
                  Featured Webinar
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