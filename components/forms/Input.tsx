import React from 'react'
import PropTypes from 'prop-types'

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired
}

Input.propDefault = {
  type: 'text'
}

function Input({ name, type, placeholder, value, onValueChange }) {
  return (
    <input
      className='border border-white rounded bg-transparent px-4 py-2 focus:outline-none'
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onValueChange}
    />
  )
}

export default Input
