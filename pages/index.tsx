import { Inter } from '@next/font/google' 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-red-500'>
      <h1 className='text-black-500'>It works</h1>
    </div>
  )
}
