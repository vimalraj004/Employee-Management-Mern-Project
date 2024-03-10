import React from 'react'
import "./index.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Project/Login'
import Employees from './Project/Employees'
import Aboutme from './Project/Aboutme'
import Registerform from './Project/Registerform'
import Editpage from './Project/Editpage'
import Protect from './Project/Protect'
const App = () => {
  return (
    <div>
        <BrowserRouter>
     
        <Routes>
            <Route element={<Login/>}path='/'></Route>
            <Route element={<Protect data={Employees}/>} path='/emp'></Route>
            <Route element={<Aboutme/>} path='/aboutme/:id'></Route>
            <Route element={<Registerform/>} path='/Reg'></Route>
            <Route element={<Editpage/>} path='/edit/:id'></Route>
        </Routes>
        </BrowserRouter>
 
    </div>
  )
}

export default App
