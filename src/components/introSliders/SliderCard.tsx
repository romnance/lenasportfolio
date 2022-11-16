import React, { FC } from 'react'; 
import {Section, Div, Emoji} from "./styles";

type SliderProps = {
  color: string,
  paragraph: string,
  imgLink: string
}

const SliderCard: FC<SliderProps> = ({ color, paragraph = "Hi, I'm Lena", imgLink }) => {
return (
    <Section color={color}>
        <Div>
            <Emoji imgLink={imgLink} />       
             <p>{ paragraph }</p>
        </Div>
    </Section>
    )
}

export default SliderCard;
