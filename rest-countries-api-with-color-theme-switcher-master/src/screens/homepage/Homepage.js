import React, { useState } from 'react'

import Header from '../../components/header/Header'
import Navigation from '../../components/nav/Navigation'

function Homepage() {
  const [filterChoice, setfilterChoice] = useState("")

  return (
    <>
      <Header />
      <Navigation filterChoice={filterChoice} setfilterChoice={setfilterChoice}/>
    </>
  );
}


export default Homepage;