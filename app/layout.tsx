import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Camishop admin',
  description: 'Application for administration e-commerce'
}

export default async function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
