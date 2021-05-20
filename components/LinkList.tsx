import React from 'react'
import PropTypes from 'prop-types'
import LinkItem from '@/components/LinkItem'

function LinkList({ links }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {links.map((link) => <LinkItem key={link.id} item={link} />)}
    </div>
  )
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link_text: PropTypes.string.isRequired,
      link_location: PropTypes.string.isRequired,
      clicks: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
      user_id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default LinkList
