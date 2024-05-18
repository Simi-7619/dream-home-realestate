import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Slider1 from '../Sliders/Slider1';
import Slider2 from '../Sliders/Slider2';
import Slider3 from '../Sliders/Slider3';
import Slider4 from '../Sliders/Slider4';
import Slider5 from '../Sliders/Slider5';
import About from '../layouts/About';
import Properties from '../layouts/Properties';


const Home = () => {
    return (
        <>
        {/* hero section with swiper slider */}
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{delay: 4000}}
            pagination={{ clickable: true, loop: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><Slider1/></SwiperSlide>
            <SwiperSlide><Slider2/></SwiperSlide>
            <SwiperSlide><Slider3/></SwiperSlide>
            <SwiperSlide><Slider4/></SwiperSlide>
            <SwiperSlide><Slider5/></SwiperSlide>
        </Swiper>

        {/* about section as extra section */}
        <About/>

        {/* featured Properties */}
        <Properties/>
        </>
    );
};

export default Home;