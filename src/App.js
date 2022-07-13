import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="header">Hello World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );

  // return React.createElement("h1", { class: "header" }, "Hello World!");
}

export default App;
