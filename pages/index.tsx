import HomeLayout from '@/layouts/HomeLayout'
import Banner from '@/components/Banner'
import Link from 'next/link'

const React = require('react')

function HomePage() {
  return (
    <HomeLayout title="Welcome">
      <Banner image="/images/bg-home.jpg">
        <h1 className="mb-5">Linktr.ee</h1>
        <p className="h2">The simple clone</p>
        <Link href="/login">
          <a className="mt-20 px-5 py-2 border inline-block transition-colors hover:bg-white hover:text-black">
            Sign in
          </a>
        </Link>
      </Banner>
    </HomeLayout>
  )
}

export default HomePage
