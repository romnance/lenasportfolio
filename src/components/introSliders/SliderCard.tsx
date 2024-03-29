import React, { FC } from 'react'; 
import {Section, Div, Emoji, Img, Title} from "./styles";

type SliderProps = {
  color: string,
  paragraph1: string,
  paragraph2?: string,
  imgLink: string,
  cb: Function,
}


const SliderCard: FC<SliderProps> = ({ color, paragraph1, paragraph2, imgLink, cb }) => {
return (
    <Section color={color} onClick={() => cb()}>
        <Div>
            <Emoji><Img src={imgLink} /></Emoji>
            <Div>
                <Title>{ paragraph1 }<br />{ paragraph2 }</Title>
            </Div>      
        </Div>
    </Section>
    )
}

export default SliderCard;
