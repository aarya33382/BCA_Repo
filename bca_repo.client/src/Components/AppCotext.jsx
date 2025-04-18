import React, { useState } from 'react'
import { createContext } from 'react'

const totalContext = createContext();
export default function AppCotext({children}) {

 const [isLogged,setIsLogged]=useState(false);
 const[currentUser,setCurrentUser]=useState({});

  return (
    <totalContext.Provider value={{currentUser,setCurrentUser,isLogged,setIsLogged}}>
      {children}
    </totalContext.Provider>
  )
}

export {totalContext};