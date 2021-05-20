import React from 'react'
import PropTypes from 'prop-types'

function Input({ name, type, placeholder, value, onValueChange, mode }) {
  return (
    <input
      className={`w-full border ${mode === 'normal' ? 'border-white' : 'border-gray-700'} rounded bg-transparent px-4 py-2 mb-5 focus:outline-none`}
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
  mode: PropTypes.oneOf(['normal', 'dark']),
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  mode: 'normal',
}

export default Input
