import React, {useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState("random title")

  const handler = () => {
    if (text === "random title") {
      setText("hello world")
    }
    else {
      setText("random title")
    }
  }
  return (
    <>
      <h2>{text}</h2>
      <button type = "button" onClick={handler}>change title</button>
    </>
  )
};

export default ErrorExample;
