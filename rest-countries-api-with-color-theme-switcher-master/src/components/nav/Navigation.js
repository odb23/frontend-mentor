import React, { useState } from 'react'

import './Navigation.css'

const Navigation = ({ filterChoice, setfilterChoice }) => {
  const [showDropdownMenu, setshowDropdownMenu] = useState(false)

  const handleDropdownContentClick = (region) => {
    setfilterChoice(region)
    setshowDropdownMenu(!showDropdownMenu)
  }

  const handleSearchSubmit = () => {

  }

  return (
    <nav >
      {/* country search input */}
      <input type={"search"} placeholder="Search for a country..." onSubmit={handleSearchSubmit}/>

      {/* filter by region dropdown */}
      <div id='dropdown'>

        <button className='dropdown-btn' onClick={() => setshowDropdownMenu(!showDropdownMenu)}>
          {
            filterChoice === "" ? "Filter by region" : filterChoice
          }
        </button>
      
        {/* dropdown contents */}
        <div className={
          `dropdown-content ${showDropdownMenu ? 'show' : ''}`
        }>
          <a href='/#' onClick={() => handleDropdownContentClick("Africa")}>Africa</a>
          <a href='/#' onClick={() => handleDropdownContentClick("America")}>America</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation