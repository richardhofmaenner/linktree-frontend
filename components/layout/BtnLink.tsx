import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function BtnLink({ href, target, children, style }) {
  let btnStyle
  switch (style) {
  case 'info': btnStyle = 'bg-blue-400 border-blue-400 hover:bg-transparent'; break
  case 'warning': btnStyle = 'bg-yellow-700 border-yellow-700 hover:bg-transparent'; break
  case 'danger': btnStyle = 'bg-red-700 border-red-700 hover:bg-transparent'; break
  case 'success': btnStyle = 'bg-green-700 border-green-700 hover:bg-transparent'; break
  }
  return (
    <>
      <Link href={href}>
        <a target={target} className={`inline-block px-5 py-2 rounded border ${btnStyle} transition-colors`}>
          {children}
        </a>
      </Link>
    </>
  )
}

BtnLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(['info', 'warning', 'danger', 'success']),
}

BtnLink.PropsDefault = {
  target: '_self',
  style: 'success',
}

export default BtnLink
