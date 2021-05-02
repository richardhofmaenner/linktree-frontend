import Head from 'next/head'
import propTypes from 'prop-types'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'
import { useEffect } from 'react'

const React = require('react')

function DashboardLayout({ title, heading, children }) {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/info`, { credentials: 'include' })
      .then((response) => response.json())
      .then((json) => {
        if (json.isLoggedIn === false) {
          const router = useRouter()
          Cookie.set('error', btoa('{"message": "You have to sign in first!"}'))
          router.push('/login').then()
        }
      })
  }, [])
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
