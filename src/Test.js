import React from "react";
import { useRef } from "react";

const Test = () => {
  const initial = {
    count: 0,
  };
  const counter = useRef(
    <>
      <h1>anjay</h1>
    </>
  );

  const clickHandle = () => {
    console.log(counter.current.render());
  };
  /**
   *
   * @param {String} a we will not walk alone
   * @param {String} b
   */
  const cunhold = (a, b) => {};

  return (
    <div>
      {console.log("im clicked")}
      <button onClick={clickHandle}>click me</button>
    </div>
  );
};

export default Test;
