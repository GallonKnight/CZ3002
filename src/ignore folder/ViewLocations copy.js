import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './locationCards.css';

//import LocationCards from './LocationCards';

const locas = require('../CZ3002_dataset_short.json');


function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}


// actual component
function ViewLocations() {
  const [isLoading, setLoading] = useState(false); //reducer
  const[lName,setlName] = useState("none");

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        
        setLoading(false);
        alert("Added to planner");
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    //const selectId = e.target.value;
    //alert(selectId);
    setlName("aaa");
    
  }



   // map all json to card + button
    const locaList = locas.map((loca,i) => 
    <div key={i}> 
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={loca.image_url} />
      <Card.Body>
        <Card.Title>{loca.name}</Card.Title>
        <Card.Text>Category: {loca.categories}</Card.Text>
        <Card.Text>Ratings: {loca.rating}/5</Card.Text>
        <Card.Text>Contact Number: {loca.Number}</Card.Text>
        <Card.Text>Address: {loca.Address} {loca.PostalCode}</Card.Text>

        <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? 'Adding to Planner...' : 'Add to Planner'}
        </Button>

      </Card.Body>
    </Card>
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

  // const locaList = locas.map((loca) => 
  //   <div><LocationCards 
  //   key = {loca.FIELD1}
  //   title={loca.name} 
  //   image_url = {loca.image_url}
  //   category={loca.categories}
  //   rating={loca.rating}
  //   hpNum={loca.Number}
  //   addr={loca.Address}
  //   onClick={addLocation} />

  //   <Button
  //   variant="primary"
  //   > aaa
  //   </Button>
  //   </div>
  //   )