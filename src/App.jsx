import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./component/Heading.jsx";

function App() {
  let developerName = "Jane";

  return (
    <>
      <h1>Hello React!</h1>
      <p>12/04/2023 08:05PM</p>
      <Heading />
      <p>written by {developerName}</p>
    </>
  );
}

export default App;
