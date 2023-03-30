import React from 'react';
import logo from './logo.svg';
import './App.css';
import Podcast from './Podcast';
import Home from './Home';
import Nav from './Nav';
import MovieList from './Movies';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/Podcast" element={<Podcast />} />
      <Route path = "/Movies" element={<MovieList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
