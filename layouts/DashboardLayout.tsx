import Head from 'next/head'
import propTypes from 'prop-types'
import { useEffect } from 'react'
import { PullstateCore } from '@/stores/CentralState'
import { useRouter } from 'next/router'

function DashboardLayout({ title, heading, children }) {

  const router = useRouter()
  const { UserStore } = PullstateCore.useStores()
  useEffect(() => {
    const isLoggedIn = UserStore.useState(s => s.isLoggedIn)
    console.log(isLoggedIn)
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
        {isLoggedIn &&
        {children}}
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
