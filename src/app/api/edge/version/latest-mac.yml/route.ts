import * as superagent from 'superagent';

export async function GET(request: Request) {
  const EDGE_APP_URL = process.env.NEXT_PUBLIC_EDGE_APP_URL as string

  const res = await superagent.get(EDGE_APP_URL);
  const yml = `version: ${res.body.version}`

  return new Response(yml)
}
