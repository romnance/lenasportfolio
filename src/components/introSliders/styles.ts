import styled from 'styled-components';

interface Color {
  color: string;
}

interface Link {
    imgLink: string;
}

export const Slider = styled.div`
    margin-top: 100px;
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Section = styled.section<Color>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 80vw;
    background-color: ${(props) => props.color};
    border-radius: 48px;
    margin: 24px 0;
    background: linear-gradient(105.07deg, #BCB8F0 0%, #EAE4EB 31.65%, #D4E2F3 58.7%, #F3D3AD 98.01%);
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Emoji = styled.div<Link>`
    height: 200px;
    width: 200px;
    background: url(${(props) => props.imgLink}) rgba(246, 246, 246, 1);
    border-radius: 50%;
`