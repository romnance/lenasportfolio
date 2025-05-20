import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Second from "../../images/2.png";
import Third from "../../images/3.png";
import First from "../../images/Group1.png";
import Slider from "./Slider";
import "./styles.css";

import { EffectCards, Pagination } from "swiper";

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
            paragraph1="Specialising in B2C"
            paragraph2="mobile app experiences"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            imgLink={Second}
            paragraph1="Driven by iteration"
            paragraph2="and user insight"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            imgLink={Third}
            paragraph1="Curious mind with a thing for"
            paragraph2="clarity and complexity"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SliderCarousel;
