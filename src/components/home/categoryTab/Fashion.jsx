import React from 'react'
import watch from "../../../assets/Image/Product/watch.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import CateCard from './CateCard';

const Fashion = () => {
  return (
    <div className=' pt-4'>
      <Swiper
        navigation={true}
        slidesPerView={6}
        spaceBetween={0}
        modules={[Navigation]}
        className="mySwiper Category-wrapper"
      >
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
        <SwiperSlide>
          <CateCard />
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Fashion