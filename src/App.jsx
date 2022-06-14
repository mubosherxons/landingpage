import React,{ useState } from 'react'
import './App.css'
import Home from "./components/Home/Home"
import About from './components/About/About'
import FoodDesc from "./components/FoodDescription/FoodDesc"
import Service from './components/Service/Service'
import Orders from './components/Orders/Orders'


function App() {
  return (
    <div className="app">
      <Home/>
      <About/>
      <FoodDesc/>
      <Service/>
      <Orders/>
    </div>
  )
}

export default App
