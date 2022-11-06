import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './locationCards.css';




function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

// actual component
function LocationCards(props) {
  const [isLoading, setLoading] = useState(false); //reducer

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        alert("Added {props.title}to planner");
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
    
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Category: {props.category}</Card.Text>
        <Card.Text>Ratings: {props.rating}/5</Card.Text>
        <Card.Text>Contact Number: {props.hpNum}</Card.Text>
        <Card.Text>Address: {props.addr} {props.postal}</Card.Text>

        <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? 'Adding to Planner...' : 'Add to Planner'}
        </Button>

      </Card.Body>
    </Card>
    
  )
}

export default LocationCards