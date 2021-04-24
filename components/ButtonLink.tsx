import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function ButtonLink({ href, style }) {
  return (
    <Link href={href}>
      <a className={`p-5 `}>
        <i className="fas fa-chevron-down" />
      </a>
    </Link>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['inline', 'normal'])
}

ButtonLink.defaultProps = {
  style: 'normal',
}

export default ButtonLink
