import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

// eslint-disable-next-line import/prefer-default-export
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ token, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
