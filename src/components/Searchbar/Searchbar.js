import React from 'react';
import './Searchbar.css';

function Searchbar() {
  return (
    <section className='container-search'>
      <div className='search'>
        <i className='icon-search fas fa-search '></i>
        <input type='text' placeholder='Search......' />
      </div>
    </section>
  );
}

export default Searchbar;
