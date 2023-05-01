/* eslint-disable @next/next/no-css-tags */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SK C&C Demo',
  description: 'Showing remote control system for edge device',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en">
  <body>
    <div className="hero">
      To Build a sustainable world by<br />
      connecting mobility and clean envergy
    </div>
    <div className="main">
      <div className="stack-item top">
        <div className="left">SK Signet</div>
        <div className="middle">
          <a className="item" href="#">
            <i className="fas fa-phone"></i>
            &nbsp;
            <span>고객센터(1-800-1588-0101)</span></a
          >
        </div>
        <div className="right">
          <span>v1.0.2</span>
        </div>
      </div>
      {children}
    </div>
  </body>
</html>
  )
}
