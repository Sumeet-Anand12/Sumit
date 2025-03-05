import React from 'react'
import Rotation from './loader/Rotation'
import CategoryPanel from './sidebarPanel/CategoryPanel';
import Banner from './banner/Banner';
import HomeCatSlider from './slider/HomeCatSlider';

const HomePage = () => {
  return (
    <div>
      <div className='home-page'>
        <Rotation />
        <Banner />

      </div>
        <HomeCatSlider />
    </div>
  )
}

export default HomePage;