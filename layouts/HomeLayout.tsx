import Head from 'next/head'
import propTypes from 'prop-types'

const React = require('react')

function HomeLayout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {children}
      </header>
    </div>
  )
}

HomeLayout.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default HomeLayout
