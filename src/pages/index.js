import React from "react";
import Nav from "./components/Nav.js";
import Spacer from "./components/Spacer.js";
import Title from "./components/Title.js";
import Installation from "./components/Installation.js";
import Demo from './components/Demo.js';
import About from './components/About.js';
import Authors from './components/Authors.js';
import Contribute from './components/Contribute.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Droid+Serif&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Nav />
        <Spacer />
        <Title />
        <About />
        <Installation />
        <Demo />
        <Authors />
        <Contribute />
      </div>
    </>
  )
}


