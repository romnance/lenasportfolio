import React, {useEffect, useState} from 'react';
import HeaderComponent from './components/header/Header';
import Intro from './components/intro/Intro';
import IntroSliders from './components/introSliders/IntroSliders';
import WhatIDo from "./components/whatIDo/WhatIDo";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setShowIntro(!showIntro);
      }, 1500);
  }, []);

  return (
    <>
      {!showIntro && <HeaderComponent />}
      <Intro />
      <div className="Common-container">
        <IntroSliders />
      </div>
      <div className="Common-container">
        <WhatIDo />
      </div>
    </>
  );
}

export default App;
