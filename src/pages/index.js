import React from "react";
import Nav from "./components/Nav.js";
import Spacer from "./components/Spacer.js";
import Title from "./components/Title.js";
import Installation from "./components/Installation.js";
import Demo from './components/Demo.js';
import About from './components/About.js';
import Feedback from './components/Feedback.js';
import Contribute from './components/Contribute.js';


export default function Home() {
  return (
    <div className="container">
      <Nav />
      <Spacer />
      <Title />
      <Installation />
      <Demo />
      <About />
      <Feedback />
      <Contribute />
    </div>  

    )
}

