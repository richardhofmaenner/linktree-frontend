import React from 'react'
import PropTypes from 'prop-types'

function LinkItem({ item }) {
  return (
    <div>
      <p>{item.link_text}</p>
      <p><a href={item.link_location}>{item.link_location}</a></p>
    </div>
  )
}

// eslint-disable-next-line react/forbid-prop-types
LinkItem.propTypes = { item: PropTypes.object.isRequired }

export default LinkItem
