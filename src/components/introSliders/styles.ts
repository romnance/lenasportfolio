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
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: 0.4s ease-out;
    position: relative;
    left: calc(50% - 45%);
    margin-bottom: 200px;
`

export const Section = styled.section<Color>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 70vw;
  background-color: ${(props) => props.color};
  border-radius: 48px;
  margin: 50px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 1, 0.08);
  transition: 0.2s linear 0.2s;
  &:nth-child(1) {
    top: 16%;
    z-index: 3;
    position: absolute;
    transform-origin: left 2px;
  }
  &:nth-child(2) {
    z-index: 2;
    position: relative;
    top: -4%;
    transform: rotate(355deg);
    &:hover {
      top: -2%;
      transition: 0.4s ease-out;
    }
    @media (max-width: 1080px) {
      top: -3%;
      &:hover {
        top: -4%;
        transition: 0.4s ease-out;
      }
    }
    @media (max-width: 768px) {
      top: -5.5%;
      &:hover {
        top: -6.5%;
        transition: 0.4s ease-out;
      }
    }
  }
  @media (max-width: 1080px) {
    height: 70vh;
    width: 90vw;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    height: 70vh;
    width: 85vw;
    margin: 20px 0;
  }
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

export const Emoji = styled.div`
  height: 160px;
  width: 160px;
  display: inline-block;
  text-align: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  margin-bottom: 32px;
  background: #fefeff;
  border-radius: 50%;
  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 1080px) {
    height: 130px;
    width: 130px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 1;
`;
export const Title = styled.h4`
  font-family: "Red Hat Display";
  font-style: normal;
  font-weight: 600;
  font-size: var(--fz-heading);
  margin: 0px;
  line-height: calc(var(--fz-heading) * 1.1);
  text-align: center;
  @media (max-width: 1080px) {
    font-size: 36px;
    line-height: calc(36px * 1.1);
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: calc(24px * 1.1);
  }
`;

export const CurrentSliderContainer = styled.div`
  top: 94vh;
  z-index: 5;
  left: calc(50% - 50px);
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  height: 16px;
  opacity: 1;
  transition: var(--transition);
  @media (max-width: 1080px) {
    top: 84vh;
  }
  @media (max-width: 768px) {
    top: 80vh;
  }
`;

export const CurrentSlider = styled.div`
  width: 26px;
  height: 16px;
  background-color: #b4a4e6;
  border-radius: 13px;
`;

export const InactiveSlider = styled.div`
  width: 24px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 13px;
  border: 1px solid #b4a4e6;
`;