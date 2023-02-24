import ContactBar from '../components/contact-bar'
import Navbar from '../components/navbar'
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
    <section className='container max-w-screen-xl'>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
        <div className='rounded-xl overflow-hidden'>
          {/* <Image src="/small_banner_1.jpg" width="100" height="100"/> */}
          <img src='/small_banner_1.jpg' alt='' />
        </div>
        <div className='rounded-xl overflow-hidden'>
          {/* <Image src="/small_banner_1.jpg" width="100" height="100"/> */}
          <img src='/small_banner_2.jpg' alt='' />
        </div>
        <div className='rounded-xl overflow-hidden'>
          {/* <Image src="/small_banner_1.jpg" width="100" height="100"/> */}
          <img src='/small_banner_3.jpg' alt='' />
        </div>
        <div className='rounded-xl overflow-hidden'>
          {/* <Image src="/small_banner_1.jpg" width="100" height="100"/> */}
          <img src='/small_banner_4.jpg' alt='' />
        </div>

      </section>
      <div className=' rounded-3xl overflow-hidden'  >
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
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=''>
              {/* <Image src={} /> */}
              <img className='min-h-60 h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_23_.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=''>
              {/* <Image src={} /> */}
              <img className='h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_25_.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=''>
              {/* <Image src={} /> */}
              <img className='h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_26_.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=''>
              {/* <Image src={} /> */}
              <img className='h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_1_.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=''>
              {/* <Image src={} /> */}
              <img className='h-80' src="https://eg-rv.homzmart.net/mageplaza/bannerslider/banner/image/s/l/slider_dt-en_copy_4_0.75x_1_.png" />
            </div>
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




