import { useContext, useEffect, useState } from 'react';
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
import axios from 'axios';

import Test from './Components/Test';
import SingleResource from './Components/SingleResource';
import { totalContext } from './Components/AppCotext';
import { useNavigate } from 'react-router-dom';


function App() {
    const {setCurrentUser,setIsLogged}=useContext(totalContext);
   const navigate=useNavigate();
    const isTokenExpired = (token) => {
        const tokenParts = token.split('.'); // JWT tokens are split by '.'
        if (tokenParts.length !== 3) {
            return true; // Invalid token
        }

        const payload = JSON.parse(atob(tokenParts[1])); // Decode the payload (middle part)
        const expirationTime = payload.exp; // The 'exp' field contains the expiration timestamp (seconds)

        const currentTime = new Date().getTime() / 1000; // Current time in seconds
        return expirationTime < currentTime; // Return true if the token is expired
    };




   
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            if (isTokenExpired(token)) {
                // Token is expired, log the user out
                localStorage.removeItem('token');
                localStorage.removeItem('userT');
                setIsLogged(false);
                setCurrentUser(null);
                axios.defaults.headers.common['Authorization'] = ''; // Clear Authorization header
                navigate('/login'); // Redirect to login page
            } else {
                // Token is valid, set Authorization header and user info
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setIsLogged(true);
                const currentUser = JSON.parse(localStorage.getItem('userT'));
                setCurrentUser(currentUser);
            }
        } else {
            // If no token is found in localStorage
            setIsLogged(false);
            setCurrentUser(null);
            axios.defaults.headers.common['Authorization'] = ''; // Ensure no Authorization header is set
        }
    }, [setCurrentUser, setIsLogged, navigate]);



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


