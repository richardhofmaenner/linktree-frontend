import Head from 'next/head'
import propTypes from 'prop-types'

require('@/styles/DashboardLayout.module.css')

const React = require('react')

function DashboardLayout({ title, heading, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="container mx-auto">
        <h1 className="text-center">{heading}</h1>
      </header>
      <main className="container mx-auto">
        {children}
      </main>
    </div>
  )
}

DashboardLayout.propTypes = {
  title: propTypes.string.isRequired,
  heading: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default DashboardLayout
