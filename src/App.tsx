import React, {useEffect, useState} from 'react';
import HeaderComponent from './components/header/Header';
import Intro from './components/intro/Intro';
import IntroSliders from './components/introSliders/IntroSliders';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setShowIntro(!showIntro);
      }, 1500);
  }, [])

  return (
    <>
    {!showIntro && <HeaderComponent />}
    <Intro />
    <IntroSliders />
    <h1>Hi!</h1>
    </>
  );
}

export default App;
