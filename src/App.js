import './App.css';
import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import { Component } from 'react';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
