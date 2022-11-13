import styled from 'styled-components';

interface INav {
  open: boolean;
}

interface ILi {
  transition: string;
}


export const Header = styled.header`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height);
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
   @media (max-width: 768px) {
    padding: 0px 25px;
  }
  @media (max-width: 1080px){
    padding: 0px 40px;
  }
`

export const Nav = styled.nav`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--primary-black);
    counter-reset: item 0;
    z-index: 12;
`

export const Logo = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
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
    counter-increment: item 1;
    font-size: var(--fz-xxl);
    display: list-item;
    text-align: -webkit-match-parent;
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
export const HamBoxInner = styled.div`
    position: absolute;
    display: block;
    top: 50%;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--primary-black);
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
    transform: rotate(0deg);
    &::before {
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    width: 120%;
    height: 2px;
    top: -10px;
    opacity: 1;
    transition: var(--ham-before);
    height: 2px;
    border-radius: 4px;
    background-color: var(--primary-black);
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;s
    }
    &::after {
    content: "";
    width: 80%;
    left: auto;
    height: 2px;
    right: 0px;
    bottom: -10px;
    display: block;
    position: absolute;
    transform: rotate(0deg);
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    background-color: var(--primary-black);
    transition: var(--ham-after);
    }
`