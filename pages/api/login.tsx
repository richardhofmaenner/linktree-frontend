import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'POST') {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(apiReq.body)
    })
      .then(async res => {
        const json = await res.json()
        apiRes.setHeader('Set-Cookie', cookie.serialize('token', json.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        }))
        return apiRes.status(res.status).json(json)
      })
      .catch(() => {
        return apiRes.status(500)
      })
  } else {
    return apiRes.status(405).setHeader('Allow', 'POST')
  }
}
