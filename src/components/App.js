import React, { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);

  const ballPosition = { left: `${posi}px` };

  // Button click handler
  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  // Key press event handler
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setPosi((prevPosi) => prevPosi + 5);
    }
  };
  

  // useEffect to bind/unbind the keydown event
  useEffect(() => {
    if (renderBall) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [renderBall]);

  // Conditional render
  const renderBallOrButton = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return <button onClick={buttonClickHandler}>Start</button>;
    }
  };

  return <div className="playground">{renderBallOrButton()}</div>;
}

export default App;
