/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

import { translateEdge } from './utils/translate'
import YoutubeEmbed from '../component/YoutubeEmbed'

const inter = Inter({ subsets: ['latin'] })

const useEdgeInfo = async () => {
  const EDGE_APP_URL = process.env.NEXT_PUBLIC_EDGE_APP_URL as string
  const res = await fetch(EDGE_APP_URL, { cache: 'no-store' });
  return await res.json()
};

const useChargeStations = async () => {
  const POSTGREST_URL = process.env.NEXT_PUBLIC_POSTGREST_URL as string
  const EDGE_OBJECT_ID = process.env.NEXT_PUBLIC_OBJECT_ID;
  const getChargeInfo = POSTGREST_URL + '/charging_stations?object_id=eq.' + EDGE_OBJECT_ID
  const res = await fetch(getChargeInfo, { cache: 'no-store' });
  return await res.json()
}

export default async function Home() {

  const edge = await useEdgeInfo();
  // const [edge, setEdge] = useState<any>({});
  // useEffect(() => {
  //   if (data) {
  //     setEdge(data);
  //   }
  // }, [data]);

  // if (error) return <div>Failed to load</div>;
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // const { data, error } = useChargeStations();
  const charge = await useChargeStations();
  const chargeInfo = translateEdge(charge[0]);

  return (
    <>
      <div className="hero">
        To Build a sustainable world by<br />
        connecting mobility and clean envergy
      </div>
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
          <span>EDGE v{edge.version}</span>
        </div>
      </div>
      <div className="stack-item nav">
        <div className="plug" style={{ border: "0px", }}>
        </div>
        <div className="message"><span>충전 방식 및 급속/완속 여부를 확인 후<br/>충전해주세요</span></div>
        <div className="plug" style={{ border: "0px", }}>
        </div>
      </div>
      <div className="stack-item content ">
        {/* <Link href={"/charge/ac3"}> */}
        <div>
          <div className="card-info">
            <div className="icon">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <div className="container">
              <span className="button-text">{chargeInfo.cp_tp_nm}</span>
            </div>
          </div>
        </div>
        {/* </Link> */}
        {/* <Link href={"charge/dcd"}> */}
        <div>
          <div className="card-info">
            <div className="icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="container">
              <span className="button-text">{chargeInfo.charge_tp_nm}</span>
            </div>
          </div>
        </div>
        {/* </Link> */}
        <Link 
          href={{
            pathname: '/charge/detail',
            // query: { chargeInfo: JSON.stringify(chargeInfo) },
            query: { chargeInfo: `{ "object_id": "${chargeInfo.object_id}", "cp_tp": "${chargeInfo.cp_tp}", "charge_tp": "${chargeInfo.charge_tp}" }` },
          }}
          // as={`/charge/${chargeInfo.object_id}`}
        >
        <div className="card-button">
          <div className="icon">
            <i className="fas fa-plug"></i>
          </div>
          <div className="container">
            <span className="button-text">충전하기</span>
          </div>
        </div>
        </Link>
      </div>
      <div className="video-item">
        <div className="middle">
          <YoutubeEmbed embedId="y_7_YTmXd5c" />
        </div>
      </div>
    </>
  )
}
