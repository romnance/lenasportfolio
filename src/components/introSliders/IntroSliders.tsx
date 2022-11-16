import React, { FC } from 'react'; 
import {Slider} from "./styles";
import SliderCard from "./SliderCard";

type Props = {
}

const IntroSliders: FC<Props> = () => {
return (
    <Slider>        
        <SliderCard imgLink='../../images/1.png' color="#F3D3AD" paragraph="Hi, I'm Lena, UX/UI Designer" />
        <SliderCard imgLink='../../images/1.png' color="#F3D3AD" paragraph="Hi, I'm Lena, UX/UI Designer" />
        <SliderCard imgLink='../../images/1.png' color="#F3D3AD" paragraph="Hi, I'm Lena, UX/UI Designer" />
        <SliderCard imgLink='../../images/1.png' color="#F3D3AD" paragraph="Hi, I'm Lena, UX/UI Designer" />
        <SliderCard imgLink='../../images/1.png' color="#F3D3AD" paragraph="Hi, I'm Lena, UX/UI Designer" />
    </Slider>
    )
}

export default IntroSliders;
