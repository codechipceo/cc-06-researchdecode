// SearchBar.jsx
import React, { useState } from 'react';
import { InputGroup, Input, Button, Loader } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import '../../assets/scss/components/SearchBar.scss'
import CustomButton from '../../assets/scss/components/CustomButton';


const SearchBar = ({ onSearch, placeholder = "Enter Your DOI No" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    try {
      // await onSearch(searchTerm);
      const response = await fetch(`https://api.crossref.org/works/${searchTerm}`);
      console.log(response);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Search results:", data);
      // Handle the response data as needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
  finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="custom-search-bar">
      <InputGroup>
        <Input 
          value={searchTerm}
          onChange={setSearchTerm}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isLoading}
        />
        <CustomButton
          variant="primary"
          fontWeight="medium"
          onClick={handleSearch}
          className="btn-size-10"
          disabled={isLoading}
          isLoading={isLoading}
        >
          Search
        </CustomButton>
      </InputGroup>
    </div>
  );
};

export default SearchBar;