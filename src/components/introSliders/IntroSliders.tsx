import React, { FC, useState } from 'react'; 
import {Slider, CurrentSliderContainer, CurrentSlider, InactiveSlider} from "./styles";
import SliderCard from "./SliderCard";
import First from "../../images/Group1.png";
import Second from "../../images/2.png";
import Third from "../../images/3.png";


type Props = {
}

const IntroSliders: FC<Props> = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1)
        } else 
        setCurrentPage(1)
    }

    const firstPage = () => {
    if (currentPage === 1) {
        return (    
        <>   
            <SliderCard cb={nextPage} imgLink={First} color="#F3D3AD" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" />     
            <SliderCard cb={nextPage} imgLink={Second} color="#D1EBCB" paragraph1="1+ years of experience" paragraph2="in B2C product" />
            <SliderCard cb={nextPage} imgLink={Third} color="#BCB8F0" paragraph1="Multitasking and love" paragraph2="to explore new things" />
            <CurrentSliderContainer>
            <CurrentSlider /><InactiveSlider /><InactiveSlider />
            </CurrentSliderContainer>
        </>)
        }
    }

    const secondPage = () => {
    if (currentPage === 2) {
        return (    
        <>       
            <SliderCard cb={nextPage} imgLink={Second} color="#D1EBCB" paragraph1="1+ years of experience" paragraph2="in B2C product" />
            <SliderCard cb={nextPage} imgLink={Third} color="#BCB8F0" paragraph1="Multitasking and love" paragraph2="to explore new things" />
            <SliderCard cb={nextPage} imgLink={First} color="#F3D3AD" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" /> 
            <CurrentSliderContainer>
            <InactiveSlider /><CurrentSlider /><InactiveSlider />
            </CurrentSliderContainer>
        </>)
        }
    }

    const thirdPage = () => {
    if (currentPage === 3) {
        return (    
        <>       
            <SliderCard cb={nextPage} imgLink={Third} color="#BCB8F0" paragraph1="Multitasking and love" paragraph2="to explore new things" />
            <SliderCard cb={nextPage} imgLink={First} color="#F3D3AD" paragraph1="Hi, I'm Lena," paragraph2="UX/UI Designer" /> 
            <SliderCard cb={nextPage} imgLink={Second} color="#D1EBCB" paragraph1="1+ years of experience" paragraph2="in B2C product" />
            <CurrentSliderContainer>
            <InactiveSlider /><InactiveSlider /><CurrentSlider />
            </CurrentSliderContainer>
        </>)
        }
    }

return (
    <Slider>
        {firstPage()}
        {secondPage()}
        {thirdPage()}
    </Slider>
    )
}

export default IntroSliders;
