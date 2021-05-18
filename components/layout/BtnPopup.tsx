import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Btn from '@/components/layout/Btn'
import styles from '@/styles/BtnPopup.module.css'

function BtnPopup({ children, randomNumber }) {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <Btn style="success" onClick={() => setIsOpened(true)} dataTarget={`#popup-${randomNumber}`}>Add new Link</Btn>
      <div className={`flex items-center justify-center ${styles.popup} ${isOpened && styles.open}`}>
        <div id={`popup-${randomNumber}`} className="w-11/12 md:w-2/3 xl:w-1/3 bg-white rounded pt-10 px-5 text-black relative">
          <span className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpened(false)}>X</span>
          {children}
        </div>
      </div>
    </>
  )
}

BtnPopup.propTypes = {
  children: PropTypes.node.isRequired,
  randomNumber: PropTypes.number,
}

BtnPopup.defaultProps = { randomNumber: Math.floor(Math.random() * 100000) }

export default BtnPopup
