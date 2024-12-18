import React from 'react'
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import { Panel } from 'rsuite';
import Typography from "../../assets/scss/components/Typography"; // Import your custom typography component
import SearchBar from '../../Components/Searchbar/SearchBar';
import PaperCard from "../../Components/card";
import { List } from '@mui/material';
import PaginationComponent from '../../Components/Pagination/PaginationComponent'
import ResearchPaperCard from '../../Components/ReacherchPaperCard/ReacherchPaperCard'
import {
  usePendingRequests,
  useResearchPaper,
} from "../../Hooks/use-researchPaper";

const ResearchPaper = () => {
    const {
    doiNumber,
    setDoiNumber,
    researchPaper,
    isLoading,
    isError,
    setResearchPaper,
    handleSearch,
  } = useResearchPaper();

   const {pendingRequestCount, pendingRequests, activePage, setActivePage, limit } = usePendingRequests();
   console.log(pendingRequestCount);

    const handleSendPaper = (userId) => {
    // Implement the logic to send the paper
    // navigate(/inbox/${userId}); // Uncomment this if you have the navigation logic in place
  };
  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
    <HeaderThree title='Research' breadcrumbPath={breadcrumbPath} backgroundImage ={"../../../public/images/banner/bgrp.png"} />

    <div className="research-collaboration">
      <Panel className="search-panel">
       <Typography className="collab" size={"3xl"} variant={"semibold"}>Find Your Next Research Collaboration</Typography>
        <SearchBar value={doiNumber} setValue={setDoiNumber} className="input" onSearch={handleSearch} placeholder='Enter Your DOI No' />
        <Typography size={"md"} variant={"semibold"} className="loved-text">Loved by over 600 academics</Typography>
      </Panel>


            {!isLoading && !isError && researchPaper && (
          <PaperCard
            setDoiNumber={setDoiNumber}
            title={researchPaper.title}
            setPaper={setResearchPaper}
            author={researchPaper.author}
            publishedDate={researchPaper.publishedDate}
            doi={researchPaper.DOI}
            language={researchPaper.language}
            abstract={researchPaper.abstract}
            paperDetail={researchPaper}
          />
        )}

            <List>
            {pendingRequests &&
              pendingRequests.map((request) => (
                // <RequestLink
                //   key={request._id}
                //   request={request}
                //   onSend={handleSendPaper}
                // />
                 <ResearchPaperCard requestDetail={request} />
              ))}
          </List>

           <PaginationComponent
          limit={limit}
          total={pendingRequestCount} // Ensure `total` is part of the pendingRequests data
          activePage={activePage}
          setActivePage={setActivePage}
          maxButtons={4}
        />

      </div>
    </>
  )
}

export default ResearchPaper
