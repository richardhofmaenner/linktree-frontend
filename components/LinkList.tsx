import React from 'react'
import PropTypes from 'prop-types'
import LinkItem from '@/components/LinkItem'

function LinkList({ links }) {
  return (
    <div>
      {links.map((link) => <LinkItem item={link} />)}
    </div>
  )
}

LinkList.propTypes = { links: PropTypes.array.isRequired }

export default LinkList
