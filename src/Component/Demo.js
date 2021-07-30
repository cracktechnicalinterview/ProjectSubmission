import React, { useState,useEffect } from "react";
import "./MainLayout.css";

import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Demo = (props) => {
  const [seconds, setSeconds] = useState(300000);
  const [pause, setPause] = useState(true);
  const [ min , setMin ] = useState(0);
  const [ sec , setSec ] = useState(0);

  const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        setMin(minutes);
        setSec(seconds);
    }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        if (seconds > 0) {
          setSeconds(seconds - 1000);
          millisToMinutesAndSeconds(seconds);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    millisToMinutesAndSeconds(seconds);
    }, []);

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  const resetHandler =() => {
    setSeconds(300000);
    millisToMinutesAndSeconds(seconds);
  }

  return (
    <div>
        <div className="MainLayout__container">
            <Header />
            <Body minutes={min} seconds={sec} />
            <Footer handlePauseToggle={handlePauseToggle} pause={pause} resetHandler={resetHandler} /> 
        </div> 
    </div>
    
  );
};

export default Demo;
