import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Routes/Home';
import Trainers from './Routes/Trainers';
import Services from './Routes/Services';
import Pricing from './Routes/Pricing';
import Contact from './Routes/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trainers' element={<Trainers/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
