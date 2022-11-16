import styled from 'styled-components';

interface Color {
  color: string;
}

interface Link {
    imgLink: string;
}

export const Slider = styled.div`
    position: absolute; 
    margin-top: 100px;
    display: flex;
    width: 90%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-out;
    position: relative;
    left: calc(50% - 45%);
`

export const Section = styled.section<Color>`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 80vw;
    background-color: ${(props) => props.color};
    border-radius: 48px;
    margin: 24px 0;
    left: 0px;
    background: linear-gradient(105.07deg, #BCB8F0 0%, #EAE4EB 31.65%, #D4E2F3 58.7%, #F3D3AD 98.01%);
    &:nth-child(1), &:nth-child(2)  {
       margin-right: -50px;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
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