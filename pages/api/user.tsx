import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'GET') {
    if (!apiReq.headers.cookie) {
      return apiRes.status(403).json({ message: 'Not authorized' })
    }

    const { token } = cookie.parse(apiReq.headers.cookie)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/info`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })

    const user = await res.json()
    if (res.status === 200) {
      return apiRes.status(200).json(user)
    }
    return apiRes.status(res.status)
  }
  return apiRes.status(405).setHeader('Allow', 'GET')
}
