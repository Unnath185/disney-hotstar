
import { Inter } from 'next/font/google'
import Header from '@/components/LandingPage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex max-h-screen bg-black-500 bg-opacity-75'>
      <Header/>

    </main>
  )
}