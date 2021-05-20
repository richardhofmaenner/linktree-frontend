import React from 'react'
import PropTypes from 'prop-types'

function Btn({ onClick, children, styling, dataTarget }) {
  let btnStyle
  switch (styling) {
  case 'info': btnStyle = 'bg-blue-400 border-blue-400 hover:bg-transparent'; break
  case 'warning': btnStyle = 'bg-yellow-700 border-yellow-700 hover:bg-transparent'; break
  case 'danger': btnStyle = 'bg-red-700 border-red-700 hover:bg-transparent'; break
  case 'success': btnStyle = 'bg-green-700 border-green-700 hover:bg-transparent'; break
  default: break
  }
  return (
    <>
      <button
        onClick={onClick}
        className={`inline-block px-5 py-2 rounded border ${btnStyle} transition-colors`}
        data-target={dataTarget}
        type="button"
      >
        {children}
      </button>
    </>
  )
}

Btn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  styling: PropTypes.oneOf(['info', 'warning', 'danger', 'success']),
  dataTarget: PropTypes.string,
}

Btn.defaultProps = {
  onClick: () => {},
  styling: 'success',
  dataTarget: '',
}

export default Btn
