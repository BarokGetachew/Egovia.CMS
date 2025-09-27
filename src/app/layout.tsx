import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@carbon/styles/css/styles.css'
import './globals.scss'
import { Theme } from '@carbon/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Egovia - Digital Government Solutions',
  description: 'Modern eGovernment CMS platform built with IBM Carbon Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme theme="g10">
          {children}
        </Theme>
      </body>
    </html>
  )
}
