import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import '../App.css'
import Newitem from './Newitem'
import Categories from './Categories'
import Footer from './Footer'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Profile from './Profile'


function Shipqua() {
  return (
    <div>
     <Router> 
      <Navbar/>
         <Routes> 
           <Route exact path='/'
           
           element={<><Header> </Header><Newitem /><Categories /></>} /> 
            
              
           <Route path='/Login' element={<Profile/>} />
                
             

         </Routes>
       <Footer/>
      </Router> 
    </div>
  )
}

export default Shipqua
