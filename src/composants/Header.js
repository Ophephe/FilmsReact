import React, { Component } from "react";
import "../App.css";
import { Navbar } from "react-bootstrap";
import ModalButton from "./Modal-button";

class Header extends Component {
  render() {
    return (
      <div className="Ecriture">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">
            {" "}
            <h1>&#8608; OphéFlix &#8606;</h1>
          </Navbar.Brand>

          <ModalButton />
        </Navbar>
      </div>
    );
  }
}

export default Header;
