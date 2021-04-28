import Head from 'next/head'
import propTypes from 'prop-types'

const React = require('react')

function CenterModalLayout({ title, modalTitle, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <section
          className="w-5/6 sm:w-3/5 md:w-2/3 lg:w-1/3 border border-gray-200 rounded py-4 px-4 sm:px-14"
        >
          <div className="mb-10 text-center">
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
