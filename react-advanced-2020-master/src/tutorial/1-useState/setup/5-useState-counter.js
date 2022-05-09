import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reseter = () => {
    setValue(0)
  }

  const complex = () => {
    // setTimeout(() => { setValue(value + 1) }, 2000);
    setTimeout(() => {
      setValue((prevState) => {
        console.log(prevState);
        return prevState + 1;
        // whatever is returned from the function becomes the new value of the state 
      })
    }, 2000);
  }
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
        <button className='btn' onClick={reseter}>reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
        
      </section>
      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
      <button className='btn' onClick={complex}> increase later</button></section></>
  )
};

export default UseStateCounter;
