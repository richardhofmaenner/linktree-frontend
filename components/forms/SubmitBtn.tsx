import React from 'react'
import PropTypes from 'prop-types'

function SubmitBtn({ children, onClick, mode }) {
  return (
    <button
      type="submit"
      className={`border rounded bg-transparent px-4 py-2 mb-5 transition-colors ${mode === 'normal' ? 'border-white hover:text-black hover:bg-white' : 'border-gray-700 hover:text-white hover:bg-gray-700'} `}
      onClick={onClick}
    >
      { children }
    </button>
  )
}

SubmitBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['normal', 'dark']),
}

SubmitBtn.defaultProps = {
  onClick: () => {},
  mode: 'normal',
}

export default SubmitBtn
