import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import LocationCards from './LocationCards';
import SearchBar from './SearchBar';

const locas = require('./CZ3002_dataset_short.json');

const locaList = locas.map((loca) => 
<LocationCards title={loca.name} 
image_url = {loca.image_url}
category={loca.categories}
rating={loca.rating}
hpNum={loca.Number}
addr={loca.Address}
/>)



function ViewLocations() {
  return (
    <Container className='ViewLocations'>
      <SearchBar />

      {locaList}
    </Container>
  )
}

export default ViewLocations;