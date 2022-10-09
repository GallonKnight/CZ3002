import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// actual component
const LocationCards = ({item,handleClick}) => {
  const{name,categories,rating,Number,Address,PostalCode,image_url} = item;

  return (
    <div className = "LocationCards">
      <Card style={{ width: '17rem',height: '40rem',color:'black', padding:'10px', display: 'table-cell'}}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Category: {categories}</Card.Text>
          <Card.Text>Ratings: {rating}/5</Card.Text>
          <Card.Text>Contact Number: {Number}</Card.Text>
          <Card.Text>Address: {Address} <br /> Singapore {PostalCode}</Card.Text>

          <Button
          variant="primary"
          onClick={() => handleClick(item)}
          >
            Add to Planner
          </Button>

        </Card.Body>
      </Card>
    </div>
  )
}

export default LocationCards;