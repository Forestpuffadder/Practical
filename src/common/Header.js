import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


 class header extends React.Component {
    render(){
        return(
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                 {/* <Link to={'/paste'} className="nav-link">PasteList</Link> */}
                 <Link to={'/login'} className="nav-link">Login</Link>

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
    
}


export default header;
