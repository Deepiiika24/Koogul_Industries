import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages.jsx/Home'
import Aboutus from './Pages.jsx/Aboutus'
import Products from './Pages.jsx/Products'
import Contactus from './Pages.jsx/Contactus'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contactus' element={<Contactus/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
