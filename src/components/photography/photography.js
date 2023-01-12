import React from 'react'
import "../photography/photography.css"
import { Swiper, SwiperSlide, } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../footer/footer"
import img1 from "../assets/photography/image1.jpg"
import img2 from "../assets/photography/image2.jpg"
import img3 from "../assets/photography/image3.jpg"
import img4 from "../assets/photography/image4.jpg"
import img5 from "../assets/photography/image5.jpg"
import img6 from "../assets/photography/image6.jpg"
import img7 from "../assets/photography/image7.jpg"

// import required modules
import { Autoplay, Navigation } from "swiper";
export default function Photography() {
    return (

        <>
            <div className='photography__container'>
                <Swiper
                    autoplay={true}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    spaceBetween={10}
                    className="mySwiper"
                    style=
                    {{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "40px",
                    }}

                >



                    <SwiperSlide>
                        <img src={img1} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img2} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img3} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img4} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img5} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img6} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={img7} alt="slide image" className='slider__img' />
                    </SwiperSlide>

                </Swiper>

            </div>

            <Footer />
        </>
    )
}
