import React, { useState } from "react";
import Display from "./Component/Disp";
import Button from "./Component/Button";
import "./App.css";
const App = () => {
  const [time, setTime] = useState({ millisec: 0, sec: 0, min: 0, hrs: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const str = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.millisec,
    updatedS = time.sec,
    updatedM = time.min,
    updatedH = time.hrs;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({
      millisec: updatedMs,
      sec: updatedS,
      min: updatedM,
      hrs: updatedH
    });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ millisec: 0, sec: 0, min: 0, hrs: 0 });
  };

  const resume = () => str();

  return (
    <div className="container">
      <div className="clock-holder">
        <h2 id="text">Stopwatch</h2>
        <div className="stopwatch">
          <Display time={time} />
          <Button
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            str={str}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
