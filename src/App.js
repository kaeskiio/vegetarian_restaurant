import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

import Book from './pages/Book/Book'; 

const App = () => {
  return (
    <Router>
      <div>
        {}
        <Navbar />
        
        {}
        <Routes>
          {}
          <Route path="/" element={
            <>
              <Header />
              <AboutUs />
              <FoodofDay />
              <SpecialMenu />
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <FindUs />
              <Footer />
            </>
          } />

          {}
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
