import { NextApiRequest, NextApiResponse } from 'next'

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
        return apiRes.status(res.status).json(json)
      })
      .catch(() => {
        return apiRes.status(500)
      })
  } else {
    return apiRes.status(405).setHeader('Allow', 'POST')
  }
}
