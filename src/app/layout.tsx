import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tracking-App',
  description: 'A traceability application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex h-screen bg-gray-100'>
          <Sidebar />
          <section className='main-container'>
            <div className='w-full max-w-4xl'>{children}</div>
          </section>
        </main>
      </body>
    </html>
  )
}
