import React from 'react'

import './Navigation.css'

const Navigation = () => {
  return (
    <nav >
      <div className='container'>
        <input type={"search"} placeholder="Search for a country..." />

       <div id='dropdown'>
         <div id='dropdown-menu'>
           Filter by region
         </div>
         <div className='dropdown-content'>
           <p>Africa</p>
         </div>
       </div>
      </div>
    </nav>
  )
}

export default Navigation

// Use a variable to store current filter key and the variable is null filter button should update innerText
// use passing state up technique for this particukar state management 