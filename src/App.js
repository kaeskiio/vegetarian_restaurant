
import React, {useState, useEffect} from 'react';
import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, TastingMenu } from './container';
import { Navbar } from './components';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Book from './pages/Book/Book'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<><Header />
          <AboutUs />
          <FoodofDay/><Intro />
          <Laurels />
          <Gallery />
          <FindUs />
          <Chef />
          <Footer /></>}>
        </Route>
        <Route path ="/menu" element = {<><SpecialMenu /> <TastingMenu/> <Footer/></>}></Route>
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
