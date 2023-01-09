import styled from 'styled-components';

interface Active {
  active: boolean;
}

interface Hide {
    hide: boolean;
}

export const IntroDiv = styled.div<Hide>`
  position: fixed;
  z-index: 11;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #f3f1fa;
  display: ${(props) => (props.hide ? "none" : "block")};
  opacity: ${(props) => (props.hide ? "0" : "1")};
  transition: display 5s ease-out 3.5s, opacity 1s ease-in-out 0.25s;
`;

export const Text = styled.h1`
  color: var(--primary-black);
  font-size: var(--fz-heading);
  font-weight: 800;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  transition: ease-in-out 1s;
  @media (max-width: 1080px) {
    font-size: 40px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Logo = styled.span<Active>`
  position: relative;
  display: inline-block;
  text-align: center;
  bottom: ${(props) => (props.active ? "0px" : "-20px")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: ease-in-out 0.5s;
`;