import React from 'react'
import PropTypes from 'prop-types'

function Section({ children }) {
  return (
    <section className="px-10 mb-20 mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
      {children}
    </section>
  )
}

Section.propTypes = { children: PropTypes.node.isRequired }

export default Section
