import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import LocationCards from './LocationCards';
import list from "./CZ3002_dataset_short";
import './locationCards.css';
//const locations = require('./CZ3002_dataset_short.json');


// actual component
const ViewLocations = ({cart,setCart,handleClick}) => {
  // const [cart,setCart] = useState([]);

  // const handleClick = (item) => {
  //   cart.push(item);
  //   alert("Added " + item.name);
  //   console.log(cart);
  // };

  return(
    <Container  className='ViewLocations'>
      <div className ='grid'>
      {list.map((item) => (
        <LocationCards key={item.FIELD1} item={item} handleClick={handleClick} />
      ))}
      </div>
    </Container>
  )
}

export default ViewLocations;
 
