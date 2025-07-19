import React, { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);

  const ballPosition = { 
    left: `${posi}px`
  };

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      setPosi((prevPosi) => prevPosi + 5);
    }
  };

  useEffect(() => {
    if (renderBall) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [renderBall]);

  const renderBallOrButton = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return <button className="start" onClick={buttonClickHandler}>Start</button>;
    }
  };

  return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;
