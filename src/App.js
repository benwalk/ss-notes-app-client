import React, { Component } from 'react';
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <Navbar fluid collapsOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem href="/signup">Signup</RouteNavItem>
              <RouteNavItem href="/login">Login</RouteNavItem>
            </Nav>
           </Navbar.Collapse>
         </Navbar>
         <Routes />
      </div>
    );
  }
}

export default App;