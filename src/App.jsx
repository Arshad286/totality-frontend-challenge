import React from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes, Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Villas from './Components/Villas'
import SingleVilla from './Components/SingleVilla'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import {ShopContextProvider} from './Context/ShopContext'
import Contactus from './Components/Contactus';



function App() {
 
  return (
    <>
    <ShopContextProvider>   
     <Router>
     <Navbar/>

     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Villas' element = {<Villas/>}/>
         <Route path='/villa/:id' element={<SingleVilla/>}/>
         <Route path='/Contactus' element={<Contactus/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/checkout' element ={<Checkout/>}/> 
     </Routes>

     </Router>
    
     </ShopContextProvider>


      </>
  )
}

export default App
