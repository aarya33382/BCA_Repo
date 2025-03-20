import { useEffect, useState } from 'react';
import './App.css';
import FileUpload from './FileUpload';
import FileList from './FileList';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Resources from './Components/Resources';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserContext from './Components/Auth/UserContext';



function App() {


    return (
        <div className='main-container w-screen h-screen '>
        <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/register'element={
                <UserContext>
                    <Register/>
                </UserContext>}/>
        </Routes>
                

            
        </div>
    )
}

export default App;