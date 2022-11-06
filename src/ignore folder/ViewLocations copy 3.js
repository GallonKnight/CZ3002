import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './locationCards.css';

import LocationCards from './LocationCards';

const locas = require('./CZ3002_dataset_short.json');


// actual component
function ViewLocations() {
  const[location,locations] = useState([]);
  const addItem = () =>{
    alert("OI");
  }
  const locaList = locas.map((loca) => 
    <div>
      <LocationCards 
    key = {loca.FIELD1}
    title={loca.name} 
    image_url = {loca.image_url}
    category={loca.categories}
    rating={loca.rating}
    hpNum={loca.Number}
    addr={loca.Address}
    onClick={addItem} />
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






// import React,{useState,useEffect} from 'react';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './locationCards.css';


// function ViewLocations(){
//   const [items,setItems] = useState([]) //to set locations
  
  
//   const addItem = () =>{
//     setItems([...items,{
//       id: 
//       value: Math.floor(Math.random()*10) + 1
//     }])
//   }
//   return(
//     <div>
//       <button onClick={addItem}> add number </button>
//       <ul>
//         {items.map(item=>(
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>

//   )
// }


// export default ViewLocations;
