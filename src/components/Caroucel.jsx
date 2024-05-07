"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  
// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const Caroucel = () => {
  return (
    <div className='max-w-[1200px] mx-auto pt-20'>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <Image src="/sliderImg.png" className='w-full h-[250px]' width={'1200'} height={400} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/sliderImg.png" className='w-full h-[250px]' width={'1200'} height={400} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/sliderImg.png" className='w-full h-[250px]' width={'1200'} height={400} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/sliderImg.png" className='w-full h-[250px]' width={'1200'} height={400} alt="" />
        </SwiperSlide>
      </Swiper>
    
    </div>

  )
}

export default Caroucel