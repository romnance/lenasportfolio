import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "./Slider";
import First from "../../images/Group1.png";
import Second from "../../images/2.png";
import Third from "../../images/3.png";
import "./styles.css";

import { Pagination, EffectCards } from "swiper";

function SliderCarousel() {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        effect={"cards"}
        grabCursor={true}
        spaceBetween={40}
        loop={true}
        modules={[Pagination, EffectCards]}
        className="mySwiper"
        centeredSlides={true}
      >
        <SwiperSlide>
          <Slider
            imgLink={First}
            paragraph1="Hi, I'm Lena,"
            paragraph2="UX/UI Designer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            imgLink={Second}
            paragraph1="1+ years of experience"
            paragraph2="in B2C product"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            imgLink={Third}
            paragraph1="Multitasking and love"
            paragraph2="to explore new things"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderCarousel;
