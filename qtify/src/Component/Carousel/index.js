import './carousel.css'
import Card from '../Card';

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Carousel ({data}) {
    return(
        <div className='carousel-container'>
            <Swiper
            modules={[Virtual, Navigation, Pagination]}
            // onSwiper={setSwiperRef}
            slidesPerView={8}
            // centeredSlides={true}
            spaceBetween={30}
            // pagination={{
            //   type: 'fraction',
            // }}
            // navigation={true}

            navigation = {{nextEl: ".arrow-left", prevEl: ".arrow-right"}}
            virtual
            >

            {data.map(cardData =><SwiperSlide key={cardData.id}> <Card                      
                imgSrc={cardData.image}
                label={cardData.title}
                followersCount={cardData.follows}
            /> </SwiperSlide>)}  
            </Swiper>

            <div className='arrow-left arrow'><img src='left.png' alt='left rarrow'/></div>
            <div className='arrow-right arrow'><img src='right.png' alt='right-arrow'/></div>

      </div>

    )
}