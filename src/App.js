import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form.js';
import Animals from './Animals/Animals.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
  }

  addAnimal = (animal) => {
    this.setState({ animals: [...this.state.animals, animal] })
    this.postAnimal(animal)
  }

  removeAnimal = (id) => {
    const animals = this.state.animals.filter(animal => animal.id !== id)
    this.setState({ animals })
    this.deleteAnimal(id)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  fetchAnimals = () => {
    fetch('http://localhost:3001/api/v1/animals')
      .then(response => response.json())
      .then(animals => this.setState({ animals }))
      .catch(error => console.log(error))
  }

  postAnimal = ({ name, diet, fun_fact}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: this.state.animals.length,
        name,
        diet,
        fun_fact,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/animals', options)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  deleteAnimal = (id) => {
    fetch(`http://localhost:3001/api/v1/animals/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(response => console.log('Deleted:', response.message))
      .catch(error => console.error(error))
  }

  componentDidMount = () => {
    Promise.all([this.fetchAnimals()]);
  }

  render() {
    return (
      <main>
        <h1>Oh! Hey look, animals...</h1>
        <Form 
          animals={ this.state.animals }
          addAnimal={ this.addAnimal }/>
        <Animals 
          animals={ this.state.animals }
          removeAnimal={ this.removeAnimal }
        />
      </main>
    )
  }
}
