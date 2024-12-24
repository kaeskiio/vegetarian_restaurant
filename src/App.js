import React, {useState, useEffect} from 'react';

import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';


const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <FoodofDay/>
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
