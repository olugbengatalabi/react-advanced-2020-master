import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("kk");
  const firstValue = text || "hello world";
  // if the value of text is false theen it returns the value provided after the ||
  const secondValue = text && "hello world";
  //  if the value is true, it returns the value adter the &&
  // if its not true it returns the value before the &&
  const [isError, setIsError] = useState(false);
  const toggleerror = () => {
    setIsError(!isError);
  }
  return (
    <>
      <h2> {firstValue} </h2>
      <h1> value: {secondValue} </h1>
      <button className="btn" onClick={toggleerror}>toggle error</button>
      <h3> {text || "john doe"} </h3> {text && <h3> "hello world" </h3>}{" "}
      {!text && <h3> "hello world" </h3>}

      {
        isError && <h1> Error.... </h1>}
      {isError ? <p>there is an error</p>: <h3>No error</h3>}
    </>
  );
};
// if text is true, display hello world else display nothing
export default ShortCircuit;
