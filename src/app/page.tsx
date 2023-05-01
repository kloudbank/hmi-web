import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
