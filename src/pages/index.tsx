
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import MovieTmdb from '@/components/MovieTmdb'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen bg-#0c111b bg-opacity-75'>
      <Header/>
      <MovieTmdb/>
    </main>
  )
}