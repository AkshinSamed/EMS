import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddEmployee from './components/AddEmployee';
import About from './components/About';


function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={ListEmployeeComponent}></Route>
          <Route path='/employees' Component={ListEmployeeComponent}></Route>
          <Route path='/employees/new' Component={AddEmployee}></Route>
          <Route path='/employees/:id' Component={AddEmployee}></Route>
          <Route path='/about' Component={About}></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
