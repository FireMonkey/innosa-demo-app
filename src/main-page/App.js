import React from 'react';
// import logo from './../logo.svg';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Category from './../pages/categories/category'
// import Product from './../pages/products/product'
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

import './App.css';
import Header from '../partials/header';


function App() {
  return (
    <Header/>
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>



    // <div>
    //   <logo />
    //   <ButtonToolbar>
    //     <Button variant="primary">Primary</Button>
    //     <Button variant="secondary">Secondary</Button>
    //     <Button variant="success">Success</Button>
    //     <Button variant="warning">Warning</Button>
    //     <Button variant="danger">Danger</Button>
    //     <Button variant="info">Info</Button>
    //     <Button variant="light">Light</Button>
    //     <Button variant="dark">Dark</Button>
    //     <Button variant="link">Link</Button>
    //   </ButtonToolbar>

    //   <Router>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/category">category</Link>
    //           </li>
    //           <li>
    //             <Link to="/product">product</Link>
    //           </li>


    //           {/* <li>
    //             <Link to="/about">About</Link>
    //           </li>
    //           <li>
    //             <Link to="/users">Users</Link>
    //           </li> */}
    //         </ul>
    //       </nav>

    //       {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //       <Switch>
    //         <Route path="/category">
    //           <Category />
    //         </Route>
    //         <Route path="/product">
    //           <Product />
    //         </Route>


    //         {/* <Route path="/users">
    //           <Users />
    //         </Route>
    //         <Route path="/">
    //           <Home />
    //         </Route> */}
    //       </Switch>
    //     </div>
    //   </Router>

    // </div>
  );
}

export default App;
