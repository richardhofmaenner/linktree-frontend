import React from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/Banner.module.css'

function Banner(props) {
  return (
    <div
      className={`flex flex-wrap justify-center content-center text-center ${styles.banner}`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div>
        {props.children}
      </div>
      <button className={`p-5 absolute bottom-12 text-2xl animation-scroll-down`} onClick={scrollDown}>
        <i className="fas fa-chevron-down"></i>
      </button>
    </div>
  )
}

function scrollDown() {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Banner
