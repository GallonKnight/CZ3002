import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router,
  Routes,
  Route,
  Redirect } from "react-router-dom";
import ViewMap from './ViewMap';
import Planner from './Planner';

function NavBar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="Planner">Planner</Nav.Link>
        <Nav.Link href="ViewMap">View Map</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
      <Routes>
      {/* This route is for home component 
      with exact path "/", in component props 
      we passes the imported component*/}
      

      <Route path='/Planner' element={<Planner/>} />

      <Route path='/ViewMap' element={<ViewMap/>} />

      {/*<Route exact path="/Planner" component={Planning} /> */}
      </Routes>
    </Router>
    </div>  
  );
}
export default NavBar;
