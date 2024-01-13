import { useState } from "react";
import React from "react";
import styles from "../App.css";
import Navbar from "./Navbar";

const Header=()=> {

    return (
        <header className="App-header">
        <Navbar />
        <img src="..." className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}
export default Header;