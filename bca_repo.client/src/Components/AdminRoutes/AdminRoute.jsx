import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { totalContext } from '../AppCotext';

export default function AdminRoute({ children }) {
  const { isLogged } = useContext(totalContext);
  const { currentUser } = useContext(totalContext);

  return (
    <>
      {isLogged && currentUser.roleId===1? children : <Navigate to="/login" />}
    </>
  );
}
