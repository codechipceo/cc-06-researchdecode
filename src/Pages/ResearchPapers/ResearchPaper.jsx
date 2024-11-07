import React from 'react'
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import { Panel } from 'rsuite';
import Typography from "../../assets/scss/components/Typography"; // Import your custom typography component
import SearchBar from '../../Components/Searchbar/SearchBar';
import "./ResearchPaper.scss";


const ResearchPaper = () => {

    const handleSearch = (searchItem)=>{
    console.log(searchItem);
    
  }

  const breadcrumbPath = [{ label: "Home", path: "/" }];

  return (
    <>
    <HeaderThree title='Research' breadcrumbPath={breadcrumbPath} backgroundImage ={"../../../public/images/banner/bgrp.png"} />

    <div className="research-collaboration">
      <Panel className="search-panel">
       <Typography className="collab" size={"3xl"} variant={"semibold"}>Find Your Next Research Collaboration</Typography>
        <SearchBar className="input" onSearch={handleSearch} placeholder='Enter Your DOI No' />
        <Typography size={"md"} variant={"semibold"} className="loved-text">Loved by over 600 academics</Typography>
      </Panel>
    </div>
    </>
  )
}

export default ResearchPaper
