export const fetchCache = 'false'

export async function GET(request: Request) {
  const res = await (await fetch('http://127.0.0.1:8000/edge')).json()
  
  const yml = `
version: ${res.version}
`

return new Response(yml)
}
