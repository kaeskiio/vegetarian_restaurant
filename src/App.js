
import React, {useState, useEffect} from 'react';
import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, TastingMenu, Team } from './container';
import { Navbar } from './components';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Farm, Book } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<><Header />
          <AboutUs />
          <FoodofDay/>
          <Chef />
          <Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Footer /></>}>
        </Route>
        <Route path ="/menu" element = {<><SpecialMenu /> <TastingMenu/> <Footer/></>}></Route>
        <Route path="/book" element= {<><Book /> <Footer/></>}></Route>
        <Route path="/farm" element= {<><Farm /> <Footer/></>}></Route>
        <Route path="/team" element= {<><Team/> <Footer/></>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
