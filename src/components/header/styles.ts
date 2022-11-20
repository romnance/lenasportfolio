import styled from 'styled-components';

interface ILi {
  transition: string;
}

interface Open {
  visible: string;
}

interface Scroll {
      shadowStyle: string;
      hiddenStyle: string;
}


export const Header = styled.header<Scroll>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 100px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    box-shadow: ${(props) => props.shadowStyle};
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    transform: ${(props) => props.hiddenStyle};
    transition: transform 0.3s ease;
   @media (max-width: 768px) {
    padding: 0px 25px;
  }
  @media (max-width: 1080px){
    padding: 0px 40px;
  }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--primary-black);
    counter-reset: item 0;
    z-index: 12;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Link = styled.a`
    color: var(--primary-black);
    width: fit-content;
    height: fit-content;
    font-style: normal;
    font-weight: 500;
    font-size: var(--fz-xxl);
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
`

export const Links = styled.div`
    align-items: center; 
    @media (max-width: 768px){
    display: none;
    }
`

export const Ol = styled.ol`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
export const Li = styled.li<ILi>`
    transition-delay: ${(props) => props.transition};
    margin: 0px 12px;
    position: relative;
    font-size: var(--fz-xxl);
    display: list-item;
    &:hover {
        transform: scale(1.1);
        transition: var(--transition);
        color: #5D35E8;
    }
`
export const A = styled.a`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
`

export const Menu = styled.div`
    @media (max-width: 768px){
    display: block;
    }
    display:none;
`

export const Button = styled.button`
    @media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0px;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    }
    display: none;
    cursor: pointer;
    border-radius: 0px;
`

export const HamBox = styled.div`
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
    box-sizing: inherit;
`
export const HamBoxInner = styled.div<Open>`
    position: absolute;
    display: block;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--primary-black);
    transition: ${(props) => props.visible === "visible" ? "transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s" : "transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s"};
    transform: ${(props) => props.visible === "visible" ? "rotate(225deg)" : "rotate(0deg)"};
    &::before {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    width: ${(props) => props.visible === "visible" ? "100%" : "120%"};
    height: 2px;
    top: -10px;
    opacity: ${(props) => props.visible === "visible" ? "0" : "1"};
    transition: ${(props) => props.visible === "visible" ? "var(--ham-before-active)" : "var(--ham-before)"};
    height: 2px;
    border-radius: 4px;
    background-color: var(--primary-black);
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;s
    }
    &::after {
    content: "";
    width: ${(props) => props.visible === "visible" ? "100%" : "80%"};
    left: auto;
    height: 2px;
    right: 0px;
    bottom: ${(props) => props.visible === "visible" ? "0px" : "-10px"};
    display: block;
    position: absolute;
    transition: ${(props) => props.visible === "visible" ? "var(--ham-after-active)" : "var(--ham-after)"};
    transform:  ${(props) => props.visible === "visible" ? "rotate(-90deg)" : "rotate(0deg)"};
    background-color: var(--primary-black);
    }
`

export const Sidebar = styled.aside<Open>`
    display: block;
    @media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: rgba(255, 255, 255, 0.99);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(5px);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: ${(props) => props.visible === "visible" ? "translateX(0vw)" : "translateX(100vw)"};
    visibility: ${(props) => props.visible}; 
    transition: var(--transition);
    }
`

export const AsideNav = styled.nav<Open>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--primary-black);
    font-family: var(--font-mono);
    visibility: ${(props) => props.visible}; 
    text-align: center;
`
export const AsideOl = styled.ol`
    padding: 0px;
    margin: 0px;
    list-style: none;
    width: 100%;
`

export const AsideLi = styled.li`
    @media (max-width: 600px) {
    margin: 0px auto 10px;
    }
    position: relative;
    margin: 0px auto 20px;
    counter-increment: item 1;
    font-size: var(--fz-xl));
    }
`

export const AsideA = styled.a`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    width: 100%;
    padding: 3px 10px 10px;
  `