import React from 'react'
import Radio from './Components/Radio'
import Navbar from './Components/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Contact from './Components/Contact'


const App = () => {
  return (
    <>
    <div className="">
      <Radio/>
      <Navbar/>
     
    </div>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<Service/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>

       
      </Routes>
      
    </>
  );
}

export default App
