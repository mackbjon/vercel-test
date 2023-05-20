import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import ExpandingArrow from '@/components/expanding-arrow'

export const metadata = {
  title: 'pg-test',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

// export const runtime = 'edge'

// export const dynamic = 'force-static'
// Prisma does not support Edge without the Data Proxy currently

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className="relative flex min-h-screen flex-col items-center justify-center">
          <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Postgres on Vercel. Have To do this.
          </h1>
          {children}
        </main>
      </body>
    </html>
  )
}

// export default function RootLyout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.variable}>{children}</body>
//     </html>
//   )
// }
