/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavButton from '@/component/NavButton';
import RenderType from '@/component/RenderType';
import { useRouter } from 'next/navigation';



export default function page({
  params
}: {
  params: { slug: string }
}) {
  const router = useRouter();
  const homeHandler = () => {
    router.push("/")
  }
  return (
    <>
      <div className="stack-item nav">
        <div className="plug" >
          <RenderType chargeType={params.slug} />
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
          <div className='charging-box-command-button'>시작</div>
          <div className='charging-box-command-button' onClick={homeHandler}>취소</div>
        </div>
      </div>
      <div className="stack-item nav">

      </div>
    </>
  )
}
