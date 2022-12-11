import styled from "styled-components";

interface Link {
  imgLink: string;
}

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Row2 = styled.div`
  display: flex;
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
    padding-top: 80px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
    margin-bottom: 12px;
    margin-left: 8px;
    padding-top: 30px;
  }
`;

export const Pill = styled.div`
  background-color: #fbeccc;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 6px 8px;
  padding: 0 clamp(15px, 5%, 15px);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    transition: var(--transition);
    background-color: #dc6c4f;
  }
`;

export const PillText = styled.h3`
  font-size:  clamp(15px, 20px, 24px);
  font-weight: 500;
  line-height: 24px;
  display: flex;
  display:inline
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Ellipse = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #f3f1fa;
  border-radius: 100px;
  margin: 4px 8px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    transition: var(--transition);
    background-color: #4f65da;
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
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;
