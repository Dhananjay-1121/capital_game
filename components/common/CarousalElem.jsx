    "use client"
    import React, { useRef, useState } from 'react';
    // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import "./caurosal.css";


    // import required modules
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


    const CarousalElem = () => {
    return (
        <div className="flex justify-center" >
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            // mousewheel={true}
            // keyboard={true}
            slidesPerView={4} // Show 4 slides at a time
            // spaceBetween={30} // Add a gap of 20 pixels between slides
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
        >
        <div className="px-12 relative">
            <SwiperSlide> <Image src="/a2.png" className="px-5" height={100} width={100}/></SwiperSlide>
            <SwiperSlide> <Image src="/a1.png" className="px-5" height={100} width={100}/></SwiperSlide>
            <SwiperSlide> <Image src="/a3.png" className="px-5" height={100} width={100}/></SwiperSlide>
            <SwiperSlide> <Image src="/a4.png" className="px-5" height={100} width={100}/></SwiperSlide>
            <SwiperSlide> <Image src="/a1.png" className="px-5" height={100} width={100}/></SwiperSlide>
            <SwiperSlide> <Image src="/a2.png" className="px-5" height={100} width={100}/></SwiperSlide>
        </div>
            
        </Swiper>
        </div>
    );
    };

    export default CarousalElem;


    // "use client";
    // import React, { useRef, useState } from "react";
    // import { Swiper, SwiperSlide } from "swiper/react";
    // import { EffectCoverflow, Pagination } from "swiper/modules";

    // // Import Swiper styles
    // import "swiper/css";
    // import "swiper/css/effect-coverflow";
    // import "swiper/css/pagination";

    // import "./caurosal.css";

    // const CarousalElem = () => {
    //   return (
    //     <div className="flex">
    //     <button>Left</button>
    //       <Swiper
    //         effect={"coverflow"}
    //         grabCursor={true}
    //         centeredSlides={true}
    //         slidesPerView={3}
    //         coverflowEffect={{
    //           rotate: 50,
    //           stretch: 0,
    //           depth: 100,
    //           modifier: 1,
    //           slideShadows: true,
    //         }}
    //         pagination={true}
    //         modules={[EffectCoverflow, Pagination]}
    //         className="mySwiper"
    //         initialSlide={3}
    //       >
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    //         </SwiperSlide>
    //         <SwiperSlide>
    //           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    //         </SwiperSlide>
    //       </Swiper>
    // <button>Right</button>
    //     </div>
    //   );
    // };

    // export default CarousalElem;
