import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Howdy Aditya!</p>
        <iframe className="youtubevideo" width="972" height="547" src="https://www.youtube.com/embed/C3jlOlzSL8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
