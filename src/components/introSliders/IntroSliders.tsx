import { FC, useState } from "react";
import Second from "../../images/2.png";
import Third from "../../images/3.png";
import First from "../../images/Group1.png";
import AnimatedTransition from "../AnimationTransition";
import SliderCard from "./SliderCard";
import {
  CurrentSlider,
  CurrentSliderContainer,
  InactiveSlider,
  Slider,
} from "./styles";

type Props = {};

const IntroSliders: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else setCurrentPage(1);
  };

  const firstPage = () => {
    if (currentPage === 1) {
      return (
        <AnimatedTransition>
          <SliderCard
            cb={nextPage}
            imgLink={First}
            color="#EDE8FF"
            paragraph1="Hi, I'm Lena,"
            paragraph2="UX/UI Designer"
          />
          <SliderCard
            cb={nextPage}
            imgLink={Second}
            color="rgba(237, 232, 255, 0.5)"
            paragraph1="1+ years of experience"
            paragraph2="in B2C product"
          />
          <CurrentSliderContainer>
            <CurrentSlider />
            <InactiveSlider />
            <InactiveSlider />
          </CurrentSliderContainer>
        </AnimatedTransition>
      );
    }
  };

  const secondPage = () => {
    if (currentPage === 2) {
      return (
        <AnimatedTransition>
          <SliderCard
            cb={nextPage}
            imgLink={Second}
            color="#EDE8FF"
            paragraph1="1+ years of experience in"
            paragraph2="B2C product"
          />
          <SliderCard
            cb={nextPage}
            imgLink={Third}
            color="rgba(237, 232, 255, 0.5)"
            paragraph1="Multitasking and love"
            paragraph2="to explore new things"
          />
          <CurrentSliderContainer>
            <InactiveSlider />
            <CurrentSlider />
            <InactiveSlider />
          </CurrentSliderContainer>
        </AnimatedTransition>
      );
    }
  };

  const thirdPage = () => {
    if (currentPage === 3) {
      return (
        <AnimatedTransition>
          <SliderCard
            cb={nextPage}
            imgLink={Third}
            color="#EDE8FF"
            paragraph1="Multitasking and love"
            paragraph2="to explore new things"
          />
          <SliderCard
            cb={nextPage}
            imgLink={First}
            color="rgba(237, 232, 255, 0.5)"
            paragraph1="Hi, I'm Lena,"
            paragraph2="UX/UI Designer"
          />
          <CurrentSliderContainer>
            <InactiveSlider />
            <InactiveSlider />
            <CurrentSlider />
          </CurrentSliderContainer>
        </AnimatedTransition>
      );
    }
  };

  return (
    <Slider>
      {firstPage()}
      {secondPage()}
      {thirdPage()}
    </Slider>
  );
};

export default IntroSliders;
