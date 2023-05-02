export async function GET(request: Request) {
  // console.log(process.env.NEXT_PUBLIC_EDGE_APP_URL);
  const EDGE_APP_URL = process.env.NEXT_PUBLIC_EDGE_APP_URL as string
  const res = await (await fetch(EDGE_APP_URL)).json()
  
  const yml = `version: ${res.version}`

  return new Response(yml)
}
