import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Chef, FindUs, FoodofDay, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

import Book from './pages/Book/Book'; // Make sure path is correct

const App = () => {
  return (
    <Router>
      <div>
        {/* The Navbar is always visible */}
        <Navbar />
        
        {/* Define routes */}
        <Routes>
          {/* Default Route for everything except login */}
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

          {/* Book Route */}
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
