import './App.css';
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Contact from './Pages/Contact';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
      <Routes>
       <Route path='/'  element= {<Home />} />
       <Route path='/project' element= {<Project />} />
       <Route path='/about' element= {<About />} />
       <Route path='/contact' element= {<Contact />} />
      </Routes>
   </React.Fragment>
  );
}

export default App;
