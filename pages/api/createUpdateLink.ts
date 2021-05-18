import { NextApiRequest, NextApiResponse } from 'next'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'PUT') {
    console.log(apiReq.body)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      headers: {
        'Authorization': apiReq.headers.authorization,
        'Content-type': 'application/json',
        'Accept': 'application/json'
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
