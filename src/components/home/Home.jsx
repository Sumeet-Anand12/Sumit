import React from 'react'
import Rotation from './loader/Rotation'
import CategoryPanel from './sidebarPanel/CategoryPanel';
import Banner from './banner/Banner';
import HomeCatSlider from './slider/HomeCatSlider';
import CardBanner from './cardbanner/CardBanner';
import CategoryTab from './categoryTab/CategoryTab';
const HomePage = () => {
  return (
    <div>
      <div className='home-page'>
        <Rotation />
        <Banner />
        <HomeCatSlider />
      </div>
      <div className='home-card-banner'>
        <CardBanner />
         <CategoryTab />
      </div>
    </div>
  )
}

export default HomePage;