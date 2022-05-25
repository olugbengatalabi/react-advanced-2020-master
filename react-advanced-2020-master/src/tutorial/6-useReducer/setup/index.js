import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import {reducer} from './reducer';


const Index = () => {
  const [name, setName] = useState('');
  
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello world'
  }
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({
        type: 'ADD_ITEM', payload: newItem
      })
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
    {state.isModalOpen &&
      (<Modal modalContent={state.modalContent} closeModal={closeModal} />)}
    <form action="" className="form" onSubmit={handleSubmit}>
      <div className="">
        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type="submit" className='btn'>add</button>
    </form>
          {state.people.map((person) => {
      return (
        <div key={person.id}>
          <h4>
            {person.name}
          </h4>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>Remove</button>
        </div>
      )
          })
      }

  </>
  );
  
};

export default Index;
