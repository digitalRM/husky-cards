import React from 'react'
import './Search.css'
import FeatherIcon  from 'feather-icons-react';
import Filter from './Filter';

export default function Search() {


  function handleSubmit(e) {
    e.target.search.value = '';
    e.preventDefault();
  }

  return (
    <>
    <div className='search-wrapper'>
      <form onSubmit={handleSubmit}>
      <button className='filter-btn'>
        <Filter />
          </button>
        <input name="search" className='search' placeholder='Search' />
          <button className='search-btn' type="submit">
            <FeatherIcon icon="search" className="search-icon" color="#FFF" />
          </button>
        </form>
      </div> 
    </>
  )
}
