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
import Faq from '../layouts/Faq';
import { Helmet } from 'react-helmet';
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';


const Home = () => {
    // const {loader} = useContext(AuthContext)

    // if(loader){
    //     return <span className="loading loading-spinner text-accent"></span>

    // }
    return (
        <>
            <Helmet>
                <title>Dream Home | Home</title>
            </Helmet>
            {/* hero section with swiper slider */}
            <div className='z-12 relative'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true, loop: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><Slider1 /></SwiperSlide>
                    <SwiperSlide><Slider2 /></SwiperSlide>
                    <SwiperSlide><Slider3 /></SwiperSlide>
                    <SwiperSlide><Slider4 /></SwiperSlide>
                    <SwiperSlide><Slider5 /></SwiperSlide>
                </Swiper>
            </div>

            {/* about section as extra section */}
            <About />

            {/* featured Properties */}
            <Properties />

            {/* faq as extra section */}
            <Faq />
        </>
    );
};

export default Home;