import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `N(${value})`;
    }
  }, [value]);
  // dependency arrat: if left blank, the useeffect only runs on initial render

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setvalue(value + 1)}>clickme</button>
    </>
  )
};

export default UseEffectBasics;


// by default, useeffect will run after every render
// to prevent this add a list of dependencies