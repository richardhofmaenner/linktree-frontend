import React from 'react'
import PropTypes from 'prop-types'
import LinkItem from '@/components/LinkItem'

function LinkList({ links }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {links.map((link) => <LinkItem item={link} />)}
    </div>
  )
}

LinkList.propTypes = { links: PropTypes.array.isRequired }

export default LinkList
