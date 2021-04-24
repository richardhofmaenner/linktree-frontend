import Head from 'next/head'
import propTypes from 'prop-types'
import Banner from '@/components/Banner'

const React = require('react')

function HomeLayout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Banner image={'/images/bg-home.jpg'}>
          <h1 className="mb-40">Linktr.ee</h1>
          <p className="h2">The simple clone</p>
        </Banner>
      </header>
      <main className="container mx-auto min-h-screen">
        {children}
      </main>
    </div>
  )
}

HomeLayout.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default HomeLayout
