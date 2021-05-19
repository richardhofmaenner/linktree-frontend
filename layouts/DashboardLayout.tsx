import Head from 'next/head'
import propTypes from 'prop-types'
import AuthContext from '@/context/AuthContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

function DashboardLayout({ title, heading, children }) {
  const {checkLogin} = useContext(AuthContext)
  useEffect(() => {
    checkLogin()
  })

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="container mx-auto mt-10">
        <h1 className="text-center">{heading}</h1>
      </header>
      <main>
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
