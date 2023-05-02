export const fetchCache = 'false'

export async function GET(request: Request) {
  const res = await (await fetch('http://127.0.0.1:8000/edge')).json()
  return new Response(res.version)
}
