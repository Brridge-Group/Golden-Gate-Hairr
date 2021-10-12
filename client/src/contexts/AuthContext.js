import React, { useState, createContext } from 'react'

const AuthContext = createContext(null)

//wrapper for the provider
export const AuthProvider = ({ user, children }) => {
  const [currentUser, setCurrentUser] = useState(user)

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
