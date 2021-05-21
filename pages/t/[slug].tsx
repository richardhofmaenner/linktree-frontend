import React from 'react'
import PublicLayout from '@/layouts/PublicLayout'
import PropTypes from 'prop-types'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let data = []
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/t/${params.slug}`)
    .then(async (res) => {
      if (res.status === 200) {
        const json = await res.json()
        data = json.data
      }
    })
  return {
    props: {
      user: '',
      links: data,
    },
  }
}

function Slug({ user, links }) {
  console.log(links)
  return (
    <PublicLayout title={`${user} s Link tree`}>
      {links.map((link) => link.link_text)}
    </PublicLayout>
  )
}

Slug.propTypes = {
  user: PropTypes.string.isRequired,
  links: PropTypes.oneOfType([
    PropTypes.shape({
      link_location: PropTypes.string.isRequired,
      link_text: PropTypes.string.isRequired,
    }),
    PropTypes.shape({}),
  ]).isRequired,
}

export default Slug
