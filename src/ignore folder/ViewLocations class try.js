import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './locationCards.css';



const locas = require('./CZ3002_dataset_short.json');

class ViewLocations extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"restaurant 1",
      address:"fake address",
      postalCode: "555222",
      places:[
        "r0",
        "r1",
        "r2"
      ]
    };
  }

  render(){
    return(
      <div> {this.state.name}</div>
    )
  }
}

export default ViewLocations;
