export async function GET(request: Request) {
  // const isServer = typeof window === "undefined";

  const EDGE_APP_URL = process.env.NEXT_PUBLIC_EDGE_APP_URL as string
  
  // const res = await (await fetch(EDGE_APP_URL)).json()
  // let res;
  // if (!isServer) {
  //   res = await (await fetch(EDGE_APP_URL)).json();
  // } else {
  //   res = { version: "" };
  // }
  
  // const yml = `version: ${res.version}`

  // return new Response(yml)

  const res = await fetch(EDGE_APP_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const edgeInfo = await res.json();
  const yml = `version: ${edgeInfo.version}`

  return new Response(yml)
}
