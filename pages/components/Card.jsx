import Card from '../components/ui/Card'
// import styles from '../styles/Home.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
    <div className='flex gap-10 my-5'>
    <h1>Blog</h1>
    <div className='flex gap-10'>
      <span className='prev cursor-pointer'>
        left
      </span>
      <span className='next cursor-pointer'>
        right
      </span>
    </div>
    </div>
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3}
      navigation={{ prevEl: '.prev', nextEl: '.next', clickable: true }}
      loop={true}
      autoplay= {{
        delay: 2000
      }}
      className={"swiper-container"}
    >
      <SwiperSlide> 
         <Card 
          date={"02 Oct 2022"}
          title={"Launch of the Africa DeFi Alliance DAO"}
          paragraph={"An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa."}
          tags={["Blockchain", "DAOs", "Decentralization"]}
          />
      </SwiperSlide>
      <SwiperSlide> 
        <Card 
        date={"02 Oct 2022"}
        title={"Launch of the Africa DeFi Alliance DAO 1"}
        paragraph={"An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa."}
        tags={["Blockchain", "DAOs", "Decentralization"]}
        />
      </SwiperSlide>
      <SwiperSlide>  
        <Card 
         date={"02 Oct 2022"}
         title={"Launch of the Africa DeFi Alliance DAO 2"}
         paragraph={"An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa."}
         tags={["Blockchain", "DAOs", "Decentralization"]}
        />
      </SwiperSlide>
      <SwiperSlide>  
        <Card 
         date={"02 Oct 2022"}
         title={"Launch of the Africa DeFi Alliance DAO 3"}
         paragraph={"An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa."}
         tags={["Blockchain", "DAOs", "Decentralization"]}
        />
      </SwiperSlide>
    </Swiper>
    </>
  )
}
