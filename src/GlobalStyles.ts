import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Red Hat Display', sans-serif;
  }
  *:before,
  *:after {
  box-sizing: inherit;
  }
  @keyframes Spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  :root {
    --primary-black: #1B1B1B;
    --grey: rgba(220, 220, 220, 1);
    --light-grey: #F6F6F6;
    --grey: #5A5A5A;
    --light-purple: #EAD6EE;
    --light-green: #D4F1DB;
    --purple: #B4A4E6;
    --navy-shadow: rgba(2,12,27,0.2);
    --white: #e6f1ff;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 3.2rem;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645,0.045,0.355,1);
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
    --ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;
}
  body {
    font-size: var(--fz-xl);
    line-height: 1.3;
    padding: 0px;
    margin: 0px;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #FEFEFF;
      @media (max-width: 768px) {
     font-size: var(--fz-md);
    }
    @media (max-width: 1080px){
    font-size: var(--fz-lg);
    }
  }
  .Common-container {
    padding: 0px 100px;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 1080px){
    padding: 0px 30px;
  }
    @media (max-width: 768px) {
    padding: 0px 20px;
    overflow: hidden;
  }
  }
`;

export default GlobalStyles;