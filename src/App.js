import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
//import Main from './components/Main';
import Footer from './components/Footer';
import Films from './components/Films';
import Detail from './components/Detail';
import Contact from './components/Contact';
import New from './components/New';
import About from './components/About';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div >
      <Navigation />
      <Routes >
        <Route path='/' element={<Films />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
