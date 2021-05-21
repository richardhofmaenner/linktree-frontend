import React from 'react'
import PropTypes from 'prop-types'

function LinkItem({ item, removing }) {
  return (
    <div className="relative border border-white rounded p-5 cursor-pointer overflow-hidden">
      <a
        className="absolute w-full h-full block top-0 left-0 z-10" target="_blank" href={item.link_location}
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
        times
      </p>
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); removing(item.id) }}
        className="mt-2 py-2 relative z-20 hover:text-gray-400"
      >
        Delete Item
      </button>
    </div>
  )
}

// eslint-disable-next-line react/forbid-prop-types
LinkItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  removing: PropTypes.func.isRequired,
}

export default LinkItem
