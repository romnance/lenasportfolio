import styled from 'styled-components';

interface Color {
  color: string;
}

interface Link {
    imgLink: string;
}

export const Slider = styled.div`
  width: 90%;
  display: flex;
  padding-top: 80px;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: 0.4s ease-out;
`;

export const Section = styled.section<Color>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: clamp(83vw, 80vw, 1910px);
  padding: 0 24px;
  background-color: ${(props) => props.color};
  border-radius: 48px;
  box-shadow: 0 4px 6px rgba(0, 0, 1, 0.08);
  transition: 0.2s linear 0.2s;
  &:nth-child(1) {
    top: 180px;
    z-index: 3;
    position: absolute;
    transform-origin: left 2px;
  }
  &:nth-child(2) {
    z-index: 2;
    position: relative;
    top: -11%;
    width: clamp(83vw, 80vw, 1920px);
    transform: rotate(355deg);
    &:hover {
      top: -13%;
      transition: 0.4s ease-out;
    }
    @media (max-width: 768px) {
      top: -20%;
      width: 90vw;
      &:hover {
        top: -21%;
        transition: 0.4s ease-out;
      }
    }
  }
  @media (max-width: 1080px) {
    height: 75vh;
    width: 85vw;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    height: 60vh;
    width: 85vw;
    margin: 20px 0;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  box-sizing: border-box;
`;

export const Emoji = styled.div`
  height: 160px;
  width: 160px;
  display: inline-block;
  text-align: center;
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
  top: 98vh;
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
    top: 95vh;
  }
  @media (max-width: 768px) {
    top: 80vh;
  }
`;

export const CurrentSlider = styled.div`
  width: 26px;
  height: 16px;
  background-color: #1b1b1b;
  border-radius: 13px;
`;

export const InactiveSlider = styled.div`
  width: 24px;
  height: 14px;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 13px;
  border: 1px solid #1b1b1b;
`;