import React, { useState, useEffect } from "react";

const TimerFunction = () => {
  const [time, setTime] = useState(new Date());

  // This effect will be executed just one time
  useEffect(() => {
    console.log('Adding interval');
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // We can create more than one effect
  useEffect(() => {
    console.log('another effect executed');
  }, []);

  // This effect will be executed once the time is updated
  useEffect(() => {
    console.log(`time updated to: ${time.toLocaleString()}`);
  }, [time]);

  return (
    <div>{`Time: ${time.toLocaleString()}`}</div>
  )
};

export default TimerFunction;
