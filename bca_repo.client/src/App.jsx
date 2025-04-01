import { useEffect, useState } from 'react';
import './App.css';
import FileUpload from './FileUpload';
import FileList from './FileList';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Resources from './Components/Resources';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserContext from './Components/Auth/UserContext';
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Test from './Components/Test';
import SingleResource from './Components/SingleResource';

function App() {


    return (
        // <FileList />
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            {/* <Test /> */}
            <div className='main-container w-screen h-screen '>
                <div className='w-full h-[10%] bg'>
                    <Navbar />
                </div>
                <div className='w-full h-[90%] br overflow-auto'>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/resources' element={<Resources />} />
                        <Route path="/resource/:id" element={<SingleResource />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={
                            <UserContext>
                                <Register />
                            </UserContext>} />
                    </Routes>


                </div>



            </div>
        </>


    )
}

export default App;