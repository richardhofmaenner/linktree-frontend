import React from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/Banner.module.css'
import Link from 'next/link'

function Banner({ image, children }) {
  return (
    <div
      className={`flex flex-wrap justify-center content-center text-center ${styles.banner}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        {children}
      </div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Banner
