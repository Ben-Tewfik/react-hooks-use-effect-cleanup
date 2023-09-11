import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("useEffect");
    const timerID = setInterval(() => {
      console.log("useState");
      setTime(new Date());
    }, 1000);
    // cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  console.log("render");

  return <div>{time.toString()}</div>;
}

export default Clock;
