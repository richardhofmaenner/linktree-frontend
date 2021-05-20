import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'PUT') {
    const { token } = cookie.parse(apiReq.headers.cookie)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(apiReq.body),
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()
          apiRes.status(200).json(json)
        } else {
          apiRes.status(res.status).json(res.body)
        }
      })
      .catch(() => {
        apiRes.status(500)
      })
  } else {
    apiRes.status(405).setHeader('Allow', 'PUT')
  }
}
