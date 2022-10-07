import React from 'react';
import Card from 'react-bootstrap/Card';
import AddToMapButton from './AddToMapButton';
import './locationCards.css';



function LocationCards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image_url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Category: {props.category}</Card.Text>
        <Card.Text>Ratings: {props.rating}/5</Card.Text>
        <Card.Text>Contact Number: {props.hpNum}</Card.Text>
        <Card.Text>Address: {props.addr} {props.postal}</Card.Text>

        <Card.Text> description {props.text}</Card.Text>
        <AddToMapButton></AddToMapButton>
      </Card.Body>
    </Card>
  )
}

export default LocationCards