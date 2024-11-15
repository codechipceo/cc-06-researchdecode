// SearchBar.jsx
import React, { useState } from 'react';
import { InputGroup, Input, Button, Loader } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import '../../assets/scss/components/SearchBar.scss'
import CustomButton from '../../assets/scss/components/CustomButton';


const SearchBar = ({setValue,value, onSearch, placeholder = "Enter Your DOI No" }) => {
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = async () => {
    if (!value.trim()) return;

    setIsLoading(true);
    try {
      await onSearch(value);
    } finally {
      setIsLoading(false);
    }
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  const handleonChange = (e)=>{
    setValue(e)
    
  }

  return (
    <div className="custom-search-bar">
      <InputGroup>
        <Input 
          value={value}
          // onChange={setSearchTerm}
          onChange={handleonChange}
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