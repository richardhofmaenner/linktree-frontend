import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'GET') {
    apiRes.setHeader('Set-Cookie', cookie.serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 1,
      path: '/',
    }))
    apiRes.status(200)
    apiRes.end()
  } else {
    apiRes.status(405).setHeader('Allow', 'POST')
    apiRes.end()
  }
}
