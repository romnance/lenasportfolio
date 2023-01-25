import styled from "styled-components";

interface Active {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 0px;
  padding: 130px 0 0;
  box-sizing: border-box;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  background-color: #fefeff;
  box-shadow: 0 -20px 20px -12px rgba(202, 191, 237, 0.3);
  position: relative;
  transition: 0.5s all ease;
  @media (max-width: 1000px) {
    padding: 100px 0 0;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  @media (max-width: 600px) {
    padding: 100px 0 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
  }
`;

export const Heading = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #1b1b1b;
  margin: 0px;
  @media (max-width: 1000px) {
    font-size: 42px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    font-size: 32px;
    margin-left: 8px;
  }
`;

export const ControlPillDesktop = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ControlPillMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const PurpleTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: fit-content;
  padding: 6px 32px;
  margin: 16px 0px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: white;
  background-color: var(--purple);
  @media (max-width: 768px) {
    margin: 16px 0px 16px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 0px 0px 150px;
  @media (max-width: 1000px) {
    flex-direction: row;
    margin: 0px 0px 80px;
  }
  @media (max-width: 768px) {
    margin: 0px 0px 60px;
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: flex-start;
  margin-right: 90px;
  @media (max-width: 1080px) {
    width: 45%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const Right = styled.div`
  display: inline-block;
  text-align: center;
  overflow: hidden;
  text-align: center;
  width: 55%;
  margin-bottom: 16px;
  @media (max-width: 1080px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  text-align: center;
  background-color: #fefeff;
  border-style: none;
  border-radius: 8px;
  padding: 18px 36px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  @media (max-width: 1080px) {
    padding: 16px 34px;
    font-size: 20px;
    line-height: 1.2;
  }
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const OverlayContainer = styled.div`
  position: relative;
  border-radius: 19px;
  overflow: hidden;
  transition: all 0.3s;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s;
  }
  &:hover:before {
    background: rgba(87, 87, 87, 0.4);
  }
  &:hover ${Button} {
    opacity: 1;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  border-radius: 19px;
`;

export const ProjectHeading = styled.h3`
  color: var(--primary-black);
  font-weight: 600;
  font-size: 40px;
  line-height: 44px;
  margin: 0;
  @media (max-width: 1080px) {
    font-size: 38px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 34px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  margin: 16px 0;
  color: var(--primary-black);
  font-weight: 400;
  font-size: 24px;
  line-height: 117%;
  @media (max-width: 1080px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

export const Date = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0 0 16px;
`;

export const TagsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const GreenTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: fit-content;
  padding: 6px 28px;
  color: var(--grey);
  background-color: var(--light-green);
  @media (max-width: 1080px) {
    font-size: 16px;
    padding: 6px 10px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 20px;
  }
`;
