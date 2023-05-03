/* eslint-disable @next/next/no-css-tags */

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SK C&C Demo',
  description: 'Showing remote control system for edge device',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body>
        <div className="main">
          {children}
        </div>
      </body>
    </html>
  )
}
