import React from 'react'
import PropTypes from 'prop-types'

function Input({ name, type, placeholder, value, onValueChange }) {
  return (
    <input
      className="w-full border border-white rounded bg-transparent px-4 py-2 mb-5 focus:outline-none"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onValueChange}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
}

export default Input
