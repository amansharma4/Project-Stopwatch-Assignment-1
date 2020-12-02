import React from "react";
const DisplayComponent = (props) => {
  const h = () => {
    if (props.time.hrs === 0) {
      return "";
    } else {
      return (
        <span>
          {props.time.hrs >= 10 ? props.time.hrs : "0" + props.time.hrs}
        </span>
      );
    }
  };
  return (
    <div>
      {h()}&nbsp;
      <span>
        {props.time.min >= 10 ? props.time.min : "0" + props.time.min}
      </span>
      &nbsp;:&nbsp;
      <span>
        {props.time.sec >= 10 ? props.time.sec : "0" + props.time.sec}
      </span>
      &nbsp;:&nbsp;
      <span>
        {props.time.millisec >= 10
          ? props.time.millisec
          : "0" + props.time.millisec}
      </span>
    </div>
  );
};
export default DisplayComponent;
