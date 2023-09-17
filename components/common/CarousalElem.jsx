    "use client"
    import React from 'react';
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css/bundle'; // Import Swiper styles
    import './caurosal.css'; // Your CSS file
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
    import Image from 'next/image';
    
    const CarousalElem = () => {
      return (
        <div className="carousel-container">
          <div className="carousel-buttons z-30">
            <button className="carousel-button cursor-pointer carousel-button-prev">Left</button>
            <button className="carousel-button cursor-pointer carousel-button-next">Right</button>
          </div>
          <Swiper
            navigation={{
              prevEl: '.carousel-button-prev',
              nextEl: '.carousel-button-next',
            }}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <div className="px-12">
              <SwiperSlide>
                <Image src="/a2.png" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/a1.png" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/a3.png" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/a4.png" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/a1.png" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/a2.png" fill />
              </SwiperSlide>
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
