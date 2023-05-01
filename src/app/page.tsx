import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="stack-item nav">
        <div className="plug">
          <div className="icon">
            <i className="fas fa-charging-station"></i>
          </div>
          <div className="text">EV Charge</div>
        </div>
        <div className="message"><span>안내메세지</span></div>
        <div className="card">
          <div className="icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="text">Home</div>
        </div>
      </div>
    </>
  )
}
