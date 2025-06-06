import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'


const Swipe = () => {
  return (
   <div>

    <div className="mt-24 text-center">
      <p className="text-[#D99904] italic font-semibold text-xl">---From 11:00am to 10:00pm---</p>
      <h2 className="text-4xl font-bold p-6 border-t-2 border-b-2 border-[#E8E8E8] max-w-sm mx-auto mt-4 mb-5">ORDER ONLINE</h2>
    </div>

     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide><img src={slide1} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Salads</h3>
      
      </SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" />

      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" />
      
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Ice Cream</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide4} alt="" />
      
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Cake</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide5} alt="" />
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Salads</h3>
      
      </SwiperSlide>
      <SwiperSlide><img src={slide2} alt="" />
      
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide1} alt="" />
      
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Cake</h3>
      </SwiperSlide>
      <SwiperSlide><img src={slide3} alt="" />
      
      <h3 className="text-4xl uppercase text-center -mt-20 text-white">Ice Cream</h3>
      </SwiperSlide>

    </Swiper>
   </div>
  );
};

export default Swipe;
