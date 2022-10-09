import React, { useState } from "react";
import logo from '../logo.png';
import Marker from './Marker';


const markerStyle = {
    position: "absolute",
    width: "25px",
    height: "30px",
    top: "10",
    left: "10%",
  };
const categories = ["gardens", "hainan", "zoos", "taiwanese"];
const products = require('../CZ3002_dataset.json');

export default function YelpMarker() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [lati, setlati] = useState(products)

  const filterProducts = function (event) {
    const prods = products.filter((p) => p.categories === event.target.value);
    console.log(prods);

    setFilteredProducts(prods);
  };
  const filterLatitude = function (event) {
    const latis = products.filter((p) => p.latitude === event.target.value);
    console.log(latis);

    setlati(latis);
  };

  return (
    <div className="Users">
     

      <select onChange={(event) => filterProducts(event)}>
        <option value="">-- Select Categories--</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}         
         
          </option>
        ))}
      </select>

      
        {filteredProducts.map((p) => (
          <li key={p.FIELD1}>{p.name} 
           {p.latitude}
          </li>
           
        ))}
      
    </div>
    
  );
}