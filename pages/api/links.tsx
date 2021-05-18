import { NextApiRequest, NextApiResponse } from 'next'

export default async (apiReq: NextApiRequest, apiRes: NextApiResponse) => {
  if (apiReq.method === 'GET') {
    console.log(apiReq.headers.authorization)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      method: 'GET',
      headers: {
        'Authorization': apiReq.headers.authorization
      },
    })
      .then(async (res) => {
        if (res.status === 200) {
          const json = await res.json()
          apiRes.status(200).json(json)
        } else {
          apiRes.status(res.status).json(res.body)
        }
      })
      .catch((e) => {
        console.error(e)
        apiRes.status(500)
      })
  } else {
    apiRes.status(405)
  }
}
