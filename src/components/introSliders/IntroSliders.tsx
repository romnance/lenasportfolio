import React, { FC } from 'react'; 
import {Slider} from "./styles";
import SliderCard from "./SliderCard";
import First from "../../images/Group1.png";
import Second from "../../images/2.png";
import Third from "../../images/3.png";


type Props = {
}

const IntroSliders: FC<Props> = () => {
return (
    <Slider>        
        <SliderCard imgLink={First} color="#F3D3AD" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" />
        <SliderCard imgLink={Second} color="#D1EBCB" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" />
        <SliderCard imgLink={Third} color="#BCB8F0" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" />
    </Slider>
    )
}

export default IntroSliders;
