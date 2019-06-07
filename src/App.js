import React, { Component } from "react";
import "./App.css";
import Header from "./composants/Header.js";
import Item from "./composants/item";
import Listitems from "./composants/item-list";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

library.add(faFilm);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />

        <Item />
        <Listitems />
      </div>
    );
  }
}

export default App;
