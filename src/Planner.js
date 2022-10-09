import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Planner(props) {
  return (
    <Container className='PlannerContainer'>
      <h1>Planner Test Test</h1>
      <p>
        insert text here, prolly need some react component things
      </p>

      <div className="inexButton">
        <Button variant="outline-secondary">Import</Button>{' '}
        <Button variant="outline-secondary">Export</Button>{' '}
      </div>

    </Container>
  )
}

export default Planner