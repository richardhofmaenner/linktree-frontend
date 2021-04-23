import React from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/Banner.module.css'

function Banner(props) {
  return (
    <div
      className={`flex flex-wrap justify-center content-center ${styles.banner}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div>
        {props.children}
      </div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Banner
