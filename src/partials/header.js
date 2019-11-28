
import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// import logo from './../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Category from './../pages/categories/category';
import Product from './../pages/products/product';

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Innosa React Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/category">Category</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Router>
                <Switch>
                    <Route path="/category">
                        <Category />
                    </Route>
                    <Route path="/product">
                        <Product />
                    </Route>
                </Switch>
            </Router>
        </>
    );

}
export default Header;