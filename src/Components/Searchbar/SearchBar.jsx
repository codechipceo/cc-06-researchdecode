// SearchBar.jsx
import React, { useState } from 'react';
import { Input, InputGroup } from 'rsuite';
import '../../assets/scss/components/SearchBar.scss';
import CustomButton from '../../Components/CustomButton/CustomButton';


const SearchBar = ({
  handleChange,
  handleSearch,
  value,
  onSearch,
  placeholder = "Enter Your DOI No",
}) => {
  const [isLoading, setIsLoading] = useState(false);



  return (
    <div className='custom-search-bar' style={{display: 'flex', gap: '10px', }}>
      <InputGroup>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isLoading}
        />
        </InputGroup>
        <CustomButton
          variant='primary'
          fontWeight='medium'
          onClick={handleSearch}
          className='btn-size-10'
          disabled={isLoading}
          isLoading={isLoading}
        >
          Search
        </CustomButton>
    </div>
  );
};

export default SearchBar;