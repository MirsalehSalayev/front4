import React from 'react'
import { Helmet } from 'react-helmet-async'
import OurTeam from '../../Sections/OurTeam'


function Home() {
  return (
    <>
    <Helmet>
        <title>Home</title>
    </Helmet>
    
    <OurTeam/>
    </>
  )
}

export default Home