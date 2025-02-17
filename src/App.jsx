// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import Characters from './pages/Characters';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer/Footer';
// import { use, useEffect } from 'react';
const apiUrl ="http://localhost:5005/characters"


function App() {

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<Characters apiUrl={apiUrl}/>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
