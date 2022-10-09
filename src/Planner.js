import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Planner = ({cart}) => {
  const [scaf,setScaf] = useState(false);

  const handleClick = () => {
    setScaf(true);
    alert("File exported")

  }

  return (
    <Container className='PlannerContainer'>
      <h1>Planner List</h1>
      <div className = "Planner">
        {cart.map((item)=>(
          <div className="locationName" key={item.FIELD1}>
            <p> asd {item.name} </p>
            <p> asdasd {item.Address}</p>
            <p> asdasdasd {item.PostalCode}</p>
          </div>
        ))}
      </div>
      <div className = 'Exporting'>
        {scaf? "-no location-": <table>
          <tr>
            <th>Location</th>
            <th>Address</th>
            <th>Postal Code</th>
          </tr>
          <tr>
            <td>Gardens By The Bay</td>
            <td>18 Marina Gardens Dr</td>
            <td>18953</td>
          </tr>
          <tr>
            <td>Cloud Forest</td>
            <td>18 Marina Gardens Dr</td>
            <td>18953</td>
          </tr>
          <tr>
            <td>Singapore Botanic Gardens</td>
            <td>1 Cluny Rd</td>
            <td>259569</td>
          </tr>
        </table>}
      </div>

      <div className="inexButton">
        <Button variant="outline-secondary">Import</Button>{' '}
        <Button variant="outline-secondary" onClick={() => handleClick()}>Export</Button>{' '}
      </div>

    </Container>
  )
}

export default Planner