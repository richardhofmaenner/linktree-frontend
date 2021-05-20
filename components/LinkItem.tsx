import React from 'react'
import PropTypes from 'prop-types'

function LinkItem({ item }) {
  return (
    <div className="relative border border-white rounded p-5 hover:bg-white hover:text-black transition-colors cursor-pointer overflow-hidden">
      <a
        className="absolute w-full h-full block top-0 left-0" target="_blank" href={item.link_location}
        rel="noreferrer"
      >
&nbsp;
      </a>
      <p>{item.link_text}</p>
      <p className="break-all">{item.link_location}</p>
      <p>
        Clicked
        {' '}
        {item.clicks}
        {' '}
        {' '}
        {' '}
        times
      </p>
    </div>
  )
}

// eslint-disable-next-line react/forbid-prop-types
LinkItem.propTypes = { item: PropTypes.object.isRequired }

export default LinkItem
