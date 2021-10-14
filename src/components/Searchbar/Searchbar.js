import React from 'react';
import './Searchbar.css';
import { useState, useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';

function Searchbar() {
  const { searchText, setSearchText } = useContext(SearchContext);

  return (
    <section className='container-search'>
      <div className='search'>
        <i className='icon-search fas fa-search '></i>
        <input
          type='text'
          placeholder='Search......'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // setCurrentPage(1);
          }}
        />
      </div>
    </section>
  );
}

export default Searchbar;
