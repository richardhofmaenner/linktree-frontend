import HomeLayout from '@/layouts/HomeLayout'
import Banner from '@/components/Banner'

const React = require('react')

function HomePage() {
  return (
    <HomeLayout title="Welcome">
      <Banner image="/images/bg-home.jpg">
        <h1 className="mb-40">Linktr.ee</h1>
        <p className="h2">The simple clone</p>
      </Banner>
    </HomeLayout>
  )
}

export default HomePage
