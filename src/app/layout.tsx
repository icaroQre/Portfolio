import './globals.scss'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'] 
})

export const metadata = {
  title: 'Ícaro Queiroz',
  description: 'Portfolio Front-End Developer Ícaro Queiroz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
