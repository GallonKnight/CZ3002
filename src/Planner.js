import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Planner = ({cart,setCart}) => {

  return (
    <Container className='PlannerContainer'>
      oii
      <h1>Planner List</h1>
      <div className = "Planner">
        {cart.map((item)=>(
          <div className="locationName" key={item.FIELD1}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="inexButton">
        <Button variant="outline-secondary">Import</Button>{' '}
        <Button variant="outline-secondary">Export</Button>{' '}
      </div>

    </Container>
  )
}

export default Planner