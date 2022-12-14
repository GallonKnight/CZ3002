import React,{useState,useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BrowserRouter as Router,
  Routes,
  Route,
  Redirect } from "react-router-dom";
import ViewMap from '../ViewMap';
import ViewMap2 from '../ViewMap2';
import Planner from '../Planner';
import ViewLocations from '../ViewLocations';



function NavBar() {
  const [cart,setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1){
  //     alert(item.name +  "is already in planner.");
  //     return;
  //   } 
  //   setCart([...cart, item]);
  //   alert("Added " + item.name)
  // };

  useEffect(() => { //did component mount
    console.log(cart);
  }, [cart]);

  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Planner">Planner</Nav.Link>
        <Nav.Link href="ViewMap">View Map</Nav.Link>
        <Nav.Link href="ViewMap2">View Map2</Nav.Link>
        <Nav.Link href="ViewLocations"> View Locations</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
      <Routes>
      {/* This route is for home component 
      with exact path "/", in component props 
      we passes the imported component*/}
      

      <Route path='/Planner' element={<Planner  cart={cart} />} />
      <Route path='/ViewMap' element={<ViewMap/>} />
      <Route path='/ViewMap2' element= {<ViewMap2/>} />
      <Route path='ViewLocations' element = {<ViewLocations cart={cart} setCart={setCart}/>} />
      

      {/*<Route exact path="/Planner" component={Planning} /> */}
      </Routes>
    </Router>
    </div>  
  );
}
export default NavBar;
