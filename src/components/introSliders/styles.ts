import styled from 'styled-components';

interface Color {
  color: string;
}

interface Link {
    imgLink: string;
}

//контейнер карточек
export const Slider = styled.div`
    padding-top: 100px;
    width: 90%;
    height: 750px;
    box-sizing: border-box;
    transition: 0.4s ease-out;
    position: relative;
    left: calc(50% - 45%);
`

// карточки
export const Section = styled.section<Color>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 80%;
    background-color: ${(props) => props.color};
    border-radius: 48px;
    margin: 24px 0;
    &:nth-child(1) {
        top: 18%;
        z-index: 3;
        position: absolute;
        left: 9%;
        transform-origin: left 2px;
    }
    &:nth-child(2) {
        z-index: 2;
        position: relative;
        left: 10%;
        top: 3%;
        transform: rotate(358deg);
    }
    &:nth-child(3) {
        z-index: 1;
        top: 17%;
        position: absolute;
        left: 12%;
        transform: rotate(1deg)
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
    font-size: var(--fz-xxl);
    line-height: var(--fz-heading);
    text-align: center;
`