import React from 'react'
import PropTypes from 'prop-types'

function ErrorAlert({ children }) {
  return (
    <div className="bg-red-700 p-4 mb-5 text-sm rounded">
      {children}
    </div>
  )
}

ErrorAlert.propTypes = { children: PropTypes.node.isRequired }

export default ErrorAlert
