import React from 'react';
import Container from 'react-bootstrap/Container';
import LocationCards from './LocationCards';
import list from "./CZ3002_dataset_short";
import './locationCards.css';
//const locations = require('./CZ3002_dataset_short.json');


// actual component
const ViewLocations = ({cart,setCart}) => {
  // const [cart,setCart] = useState([]);

  // const handleClick = (item) => {
  //   setCart([...cart, item]);
  //   alert("Added " + item.name);
  //   console.log(cart);
  // };

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1){
      alert(item.name +  "is already in planner.");
      return;
    } 
    setCart([...cart, item]);
    alert("Added " + item.name)
  };

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
 
