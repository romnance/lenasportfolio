import styled from "styled-components";

interface Link {
  imgLink: string;
}

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

export const RowDesktop = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RowMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
  display: none;
  flex-direction: row;
`;

export const Heading = styled.h1`
  padding-top: 100px;
  font-size: 60px;
  font-weight: 600;
  color: #1b1b1b;
  margin-bottom: 32px;
  @media (max-width: 1000px) {
    font-size: 42px;
    margin-bottom: 24px;
    padding-top: 60px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    margin-bottom: 16px;
    margin-left: 8px;
    padding-top: 30px;
  }
`;

export const Pill = styled.div`
  background-color: #f7ddca;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 6px 5px;
  padding: 0 clamp(15px, 5%, 15px);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
    transition: var(--transition);
    background-color: #eea367;
  }
  @media (max-width: 600px) {
    max-width: 250px;
  }
`;

export const PillText = styled.h3`
  font-size:  24px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  display:inline
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    font-size:  20px;
    line-height: 20px;
    margin: 15px 10px;
  }
  @media (max-width: 600px) {
    font-size:  15px;
    line-height: 15px;
    margin: 12px 6px;
  }
`;

export const Ellipse = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #d5ddf3;
  border-radius: 100px;
  margin: 4px 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
    transition: var(--transition);
    background-color: #9ab3f9;
  }
`;

export const Emoji = styled.div`
  height: 50px;
  width: 50px;
  display: inline-block;
  text-align: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 9px 12px;
  background: transparent;
  border-radius: 25px;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    height: 40px;
    width: 40px;
    margin: 3px 6px;
  }
  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
    margin: 3px 6px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;
