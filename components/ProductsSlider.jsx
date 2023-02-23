// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination , Autoplay } from "swiper";
function ProductsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[FreeMode ,Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="h-60 w-40">swipper 1</div>
        </SwiperSlide>
   
      </Swiper>
    </>
  );
}


export default ProductsSlider
