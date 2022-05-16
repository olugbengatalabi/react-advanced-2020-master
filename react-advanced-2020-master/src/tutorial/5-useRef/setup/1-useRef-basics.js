import React, { useEffect, useRef } from 'react';


// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    refContainer.current.focus();
    
  })
  return <>
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="">
        <input type="text" name="" id="" ref={ refContainer}/>
        <button className="btn" type='submit'> submit</button>
      </div>
    </form>
  </>;
};

export default UseRefBasics;
