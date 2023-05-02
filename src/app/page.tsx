/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const useEdgeInfo = () => {
  // console.log(process.env.NEXT_PUBLIC_EDGE_APP_URL)
  const EDGE_APP_URL = process.env.NEXT_PUBLIC_EDGE_APP_URL as string
  const { data, error } = useSWR(EDGE_APP_URL, fetcher);
  return {
    data,
    error,
  };
};

export default function Home() {

  // const router = useRouter();

  const { data, error } = useEdgeInfo();
  const [edge, setEdge] = useState<any>({});
  useEffect(() => {
    if (data) {
      setEdge(data);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="stack-item top">
        <div className="left">SK Signet</div>
        <div className="middle">
          <a className="item" href="#">
            <i className="fas fa-phone"></i>
            <span> 고객센터(02-1588-0101)</span>
          </a>
        </div>
        <div className="right">
          <span>HMI v1.0.0</span><br />
          {/* <span>EDGE v{edge.version}</span> */}
          <span>EDGE v{data.version}</span>
        </div>
      </div>
      <div className="stack-item nav">
        <div className="plug" style={{ border: "0px", }}>
        </div>
        <div className="message"><span>충전 방식을 선택해주세요</span></div>
        <div className="plug" style={{ border: "0px", }}>
        </div>
      </div>
      <div className="stack-item content ">
        <Link href={"/charge/ac3"}>
          <div className="card-button">
            <div className="icon">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <div className="container">
              <span className="button-text">AC 3상</span>
            </div>
          </div>
        </Link>
        <Link href={"charge/dcd"}>
        <div className="card-button">
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="container">
            <span className="button-text">DC 차데모</span>
          </div>
        </div>
        </Link>
        <Link href={"/charge/dcc"}>
        <div className="card-button">
          <div className="icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="container">
            <span className="button-text">DC 콤보</span>
          </div>
        </div>
        </Link>
      </div>
      <div className="stack-item nav">
      </div>
    </>
  )
}
