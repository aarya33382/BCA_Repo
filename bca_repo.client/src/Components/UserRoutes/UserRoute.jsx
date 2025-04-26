import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { totalContext } from '../AppCotext';
import { toast } from 'react-toastify';
export default function UserRoute({ children }) {
  const { isLogged } = useContext(totalContext);
  const { currentUser } = useContext(totalContext);
  useEffect(()=>
  {
    if(!isLogged)
    toast.warn("Please Login!!")
  },[])
  return (
    <>
      {isLogged && currentUser.roleId===0? children : <Navigate to="/login" />}
    </>
  );
}
