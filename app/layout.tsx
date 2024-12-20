import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Monopoly Machine',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} flex h-dvh w-screen bg-blue-900 antialiased`}
      >
        <div className='hidden h-full w-full items-center justify-center sm:flex'>
          <h1 className='text-2xl font-bold text-white'>
            Mobile-only application
          </h1>
        </div>
        <div className='flex w-full sm:hidden'>{children}</div>
      </body>
    </html>
  )
}
