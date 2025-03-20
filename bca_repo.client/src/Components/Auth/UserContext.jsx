import React from "react";
import { useState, createContext } from "react";

const userContext = createContext();
export default function UserContext({ children }) {

  const [user, setUser] = useState({

    name: "",
    email: "",
    passwordHash: "",
    gender: 0,
    dateOfBirth: "",

  })
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>

  )
}
export { userContext };
