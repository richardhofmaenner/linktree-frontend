import { createContext, useState } from 'react'
import { useRouter } from 'next/router'
import cookie from 'cookie'

interface IAuthContext {
  token: null | string
  isLoggedIn: boolean
  validationError: null | {message: string}[]
  error: null | string
  login: any
  logout: any
  checkLogin: any
}

const AuthContext = createContext<IAuthContext>({
  token: null,
  isLoggedIn: false,
  validationError: null,
  error: null,
  login: () => {},
  logout: () => {},
  checkLogin: () => {}
})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [validationError, setValidationError] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    setValidationError(null)
    setError(null)
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()
          setToken(json.token)
          setIsLoggedIn(true)
          await router.push('/dashboard')
        } else if (res.status === 403) {
          const json = await res.json()
          setError(json.error )
        } else if (res.status === 422) {
          const json = await res.json()
          setValidationError(json.errors)
        } else {
          setError('Something went wrong')
        }
      })
  }

  const logout = async (e) => {
    e.preventDefault()
    setToken(null)
    setIsLoggedIn(false)
    await router.push('/login')
  }

  const checkLogin = async () => {
    const res = await fetch('/api/user')
    const data = await res.json()

    if (res.status === 200) {
      setIsLoggedIn(true)
    } else {
      console.log(data)
    }
  }

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, validationError, error, login, logout, checkLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
