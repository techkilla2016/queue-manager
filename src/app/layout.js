// "use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss'
import { Inter } from 'next/font/google'
// import { CookiesProvider } from 'react-cookie';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Techkilla',
  description: 'Power by techkilla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
