import React from "react";
import "./App.css";
import Button from "./Component/Button";
import Display from "./Component/Display";
function App() {
  return (
    <div className="container">
      <div className="clock-holder">
        <div className="stopwatch">
          <Button />
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
