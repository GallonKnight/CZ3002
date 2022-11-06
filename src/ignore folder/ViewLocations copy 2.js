import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './locationCards.css';

import LocationCards from './LocationCards';

const locas = require('./CZ3002_dataset_short.json');


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}


// actual component
function ViewLocations() {
  const[lName,setlName] = useState("none");
  
  const locaList = locas.map((loca) => 
    <div><LocationCards 
    key = {loca.FIELD1}
    title={loca.name} 
    image_url = {loca.image_url}
    category={loca.categories}
    rating={loca.rating}
    hpNum={loca.Number}
    addr={loca.Address} 
    />

    <Button
    variant="primary"
    > aaa
    </Button>
    </div>
    )



  return (
    <Container className='ViewLocations'>
      <div className ='grid'>
        {locaList}
      </div>
      
    </Container>
  )
}

export default ViewLocations;

//// dumping zone
