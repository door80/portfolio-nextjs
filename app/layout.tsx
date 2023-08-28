import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'],  weight: ['400', '500'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Michael Mercer',
  description: 'Portfolio of a frontend software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  )
}
