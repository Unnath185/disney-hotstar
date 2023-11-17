
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import MovieTmdb from '@/components/MovieTmdb'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-row max-h-screen bg-black-500 bg-opacity-75'>
      <Header/>
      <MovieTmdb/>
    </main>
  )
}