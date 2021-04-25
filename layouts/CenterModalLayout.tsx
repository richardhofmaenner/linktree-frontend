import Head from 'next/head'
import propTypes from 'prop-types'

const React = require('react')

function CenterModalLayout({ title, modalTitle, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='min-h-screen flex items-center justify-center'>
        <section className='w-1/2 md:w-1/3 text-center border border-gray-200 rounded py-4'>
          <div className='mb-10'>
            <h1 className="h3">{modalTitle}</h1>
          </div>
          <div>
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}

CenterModalLayout.propTypes = {
  title: propTypes.string.isRequired,
  modalTitle: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default CenterModalLayout
