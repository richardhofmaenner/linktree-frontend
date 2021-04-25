import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function ButtonLink({ href, style, children }) {

  let classStyles = ''

  switch (style){
  case 'inline': classStyles = 'border'
  }

  return (
    <Link href={href}>
      <a className={`px-5 py-3`}>
        {children}
      </a>
    </Link>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['inline', 'normal']),
  children: PropTypes.node.isRequired
}

ButtonLink.defaultProps = {
  style: 'normal',
}

export default ButtonLink
