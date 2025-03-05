import React from 'react'
import subBanner from '../../../assets/Image/Banner/sub-banner-1.jpg'
import subBanner2 from '../../../assets/Image/Banner/sub-banner-2.jpg'
import { NavLink } from 'react-router-dom';

const BannerRight = () => {
    return (
        <div className=' banner-Right'>
            <div className='sub-banner-first'>
                <div>
                    <img src={subBanner} alt="" />
                </div>
                <div className='banner-right-content'>
                 <ul>
                    <li>Samsung Gear
                    VR Camera</li>
                    <span className='fs-2 text-danger fw-bold'>$129.00</span>
                    <button className='border-0 fs-4 bg-transparent '><NavLink to={""}> Shop Now </NavLink></button>
                 </ul>

                </div>
            </div>
            <div>
                <img src={subBanner2} alt="" />
            </div>

        </div>
    )
}

export default BannerRight