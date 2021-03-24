import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import reportform from './reportform'

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Parking Lot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/requestform">Request Form</Nav.Link>
            <Nav.Link href="/reportform">Report Form</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    <Switch>
        <Route path="/Request Form">
            <requestform />
        </Route>
        <Route path="/Report Form">
            <reportform />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

    </Router>
  );
}
function Home() {
  return (
    <h1>Home</h1>
  )
}

export default App;
