
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/login.jsx'
import Homepage from './pages/homepage.jsx'
const App = () => {
  return (
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    
   </Routes>
   
   </BrowserRouter>
  
)}

export default App