import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './locationCards.css';



const locas = require('./CZ3002_dataset_short.json');


const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

class ViewLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
    };
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState(prevState => ({
      array: [...prevState.array, e.target.value]
  }))
  alert(e.target.value)
  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select value={this.state.fruit} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          {this.state.plans}
        </div>
      </div>
    );
  }
}
export default ViewLocations;
