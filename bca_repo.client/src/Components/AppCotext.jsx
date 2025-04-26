// import React, { useEffect, useState,useContext } from 'react'
// import { createContext } from 'react'

// const totalContext = createContext();
// export default function AppCotext({children}) {
//  const [isLogged,setIsLogged]=useState(false);
//   const[currentUser,setCurrentUser]=useState({});
  
//   return (
//     <totalContext.Provider value={{currentUser,setCurrentUser,isLogged,setIsLogged}}>
//       {children}
//     </totalContext.Provider>
//   )
// }

// export {totalContext};


import React, { useState, createContext } from 'react';

const totalContext = createContext();

export default function AppCotext({ children }) {
  // ✅ Lazy initialization for isLogged
  const [isLogged, setIsLogged] = useState(() => {
    return !!localStorage.getItem("token");
  });

  // ✅ Lazy init for currentUser too (optional but cleaner)
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("userT");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  return (
    <totalContext.Provider value={{ currentUser, setCurrentUser, isLogged, setIsLogged }}>
      {children}
    </totalContext.Provider>
  );
}

export { totalContext };
