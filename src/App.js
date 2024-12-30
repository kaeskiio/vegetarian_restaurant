
import React, {useState, useEffect} from 'react';
import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, TastingMenu, Team, Specials, ToGo, Kitchen} from './container';
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
          <Intro />
          <Gallery />
          <FindUs />
          <Footer /></>}>
        </Route>
        <Route path ="/menu" element = {<><SpecialMenu /> <TastingMenu/> <Footer/></>}></Route>
        <Route path="/book" element= {<><Book /> <Footer/></>}></Route>
        <Route path="/farm" element= {<><Farm /> <Footer/></>}></Route>
        <Route path="/team" element= {<><Team/> <Footer/></>}></Route>
        <Route path="/Specials" element ={<><Specials/><Footer/></>}></Route>
        <Route path="/awards" element ={<><Laurels/><Footer/></>}></Route>
        <Route path="/ToGo" element={<><ToGo/><Footer/></>}></Route>
        <Route path="/Kitchen" element={<><Kitchen/><Footer/></>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
