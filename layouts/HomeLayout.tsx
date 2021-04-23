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
          <h1>Linktr.ee</h1>
        </Banner>
      </header>
      <main className="container mx-auto">
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
