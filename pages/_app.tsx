import '../styles/globals.css'
import { AuthProvider } from '@/context/AuthContext'

const React = require('react')

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
