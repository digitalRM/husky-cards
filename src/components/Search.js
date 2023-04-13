import React from 'react'
import './Search.css'
import FeatherIcon from 'feather-icons-react';

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
            <FeatherIcon icon="sliders" className="filter-icon" size="36" stroke-width="2.8" color="#1E1E1E" />
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
