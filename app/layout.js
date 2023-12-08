

import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './(components)/Nav';
import { NextUIProvider } from "@nextui-org/react";
/* import { config } from '@fortawesome/fontawesome-svg-core'; */
/* import '@fortawesome/fontawesome-svg-core/styles.css'; */
import SideBar from './(components)/SideBar';

/* config.autoAddCss = false; */
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LandingPage App',
  description: 'Generated by Ploydy',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Nav />
          <div className="flex h-screen overflow-hidden bg-page">
            <SideBar />
            <div className="flex-grow overflow-y-auto bg-page text-default-text">
              <NextUIProvider>
                {children}
              </NextUIProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
