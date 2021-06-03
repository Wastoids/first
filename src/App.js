import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Howdy Aditya!</p>
        <button className="clickTest" onClick={() => {
          alert("Thanks for Clicking!");
        }}>
          Click me for GA
        </button>
      </header>
    </div>
  );
}

export default App;
