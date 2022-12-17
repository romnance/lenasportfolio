import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #f3f1fa;
  border-radius: 25px;
  box-sizing: border-box;
  margin: 80px 0;
  padding: 57px 60px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #1b1b1b;
  margin-bottom: 32px;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 46px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Emoji = styled.div`
  height: 110px;
  width: 110px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 8px;
  background-color: #fbeccc;
  border-radius: 50%;
  @media (max-width: 1080px) {
    height: 100px;
    width: 100px;
  }
  @media (max-width: 768px) {
    height: 90px;
    width: 90px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;
