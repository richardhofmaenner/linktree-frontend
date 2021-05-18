import Head from 'next/head'
import propTypes from 'prop-types'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { UserStore } from '@/stores/UserStore'

const React = require('react')

function DashboardLayout({ title, heading, children }) {
  const router = useRouter()
  const isLoggedIn = UserStore.useState(s => s.isLoggedIn)
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login').then()
    }
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
