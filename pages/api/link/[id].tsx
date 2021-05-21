import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'DELETE') {
    const { token } = cookie.parse(apiReq.headers.cookie)
    const { id } = apiReq.query
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(async (res) => {
        if (res.status === 200) {
          apiRes.status(200)
          apiRes.end()
        } else if (res.status === 422) {
          const json = await res.json()
          apiRes.status(422).json(json)
        } else {
          apiRes.status(res.status)
          apiRes.end()
        }
      })
      .catch(() => {
        apiRes.status(500)
        apiRes.end()
      })
  }
}
