import { Inter } from '@next/font/google' 
import { Button }  from '../components/Button/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-red-500 text-center flex'>
      <Button
        outlined={false}
        size={'small'}
        onClick={() => document.location.href = "https://reactjs.org"}
      >Submit</Button>
    </div>
  )
}
