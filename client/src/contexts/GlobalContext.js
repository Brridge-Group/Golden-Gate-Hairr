import { useState, createContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [userState, setUserState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
    createdDate: '',
    type: '',
  })

  return (
    <AuthContext.Provider value={{ userState, setUserState }}>
      {props.children}
      {console.log(props.children)}
    </AuthContext.Provider>
  )
}
