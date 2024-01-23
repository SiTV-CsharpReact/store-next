// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "react-slick";
import { Navigation, Pagination, EffectFade, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './styles.css';
import Image from 'next/image';
import Slide1 from '@/images/slide/s1_d1.webp'
import Slide2 from '@/images/slide/s2_d1.webp'
import Slide3 from '@/images/slide/s3_d1.webp'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Slide = () => {
  return (
    <>
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><Image src={Slide1}  alt='oke'></Image></SwiperSlide>
        <SwiperSlide><Image src={Slide2} alt='oke'></Image></SwiperSlide>
        <SwiperSlide><Image src={Slide3} alt='oke'></Image></SwiperSlide>
        <SwiperSlide><Image src={Slide1} alt='oke'></Image></SwiperSlide>
        <div className="bls__slide-content h-full d-flex container-fluid left_position middle_position">
                      <div className="sf__slide-content text-left text-md-left animation-effect_fadeindown   " >
                        
                          <div className="slide__block-subtitle heading-color">TOP TRENDING</div>
                        
                        
                          <h2 className="slide__block-title  mb-15">
                            Lifestyle
                          </h2>
                        
                        
                          <div className="slide__block-description"><p>Upgrade your home with our amazing assortment of decor.</p></div>
                        
                        
                          <a href="/collections/lifestyle" className="slide__block-link fs-12 uppercase heading-color btn-primary  d-inline-flex">
                            Explore Now
                          </a>
                        
                      </div>
                    </div>
      </Swiper>

    </>
  )
}

export default Slide