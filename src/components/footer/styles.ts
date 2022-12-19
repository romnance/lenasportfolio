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
  @media (max-width: 1000px) {
    padding: 50px 30px 24px;
  }
  @media (max-width: 600px) {
    padding: 42px 20px 24px;
  }
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #1b1b1b;
  margin-bottom: 28px;
  margin: 0;
  @media (max-width: 1000px) {
    font-size: 46px;
  }
  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Emoji = styled.div`
  height: 130px;
  width: 130px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  text-align: center;
  margin: 12px 0;
  padding-bottom: 12px;
  background-color: #fbeccc;
  border-radius: 50%;
  @media (max-width: 1080px) {
    height: 120px;
    width: 120px;
    margin: 0;
  }
  @media (max-width: 768px) {
    height: 90px;
    width: 90px;
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;

export const P = styled.p`
  max-width: 470px;
  font-size: 24px;
  line-height: 31.75px;
  font-weight: 500;
  @media (max-width: 1080px) {
    max-width: 400px;
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    max-width: 250px;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: fit-content;
  margin-bottom: 80px;
  padding: 12px 0;
`;

export const Link = styled.a`
  font-size: 24px;
  line-height: 31.75px;
  font-weight: 500;
  margin-right: 24px;
  text-decoration: none;
  color: var(--primary-black);
  transition: background-size 0.2s;
  @media (max-width: 1080px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 21px;
  }
  &:hover {
    text-decoration: underline;
  }
`;


 

