import React from 'react'
import PropTypes from 'prop-types'

function SubmitBtn({ children }) {
  return (
    <button
      type="submit"
      className="border border-white rounded bg-transparent px-4 py-2 mb-5 transition-colors hover:text-black hover:bg-white"
    >
      { children }
    </button>
  )
}

SubmitBtn.propTypes = { children: PropTypes.node.isRequired }

SubmitBtn.PropsDefault = { children: '' }

export default SubmitBtn
