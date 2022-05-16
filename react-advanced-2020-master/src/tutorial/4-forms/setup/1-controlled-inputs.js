import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    // e is the event object
    if (firstName && email) {
      // const person = { firstName: firstName, email: email };
      // this can be shortened to 
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person]
      });
      setFirstName('');
      setEmail('');
      console.log(person);

    } else {

    }
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handlesubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value) }/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
          </div>
          <button type='submit' className='btn'>Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return <>
            <div className="item" key={id}>
              <h4 >{firstName}</h4>
              <h4 >{email}</h4>
              <h4 >{age}</h4>
            </div>
          </>
        })}
      </article>
    </>
  )
};

export default ControlledInputs;
