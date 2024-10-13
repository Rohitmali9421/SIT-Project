import React from 'react'
import Banner from './Baner'
import Galary from './Galary'
import LatestProduct from './LatestProduct'
import TrandingProducts from './TrandingProducts'

function Home() {
  return (
    <div>
      <Banner/>
      <Galary/>
      <LatestProduct/>
      <TrandingProducts/>
    </div>
  )
}

export default Home
