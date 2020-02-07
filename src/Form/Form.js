import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      diet: '',
      fun_fact: ''
    }
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  submitNewIdea = e => {
    e.preventDefault();
    const { addAnimal, animals } = this.props;
    const newAnimal = { ...this.state, id: (animals.length + 1)};
    console.log(newAnimal)
    addAnimal(newAnimal);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({
      name: '',
      diet: '',
      fun_fact: ''
    })
    
  }

  render() {
    return (
      <form>
        <h2>Enter information about an Animal!</h2>
        <input
          type='text'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
          placeholder='Name...'
        />
        <input
          type='text'
          value={this.state.diet}
          name='diet'
          onChange={this.handleChange}
          placeholder='Diet...'
        />
        <textarea
          rows='4'
          cols='50'
          value={this.state.fun_fact}
          name='fun_fact'
          onChange={this.handleChange}
          placeholder='Fun Fact...'
        />
        <button onClick={this.submitNewIdea}>Add Animal</button>
      </form>
    )
  }
}
