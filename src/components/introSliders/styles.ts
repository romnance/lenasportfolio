import styled from 'styled-components';

interface Color {
  color: string;
}

interface Link {
    imgLink: string;
}

export const Slider = styled.div`
    padding-top: 100px;
    width: 90%;
    height: 750px;
    display: flex;
    box-sizing: border-box;
    transition: 0.4s ease-out;
    position: relative;
    left: calc(50% - 45%);
`

export const Section = styled.section<Color>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 80%;
    padding-top:8px;
    background-color: ${(props) => props.color};
    border-radius: 48px;
    margin: 24px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 1, 0.08);
    transition: 0.2s linear 0.2s;
    &:nth-child(1) {
        top: 18%;
        z-index: 3;
        position: absolute;
        left: 9%;
        transform-origin: left 2px;
        &:hover {
            top: 16%;
            left: 10%;
            transition: 0.4s ease-out;
            }
        }
    }
    &:nth-child(2) {
        z-index: 2;
        position: relative;
        left: 10%;
        top: 3%;
        transform: rotate(358deg);
        &:hover {
            top: 2%;
            transition: 0.4s ease-out;
        }
    }
    &:nth-child(3) {
        z-index: 1;
        top: 17%;
        position: absolute;
        left: 12%;
        transform: rotate(1deg)
        &:hover {
            top:19%;
            transform: rotate(6deg)
            transition: 0.4s ease-out;
        }
    }
`

export const Div = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: 1000px;
`

export const Emoji = styled.div`
    height: 200px;
    width: 200px;
    display: inline-block;
    text-align: center;
    position: relative;
    overflow: hidden;
    text-align: center;
    background: rgba(246, 246, 246, 1);
    border-radius: 50%;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 1;
`
export const Title = styled.h4`
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 600;
    font-size: var(--fz-heading);
    line-height: calc(var(--fz-heading)*1.2);
    text-align: center;
`


export const CurrentSliderContainer = styled.div`
    top: 80%;
    z-index: 5;
    left: calc(48% - 45px);
    position: absolute;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90px;
    height: 16px;
    opacity: 1;
    transition: var(--transition);

`

export const CurrentSlider = styled.div`
    width: 26px;
    height: 16px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 13px;
`

export const InactiveSlider = styled.div`
    width: 24px;
    height: 14px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 13px;
    border: 1px solid #000000;
`