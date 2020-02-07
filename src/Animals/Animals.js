import React from 'react';
import Card from '../Card/Card.js';
import './Animals.css';

const Animals = ({ animals, removeAnimal }) => {
  const animalCards = animals.map(animal => {
    return <Card 
      id={animal.id}
      name={animal.name}
      diet={animal.diet}
      fun_fact={animal.fun_fact}
      removeAnimal={removeAnimal}
      key={animal.id}
    />
  })
  
  return (
    <section className='animals'>
      {animalCards}
    </section>
  )
}

export default Animals