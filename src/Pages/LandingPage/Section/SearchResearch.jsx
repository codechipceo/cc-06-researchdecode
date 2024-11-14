import React, { useState } from 'react'
import { Panel } from 'rsuite';
import "./SearchResearch.scss";
import Typography from "../../../assets/scss/components/Typography"; // Import your custom typography component
import SearchBar from '../../../Components/Searchbar/SearchBar';
import { useNavigate } from 'react-router-dom';
const SearchResearch = () => {
  const navigate = useNavigate();
  const [item , setItem]= useState("");
  const handleSearch = (searchItem)=>{
    navigate("/searchPaper")
    console.log(searchItem);
    
  }
  return (
    <div className="research-collaboration">
      <Panel className="search-panel">
       <Typography className="collab" size={"3xl"} variant={"semibold"}>Find Your Next Research Collaboration</Typography>
        <SearchBar  value={item} setValue={setItem} className="input" onSearch={handleSearch} placeholder='Search for the Program' />
        <Typography size={"md"} variant={"semibold"} className="loved-text">Loved by over 600 academics</Typography>
        <Typography size={"sm"} variant={"regular"} className={"normal"}>Access over 160 million publication pages and stay up to date with what's happening in your field.</Typography>
      </Panel>
    </div>
  )
}

export default SearchResearch
