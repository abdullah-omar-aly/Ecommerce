import ContactBar from '../components/ContactBar'
import Navbar from '../features/navbar/Navbar'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

function HomePage() {

  return (
    <section className='px-10'>
       <div className='max-w-[1000px] mx-auto'  >
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=''>
              <img className='h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg"  />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-80'>Slide 9</div>
        </SwiperSlide>
      </Swiper>
       </div>
    </section>
  );

  
}
export default HomePage;


HomePage.getLayout = function pageLayout(page) {
  return (<>
    <ContactBar />
    <Navbar />
    {page}

  </>)
}



  
