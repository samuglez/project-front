// import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import Characters from './pages/Characters';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer/Footer';
import CharactersDetails from './pages/CharactersDetails';
// import { use, useEffect } from 'react';
const apiUrl =`${import.meta.env.VITE_BACK_URL}/characters`


function App() {

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<Characters apiUrl={apiUrl}/>} />
      <Route path="/characters/:id" element={<CharactersDetails apiUrl={apiUrl}/>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
