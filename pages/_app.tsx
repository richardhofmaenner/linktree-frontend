import '../styles/globals.css'
import { AuthProvider } from '@/context/AuthContext'
import PropTypes from 'prop-types'

const React = require('react')

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AuthProvider>
  )
}
MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Component: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.any.isRequired,
}

export default MyApp
