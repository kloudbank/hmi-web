"use client"
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';

export default function NavButton({ navType }: { navType: string }) {
  const router = useRouter();
  const handlerClick = () => {
    router.push("/")
  }
  
  if (navType === "charging") {
    return (
      <>
        <div className="card" onClick={handlerClick}>
          <div className="icon">
            <i className="fas fa-circle-stop"></i>
          </div>
          <div className="text">충전 취소</div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-circle-pause"></i>
          </div>
          <div className="text">충전 일시 멈춤</div>
        </div>
      </>
    )
  }
  if (navType === "done") {
    return (
      <>
        <div className="card" >
          <div className="icon">
            <i className="fas fa-circle-stop"></i>
          </div>
          <div className="text">충전 취소</div>
        </div>
        <div className="card" onClick={handlerClick}>
          <div className="icon">
            <i className="fa-solid fa-circle-pause"></i>
          </div>
          <div className="text">Home</div>
        </div>
      </>
    )
  }

 
  return (
    <>
      <div className="card" onClick={handlerClick}>
        <div className="icon">
          <i className="fas fa-chevron-circle-left"></i>
        </div>
        <div className="text">이 전</div>
      </div>
      <div className="card" onClick={handlerClick}>
        <div className="icon">
          <i className="fa-solid fa-chalkboard-teacher"></i>
        </div>
        <div className="text">Home</div>
      </div>
    </>
  )
}
