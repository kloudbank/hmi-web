/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RenderType from '@/component/RenderType';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function page({
  params,
  // searchParams,
}: {
  params: { slug: string },
  // searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchParams = useSearchParams()
  const chargeInfo = searchParams.get("chargeInfo");

  const POSTGREST_URL = process.env.NEXT_PUBLIC_POSTGREST_URL as string
  const POSTGREST_TOKEN = process.env.NEXT_PUBLIC_POSTGREST_TOKEN as string
  const EDGE_OBJECT_ID = process.env.NEXT_PUBLIC_OBJECT_ID;
  const getChargeInfo = POSTGREST_URL + '/charging_stations?object_id=eq.' + EDGE_OBJECT_ID

  const [cpStat, setCpStat] = useState(1);

  const router = useRouter();
  const homeHandler = () => {
    if (cpStat == 99) {
      alert('Alert 발생 중입니다.');
    } else if (cpStat == 2) {
      alert('충전 중입니다.');
    } else {
      router.push("/");
    }
  }

  const startHandler = () => {

    if (cpStat == 99) {
      alert('Alert 발생 중입니다.');
    } else {
      
      let changeCpStat = 1, changeCpVolt, changeCpAmp;
      if (cpStat == 1) {
        changeCpStat = 2;
        changeCpVolt = 200;
        changeCpAmp = 23;
      } else {
        changeCpVolt = 80;
        changeCpAmp = 5;
      }

      fetch(getChargeInfo, {
        method: "PATCH",
        body: JSON.stringify({
          "cp_stat": changeCpStat,
          "cp_volt": changeCpVolt,
          "cp_amp": changeCpAmp,
        }),
        headers: {
          "Authorization": "Bearer " + POSTGREST_TOKEN,
          "content-type": "application/json",
        },
      }).catch((e) => console.log(e)).then(() => setCpStat(changeCpStat));
    }
  }

  const alertHandler = () => {
    const changeCpStat = cpStat == 99 ? 1 : 99;

    fetch(getChargeInfo, {
      method: "PATCH",
      body: JSON.stringify({
        "cp_stat": changeCpStat,
        "cp_volt": 80,
        "cp_amp": 5,
      }),
      headers: {
        "Authorization": "Bearer " + POSTGREST_TOKEN,
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e)).then(() => setCpStat(changeCpStat));
  }

  return (
    <>
      <div className="stack-item nav">
        <div className="plug" >
          <RenderType chargeInfo={chargeInfo} />
        </div>
        <div className="message"><span>충전을 시작 해주세요</span></div>
        <div className="card" onClick={homeHandler}>
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="text">Home</div>
        </div>
      </div>
      <div className="stack-item charging ">
        <div className='charging-box-small'>
          <h3>차량 정보</h3>
          <div className="battery">
            <div className="battery-level"><b>25%</b></div>
          </div>
          <ul>
            <li>Model: Tesla xxx</li>
            <li>Battery: SKOn bx-002-22</li>
          </ul>
        </div>
        <div className='charging-box'>
          <h3>충전 상태</h3>
          <div className="current-status">
            <div className="current-status-box">
              <div className="circle">
              <h3 className='inner-text'>50 kWh</h3>
              <p className='inner-text'>용량</p>
              </div>
            </div>
            <div className="current-status-box">
              <div className="circle">
              <h3 className='inner-text'>250km</h3>
              <p className='inner-text'>주행가능</p>
              </div>
            </div>
            <div className="current-status-box">충전 전압: 120V(AC)</div>
            <div className="current-status-box"><span>남은 시간: 20분 45초</span></div>
          </div>
        </div>
        <div className='charging-box-command'>
          <div className={'charging-box-command-button ' + (cpStat == 2 ? 'ing-charge' : '')} onClick={startHandler}>{cpStat == 2? '중지' : '시작'}</div>
          <div className={'charging-box-alert-button ' + (cpStat == 99 ? 'ing-alert' : '')} onClick={alertHandler}>{cpStat != 99? 'Alert' : 'Stop'}</div>
        </div>
      </div>
      <div className="stack-item nav">

      </div>
    </>
  )
}
