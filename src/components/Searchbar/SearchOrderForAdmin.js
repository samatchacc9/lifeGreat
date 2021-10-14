import React from 'react';
import './SearchFourField.css';
import { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';

function SearchOrderForAdmin() {
  const { searchNameText, setSearchNameText } = useContext(SearchContext);
  return (
    <div className='frame-search-data '>
      <form>
        <div className='field-col4'>
          <div className='field'>
            <input
              type='text'
              placeholder='ชื่อ-สกุล'
              value={searchNameText}
              onChange={(e) => {
                setSearchNameText(e.target.value);
                // setCurrentPage(1);
              }}
            />
            <i className='fas fa-user'></i>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchOrderForAdmin;
