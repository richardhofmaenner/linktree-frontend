import Head from 'next/head'
import propTypes from 'prop-types'

const React = require('react')

function PublicLayout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-center">
        <section className="w-5/6 sm:w-3/5 md:w-2/3 lg:w-1/3 pt-60">
          <div>
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}

PublicLayout.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default PublicLayout
