import React from 'react';
import './Card.css';

const Card = ({ id, name, diet, fun_fact, removeAnimal, key }) => {
  return (
    <section className='card' key={ key }>
      <h4>{ name }</h4>
      <div className='animal-info'>
        <p>{ diet }</p>
        <p>{ fun_fact }</p>
      </div>
      <button type='button' onClick={ () => removeAnimal(id) }>Remove Animal</button>
    </section> 
  )
}

export default Card
